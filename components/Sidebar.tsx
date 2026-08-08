"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Globe,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Chat", href: "/chat", icon: MessageSquare },
  { name: "Ocean Map", href: "/analytics", icon: Globe },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Reports", href: "/report", icon: FileText },
  { name: "Settings", href: "#", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-cyan-500/20 p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        🌊 OceanMind
      </h1>

      <div className="space-y-3">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-4 rounded-xl p-4 hover:bg-cyan-500/20 transition"
            >
              <Icon size={22} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}