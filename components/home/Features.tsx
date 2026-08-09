"use client";

import {
  Map,
  Bot,
  BarChart3,
  FileText,
  Bell,
  Waves,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Interactive Ocean Map",
    description:
      "Explore global ocean conditions, ARGO float locations and marine observations through an interactive map.",
    icon: Map,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    title: "AI Ocean Assistant",
    description:
      "Ask questions about marine data and receive intelligent, easy-to-understand answers.",
    icon: Bot,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    title: "Ocean Analytics",
    description:
      "Visualize temperature, salinity and other ocean parameters through interactive analytics.",
    icon: BarChart3,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    title: "AI Research Reports",
    description:
      "Generate structured research reports from ocean observations and analytical insights.",
    icon: FileText,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    title: "Marine Alerts",
    description:
      "Stay informed about unusual ocean conditions and important marine events.",
    icon: Bell,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    title: "Ocean Forecasting",
    description:
      "Identify patterns and explore potential changes in ocean conditions using intelligent analysis.",
    icon: Waves,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">
            <Waves size={16} />
            Ocean Intelligence Platform
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Everything you need to
            <span className="text-cyan-400">
              {" "}understand the ocean.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Powerful tools designed to transform complex marine data
            into clear, actionable intelligence.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900"
              >

                {/* Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}

                <div
                  className={`relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg}`}
                >
                  <Icon
                    size={26}
                    className={feature.iconColor}
                  />
                </div>

                {/* Decorative Arrow */}

                <ArrowUpRight
                  size={22}
                  className="absolute right-7 top-7 text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400"
                />

                {/* Content */}

                <h3 className="relative text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="relative mt-5 max-w-md text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}