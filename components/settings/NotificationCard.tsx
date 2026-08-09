"use client";

import {
  Bell,
  AlertTriangle,
  FileText,
  Bot,
  Save,
} from "lucide-react";

export default function NotificationCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="mb-8 flex items-center gap-3">

        <Bell className="text-cyan-400" size={28} />

        <div>

          <h2 className="text-3xl font-bold text-white">
            Notifications
          </h2>

          <p className="mt-1 text-slate-400">
            Choose which alerts OceanMind AI should send you.
          </p>

        </div>

      </div>

      <div className="space-y-6">

        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <div className="flex items-center gap-4">

            <Bot className="text-cyan-400" />

            <div>

              <h3 className="font-semibold text-white">
                AI Insights
              </h3>

              <p className="text-sm text-slate-400">
                Receive AI-generated ocean intelligence updates.
              </p>

            </div>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-cyan-500"
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <div className="flex items-center gap-4">

            <AlertTriangle className="text-yellow-400" />

            <div>

              <h3 className="font-semibold text-white">
                Marine Alerts
              </h3>

              <p className="text-sm text-slate-400">
                Cyclones, high waves and severe weather warnings.
              </p>

            </div>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-cyan-500"
          />

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <div className="flex items-center gap-4">

            <FileText className="text-green-400" />

            <div>

              <h3 className="font-semibold text-white">
                Weekly Reports
              </h3>

              <p className="text-sm text-slate-400">
                Get a weekly summary of ocean conditions.
              </p>

            </div>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-cyan-500"
          />

        </div>

      </div>

      <button className="mt-8 flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-white transition hover:bg-cyan-400">

        <Save size={20} />

        Save Notification Settings

      </button>

    </div>
  );
}