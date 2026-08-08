export default function MarineAlerts() {
  return (
    <div className="bg-slate-800 rounded-3xl p-6 border border-cyan-500/20">

      <h2 className="text-2xl font-bold text-red-400">
        🚨 Marine Alerts
      </h2>

      <div className="space-y-4 mt-6">

        <div className="bg-red-500/20 rounded-xl p-4">
          Coral Bleaching Risk
        </div>

        <div className="bg-yellow-500/20 rounded-xl p-4">
          Marine Heatwave Warning
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          High Cyclone Probability
        </div>

      </div>

    </div>
  );
}