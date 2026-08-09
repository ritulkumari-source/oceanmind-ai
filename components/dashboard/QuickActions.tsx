"use client";

import Link from "next/link";
import {
  FileText,
  Bot,
  Map,
  ArrowUpRight,
} from "lucide-react";

export default function QuickActions() {
  return (
    <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">

      {/* Header */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Instantly access OceanMind AI tools.
        </p>
      </div>

      {/* Actions */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Generate Report */}

        <Link
          href="/report"
          className="group relative rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <div className="flex items-start justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500">
              <FileText
                size={27}
                className="text-white"
              />
            </div>

            <ArrowUpRight
              size={20}
              className="text-slate-600 transition group-hover:text-cyan-400"
            />

          </div>

          <h3 className="mt-7 text-xl font-bold text-white">
            Generate Report
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Create AI-powered ocean research reports.
          </p>

        </Link>

        {/* AI Assistant */}

        <Link
          href="/chat"
          className="group relative rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
        >
          <div className="flex items-start justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500">
              <Bot
                size={27}
                className="text-white"
              />
            </div>

            <ArrowUpRight
              size={20}
              className="text-slate-600 transition group-hover:text-purple-400"
            />

          </div>

          <h3 className="mt-7 text-xl font-bold text-white">
            AI Assistant
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Ask OceanMind anything about marine data.
          </p>

        </Link>

        {/* Ocean Map */}

        <Link
          href="/map"
          className="group relative rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <div className="flex items-start justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500">
              <Map
                size={27}
                className="text-white"
              />
            </div>

            <ArrowUpRight
              size={20}
              className="text-slate-600 transition group-hover:text-emerald-400"
            />

          </div>

          <h3 className="mt-7 text-xl font-bold text-white">
            Ocean Map
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Explore global ARGO float locations.
          </p>

        </Link>

      </div>

    </section>
  );
}