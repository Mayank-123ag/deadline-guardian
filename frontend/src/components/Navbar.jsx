import { Moon, Sun } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center mb-10">

      <div>
        <h1 className="text-5xl font-bold">
          Deadline Guardian
        </h1>

        <p className="text-slate-400 mt-2">
          AI Powered Last-Minute Life Saver
        </p>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-slate-800 p-3 rounded-xl hover:scale-110 transition"
      >
        {darkMode ? <Sun size={24}/> : <Moon size={24}/>}
      </button>

    </div>
  );
}

export default Navbar;