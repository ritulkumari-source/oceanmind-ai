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
    <section>

      {/* Header */}

      <div className="mb-7 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-cyan-50
              to-blue-50
              ring-1
              ring-cyan-100
            "
          >
            <FileText
              size={22}
              className="text-cyan-500"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-[#0F2D3D]">
              Recent Reports
            </h2>

            <p className="mt-1 text-sm text-[#718895]">
              Your latest ocean intelligence reports
            </p>

          </div>

        </div>

        <button
          type="button"
          className="
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-cyan-600
            transition
            hover:text-blue-600
          "
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
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-[#D8EAF0]
              bg-white
              px-5
              py-4
              shadow-[0_4px_18px_rgba(30,90,110,0.04)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-cyan-200
              hover:bg-[#FBFEFF]
              hover:shadow-[0_8px_25px_rgba(6,182,212,0.08)]
            "
          >

            <div className="flex min-w-0 items-center gap-4">

              {/* Icon */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-cyan-50
                  to-blue-50
                  ring-1
                  ring-cyan-100
                "
              >
                <FileText
                  size={20}
                  className="text-cyan-500"
                />
              </div>

              {/* Information */}

              <div className="min-w-0">

                <h3 className="truncate font-semibold text-[#0F2D3D]">
                  {report.title}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">

                  <span className="text-[#718895]">
                    {report.type}
                  </span>

                  <span className="flex items-center gap-1 text-[#8AA4B0]">
                    <CalendarDays size={14} />
                    {report.date}
                  </span>

                </div>

              </div>

            </div>

            {/* Arrow */}

            <ArrowUpRight
              size={19}
              className="
                ml-4
                shrink-0
                text-[#9AB2BC]
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-cyan-500
              "
            />

          </div>

        ))}

      </div>

    </section>
  );
}