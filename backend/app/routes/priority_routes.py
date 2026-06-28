from fastapi import APIRouter
from pydantic import BaseModel
from app.services.priority_service import calculate_priority

router = APIRouter()

class PriorityInput(BaseModel):
    title: str
    deadline: str
    priority: str
    estimated_hours: int

@router.post("/")
def get_priority(task: PriorityInput):

    result = calculate_priority(task.model_dump())

    return result