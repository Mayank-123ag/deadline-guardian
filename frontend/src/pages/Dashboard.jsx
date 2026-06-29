import { useState, useEffect } from "react";
import API from "../services/api";

import AnimatedBackground from "../components/layout/AnimatedBackground";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

import DashboardStats from "../components/Dashboard/DashboardStats";
import ResultSection from "../components/analysis/ResultSection";
import TaskHistory from "../components/history/TaskHistory";

import GlassCard from "../components/ui/GlassCard";
import PrimaryButton from "../components/ui/PrimaryButton";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import AIAssistant from "../components/assistant/AIAssistant";

function Dashboard() {
  // ============================
  // STATES
  // ============================

  const [darkMode, setDarkMode] = useState(true);

  const [taskText, setTaskText] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);
  const [risk, setRisk] = useState(null);
  const [rescuePlan, setRescuePlan] = useState(null);

  const [history, setHistory] = useState([]);

  const [tasksAnalyzed, setTasksAnalyzed] = useState(0);
  const [highRiskCount, setHighRiskCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [savedHours, setSavedHours] = useState(0);

  // ============================
  // LOAD TASK HISTORY
  // ============================

  const loadHistory = async () => {
    try {
      const response = await API.get("/tasks/");

      const tasks = response.data;

      setHistory(tasks);

      setTasksAnalyzed(tasks.length);

      setCompletedCount(
        tasks.filter((task) => task.status === "Completed").length
      );

      setHighRiskCount(
        tasks.filter((task) =>
          ["High", "Critical"].includes(task.risk_level)
        ).length
      );

      setSavedHours(
        tasks.reduce(
          (sum, task) => sum + (task.estimated_hours || 0),
          0
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  // ============================
  // ANALYZE TASK
  // ============================

  const analyzeTask = async () => {
    if (!taskText.trim()) {
      alert("Please enter a task.");
      return;
    }

    try {
      setLoading(true);

      // Parse Task

      const parseResponse = await API.post("/parse-task/", {
        text: taskText,
      });

      setResult(parseResponse.data);

      // Risk Analysis

      const riskResponse = await API.post(
        "/priority/",
        parseResponse.data.task
      );

      setRisk(riskResponse.data);

      // Rescue Plan

      const rescueResponse = await API.post("/rescue/", {
        ...parseResponse.data.task,
        risk_level: riskResponse.data.risk_level,
      });
      console.log("Rescue Response:", rescueResponse.data);
      setRescuePlan(rescueResponse.data);

      // Save Task

      await API.post("/tasks/", {
        title: parseResponse.data.task.title,
        deadline: parseResponse.data.task.deadline,
        priority: parseResponse.data.task.priority,
        estimated_hours: parseResponse.data.task.estimated_hours,
        status: "Pending",
        risk_level: riskResponse.data.risk_level,
        priority_score: riskResponse.data.priority_score,
        recommendation: rescueResponse.data.recommendation,
      });

      await loadHistory();
    } catch (err) {
      console.error(err);
      alert("Backend Connection Failed");
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // DELETE TASK
  // ============================

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      loadHistory();
    } catch (err) {
      console.error(err);
    }
  };

  // ============================
  // COMPLETE TASK
  // ============================

  const completeTask = async (id) => {
    try {
      await API.patch(`/tasks/${id}/complete`);
      loadHistory();
    } catch (err) {
      console.error(err);
    }
  };

  // ============================
  // GOOGLE CALENDAR
  // ============================

  const addToGoogleCalendar = () => {
    if (!result?.task) return;

    const title = encodeURIComponent(result.task.title);

    const details = encodeURIComponent(`
Priority: ${result.task.priority}

Estimated Hours: ${result.task.estimated_hours}

Recommendation:
${rescuePlan?.recommendation || ""}
`);

    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      `&text=${title}` +
      `&details=${details}`;

    window.open(url, "_blank");
  };

  // ============================
  // UI
  // ============================

  return (
    <>
      <AnimatedBackground />

      <LoadingOverlay loading={loading} />

      <div
        className={`min-h-screen transition-all duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
            : "bg-gradient-to-br from-slate-100 via-white to-blue-100 text-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-10">

          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Hero />

          <DashboardStats
            tasksAnalyzed={tasksAnalyzed}
            highRiskCount={highRiskCount}
            completedCount={completedCount}
            savedHours={savedHours}
            darkMode={darkMode}
          />

          {/* Task Input */}

          <GlassCard
            darkMode={darkMode}
            className="mt-10 p-8"
          >
            <textarea
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Describe your task in natural language...

                Example:
                Complete DBMS Assignment by Friday.
                Estimated time: 6 hours.
                Priority: High."
              className={`w-full h-44 rounded-2xl p-6 resize-none outline-none transition-all duration-300 ${
                darkMode
                  ? "bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500"
                  : "bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500"
              }`}
            />

            <PrimaryButton
              onClick={analyzeTask}
              disabled={loading}
              className="mt-6"
            >
              ✨ Analyze Task
            </PrimaryButton>
          </GlassCard>

          <ResultSection
            result={result}
            risk={risk}
            rescuePlan={rescuePlan}
            addToGoogleCalendar={addToGoogleCalendar}
            darkMode={darkMode}
          />

          <div className="mt-12">
            <TaskHistory
              tasks={history}
              deleteTask={deleteTask}
              completeTask={completeTask}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
      <AIAssistant />
    </>
  );
}

export default Dashboard;