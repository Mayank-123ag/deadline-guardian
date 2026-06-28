from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.task import Task
from app.models.db_task import DBTask

router = APIRouter()


@router.post("/")
def create_task(task: Task, db: Session = Depends(get_db)):

    db_task = DBTask(
        title=task.title,
        deadline=task.deadline,
        priority=task.priority,
        estimated_hours=task.estimated_hours,
        risk_level=getattr(task, "risk_level", None),
        priority_score=getattr(task, "priority_score", None),
        recommendation=getattr(task, "recommendation", None),
    )

    db.add(db_task)
    db.commit()
    db.refresh(db_task)

    return {
        "message": "Task saved successfully",
        "id": db_task.id
    }


@router.get("/")
def get_tasks(db: Session = Depends(get_db)):
    tasks = db.query(DBTask).order_by(DBTask.id.desc()).all()
    return tasks


@router.get("/{task_id}")
def get_task(task_id: int, db: Session = Depends(get_db)):
    return db.query(DBTask).filter(DBTask.id == task_id).first()


@router.delete("/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(DBTask).filter(DBTask.id == task_id).first()

    if task is None:
        return {"message": "Task not found"}

    db.delete(task)
    db.commit()

    return {"message": "Task deleted successfully"}

from fastapi import HTTPException
@router.delete("/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(DBTask).filter(DBTask.id == task_id).first()

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    db.delete(task)
    db.commit()

    return {"message": "Task deleted successfully"}

@router.patch("/{task_id}/complete")
def complete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(DBTask).filter(DBTask.id == task_id).first()

    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")

    task.status = "Completed"

    db.commit()
    db.refresh(task)

    return {
        "message": "Task completed successfully",
        "task": task
    }