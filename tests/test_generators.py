import pytest

from ana_generators import CharacterDeepener, PlotSeedGenerator, SensoryDetailEnhancer
from ana_main import NLPProcessor


@pytest.fixture(scope="session")
def processor():
    return NLPProcessor()


def test_plot_seed_generator_produces_diverse_seeds():
    generator = PlotSeedGenerator()
    payload = generator.generate("A cryptic signal arrives from a forgotten colony.")
    assert len(payload["plot_seeds"]) == 5
    conflicts = {seed["conflict_type"] for seed in payload["plot_seeds"]}
    assert len(conflicts) >= 3
    assert payload["quality_score"] > 0


def test_character_deepener_returns_scores():
    deepener = CharacterDeepener()
    result = deepener.deepen("A weary archivist guarding secrets", "She is forced into politics")
    assert 0 < result["enhancement_score"] <= 1
    assert "quality_score" in result


def test_sensory_enhancer_inserts_details(processor):
    enhancer = SensoryDetailEnhancer(processor)
    scene = "The corridor was silent as the lights flickered."
    focus = ["sight", "sound", "smell"]
    result = enhancer.enhance(scene, focus, intensity_level=3)
    assert set(result["applied_senses"]) == set(focus)
    for sense in focus:
        assert sense in " ".join(result["inserted_details"])
    assert scene.split(".")[0] in result["enhanced_text"]
