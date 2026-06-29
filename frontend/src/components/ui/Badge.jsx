function Badge({
  text,
  color = "cyan",
}) {
  const colors = {
    cyan: "bg-cyan-500/20 text-cyan-300",
    red: "bg-red-500/20 text-red-300",
    green: "bg-green-500/20 text-green-300",
    yellow: "bg-yellow-500/20 text-yellow-300",
    violet: "bg-violet-500/20 text-violet-300",
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-sm
        font-semibold
        ${colors[color]}
      `}
    >
      {text}
    </span>
  );
}

export default Badge;