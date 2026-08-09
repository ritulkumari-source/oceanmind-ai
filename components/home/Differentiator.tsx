"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Layers3,
  BrainCircuit,
  BarChart3,
  ArrowRight,
  Check,
  X,
} from "lucide-react";

const comparisons = [
  {
    feature: "Ocean data analysis",
    traditional: "Manual & fragmented",
    oceanmind: "AI-powered",
  },
  {
    feature: "Data sources",
    traditional: "Multiple disconnected tools",
    oceanmind: "Unified intelligence platform",
  },
  {
    feature: "Insights",
    traditional: "Raw data & static charts",
    oceanmind: "AI-generated insights",
  },
  {
    feature: "Reports",
    traditional: "Manual preparation",
    oceanmind: "AI-assisted generation",
  },
  {
    feature: "Monitoring",
    traditional: "Periodic analysis",
    oceanmind: "Continuous intelligence",
  },
];

const highlights = [
  {
    icon: Clock3,
    title: "Seconds, not hours",
    description:
      "Move from raw observations to understandable insights much faster.",
  },
  {
    icon: Layers3,
    title: "One connected platform",
    description:
      "Bring visualization, analytics, AI assistance and reporting together.",
  },
  {
    icon: BrainCircuit,
    title: "Built around intelligence",
    description:
      "Go beyond displaying data by helping users understand what the data means.",
  },
  {
    icon: BarChart3,
    title: "Research-ready output",
    description:
      "Turn complex ocean information into useful visualizations and reports.",
  },
];

export default function Differentiator() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28">

      {/* Background */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

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
            Why OceanMind is Different
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">

            Don't just see

            <span className="text-cyan-400">
              {" "}ocean data.
            </span>

            <br />

            Understand it.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Traditional ocean-data workflows often require multiple tools,
            manual analysis and significant time. OceanMind brings those
            capabilities together around an intelligent workflow.
          </p>

        </motion.div>

        {/* Comparison */}

        <motion.div
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
            duration: 0.8,
          }}
          className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60"
        >

          {/* Table Header */}

          <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-900/80 p-5 md:p-6">

            <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Capability
            </div>

            <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Traditional Workflow
            </div>

            <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              OceanMind AI
            </div>

          </div>

          {/* Rows */}

          {comparisons.map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="grid grid-cols-3 border-b border-slate-800/70 p-5 last:border-b-0 md:p-6"
            >

              <div className="font-medium text-slate-200">
                {item.feature}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <X
                  size={16}
                  className="hidden text-red-400 sm:block"
                />

                {item.traditional}

              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">

                <Check
                  size={16}
                  className="hidden text-green-400 sm:block"
                />

                {item.oceanmind}

              </div>

            </motion.div>
          ))}

        </motion.div>

        {/* Highlights */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7 transition hover:border-cyan-500/30"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon
                    size={24}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 flex flex-col items-center justify-center text-center"
        >

          <p className="max-w-3xl text-2xl font-semibold leading-10 text-white md:text-3xl">

            One platform.

            <span className="text-cyan-400">
              {" "}One intelligent workflow.
            </span>

            <br />

            <span className="text-slate-500">
              A smarter way to understand our oceans.
            </span>

          </p>

          <ArrowRight
            size={28}
            className="mt-6 rotate-90 text-cyan-400"
          />

        </motion.div>

      </div>

    </section>
  );
}