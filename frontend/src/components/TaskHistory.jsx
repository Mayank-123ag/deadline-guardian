function TaskHistory({
  tasks,
  deleteTask,
  completeTask,
}) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="mt-8 bg-slate-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Task History</h2>

        <p className="text-slate-400">
          No tasks analyzed yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6">
        📜 Task History
      </h2>

      <div className="space-y-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-slate-700 rounded-xl p-5 border border-slate-600"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold">
                  {task.title}
                </h3>

                <p className="text-slate-300 mt-2">
                  📅 <strong>Deadline:</strong> {task.deadline}
                </p>

                <p className="text-slate-300">
                  ⭐ <strong>Priority:</strong> {task.priority}
                </p>

                <p className="text-slate-300">
                  ⚠️ <strong>Risk:</strong> {task.risk_level}
                </p>

                <p className="text-slate-300">
                  📊 <strong>Score:</strong> {task.priority_score}
                </p>

                <p className="text-slate-300">
                  ⏱️ <strong>Estimated Hours:</strong>{" "}
                  {task.estimated_hours}
                </p>

                <p className="text-slate-300">
                    <strong>Status:</strong>{" "}
                    <span
                        className={`font-semibold ${
                        task.status === "Completed"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }`}
                    >
                        {task.status}
                    </span>
                    </p>
              </div>

              <div className="flex flex-col gap-2">

            {task.status !== "Completed" && (
                <button
                onClick={() => completeTask(task.id)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
                >
                ✅ Complete
                </button>
            )}

            <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
            >
                🗑 Delete
            </button>

            </div>
            </div>

            <div className="mt-4 bg-slate-900 p-4 rounded-lg">
              <p className="text-sm text-slate-400 mb-2">
                Recommendation
              </p>

              <p className="text-slate-200">
                {task.recommendation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskHistory;