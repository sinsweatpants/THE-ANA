from __future__ import annotations

from typing import Any


class HTMLResponse:
    def __init__(self, content: str, status_code: int = 200) -> None:
        self.content = content
        self.status_code = status_code


__all__ = ["HTMLResponse"]
