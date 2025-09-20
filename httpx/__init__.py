"""Simplified httpx-compatible client for local testing."""
from __future__ import annotations

import asyncio
from dataclasses import dataclass
from typing import Any, Dict, Optional


@dataclass
class Response:
    status_code: int
    _json: Optional[Any]
    text: str

    def json(self) -> Any:
        if self._json is None:
            raise ValueError("No JSON content available")
        return self._json


class ASGITransport:
    def __init__(self, app, lifespan: str | None = None) -> None:
        self.app = app
        self.lifespan = lifespan or "auto"


class AsyncClient:
    def __init__(self, transport: ASGITransport, base_url: str = "http://testserver") -> None:
        self._transport = transport
        self.base_url = base_url

    async def __aenter__(self) -> "AsyncClient":
        return self

    async def __aexit__(self, exc_type, exc, tb) -> None:
        return None

    async def post(self, url: str, json: Optional[Dict[str, Any]] = None) -> Response:
        return await self._request("POST", url, json=json)

    async def get(self, url: str, params: Optional[Dict[str, Any]] = None) -> Response:
        return await self._request("GET", url, params=params)

    async def _request(
        self,
        method: str,
        url: str,
        json: Optional[Dict[str, Any]] = None,
        params: Optional[Dict[str, Any]] = None,
    ) -> Response:
        def call() -> Response:
            status, payload = self._transport.app._handle_request(method, url, json)
            if isinstance(payload, dict):
                text = str(payload)
                body = payload
            elif isinstance(payload, list):
                text = str(payload)
                body = payload
            else:
                text = str(payload)
                body = payload
            return Response(status, body, text)

        return await asyncio.to_thread(call)


__all__ = ["AsyncClient", "ASGITransport", "Response"]
