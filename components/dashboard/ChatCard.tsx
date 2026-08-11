"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Send,
  Paperclip,
  Mic,
} from "lucide-react";

export default function ChatCard() {
  return (
    <Card
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#D8EAF0]
        bg-white
        shadow-[0_8px_30px_rgba(30,90,110,0.07)]
        transition-all
        duration-300
        hover:border-cyan-200
      "
    >
      <CardContent className="p-6">

        {/* Header */}

        <div className="mb-5 flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-cyan-400
              to-blue-500
            "
          >
            <Bot
              size={22}
              className="text-white"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0F2D3D]">
              OceanMind AI
            </h2>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <p className="text-xs text-[#718895]">
                Marine Intelligence Assistant
              </p>
            </div>
          </div>

        </div>

        {/* Chat Preview */}

        <div className="space-y-4">

          {/* AI */}

          <div className="flex gap-3">

            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-cyan-50
              "
            >
              <Bot
                size={16}
                className="text-cyan-500"
              />
            </div>

            <div
              className="
                max-w-[85%]
                rounded-2xl
                rounded-tl-sm
                bg-[#EAF8FB]
                px-4
                py-3
              "
            >
              <p className="text-sm leading-6 text-[#466170]">
                Hello! 👋 I can help you analyze ocean
                temperature, ARGO data, marine predictions
                and climate insights.
              </p>
            </div>

          </div>

          {/* User */}

          <div className="flex justify-end">

            <div
              className="
                max-w-[75%]
                rounded-2xl
                rounded-tr-sm
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                px-4
                py-3
              "
            >
              <p className="text-sm text-white">
                Show sea surface temperature near Chennai.
              </p>
            </div>

          </div>

          {/* AI Response */}

          <div className="flex gap-3">

            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-cyan-50
              "
            >
              <Bot
                size={16}
                className="text-cyan-500"
              />
            </div>

            <div
              className="
                rounded-2xl
                rounded-tl-sm
                border
                border-[#D8EAF0]
                bg-[#F4FAFC]
                px-4
                py-3
              "
            >

              <p className="text-sm leading-6 text-[#466170]">

                🌊 Chennai Coast&nbsp;&nbsp;

                <span className="font-semibold text-cyan-600">
                  29°C
                </span>

                <br />

                Salinity&nbsp;&nbsp;

                <span className="font-semibold text-cyan-600">
                  35 PSU
                </span>

                <span className="mx-2 text-[#B0C4CD]">
                  •
                </span>

                Wave Height&nbsp;&nbsp;

                <span className="font-semibold text-cyan-600">
                  1.2 m
                </span>

                <br />

                <span className="text-xs text-emerald-600">
                  ✓ No active marine alerts
                </span>

              </p>

            </div>

          </div>

        </div>

        {/* Suggestions */}

        <div className="mt-5 flex gap-2 overflow-hidden">

          <button
            type="button"
            className="
              whitespace-nowrap
              rounded-full
              border
              border-[#D8EAF0]
              bg-[#F4FAFC]
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#466170]
              transition
              hover:border-cyan-300
              hover:bg-cyan-50
              hover:text-cyan-600
            "
          >
            Forecast Tomorrow
          </button>

          <button
            type="button"
            className="
              whitespace-nowrap
              rounded-full
              border
              border-[#D8EAF0]
              bg-[#F4FAFC]
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#466170]
              transition
              hover:border-cyan-300
              hover:bg-cyan-50
              hover:text-cyan-600
            "
          >
            Cyclone Alerts
          </button>

          <button
            type="button"
            className="
              whitespace-nowrap
              rounded-full
              border
              border-[#D8EAF0]
              bg-[#F4FAFC]
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#466170]
              transition
              hover:border-cyan-300
              hover:bg-cyan-50
              hover:text-cyan-600
            "
          >
            ARGO Data
          </button>

        </div>

        {/* Input */}

        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-[#D8EAF0]
            bg-[#F8FCFD]
            p-2
            focus-within:border-cyan-400
            focus-within:ring-4
            focus-within:ring-cyan-100
          "
        >

          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 text-[#718895] hover:bg-cyan-50 hover:text-cyan-600"
          >
            <Paperclip size={16} />
          </Button>

          <input
            placeholder="Ask OceanMind AI..."
            className="
              min-w-0
              flex-1
              bg-transparent
              px-1
              text-sm
              text-[#0F2D3D]
              outline-none
              placeholder:text-[#8AA4B0]
            "
          />

          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 text-[#718895] hover:bg-cyan-50 hover:text-cyan-600"
          >
            <Mic size={16} />
          </Button>

          <Button
            size="icon"
            className="
              h-9
              w-9
              rounded-lg
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              text-white
              shadow-sm
              hover:from-cyan-400
              hover:to-blue-400
            "
          >
            <Send size={16} />
          </Button>

        </div>

      </CardContent>
    </Card>
  );
}