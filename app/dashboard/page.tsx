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
      <main className="flex min-h-screen items-center justify-center bg-[#DCEFF7]">
        <div className="text-center">

          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400
              to-blue-500
              shadow-lg
              shadow-cyan-500/25
            "
          >
            <span className="text-xl">
              🌊
            </span>
          </div>

          <p className="mt-4 text-sm font-medium text-[#52788C]">
            Loading OceanMind...
          </p>

        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen bg-[#DCEFF7] text-[#123247]">

      {/* SIDEBAR */}

      <Sidebar />

      {/* DASHBOARD */}

      <div
        className="
          relative
          min-w-0
          flex-1
          overflow-y-auto
          overflow-x-hidden
          bg-[#DCEFF7]
        "
      >

        {/* BLUE OCEAN GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/15
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        {/* SUBTLE CENTER GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-300/5
            blur-3xl
          "
        />

        {/* MAIN CONTENT */}

        <div className="relative z-10 p-6 md:p-8">

          {/* HEADER */}

          <Header />

          {/* KPI CARDS */}

          <div className="mt-8">
            <KPICards />
          </div>

          {/* QUICK ACTIONS */}

          <div className="mt-8">
            <QuickActions />
          </div>

          {/* CHAT + MAP */}

          <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
            <ChatCard />
            <MapCard />
          </div>

          {/* ANALYTICS + ALERTS */}

          <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
            <AnalyticsCard />
            <AlertsCard />
          </div>

          {/* REPORTS */}

          <div className="mt-8">
            <ReportsCard />
          </div>

          <div className="h-8" />

        </div>

      </div>

    </main>
  );
}