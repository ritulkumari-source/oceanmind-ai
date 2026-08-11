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
    <div className="rounded-3xl border border-[#CFE5EE] bg-white p-8 shadow-[0_8px_30px_rgba(30,90,110,0.06)]">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
          <Bell
            className="text-cyan-600"
            size={26}
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#123247]">
            Notifications
          </h2>

          <p className="mt-1 text-[#718895]">
            Choose which alerts OceanMind AI should send you.
          </p>

        </div>

      </div>

      {/* Notification Options */}

      <div className="space-y-5">

        {/* AI Insights */}

        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-cyan-100
            bg-cyan-50/50
            p-5
            transition-all
            duration-200
            hover:border-cyan-200
            hover:bg-cyan-50
          "
        >

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">

              <Bot
                size={21}
                className="text-cyan-600"
              />

            </div>

            <div>

              <h3 className="font-semibold text-[#123247]">
                AI Insights
              </h3>

              <p className="text-sm text-[#718895]">
                Receive AI-generated ocean intelligence updates.
              </p>

            </div>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="
              h-5
              w-5
              cursor-pointer
              accent-cyan-500
            "
          />

        </div>

        {/* Marine Alerts */}

        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-amber-100
            bg-amber-50/50
            p-5
            transition-all
            duration-200
            hover:border-amber-200
            hover:bg-amber-50
          "
        >

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">

              <AlertTriangle
                size={21}
                className="text-amber-600"
              />

            </div>

            <div>

              <h3 className="font-semibold text-[#123247]">
                Marine Alerts
              </h3>

              <p className="text-sm text-[#718895]">
                Cyclones, high waves and severe weather warnings.
              </p>

            </div>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="
              h-5
              w-5
              cursor-pointer
              accent-cyan-500
            "
          />

        </div>

        {/* Weekly Reports */}

        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-emerald-100
            bg-emerald-50/50
            p-5
            transition-all
            duration-200
            hover:border-emerald-200
            hover:bg-emerald-50
          "
        >

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">

              <FileText
                size={21}
                className="text-emerald-600"
              />

            </div>

            <div>

              <h3 className="font-semibold text-[#123247]">
                Weekly Reports
              </h3>

              <p className="text-sm text-[#718895]">
                Get a weekly summary of ocean conditions.
              </p>

            </div>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="
              h-5
              w-5
              cursor-pointer
              accent-cyan-500
            "
          />

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

        Save Notification Settings

      </button>

    </div>
  );
}