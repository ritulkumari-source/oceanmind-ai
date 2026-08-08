"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "1.8M+",
    title: "Ocean Observations",
  },
  {
    value: "4500+",
    title: "ARGO Floats",
  },
  {
    value: "190+",
    title: "Countries Covered",
  },
  {
    value: "98%",
    title: "AI Accuracy",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Ocean Intelligence in Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-lg p-8 text-center"
            >
              <h3 className="text-5xl font-black text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-4 text-gray-300">
                {stat.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}