import Sidebar from "../../components/Sidebar";
import AIChatCard from "../../components/AIChatCard";
import OceanMapCard from "../../components/OceanMapCard";
import TemperatureChart from "../../components/TemperatureChart";
import MarineAlerts from "../../components/MarineAlerts";
import ReportsCard from "../../components/ReportsCards";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            🌊 Ocean Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            AI-powered ocean intelligence platform
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="rounded-3xl bg-slate-800 p-6 border border-cyan-500/20">
            <p className="text-gray-400">Ocean Records</p>
            <h2 className="text-4xl font-bold text-cyan-400 mt-3">
              1.8M
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-800 p-6 border border-cyan-500/20">
            <p className="text-gray-400">ARGO Floats</p>
            <h2 className="text-4xl font-bold text-cyan-400 mt-3">
              4500
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-800 p-6 border border-cyan-500/20">
            <p className="text-gray-400">Countries</p>
            <h2 className="text-4xl font-bold text-cyan-400 mt-3">
              190
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-800 p-6 border border-cyan-500/20">
            <p className="text-gray-400">AI Accuracy</p>
            <h2 className="text-4xl font-bold text-cyan-400 mt-3">
              98%
            </h2>
          </div>

        </div>

        {/* AI Chat + Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <AIChatCard />
          <OceanMapCard />
        </div>

        {/* Charts + Alerts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <TemperatureChart />
          <MarineAlerts />
        </div>

        {/* Reports */}
        <ReportsCard />

      </div>

    </main>
  );
}