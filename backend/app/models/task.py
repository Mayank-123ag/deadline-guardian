from pydantic import BaseModel
from typing import Optional


class Task(BaseModel):
    title: str
    deadline: str
    priority: str
    estimated_hours: Optional[int] = 0

    status: str = "Pending"

    # AI Analysis
    risk_level: Optional[str] = None
    priority_score: Optional[int] = None
    recommendation: Optional[str] = None