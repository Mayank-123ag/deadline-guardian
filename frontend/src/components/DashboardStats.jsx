import StatCard from "./StatCard";

function DashboardStats({
  tasksAnalyzed,
  highRiskCount,
  completedCount,
  savedHours,
}) {

  return (

    <div className="grid md:grid-cols-4 gap-5 mb-10">

      <StatCard
        title="Tasks"
        value={tasksAnalyzed}
        color="text-blue-400"
        icon="📄"
      />

      <StatCard
        title="High Risk"
        value={highRiskCount}
        color="text-red-500"
        icon="⚠️"
      />

      <StatCard
        title="Completed"
        value={completedCount}
        color="text-green-500"
        icon="✅"
      />

      <StatCard
        title="Hours"
        value={savedHours}
        color="text-cyan-400"
        icon="⏱️"
      />

    </div>

  );
}

export default DashboardStats;