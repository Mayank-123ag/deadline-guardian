import AnimatedBackground from "./components/AnimatedBackground";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <Dashboard />
      </div>
    </>
  );
}

export default App;