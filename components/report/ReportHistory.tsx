"use client";

import {
  Download,
  FileText,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const reports = [
  {
    title: "Indian Ocean Weekly Analysis",
    date: "8 Aug 2026",
    status: "Completed",
  },
  {
    title: "Bay of Bengal Marine Forecast",
    date: "6 Aug 2026",
    status: "Completed",
  },
  {
    title: "Arabian Sea Temperature Report",
    date: "4 Aug 2026",
    status: "Completed",
  },
  {
    title: "Global Ocean Climate Summary",
    date: "1 Aug 2026",
    status: "Completed",
  },
];

export default function ReportHistory() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-3 mb-8">

        <FileText
          className="text-cyan-400"
          size={28}
        />

        <div>

          <h2 className="text-3xl font-bold text-white">
            Recent Reports
          </h2>

          <p className="text-slate-400 mt-1">
            Previously generated AI reports.
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {reports.map((report) => (

          <div
            key={report.title}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-5 hover:border-cyan-500 transition"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-lg font-semibold text-white">
                  {report.title}
                </h3>

                <div className="flex items-center gap-4 mt-3 text-sm text-slate-400">

                  <div className="flex items-center gap-2">

                    <Clock3 size={15} />

                    {report.date}

                  </div>

                  <div className="flex items-center gap-2 text-green-400">

                    <CheckCircle2 size={15} />

                    {report.status}

                  </div>

                </div>

              </div>

              <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 hover:bg-cyan-400 transition">

                <Download size={18} />

                PDF

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}