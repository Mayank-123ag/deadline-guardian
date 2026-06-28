from fastapi import APIRouter
from pydantic import BaseModel
from app.services.rescue_service import generate_rescue_plan

router = APIRouter()


class RescueInput(BaseModel):
    title: str
    deadline: str
    priority: str
    estimated_hours: int
    risk_level: str


@router.post("/")
def rescue(data: RescueInput):

    task_data = {
        "title": data.title,
        "deadline": data.deadline,
        "priority": data.priority,
        "estimated_hours": data.estimated_hours,
        "risk_level": data.risk_level
    }

    return generate_rescue_plan(task_data)