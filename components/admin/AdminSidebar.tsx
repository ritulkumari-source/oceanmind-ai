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
    <aside
      className="
        fixed
        left-0
        top-0
        z-40
        flex
        h-screen
        w-[252px]
        flex-col
        border-r
        border-[#CFE5EE]
        bg-white
        shadow-[4px_0_25px_rgba(30,90,110,0.06)]
      "
    >

      {/* ================================================= */}
      {/* LOGO */}
      {/* ================================================= */}

      <div className="border-b border-[#E1EEF3] px-6 py-6">

        <Link
          href="/admin"
          className="block"
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-cyan-500
                to-blue-500
                shadow-md
                shadow-cyan-500/20
              "
            >

              <Waves
                size={25}
                className="text-white"
              />

            </div>

            <div>

              <h1 className="text-xl font-bold text-[#123247]">

                OceanMind
                <span className="text-cyan-500">
                  {" "}AI
                </span>

              </h1>

              <p className="mt-1 text-xs text-[#8AA3AF]">
                Admin Console
              </p>

            </div>

          </div>

        </Link>

      </div>

      {/* ================================================= */}
      {/* NAVIGATION */}
      {/* ================================================= */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">

        <p
          className="
            mb-4
            px-3
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-[#9AAFB9]
          "
        >
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
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-3
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
                        from-cyan-50
                        to-blue-50
                        text-cyan-700
                        shadow-sm
                      `
                      : `
                        text-[#718895]
                        hover:bg-[#F3FAFC]
                        hover:text-cyan-600
                      `
                  }
                `}
              >

                {/* Active Indicator */}

                {isActive && (
                  <span
                    className="
                      absolute
                      -left-4
                      top-1/2
                      h-8
                      w-1
                      -translate-y-1/2
                      rounded-r-full
                      bg-gradient-to-b
                      from-cyan-400
                      to-blue-500
                    "
                  />
                )}

                {/* Icon */}

                <Icon
                  size={19}
                  className={
                    isActive
                      ? "text-cyan-600"
                      : "text-[#8AA3AF] transition group-hover:text-cyan-500"
                  }
                />

                {/* Name */}

                <span>
                  {item.name}
                </span>

              </Link>
            );

          })}

        </div>

      </nav>

      {/* ================================================= */}
      {/* ADMIN PROFILE */}
      {/* ================================================= */}

      <div className="border-t border-[#E1EEF3] p-4">

        <div
          className="
            mb-4
            rounded-xl
            border
            border-cyan-100
            bg-gradient-to-br
            from-cyan-50
            to-blue-50
            p-4
          "
        >

          <div className="flex items-center gap-3">

            {/* Avatar */}

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-sm
              "
            >

              <ShieldCheck
                size={20}
                className="text-cyan-600"
              />

            </div>

            {/* Details */}

            <div>

              <p className="text-sm font-semibold text-[#123247]">
                Administrator
              </p>

              <div className="mt-1 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-xs font-medium text-emerald-600">
                  Online
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
            bg-red-500
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-red-400
            hover:shadow-md
          "
        >

          <LogOut size={18} />

          Logout

        </Link>

      </div>

    </aside>
  );
}