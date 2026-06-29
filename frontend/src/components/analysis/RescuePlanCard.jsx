function RescuePlanCard({ plan }) {
  return (
    <div className="mt-6 bg-green-900 p-8 rounded-xl shadow-lg">

      <h2 className="text-4xl font-bold mb-6">
        Rescue Plan
      </h2>

      <div className="mb-4">
        <span className="font-bold text-xl">
          Risk Level:
        </span>{" "}
        {plan.risk_level}
      </div>

      <div className="mb-6">
        <span className="font-bold text-xl">
          Recommendation:
        </span>{" "}
        {plan.recommendation}
      </div>

      {plan.plan && plan.plan.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Action Plan
          </h3>

          <div className="space-y-4">
            {plan.plan.map((step, index) => (
              <div
                key={index}
                className="bg-green-800 p-4 rounded-lg"
              >
                <div className="font-bold text-lg mb-2">
                  {step.time}
                </div>

                <div>
                  {step.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default RescuePlanCard;