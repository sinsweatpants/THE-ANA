from __future__ import annotations

from typing import Any


def jsonable_encoder(value: Any) -> Any:
    if hasattr(value, "model_dump"):
        return value.model_dump()
    if isinstance(value, dict):
        return {key: jsonable_encoder(val) for key, val in value.items()}
    if isinstance(value, list):
        return [jsonable_encoder(item) for item in value]
    return value


__all__ = ["jsonable_encoder"]
