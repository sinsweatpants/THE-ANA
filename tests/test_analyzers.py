import textwrap
import pytest

from ana_analyzers import NarrativeContradictionDetector, OriginalityBenchmarkAnalyzer
from ana_main import DialogueDynamicsAnalyzer, NLPProcessor


@pytest.fixture(scope="session")
def processor():
    return NLPProcessor()


def test_dialogue_analyzer_outputs_metrics(processor):
    analyzer = DialogueDynamicsAnalyzer(processor)
    text = textwrap.dedent("""
        Lena: We need to move now.
        Tomas: Wait! I just need one more minute.
        Lena: No, we cannot stay; it's dangerous.
        Tomas: Are you giving orders now?
        Lena: If I must.
    """).strip()
    result = analyzer.analyze(text)
    assert result["dialogue_count"] >= 4
    assert any(item["power_score"] >= 0 for item in result["power_dynamics"])
    assert result["interaction_patterns"]["most_common_transitions"]
    assert result["recommendations"], "Expected recommendations to be generated"


def test_contradiction_detector_identifies_temporal_character_issues(processor):
    detector = NarrativeContradictionDetector(processor)
    text = (
        "Mara is calm and composed. "
        "Yesterday she completed the mission without fear. "
        "Tomorrow she completed the mission again, according to the report. "
        "Mara was suddenly furious at the sight. "
        "Mara is calm even now."
    )
    result = detector.analyze(text)
    assert result["temporal_issues"], "Temporal conflicts should be detected"
    assert result["character_issues"], "Character descriptor conflicts should be detected"
    assert result["severity_score"] > 0


def test_originality_analyzer_scores_tropes(processor):
    analyzer = OriginalityBenchmarkAnalyzer(processor)
    text = (
        "The chosen one hears a prophecy and meets a wise mentor. "
        "They face relentless conflict, gathering unlikely allies, and endure a final battle. "
        "The return with the elixir heals the fractured realm."
    )
    result = analyzer.analyze(text)
    assert result["plot_structure"]["adherence_score"] > 0
    assert len(result["tropes_detected"]["overall"]) >= 1
    assert 0 <= result["originality_score"] <= 10
