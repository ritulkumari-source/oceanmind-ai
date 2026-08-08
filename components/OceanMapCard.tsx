export default function OceanMapCard() {
  return (
    <div className="bg-slate-800 rounded-3xl p-6 border border-cyan-500/20 h-full">

      <h2 className="text-2xl font-bold text-cyan-400">
        🌍 Live Ocean Map
      </h2>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-cyan-700 to-blue-950 h-72 flex items-center justify-center text-7xl">
        🌎
      </div>

      <div className="flex gap-3 mt-6">

        <button className="bg-cyan-500 px-4 py-2 rounded-xl">
          Temperature
        </button>

        <button className="bg-slate-700 px-4 py-2 rounded-xl">
          Salinity
        </button>

        <button className="bg-slate-700 px-4 py-2 rounded-xl">
          ARGO
        </button>

      </div>

    </div>
  );
}