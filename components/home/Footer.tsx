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
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Waves
                  size={25}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  OceanMind
                  <span className="text-cyan-400"> AI</span>
                </h2>

                <p className="text-sm text-slate-500">
                  Ocean Intelligence Platform
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
              Transforming complex ocean data into intelligent insights
              for marine research, climate analysis, forecasting, and
              informed decision-making.
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Ocean intelligence systems online
            </div>
          </div>

          {/* Explore */}

          <div>
            <h3 className="mb-6 font-semibold text-white">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              <Link
                href="/#features"
                className="transition hover:text-cyan-400"
              >
                Features
              </Link>

              <Link
                href="/#how-it-works"
                className="transition hover:text-cyan-400"
              >
                How It Works
              </Link>

              <Link
                href="/#why-oceanmind"
                className="transition hover:text-cyan-400"
              >
                Why OceanMind
              </Link>

            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-6 font-semibold text-white">
              Resources
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              <Link
                href="/#features"
                className="transition hover:text-cyan-400"
              >
                Key Features
              </Link>

              <Link
                href="/#how-it-works"
                className="transition hover:text-cyan-400"
              >
                How It Works
              </Link>

              <a
                href="mailto:contact@oceanmind.ai"
                className="flex items-center gap-2 transition hover:text-cyan-400"
              >
                <Mail size={16} />
                Contact
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col gap-5 border-t border-slate-800 pt-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 OceanMind AI. Built for ocean intelligence.
          </p>

          {/* Back To Top */}

          <button
            type="button"
            onClick={handleBackToTop}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Back to top
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
}