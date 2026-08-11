"use client";

import {
  Globe,
  Moon,
  Ruler,
  Save,
} from "lucide-react";

export default function PreferencesCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#CFE5EE]
        bg-white
        p-8
        shadow-[0_8px_30px_rgba(30,90,110,0.06)]
      "
    >

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
          <Globe
            size={25}
            className="text-cyan-600"
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#123247]">
            Preferences
          </h2>

          <p className="mt-1 text-sm text-[#718895]">
            Customize your OceanMind experience.
          </p>

        </div>

      </div>

      <div className="space-y-6">

        {/* Theme */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[#52788C]">
            Theme
          </label>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFE]
              px-4
              py-4
              transition-all
              duration-200
              hover:border-cyan-300
              focus-within:border-cyan-400
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            <Moon
              size={21}
              className="text-cyan-600"
            />

            <select
              defaultValue="Light"
              className="
                flex-1
                cursor-pointer
                bg-transparent
                text-[#123247]
                outline-none
              "
            >

              <option>Dark</option>
              <option>Light</option>
              <option>System Default</option>

            </select>

          </div>

        </div>

        {/* Language */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[#52788C]">
            Language
          </label>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFE]
              px-4
              py-4
              transition-all
              duration-200
              hover:border-cyan-300
              focus-within:border-cyan-400
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            <Globe
              size={21}
              className="text-cyan-600"
            />

            <select
              defaultValue="English"
              className="
                flex-1
                cursor-pointer
                bg-transparent
                text-[#123247]
                outline-none
              "
            >

              <option>English</option>
              <option>Hindi</option>
              <option>French</option>
              <option>Spanish</option>

            </select>

          </div>

        </div>

        {/* Measurement Units */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[#52788C]">
            Measurement Units
          </label>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFE]
              px-4
              py-4
              transition-all
              duration-200
              hover:border-cyan-300
              focus-within:border-cyan-400
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            <Ruler
              size={21}
              className="text-cyan-600"
            />

            <select
              defaultValue="Metric (°C, km)"
              className="
                flex-1
                cursor-pointer
                bg-transparent
                text-[#123247]
                outline-none
              "
            >

              <option>Metric (°C, km)</option>
              <option>Imperial (°F, miles)</option>

            </select>

          </div>

        </div>

      </div>

      {/* Save Button */}

      <button
        type="button"
        className="
          mt-8
          flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          px-6
          py-4
          font-semibold
          text-white
          shadow-md
          shadow-cyan-500/15
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:from-cyan-400
          hover:to-blue-400
          hover:shadow-lg
          hover:shadow-cyan-500/20
        "
      >

        <Save size={20} />

        Save Preferences

      </button>

    </div>
  );
}