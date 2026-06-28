from datetime import datetime

def calculate_priority(task):

    score = 0

    # Priority weight
    priority = task.get("priority", "").lower()

    if priority == "high":
        score += 40
    elif priority == "medium":
        score += 25
    elif priority == "low":
        score += 10

    # Estimated hours weight
    hours = task.get("estimated_hours", 0)

    if hours >= 8:
        score += 30
    elif hours >= 4:
        score += 20
    else:
        score += 10

    # Deadline weight
    deadline = str(task.get("deadline", "")).lower()

    if "today" in deadline:
        score += 40
    elif "tomorrow" in deadline:
        score += 30
    else:
        score += 15

    # Risk level
    if score >= 80:
        risk = "Critical"
    elif score >= 60:
        risk = "High"
    elif score >= 40:
        risk = "Medium"
    else:
        risk = "Low"

    return {
        "priority_score": score,
        "risk_level": risk
    }