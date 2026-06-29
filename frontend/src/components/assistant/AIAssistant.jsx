import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import API from "../../services/api";

function AIAssistant() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const res = await API.post("/copilot/", {
        message,
      });

      setReply(res.data.reply);
    } catch (err) {
      console.error(err);

      setReply(
        "❌ Unable to contact the AI Assistant. Please make sure your backend is running and the /copilot endpoint is deployed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-8
          right-8
          h-16
          w-16
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-violet-600
          text-white
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
          z-50
        "
      >
        <FaRobot className="mx-auto" size={28} />
      </button>

      {/* AI Panel */}
      {open && (
        <div
          className="
            fixed
            bottom-28
            right-8
            w-[380px]
            rounded-3xl
            bg-slate-900
            border
            border-slate-700
            shadow-2xl
            p-6
            z-50
          "
        >
          <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
            🤖 Deadline Guardian AI
          </h2>

          <p className="text-slate-400 mt-2">
            Your personal AI productivity assistant.
          </p>

          {/* Quick Suggestions */}

          <div className="mt-6 space-y-3">

            <button
              onClick={() =>
                setMessage("Break my task into smaller subtasks.")
              }
              className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              💡 Break my task into subtasks
            </button>

            <button
              onClick={() =>
                setMessage("Give me a study strategy.")
              }
              className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              📚 Study Strategy
            </button>

            <button
              onClick={() =>
                setMessage("Give me productivity tips.")
              }
              className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              ⚡ Productivity Tips
            </button>

            <button
              onClick={() =>
                setMessage("Explain my risk score.")
              }
              className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              🧠 Explain My Risk Score
            </button>

          </div>

          {/* Input */}

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything..."
            rows={3}
            className="
              mt-6
              w-full
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              p-4
              text-white
              outline-none
              resize-none
            "
          />

          {/* Ask Button */}

          <button
            onClick={askAI}
            disabled={loading}
            className="
              mt-4
              w-full
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-600
              py-3
              font-semibold
              hover:scale-[1.02]
              transition-all
            "
          >
            <FaPaperPlane />
            {loading ? "Thinking..." : "Ask AI"}
          </button>

          {/* AI Reply */}

          {reply && (
            <div
              className="
                mt-6
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                p-4
                text-sm
                whitespace-pre-wrap
                text-slate-200
                max-h-72
                overflow-y-auto
              "
            >
              {reply}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default AIAssistant;