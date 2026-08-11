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
    <section className="mt-8">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-[#0F2D3D]">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-[#718895]">
          Instantly access OceanMind AI tools.
        </p>

      </div>

      {/* Actions */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Generate Report */}

        <Link
          href="/report"
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#D8EAF0]
            bg-white
            p-6
            shadow-[0_8px_30px_rgba(30,90,110,0.07)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-300
            hover:shadow-[0_12px_35px_rgba(6,182,212,0.14)]
          "
        >

          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-28
              w-28
              rounded-full
              bg-cyan-200/30
              blur-2xl
              transition
              group-hover:bg-cyan-300/40
            "
          />

          <div className="relative">

            <div className="flex items-start justify-between">

              <div
                className="
                  flex
                  h-14
                  w-14
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
                  size={27}
                  className="text-white"
                />
              </div>

              <ArrowUpRight
                size={20}
                className="
                  text-[#8AA4B0]
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-cyan-500
                "
              />

            </div>

            <h3 className="mt-7 text-xl font-bold text-[#0F2D3D]">
              Generate Report
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#718895]">
              Create AI-powered ocean research reports.
            </p>

            <div
              className="
                mt-6
                h-1
                w-14
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                transition-all
                duration-300
                group-hover:w-24
              "
            />

          </div>

        </Link>

        {/* AI Assistant */}

        <Link
          href="/chat"
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#D8EAF0]
            bg-white
            p-6
            shadow-[0_8px_30px_rgba(30,90,110,0.07)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-300
            hover:shadow-[0_12px_35px_rgba(6,182,212,0.14)]
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-28
              w-28
              rounded-full
              bg-blue-200/25
              blur-2xl
              transition
              group-hover:bg-blue-300/35
            "
          />

          <div className="relative">

            <div className="flex items-start justify-between">

              <div
                className="
                  flex
                  h-14
                  w-14
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
                <Bot
                  size={27}
                  className="text-white"
                />
              </div>

              <ArrowUpRight
                size={20}
                className="
                  text-[#8AA4B0]
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-cyan-500
                "
              />

            </div>

            <h3 className="mt-7 text-xl font-bold text-[#0F2D3D]">
              AI Assistant
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#718895]">
              Ask OceanMind anything about marine data.
            </p>

            <div
              className="
                mt-6
                h-1
                w-14
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                transition-all
                duration-300
                group-hover:w-24
              "
            />

          </div>

        </Link>

        {/* Ocean Map */}

        <Link
          href="/map"
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#D8EAF0]
            bg-white
            p-6
            shadow-[0_8px_30px_rgba(30,90,110,0.07)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-300
            hover:shadow-[0_12px_35px_rgba(6,182,212,0.14)]
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-28
              w-28
              rounded-full
              bg-cyan-200/30
              blur-2xl
              transition
              group-hover:bg-cyan-300/40
            "
          />

          <div className="relative">

            <div className="flex items-start justify-between">

              <div
                className="
                  flex
                  h-14
                  w-14
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
                <Map
                  size={27}
                  className="text-white"
                />
              </div>

              <ArrowUpRight
                size={20}
                className="
                  text-[#8AA4B0]
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-cyan-500
                "
              />

            </div>

            <h3 className="mt-7 text-xl font-bold text-[#0F2D3D]">
              Ocean Map
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#718895]">
              Explore global ARGO float locations.
            </p>

            <div
              className="
                mt-6
                h-1
                w-14
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                transition-all
                duration-300
                group-hover:w-24
              "
            />

          </div>

        </Link>

      </div>

    </section>
  );
}