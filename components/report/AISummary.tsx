"use client";

import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function AISummary() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-3 mb-8">

        <Sparkles
          className="text-cyan-400"
          size={28}
        />

        <div>

          <h2 className="text-3xl font-bold text-white">
            AI Ocean Summary
          </h2>

          <p className="text-slate-400 mt-1">
            Automatically generated insights from OceanMind AI.
          </p>

        </div>

      </div>

      <div className="space-y-6">

        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-3">

            <TrendingUp
              className="text-cyan-400"
              size={22}
            />

            <h3 className="text-xl font-semibold text-white">
              Temperature Trend
            </h3>

          </div>

          <p className="text-slate-300 leading-7">
            OceanMind AI detected a
            <span className="text-cyan-400 font-semibold">
              {" "}2.4% increase
            </span>
            {" "}in average sea surface temperature across the Indian Ocean
            over the last month.
          </p>

        </div>

        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-3">

            <AlertTriangle
              className="text-yellow-400"
              size={22}
            />

            <h3 className="text-xl font-semibold text-white">
              Marine Alert
            </h3>

          </div>

          <p className="text-slate-300 leading-7">
            Elevated wave activity is expected in the Bay of Bengal
            during the next 48 hours. Coastal monitoring is recommended.
          </p>

        </div>

        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">

          <div className="flex items-center gap-3 mb-3">

            <CheckCircle2
              className="text-green-400"
              size={22}
            />

            <h3 className="text-xl font-semibold text-white">
              Overall Assessment
            </h3>

          </div>

          <p className="text-slate-300 leading-7">
            Current ocean conditions remain stable across most monitored
            regions. No critical anomalies have been detected outside the
            identified high-wave zones.
          </p>

        </div>

      </div>

    </div>
  );
}