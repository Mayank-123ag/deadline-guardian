from google import genai
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Gemini Client
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def ask_gemini(prompt: str):
    """
    General Gemini chat function
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:
        return f"Gemini Error: {str(e)}"


def parse_task_with_gemini(task_text: str):
    """
    Converts natural language task into structured JSON
    """

    prompt = f"""
You are an AI productivity assistant.

Extract task details from the user's task description.

IMPORTANT RULES:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT use ```json.
- Do NOT add explanations.
- Infer missing values whenever possible.

Output Format:

{{
  "title": "",
  "deadline": "",
  "priority": "",
  "estimated_hours": 0
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