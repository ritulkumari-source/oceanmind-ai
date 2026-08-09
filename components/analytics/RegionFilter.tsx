"use client";

import { CalendarDays, Download, Globe2 } from "lucide-react";

export default function RegionFilter() {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900 p-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Ocean Analytics
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor global ocean conditions and AI insights.
        </p>

      </div>

      <div className="flex flex-wrap gap-4">

        {/* Region */}

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3">

          <Globe2
            className="text-cyan-400"
            size={18}
          />

          <select className="bg-transparent text-white outline-none">

            <option>Indian Ocean</option>

            <option>Pacific Ocean</option>

            <option>Atlantic Ocean</option>

            <option>Southern Ocean</option>

            <option>Arctic Ocean</option>

          </select>

        </div>

        {/* Date */}

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3">

          <CalendarDays
            className="text-cyan-400"
            size={18}
          />

          <select className="bg-transparent text-white outline-none">

            <option>Last 7 Days</option>

            <option>Last Month</option>

            <option>Last 6 Months</option>

            <option>Last Year</option>

          </select>

        </div>

        {/* Export */}

        <button className="flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400">

          <Download size={18} />

          Export

        </button>

      </div>

    </div>
  );
}