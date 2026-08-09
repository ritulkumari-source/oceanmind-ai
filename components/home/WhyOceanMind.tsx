"use client";

import { motion } from "framer-motion";
import {
  Zap,
  BrainCircuit,
  Globe2,
  FileBarChart,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Ocean Analysis",
    description:
      "Turn complex marine datasets into useful insights without spending hours manually analysing raw data.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description:
      "Use AI to understand ocean patterns, identify important changes and generate meaningful insights.",
  },
  {
    icon: Globe2,
    title: "One Connected Platform",
    description:
      "Explore ocean locations, marine conditions, analytics and research information from one place.",
  },
  {
    icon: FileBarChart,
    title: "Research-Ready Insights",
    description:
      "Transform ocean observations into clear visualizations, analysis and reports that support research.",
  },
];

export default function WhyOceanMind() {
  return (
    <section
      id="why-oceanmind"
      className="relative overflow-hidden bg-slate-950 px-6 py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            Why OceanMind?
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            From ocean data
            <span className="text-cyan-400"> to intelligence.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Ocean data is powerful, but understanding it shouldn't require
            navigating disconnected tools and complex datasets.
            OceanMind brings intelligence, visualization and analysis together.
          </p>
        </motion.div>

        {/* Benefits */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition duration-300 hover:border-cyan-500/40 hover:bg-slate-900"
              >

                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 transition duration-300 group-hover:bg-cyan-500/20">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-7 text-xl font-bold text-white">
                  {benefit.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {benefit.description}
                </p>

                {/* Accent */}

                <div className="mt-7 h-1 w-10 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-20" />

              </motion.div>
            );
          })}

        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <p className="text-xl font-medium text-slate-300 md:text-2xl">
            Explore the ocean.
            <span className="text-cyan-400"> Understand its patterns.</span>
            <br />
            <span className="text-slate-500">
              Make better decisions with intelligence.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}