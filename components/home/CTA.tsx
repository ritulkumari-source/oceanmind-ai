"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Waves } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24">

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* CTA Card */}

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 px-8 py-16 text-center md:px-16">

        {/* Decorative Glow */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Icon */}

        <div className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
          <Waves
            size={30}
            className="text-cyan-400"
          />
        </div>

        {/* Badge */}

        <div className="relative mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">

          <Sparkles size={16} />

          <span>
            Explore the future of ocean intelligence
          </span>

        </div>

        {/* Heading */}

        <h2 className="relative mx-auto max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl">

          Ready to understand{" "}

          <span className="text-cyan-400">
            our oceans?
          </span>

        </h2>

        {/* Description */}

        <p className="relative mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">

          Explore marine data, discover hidden patterns,
          generate intelligent insights and make better
          decisions with OceanMind AI.

        </p>

        {/* CTA */}

        <div className="relative mt-10 flex justify-center">

          <Link
            href="/login"
            className="group flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/30"
          >

            Start Exploring

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

        {/* Bottom Text */}

        <p className="relative mt-7 text-sm text-slate-500">
          Explore ocean intelligence in one connected platform.
        </p>

      </div>

    </section>
  );
}