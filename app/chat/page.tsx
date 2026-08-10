"use client";

import Sidebar from "../../components/layout/Sidebar";
import {
  Bot,
  Send,
  Paperclip,
  Mic,
  Sparkles,
} from "lucide-react";

const suggestions = [
  "Show sea surface temperature near Chennai",
  "Predict cyclone probability",
  "Analyze ARGO float data",
  "Generate marine report",
];

export default function ChatPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        {/* Header */}

        <div className="border-b border-slate-800 bg-slate-900/60 px-10 py-6 backdrop-blur-xl">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500">
                <Bot size={24} />
              </div>

              <div>

                <h1 className="text-3xl font-bold">
                  OceanMind AI
                </h1>

                <p className="text-slate-400">
                  AI Assistant for Ocean Intelligence
                </p>

              </div>

            </div>

            {/* AI Status */}

            <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">

              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

              OceanMind AI Online

            </div>

          </div>

        </div>

        {/* Messages */}

        <div className="flex-1 space-y-8 overflow-y-auto px-10 py-8">

          {/* AI */}

          <div className="flex gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500">
              <Bot size={20} />
            </div>

            <div className="max-w-2xl rounded-3xl rounded-tl-sm border border-slate-800 bg-slate-900 p-6">

              <h3 className="mb-3 font-semibold">
                OceanMind AI
              </h3>

              <p className="leading-8 text-slate-300">

                Hello! 👋

                <br />
                <br />

                I can help you with:

                <br />

                🌊 Ocean temperature

                <br />

                🌪 Cyclone prediction

                <br />

                📈 ARGO float analysis

                <br />

                📄 AI-generated reports

                <br />

                🌍 Marine insights

              </p>

            </div>

          </div>

          {/* User */}

          <div className="flex justify-end">

            <div className="max-w-xl rounded-3xl rounded-tr-sm bg-cyan-500 p-6">

              Show sea surface temperature near Chennai.

            </div>

          </div>

          {/* AI Response */}

          <div className="flex gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500">
              <Bot size={20} />
            </div>

            <div className="max-w-2xl rounded-3xl rounded-tl-sm border border-slate-800 bg-slate-900 p-6">

              <p className="leading-8 text-slate-300">

                🌊 Sea Surface Temperature:

                <span className="font-bold text-cyan-400">
                  {" "}29°C
                </span>

                <br />

                🌊 Salinity:

                <span className="font-bold text-cyan-400">
                  {" "}35 PSU
                </span>

                <br />

                🌬 Wind Speed:

                <span className="font-bold text-cyan-400">
                  {" "}15 km/h
                </span>

                <br />

                🚨 Marine Alert:

                <span className="text-green-400">
                  {" "}No active warnings
                </span>

              </p>

            </div>

          </div>

        </div>

        {/* Suggestions */}

        <div className="px-10">

          <div className="mb-6 flex flex-wrap gap-3">

            {suggestions.map((item) => (

              <button
                key={item}
                className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-5 py-3 transition hover:bg-cyan-500"
              >
                <Sparkles size={16} />

                {item}

              </button>

            ))}

          </div>

        </div>

        {/* Input */}

        <div className="border-t border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl">

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-3">

            {/* Attachment */}

            <button
              type="button"
              aria-label="Attach file"
              className="rounded-xl p-3 transition hover:bg-slate-800"
            >
              <Paperclip size={20} />
            </button>

            {/* Input */}

            <input
              type="text"
              className="flex-1 bg-transparent outline-none placeholder:text-slate-500"
              placeholder="Ask OceanMind AI..."
            />

            {/* Microphone */}

            <button
              type="button"
              aria-label="Voice input"
              className="rounded-xl p-3 transition hover:bg-slate-800"
            >
              <Mic size={20} />
            </button>

            {/* Send */}

            <button
              type="button"
              aria-label="Send message"
              className="rounded-xl bg-cyan-500 p-3 transition hover:bg-cyan-400"
            >
              <Send size={20} />
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}