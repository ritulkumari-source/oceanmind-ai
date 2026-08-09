"use client";

import {
  FileText,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

const reports = [
  {
    title: "Bay of Bengal Ocean Analysis",
    date: "June 18, 2026",
    type: "Ocean Analysis",
  },
  {
    title: "Arabian Sea Marine Conditions",
    date: "June 16, 2026",
    type: "Marine Report",
  },
  {
    title: "ARGO Temperature Study",
    date: "June 12, 2026",
    type: "ARGO Analysis",
  },
];

export default function ReportsCard() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      {/* Header */}

      <div className="mb-7 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <FileText
            size={24}
            className="text-cyan-400"
          />

          <div>
            <h2 className="text-2xl font-bold text-white">
              Recent Reports
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Your latest ocean intelligence reports
            </p>
          </div>

        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          View All
          <ArrowUpRight size={17} />
        </button>

      </div>

      {/* Reports */}

      <div className="space-y-3">

        {reports.map((report) => (
          <div
            key={report.title}
            className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-5 py-4 transition hover:border-cyan-500/30 hover:bg-slate-950"
          >

            <div className="flex min-w-0 items-center gap-4">

              {/* Icon */}

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                <FileText
                  size={20}
                  className="text-cyan-400"
                />
              </div>

              {/* Information */}

              <div className="min-w-0">

                <h3 className="truncate font-semibold text-white">
                  {report.title}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">

                  <span className="text-slate-400">
                    {report.type}
                  </span>

                  <span className="flex items-center gap-1 text-slate-500">
                    <CalendarDays size={14} />
                    {report.date}
                  </span>

                </div>

              </div>

            </div>

            {/* Arrow */}

            <ArrowUpRight
              size={19}
              className="ml-4 shrink-0 text-slate-600 transition group-hover:text-cyan-400"
            />

          </div>
        ))}

      </div>

    </section>
  );
}