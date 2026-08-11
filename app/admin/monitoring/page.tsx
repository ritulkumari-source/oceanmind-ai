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
        text: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        dot: "bg-emerald-500",
      };
    }

    if (status === "Degraded") {
      return {
        text: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        dot: "bg-orange-500",
      };
    }

    return {
      text: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      dot: "bg-red-500",
    };
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#DCEFF7] text-[#123247]">

      {/* ================================================= */}
      {/* ADMIN SIDEBAR */}
      {/* ================================================= */}

      <AdminSidebar />

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="relative ml-[252px] min-h-screen min-w-0 overflow-x-hidden">

        {/* Background Effects */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative z-10 p-8">

          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <header className="mb-8">

            <Link
              href="/admin"
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-[#718895]
                transition
                hover:text-cyan-600
              "
            >
              <ArrowLeft size={17} />
              Back to Overview
            </Link>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-600">

                  <Activity size={17} />

                  SYSTEM MONITORING

                </div>

                <h1 className="text-4xl font-bold text-[#123247] md:text-5xl">
                  System Monitoring
                </h1>

                <p className="mt-3 max-w-2xl text-[#52788C]">
                  Monitor the health and availability of
                  OceanMind infrastructure and services.
                </p>

              </div>

              {/* Check All Systems */}

              <button
                type="button"
                onClick={checkAllSystems}
                disabled={checking}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-5
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-cyan-500/15
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:from-cyan-400
                  hover:to-blue-500
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
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

          {/* ================================================= */}
          {/* OVERALL STATUS */}
          {/* ================================================= */}

          <section
            className={`
              rounded-3xl
              border
              p-7
              shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              ${
                overallStatus === "Operational"
                  ? "border-emerald-200 bg-emerald-50"
                  : overallStatus === "Degraded"
                    ? "border-orange-200 bg-orange-50"
                    : "border-red-200 bg-red-50"
              }
            `}
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Status */}

              <div className="flex items-center gap-5">

                <div
                  className={`
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    ${
                      overallStatus === "Operational"
                        ? "bg-emerald-100"
                        : overallStatus === "Degraded"
                          ? "bg-orange-100"
                          : "bg-red-100"
                    }
                  `}
                >

                  {overallStatus === "Operational" ? (
                    <ShieldCheck
                      size={32}
                      className="text-emerald-600"
                    />
                  ) : overallStatus === "Degraded" ? (
                    <AlertTriangle
                      size={32}
                      className="text-orange-600"
                    />
                  ) : (
                    <XCircle
                      size={32}
                      className="text-red-600"
                    />
                  )}

                </div>

                <div>

                  <p className="text-sm font-medium text-[#718895]">
                    Overall System Status
                  </p>

                  <h2
                    className={`
                      mt-1
                      text-2xl
                      font-bold
                      ${
                        overallStatus === "Operational"
                          ? "text-emerald-600"
                          : overallStatus === "Degraded"
                            ? "text-orange-600"
                            : "text-red-600"
                      }
                    `}
                  >
                    {overallStatus === "Operational"
                      ? "All Systems Operational"
                      : overallStatus === "Degraded"
                        ? "Some Systems Degraded"
                        : "System Issues Detected"}
                  </h2>

                  <p className="mt-1 text-sm text-[#8AA3AF]">
                    Last global check: {lastGlobalCheck}
                  </p>

                </div>

              </div>

              {/* Status Counts */}

              <div className="grid grid-cols-3 gap-3">

                <div className="rounded-xl border border-emerald-200 bg-white px-5 py-4 text-center shadow-sm">

                  <p className="text-2xl font-bold text-emerald-600">
                    {operationalCount}
                  </p>

                  <p className="mt-1 text-xs text-[#8AA3AF]">
                    Operational
                  </p>

                </div>

                <div className="rounded-xl border border-orange-200 bg-white px-5 py-4 text-center shadow-sm">

                  <p className="text-2xl font-bold text-orange-600">
                    {degradedCount}
                  </p>

                  <p className="mt-1 text-xs text-[#8AA3AF]">
                    Degraded
                  </p>

                </div>

                <div className="rounded-xl border border-red-200 bg-white px-5 py-4 text-center shadow-sm">

                  <p className="text-2xl font-bold text-red-600">
                    {offlineCount}
                  </p>

                  <p className="mt-1 text-xs text-[#8AA3AF]">
                    Offline
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* ================================================= */}
          {/* INFRASTRUCTURE HEALTH */}
          {/* ================================================= */}

          <section className="mt-8">

            <div className="mb-5">

              <h2 className="text-2xl font-bold text-[#123247]">
                Infrastructure Health
              </h2>

              <p className="mt-1 text-sm text-[#718895]">
                Current health of connected OceanMind services.
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
                    className={`
                      rounded-2xl
                      border
                      bg-white
                      p-6
                      shadow-[0_8px_30px_rgba(30,90,110,0.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_14px_35px_rgba(30,90,110,0.10)]
                      ${styles.border}
                    `}
                  >

                    {/* Service Header */}

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex items-center gap-4">

                        <div
                          className={`
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            ${styles.bg}
                          `}
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

                          <h3 className="text-lg font-bold text-[#123247]">
                            {service.name}
                          </h3>

                          <p className="mt-1 text-sm text-[#8AA3AF]">
                            {service.description}
                          </p>

                        </div>

                      </div>

                      {/* Status Badge */}

                      <span
                        className={`
                          flex
                          items-center
                          gap-2
                          rounded-full
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          ${styles.bg}
                          ${styles.text}
                        `}
                      >

                        <span
                          className={`
                            h-2
                            w-2
                            rounded-full
                            ${styles.dot}
                          `}
                        />

                        {service.status}

                      </span>

                    </div>

                    {/* Metrics */}

                    <div className="mt-6 grid grid-cols-2 gap-3">

                      <div className="rounded-xl border border-[#E1EEF3] bg-[#F8FCFE] p-4">

                        <div className="flex items-center gap-2 text-xs text-[#8AA3AF]">

                          <Activity size={14} />

                          Uptime

                        </div>

                        <p className="mt-2 text-lg font-bold text-[#123247]">
                          {service.uptime}
                        </p>

                      </div>

                      <div className="rounded-xl border border-[#E1EEF3] bg-[#F8FCFE] p-4">

                        <div className="flex items-center gap-2 text-xs text-[#8AA3AF]">

                          <Wifi size={14} />

                          Response

                        </div>

                        <p className="mt-2 text-lg font-bold text-[#123247]">
                          {service.response}
                        </p>

                      </div>

                    </div>

                    {/* Footer */}

                    <div className="mt-5 flex items-center justify-between border-t border-[#E1EEF3] pt-4">

                      <span className="flex items-center gap-2 text-xs text-[#8AA3AF]">

                        <Clock3 size={14} />

                        Checked {service.lastChecked}

                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          checkService(service.id)
                        }
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-[#CFE5EE]
                          bg-white
                          px-3
                          py-2
                          text-xs
                          font-semibold
                          text-[#52788C]
                          transition
                          hover:border-cyan-300
                          hover:bg-cyan-50
                          hover:text-cyan-600
                        "
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

          {/* ================================================= */}
          {/* SERVER METRICS */}
          {/* ================================================= */}

          <section
            className="
              mt-8
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(30,90,110,0.06)]
            "
          >

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">

                <Server
                  size={21}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h2 className="text-xl font-bold text-[#123247]">
                  API / Server Metrics
                </h2>

                <p className="text-sm text-[#8AA3AF]">
                  Current application server performance.
                </p>

              </div>

            </div>

            {/* Metrics */}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-xl border border-[#DCECF2] bg-[#F8FCFE] p-5">

                <p className="text-sm text-[#718895]">
                  Server Uptime
                </p>

                <p className="mt-2 text-2xl font-bold text-[#123247]">
                  99.98%
                </p>

              </div>

              <div className="rounded-xl border border-[#DCECF2] bg-[#F8FCFE] p-5">

                <p className="text-sm text-[#718895]">
                  Average Response
                </p>

                <p className="mt-2 text-2xl font-bold text-[#123247]">
                  38 ms
                </p>

              </div>

              <div className="rounded-xl border border-[#DCECF2] bg-[#F8FCFE] p-5">

                <p className="text-sm text-[#718895]">
                  Requests / min
                </p>

                <p className="mt-2 text-2xl font-bold text-[#123247]">
                  1,284
                </p>

              </div>

              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">

                <p className="text-sm text-[#718895]">
                  Error Rate
                </p>

                <p className="mt-2 text-2xl font-bold text-emerald-600">
                  0.02%
                </p>

              </div>

            </div>

          </section>

          {/* ================================================= */}
          {/* MONITORING NOTE */}
          {/* ================================================= */}

          <div
            className="
              mt-6
              flex
              items-start
              gap-3
              rounded-2xl
              border
              border-cyan-100
              bg-cyan-50
              p-5
            "
          >

            <Activity
              size={20}
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <div>

              <p className="font-semibold text-cyan-700">
                System health monitoring
              </p>

              <p className="mt-1 text-sm leading-6 text-[#718895]">
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