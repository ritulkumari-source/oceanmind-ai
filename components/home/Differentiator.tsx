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
    <section className="relative overflow-hidden bg-[#DCEFF7] px-6 py-28">

      {/* ================================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[600px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-300/20
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-blue-300/20
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-cyan-300/20
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

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

          {/* Badge */}

          <div
            className="
              mb-5
              inline-flex
              rounded-full
              border
              border-cyan-200
              bg-white/70
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-700
              shadow-sm
            "
          >
            Why OceanMind is Different
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-[#123247]
              md:text-6xl
            "
          >
            Don't just see

            <span
              className="
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}ocean data.
            </span>

            <br />

            Understand it.
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-[#66818F]
            "
          >
            Traditional ocean-data workflows often require multiple tools,
            manual analysis and significant time. OceanMind brings those
            capabilities together around an intelligent workflow.
          </p>

        </motion.div>

        {/* ================================================= */}
        {/* COMPARISON */}
        {/* ================================================= */}

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
          className="
            mt-16
            overflow-hidden
            rounded-3xl
            border
            border-[#C7E1EA]
            bg-white
            shadow-[0_20px_60px_rgba(23,93,117,0.10)]
          "
        >

          {/* Table Header */}

          <div
            className="
              grid
              grid-cols-3
              border-b
              border-[#DCECF2]
              bg-gradient-to-r
              from-[#F7FCFE]
              to-[#EDF9FC]
              p-5
              md:p-6
            "
          >

            <div
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-[#8AA3AF]
              "
            >
              Capability
            </div>

            <div
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-[#8AA3AF]
              "
            >
              Traditional Workflow
            </div>

            <div
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-cyan-600
              "
            >
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
              className="
                grid
                grid-cols-3
                border-b
                border-[#E5F0F4]
                p-5
                last:border-b-0
                hover:bg-[#F8FCFE]
                transition-colors
                md:p-6
              "
            >

              {/* Feature */}

              <div className="font-medium text-[#23485A]">
                {item.feature}
              </div>

              {/* Traditional */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-[#8196A1]
                "
              >

                <X
                  size={16}
                  className="hidden shrink-0 text-red-400 sm:block"
                />

                {item.traditional}

              </div>

              {/* OceanMind */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-cyan-600
                "
              >

                <Check
                  size={16}
                  className="hidden shrink-0 text-emerald-500 sm:block"
                />

                {item.oceanmind}

              </div>

            </motion.div>
          ))}

        </motion.div>

        {/* ================================================= */}
        {/* HIGHLIGHTS */}
        {/* ================================================= */}

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
                className="
                  rounded-3xl
                  border
                  border-[#C7E1EA]
                  bg-white
                  p-7
                  shadow-[0_12px_35px_rgba(23,93,117,0.07)]
                  transition-all
                  duration-300
                  hover:border-cyan-300
                  hover:shadow-[0_18px_40px_rgba(6,182,212,0.12)]
                "
              >

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
                    from-cyan-50
                    to-blue-50
                  "
                >

                  <Icon
                    size={24}
                    className="text-cyan-600"
                  />

                </div>

                {/* Title */}

                <h3
                  className="
                    mt-6
                    text-lg
                    font-bold
                    text-[#123247]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-[#718895]
                  "
                >
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* ================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================================= */}

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
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          <p
            className="
              max-w-3xl
              text-2xl
              font-semibold
              leading-10
              text-[#123247]
              md:text-3xl
            "
          >
            One platform.

            <span
              className="
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}One intelligent workflow.
            </span>

            <br />

            <span className="text-[#7C96A2]">
              A smarter way to understand our oceans.
            </span>
          </p>

          <ArrowRight
            size={28}
            className="
              mt-6
              rotate-90
              text-cyan-500
            "
          />

        </motion.div>

      </div>

    </section>
  );
}