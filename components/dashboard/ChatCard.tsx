"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, User, Send, Paperclip, Mic } from "lucide-react";

export default function ChatCard() {
  return (
    <Card className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-xl h-[560px]">

      <CardContent className="flex flex-col h-full p-6">

        {/* Header */}

        <div className="flex items-center gap-3 mb-6">

          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center">

            <Bot className="text-white" size={24} />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              OceanMind AI
            </h2>

            <p className="text-slate-400 text-sm">
              Your Marine Intelligence Assistant
            </p>

          </div>

        </div>

        {/* Chat Area */}

        <div className="flex-1 overflow-y-auto space-y-6 pr-2">

          {/* AI */}

          <div className="flex gap-3">

            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">

              <Bot size={18} />

            </div>

            <div className="bg-cyan-500 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[80%]">

              <p className="text-white leading-7">

                Hello! 👋 I'm OceanMind AI.

                <br /><br />

                I can help you with:

                <br />

                • Ocean temperature

                <br />

                • Marine prediction

                <br />

                • ARGO float analysis

                <br />

                • Climate insights

              </p>

            </div>

          </div>

          {/* User */}

          <div className="flex justify-end">

            <div className="bg-slate-800 rounded-2xl rounded-tr-sm px-5 py-4 max-w-[75%]">

              <p className="text-white">

                Show sea surface temperature near Chennai.

              </p>

            </div>

          </div>

          {/* AI */}

          <div className="flex gap-3">

            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">

              <Bot size={18} />

            </div>

            <div className="bg-cyan-500 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[80%]">

              <p className="text-white leading-7">

                🌊 Sea Surface Temperature

                <br /><br />

                Location: Chennai Coast

                <br />

                Temperature: <b>29°C</b>

                <br />

                Salinity: <b>35 PSU</b>

                <br />

                Wave Height: <b>1.2 m</b>

                <br /><br />

                No marine alerts detected.

              </p>

            </div>

          </div>

        </div>

        {/* Suggestions */}

        <div className="flex flex-wrap gap-2 mt-5">

          <button className="px-4 py-2 rounded-full bg-slate-800 hover:bg-cyan-500 transition text-sm">

            Forecast Tomorrow

          </button>

          <button className="px-4 py-2 rounded-full bg-slate-800 hover:bg-cyan-500 transition text-sm">

            Cyclone Alerts

          </button>

          <button className="px-4 py-2 rounded-full bg-slate-800 hover:bg-cyan-500 transition text-sm">

            ARGO Data

          </button>

        </div>

        {/* Input */}

        <div className="mt-6">

          <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-2xl p-3">

            <Button
              size="icon"
              variant="ghost"
            >
              <Paperclip size={18} />
            </Button>

            <input
              placeholder="Ask OceanMind AI..."
              className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
            />

            <Button
              size="icon"
              variant="ghost"
            >
              <Mic size={18} />
            </Button>

            <Button
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400"
            >
              <Send size={18} />
            </Button>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}