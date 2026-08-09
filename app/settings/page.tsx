import Sidebar from "../../components/layout/Sidebar";

import ProfileCard from "../../components/settings/ProfileCard";
import PreferencesCard from "../../components/settings/PreferencesCard";
import NotificationCard from "../../components/settings/NotificationCard";

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 overflow-y-auto">

        <div className="mx-auto max-w-7xl p-8">

          {/* Header */}

          <div className="mb-10">

            <h1 className="text-5xl font-bold">
              Settings
            </h1>

            <p className="mt-3 text-lg text-slate-400">
              Manage your OceanMind account, preferences and notifications.
            </p>

          </div>

          {/* Grid */}

          <div className="grid gap-8 xl:grid-cols-2">

            <ProfileCard />

            <PreferencesCard />

          </div>

          <div className="mt-8">

            <NotificationCard />

          </div>

        </div>

      </div>

    </main>
  );
}