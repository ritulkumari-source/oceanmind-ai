"use client";

import { Send } from "lucide-react";

export default function AIChatCard() {
  return (
    <div className="bg-slate-800 rounded-3xl p-6 shadow-lg border border-cyan-500/20 h-full">

      <h2 className="text-2xl font-bold text-cyan-400">
        🤖 OceanMind AI
      </h2>

      <p className="text-gray-400 mt-2">
        Ask anything about the ocean...
      </p>

      <div className="bg-slate-900 rounded-xl p-4 mt-6">
        <p className="text-gray-300">
          Show temperature near the Indian Ocean in July 2025.
        </p>
      </div>

      <div className="flex gap-3 mt-6">

        <input
          placeholder="Ask OceanMind AI..."
          className="flex-1 bg-slate-900 rounded-xl px-4 py-3 outline-none border border-slate-700"
        />

        <button className="bg-cyan-500 hover:bg-cyan-400 px-4 rounded-xl">
          <Send />
        </button>

      </div>

    </div>
  );
}