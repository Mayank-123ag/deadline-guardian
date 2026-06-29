from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def ask_gemini(prompt: str):
    """
    General AI Assistant
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
You are Deadline Guardian AI.

You help users with:

- productivity
- study plans
- task management
- scheduling
- motivation
- breaking tasks into subtasks

User Question:

{prompt}
"""
        )

        return response.text

    except Exception as e:
        return f"Gemini Error: {str(e)}"


def parse_task_with_gemini(task_text: str):
    """
    Parse natural language task into JSON
    """

    prompt = f"""
You are an AI productivity assistant.

Extract task details from the user's task description.

IMPORTANT:
Return ONLY valid JSON.

Format:

{{
"title":"",
"deadline":"",
"priority":"",
"estimated_hours":0
}}

Task:

{task_text}
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:

        return f'{{"error":"{str(e)}"}}'