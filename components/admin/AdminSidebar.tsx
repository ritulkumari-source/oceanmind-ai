"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Radio,
  AlertTriangle,
  Waves,
  Activity,
  FileText,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "User Management",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Sensor Management",
    href: "/admin/sensors",
    icon: Radio,
  },
  {
    name: "Anomaly Management",
    href: "/admin/anomalies",
    icon: AlertTriangle,
  },
  {
    name: "ARGO Data",
    href: "/admin/argo",
    icon: Waves,
  },
  {
    name: "System Monitoring",
    href: "/admin/monitoring",
    icon: Activity,
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: FileText,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[252px] flex-col border-r border-slate-800 bg-slate-950">

      {/* Logo */}

      <div className="border-b border-slate-800 px-6 py-6">
        <Link href="/admin" className="block">
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
              <Waves
                size={25}
                className="text-cyan-400"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                OceanMind
                <span className="text-cyan-400"> AI</span>
              </h1>

              <p className="mt-1 text-xs text-slate-500">
                Admin Console
              </p>
            </div>

          </div>
        </Link>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
          Administration
        </p>

        <div className="space-y-2">

          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >

                <Icon
                  size={19}
                  className={
                    isActive
                      ? "text-white"
                      : "text-slate-500 transition group-hover:text-cyan-400"
                  }
                />

                <span>{item.name}</span>

              </Link>
            );
          })}

        </div>

      </nav>

      {/* Admin Profile */}

      <div className="border-t border-slate-800 p-4">

        <div className="mb-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
              <ShieldCheck
                size={20}
                className="text-purple-400"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Administrator
              </p>

              <div className="mt-1 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-xs text-emerald-400">
                  Online
                </span>

              </div>
            </div>

          </div>

        </div>

        <Link
          href="/login"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
        >
          <LogOut size={18} />
          Logout
        </Link>

      </div>

    </aside>
  );
}