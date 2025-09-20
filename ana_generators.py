"""Generation modules for THE-ANA."""
from __future__ import annotations

import hashlib
import random
import re
from dataclasses import dataclass
from typing import Any, Dict, List, Optional, Sequence

from ana_main import NLPProcessor


def _stable_seed(value: str) -> int:
    digest = hashlib.sha256(value.encode("utf-8")).hexdigest()
    return int(digest[:12], 16)


@dataclass
class PlotSeed:
    narrative: str
    conflict_type: str
    archetype: str
    setting: str
    theme: str
    complications: List[str]
    stakes: Dict[str, str]
    uniqueness_factor: str

    def as_dict(self) -> Dict[str, Any]:
        return {
            "narrative": self.narrative,
            "conflict_type": self.conflict_type,
            "archetype": self.archetype,
            "setting": self.setting,
            "theme": self.theme,
            "complications": self.complications,
            "stakes": self.stakes,
            "uniqueness_factor": self.uniqueness_factor,
        }


class PlotSeedGenerator:
    """Generate diversified plot seeds."""

    CONFLICT_TYPES = [
        "internal",
        "interpersonal",
        "societal",
        "metaphysical",
    ]

    ARCHETYPES = [
        "reluctant hero",
        "visionary mentor",
        "outsider detective",
        "unlikely guardian",
        "skeptical healer",
    ]

    THEMES = [
        "identity versus duty",
        "the price of truth",
        "reconciliation with the past",
        "resilience against conformity",
        "sacrifice and legacy",
    ]

    SETTINGS = [
        "flooded vertical city",
        "desert research colony",
        "memory-trading bazaar",
        "floating judicial island",
        "abandoned orbital conservatory",
    ]

    def __init__(self) -> None:
        self.random = random.Random()

    def generate(
        self,
        base_idea: str,
        character_info: str | None = None,
        genre: str | None = None,
        target_length: int | None = None,
    ) -> Dict[str, Any]:
        seed = self._seed_from_text(base_idea, character_info, genre, target_length)
        self.random.seed(seed)
        seeds: List[PlotSeed] = []
        for index in range(5):
            conflict = self.CONFLICT_TYPES[index % len(self.CONFLICT_TYPES)]
            archetype = self.random.choice(self.ARCHETYPES)
            setting = self.random.choice(self.SETTINGS)
            theme = self.random.choice(self.THEMES)
            complications = self._generate_complications(base_idea, conflict, genre)
            stakes = {
                "personal": self._personal_stake(base_idea, character_info),
                "immediate": f"Failure triggers {self.random.choice(['public unrest', 'familial rupture', 'environmental collapse', 'cultural exile'])}",
                "universal": f"Success could redefine {self.random.choice(['collective memory', 'legal norms', 'interplanetary alliances', 'ancestral traditions'])}",
            }
            uniqueness = self._uniqueness(base_idea, setting, theme)
            narrative = self._compose_narrative(base_idea, conflict, archetype, setting, theme, complications)
            seeds.append(
                PlotSeed(
                    narrative=narrative,
                    conflict_type=conflict,
                    archetype=archetype,
                    setting=setting,
                    theme=theme,
                    complications=complications,
                    stakes=stakes,
                    uniqueness_factor=uniqueness,
                )
            )
        quality_score = self._quality_score(seeds)
        return {
            "plot_seeds": [seed.as_dict() for seed in seeds],
            "quality_score": round(quality_score, 2),
            "diversity_score": round(self._diversity_score(seeds), 2),
        }

    def _seed_from_text(self, base_idea: str, character_info: Optional[str], genre: Optional[str], target_length: Optional[int]) -> int:
        composite = f"{base_idea}|{character_info or ''}|{genre or ''}|{target_length or ''}"
        return _stable_seed(composite)

    def _generate_complications(self, base_idea: str, conflict: str, genre: Optional[str]) -> List[str]:
        fragments = [
            f"a revelation that {base_idea[:40].lower()} reshapes loyalties",
            "a secondary faction leveraging misinformation",
            "an ally whose secret agenda surfaces",
            "technology that malfunctions at pivotal moments",
            "ancestral obligations clashing with present goals",
        ]
        if genre and "mystery" in genre.lower():
            fragments.append("false solutions that implicate cherished allies")
        if conflict == "metaphysical":
            fragments.append("dreamscapes leaking into reality")
        if conflict == "internal":
            return fragments[:3]
        return self.random.sample(fragments, k=3)

    def _personal_stake(self, base_idea: str, character_info: Optional[str]) -> str:
        if character_info:
            return f"{character_info.split(',')[0].strip()} risks losing their moral compass."
        return f"Protagonist must confront what {base_idea[:30]} truly demands."

    def _uniqueness(self, base_idea: str, setting: str, theme: str) -> str:
        return f"{setting.title()} reframes {theme} through {base_idea[:50].lower()}"

    def _compose_narrative(
        self,
        base_idea: str,
        conflict: str,
        archetype: str,
        setting: str,
        theme: str,
        complications: Sequence[str],
    ) -> str:
        opening = f"In a {setting}, a {archetype} faces {conflict} conflict when {base_idea.strip()}."
        return (
            opening
            + f" Complications arise from {complications[0]}, while {complications[1]}"
            + f" and {complications[2]} force choices themed around {theme}."
        )

    def _quality_score(self, seeds: Sequence[PlotSeed]) -> float:
        diversity = self._diversity_score(seeds)
        complexity = sum(len(seed.complications) for seed in seeds) / (len(seeds) * 3)
        uniqueness = len({seed.uniqueness_factor for seed in seeds}) / len(seeds)
        return (diversity + complexity + uniqueness) * 3

    def _diversity_score(self, seeds: Sequence[PlotSeed]) -> float:
        conflicts = {seed.conflict_type for seed in seeds}
        settings = {seed.setting for seed in seeds}
        return (len(conflicts) + len(settings)) / 10


class CharacterDeepener:
    """Create enriched character dossiers."""

    MBTI_PAIRS = [
        ("INFJ", "shadow: ESTP"),
        ("ENTP", "shadow: ISFJ"),
        ("ISFP", "shadow: ENTJ"),
        ("ENFJ", "shadow: ISTP"),
    ]

    ADAPTIVE_MECHANISMS = [
        "strategic detachment",
        "radical empathy",
        "quiet observation",
        "compulsive problem-solving",
    ]

    def __init__(self) -> None:
        self.random = random.Random()

    def deepen(self, description: str, context: Optional[str] = None) -> Dict[str, Any]:
        seed = _stable_seed(description + (context or ""))
        self.random.seed(seed)
        mbti, shadow = self.random.choice(self.MBTI_PAIRS)
        hidden_talent = self.random.choice([
            "micro-gesture reading",
            "forensic-level recall",
            "code-switching across dialects",
            "synesthetic composition",
        ])
        secret_fear = self.random.choice([
            "becoming irrelevant",
            "repeating ancestral mistakes",
            "losing agency to institutions",
            "intimacy exposing their contradictions",
        ])
        suppressed_desire = self.random.choice([
            "to pursue forbidden scholarship",
            "to abandon leadership",
            "to reconcile with an estranged sibling",
            "to retreat into anonymity",
        ])
        conflict_driver = self.random.choice([
            "duty versus authenticity",
            "logic fighting intuition",
            "loyalty against emerging truth",
        ])
        formative_event = self.random.choice([
            "a failed expedition that cost lives",
            "whistleblowing against a mentor",
            "discovering an erased lineage",
            "surviving a civic uprising",
        ])
        coping_style = self.random.choice(self.ADAPTIVE_MECHANISMS)
        enhancement_score = round(0.6 + self.random.random() * 0.4, 2)
        quality_score = round((enhancement_score + 0.5) * 0.8, 2)
        dossier = {
            "mbti_profile": mbti,
            "shadow_profile": shadow,
            "hidden_talent": hidden_talent,
            "secret_fear": secret_fear,
            "suppressed_desire": suppressed_desire,
            "core_conflict": conflict_driver,
            "formative_event": formative_event,
            "coping_mechanism": coping_style,
            "enhancement_score": enhancement_score,
            "quality_score": quality_score,
        }
        if context:
            dossier["context_integration"] = f"Contextual pressure: {context[:120]}"
        return dossier


class SensoryDetailEnhancer:
    """Enhance scenes with sensory details."""

    SENSORY_TEMPLATES = {
        "sight": "Luminous motes haloed the edges of the scene, bending light in unexpected hues.",
        "sound": "A low timbre resonated beneath the dialogue, like wires humming in anticipation.",
        "smell": "The air carried a layered aroma of ozone, spice, and distant rain.",
        "taste": "A metallic tang lingered on the tongue, hinting at circuitry beneath the surface.",
        "touch": "Textures shifted from velvet-smooth rails to grit that caught beneath fingertips.",
    }

    def __init__(self, processor: NLPProcessor) -> None:
        self.processor = processor

    def enhance(self, scene_text: str, enhancement_focus: Sequence[str], intensity_level: int) -> Dict[str, Any]:
        sentences = self.processor.sentence_tokenize(scene_text) or [scene_text]
        enhanced_sentences = list(sentences)
        applied: List[str] = []
        insertions: List[str] = []
        intensity = max(1, min(intensity_level, 5))
        for sense in enhancement_focus:
            template = self.SENSORY_TEMPLATES.get(sense.lower())
            if not template:
                continue
            applied.append(sense.lower())
            insertion = f"{template[:-1]}, intensifying {sense.lower()} perception."
            insertions.append(insertion)
            position = min(len(enhanced_sentences), intensity) - 1
            enhanced_sentences.insert(position, insertion)
        enhanced_text = self._stitch(enhanced_sentences)
        coverage = len(applied) / max(len(self.SENSORY_TEMPLATES), 1)
        quality_score = round(0.5 + coverage + min(0.3, intensity * 0.05), 2)
        return {
            "enhanced_text": enhanced_text,
            "applied_senses": applied,
            "inserted_details": insertions,
            "quality_score": min(1.0, quality_score),
            "metadata": {
                "original_sentence_count": len(sentences),
                "enhanced_sentence_count": len(enhanced_sentences),
                "intensity": intensity,
                "sensory_coverage": round(coverage, 2),
            },
        }

    def _stitch(self, sentences: Sequence[str]) -> str:
        text = " ".join(sentence.rstrip(".") + ("." if not sentence.endswith(".") else "") for sentence in sentences)
        return re.sub(r"\s+", " ", text).strip()


__all__ = [
    "PlotSeedGenerator",
    "CharacterDeepener",
    "SensoryDetailEnhancer",
]
