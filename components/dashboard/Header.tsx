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
    <header className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

      {/* Greeting */}

      <div>
        <p className="text-lg font-semibold text-cyan-600">
          👋 {greeting}
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#0F2D3D] lg:text-5xl">
          Ocean Dashboard
        </h1>

        <p className="mt-3 text-sm text-[#718895]">
          {today}
        </p>
      </div>

      {/* Actions */}

      <div className="flex flex-wrap items-center gap-3">

        {/* Search */}

        <div className="group relative">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[#8AA4B0]
              transition-colors
              group-focus-within:text-cyan-500
            "
          />

          <input
            type="text"
            placeholder="Search oceans, reports..."
            className="
              w-72
              rounded-xl
              border
              border-[#D8EAF0]
              bg-white
              py-3
              pl-11
              pr-4
              text-sm
              text-[#0F2D3D]
              shadow-[0_4px_18px_rgba(30,90,110,0.05)]
              outline-none
              transition-all
              duration-200
              placeholder:text-[#8AA4B0]
              hover:border-cyan-200
              focus:border-cyan-400
              focus:ring-4
              focus:ring-cyan-100
              lg:w-80
            "
          />

        </div>

        {/* Notifications */}

        <button
          type="button"
          aria-label="Notifications"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-[#D8EAF0]
            bg-white
            text-[#718895]
            shadow-[0_4px_18px_rgba(30,90,110,0.05)]
            transition-all
            duration-200
            hover:border-cyan-300
            hover:bg-[#EAF6FA]
            hover:text-cyan-600
          "
        >
          <Bell size={19} />
        </button>

        {/* Settings */}

        <button
          type="button"
          aria-label="Settings"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-[#D8EAF0]
            bg-white
            text-[#718895]
            shadow-[0_4px_18px_rgba(30,90,110,0.05)]
            transition-all
            duration-200
            hover:border-cyan-300
            hover:bg-[#EAF6FA]
            hover:text-cyan-600
          "
        >
          <Settings size={19} />
        </button>

        {/* Profile */}

        <Avatar
          className="
            h-11
            w-11
            border-2
            border-white
            shadow-md
            ring-2
            ring-cyan-100
          "
        >
          <AvatarFallback
            className="
              bg-gradient-to-br
              from-cyan-400
              to-blue-500
              font-bold
              text-white
            "
          >
            RK
          </AvatarFallback>
        </Avatar>

      </div>

    </header>
  );
}