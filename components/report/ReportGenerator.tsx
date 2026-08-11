"use client";

import {
  CalendarDays,
  FileText,
  Globe2,
  Sparkles,
} from "lucide-react";

export default function ReportGenerator() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-[#CFE5EE]
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(30,90,110,0.07)]
        transition-all
        duration-300
        hover:border-cyan-200
        hover:shadow-[0_12px_35px_rgba(6,182,212,0.10)]
        md:p-8
      "
    >

      {/* Header */}

      <div className="mb-7 flex items-center gap-3">

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

          <h2 className="text-2xl font-bold text-[#123247] md:text-3xl">
            AI Report Generator
          </h2>

          <p className="mt-1 text-sm text-[#718895]">
            Generate comprehensive ocean intelligence reports.
          </p>

        </div>

      </div>

      {/* Form */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Ocean Region */}

        <div>

          <label
            htmlFor="ocean-region"
            className="mb-2 block text-sm font-semibold text-[#365466]"
          >
            Ocean Region
          </label>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFD]
              px-4
              py-4
              transition-all
              duration-200
              focus-within:border-cyan-400
              focus-within:bg-white
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            <Globe2
              className="shrink-0 text-cyan-500"
              size={20}
            />

            <select
              id="ocean-region"
              className="
                flex-1
                cursor-pointer
                bg-transparent
                text-sm
                font-medium
                text-[#123247]
                outline-none
              "
              defaultValue="Indian Ocean"
            >
              <option>Indian Ocean</option>
              <option>Pacific Ocean</option>
              <option>Atlantic Ocean</option>
              <option>Southern Ocean</option>
              <option>Arctic Ocean</option>
            </select>

          </div>

        </div>

        {/* Time Period */}

        <div>

          <label
            htmlFor="time-period"
            className="mb-2 block text-sm font-semibold text-[#365466]"
          >
            Time Period
          </label>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFD]
              px-4
              py-4
              transition-all
              duration-200
              focus-within:border-cyan-400
              focus-within:bg-white
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            <CalendarDays
              className="shrink-0 text-blue-500"
              size={20}
            />

            <select
              id="time-period"
              className="
                flex-1
                cursor-pointer
                bg-transparent
                text-sm
                font-medium
                text-[#123247]
                outline-none
              "
              defaultValue="Last 7 Days"
            >
              <option>Last 7 Days</option>
              <option>Last Month</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>

          </div>

        </div>

      </div>

      {/* Generate Button */}

      <button
        type="button"
        className="
          mt-7
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          py-4
          font-bold
          text-white
          shadow-lg
          shadow-cyan-500/20
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:from-cyan-400
          hover:to-blue-400
          hover:shadow-xl
          hover:shadow-cyan-500/20
          active:translate-y-0
        "
      >
        <FileText size={20} />

        Generate AI Report

      </button>

    </section>
  );
}