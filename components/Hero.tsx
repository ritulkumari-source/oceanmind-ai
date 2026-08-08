"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >

        <h1 className="text-7xl md:text-8xl font-black leading-tight">
          Ocean<span className="text-cyan-400">Mind</span> AI
        </h1>

        <p className="mt-8 text-2xl text-cyan-300">
          Ask the Ocean. Discover the Future.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          AI-powered platform for exploring ARGO ocean data,
          predicting marine events, climate analytics,
          and generating research insights instantly.
        </p>

        <div className="mt-12 flex justify-center gap-6">

          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/30">
            Start Exploring
          </button>

          <button className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-8 py-4 rounded-xl font-semibold text-lg">
            Watch Demo
          </button>

        </div>

      </motion.div>

    </section>
  );
}