"""Core modules for THE-ANA advanced writing assistant.

This module exposes shared data models, the SQLite database manager, the
``NLPProcessor`` utilities, and the ``DialogueDynamicsAnalyzer`` implementation.
All heavy resources (spaCy models, NLTK lexicons, transformer pipelines) are
loaded lazily with graceful degradation paths so the application remains fully
operational even in restricted environments.
"""
from __future__ import annotations

import json
import logging
import math
import os
import re
import sqlite3
import statistics
import threading
from collections import Counter
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional, Sequence, Tuple

try:
    import nltk
    from nltk.sentiment import SentimentIntensityAnalyzer
except Exception:  # pragma: no cover - fallback when NLTK is unavailable
    nltk = None
    SentimentIntensityAnalyzer = None  # type: ignore

try:
    import spacy
    from spacy.language import Language
    from spacy.tokens import Doc
except Exception:  # pragma: no cover - fallback
    spacy = None
    Language = None  # type: ignore
    Doc = None  # type: ignore

try:  # pragma: no cover - transformers are optional
    from transformers import pipeline
except Exception:  # pragma: no cover - fallback when transformers unavailable
    pipeline = None  # type: ignore

LOGGER = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Configuration constants
# ---------------------------------------------------------------------------
DEFAULT_DB_PATH = os.environ.get("ANA_DB_PATH", "ana_data.db")

DIALOGUE_POWER_WEIGHTS = {
    "word_weight": 0.35,
    "line_weight": 0.2,
    "question_weight": 0.1,
    "command_weight": 0.1,
    "sentiment_weight": 0.15,
    "interruption_penalty": 0.1,
}

EMOTION_KEYWORDS = {
    "joy": {"happy", "delighted", "joy", "excited", "pleased"},
    "anger": {"angry", "furious", "rage", "irritated", "annoyed"},
    "sadness": {"sad", "mournful", "cry", "melancholy", "upset"},
    "fear": {"afraid", "fear", "terrified", "anxious", "nervous"},
    "surprise": {"surprised", "astonished", "shocked", "startled"},
    "disgust": {"disgust", "revolted", "nauseated", "gross"},
}

TEMPORAL_KEYWORDS = {
    "past": {"yesterday", "ago", "last", "previous", "earlier"},
    "future": {"tomorrow", "next", "upcoming", "future", "soon"},
}

CONTRADICTORY_ADJECTIVES = {
    "tall": {"short"},
    "short": {"tall"},
    "brave": {"cowardly"},
    "cowardly": {"brave"},
    "calm": {"agitated", "furious"},
    "happy": {"sad", "miserable"},
    "alive": {"dead"},
    "warm": {"cold"},
}

# Ensure logging defaults
if not LOGGER.handlers:
    handler = logging.StreamHandler()
    formatter = logging.Formatter(
        "[%(asctime)s] %(levelname)s %(name)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    handler.setFormatter(formatter)
    LOGGER.addHandler(handler)
LOGGER.setLevel(logging.INFO)


# ---------------------------------------------------------------------------
# Utility functions
# ---------------------------------------------------------------------------
def _ensure_nltk_resources() -> None:
    """Ensure that required NLTK resources are present.

    The function attempts to download the VADER lexicon and Punkt tokenizer if
    they are missing. All download errors are caught and logged so that the
    application can continue operating with fallback heuristics.
    """

    if nltk is None:
        LOGGER.warning("NLTK is unavailable; sentiment analysis will degrade.")
        return
    resource_paths = {
        "vader_lexicon": "sentiment/vader_lexicon",
        "punkt": "tokenizers/punkt",
    }
    for resource, locator in resource_paths.items():
        try:
            nltk.data.find(locator)
            continue
        except LookupError:
            try:
                nltk.download(resource, quiet=True)
            except Exception as exc:  # pragma: no cover - network failure
                LOGGER.warning("Failed to download NLTK resource %s: %s", resource, exc)


def _load_spacy_model() -> Optional[Language]:
    """Load ``en_core_web_sm`` with graceful degradation."""

    if spacy is None:
        LOGGER.warning("spaCy is unavailable; falling back to blank English model.")
        return None
    try:
        return spacy.load("en_core_web_sm")
    except Exception as exc:
        LOGGER.warning("spaCy model load failed: %s", exc)
        try:
            from spacy.cli import download

            download("en_core_web_sm")
            return spacy.load("en_core_web_sm")
        except Exception as exc_inner:  # pragma: no cover - offline environments
            LOGGER.warning("spaCy download failed: %s", exc_inner)
            return spacy.blank("en")


def _load_emotion_pipeline():  # pragma: no cover - heavy dependency optional
    """Attempt to load a transformer pipeline for emotion detection."""

    if pipeline is None:
        return None
    try:
        return pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base")
    except Exception as exc:
        LOGGER.warning("Emotion model unavailable, using keyword heuristics: %s", exc)
        return None


# ---------------------------------------------------------------------------
# Database layer
# ---------------------------------------------------------------------------
class DatabaseManager:
    """Simple SQLite database manager with schema initialization."""

    def __init__(self, db_path: str = DEFAULT_DB_PATH) -> None:
        self.db_path = db_path
        self._lock = threading.Lock()
        self.initialize()

    def _connect(self) -> sqlite3.Connection:
        conn = sqlite3.connect(self.db_path, check_same_thread=False)
        conn.row_factory = sqlite3.Row
        return conn

    def initialize(self) -> None:
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS projects (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    metadata TEXT,
                    created_at TEXT NOT NULL
                )
                """
            )
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS texts (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    project_id INTEGER,
                    content TEXT NOT NULL,
                    metadata TEXT,
                    created_at TEXT NOT NULL,
                    FOREIGN KEY(project_id) REFERENCES projects(id)
                )
                """
            )
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS analysis_results (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    project_id INTEGER,
                    text_id INTEGER,
                    analysis_type TEXT NOT NULL,
                    result_json TEXT NOT NULL,
                    confidence REAL,
                    created_at TEXT NOT NULL,
                    FOREIGN KEY(project_id) REFERENCES projects(id),
                    FOREIGN KEY(text_id) REFERENCES texts(id)
                )
                """
            )
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS characters (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    project_id INTEGER,
                    name TEXT,
                    description TEXT,
                    data_json TEXT,
                    scores_json TEXT,
                    created_at TEXT NOT NULL,
                    FOREIGN KEY(project_id) REFERENCES projects(id)
                )
                """
            )
            cursor.execute(
                """
                CREATE TABLE IF NOT EXISTS generation_results (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    project_id INTEGER,
                    generation_type TEXT NOT NULL,
                    input_context TEXT,
                    result_json TEXT NOT NULL,
                    quality REAL,
                    created_at TEXT NOT NULL,
                    FOREIGN KEY(project_id) REFERENCES projects(id)
                )
                """
            )
            conn.commit()

    def create_project(self, name: str, metadata: Optional[Dict[str, Any]] = None) -> int:
        payload = json.dumps(metadata or {})
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO projects (name, metadata, created_at) VALUES (?, ?, ?)",
                (name, payload, datetime.now(timezone.utc).isoformat()),
            )
            conn.commit()
            return int(cursor.lastrowid)

    def list_projects(self) -> List[Dict[str, Any]]:
        with self._connect() as conn:
            rows = conn.execute(
                "SELECT id, name, metadata, created_at FROM projects ORDER BY created_at DESC"
            ).fetchall()
        projects = []
        for row in rows:
            metadata = json.loads(row["metadata"] or "{}")
            projects.append(
                {
                    "id": row["id"],
                    "name": row["name"],
                    "metadata": metadata,
                    "created_at": row["created_at"],
                }
            )
        return projects

    def save_text(self, project_id: Optional[int], content: str, metadata: Optional[Dict[str, Any]] = None) -> int:
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO texts (project_id, content, metadata, created_at) VALUES (?, ?, ?, ?)",
                (
                    project_id,
                    content,
                    json.dumps(metadata or {}),
                    datetime.now(timezone.utc).isoformat(),
                ),
            )
            conn.commit()
            return int(cursor.lastrowid)

    def save_analysis_result(
        self,
        project_id: Optional[int],
        text_id: Optional[int],
        analysis_type: str,
        result: Dict[str, Any],
        confidence: Optional[float] = None,
    ) -> int:
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO analysis_results (project_id, text_id, analysis_type, result_json, confidence, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    project_id,
                    text_id,
                    analysis_type,
                    json.dumps(result),
                    confidence,
                    datetime.now(timezone.utc).isoformat(),
                ),
            )
            conn.commit()
            return int(cursor.lastrowid)

    def save_character_profile(
        self,
        project_id: Optional[int],
        name: Optional[str],
        description: Optional[str],
        data: Dict[str, Any],
        scores: Dict[str, Any],
    ) -> int:
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO characters (project_id, name, description, data_json, scores_json, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    project_id,
                    name,
                    description,
                    json.dumps(data),
                    json.dumps(scores),
                    datetime.now(timezone.utc).isoformat(),
                ),
            )
            conn.commit()
            return int(cursor.lastrowid)

    def save_generation_result(
        self,
        project_id: Optional[int],
        generation_type: str,
        input_context: Optional[Dict[str, Any]],
        result: Dict[str, Any],
        quality: Optional[float] = None,
    ) -> int:
        with self._connect() as conn:
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO generation_results (project_id, generation_type, input_context, result_json, quality, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    project_id,
                    generation_type,
                    json.dumps(input_context or {}),
                    json.dumps(result),
                    quality,
                    datetime.now(timezone.utc).isoformat(),
                ),
            )
            conn.commit()
            return int(cursor.lastrowid)

    def health(self) -> bool:
        try:
            with self._connect() as conn:
                conn.execute("SELECT 1")
            return True
        except sqlite3.Error as exc:  # pragma: no cover - catastrophic failure
            LOGGER.error("Database health check failed: %s", exc)
            return False


# ---------------------------------------------------------------------------
# NLP Processor
# ---------------------------------------------------------------------------
class NLPProcessor:
    """Wrapper around spaCy and NLTK for the application."""

    def __init__(self) -> None:
        _ensure_nltk_resources()
        self.sentiment_analyzer = SentimentIntensityAnalyzer() if SentimentIntensityAnalyzer else None
        self.model = _load_spacy_model()
        self.emotion_model = _load_emotion_pipeline()
        self._sentence_splitter = self._build_sentence_splitter()

    def _build_sentence_splitter(self):
        if nltk is not None:
            try:
                nltk.data.find("tokenizers/punkt")
                return nltk.sent_tokenize
            except LookupError:
                pass
        # Fallback simple splitter
        return lambda text: re.split(r"(?<=[.!?])\s+", text.strip()) if text else []

    def doc(self, text: str) -> Optional[Doc]:
        if self.model is None:
            if spacy is None:
                return None
            return spacy.blank("en")(text)
        return self.model(text)

    def sentence_tokenize(self, text: str) -> List[str]:
        if not text.strip():
            return []
        splitter = self._sentence_splitter
        try:
            sentences = [s.strip() for s in splitter(text) if s and s.strip()]
        except Exception:
            sentences = [s.strip() for s in text.split(".") if s.strip()]
        return sentences

    def detect_speakers(self, text: str) -> List[str]:
        doc = self.doc(text)
        speakers: List[str] = []
        if doc is not None:
            for ent in doc.ents:
                if ent.label_ == "PERSON":
                    speakers.append(ent.text)
        if not speakers:
            candidates = re.findall(r"\b([A-Z][a-z]+)\b", text)
            speakers.extend(candidates)
        return list(dict.fromkeys(speakers))

    def analyze_sentiment(self, text: str) -> Dict[str, float]:
        if not text.strip():
            return {"neg": 0.0, "neu": 0.0, "pos": 0.0, "compound": 0.0}
        if self.sentiment_analyzer is None:
            score = min(1.0, max(-1.0, text.count("!") * 0.1 - text.count("?") * 0.05))
            return {"neg": max(0.0, -score), "neu": 1.0 - abs(score), "pos": max(0.0, score), "compound": score}
        return self.sentiment_analyzer.polarity_scores(text)

    def detect_emotion(self, text: str) -> str:
        text_lower = text.lower()
        if self.emotion_model is not None:  # pragma: no cover - heavy dependency
            try:
                result = self.emotion_model(text, top_k=1)
                if isinstance(result, list) and result:
                    label = result[0]["label"] if isinstance(result[0], dict) else result[0].get("label")
                    return label.lower()
            except Exception as exc:
                LOGGER.warning("Emotion pipeline inference failed: %s", exc)
        for emotion, keywords in EMOTION_KEYWORDS.items():
            if any(keyword in text_lower for keyword in keywords):
                return emotion
        return "neutral"

    def split_dialogue_turns(self, text: str) -> List[Dict[str, Any]]:
        if not text.strip():
            return []
        lines = re.split(r"\n+", text)
        turns: List[Dict[str, Any]] = []
        last_speaker = None
        for raw_line in lines:
            line = raw_line.strip()
            if not line:
                continue
            speaker = None
            content = line
            match = re.match(r"^([A-Z][\w\s]{0,30}?)[\s]*[:\-][\s]*(.+)$", line)
            if match:
                speaker = match.group(1).strip()
                content = match.group(2).strip()
            else:
                quote_match = re.search(r"[\"“](.+?)[\"”]", line)
                if quote_match:
                    content = quote_match.group(1)
                    before_quote = line[: quote_match.start()]
                    speaker_match = re.search(r"([A-Z][a-zA-Z]+)(?:\s+said|\s+asked|\s+replied|\s+shouted)", before_quote)
                    if speaker_match:
                        speaker = speaker_match.group(1)
            if speaker is None and last_speaker:
                if len(content.split()) <= 3:
                    speaker = last_speaker
            if speaker is None:
                candidates = self.detect_speakers(line)
                speaker = candidates[0] if candidates else "Narrator"
            turns.append({"speaker": speaker, "text": content})
            last_speaker = speaker
        return turns


# ---------------------------------------------------------------------------
# Dialogue Dynamics Analyzer
# ---------------------------------------------------------------------------
@dataclass
class SpeakerMetrics:
    speaker: str
    total_words: int = 0
    line_count: int = 0
    questions: int = 0
    commands: int = 0
    interruptions: int = 0
    sentiments: List[float] = field(default_factory=list)
    dominant_emotions: Counter = field(default_factory=Counter)

    def add_turn(self, text: str, sentiment: Dict[str, float], emotion: str, was_interruption: bool) -> None:
        words = text.split()
        self.total_words += len(words)
        self.line_count += 1
        self.questions += text.count("?")
        self.commands += 1 if re.search(r"^(please\s+)?(do|go|stop|listen|look|come)\b", text.lower()) else 0
        if was_interruption:
            self.interruptions += 1
        self.sentiments.append(sentiment["compound"])
        if emotion:
            self.dominant_emotions[emotion] += 1

    @property
    def avg_words_per_line(self) -> float:
        return self.total_words / self.line_count if self.line_count else 0.0

    @property
    def avg_sentiment(self) -> float:
        return _fmean(self.sentiments) if self.sentiments else 0.0

    @property
    def dominant_emotion(self) -> str:
        if not self.dominant_emotions:
            return "neutral"
        return self.dominant_emotions.most_common(1)[0][0]


class DialogueDynamicsAnalyzer:
    """Analyze dialogue power dynamics within a text."""

    def __init__(self, processor: NLPProcessor) -> None:
        self.processor = processor

    def analyze(self, text: str) -> Dict[str, Any]:
        turns = self.processor.split_dialogue_turns(text)
        speakers = [turn["speaker"] for turn in turns]
        unique_speakers = list(dict.fromkeys(speakers))
        metrics: Dict[str, SpeakerMetrics] = {speaker: SpeakerMetrics(speaker) for speaker in unique_speakers}

        transitions: Counter = Counter()
        last_speaker: Optional[str] = None
        sentiment_series: List[Dict[str, float]] = []

        for turn in turns:
            speaker = turn["speaker"]
            content = turn["text"]
            sentiment = self.processor.analyze_sentiment(content)
            emotion = self.processor.detect_emotion(content)
            was_interruption = last_speaker is not None and speaker != last_speaker and len(content.split()) <= 4
            metrics[speaker].add_turn(content, sentiment, emotion, was_interruption)
            if last_speaker is not None and speaker != last_speaker:
                transitions[(last_speaker, speaker)] += 1
            sentiment_series.append(sentiment)
            last_speaker = speaker

        power_scores = self._compute_power_scores(metrics)
        interaction_patterns = self._compute_interaction_patterns(transitions, turns)
        emotional_flow = self._compute_emotional_flow(sentiment_series)

        recommendations, warnings = self._build_recommendations(metrics, interaction_patterns, emotional_flow)
        speaker_payload = []
        for speaker, data in metrics.items():
            speaker_payload.append(
                {
                    "speaker": speaker,
                    "total_words": data.total_words,
                    "line_count": data.line_count,
                    "avg_words_per_line": round(data.avg_words_per_line, 2),
                    "interruptions": data.interruptions,
                    "questions": data.questions,
                    "commands": data.commands,
                    "avg_sentiment": round(data.avg_sentiment, 3),
                    "dominant_emotion": data.dominant_emotion,
                    "power_score": round(power_scores.get(speaker, 0.0), 3),
                }
            )

        confidence = self._confidence(unique_speakers, turns)
        result = {
            "dialogue_count": len(turns),
            "speakers": unique_speakers,
            "power_dynamics": speaker_payload,
            "interaction_patterns": interaction_patterns,
            "emotional_flow": emotional_flow,
            "recommendations": recommendations,
            "warnings": warnings,
            "confidence_score": confidence,
        }
        return result

    def _compute_power_scores(self, metrics: Dict[str, SpeakerMetrics]) -> Dict[str, float]:
        if not metrics:
            return {}
        totals = {
            "words": max((m.total_words for m in metrics.values()), default=1),
            "lines": max((m.line_count for m in metrics.values()), default=1),
            "questions": max((m.questions for m in metrics.values()), default=1),
            "commands": max((m.commands for m in metrics.values()), default=1),
            "interruptions": max((m.interruptions for m in metrics.values()), default=1),
            "sentiment": max((abs(m.avg_sentiment) for m in metrics.values()), default=1.0),
        }
        scores: Dict[str, float] = {}
        for speaker, data in metrics.items():
            normalized_sentiment = abs(data.avg_sentiment) / totals["sentiment"] if totals["sentiment"] else 0
            base_score = (
                DIALOGUE_POWER_WEIGHTS["word_weight"] * (data.total_words / totals["words"] if totals["words"] else 0)
                + DIALOGUE_POWER_WEIGHTS["line_weight"] * (data.line_count / totals["lines"] if totals["lines"] else 0)
                + DIALOGUE_POWER_WEIGHTS["question_weight"] * (data.questions / totals["questions"] if totals["questions"] else 0)
                + DIALOGUE_POWER_WEIGHTS["command_weight"] * (data.commands / totals["commands"] if totals["commands"] else 0)
                + DIALOGUE_POWER_WEIGHTS["sentiment_weight"] * normalized_sentiment
            )
            interruption_penalty = (
                DIALOGUE_POWER_WEIGHTS["interruption_penalty"] * (data.interruptions / totals["interruptions"] if totals["interruptions"] else 0)
            )
            scores[speaker] = max(0.0, base_score - interruption_penalty)
        return scores

    def _compute_interaction_patterns(self, transitions: Counter, turns: Sequence[Dict[str, Any]]) -> Dict[str, Any]:
        total_transitions = sum(transitions.values())
        most_common = [
            {"pair": list(pair), "count": count}
            for pair, count in transitions.most_common(3)
        ]
        probabilities = [count / total_transitions for count in transitions.values()] if total_transitions else []
        entropy = -sum(p * math.log(p, 2) for p in probabilities) if probabilities else 0.0
        turn_lengths = [len(turn["text"].split()) for turn in turns] if turns else []
        avg_turn_length = _fmean(turn_lengths) if turn_lengths else 0.0
        variance = _variance(turn_lengths)
        return {
            "most_common_transitions": most_common,
            "conversation_flow_entropy": round(entropy, 3),
            "average_turn_length": round(avg_turn_length, 2),
            "turn_length_variance": round(variance, 3),
        }

    def _compute_emotional_flow(self, sentiment_series: Sequence[Dict[str, float]]) -> Dict[str, Any]:
        if not sentiment_series:
            baseline = {"neg": 0.0, "neu": 0.0, "pos": 0.0, "compound": 0.0}
            return {
                "per_turn": [],
                "overall_sentiment_trend": 0.0,
                "emotional_volatility": 0.0,
                "sentiment_range": baseline,
            }
        compounds = [point["compound"] for point in sentiment_series]
        trend = compounds[-1] - compounds[0] if len(compounds) > 1 else compounds[0]
        volatility = _std(compounds) if len(compounds) > 1 else 0.0
        sentiment_range = {
            "neg": min(point["neg"] for point in sentiment_series),
            "neu": min(point["neu"] for point in sentiment_series),
            "pos": max(point["pos"] for point in sentiment_series),
            "compound": max(compounds) - min(compounds),
        }
        return {
            "per_turn": sentiment_series,
            "overall_sentiment_trend": round(trend, 3),
            "emotional_volatility": round(volatility, 3),
            "sentiment_range": sentiment_range,
        }

    def _build_recommendations(
        self,
        metrics: Dict[str, SpeakerMetrics],
        interaction: Dict[str, Any],
        emotional_flow: Dict[str, Any],
    ) -> Tuple[List[str], List[str]]:
        recommendations: List[str] = []
        warnings: List[str] = []

        if not metrics:
            warnings.append("No clear dialogue detected. Consider clarifying speaker cues.")
            return recommendations, warnings

        dominant_speaker = max(metrics.values(), key=lambda m: m.total_words)
        if dominant_speaker.total_words > sum(m.total_words for m in metrics.values()) * 0.6:
            warnings.append(
                f"{dominant_speaker.speaker} dominates the conversation. Introduce more balanced exchanges."
            )
        entropy = interaction.get("conversation_flow_entropy", 0.0)
        if entropy < 1.0 and len(metrics) > 1:
            recommendations.append("Encourage varied turn-taking patterns to create dynamic pacing.")
        if emotional_flow.get("emotional_volatility", 0.0) < 0.1:
            recommendations.append("Layer contrasting emotional beats to enrich the dialogue arc.")
        if any(m.questions == 0 for m in metrics.values()):
            recommendations.append("Use questions to reveal curiosity or power challenges between speakers.")
        if any(m.interruptions > 2 for m in metrics.values()):
            warnings.append("Frequent interruptions detected. Ensure they serve dramatic purpose.")
        return recommendations, warnings

    def _confidence(self, speakers: Sequence[str], turns: Sequence[Dict[str, Any]]) -> float:
        if not turns:
            return 0.0
        unique = len(speakers)
        ratio = unique / max(len(turns), 1)
        return round(min(1.0, 0.5 + ratio), 3)


def _fmean(values: Sequence[float]) -> float:
    return statistics.fmean(values) if values else 0.0


def _variance(values: Sequence[float]) -> float:
    return statistics.pvariance(values) if len(values) > 1 else 0.0


def _std(values: Sequence[float]) -> float:
    return statistics.pstdev(values) if len(values) > 1 else 0.0


__all__ = [
    "DatabaseManager",
    "DialogueDynamicsAnalyzer",
    "NLPProcessor",
    "SpeakerMetrics",
]
