from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.gemini_service import parse_task_with_gemini
import json

router = APIRouter()

class TaskInput(BaseModel):
    text: str

@router.post("/")
def parse_task(task: TaskInput):

    result = parse_task_with_gemini(task.text)

    try:
        cleaned = (
            result.replace("```json", "")
                  .replace("```", "")
                  .strip()
        )

        parsed_json = json.loads(cleaned)

        return {
            "success": True,
            "task": parsed_json
        }

    except Exception:
        raise HTTPException(
            status_code=500,
            detail=f"Gemini parsing failed: {result}"
        )