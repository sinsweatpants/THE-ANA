"""Minimal FastAPI-compatible facade for local testing."""
from __future__ import annotations

import asyncio
import inspect
from typing import Any, Awaitable, Callable, Dict, List, Optional, Tuple, Type, get_type_hints

from pydantic import BaseModel

RouteHandler = Callable[..., Awaitable[Any]] | Callable[..., Any]


class HTTPException(Exception):
    def __init__(self, status_code: int, detail: Any) -> None:
        super().__init__(detail)
        self.status_code = status_code
        self.detail = detail


class BackgroundTasks:
    def __init__(self) -> None:
        self._tasks: List[Tuple[Callable[..., Any], Tuple[Any, ...], Dict[str, Any]]] = []

    def add_task(self, func: Callable[..., Any], *args: Any, **kwargs: Any) -> None:
        self._tasks.append((func, args, kwargs))

    def run(self) -> None:
        for func, args, kwargs in self._tasks:
            try:
                func(*args, **kwargs)
            except Exception:
                continue


class FastAPI:
    def __init__(self, title: str = "", description: str = "", version: str = "") -> None:
        self.title = title
        self.description = description
        self.version = version
        self._routes: Dict[str, Dict[str, RouteHandler]] = {"GET": {}, "POST": {}}
        self._startup_handlers: List[Callable[[], Any]] = []
        self._started = False
        self.middleware: List[Any] = []

    def add_middleware(self, middleware_class: Any, **options: Any) -> None:
        self.middleware.append((middleware_class, options))

    def on_event(self, event: str) -> Callable[[Callable[[], Any]], Callable[[], Any]]:
        def decorator(func: Callable[[], Any]) -> Callable[[], Any]:
            if event == "startup":
                self._startup_handlers.append(func)
            return func

        return decorator

    def get(self, path: str, response_class: Any | None = None) -> Callable[[RouteHandler], RouteHandler]:
        return self._register("GET", path)

    def post(self, path: str, response_class: Any | None = None) -> Callable[[RouteHandler], RouteHandler]:
        return self._register("POST", path)

    def _register(self, method: str, path: str) -> Callable[[RouteHandler], RouteHandler]:
        def decorator(func: RouteHandler) -> RouteHandler:
            self._routes.setdefault(method.upper(), {})[path] = func
            return func

        return decorator

    def _ensure_started(self) -> None:
        if not self._started:
            for handler in self._startup_handlers:
                result = handler()
                if inspect.iscoroutine(result):
                    asyncio.run(result)
            self._started = True

    def _handle_request(self, method: str, path: str, body: Optional[Dict[str, Any]] = None) -> Tuple[int, Any]:
        self._ensure_started()
        handler = self._routes.get(method.upper(), {}).get(path)
        if handler is None:
            return 404, {"detail": "Not Found"}
        signature = inspect.signature(handler)
        hints = get_type_hints(handler)
        kwargs: Dict[str, Any] = {}
        background_task: Optional[BackgroundTasks] = None
        for name, parameter in signature.parameters.items():
            annotation = hints.get(name, parameter.annotation)
            if annotation is BackgroundTasks or name == "background_tasks":
                background_task = BackgroundTasks()
                kwargs[name] = background_task
            elif isinstance(annotation, type) and issubclass(annotation, BaseModel):
                payload = body or {}
                kwargs[name] = annotation.model_validate(payload)
            else:
                kwargs[name] = body if body is not None else None
        try:
            result = handler(**kwargs)
            if inspect.iscoroutine(result):
                result = asyncio.run(result)
            if background_task is not None:
                background_task.run()
        except HTTPException as exc:  # pragma: no cover - simple error pass-through
            return exc.status_code, {"detail": exc.detail}
        return 200, result


__all__ = ["FastAPI", "HTTPException", "BackgroundTasks"]
