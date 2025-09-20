class CORSMiddleware:
    def __init__(self, app, **_: str) -> None:
        self.app = app
