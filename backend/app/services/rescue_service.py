from app.services.gemini_service import ask_gemini
import json

def generate_rescue_plan(task):

    prompt = f"""
You are an expert productivity coach.

Create a step-by-step rescue plan.

Task Details:

Title: {task['title']}
Deadline: {task['deadline']}
Priority: {task['priority']}
Estimated Hours: {task['estimated_hours']}

Return ONLY valid JSON.

{{
    "risk_level":"",
    "recommendation":"",
    "plan":[
        {{
            "time":"6:00 PM - 7:00 PM",
            "action":"..."
        }}
    ]
}}
"""

    result = ask_gemini(prompt)

    try:
        cleaned = (
            result.replace("```json", "")
                  .replace("```", "")
                  .strip()
        )

        return json.loads(cleaned)

    except:
        return {
            "error": "Unable to generate rescue plan",
            "raw_response": result
        }