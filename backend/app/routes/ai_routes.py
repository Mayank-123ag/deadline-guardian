from fastapi import APIRouter
from app.services.gemini_service import ask_gemini

router = APIRouter()

@router.get("/hello")
def hello_ai():

    result = ask_gemini(
        "Reply with only: Gemini Connected Successfully"
    )

    return {
        "response": result
    }