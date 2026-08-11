"use client";

import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function AISummary() {
  return (
    <div>

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

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
            shadow-lg
            shadow-cyan-500/20
          "
        >
          <Sparkles
            className="text-white"
            size={24}
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#123247]">
            AI Ocean Summary
          </h2>

          <p className="mt-1 text-sm text-[#718895]">
            Automatically generated insights from OceanMind AI.
          </p>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="space-y-4">

        {/* Temperature Trend */}

        <div
          className="
            rounded-2xl
            border
            border-[#CFE5EE]
            bg-white
            p-6
            shadow-[0_6px_25px_rgba(30,90,110,0.06)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-cyan-200
            hover:shadow-[0_10px_30px_rgba(6,182,212,0.09)]
          "
        >

          <div className="mb-3 flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-cyan-50
              "
            >
              <TrendingUp
                className="text-cyan-600"
                size={21}
              />
            </div>

            <h3 className="text-xl font-semibold text-[#123247]">
              Temperature Trend
            </h3>

          </div>

          <p className="leading-7 text-[#52788C]">
            OceanMind AI detected a{" "}
            <span className="font-semibold text-cyan-600">
              2.4% increase
            </span>{" "}
            in average sea surface temperature across the Indian Ocean
            over the last month.
          </p>

        </div>

        {/* Marine Alert */}

        <div
          className="
            rounded-2xl
            border
            border-amber-200
            bg-amber-50/70
            p-6
            shadow-[0_5px_20px_rgba(180,120,20,0.05)]
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
        >

          <div className="mb-3 flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-amber-100
              "
            >
              <AlertTriangle
                className="text-amber-600"
                size={21}
              />
            </div>

            <h3 className="text-xl font-semibold text-amber-900">
              Marine Alert
            </h3>

          </div>

          <p className="leading-7 text-amber-800/80">
            Elevated wave activity is expected in the Bay of Bengal
            during the next 48 hours. Coastal monitoring is recommended.
          </p>

        </div>

        {/* Overall Assessment */}

        <div
          className="
            rounded-2xl
            border
            border-emerald-200
            bg-emerald-50/70
            p-6
            shadow-[0_5px_20px_rgba(20,140,90,0.05)]
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
        >

          <div className="mb-3 flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-emerald-100
              "
            >
              <CheckCircle2
                className="text-emerald-600"
                size={21}
              />
            </div>

            <h3 className="text-xl font-semibold text-emerald-900">
              Overall Assessment
            </h3>

          </div>

          <p className="leading-7 text-emerald-800/80">
            Current ocean conditions remain stable across most monitored
            regions. No critical anomalies have been detected outside the
            identified high-wave zones.
          </p>

        </div>

      </div>

    </div>
  );
}