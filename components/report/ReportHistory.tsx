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
    <section>

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
          <FileText
            className="text-white"
            size={24}
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#123247]">
            Recent Reports
          </h2>

          <p className="mt-1 text-sm text-[#718895]">
            Previously generated AI reports.
          </p>

        </div>

      </div>

      {/* Reports */}

      <div className="space-y-4">

        {reports.map((report) => (

          <div
            key={report.title}
            className="
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-white
              p-5
              shadow-[0_6px_25px_rgba(30,90,110,0.05)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-cyan-200
              hover:shadow-[0_10px_30px_rgba(6,182,212,0.09)]
            "
          >

            <div className="flex items-center justify-between gap-4">

              {/* Report information */}

              <div className="min-w-0">

                <h3 className="truncate text-lg font-semibold text-[#123247]">
                  {report.title}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">

                  {/* Date */}

                  <div className="flex items-center gap-2 text-[#718895]">

                    <Clock3 size={15} />

                    {report.date}

                  </div>

                  {/* Status */}

                  <div className="flex items-center gap-2 font-medium text-emerald-600">

                    <CheckCircle2 size={15} />

                    {report.status}

                  </div>

                </div>

              </div>

              {/* Download */}

              <button
                type="button"
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-md
                  shadow-cyan-500/15
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:from-cyan-400
                  hover:to-blue-400
                  hover:shadow-lg
                "
              >

                <Download size={17} />

                PDF

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}