import Sidebar from "../../components/layout/Sidebar";
import RegionFilter from "../../components/analytics/RegionFilter";
import KPISection from "../../components/analytics/KPISection";
import TemperatureChart from "../../components/analytics/TemperatureChart";
import SalinityChart from "../../components/analytics/SalinityChart";

export default function AnalyticsPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">

        {/* Background Effects */}
        <div className="relative">

          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 p-8 max-w-7xl mx-auto">

            {/* Filters */}
            <RegionFilter />

            {/* KPI Cards */}
            <KPISection />

            {/* Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

              <TemperatureChart />

              <SalinityChart />

            </div>

            {/* AI Insights */}
            <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h2 className="text-3xl font-bold text-white">
                AI Ocean Insights
              </h2>

              <p className="text-slate-400 mt-2">
                OceanMind AI continuously analyzes global marine conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">

                  <h3 className="text-cyan-400 font-semibold text-lg">
                    🌊 Sea Temperature
                  </h3>

                  <p className="text-slate-300 mt-3 leading-7">
                    Sea Surface Temperature has increased by
                    <span className="text-cyan-400 font-bold">
                      {" "}2.4%
                    </span>
                    compared to the previous observation period.
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">

                  <h3 className="text-green-400 font-semibold text-lg">
                    🌍 Marine Conditions
                  </h3>

                  <p className="text-slate-300 mt-3 leading-7">
                    Ocean conditions remain stable across most monitored
                    regions with no severe anomalies detected.
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">

                  <h3 className="text-yellow-400 font-semibold text-lg">
                    🚨 AI Prediction
                  </h3>

                  <p className="text-slate-300 mt-3 leading-7">
                    OceanMind predicts a moderate increase in wave height
                    across the Bay of Bengal within the next 48 hours.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}