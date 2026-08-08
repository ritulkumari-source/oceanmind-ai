export default function ReportsCard() {
  return (
    <div className="bg-slate-800 rounded-3xl p-6 border border-cyan-500/20">

      <h2 className="text-2xl font-bold text-cyan-400">
        📄 Recent Reports
      </h2>

      <div className="space-y-4 mt-6">

        <div className="bg-slate-900 rounded-xl p-4">
          Indian Ocean Climate Report.pdf
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          Pacific Temperature Analysis.pdf
        </div>

        <div className="bg-slate-900 rounded-xl p-4">
          Marine Heatwave Prediction.pdf
        </div>

      </div>

    </div>
  );
}