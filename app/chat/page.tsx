"use client";

import Sidebar from "../../components/layout/Sidebar";
import { Bot, User, Send, Paperclip, Mic, Sparkles } from "lucide-react";

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

      <div className="flex-1 flex flex-col">

        {/* Header */}

        <div className="border-b border-slate-800 px-10 py-6 bg-slate-900/60 backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center">
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

        </div>

        {/* Messages */}

        <div className="flex-1 overflow-y-auto px-10 py-8 space-y-8">

          {/* AI */}

          <div className="flex gap-4">

            <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center">
              <Bot size={20} />
            </div>

            <div className="bg-slate-900 rounded-3xl rounded-tl-sm p-6 max-w-2xl border border-slate-800">

              <h3 className="font-semibold mb-3">
                OceanMind AI
              </h3>

              <p className="leading-8 text-slate-300">

                Hello! 👋

                <br /><br />

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

            <div className="bg-cyan-500 rounded-3xl rounded-tr-sm p-6 max-w-xl">

              Show sea surface temperature near Chennai.

            </div>

          </div>

          {/* AI */}

          <div className="flex gap-4">

            <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center">
              <Bot size={20} />
            </div>

            <div className="bg-slate-900 rounded-3xl rounded-tl-sm p-6 max-w-2xl border border-slate-800">

              <p className="leading-8 text-slate-300">

                🌊 Sea Surface Temperature:
                <span className="text-cyan-400 font-bold">
                  {" "}29°C
                </span>

                <br />

                🌊 Salinity:
                <span className="text-cyan-400 font-bold">
                  {" "}35 PSU
                </span>

                <br />

                🌬 Wind Speed:
                <span className="text-cyan-400 font-bold">
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

          <div className="flex flex-wrap gap-3 mb-6">

            {suggestions.map((item) => (

              <button
                key={item}
                className="bg-slate-900 hover:bg-cyan-500 transition px-5 py-3 rounded-full border border-slate-800 flex items-center gap-2"
              >
                <Sparkles size={16} />
                {item}
              </button>

            ))}

          </div>

        </div>

        {/* Input */}

        <div className="border-t border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6">

          <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 rounded-2xl p-3">

            <button className="p-3 rounded-xl hover:bg-slate-800 transition">
              <Paperclip />
            </button>

            <input
              className="flex-1 bg-transparent outline-none placeholder:text-slate-500"
              placeholder="Ask OceanMind AI..."
            />

            <button className="p-3 rounded-xl hover:bg-slate-800 transition">
              <Mic />
            </button>

            <button className="bg-cyan-500 hover:bg-cyan-400 transition p-3 rounded-xl">
              <Send />
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}