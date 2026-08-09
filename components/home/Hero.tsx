"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-slate-950"
    >
      {/* =====================================================
          OCEAN VIDEO BACKGROUND

          Put the video here:
          public/ocean-waves-web.mp4
      ===================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/ocean-waves-web.mp4"
          type="video/mp4"
        />

        Your browser does not support the video element.
      </video>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-slate-950/50" />

      {/* =====================================================
          GRADIENT OVERLAY

          Makes the text readable while keeping the ocean
          visible in the background.
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />

      {/* =====================================================
          CYAN ATMOSPHERIC GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-6
          py-28
          text-center
        "
      >
        {/* ===================================================
            BADGE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/30
            bg-slate-950/50
            px-5
            py-2.5
            text-sm
            font-medium
            text-cyan-300
            shadow-lg
            backdrop-blur-md
          "
        >
          <Sparkles size={16} />

          AI-Powered Ocean Intelligence

          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        </motion.div>

        {/* ===================================================
            MAIN HEADING
        =================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-8
            max-w-6xl
            text-6xl
            font-black
            tracking-[-0.04em]
            text-white
            drop-shadow-2xl
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
          "
        >
          Understand

          <br />

          <span
            className="
              bg-gradient-to-r
              from-cyan-200
              via-cyan-400
              to-blue-400
              bg-clip-text
              text-transparent
            "
          >
            Our Ocean.
          </span>
        </motion.h1>

        {/* ===================================================
            TAGLINE
        =================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="
            mt-8
            text-xl
            font-medium
            text-cyan-100
            drop-shadow-lg
            md:text-2xl
          "
        >
          Ask the Ocean. Discover the Future.
        </motion.p>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-8
            text-slate-200
            drop-shadow-lg
            md:text-lg
          "
        >
          OceanMind AI transforms complex ocean data into
          intelligent insights, marine predictions, climate
          analytics, and research-ready information.
        </motion.p>

        {/* ===================================================
            BUTTONS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          {/* PRIMARY BUTTON */}

          <Link
            href="/login"
            className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-[0_0_40px_rgba(6,182,212,0.35)]
              transition
              duration-300
              hover:scale-105
              hover:bg-cyan-400
            "
          >
            Explore Ocean Intelligence

            <ArrowRight
              size={19}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* SECONDARY BUTTON */}

          <a
            href="#features"
            className="
              rounded-2xl
              border
              border-slate-300/40
              bg-slate-950/40
              px-8
              py-4
              font-semibold
              text-slate-100
              backdrop-blur-md
              transition
              duration-300
              hover:border-cyan-400/60
              hover:bg-cyan-400/10
              hover:text-cyan-300
            "
          >
            Explore Features
          </a>
        </motion.div>

        {/* ===================================================
            SCROLL INDICATOR
        =================================================== */}

        <motion.a
          href="#why-oceanmind"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="
            mx-auto
            mt-20
            flex
            w-fit
            flex-col
            items-center
            text-slate-300/70
            transition
            hover:text-cyan-400
          "
        >
          <span className="text-xs uppercase tracking-[0.3em]">
            Discover
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-3"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}