"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  Clock3,
  Database,
  RefreshCw,
  Server,
  ShieldCheck,
  Wifi,
  Waves,
  XCircle,
} from "lucide-react";

import AdminSidebar from "../../../components/admin/AdminSidebar";

type SystemStatus = "Operational" | "Degraded" | "Offline";

type SystemService = {
  id: string;
  name: string;
  description: string;
  status: SystemStatus;
  uptime: string;
  response: string;
  lastChecked: string;
};

const initialServices: SystemService[] = [
  {
    id: "database",
    name: "Database",
    description: "Primary application database",
    status: "Operational",
    uptime: "99.99%",
    response: "24 ms",
    lastChecked: "Just now",
  },
  {
    id: "argo",
    name: "ARGO Cache",
    description: "Cached oceanographic ARGO profiles",
    status: "Operational",
    uptime: "99.97%",
    response: "41 ms",
    lastChecked: "Just now",
  },
  {
    id: "chroma",
    name: "ChromaDB",
    description: "AI vector database and knowledge retrieval",
    status: "Operational",
    uptime: "99.95%",
    response: "63 ms",
    lastChecked: "Just now",
  },
  {
    id: "api",
    name: "API / Server",
    description: "OceanMind application API services",
    status: "Operational",
    uptime: "99.98%",
    response: "38 ms",
    lastChecked: "Just now",
  },
];

export default function SystemMonitoringPage() {
  const [services, setServices] =
    useState<SystemService[]>(initialServices);

  const [checking, setChecking] = useState(false);

  const [lastGlobalCheck, setLastGlobalCheck] =
    useState("Just now");

  const operationalCount = services.filter(
    (service) => service.status === "Operational"
  ).length;

  const degradedCount = services.filter(
    (service) => service.status === "Degraded"
  ).length;

  const offlineCount = services.filter(
    (service) => service.status === "Offline"
  ).length;

  const overallStatus: SystemStatus =
    offlineCount > 0
      ? "Offline"
      : degradedCount > 0
      ? "Degraded"
      : "Operational";

  function checkAllSystems() {
    setChecking(true);

    setTimeout(() => {
      setServices((currentServices) =>
        currentServices.map((service) => ({
          ...service,
          lastChecked: "Just now",
        }))
      );

      setLastGlobalCheck("Just now");
      setChecking(false);
    }, 1200);
  }

  function checkService(id: string) {
    setServices((currentServices) =>
      currentServices.map((service) =>
        service.id === id
          ? {
              ...service,
              lastChecked: "Just now",
            }
          : service
      )
    );
  }

  function getStatusStyles(status: SystemStatus) {
    if (status === "Operational") {
      return {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        dot: "bg-emerald-400",
      };
    }

    if (status === "Degraded") {
      return {
        text: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        dot: "bg-orange-400",
      };
    }

    return {
      text: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      dot: "bg-red-400",
    };
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-white">

      {/* Admin Sidebar */}

      <AdminSidebar />

      {/* Main Content */}

      <div className="relative ml-[252px] min-h-screen min-w-0 overflow-x-hidden">

        {/* Background Effects */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 p-8">

          {/* Header */}

          <header className="mb-8">

            <Link
              href="/admin"
              className="mb-5 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              <ArrowLeft size={17} />
              Back to Overview
            </Link>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-400">
                  <Activity size={17} />
                  SYSTEM MONITORING
                </div>

                <h1 className="text-4xl font-bold text-white md:text-5xl">
                  System Monitoring
                </h1>

                <p className="mt-3 max-w-2xl text-slate-400">
                  Monitor the health and availability of
                  OceanMind infrastructure and services.
                </p>

              </div>

              <button
                type="button"
                onClick={checkAllSystems}
                disabled={checking}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RefreshCw
                  size={18}
                  className={checking ? "animate-spin" : ""}
                />

                {checking
                  ? "Checking..."
                  : "Check All Systems"}
              </button>

            </div>

          </header>

          {/* Overall Status */}

          <section
            className={`rounded-3xl border p-7 ${
              overallStatus === "Operational"
                ? "border-emerald-500/20 bg-emerald-500/5"
                : overallStatus === "Degraded"
                ? "border-orange-500/20 bg-orange-500/5"
                : "border-red-500/20 bg-red-500/5"
            }`}
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-5">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                    overallStatus === "Operational"
                      ? "bg-emerald-500/10"
                      : overallStatus === "Degraded"
                      ? "bg-orange-500/10"
                      : "bg-red-500/10"
                  }`}
                >

                  {overallStatus === "Operational" ? (
                    <ShieldCheck
                      size={32}
                      className="text-emerald-400"
                    />
                  ) : overallStatus === "Degraded" ? (
                    <AlertTriangle
                      size={32}
                      className="text-orange-400"
                    />
                  ) : (
                    <XCircle
                      size={32}
                      className="text-red-400"
                    />
                  )}

                </div>

                <div>

                  <p className="text-sm font-medium text-slate-400">
                    Overall System Status
                  </p>

                  <h2
                    className={`mt-1 text-2xl font-bold ${
                      overallStatus === "Operational"
                        ? "text-emerald-400"
                        : overallStatus === "Degraded"
                        ? "text-orange-400"
                        : "text-red-400"
                    }`}
                  >
                    {overallStatus === "Operational"
                      ? "All Systems Operational"
                      : overallStatus === "Degraded"
                      ? "Some Systems Degraded"
                      : "System Issues Detected"}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Last global check: {lastGlobalCheck}
                  </p>

                </div>

              </div>

              <div className="grid grid-cols-3 gap-3">

                <div className="rounded-xl border border-emerald-500/10 bg-slate-950/40 px-5 py-4 text-center">

                  <p className="text-2xl font-bold text-emerald-400">
                    {operationalCount}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Operational
                  </p>

                </div>

                <div className="rounded-xl border border-orange-500/10 bg-slate-950/40 px-5 py-4 text-center">

                  <p className="text-2xl font-bold text-orange-400">
                    {degradedCount}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Degraded
                  </p>

                </div>

                <div className="rounded-xl border border-red-500/10 bg-slate-950/40 px-5 py-4 text-center">

                  <p className="text-2xl font-bold text-red-400">
                    {offlineCount}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Offline
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* Infrastructure Health */}

          <section className="mt-8">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-white">
                Infrastructure Health
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Current health of connected OceanMind
                services.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

              {services.map((service) => {

                const styles = getStatusStyles(
                  service.status
                );

                return (
                  <div
                    key={service.id}
                    className={`rounded-2xl border bg-slate-900 p-6 transition hover:border-slate-700 ${styles.border}`}
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex items-center gap-4">

                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.bg}`}
                        >

                          {service.id === "database" ? (
                            <Database
                              size={23}
                              className={styles.text}
                            />
                          ) : service.id === "argo" ? (
                            <Waves
                              size={23}
                              className={styles.text}
                            />
                          ) : service.id === "chroma" ? (
                            <Activity
                              size={23}
                              className={styles.text}
                            />
                          ) : (
                            <Server
                              size={23}
                              className={styles.text}
                            />
                          )}

                        </div>

                        <div>

                          <h3 className="text-lg font-bold text-white">
                            {service.name}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {service.description}
                          </p>

                        </div>

                      </div>

                      <span
                        className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${styles.bg} ${styles.text}`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${styles.dot}`}
                        />

                        {service.status}
                      </span>

                    </div>

                    {/* Metrics */}

                    <div className="mt-6 grid grid-cols-2 gap-3">

                      <div className="rounded-xl bg-slate-950/70 p-4">

                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Activity size={14} />
                          Uptime
                        </div>

                        <p className="mt-2 text-lg font-bold text-white">
                          {service.uptime}
                        </p>

                      </div>

                      <div className="rounded-xl bg-slate-950/70 p-4">

                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Wifi size={14} />
                          Response
                        </div>

                        <p className="mt-2 text-lg font-bold text-white">
                          {service.response}
                        </p>

                      </div>

                    </div>

                    {/* Footer */}

                    <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">

                      <span className="flex items-center gap-2 text-xs text-slate-600">
                        <Clock3 size={14} />
                        Checked {service.lastChecked}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          checkService(service.id)
                        }
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
                      >
                        <RefreshCw size={14} />
                        Check
                      </button>

                    </div>

                  </div>
                );
              })}

            </div>

          </section>

          {/* Server Metrics */}

          <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                <Server
                  size={21}
                  className="text-blue-400"
                />
              </div>

              <div>

                <h2 className="text-xl font-bold text-white">
                  API / Server Metrics
                </h2>

                <p className="text-sm text-slate-500">
                  Current application server performance.
                </p>

              </div>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">

                <p className="text-sm text-slate-500">
                  Server Uptime
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  99.98%
                </p>

              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">

                <p className="text-sm text-slate-500">
                  Average Response
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  38 ms
                </p>

              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">

                <p className="text-sm text-slate-500">
                  Requests / min
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  1,284
                </p>

              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">

                <p className="text-sm text-slate-500">
                  Error Rate
                </p>

                <p className="mt-2 text-2xl font-bold text-emerald-400">
                  0.02%
                </p>

              </div>

            </div>

          </section>

          {/* Monitoring Note */}

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

            <Activity
              size={20}
              className="mt-0.5 shrink-0 text-cyan-400"
            />

            <div>

              <p className="font-semibold text-cyan-300">
                System health monitoring
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                The values shown here are currently
                demonstration data. The backend team can
                connect these cards to real database,
                ARGO cache, ChromaDB, and API health
                endpoints.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}