import importlib
import os
import sys

import asyncio
import httpx
import pytest


@pytest.fixture(scope="session")
def api_module(tmp_path_factory):
    db_dir = tmp_path_factory.mktemp("ana_db")
    db_path = db_dir / "test.db"
    os.environ["ANA_DB_PATH"] = str(db_path)
    if "ana_api" in sys.modules:
        sys.modules.pop("ana_api")
    module = importlib.import_module("ana_api")
    return module


def test_api_endpoints(api_module):
    async def run_flow():
        app = api_module.app
        transport = httpx.ASGITransport(app=app, lifespan="on")
        async with httpx.AsyncClient(transport=transport, base_url="http://testserver") as client:
            project_resp = await client.post("/api/projects", json={"name": "Test Project"})
            assert project_resp.status_code == 200
            project_id = project_resp.json()["id"]

            analyze_resp = await client.post(
                "/api/analyze",
                json={
                    "text": "Lena: Move now. Tomas: Wait, please. Lena: No, danger grows.",
                    "analysis_types": ["dialogue_dynamics", "narrative_contradiction"],
                    "project_id": project_id,
                },
            )
            assert analyze_resp.status_code == 200
            analyze_payload = analyze_resp.json()
            assert analyze_payload["items"]

            plot_resp = await client.post(
                "/api/generate/plot-seeds",
                json={
                    "base_idea": "A sudden eclipse reveals hidden runes.",
                    "genre": "fantasy",
                    "project_id": project_id,
                },
            )
            assert plot_resp.status_code == 200
            assert len(plot_resp.json()["result"]["plot_seeds"]) == 5

            character_resp = await client.post(
                "/api/generate/character-deepening",
                json={
                    "character_description": "A cautious diplomat mastering silence",
                    "context": "She must broker peace between rival planets.",
                    "project_id": project_id,
                },
            )
            assert character_resp.status_code == 200
            assert "enhancement_score" in character_resp.json()["result"]

            sensory_resp = await client.post(
                "/api/generate/sensory-enhancement",
                json={
                    "scene_text": "The hall trembled with whispers.",
                    "enhancement_focus": ["sight", "sound"],
                    "intensity_level": 2,
                    "project_id": project_id,
                },
            )
            assert sensory_resp.status_code == 200
            sensory_payload = sensory_resp.json()
            assert sensory_payload["result"]["applied_senses"]

            projects_resp = await client.get("/api/projects")
            assert projects_resp.status_code == 200
            assert projects_resp.json()["projects"]

            health_resp = await client.get("/api/health")
            assert health_resp.status_code == 200
            assert health_resp.json()["database"] in {"ok", "degraded"}

    asyncio.run(run_flow())
