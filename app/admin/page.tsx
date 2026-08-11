"use client";

import Link from "next/link";

import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  CheckCircle,
  Database,
  FileWarning,
  Radio,
  Server,
  Users,
  Waves,
} from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";

const anomalies = [
  {
    title: "High temperature detected",
    location: "Bay of Bengal",
    severity: "HIGH",
    time: "12 minutes ago",
  },
  {
    title: "Unusual salinity reading",
    location: "Arabian Sea",
    severity: "MEDIUM",
    time: "28 minutes ago",
  },
  {
    title: "Sensor communication issue",
    location: "Chennai Node 04",
    severity: "LOW",
    time: "1 hour ago",
  },
];

const sensors = [
  {
    name: "Bay of Bengal Node 01",
    location: "Bay of Bengal",
    status: "Online",
    reading: "28.4°C",
  },
  {
    name: "Arabian Sea Node 07",
    location: "Arabian Sea",
    status: "Online",
    reading: "27.9°C",
  },
  {
    name: "Chennai Node 04",
    location: "Chennai Coast",
    status: "Offline",
    reading: "--",
  },
];

const systemServices = [
  {
    name: "Database",
    status: "Operational",
    value: "Healthy",
  },
  {
    name: "ARGO Cache",
    status: "Operational",
    value: "Healthy",
  },
  {
    name: "ChromaDB",
    status: "Operational",
    value: "Healthy",
  },
  {
    name: "API / Server",
    status: "Operational",
    value: "99.8%",
  },
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#DCEFF7] text-[#123247]">

      {/* Sidebar */}

      <AdminSidebar />

      {/* Main Content */}

      <div className="relative ml-[252px] min-h-screen min-w-0 overflow-x-hidden">

        {/* Background Effects */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative z-10 p-8">

          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <header className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-600">

                <Activity size={17} />

                ADMIN CONSOLE

              </div>

              <h1 className="text-4xl font-bold text-[#123247] md:text-5xl">
                Platform Overview
              </h1>

              <p className="mt-3 max-w-2xl text-[#52788C]">
                Monitor OceanMind users, sensors, anomalies,
                ARGO data, and overall system health.
              </p>

            </div>

            {/* System Status */}

            <Link
              href="/admin/monitoring"
              className="
                rounded-2xl
                border
                border-[#CFE5EE]
                bg-white
                px-5
                py-4
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
                transition
                hover:border-cyan-300
                hover:shadow-md
              "
            >

              <p className="text-xs font-medium text-[#718895]">
                System Status
              </p>

              <div className="mt-1 flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                <span className="text-sm font-semibold text-emerald-600">
                  All Systems Operational
                </span>

              </div>

            </Link>

          </header>

          {/* ================================================= */}
          {/* KPI CARDS */}
          {/* ================================================= */}

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Users */}

            <Link
              href="/admin/users"
              className="
                group
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-300
                hover:shadow-lg
              "
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">

                  <Users
                    size={24}
                    className="text-cyan-600"
                  />

                </div>

                <span className="text-xs font-semibold text-emerald-600">
                  +8.4%
                </span>

              </div>

              <p className="mt-6 text-sm text-[#718895]">
                Total Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#123247]">
                12,482
              </h2>

              <div className="mt-2 flex items-center justify-between">

                <p className="text-xs text-[#8AA3AF]">
                  3,821 currently active
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-[#9BB2BD] transition group-hover:text-cyan-600"
                />

              </div>

            </Link>

            {/* Sensors */}

            <Link
              href="/admin/sensors"
              className="
                group
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-lg
              "
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">

                  <Radio
                    size={24}
                    className="text-blue-600"
                  />

                </div>

                <span className="text-xs font-semibold text-emerald-600">
                  124 Online
                </span>

              </div>

              <p className="mt-6 text-sm text-[#718895]">
                Sensor Nodes
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#123247]">
                128
              </h2>

              <div className="mt-2 flex items-center justify-between">

                <p className="text-xs text-[#8AA3AF]">
                  4 currently offline
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-[#9BB2BD] transition group-hover:text-blue-600"
                />

              </div>

            </Link>

            {/* Anomalies */}

            <Link
              href="/admin/anomalies"
              className="
                group
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-300
                hover:shadow-lg
              "
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">

                  <AlertTriangle
                    size={24}
                    className="text-orange-500"
                  />

                </div>

                <span className="text-xs font-semibold text-red-500">
                  6 HIGH
                </span>

              </div>

              <p className="mt-6 text-sm text-[#718895]">
                Active Anomalies
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#123247]">
                24
              </h2>

              <div className="mt-2 flex items-center justify-between">

                <p className="text-xs text-[#8AA3AF]">
                  6 high · 10 medium · 8 low
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-[#9BB2BD] transition group-hover:text-orange-500"
                />

              </div>

            </Link>

            {/* ARGO */}

            <Link
              href="/admin/argo"
              className="
                group
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-300
                hover:shadow-lg
              "
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">

                  <Waves
                    size={24}
                    className="text-cyan-600"
                  />

                </div>

                <span className="text-xs font-semibold text-emerald-600">
                  Synced
                </span>

              </div>

              <p className="mt-6 text-sm text-[#718895]">
                ARGO Profiles
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#123247]">
                4,500+
              </h2>

              <div className="mt-2 flex items-center justify-between">

                <p className="text-xs text-[#8AA3AF]">
                  Last sync: Today
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-[#9BB2BD] transition group-hover:text-cyan-600"
                />

              </div>

            </Link>

          </section>

          {/* ================================================= */}
          {/* SYSTEM MONITORING */}
          {/* ================================================= */}

          <Link
            href="/admin/monitoring"
            className="
              group
              mt-8
              block
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              p-7
              shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              transition
              hover:border-emerald-300
              hover:shadow-lg
            "
          >

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <Server
                    size={23}
                    className="text-emerald-600"
                  />

                  <h2 className="text-2xl font-bold text-[#123247]">
                    System Monitoring
                  </h2>

                </div>

                <p className="mt-2 text-sm text-[#718895]">
                  Current health of OceanMind infrastructure.
                </p>

              </div>

              <div className="flex items-center gap-2 text-sm text-emerald-600">

                <CheckCircle size={17} />

                All systems operational

                <ArrowUpRight
                  size={17}
                  className="ml-1 opacity-0 transition group-hover:opacity-100"
                />

              </div>

            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

              {systemServices.map((service) => (

                <div
                  key={service.name}
                  className="
                    rounded-2xl
                    border
                    border-[#DCECF2]
                    bg-[#F7FCFE]
                    p-5
                    transition
                    hover:border-emerald-200
                  "
                >

                  <div className="flex items-center justify-between">

                    <p className="font-medium text-[#35596B]">
                      {service.name}
                    </p>

                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                  </div>

                  <p className="mt-4 text-lg font-bold text-[#123247]">
                    {service.value}
                  </p>

                  <p className="mt-1 text-xs font-medium text-emerald-600">
                    {service.status}
                  </p>

                </div>

              ))}

            </div>

          </Link>

          {/* ================================================= */}
          {/* ANOMALIES + SENSORS */}
          {/* ================================================= */}

          <section className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">

            {/* Anomalies */}

            <div
              className="
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-7
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              "
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">

                      <AlertTriangle
                        size={22}
                        className="text-orange-500"
                      />

                    </div>

                    <h2 className="text-2xl font-bold text-[#123247]">
                      Recent Anomalies
                    </h2>

                  </div>

                  <p className="mt-2 text-sm text-[#718895]">
                    Detected ocean and sensor anomalies.
                  </p>

                </div>

                <Link
                  href="/admin/anomalies"
                  className="flex items-center gap-1 text-sm font-medium text-cyan-600 transition hover:text-cyan-500"
                >
                  View All
                  <ArrowUpRight size={16} />
                </Link>

              </div>

              <div className="mt-7 space-y-4">

                {anomalies.map((anomaly) => {

                  const severityStyle =
                    anomaly.severity === "HIGH"
                      ? "border-red-200 bg-red-50"
                      : anomaly.severity === "MEDIUM"
                        ? "border-yellow-200 bg-yellow-50"
                        : "border-blue-200 bg-blue-50";

                  const severityText =
                    anomaly.severity === "HIGH"
                      ? "text-red-600"
                      : anomaly.severity === "MEDIUM"
                        ? "text-yellow-600"
                        : "text-blue-600";

                  return (
                    <Link
                      href="/admin/anomalies"
                      key={anomaly.title}
                      className={`block rounded-2xl border p-4 transition hover:shadow-sm ${severityStyle}`}
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div className="flex gap-3">

                          <FileWarning
                            size={20}
                            className={severityText}
                          />

                          <div>

                            <h3 className="font-semibold text-[#123247]">
                              {anomaly.title}
                            </h3>

                            <p className="mt-1 text-sm text-[#718895]">
                              {anomaly.location}
                            </p>

                          </div>

                        </div>

                        <span
                          className={`text-xs font-bold ${severityText}`}
                        >
                          {anomaly.severity}
                        </span>

                      </div>

                      <p className="mt-3 text-xs text-[#8AA3AF]">
                        {anomaly.time}
                      </p>

                    </Link>
                  );
                })}

              </div>

            </div>

            {/* Sensors */}

            <div
              className="
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-7
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              "
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">

                      <Radio
                        size={22}
                        className="text-blue-600"
                      />

                    </div>

                    <h2 className="text-2xl font-bold text-[#123247]">
                      Sensor Status
                    </h2>

                  </div>

                  <p className="mt-2 text-sm text-[#718895]">
                    Connected sensor nodes and latest readings.
                  </p>

                </div>

                <Link
                  href="/admin/sensors"
                  className="flex items-center gap-1 text-sm font-medium text-cyan-600 transition hover:text-cyan-500"
                >
                  Manage
                  <ArrowUpRight size={16} />
                </Link>

              </div>

              <div className="mt-7 space-y-4">

                {sensors.map((sensor) => {

                  const online = sensor.status === "Online";

                  return (
                    <Link
                      href="/admin/sensors"
                      key={sensor.name}
                      className="
                        block
                        rounded-2xl
                        border
                        border-[#DCECF2]
                        bg-[#F7FCFE]
                        p-4
                        transition
                        hover:border-blue-200
                        hover:bg-blue-50/50
                      "
                    >

                      <div className="flex items-center justify-between gap-4">

                        <div className="min-w-0">

                          <h3 className="truncate font-semibold text-[#123247]">
                            {sensor.name}
                          </h3>

                          <p className="mt-1 text-sm text-[#718895]">
                            {sensor.location}
                          </p>

                        </div>

                        <div className="text-right">

                          <div className="flex items-center justify-end gap-2">

                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                online
                                  ? "bg-emerald-400"
                                  : "bg-red-400"
                              }`}
                            />

                            <span
                              className={`text-xs font-semibold ${
                                online
                                  ? "text-emerald-600"
                                  : "text-red-600"
                              }`}
                            >
                              {sensor.status}
                            </span>

                          </div>

                          <p className="mt-1 text-sm font-semibold text-[#52788C]">
                            {sensor.reading}
                          </p>

                        </div>

                      </div>

                    </Link>
                  );
                })}

              </div>

            </div>

          </section>

          {/* ================================================= */}
          {/* ARGO DATA */}
          {/* ================================================= */}

          <section
            className="
              mt-8
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              p-7
              shadow-[0_8px_30px_rgba(30,90,110,0.06)]
            "
          >

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">

                    <Database
                      size={22}
                      className="text-cyan-600"
                    />

                  </div>

                  <h2 className="text-2xl font-bold text-[#123247]">
                    ARGO Data
                  </h2>

                </div>

                <p className="mt-2 text-sm text-[#718895]">
                  Cached ARGO profiles and synchronization status.
                </p>

              </div>

              <Link
                href="/admin/argo"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-200
                  bg-cyan-50
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-cyan-700
                  transition
                  hover:border-cyan-300
                  hover:bg-cyan-100
                "
              >
                Manage ARGO Data
                <ArrowUpRight size={17} />
              </Link>

            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">

              <Link
                href="/admin/argo"
                className="
                  rounded-2xl
                  border
                  border-[#DCECF2]
                  bg-[#F7FCFE]
                  p-5
                  transition
                  hover:border-cyan-200
                "
              >

                <p className="text-sm text-[#718895]">
                  Cached Profiles
                </p>

                <p className="mt-2 text-3xl font-bold text-[#123247]">
                  4,500+
                </p>

              </Link>

              <Link
                href="/admin/argo"
                className="
                  rounded-2xl
                  border
                  border-emerald-100
                  bg-emerald-50/60
                  p-5
                  transition
                  hover:border-emerald-200
                "
              >

                <p className="text-sm text-[#718895]">
                  Cache Status
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                  <span className="text-xl font-bold text-emerald-600">
                    Healthy
                  </span>

                </div>

              </Link>

              <Link
                href="/admin/argo"
                className="
                  rounded-2xl
                  border
                  border-[#DCECF2]
                  bg-[#F7FCFE]
                  p-5
                  transition
                  hover:border-cyan-200
                "
              >

                <p className="text-sm text-[#718895]">
                  Last Synchronization
                </p>

                <p className="mt-2 text-xl font-bold text-[#123247]">
                  Today, 10:42 AM
                </p>

              </Link>

            </div>

          </section>

          {/* ================================================= */}
          {/* REPORTS */}
          {/* ================================================= */}

          <Link
            href="/admin/reports"
            className="
              group
              mt-8
              flex
              flex-col
              gap-4
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              p-7
              shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              transition
              hover:border-purple-200
              hover:shadow-lg
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50">

                <FileWarning
                  size={23}
                  className="text-purple-600"
                />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-[#123247]">
                  Research Reports
                </h2>

                <p className="mt-1 text-sm text-[#718895]">
                  Generate, review, and download OceanMind reports.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-purple-600">

              Open Reports

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </div>

          </Link>

          <div className="h-10" />

        </div>

      </div>

    </main>
  );
}