import { motion } from "framer-motion";

import TaskCard from "./TaskCard";
import RiskCard from "./RiskCard";
import RescuePlanCard from "./RescuePlanCard";

function ResultSection({
  result,
  risk,
  rescuePlan,
  addToGoogleCalendar,
  darkMode,
}) {
  if (!result) return null;

  return (
    <section className="mt-12">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-4xl font-bold">
            Task Analysis
          </h2>

          <p className="text-slate-400">
            AI generated insights for your task
          </p>
        </div>

        <button
          onClick={addToGoogleCalendar}
          className="
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-green-500
          to-emerald-600
          hover:scale-105
          transition-all
          shadow-lg"
        >
          📅 Add to Calendar
        </button>

      </div>

      {/* Task + Risk */}

      <div className="grid lg:grid-cols-2 gap-6">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
        >
          <TaskCard task={result.task}
          darkMode={darkMode} 
          />
        </motion.div>

        {risk && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
          >
            <RiskCard risk={risk} 
            darkMode={darkMode}
            />
          </motion.div>
        )}

      </div>

      {/* Rescue */}

      {rescuePlan && (

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
        >
          <RescuePlanCard plan={rescuePlan} 
          darkMode={darkMode}
          />
        </motion.div>

      )}

    </section>
  );
}

export default ResultSection;