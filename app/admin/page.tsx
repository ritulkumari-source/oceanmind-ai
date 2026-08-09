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
    <main className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-white">

      {/* Sidebar */}

      <AdminSidebar />

      {/* Main Content */}

      <div className="relative ml-[252px] min-h-screen min-w-0 overflow-x-hidden">

        {/* Background Effects */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 p-8">

          {/* Header */}

          <header className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-400">
                <Activity size={17} />
                ADMIN CONSOLE
              </div>

              <h1 className="text-4xl font-bold text-white md:text-5xl">
                Platform Overview
              </h1>

              <p className="mt-3 max-w-2xl text-slate-400">
                Monitor OceanMind users, sensors, anomalies,
                ARGO data, and overall system health.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <Link
                href="/admin/monitoring"
                className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 transition hover:border-cyan-500/40"
              >

                <p className="text-xs text-slate-500">
                  System Status
                </p>

                <div className="mt-1 flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                  <span className="text-sm font-semibold text-emerald-400">
                    All Systems Operational
                  </span>

                </div>

              </Link>

            </div>

          </header>

          {/* KPI CARDS */}

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Users */}

            <Link
              href="/admin/users"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500/40 hover:bg-slate-900/80"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Users
                    size={24}
                    className="text-cyan-400"
                  />
                </div>

                <span className="text-xs font-semibold text-emerald-400">
                  +8.4%
                </span>

              </div>

              <p className="mt-6 text-sm text-slate-400">
                Total Users
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                12,482
              </h2>

              <div className="mt-2 flex items-center justify-between">

                <p className="text-xs text-slate-500">
                  3,821 currently active
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition group-hover:text-cyan-400"
                />

              </div>

            </Link>

            {/* Sensors */}

            <Link
              href="/admin/sensors"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500/40 hover:bg-slate-900/80"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Radio
                    size={24}
                    className="text-blue-400"
                  />
                </div>

                <span className="text-xs font-semibold text-emerald-400">
                  124 Online
                </span>

              </div>

              <p className="mt-6 text-sm text-slate-400">
                Sensor Nodes
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                128
              </h2>

              <div className="mt-2 flex items-center justify-between">

                <p className="text-xs text-slate-500">
                  4 currently offline
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition group-hover:text-blue-400"
                />

              </div>

            </Link>

            {/* Anomalies */}

            <Link
              href="/admin/anomalies"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-orange-500/40 hover:bg-slate-900/80"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                  <AlertTriangle
                    size={24}
                    className="text-orange-400"
                  />
                </div>

                <span className="text-xs font-semibold text-red-400">
                  6 HIGH
                </span>

              </div>

              <p className="mt-6 text-sm text-slate-400">
                Active Anomalies
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                24
              </h2>

              <div className="mt-2 flex items-center justify-between">

                <p className="text-xs text-slate-500">
                  6 high · 10 medium · 8 low
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition group-hover:text-orange-400"
                />

              </div>

            </Link>

            {/* ARGO */}

            <Link
              href="/admin/argo"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500/40 hover:bg-slate-900/80"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Waves
                    size={24}
                    className="text-cyan-400"
                  />
                </div>

                <span className="text-xs font-semibold text-emerald-400">
                  Synced
                </span>

              </div>

              <p className="mt-6 text-sm text-slate-400">
                ARGO Profiles
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                4,500+
              </h2>

              <div className="mt-2 flex items-center justify-between">

                <p className="text-xs text-slate-500">
                  Last sync: Today
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition group-hover:text-cyan-400"
                />

              </div>

            </Link>

          </section>

          {/* SYSTEM MONITORING */}

          <Link
            href="/admin/monitoring"
            className="group mt-8 block rounded-3xl border border-slate-800 bg-slate-900 p-7 transition hover:border-emerald-500/30"
          >

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <Server
                    size={23}
                    className="text-emerald-400"
                  />

                  <h2 className="text-2xl font-bold text-white">
                    System Monitoring
                  </h2>

                </div>

                <p className="mt-2 text-sm text-slate-400">
                  Current health of OceanMind infrastructure.
                </p>

              </div>

              <div className="flex items-center gap-2 text-sm text-emerald-400">

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
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >

                  <div className="flex items-center justify-between">

                    <p className="font-medium text-slate-200">
                      {service.name}
                    </p>

                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                  </div>

                  <p className="mt-4 text-lg font-bold text-white">
                    {service.value}
                  </p>

                  <p className="mt-1 text-xs text-emerald-400">
                    {service.status}
                  </p>

                </div>

              ))}

            </div>

          </Link>

          {/* ANOMALIES + SENSORS */}

          <section className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">

            {/* Anomalies */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">

              <div className="flex items-start justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <AlertTriangle
                      size={23}
                      className="text-orange-400"
                    />

                    <h2 className="text-2xl font-bold text-white">
                      Recent Anomalies
                    </h2>

                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    Detected ocean and sensor anomalies.
                  </p>

                </div>

                <Link
                  href="/admin/anomalies"
                  className="flex items-center gap-1 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                  View All
                  <ArrowUpRight size={16} />
                </Link>

              </div>

              <div className="mt-7 space-y-4">

                {anomalies.map((anomaly) => {

                  const severityStyle =
                    anomaly.severity === "HIGH"
                      ? "border-red-500/40 bg-red-500/5"
                      : anomaly.severity === "MEDIUM"
                        ? "border-yellow-500/40 bg-yellow-500/5"
                        : "border-blue-500/40 bg-blue-500/5";

                  const severityText =
                    anomaly.severity === "HIGH"
                      ? "text-red-400"
                      : anomaly.severity === "MEDIUM"
                        ? "text-yellow-400"
                        : "text-blue-400";

                  return (
                    <Link
                      href="/admin/anomalies"
                      key={anomaly.title}
                      className={`block rounded-2xl border p-4 transition hover:bg-slate-950/50 ${severityStyle}`}
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div className="flex gap-3">

                          <FileWarning
                            size={20}
                            className={severityText}
                          />

                          <div>

                            <h3 className="font-semibold text-white">
                              {anomaly.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-400">
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

                      <p className="mt-3 text-xs text-slate-500">
                        {anomaly.time}
                      </p>

                    </Link>
                  );
                })}

              </div>

            </div>

            {/* Sensors */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">

              <div className="flex items-start justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <Radio
                      size={23}
                      className="text-blue-400"
                    />

                    <h2 className="text-2xl font-bold text-white">
                      Sensor Status
                    </h2>

                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    Connected sensor nodes and latest readings.
                  </p>

                </div>

                <Link
                  href="/admin/sensors"
                  className="flex items-center gap-1 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                  Manage
                  <ArrowUpRight size={16} />
                </Link>

              </div>

              <div className="mt-7 space-y-4">

                {sensors.map((sensor) => {

                  const online =
                    sensor.status === "Online";

                  return (
                    <Link
                      href="/admin/sensors"
                      key={sensor.name}
                      className="block rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-blue-500/30 hover:bg-slate-950"
                    >

                      <div className="flex items-center justify-between gap-4">

                        <div className="min-w-0">

                          <h3 className="truncate font-semibold text-white">
                            {sensor.name}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
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
                                  ? "text-emerald-400"
                                  : "text-red-400"
                              }`}
                            >
                              {sensor.status}
                            </span>

                          </div>

                          <p className="mt-1 text-sm font-semibold text-slate-300">
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

          {/* ARGO DATA */}

          <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-7">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <Database
                    size={23}
                    className="text-cyan-400"
                  />

                  <h2 className="text-2xl font-bold text-white">
                    ARGO Data
                  </h2>

                </div>

                <p className="mt-2 text-sm text-slate-400">
                  Cached ARGO profiles and synchronization status.
                </p>

              </div>

              <Link
                href="/admin/argo"
                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/5"
              >
                Manage ARGO Data
                <ArrowUpRight size={17} />
              </Link>

            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">

              <Link
                href="/admin/argo"
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-500/30"
              >

                <p className="text-sm text-slate-400">
                  Cached Profiles
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  4,500+
                </p>

              </Link>

              <Link
                href="/admin/argo"
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-emerald-500/30"
              >

                <p className="text-sm text-slate-400">
                  Cache Status
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                  <span className="text-xl font-bold text-emerald-400">
                    Healthy
                  </span>

                </div>

              </Link>

              <Link
                href="/admin/argo"
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-cyan-500/30"
              >

                <p className="text-sm text-slate-400">
                  Last Synchronization
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  Today, 10:42 AM
                </p>

              </Link>

            </div>

          </section>

          {/* REPORTS */}

          <Link
            href="/admin/reports"
            className="group mt-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900 p-7 transition hover:border-purple-500/30 md:flex-row md:items-center md:justify-between"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">

                <FileWarning
                  size={23}
                  className="text-purple-400"
                />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Research Reports
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Generate, review, and download OceanMind reports.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-purple-400">

              Open Reports

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </div>

          </Link>

        </div>

      </div>

    </main>
  );
}