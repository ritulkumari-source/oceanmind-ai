"use client";

import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  Lightbulb,
  Target,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Collect Ocean Data",
    description:
      "OceanMind brings together marine observations, ARGO data and other ocean datasets into one connected intelligence layer.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI Analyzes Patterns",
    description:
      "Our intelligence layer processes complex ocean information to identify patterns, changes and meaningful signals.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Generate Insights",
    description:
      "Complex observations become understandable insights, visualizations, alerts, forecasts and research information.",
  },
  {
    number: "04",
    icon: Target,
    title: "Make Better Decisions",
    description:
      "Researchers, scientists and decision-makers can use these insights to understand marine conditions and act faster.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-900/30 px-6 py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            How It Works
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            From raw data to
            <span className="text-cyan-400"> ocean intelligence.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            OceanMind turns complicated marine datasets into actionable
            intelligence through a simple four-step workflow.
          </p>
        </motion.div>

        {/* Steps */}

        <div className="relative mt-20">

          {/* Connecting line */}

          <div className="absolute left-[12.5%] right-[12.5%] top-16 hidden h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative text-center"
                >

                  {/* Number */}

                  <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950 shadow-[0_0_40px_rgba(6,182,212,0.08)]">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">

                      <Icon
                        size={32}
                        className="text-cyan-400"
                      />

                    </div>

                    <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">
                      {step.number}
                    </span>

                  </div>

                  {/* Arrow */}

                  {index < steps.length - 1 && (
                    <div className="absolute right-[-25px] top-14 hidden lg:block">

                      <ArrowRight
                        size={22}
                        className="text-cyan-500/40"
                      />

                    </div>
                  )}

                  {/* Text */}

                  <h3 className="mt-8 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Bottom pipeline */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mx-auto mt-20 max-w-5xl rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center backdrop-blur-sm"
        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            OceanMind Intelligence Pipeline
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-lg font-semibold">

            <span className="text-slate-300">
              Ocean Data
            </span>

            <span className="text-cyan-400">
              →
            </span>

            <span className="text-slate-300">
              AI Analysis
            </span>

            <span className="text-cyan-400">
              →
            </span>

            <span className="text-slate-300">
              Smart Insights
            </span>

            <span className="text-cyan-400">
              →
            </span>

            <span className="text-cyan-300">
              Better Decisions
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}