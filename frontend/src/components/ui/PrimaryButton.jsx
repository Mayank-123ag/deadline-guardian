function PrimaryButton({
  children,
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        w-full
        py-4
        rounded-2xl
        font-semibold
        text-white
        transition-all
        duration-300
        bg-gradient-to-r
        from-violet-600
        via-purple-600
        to-cyan-500
        hover:scale-[1.02]
        hover:shadow-xl
        hover:shadow-cyan-500/30
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;