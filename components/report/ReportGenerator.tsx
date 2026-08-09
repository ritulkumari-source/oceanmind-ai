"use client";

import {
  CalendarDays,
  FileText,
  Globe2,
  Sparkles,
} from "lucide-react";

export default function ReportGenerator() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-3 mb-6">

        <Sparkles
          className="text-cyan-400"
          size={28}
        />

        <div>

          <h2 className="text-3xl font-bold text-white">
            AI Report Generator
          </h2>

          <p className="text-slate-400 mt-1">
            Generate comprehensive ocean intelligence reports.
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Ocean Region */}

        <div>

          <label className="text-slate-300 mb-2 block">
            Ocean Region
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

            <Globe2
              className="text-cyan-400"
              size={20}
            />

            <select className="bg-transparent flex-1 outline-none text-white">

              <option>Indian Ocean</option>
              <option>Pacific Ocean</option>
              <option>Atlantic Ocean</option>
              <option>Southern Ocean</option>
              <option>Arctic Ocean</option>

            </select>

          </div>

        </div>

        {/* Time Range */}

        <div>

          <label className="text-slate-300 mb-2 block">
            Time Period
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

            <CalendarDays
              className="text-cyan-400"
              size={20}
            />

            <select className="bg-transparent flex-1 outline-none text-white">

              <option>Last 7 Days</option>
              <option>Last Month</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>

            </select>

          </div>

        </div>

      </div>

      <button className="mt-8 w-full rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition py-4 font-bold flex items-center justify-center gap-3">

        <FileText size={20} />

        Generate AI Report

      </button>

    </div>
  );
}