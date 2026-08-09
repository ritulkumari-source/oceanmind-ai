"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-bold text-cyan-400 transition hover:text-cyan-300"
        >
          🌊 OceanMind AI
        </Link>

        {/* Landing Page Navigation */}

        <div className="hidden items-center gap-10 text-gray-300 md:flex">

          <Link
            href="/"
            className="transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="#features"
            className="transition hover:text-cyan-400"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="transition hover:text-cyan-400"
          >
            How It Works
          </Link>

        </div>

        {/* Sign In */}

        <Link
          href="/login"
          className="rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
}