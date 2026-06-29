from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models.db_task import DBTask

from app.routes.ai_routes import router as ai_router
from app.routes.task_routes import router as task_router
from app.routes.parser_routes import router as parser_router
from app.routes.priority_routes import router as priority_router
from app.routes.rescue_routes import router as rescue_router
from app.routes.copilot_routes import router as copilot_router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Deadline Guardian API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://deadline-guardian-500717.web.app",
        "https://deadline-guardian-500717.firebaseapp.com",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    ai_router,
    prefix="/ai",
    tags=["AI"]
)

app.include_router(
    task_router,
    prefix="/tasks",
    tags=["Tasks"]
)

app.include_router(
    parser_router,
    prefix="/parse-task",
    tags=["AI Parser"]
)

app.include_router(
    priority_router,
    prefix="/priority",
    tags=["Priority Engine"]
)

app.include_router(
    rescue_router,
    prefix="/rescue",
    tags=["Rescue Planner"]
)
app.include_router(
    copilot_router,
    prefix="/copilot",
    tags=["AI Copilot"]
)

@app.get("/")
def home():
    return {
        "message": "Deadline Guardian API Running"
    }