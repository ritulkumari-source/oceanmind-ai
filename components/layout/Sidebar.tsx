"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageCircle,
  Globe2,
  BarChart3,
  FileText,
  Settings,
  Waves,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "AI Chat",
    href: "/chat",
    icon: MessageCircle,
  },
  {
    name: "Ocean Map",
    href: "/map",
    icon: Globe2,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Reports",
    href: "/report",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        sticky
        top-0
        flex
        h-screen
        w-72
        shrink-0
        flex-col
        border-r
        border-[#D8EAF0]
        bg-white
        text-[#0F2D3D]
        shadow-[4px_0_20px_rgba(30,90,110,0.05)]
      "
    >

      {/* =====================================================
          LOGO
      ===================================================== */}

      <div className="border-b border-[#D8EAF0] px-7 py-7">

        <Link href="/dashboard" className="group block">

          <div className="flex items-center gap-3">

            {/* Logo */}

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-400
                to-blue-500
                shadow-lg
                shadow-cyan-500/20
              "
            >
              <Waves
                size={27}
                strokeWidth={2}
                className="text-white"
              />
            </div>

            {/* Brand */}

            <div>

              <h1 className="text-2xl font-bold tracking-tight text-[#0F2D3D]">
                Ocean
                <span className="text-cyan-500">
                  Mind
                </span>
              </h1>

              <p className="mt-1 text-xs text-[#718895]">
                Ocean Intelligence Platform
              </p>

            </div>

          </div>

        </Link>

      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="flex-1 px-4 py-7">

        <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8AA4B0]">
          Workspace
        </p>

        <div className="space-y-2">

          {navigation.map((item) => {

            const Icon = item.icon;

            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? `
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-500
                        text-white
                        shadow-lg
                        shadow-cyan-500/20
                      `
                      : `
                        text-[#466170]
                        hover:bg-[#EAF6FA]
                        hover:text-cyan-600
                      `
                  }
                `}
              >

                <Icon
                  size={20}
                  strokeWidth={1.8}
                  className={
                    isActive
                      ? "text-white"
                      : "text-[#7895A2] transition-colors group-hover:text-cyan-500"
                  }
                />

                <span>
                  {item.name}
                </span>

                {isActive && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-white" />
                )}

              </Link>
            );
          })}

        </div>

      </nav>

      {/* =====================================================
          SYSTEM STATUS + LOGOUT
      ===================================================== */}

      <div className="border-t border-[#D8EAF0] p-4">

        {/* System Status */}

        <div
          className="
            mb-4
            rounded-xl
            border
            border-cyan-100
            bg-[#EAF6FA]
            p-4
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-br
                from-cyan-400
                to-blue-500
              "
            >
              <Waves
                size={18}
                className="text-white"
              />
            </div>

            <div>

              <p className="text-xs font-semibold text-[#0F2D3D]">
                Ocean Systems
              </p>

              <div className="mt-1 flex items-center gap-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[11px] text-emerald-600">
                  All systems operational
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Logout */}

        <Link
          href="/login"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-[#D8EAF0]
            bg-white
            px-4
            py-3
            text-sm
            font-medium
            text-[#466170]
            transition-all
            hover:border-red-200
            hover:bg-red-50
            hover:text-red-500
          "
        >
          <LogOut size={18} />

          Logout
        </Link>

      </div>

    </aside>
  );
}