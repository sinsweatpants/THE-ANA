# THE-ANA – Advanced Narrative Assistant

THE-ANA is a production-ready writing companion that blends deep narrative analysis with guided creative generation. It offers dialogue power analysis, contradiction detection, originality benchmarking, and creative utilities that expand plots, deepen characters, and enrich scenes. All capabilities are exposed through a FastAPI service backed by SQLite storage and resilient NLP tooling.

## Features

### Analytical modules
- **Dynamic Dialogue Analyzer** – maps speaker turns, power balances, and emotional arcs, complete with actionable recommendations.
- **Narrative Contradiction Detector** – flags factual, temporal, and character descriptor conflicts with severity scores.
- **Originality & Benchmarking Analyzer** – evaluates trope density, structure adherence, and heuristic similarity to known works.

### Generative modules
- **Plot Seed Generator** – delivers five curated plot starters with conflict profiles, stakes, and uniqueness factors.
- **Character Deepener** – expands raw descriptions into psychologically grounded dossiers with enhancement metrics.
- **Sensory Detail Enhancer** – injects targeted sensory language while tracking coverage and quality improvements.

### Platform services
- **FastAPI web service** with typed request/response models, open CORS policy, and structured logging.
- **SQLite persistence** for projects, texts, analytical outputs, character dossiers, and generation runs.
- **Graceful fallbacks** whenever spaCy models, transformer pipelines, or NLTK resources cannot be downloaded.

## Installation

1. Ensure Python 3.11 or later is available.
2. Upgrade pip and install the project:
   ```bash
   pip install -U pip
   pip install .
   # alternatively, using uv
   # uv pip install .
   ```
3. The first application start will attempt to fetch required NLTK and spaCy resources. If downloads are blocked, lightweight heuristics are used automatically.

## Running the service

Launch the API with:
```bash
uvicorn ana_api:app --host 0.0.0.0 --port 8000 --reload
```

### Health check
- `GET /api/health` returns readiness information for the database, NLP stack, and analyzer/generator components.

### Core endpoints
- `POST /api/analyze` – run any combination of dialogue dynamics, contradiction detection, and originality benchmarking.
- `POST /api/generate/plot-seeds` – request diversified plot seeds.
- `POST /api/generate/character-deepening` – expand a character description.
- `POST /api/generate/sensory-enhancement` – augment a scene with sensory detail.
- `POST /api/projects` / `GET /api/projects` – register and list writing projects.
- `GET /` – simple HTML landing page with endpoint documentation.

All responses include persistent record identifiers so that outputs can be retrieved from the SQLite database (`ana_data.db` by default, configurable through `ANA_DB_PATH`). Logs are written to `ana.log`; adjust the `ANA_LOG_PATH` variable if required.

## Testing

Run the automated suite with:
```bash
pytest -q
```

The tests cover analyzer behaviour, generator variety, and API integration (via `httpx.AsyncClient`).

## Notes on external resources

- spaCy attempts to load `en_core_web_sm`. If the model is unavailable and download fails, the service falls back to a blank English pipeline.
- The emotion classifier uses a transformer pipeline when available. Failures trigger keyword-based heuristics without interrupting analysis.
- NLTK sentiment analysis degrades gracefully to punctuation-based scoring if resources cannot be retrieved.

## Data storage overview

| Table | Purpose |
| --- | --- |
| `projects` | Registered writing initiatives and optional metadata. |
| `texts` | Source texts submitted for analysis. |
| `analysis_results` | Stored outputs from each analyzer run with confidence values. |
| `characters` | Character dossiers and associated scoring metadata. |
| `generation_results` | Plot seed and sensory enhancement payloads with quality scores. |

## Front-end assets

A minimal stylesheet is provided under `static/` to support the HTML landing page. The existing React assets in the repository remain available for future UI integration.
