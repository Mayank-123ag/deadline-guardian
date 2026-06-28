import {
  Calendar,
  Flag,
  Clock,
  FileText,
} from "lucide-react";

function TaskCard({ task }) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      shadow-2xl
      p-8
      hover:shadow-cyan-500/20
      hover:-translate-y-1
      transition-all
      duration-300"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-cyan-500/20 p-3 rounded-xl">
          <FileText className="text-cyan-400" size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Task Details
          </h2>

          <p className="text-slate-400">
            AI Parsed Task Information
          </p>
        </div>
      </div>

      <div className="space-y-6">

        {/* Title */}

        <div className="flex items-start gap-4">
          <FileText className="text-cyan-400 mt-1" />

          <div>
            <p className="text-slate-400 text-sm">
              Title
            </p>

            <h3 className="text-xl font-semibold">
              {task.title}
            </h3>
          </div>
        </div>

        {/* Deadline */}

        <div className="flex items-start gap-4">
          <Calendar className="text-violet-400 mt-1" />

          <div>
            <p className="text-slate-400 text-sm">
              Deadline
            </p>

            <h3 className="text-lg font-semibold">
              {task.deadline}
            </h3>
          </div>
        </div>

        {/* Priority */}

        <div className="flex items-start gap-4">
          <Flag className="text-red-400 mt-1" />

          <div>
            <p className="text-slate-400 text-sm">
              Priority
            </p>

            <span
              className="
              inline-block
              mt-1
              px-4
              py-1
              rounded-full
              bg-red-500/20
              text-red-300
              font-semibold"
            >
              {task.priority}
            </span>
          </div>
        </div>

        {/* Estimated Hours */}

        <div className="flex items-start gap-4">
          <Clock className="text-green-400 mt-1" />

          <div>
            <p className="text-slate-400 text-sm">
              Estimated Time
            </p>

            <h3 className="text-lg font-semibold">
              {task.estimated_hours} Hours
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TaskCard;