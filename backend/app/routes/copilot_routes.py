from fastapi import APIRouter
from pydantic import BaseModel

from app.services.gemini_service import ask_gemini

router = APIRouter()

class CopilotInput(BaseModel):
    message: str

@router.post("/")
def copilot(data: CopilotInput):

    response = ask_gemini(data.message)

    return {
        "reply": response
    }