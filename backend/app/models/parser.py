from pydantic import BaseModel

class TaskInput(BaseModel):
    text: str