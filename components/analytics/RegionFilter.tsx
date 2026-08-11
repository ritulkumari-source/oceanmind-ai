"use client";

import {
  CalendarDays,
  Download,
  Globe2,
} from "lucide-react";

export default function RegionFilter() {
  return (
    <section className="mb-8">

      {/* Header */}

      <div className="mb-6">

        <h1 className="text-4xl font-bold text-[#123247]">
          Ocean Analytics
        </h1>

        <p className="mt-2 text-[#52788C]">
          Monitor global ocean conditions and AI insights.
        </p>

      </div>

      {/* Filters */}

      <div className="flex flex-wrap items-center gap-4">

        {/* Region */}

        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-[#CFE5EE]
            bg-white
            px-4
            py-3
            shadow-[0_4px_18px_rgba(30,90,110,0.05)]
            transition-all
            duration-200
            focus-within:border-cyan-300
            focus-within:ring-4
            focus-within:ring-cyan-100
          "
        >

          <Globe2
            className="text-cyan-600"
            size={18}
          />

          <select
            defaultValue="Indian Ocean"
            className="
              cursor-pointer
              bg-transparent
              text-sm
              font-medium
              text-[#123247]
              outline-none
            "
          >
            <option>Indian Ocean</option>
            <option>Pacific Ocean</option>
            <option>Atlantic Ocean</option>
            <option>Southern Ocean</option>
            <option>Arctic Ocean</option>
          </select>

        </div>

        {/* Date */}

        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-[#CFE5EE]
            bg-white
            px-4
            py-3
            shadow-[0_4px_18px_rgba(30,90,110,0.05)]
            transition-all
            duration-200
            focus-within:border-cyan-300
            focus-within:ring-4
            focus-within:ring-cyan-100
          "
        >

          <CalendarDays
            className="text-blue-600"
            size={18}
          />

          <select
            defaultValue="Last 7 Days"
            className="
              cursor-pointer
              bg-transparent
              text-sm
              font-medium
              text-[#123247]
              outline-none
            "
          >
            <option>Last 7 Days</option>
            <option>Last Month</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>

        </div>

        {/* Export */}

        <button
          type="button"
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-md
            shadow-cyan-500/15
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:from-cyan-400
            hover:to-blue-400
            hover:shadow-lg
            hover:shadow-cyan-500/20
          "
        >

          <Download size={18} />

          Export

        </button>

      </div>

    </section>
  );
}