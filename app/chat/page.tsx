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
    <main className="flex min-h-screen bg-[#DCEFF7] text-[#123247]">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <Sidebar />

      {/* =====================================================
          CHAT CONTENT
      ====================================================== */}

      <div className="flex min-w-0 flex-1 flex-col">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <header className="border-b border-[#CFE5EE] bg-white px-6 py-5 shadow-[0_2px_15px_rgba(30,90,110,0.04)] lg:px-10">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              {/* AI Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500
                  shadow-lg
                  shadow-cyan-500/20
                "
              >
                <Bot
                  size={24}
                  className="text-white"
                />
              </div>

              {/* Title */}

              <div>

                <h1 className="text-2xl font-bold text-[#123247] lg:text-3xl">
                  OceanMind AI
                </h1>

                <p className="text-sm text-[#718895]">
                  AI Assistant for Ocean Intelligence
                </p>

              </div>

            </div>

            {/* AI Status */}

            <div
              className="
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-emerald-100
                bg-emerald-50
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-600
                sm:flex
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              OceanMind AI Online
            </div>

          </div>

        </header>

        {/* ===================================================
            MESSAGES
        ==================================================== */}

        <div className="flex-1 overflow-y-auto px-6 py-8 lg:px-10">

          <div className="mx-auto max-w-5xl space-y-7">

            {/* =================================================
                AI WELCOME
            ================================================== */}

            <div className="flex gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500
                  shadow-sm
                "
              >
                <Bot
                  size={19}
                  className="text-white"
                />
              </div>

              <div
                className="
                  max-w-2xl
                  rounded-3xl
                  rounded-tl-sm
                  border
                  border-[#CFE5EE]
                  bg-white
                  px-6
                  py-5
                  shadow-[0_5px_20px_rgba(30,90,110,0.05)]
                "
              >

                <h3 className="mb-3 font-semibold text-[#123247]">
                  OceanMind AI
                </h3>

                <p className="leading-7 text-[#52788C]">

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

            {/* =================================================
                USER MESSAGE
            ================================================== */}

            <div className="flex justify-end">

              <div
                className="
                  max-w-xl
                  rounded-3xl
                  rounded-tr-sm
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  px-6
                  py-4
                  text-white
                  shadow-lg
                  shadow-cyan-500/15
                "
              >
                Show sea surface temperature near Chennai.
              </div>

            </div>

            {/* =================================================
                AI RESPONSE
            ================================================== */}

            <div className="flex gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500
                  shadow-sm
                "
              >
                <Bot
                  size={19}
                  className="text-white"
                />
              </div>

              <div
                className="
                  max-w-2xl
                  rounded-3xl
                  rounded-tl-sm
                  border
                  border-[#CFE5EE]
                  bg-white
                  px-6
                  py-5
                  shadow-[0_5px_20px_rgba(30,90,110,0.05)]
                "
              >

                <p className="leading-8 text-[#52788C]">

                  🌊 Sea Surface Temperature:

                  <span className="font-bold text-cyan-600">
                    {" "}29°C
                  </span>

                  <br />

                  🌊 Salinity:

                  <span className="font-bold text-cyan-600">
                    {" "}35 PSU
                  </span>

                  <br />

                  🌬 Wind Speed:

                  <span className="font-bold text-cyan-600">
                    {" "}15 km/h
                  </span>

                  <br />

                  🚨 Marine Alert:

                  <span className="font-medium text-emerald-600">
                    {" "}No active warnings
                  </span>

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ===================================================
            SUGGESTIONS
        ==================================================== */}

        <div className="border-t border-[#CFE5EE] bg-[#EAF6FA]/80 px-6 pt-4 backdrop-blur-xl lg:px-10">

          <div className="mx-auto mb-4 flex max-w-5xl flex-wrap gap-2">

            {suggestions.map((item) => (

              <button
                key={item}
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#CFE5EE]
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-[#52788C]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:border-cyan-300
                  hover:bg-cyan-50
                  hover:text-cyan-600
                "
              >

                <Sparkles
                  size={15}
                  className="text-cyan-500"
                />

                {item}

              </button>

            ))}

          </div>

        </div>

        {/* ===================================================
            INPUT
        ==================================================== */}

        <div className="border-t border-[#CFE5EE] bg-white px-6 py-5 lg:px-10">

          <div
            className="
              mx-auto
              flex
              max-w-5xl
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFD]
              p-3
              shadow-sm
              transition-all
              duration-200
              focus-within:border-cyan-400
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            {/* Attachment */}

            <button
              type="button"
              aria-label="Attach file"
              className="
                rounded-xl
                p-3
                text-[#718895]
                transition
                hover:bg-cyan-50
                hover:text-cyan-600
              "
            >
              <Paperclip size={20} />
            </button>

            {/* Input */}

            <input
              type="text"
              className="
                flex-1
                bg-transparent
                text-sm
                text-[#123247]
                outline-none
                placeholder:text-[#8AA4B0]
              "
              placeholder="Ask OceanMind AI..."
            />

            {/* Microphone */}

            <button
              type="button"
              aria-label="Voice input"
              className="
                rounded-xl
                p-3
                text-[#718895]
                transition
                hover:bg-cyan-50
                hover:text-cyan-600
              "
            >
              <Mic size={20} />
            </button>

            {/* Send */}

            <button
              type="button"
              aria-label="Send message"
              className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                p-3
                text-white
                shadow-md
                shadow-cyan-500/20
                transition-all
                hover:from-cyan-400
                hover:to-blue-400
                hover:shadow-lg
              "
            >
              <Send size={20} />
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}