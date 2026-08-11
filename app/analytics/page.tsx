"use client";

import Sidebar from "../../components/layout/Sidebar";
import KPISection from "../../components/analytics/KPISection";
import TemperatureChart from "../../components/analytics/TemperatureChart";
import SalinityChart from "../../components/analytics/SalinityChart";

import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <main className="flex min-h-screen bg-[#DCEFF7] text-[#123247]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-w-0 flex-1 overflow-y-auto">

        {/* Background Effects */}
        <div className="pointer-events-none fixed right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="pointer-events-none fixed bottom-0 left-80 h-96 w-96 rounded-full bg-blue-300/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl p-8">

          {/* ================================================= */}
          {/* OCEAN ANALYTICS HEADER */}
          {/* ================================================= */}

          <section className="mb-10">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-400
                      to-blue-500
                      shadow-lg
                      shadow-cyan-500/20
                    "
                  >
                    <TrendingUp
                      size={28}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
                      Ocean Intelligence
                    </p>

                    <h1 className="mt-1 text-4xl font-bold text-[#123247]">
                      Ocean Analytics
                    </h1>

                  </div>

                </div>

                <p className="mt-5 max-w-3xl text-base leading-7 text-[#52788C]">
                  Explore oceanographic trends, marine conditions and
                  AI-powered insights from global ocean data.
                </p>

              </div>

              {/* Status */}

              <div
                className="
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-cyan-100
                  bg-cyan-50
                  px-5
                  py-3
                "
              >

                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                <div>

                  <p className="text-sm font-semibold text-[#123247]">
                    Analytics Active
                  </p>

                  <p className="text-xs text-[#718895]">
                    Live ocean data
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* ================================================= */}
          {/* KPI CARDS */}
          {/* ================================================= */}

          <KPISection />

          {/* ================================================= */}
          {/* CHARTS */}
          {/* ================================================= */}

          <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">

            <TemperatureChart />

            <SalinityChart />

          </div>

          {/* ================================================= */}
          {/* AI OCEAN INSIGHTS */}
          {/* ================================================= */}

          <section
            className="
              mt-8
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              p-8
              shadow-[0_8px_30px_rgba(30,90,110,0.07)]
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500
                  shadow-md
                  shadow-cyan-500/20
                "
              >
                <Sparkles
                  size={24}
                  className="text-white"
                />
              </div>

              <div>

                <h2 className="text-3xl font-bold text-[#123247]">
                  AI Ocean Insights
                </h2>

                <p className="mt-1 text-sm text-[#718895]">
                  OceanMind AI continuously analyzes global marine
                  conditions.
                </p>

              </div>

            </div>

            {/* Insight Cards */}

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

              {/* Temperature */}

              <div
                className="
                  rounded-2xl
                  border
                  border-cyan-100
                  bg-cyan-50/60
                  p-6
                  transition
                  hover:-translate-y-1
                  hover:border-cyan-200
                "
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">

                    <TrendingUp
                      size={20}
                      className="text-cyan-600"
                    />

                  </div>

                  <h3 className="text-lg font-semibold text-[#123247]">
                    Sea Temperature
                  </h3>

                </div>

                <p className="mt-4 leading-7 text-[#52788C]">
                  Sea Surface Temperature has increased by{" "}
                  <span className="font-bold text-cyan-600">
                    2.4%
                  </span>{" "}
                  compared to the previous observation period.
                </p>

              </div>

              {/* Marine Conditions */}

              <div
                className="
                  rounded-2xl
                  border
                  border-emerald-100
                  bg-emerald-50/60
                  p-6
                  transition
                  hover:-translate-y-1
                  hover:border-emerald-200
                "
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">

                    <CheckCircle2
                      size={20}
                      className="text-emerald-600"
                    />

                  </div>

                  <h3 className="text-lg font-semibold text-[#123247]">
                    Marine Conditions
                  </h3>

                </div>

                <p className="mt-4 leading-7 text-[#52788C]">
                  Ocean conditions remain stable across most monitored
                  regions with no severe anomalies detected.
                </p>

              </div>

              {/* AI Prediction */}

              <div
                className="
                  rounded-2xl
                  border
                  border-amber-100
                  bg-amber-50/70
                  p-6
                  transition
                  hover:-translate-y-1
                  hover:border-amber-200
                "
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">

                    <AlertTriangle
                      size={20}
                      className="text-amber-600"
                    />

                  </div>

                  <h3 className="text-lg font-semibold text-[#123247]">
                    AI Prediction
                  </h3>

                </div>

                <p className="mt-4 leading-7 text-[#52788C]">
                  OceanMind predicts a moderate increase in wave
                  height across the Bay of Bengal within the next
                  48 hours.
                </p>

              </div>

            </div>

          </section>

          <div className="h-10" />

        </div>

      </div>

    </main>
  );
}