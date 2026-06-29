import {
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import StatCard from "./StatCard";

function DashboardStats({
  tasksAnalyzed,
  highRiskCount,
  completedCount,
  savedHours,
  darkMode,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

      <StatCard
        title="Tasks Analyzed"
        value={tasksAnalyzed}
        icon={ClipboardList}
        color="#06B6D4"
        darkMode={darkMode}
      />

      <StatCard
        title="High Risk"
        value={highRiskCount}
        icon={AlertTriangle}
        color="#EF4444"
        darkMode={darkMode}
      />

      <StatCard
        title="Completed"
        value={completedCount}
        icon={CheckCircle2}
        color="#22C55E"
        darkMode={darkMode}
      />

      <StatCard
        title="Hours Saved"
        value={savedHours}
        icon={Clock3}
        color="#8B5CF6"
        suffix="h"
        darkMode={darkMode}
      />

    </div>
  );
}

export default DashboardStats;