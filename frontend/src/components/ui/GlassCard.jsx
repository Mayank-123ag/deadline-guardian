function GlassCard({
  children,
  className = "",
  darkMode = true,
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        ${
          darkMode
            ? "bg-white/5 border-white/10 shadow-black/30"
            : "bg-white/70 border-slate-200 shadow-slate-300/40"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;