import { Sparkles, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14"
    >
      {/* AI Badge */}

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium backdrop-blur-md">
        <BrainCircuit size={18} />
        Powered by Gemini AI
      </div>

      {/* Heading */}

      <h1 className="mt-6 text-6xl md:text-7xl font-black leading-tight">
        <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
          Deadline
        </span>

        <br />

        <span className="text-white">
          Guardian
        </span>
      </h1>

      {/* Subtitle */}

      <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Never miss another deadline.
        <br />
        Let AI analyze your tasks, predict risks,
        and generate personalized rescue plans.
      </p>

      {/* Small Feature Pills */}

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
          🤖 AI Task Parsing
        </div>

        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
          ⚠️ Risk Prediction
        </div>

        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
          🛟 Rescue Planning
        </div>

        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
          📅 Google Calendar
        </div>

      </div>

      {/* Decorative Glow */}

      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute left-1/2 -translate-x-1/2 top-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full -z-10"
      />

    </motion.section>
  );
}

export default Hero;