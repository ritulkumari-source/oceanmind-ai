"use client";

import { motion } from "framer-motion";

export default function OceanBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Deep ocean base */}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#083b52_0%,#031d2d_42%,#020617_100%)]" />

      {/* Soft atmospheric glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[5%] top-[25%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]"
      />

      {/* Floating underwater particles */}

      {Array.from({ length: 24 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{
            left: `${(index * 41) % 100}%`,
            top: `${75 + ((index * 7) % 25)}%`,
            opacity: 0,
          }}
          animate={{
            top: ["100%", "10%"],
            opacity: [0, 0.35, 0],
          }}
          transition={{
            duration: 9 + (index % 6),
            delay: index * 0.35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-1 w-1 rounded-full bg-cyan-200"
        />
      ))}

      {/* Main wave area */}

      <div className="absolute bottom-0 left-0 h-[280px] w-full overflow-hidden">

        {/* Back wave */}

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 flex h-full w-[200%]"
        >
          <Wave
            color="#075985"
            opacity={0.32}
          />

          <Wave
            color="#075985"
            opacity={0.32}
          />
        </motion.div>

        {/* Middle wave */}

        <motion.div
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-10px] flex h-[85%] w-[200%]"
        >
          <Wave
            color="#0891b2"
            opacity={0.38}
          />

          <Wave
            color="#0891b2"
            opacity={0.38}
          />
        </motion.div>

        {/* Front wave */}

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-35px] flex h-[65%] w-[200%]"
        >
          <Wave
            color="#06b6d4"
            opacity={0.28}
          />

          <Wave
            color="#06b6d4"
            opacity={0.28}
          />
        </motion.div>

      </div>

      {/* Fade into the next section */}

      <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

    </div>
  );
}

function Wave({
  color,
  opacity,
}: {
  color: string;
  opacity: number;
}) {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0"
    >
      <path
        fill={color}
        fillOpacity={opacity}
        d="M0,160 C120,90 240,90 360,160 C480,230 600,230 720,160 C840,90 960,90 1080,160 C1200,230 1320,230 1440,160 L1440,320 L0,320 Z"
      />
    </svg>
  );
}