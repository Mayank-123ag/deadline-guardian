function StatCard({
  title,
  value,
  color,
  icon
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition">

      <div className="flex justify-between">

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h2 className={`text-4xl font-bold ${color}`}>
            {value}
          </h2>

        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;