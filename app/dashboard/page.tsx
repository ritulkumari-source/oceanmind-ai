"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/dashboard/Header";
import KPICards from "../../components/dashboard/KPICards";
import QuickActions from "../../components/dashboard/QuickActions";
import ChatCard from "../../components/dashboard/ChatCard";
import MapCard from "../../components/dashboard/MapCard";
import AnalyticsCard from "../../components/dashboard/AnalyticsCard";
import AlertsCard from "../../components/dashboard/AlertsCard";
import ReportsCard from "../../components/dashboard/ReportsCard";

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const loginStatus = localStorage.getItem("oceanmind_logged_in");

    if (loginStatus === "true") {
      setAuthenticated(true);
    } else {
      window.location.replace("/login");
    }

    setChecking(false);
  }, []);

  if (checking || !authenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

          <p className="mt-4 text-sm text-slate-400">
            Loading OceanMind...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen w-full overflow-x-hidden bg-slate-950 text-white">

      {/* Sidebar */}

      <Sidebar />

      {/* Dashboard Content */}

      <div className="relative min-w-0 flex-1 overflow-y-auto overflow-x-hidden">

        {/* Background Blur Effects */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        {/* Main Content */}

        <div className="relative z-10 p-8">

          <Header />

          <KPICards />

          <QuickActions />

          {/* Chat + Map */}

          <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
            <ChatCard />
            <MapCard />
          </div>

          {/* Analytics + Alerts */}

          <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
            <AnalyticsCard />
            <AlertsCard />
          </div>

          {/* Recent Reports */}

          <div className="mt-8">
            <ReportsCard />
          </div>

        </div>

      </div>

    </main>
  );
}