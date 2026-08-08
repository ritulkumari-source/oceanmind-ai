"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/60 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div className="text-3xl font-bold text-cyan-400">
          🌊 OceanMind AI
        </div>

        <div className="hidden md:flex gap-10 text-gray-300">

          <Link href="/">Home</Link>

          <Link href="/dashboard">Dashboard</Link>

          <Link href="/analytics">Analytics</Link>

          <Link href="/chat">AI Chat</Link>

          <Link href="/report">Reports</Link>

        </div>

        <Link
          href="/login"
          className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl transition font-semibold"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
}