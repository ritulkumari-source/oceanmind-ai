"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  MessageSquare,
  Globe,
  BarChart3,
  FileText,
  Settings,
  Database,
  Cpu,
  LogOut,
  UserCircle,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "AI Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Ocean Map",
    href: "/map",
    icon: Globe,
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
  const router = useRouter();

  function handleLogout() {
    router.push("/login");
  }

  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      {/* Logo */}

      <div className="border-b border-slate-800 p-8">

        <h1 className="text-3xl font-bold text-cyan-400">
          🌊 OceanMind
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Ocean Intelligence Platform
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-3 p-5">

        {links.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 ${
                active
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Stats */}

      <div className="space-y-4 border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-900 p-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Database
                className="text-cyan-400"
                size={18}
              />

              <span className="text-slate-300">
                Ocean Records
              </span>

            </div>

            <span className="font-bold text-cyan-400">
              1.8M
            </span>

          </div>

        </div>

        <div className="rounded-xl bg-slate-900 p-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Cpu
                className="text-cyan-400"
                size={18}
              />

              <span className="text-slate-300">
                AI Accuracy
              </span>

            </div>

            <span className="font-bold text-green-400">
              98%
            </span>

          </div>

        </div>

      </div>

      {/* User */}

      <div className="border-t border-slate-800 p-5">

        <div className="mb-5 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500">

            <UserCircle
              size={36}
              className="text-white"
            />

          </div>

          <div>

            <h3 className="font-semibold text-white">
              Ritul Kumari
            </h3>

            <p className="text-sm text-slate-400">
              Ocean Researcher
            </p>

            <div className="mt-1 flex items-center gap-2">

              <div className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-xs text-green-400">
                Online
              </span>

            </div>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-400"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}