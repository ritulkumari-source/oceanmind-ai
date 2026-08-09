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
    <main className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="relative flex-1 overflow-y-auto">

        {/* Background Effects */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 p-8">

          {/* Header */}

          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Waves
                    size={26}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                    Ocean Intelligence
                  </p>

                  <h1 className="text-3xl font-bold">
                    Ocean Map
                  </h1>
                </div>

              </div>

              <p className="max-w-2xl text-slate-400">
                Explore oceanographic data and monitor marine
                conditions through an interactive global map.
              </p>

            </div>

            {/* Back to Dashboard */}

            <Link
              href="/dashboard"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/50 hover:bg-slate-800 hover:text-cyan-400"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </Link>

          </div>

          {/* Stats */}

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Map
                    size={20}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Map Coverage
                  </p>

                  <p className="text-xl font-bold">
                    Global
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <Layers3
                    size={20}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Data Layers
                  </p>

                  <p className="text-xl font-bold">
                    Ocean Data
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                  <Activity
                    size={20}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Data Status
                  </p>

                  <p className="text-xl font-bold text-green-400">
                    Live
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Map */}

          <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-3 shadow-2xl">

            <div className="overflow-hidden rounded-2xl">

              <OceanMap />

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}