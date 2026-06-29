# 🚀 Deadline Guardian

<div align="center">

### 🧠 AI-Powered Smart Deadline Management Assistant

Analyze tasks, predict deadline risks, generate rescue plans, and get AI-powered productivity assistance using **Google Gemini**.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-green?logo=fastapi)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-blue?logo=google)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?logo=firebase)
![Google Cloud Run](https://img.shields.io/badge/Google-Cloud_Run-4285F4?logo=googlecloud)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 🌟 Overview

Deadline Guardian is an AI-powered productivity platform that helps students and professionals organize their work efficiently.

Instead of manually planning deadlines, users simply describe their task in natural language.

The application automatically:

- 📌 Extracts task information
- ⚠️ Predicts deadline risk
- 🛠️ Generates a personalized rescue plan
- 🤖 Provides AI productivity assistance
- 📅 Creates Google Calendar events
- 📊 Tracks completed tasks and analytics

---

# ✨ Features

## 🧠 AI Task Parsing

Convert natural language into structured task information.

Example:

> "Complete my DBMS Assignment by Friday. It will take around 5 hours."

↓

```json
{
  "title": "DBMS Assignment",
  "deadline": "Friday",
  "priority": "High",
  "estimated_hours": 5
}
```

---

## 🚨 Smart Risk Prediction

Automatically predicts

- Low Risk
- Medium Risk
- High Risk
- Critical

using a custom priority scoring algorithm.

---

## 🛟 AI Rescue Plan

If a task is risky, Deadline Guardian generates

- Time blocks
- Action plan
- Completion strategy
- Productivity recommendations

---

## 🤖 AI Copilot

Integrated with **Google Gemini**.

Users can ask:

- Break my task into subtasks
- Explain my risk score
- Create a study strategy
- Productivity tips
- Time management advice

---

## 📅 Google Calendar Integration

One click creates a Google Calendar event for the analyzed task.

---

## 📊 Analytics Dashboard

Live dashboard displaying

- Tasks analyzed
- High-risk tasks
- Completed tasks
- Estimated hours saved

---

## 🎨 Modern UI

- Glassmorphism
- Dark / Light Mode
- Animated Dashboard
- Floating AI Assistant
- Responsive Layout
- Framer Motion Animations

---

# 🏗️ Architecture

```
                React + Vite
                      │
                      ▼
          Axios REST API Requests
                      │
                      ▼
                FastAPI Backend
                      │
     ┌──────────────┬──────────────┐
     ▼              ▼              ▼
 Gemini AI     Priority Engine   SQLite Database
     │              │              │
     └──────────────┴──────────────┘
                      │
                      ▼
              Google Calendar
```

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- Lucide React
- React Icons

---

## Backend

- FastAPI
- Python
- Pydantic
- SQLAlchemy
- SQLite

---

## AI

- Google Gemini API
- Gemini 2.5 Flash

---

## Deployment

- Firebase Hosting
- Google Cloud Run

---

# 📷 Screenshots

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## AI Assistant

![AI Assistant](screenshots/assistant.png)

---

## Risk Analysis

![Risk](screenshots/risk.png)

---

## Rescue Plan

![Rescue](screenshots/rescue.png)

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Mayank-123ag/deadline-guardian.git

cd deadline-guardian
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

# 🌐 Live Demo

Frontend

https://deadline-guardian-500717.web.app

Backend API

https://deadline-guardian-api-477837174358.asia-south1.run.app/docs

---

# 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/parse-task/` | POST | Parse natural language task |
| `/priority/` | POST | Predict deadline risk |
| `/rescue/` | POST | Generate rescue plan |
| `/tasks/` | GET | Fetch task history |
| `/tasks/` | POST | Save task |
| `/tasks/{id}` | DELETE | Delete task |
| `/tasks/{id}/complete` | PATCH | Mark completed |
| `/copilot/` | POST | AI Productivity Assistant |

---

# 🚀 Future Improvements

- 📈 Productivity Analytics
- 📊 Weekly Reports
- 📱 Mobile App
- 🔔 Push Notifications
- 👥 Team Collaboration
- 🧩 Kanban Board
- 📅 Smart Scheduling
- 🎙️ Voice Commands

---

# 👨‍💻 Developer

### Mayank Agrawal

LinkedIn:
https://www.linkedin.com/in/11mayank/

GitHub:

https://github.com/Mayank-123ag

---

# ⭐ If you like this project

Please consider giving it a ⭐ on GitHub!
