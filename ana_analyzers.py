"""Analytical modules for THE-ANA."""
from __future__ import annotations

import logging
import math
import re
from collections import defaultdict
from typing import Any, Dict, List, Optional, Tuple

from ana_main import NLPProcessor, TEMPORAL_KEYWORDS, CONTRADICTORY_ADJECTIVES

LOGGER = logging.getLogger(__name__)


TROPE_LIBRARY: Dict[str, List[str]] = {
    "heroic_quest": ["chosen one", "prophecy", "mentor", "final battle"],
    "love_triangle": ["triangle", "unrequited", "secret admirer"],
    "redemption": ["atonement", "seeking forgiveness", "past sins"],
    "found_family": ["ragtag", "unlikely allies", "band together"],
    "tragedy": ["downfall", "fatal flaw", "inevitable"],
}

SIMILAR_WORK_REFERENCES: List[Tuple[str, List[str]]] = [
    ("Romeo and Juliet", ["star-crossed", "forbidden love", "family feud"]),
    ("The Hero's Journey", ["mentor", "threshold", "return with the elixir"]),
    ("Dystopian Rebellion", ["totalitarian", "rebellion", "uprising"]),
]


def _normalized_score(value: float, max_value: float) -> float:
    if max_value == 0:
        return 0.0
    return min(1.0, value / max_value)


class NarrativeContradictionDetector:
    """Detect factual, temporal, and descriptive contradictions."""

    def __init__(self, processor: NLPProcessor) -> None:
        self.processor = processor

    def analyze(self, text: str) -> Dict[str, Any]:
        sentences = self.processor.sentence_tokenize(text)
        doc = self.processor.doc(text) if text else None
        entities = self._extract_entities(doc)
        facts = self._extract_facts(sentences)
        contradictions = self._detect_fact_contradictions(facts)
        temporal_issues = self._detect_temporal_issues(sentences)
        character_issues = self._detect_character_issues(facts)
        severity_score = self._severity(len(contradictions), len(temporal_issues), len(character_issues))
        confidence_score = _normalized_score(len(facts) + len(entities), 20)
        recommendations = self._build_recommendations(contradictions, temporal_issues, character_issues)
        warnings = self._build_warnings(severity_score)
        return {
            "entities_found": entities,
            "facts_extracted": facts,
            "contradictions": contradictions,
            "temporal_issues": temporal_issues,
            "character_issues": character_issues,
            "severity_score": round(severity_score, 3),
            "recommendations": recommendations,
            "warnings": warnings,
            "confidence_score": round(confidence_score, 3),
        }

    def _extract_entities(self, doc) -> List[str]:
        entities: List[str] = []
        if doc is not None:
            for ent in doc.ents:
                if ent.label_ in {"PERSON", "ORG", "GPE", "LOC"}:
                    entities.append(ent.text)
        if not entities:
            return list(dict.fromkeys(re.findall(r"\b[A-Z][a-z]+\b", doc.text if doc else "")))
        return list(dict.fromkeys(entities))

    def _extract_facts(self, sentences: List[str]) -> List[Dict[str, Any]]:
        facts: List[Dict[str, Any]] = []
        for index, sentence in enumerate(sentences):
            match = re.search(r"(\b[A-Z][a-zA-Z]+\b.*?\b(?:is|was|are|has|had|can|cannot|never)\b.*)", sentence)
            if not match:
                continue
            fragment = match.group(1)
            subject_match = re.match(r"(\b[A-Z][a-zA-Z]+\b)", fragment)
            subject = subject_match.group(1) if subject_match else "Unknown"
            polarity = "negative" if re.search(r"\b(not|never|cannot|no longer)\b", fragment.lower()) else "positive"
            descriptor_match = re.search(r"\b(?:is|was|are|has|had|can|cannot|never)\b(.*)", fragment)
            descriptor = descriptor_match.group(1).strip() if descriptor_match else fragment
            facts.append(
                {
                    "sentence_index": index,
                    "subject": subject,
                    "descriptor": descriptor,
                    "polarity": polarity,
                    "text": sentence,
                }
            )
        return facts

    def _detect_fact_contradictions(self, facts: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        contradictions: List[Dict[str, Any]] = []
        if len(facts) < 2:
            return contradictions
        for i, fact_i in enumerate(facts):
            for j in range(i + 1, len(facts)):
                fact_j = facts[j]
                sim = self._sentence_similarity(fact_i["descriptor"], fact_j["descriptor"])
                if 0.3 <= sim <= 0.8 and fact_i["subject"] == fact_j["subject"]:
                    if fact_i["polarity"] != fact_j["polarity"]:
                        contradictions.append(
                            {
                                "subject": fact_i["subject"],
                                "first_fact": fact_i["text"],
                                "second_fact": fact_j["text"],
                                "type": "fact_contradiction",
                                "similarity": round(sim, 3),
                            }
                        )
        return contradictions

    def _sentence_similarity(self, a: str, b: str) -> float:
        tokens_a = set(re.findall(r"[a-zA-Z]+", a.lower()))
        tokens_b = set(re.findall(r"[a-zA-Z]+", b.lower()))
        if not tokens_a or not tokens_b:
            return 0.0
        intersection = len(tokens_a & tokens_b)
        denominator = math.sqrt(len(tokens_a) * len(tokens_b))
        if denominator == 0:
            return 0.0
        return intersection / denominator

    def _detect_temporal_issues(self, sentences: List[str]) -> List[Dict[str, Any]]:
        issues: List[Dict[str, Any]] = []
        for i, sentence_i in enumerate(sentences):
            markers_i = self._temporal_markers(sentence_i)
            if not markers_i:
                continue
            for j in range(i + 1, len(sentences)):
                sentence_j = sentences[j]
                markers_j = self._temporal_markers(sentence_j)
                if not markers_j:
                    continue
                if markers_i.get("past") and markers_j.get("future"):
                    issues.append(
                        {
                            "first_sentence": sentence_i,
                            "second_sentence": sentence_j,
                            "type": "temporal_shift",
                            "detail": "Conflicting temporal references detected",
                        }
                    )
        return issues

    def _temporal_markers(self, sentence: str) -> Dict[str, bool]:
        sentence_lower = sentence.lower()
        markers = {category: any(token in sentence_lower for token in keywords) for category, keywords in TEMPORAL_KEYWORDS.items()}
        return markers

    def _detect_character_issues(self, facts: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        issues: List[Dict[str, Any]] = []
        grouped: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
        for fact in facts:
            grouped[fact["subject"]].append(fact)
        for subject, subject_facts in grouped.items():
            descriptors = [fact["descriptor"].lower() for fact in subject_facts]
            for adjective, opposites in CONTRADICTORY_ADJECTIVES.items():
                if adjective in " ".join(descriptors) and any(opposite in " ".join(descriptors) for opposite in opposites):
                    issues.append(
                        {
                            "subject": subject,
                            "type": "character_descriptor_conflict",
                            "detail": f"Conflicting traits for {subject}",
                        }
                    )
        return issues

    def _severity(self, contradictions: int, temporal: int, character: int) -> float:
        weight = contradictions * 0.5 + temporal * 0.3 + character * 0.2
        return min(1.0, weight)

    def _build_recommendations(
        self,
        contradictions: List[Dict[str, Any]],
        temporal: List[Dict[str, Any]],
        character: List[Dict[str, Any]],
    ) -> List[str]:
        recs: List[str] = []
        if contradictions:
            recs.append("Align factual statements across scenes to preserve continuity.")
        if temporal:
            recs.append("Audit temporal markers to ensure consistent chronology.")
        if character:
            recs.append("Clarify core character traits before introducing reversals.")
        if not recs:
            recs.append("No critical contradictions detected; continue enriching detail.")
        return recs

    def _build_warnings(self, severity: float) -> List[str]:
        if severity >= 0.8:
            return ["High severity contradictions detected; immediate revision recommended."]
        if severity >= 0.5:
            return ["Moderate contradictions present; review key scenes for alignment."]
        return []


class OriginalityBenchmarkAnalyzer:
    """Estimate originality relative to common tropes and structures."""

    def __init__(self, processor: NLPProcessor) -> None:
        self.processor = processor

    def analyze(self, text: str) -> Dict[str, Any]:
        sentences = self.processor.sentence_tokenize(text)
        length = len(sentences) or 1
        tropes_detected = self._detect_tropes(text)
        structure = self._assess_structure(sentences)
        similarity = self._estimate_similarity(text)
        uniqueness_factors = self._uniqueness(text, tropes_detected)
        originality_score = self._score_originality(tropes_detected, structure, uniqueness_factors)
        confidence = _normalized_score(len(tropes_detected.get("overall", [])) + length, 30)
        return {
            "originality_score": round(originality_score, 2),
            "tropes_detected": tropes_detected,
            "plot_structure": structure,
            "similar_works": similarity,
            "uniqueness_factors": uniqueness_factors,
            "recommendations": self._build_recommendations(originality_score, tropes_detected),
            "confidence_score": round(confidence, 3),
        }

    def _detect_tropes(self, text: str) -> Dict[str, List[str]]:
        text_lower = text.lower()
        matches: Dict[str, List[str]] = {category: [] for category in TROPE_LIBRARY}
        overall_matches: List[str] = []
        for category, keywords in TROPE_LIBRARY.items():
            for keyword in keywords:
                if keyword in text_lower:
                    matches[category].append(keyword)
                    overall_matches.append(keyword)
        matches["overall"] = overall_matches
        return matches

    def _assess_structure(self, sentences: List[str]) -> Dict[str, Any]:
        if not sentences:
            return {
                "adherence_score": 0.0,
                "beats": {},
                "notes": "No plot structure detectable.",
            }
        third = max(len(sentences) // 3, 1)
        segments = {
            "setup": sentences[:third],
            "confrontation": sentences[third : 2 * third],
            "resolution": sentences[2 * third :],
        }
        beat_keywords = {
            "setup": ["ordinary world", "call", "introduction", "status quo"],
            "confrontation": ["conflict", "challenge", "struggle", "obstacle"],
            "resolution": ["climax", "resolution", "return", "transformation"],
        }
        beat_presence = {}
        for beat, seg_sentences in segments.items():
            joined = " ".join(seg_sentences).lower()
            beat_presence[beat] = any(keyword in joined for keyword in beat_keywords[beat])
        adherence = sum(beat_presence.values()) / 3.0
        return {
            "adherence_score": round(adherence, 2),
            "beats": beat_presence,
            "notes": "Classical three-act distribution evaluated.",
        }

    def _estimate_similarity(self, text: str) -> List[Dict[str, Any]]:
        similarities: List[Dict[str, Any]] = []
        text_lower = text.lower()
        for title, markers in SIMILAR_WORK_REFERENCES:
            overlap = sum(1 for marker in markers if marker in text_lower)
            if overlap:
                similarities.append({"work": title, "overlap": overlap, "note": "Heuristic thematic similarity."})
        return similarities

    def _uniqueness(self, text: str, tropes: Dict[str, List[str]]) -> List[str]:
        uniqueness: List[str] = []
        if len(tropes.get("overall", [])) <= 1:
            uniqueness.append("Low trope density suggests original framing.")
        if re.search(r"non-linear|fragmented|epistolary", text.lower()):
            uniqueness.append("Non-traditional structure detected.")
        rare_words = [word for word in re.findall(r"[a-zA-Z]+", text.lower()) if len(word) > 8]
        if len(set(rare_words)) > 15:
            uniqueness.append("Rich descriptive vocabulary enhances uniqueness.")
        if not uniqueness:
            uniqueness.append("Distinctive elements limited; consider unexpected twists.")
        return uniqueness

    def _score_originality(self, tropes: Dict[str, List[str]], structure: Dict[str, Any], uniqueness: List[str]) -> float:
        base = 10.0
        trope_penalty = len(tropes.get("overall", [])) * 0.5
        structure_penalty = max(0.0, 1.5 - (structure.get("adherence_score") or 0) * 1.5)
        uniqueness_bonus = min(3.0, len([item for item in uniqueness if "Distinctive" not in item]) * 0.8)
        score = base - trope_penalty - structure_penalty + uniqueness_bonus
        return max(0.0, min(10.0, score))

    def _build_recommendations(self, score: float, tropes: Dict[str, List[str]]) -> List[str]:
        recommendations: List[str] = []
        if score < 5:
            recommendations.append("Introduce subversions for detected tropes to heighten originality.")
        if len(tropes.get("overall", [])) > 3:
            recommendations.append("Blend trope expectations with surprising stakes or settings.")
        if not recommendations:
            recommendations.append("Originality indicators strong; continue refining distinct voice.")
        return recommendations


__all__ = [
    "NarrativeContradictionDetector",
    "OriginalityBenchmarkAnalyzer",
]
