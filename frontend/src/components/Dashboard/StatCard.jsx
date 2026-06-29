import AnimatedNumber from "../ui/AnimatedNumber";
import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  icon: Icon,
  color,
  suffix = "",
  darkMode,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        p-6
        border
        backdrop-blur-xl
        transition-all
        duration-300

        ${
          darkMode
            ? "bg-white/5 border-white/10"
            : "bg-white border-slate-200"
        }
      `}
    >
      {/* Glow */}

      <div
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-20 blur-3xl"
        style={{ background: color }}
      />

      {/* Icon */}

      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
        style={{
          background: `${color}20`,
        }}
      >
        <Icon
          size={28}
          color={color}
        />
      </div>

      <h2 className="text-4xl font-black">
        <AnimatedNumber value={value} />
        {suffix}
      </h2>
      <p className="mt-2 text-slate-400">
        {title}
      </p>

      <div className="mt-6 text-green-400 text-sm font-semibold">
        ▲ Live Analytics
      </div>
    </motion.div>
  );
}

export default StatCard;