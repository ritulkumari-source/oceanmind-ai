"use client";

import Sidebar from "../../components/layout/Sidebar";

import ProfileCard from "../../components/settings/ProfileCard";
import PreferencesCard from "../../components/settings/PreferencesCard";
import NotificationCard from "../../components/settings/NotificationCard";

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen bg-[#DCEFF7] text-[#123247]">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="min-w-0 flex-1 overflow-y-auto">

        {/* Background Effects */}

        <div className="pointer-events-none fixed right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="pointer-events-none fixed bottom-0 left-80 h-96 w-96 rounded-full bg-blue-300/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl p-8">

          {/* Header */}

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              OceanMind
            </p>

            <h1 className="mt-2 text-5xl font-bold text-[#123247]">
              Settings
            </h1>

            <p className="mt-3 max-w-2xl text-lg text-[#52788C]">
              Manage your OceanMind account, preferences and
              notifications.
            </p>

          </div>

          {/* Settings Grid */}

          <div className="grid gap-8 xl:grid-cols-2">

            {/* Profile */}

            <div
              className="
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-1
                shadow-[0_8px_30px_rgba(30,90,110,0.07)]
              "
            >
              <ProfileCard />
            </div>

            {/* Preferences */}

            <div
              className="
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-1
                shadow-[0_8px_30px_rgba(30,90,110,0.07)]
              "
            >
              <PreferencesCard />
            </div>

          </div>

          {/* Notifications */}

          <div className="mt-8">

            <div
              className="
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-1
                shadow-[0_8px_30px_rgba(30,90,110,0.07)]
              "
            >
              <NotificationCard />
            </div>

          </div>

          <div className="h-10" />

        </div>

      </div>

    </main>
  );
}