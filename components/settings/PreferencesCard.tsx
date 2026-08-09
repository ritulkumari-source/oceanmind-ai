"use client";

import { Globe, Moon, Ruler, Save } from "lucide-react";

export default function PreferencesCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="mb-8 text-3xl font-bold text-white">
        🌐 Preferences
      </h2>

      <div className="space-y-6">

        {/* Theme */}

        <div>

          <label className="mb-2 block text-slate-400">
            Theme
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

            <Moon className="text-cyan-400" />

            <select className="flex-1 bg-transparent text-white outline-none">

              <option>Dark</option>
              <option>Light</option>
              <option>System Default</option>

            </select>

          </div>

        </div>

        {/* Language */}

        <div>

          <label className="mb-2 block text-slate-400">
            Language
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

            <Globe className="text-cyan-400" />

            <select className="flex-1 bg-transparent text-white outline-none">

              <option>English</option>
              <option>Hindi</option>
              <option>French</option>
              <option>Spanish</option>

            </select>

          </div>

        </div>

        {/* Units */}

        <div>

          <label className="mb-2 block text-slate-400">
            Measurement Units
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

            <Ruler className="text-cyan-400" />

            <select className="flex-1 bg-transparent text-white outline-none">

              <option>Metric (°C, km)</option>
              <option>Imperial (°F, miles)</option>

            </select>

          </div>

        </div>

      </div>

      <button className="mt-8 flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-white transition hover:bg-cyan-400">

        <Save size={20} />

        Save Preferences

      </button>

    </div>
  );
}