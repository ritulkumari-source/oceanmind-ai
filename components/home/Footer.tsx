"use client";

import Link from "next/link";
import { Mail, Waves, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#C7E1EA] bg-[#DCEFF7] text-[#66818F]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow-sm
                  ring-1
                  ring-cyan-100
                "
              >
                <Waves
                  size={25}
                  className="text-cyan-500"
                />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-[#123247]">

                  OceanMind
                  <span className="text-cyan-500">
                    {" "}AI
                  </span>

                </h2>

                <p className="text-sm text-[#8AA3AF]">
                  Ocean Intelligence Platform
                </p>

              </div>

            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#66818F]">
              Transforming complex ocean data into intelligent insights
              for marine research, climate analysis, forecasting, and
              informed decision-making.
            </p>

            {/* System Status */}

            <div className="mt-7 flex items-center gap-2 text-sm text-[#66818F]">

              <span className="relative flex h-2.5 w-2.5">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-50
                  "
                />

                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />

              </span>

              Ocean intelligence systems online

            </div>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-6 font-semibold text-[#123247]">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              <Link
                href="/#features"
                className="
                  transition
                  hover:text-cyan-600
                "
              >
                Features
              </Link>

              <Link
                href="/#how-it-works"
                className="
                  transition
                  hover:text-cyan-600
                "
              >
                How It Works
              </Link>

              <Link
                href="/#why-oceanmind"
                className="
                  transition
                  hover:text-cyan-600
                "
              >
                Why OceanMind
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 font-semibold text-[#123247]">
              Resources
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              <Link
                href="/#features"
                className="
                  transition
                  hover:text-cyan-600
                "
              >
                Key Features
              </Link>

              <Link
                href="/#how-it-works"
                className="
                  transition
                  hover:text-cyan-600
                "
              >
                How It Works
              </Link>

              <a
                href="mailto:contact@oceanmind.ai"
                className="
                  flex
                  items-center
                  gap-2
                  transition
                  hover:text-cyan-600
                "
              >
                <Mail size={16} />

                Contact

              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-[#C7E1EA]
            pt-7
            text-sm
            text-[#8AA3AF]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p>
            © 2026 OceanMind AI. Built for ocean intelligence.
          </p>

          {/* Back To Top */}

          <button
            type="button"
            onClick={handleBackToTop}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#B9DDE9]
              bg-white
              px-5
              py-2.5
              font-medium
              text-[#66818F]
              shadow-sm
              transition
              hover:border-cyan-400
              hover:text-cyan-600
              hover:shadow-md
            "
          >
            Back to top

            <ArrowUp size={16} />

          </button>

        </div>

      </div>

    </footer>
  );
}