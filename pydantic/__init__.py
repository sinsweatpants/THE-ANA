"""Minimal subset of pydantic used for testing."""
from __future__ import annotations

from typing import Any, Callable, Dict, Optional


class FieldInfo:
    def __init__(self, default: Any = None, default_factory: Optional[Callable[[], Any]] = None, **_: Any) -> None:
        self.default = default
        self.default_factory = default_factory


def Field(default: Any = None, *, default_factory: Optional[Callable[[], Any]] = None, **kwargs: Any) -> FieldInfo:
    return FieldInfo(default=default, default_factory=default_factory, **kwargs)


class BaseModelMeta(type):
    def __new__(mcls, name: str, bases: tuple[type, ...], namespace: Dict[str, Any]) -> type:
        annotations = namespace.get("__annotations__", {})
        fields: Dict[str, FieldInfo] = {}
        for attr, annotation in annotations.items():
            value = namespace.get(attr, None)
            if isinstance(value, FieldInfo):
                fields[attr] = value
                namespace[attr] = value.default
            else:
                fields[attr] = FieldInfo(default=value)
        namespace["__fields__"] = fields
        return super().__new__(mcls, name, bases, namespace)


class BaseModel(metaclass=BaseModelMeta):
    model_config: Dict[str, Any] = {}

    def __init__(self, **data: Any) -> None:
        for name, info in self.__fields__.items():
            if name in data:
                value = data.pop(name)
            else:
                if isinstance(info, FieldInfo) and info.default_factory is not None:
                    value = info.default_factory()
                else:
                    value = info.default if isinstance(info, FieldInfo) else info
            setattr(self, name, value)
        for extra_name, extra_value in data.items():
            setattr(self, extra_name, extra_value)

    def model_dump(self) -> Dict[str, Any]:
        return {key: getattr(self, key) for key in self.__fields__}

    @classmethod
    def model_validate(cls, data: Dict[str, Any]) -> "BaseModel":
        return cls(**data)

    def dict(self) -> Dict[str, Any]:  # compatibility helper
        return self.model_dump()


__all__ = ["BaseModel", "Field"]
