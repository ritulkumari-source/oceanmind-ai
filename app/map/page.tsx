"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Waves,
  Map,
  Layers3,
  Activity,
} from "lucide-react";

import Sidebar from "../../components/layout/Sidebar";
import OceanMap from "../../components/map/OceanMap";

export default function MapPage() {
  return (
    <main className="flex min-h-screen bg-[#DCEFF7] text-[#123247]">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <Sidebar />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative min-w-0 flex-1 overflow-y-auto overflow-x-hidden">

        {/* ===================================================
            OCEAN BACKGROUND EFFECTS
        ==================================================== */}

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

        {/* ===================================================
            PAGE CONTENT
        ==================================================== */}

        <div className="relative z-10 p-6 md:p-8">

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-3">

                {/* Icon */}

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
                  <Waves
                    size={26}
                    className="text-white"
                  />
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

                  <h1 className="mt-1 text-3xl font-bold text-[#123247]">
                    Ocean Map
                  </h1>

                </div>

              </div>

              <p className="max-w-2xl text-[#52788C]">
                Explore oceanographic data and monitor marine
                conditions through an interactive global map.
              </p>

            </div>

            {/* Back Button */}

            <Link
              href="/dashboard"
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-xl
                border
                border-[#CFE5EE]
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-[#52788C]
                shadow-[0_4px_18px_rgba(30,90,110,0.06)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-cyan-300
                hover:bg-cyan-50
                hover:text-cyan-600
              "
            >
              <ArrowLeft size={18} />

              Back to Dashboard
            </Link>

          </div>

          {/* =================================================
              STATS
          ================================================== */}

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* Map Coverage */}

            <div
              className="
                rounded-2xl
                border
                border-[#CFE5EE]
                bg-white
                p-5
                shadow-[0_6px_25px_rgba(30,90,110,0.06)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-cyan-200
                hover:shadow-[0_10px_30px_rgba(6,182,212,0.10)]
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
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
                  <Map
                    size={20}
                    className="text-cyan-500"
                  />
                </div>

                <div>

                  <p className="text-sm text-[#718895]">
                    Map Coverage
                  </p>

                  <p className="text-xl font-bold text-[#123247]">
                    Global
                  </p>

                </div>

              </div>

            </div>

            {/* Data Layers */}

            <div
              className="
                rounded-2xl
                border
                border-[#CFE5EE]
                bg-white
                p-5
                shadow-[0_6px_25px_rgba(30,90,110,0.06)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-cyan-200
                hover:shadow-[0_10px_30px_rgba(6,182,212,0.10)]
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
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
                  <Layers3
                    size={20}
                    className="text-blue-500"
                  />
                </div>

                <div>

                  <p className="text-sm text-[#718895]">
                    Data Layers
                  </p>

                  <p className="text-xl font-bold text-[#123247]">
                    Ocean Data
                  </p>

                </div>

              </div>

            </div>

            {/* Data Status */}

            <div
              className="
                rounded-2xl
                border
                border-[#CFE5EE]
                bg-white
                p-5
                shadow-[0_6px_25px_rgba(30,90,110,0.06)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-cyan-200
                hover:shadow-[0_10px_30px_rgba(6,182,212,0.10)]
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-50
                    ring-1
                    ring-emerald-100
                  "
                >
                  <Activity
                    size={20}
                    className="text-emerald-500"
                  />
                </div>

                <div>

                  <p className="text-sm text-[#718895]">
                    Data Status
                  </p>

                  <div className="mt-1 flex items-center gap-2">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                    <p className="text-xl font-bold text-emerald-600">
                      Live
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              MAP
          ================================================== */}

          <section
            className="
              overflow-hidden
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              p-3
              shadow-[0_10px_40px_rgba(30,90,110,0.10)]
            "
          >

            <div className="overflow-hidden rounded-2xl">

              <OceanMap />

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}