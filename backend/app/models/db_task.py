from sqlalchemy import Column, Integer, String
from app.database import Base


class DBTask(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)
    deadline = Column(String)
    priority = Column(String)
    estimated_hours = Column(Integer)

    status = Column(String)

    risk_level = Column(String)
    priority_score = Column(Integer)
    recommendation = Column(String)