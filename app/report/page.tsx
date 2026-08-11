"use client";

import Sidebar from "../../components/layout/Sidebar";

import ReportGenerator from "../../components/report/ReportGenerator";
import ReportHistory from "../../components/report/ReportHistory";
import AISummary from "../../components/report/AISummary";

export default function ReportPage() {
  return (
    <main className="flex min-h-screen bg-[#DCEFF7] text-[#123247]">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="relative min-w-0 flex-1 overflow-y-auto overflow-x-hidden">

        {/* Background Effects */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/15
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        {/* Content */}

        <div className="relative z-10 mx-auto w-full max-w-7xl p-6 md:p-8">

          {/* Page Header */}

          <div className="mb-8">

            <div className="mb-3 flex items-center gap-3">

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
                <span className="text-xl">
                  📄
                </span>
              </div>

              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wider
                    text-cyan-600
                  "
                >
                  Ocean Intelligence
                </p>

                <h1 className="text-4xl font-bold text-[#123247] md:text-5xl">
                  Ocean Reports
                </h1>

              </div>

            </div>

            <p className="max-w-3xl text-base leading-7 text-[#52788C] md:text-lg">
              Generate AI-powered marine intelligence reports and
              download comprehensive insights.
            </p>

          </div>

          {/* AI Report Generator */}

          <ReportGenerator />

          {/* =================================================
              REPORTS + AI SUMMARY
          ================================================== */}

          <div className="mt-8 grid grid-cols-1 items-start gap-8 xl:grid-cols-2">

            {/* Recent Reports Card */}

            <section
              className="
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.07)]
                md:p-7
              "
            >
              <ReportHistory />
            </section>

            {/* AI Summary Card */}

            <section
              className="
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.07)]
                md:p-7
              "
            >
              <AISummary />
            </section>

          </div>

          <div className="h-8" />

        </div>

      </div>

    </main>
  );
}