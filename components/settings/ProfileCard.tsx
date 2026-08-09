"use client";

import { User, Mail, Building2, Save } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        👤 Profile
      </h2>

      <div className="space-y-6">

        <div>

          <label className="block text-slate-400 mb-2">
            Full Name
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

            <User className="text-cyan-400" />

            <input
              defaultValue="Ritul Kumari"
              className="flex-1 bg-transparent outline-none text-white"
            />

          </div>

        </div>

        <div>

          <label className="block text-slate-400 mb-2">
            Email
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

            <Mail className="text-cyan-400" />

            <input
              defaultValue="ritul@email.com"
              className="flex-1 bg-transparent outline-none text-white"
            />

          </div>

        </div>

        <div>

          <label className="block text-slate-400 mb-2">
            Organization
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

            <Building2 className="text-cyan-400" />

            <input
              defaultValue="OceanMind Research"
              className="flex-1 bg-transparent outline-none text-white"
            />

          </div>

        </div>

      </div>

      <button className="mt-8 flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold hover:bg-cyan-400 transition">

        <Save size={20} />

        Save Changes

      </button>

    </div>
  );
}