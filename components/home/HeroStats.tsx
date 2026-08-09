"use client";

import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  Waves,
  Activity,
} from "lucide-react";

const stats = [
  {
    value: "1.8M+",
    label: "Ocean Records",
    description: "ARGO & marine observations",
    icon: Database,
  },
  {
    value: "98%",
    label: "AI Accuracy",
    description: "Intelligent ocean predictions",
    icon: BrainCircuit,
  },
  {
    value: "50+",
    label: "Ocean Parameters",
    description: "Temperature, salinity & more",
    icon: Waves,
  },
  {
    value: "24/7",
    label: "Ocean Monitoring",
    description: "Continuous marine intelligence",
    icon: Activity,
  },
];

export default function HeroStats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pb-28 pt-10">
      
      {/* Subtle ocean glow */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      {/* Top wave-like divider */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-24 overflow-hidden">
        <div className="absolute left-[-5%] top-[-40px] h-24 w-[110%] rounded-[50%] border-t border-cyan-400/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Intro */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mb-12 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Ocean Intelligence at a Glance
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-7 backdrop-blur-sm transition duration-300 hover:border-cyan-500/40 hover:bg-slate-900"
              >

                {/* Hover glow */}

                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 transition duration-300 group-hover:bg-cyan-500/20">

                      <Icon
                        size={24}
                        className="text-cyan-400"
                      />

                    </div>

                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                  </div>

                  <div className="mt-7 text-4xl font-black tracking-tight text-white">
                    {stat.value}
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-cyan-300">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {stat.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}