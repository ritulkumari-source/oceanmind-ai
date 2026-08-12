"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Waves } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#DCEFF7] px-6 py-24">

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/20
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
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
          -right-32
          top-0
          h-80
          w-80
          rounded-full
          bg-cyan-300/20
          blur-[120px]
        "
      />

      {/* CTA Card */}

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[2rem]
          border
          border-[#B9DDE9]
          bg-white
          px-8
          py-16
          text-center
          shadow-[0_20px_60px_rgba(23,93,117,0.12)]
          md:px-16
        "
      >

        {/* Decorative Background */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            -top-32
            h-64
            w-64
            rounded-full
            bg-cyan-100/70
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -right-32
            h-64
            w-64
            rounded-full
            bg-blue-100/70
            blur-3xl
          "
        />

        {/* Decorative Waves */}

        <div className="pointer-events-none absolute left-10 top-10 opacity-10">
          <Waves
            size={100}
            className="text-cyan-500"
          />
        </div>

        <div className="pointer-events-none absolute bottom-10 right-10 opacity-10">
          <Waves
            size={100}
            className="text-blue-500"
          />
        </div>

        {/* Icon */}

        <div
          className="
            relative
            mx-auto
            mb-7
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-500
            shadow-lg
            shadow-cyan-500/20
          "
        >
          <Waves
            size={30}
            className="text-white"
          />
        </div>

        {/* Badge */}

        <div
          className="
            relative
            mx-auto
            mb-8
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-cyan-200
            bg-cyan-50
            px-4
            py-2
            text-sm
            font-medium
            text-cyan-700
          "
        >
          <Sparkles size={16} />

          <span>
            Explore the future of ocean intelligence
          </span>
        </div>

        {/* Heading */}

        <h2
          className="
            relative
            mx-auto
            max-w-3xl
            text-5xl
            font-bold
            leading-tight
            text-[#123247]
            md:text-6xl
          "
        >
          Ready to understand{" "}

          <span
            className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            our oceans?
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            relative
            mx-auto
            mt-7
            max-w-3xl
            text-lg
            leading-8
            text-[#66818F]
          "
        >
          Explore marine data, discover hidden patterns,
          generate intelligent insights and make better
          decisions with OceanMind AI.
        </p>

        {/* CTA */}

        <div className="relative mt-10 flex justify-center">

          <Link
            href="/login"
            className="
              group
              flex
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              shadow-lg
              shadow-cyan-500/20
              transition-all
              duration-300
              hover:from-cyan-400
              hover:to-blue-400
              hover:shadow-cyan-500/30
              hover:-translate-y-0.5
            "
          >
            Start Exploring

            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

        {/* Bottom Text */}

        <p
          className="
            relative
            mt-7
            text-sm
            text-[#8AA3AF]
          "
        >
          Explore ocean intelligence in one connected platform.
        </p>

      </div>

    </section>
  );
}