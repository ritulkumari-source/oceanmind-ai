"use client";

import { Bell, Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex items-center justify-between mb-10">

      <div>

        <p className="text-cyan-400 font-semibold text-lg">
          👋 {greeting}
        </p>

        <h1 className="text-5xl font-bold mt-2">
          Ocean Dashboard
        </h1>

        <p className="text-slate-400 mt-3">
          {today}
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-3 text-slate-500"
          />

          <input
            placeholder="Search oceans, reports..."
            className="bg-slate-900 border border-slate-800 rounded-xl py-3 pl-11 pr-4 w-80 focus:outline-none focus:border-cyan-500 transition"
          />

        </div>

        <button className="bg-slate-900 border border-slate-800 hover:border-cyan-500 transition p-3 rounded-xl">
          <Bell />
        </button>

        <button className="bg-slate-900 border border-slate-800 hover:border-cyan-500 transition p-3 rounded-xl">
          <Settings />
        </button>

        <Avatar className="h-11 w-11">
          <AvatarFallback className="bg-cyan-500 text-white font-bold">
            RK
          </AvatarFallback>
        </Avatar>

      </div>

    </header>
  );
}