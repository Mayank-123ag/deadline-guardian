import { Loader2 } from "lucide-react";

function LoadingOverlay({ loading }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center">
      <div className="bg-slate-900 rounded-3xl p-10 text-center border border-cyan-500/20">

        <Loader2
          className="animate-spin mx-auto text-cyan-400"
          size={48}
        />

        <h2 className="mt-6 text-2xl font-bold">
          Analyzing Task...
        </h2>

        <p className="text-slate-400 mt-3">
          Gemini AI is generating insights
        </p>

      </div>
    </div>
  );
}

export default LoadingOverlay;