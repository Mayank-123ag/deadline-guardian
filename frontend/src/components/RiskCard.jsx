function RiskCard({ risk }) {
  const getBgColor = () => {
    const level = risk?.risk_level?.toLowerCase() || "";

    if (level.includes("critical"))
      return "bg-red-900";

    if (level.includes("high"))
      return "bg-orange-700";

    if (level.includes("medium"))
      return "bg-yellow-700";

    return "bg-green-700";
  };

  const getBarColor = () => {
    const level = risk?.risk_level?.toLowerCase() || "";

    if (level.includes("critical"))
      return "bg-red-500";

    if (level.includes("high"))
      return "bg-orange-400";

    if (level.includes("medium"))
      return "bg-yellow-400";

    return "bg-green-400";
  };

  return (
   <div
className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
shadow-2xl"
>
      <h2 className="text-4xl font-bold mb-6">
        Risk Analysis
      </h2>

      <p className="text-2xl mb-3">
        <strong>Priority Score:</strong> {risk.priority_score}
      </p>

      <div className="w-full bg-black/20 rounded-full h-4 mb-6">
        <div
          className={`${getBarColor()} h-4 rounded-full`}
          style={{
            width: `${risk.priority_score}%`,
          }}
        />
      </div>

      <p className="text-2xl">
        <strong>Risk Level:</strong> {risk.risk_level}
      </p>
    </div>
  );
}

export default RiskCard;