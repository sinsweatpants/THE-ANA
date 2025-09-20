"""FastAPI application exposing THE-ANA capabilities."""
from __future__ import annotations

import logging
import os
from pathlib import Path
from typing import Any, Dict, List, Optional

from fastapi import BackgroundTasks, FastAPI, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, Field

from ana_analyzers import NarrativeContradictionDetector, OriginalityBenchmarkAnalyzer
from ana_generators import CharacterDeepener, PlotSeedGenerator, SensoryDetailEnhancer
from ana_main import DatabaseManager, DialogueDynamicsAnalyzer, NLPProcessor

LOGGER = logging.getLogger("ana_api")
if not LOGGER.handlers:
    log_path = Path(os.environ.get("ANA_LOG_PATH", "ana.log"))
    file_handler = logging.FileHandler(log_path)
    console_handler = logging.StreamHandler()
    formatter = logging.Formatter("[%(asctime)s] %(levelname)s %(name)s - %(message)s")
    file_handler.setFormatter(formatter)
    console_handler.setFormatter(formatter)
    LOGGER.addHandler(file_handler)
    LOGGER.addHandler(console_handler)
LOGGER.setLevel(logging.INFO)

SUPPORTED_ANALYSES = {
    "dialogue_dynamics",
    "narrative_contradiction",
    "originality_benchmark",
}

DATABASE_PATH = os.environ.get("ANA_DB_PATH", "ana_data.db")

# Initialize core services
DATABASE = DatabaseManager(DATABASE_PATH)
PROCESSOR = NLPProcessor()
DIALOGUE_ANALYZER = DialogueDynamicsAnalyzer(PROCESSOR)
CONTRADICTION_DETECTOR = NarrativeContradictionDetector(PROCESSOR)
ORIGINALITY_ANALYZER = OriginalityBenchmarkAnalyzer(PROCESSOR)
PLOT_GENERATOR = PlotSeedGenerator()
CHARACTER_DEEPENER = CharacterDeepener()
SENSORY_ENHANCER = SensoryDetailEnhancer(PROCESSOR)


def _default_analysis_types() -> List[str]:
    return ["dialogue_dynamics", "narrative_contradiction", "originality_benchmark"]


class AnalysisRequest(BaseModel):
    text: str = Field(..., description="Narrative text to analyze.")
    analysis_types: Optional[List[str]] = Field(default_factory=_default_analysis_types)
    priority: str = Field(default="normal")
    metadata: Optional[Dict[str, Any]] = None
    project_id: Optional[int] = Field(default=None, description="Optional project to associate with the text.")

    model_config = {
        "json_schema_extra": {
            "example": {
                "text": "Lena: We need to leave now. Tomas: Wait, it's not safe yet.",
                "analysis_types": ["dialogue_dynamics"],
                "priority": "high",
            }
        }
    }


class PlotSeedRequest(BaseModel):
    base_idea: str
    character_info: Optional[str] = None
    genre: Optional[str] = None
    target_length: Optional[int] = None
    project_id: Optional[int] = None


class CharacterDeepeningRequest(BaseModel):
    character_description: str
    context: Optional[str] = None
    project_id: Optional[int] = None


class SensoryEnhancementRequest(BaseModel):
    scene_text: str
    enhancement_focus: List[str]
    intensity_level: int = Field(ge=1, le=5, default=3)
    project_id: Optional[int] = None


class ProjectCreateRequest(BaseModel):
    name: str
    metadata: Optional[Dict[str, Any]] = None


app = FastAPI(title="THE-ANA", description="Advanced narrative analysis and assistance API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event() -> None:
    LOGGER.info("THE-ANA API startup complete. Database at %s", DATABASE_PATH)


@app.get("/", response_class=HTMLResponse)
async def index() -> str:
    return (
        "<html><head><title>THE-ANA API</title>"
        "<style>body{font-family:Arial,Helvetica,sans-serif;margin:2rem;line-height:1.6;max-width:960px;}"
        "code{background:#f5f5f5;padding:2px 4px;border-radius:3px;}"
        "h1{margin-bottom:1rem;}ul{margin-left:1.5rem;}section{margin-bottom:1.5rem;}</style>"
        "</head><body>"
        "<h1>THE-ANA Service Endpoints</h1>"
        "<section><h2>Analysis</h2><ul>"
        "<li><code>POST /api/analyze</code> – run dialogue, contradiction, and originality analyzers.</li>"
        "</ul></section>"
        "<section><h2>Generation</h2><ul>"
        "<li><code>POST /api/generate/plot-seeds</code> – produce guided plot seeds.</li>"
        "<li><code>POST /api/generate/character-deepening</code> – expand character dossiers.</li>"
        "<li><code>POST /api/generate/sensory-enhancement</code> – enhance sensory detail in scenes.</li>"
        "</ul></section>"
        "<section><h2>Projects</h2><ul>"
        "<li><code>POST /api/projects</code> – register a project.</li>"
        "<li><code>GET /api/projects</code> – list registered projects.</li>"
        "</ul></section>"
        "<section><h2>Health</h2><ul>"
        "<li><code>GET /api/health</code> – retrieve service readiness.</li>"
        "</ul></section>"
        "</body></html>"
    )


@app.get("/api/health")
async def health() -> Dict[str, Any]:
    db_ok = DATABASE.health()
    health_report = {
        "database": "ok" if db_ok else "degraded",
        "nlp": {
            "spacy_model": PROCESSOR.model is not None,
            "sentiment_ready": PROCESSOR.sentiment_analyzer is not None,
        },
        "analyzers": {
            "dialogue_dynamics": True,
            "narrative_contradiction": True,
            "originality_benchmark": True,
        },
        "generators": {
            "plot_seed": True,
            "character_deepener": True,
            "sensory_enhancer": True,
        },
    }
    return health_report


@app.post("/api/projects")
async def create_project(request: ProjectCreateRequest) -> Dict[str, Any]:
    project_id = DATABASE.create_project(request.name, request.metadata)
    LOGGER.info("Created project %s", project_id)
    return {"id": project_id, "name": request.name, "metadata": request.metadata or {}}


@app.get("/api/projects")
async def list_projects() -> Dict[str, Any]:
    projects = DATABASE.list_projects()
    return {"projects": projects}


@app.post("/api/analyze")
async def analyze(request: AnalysisRequest, background_tasks: BackgroundTasks) -> Dict[str, Any]:
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Text must not be empty.")
    requested = request.analysis_types or _default_analysis_types()
    unsupported = [analysis for analysis in requested if analysis not in SUPPORTED_ANALYSES]
    if unsupported:
        raise HTTPException(status_code=400, detail=f"Unsupported analysis types: {', '.join(unsupported)}")

    text_metadata = request.metadata or {}
    text_metadata["priority"] = request.priority
    text_id = DATABASE.save_text(request.project_id, request.text, text_metadata)

    results: List[Dict[str, Any]] = []
    for analysis_type in requested:
        if analysis_type == "dialogue_dynamics":
            analysis_result = DIALOGUE_ANALYZER.analyze(request.text)
        elif analysis_type == "narrative_contradiction":
            analysis_result = CONTRADICTION_DETECTOR.analyze(request.text)
        elif analysis_type == "originality_benchmark":
            analysis_result = ORIGINALITY_ANALYZER.analyze(request.text)
        else:  # pragma: no cover - safeguarded by earlier validation
            continue
        confidence = analysis_result.get("confidence_score")
        serialized = jsonable_encoder(analysis_result)
        record_id = DATABASE.save_analysis_result(request.project_id, text_id, analysis_type, serialized, confidence)
        results.append(
            {
                "analysis_type": analysis_type,
                "result": analysis_result,
                "record_id": record_id,
            }
        )
    background_tasks.add_task(LOGGER.info, "Analysis persisted for text %s", text_id)
    return {
        "text_id": text_id,
        "project_id": request.project_id,
        "items": results,
    }


@app.post("/api/generate/plot-seeds")
async def generate_plot_seeds(request: PlotSeedRequest) -> Dict[str, Any]:
    payload = PLOT_GENERATOR.generate(
        base_idea=request.base_idea,
        character_info=request.character_info,
        genre=request.genre,
        target_length=request.target_length,
    )
    record_id = DATABASE.save_generation_result(
        request.project_id,
        "plot_seed",
        {"base_idea": request.base_idea, "genre": request.genre, "target_length": request.target_length},
        jsonable_encoder(payload),
        payload.get("quality_score"),
    )
    return {"generation_type": "plot_seed", "result": payload, "record_id": record_id}


@app.post("/api/generate/character-deepening")
async def generate_character_profile(request: CharacterDeepeningRequest) -> Dict[str, Any]:
    profile = CHARACTER_DEEPENER.deepen(request.character_description, request.context)
    name = request.character_description.split()[0] if request.character_description else "Character"
    record_id = DATABASE.save_character_profile(
        request.project_id,
        name,
        request.character_description,
        jsonable_encoder(profile),
        {"enhancement_score": profile.get("enhancement_score"), "quality_score": profile.get("quality_score")},
    )
    return {"generation_type": "character_deepening", "result": profile, "record_id": record_id}


@app.post("/api/generate/sensory-enhancement")
async def enhance_sensory_scene(request: SensoryEnhancementRequest) -> Dict[str, Any]:
    if not request.scene_text.strip():
        raise HTTPException(status_code=400, detail="Scene text must not be empty.")
    payload = SENSORY_ENHANCER.enhance(request.scene_text, request.enhancement_focus, request.intensity_level)
    record_id = DATABASE.save_generation_result(
        request.project_id,
        "sensory_enhancement",
        jsonable_encoder(request.model_dump()),
        jsonable_encoder(payload),
        payload.get("quality_score"),
    )
    return {"generation_type": "sensory_enhancement", "result": payload, "record_id": record_id}


__all__ = ["app"]
