"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  Clock3,
  MapPin,
  Search,
  ShieldAlert,
  Waves,
  XCircle,
} from "lucide-react";

import AdminSidebar from "../../../components/admin/AdminSidebar";

type Severity = "HIGH" | "MEDIUM" | "LOW";
type AnomalyStatus = "Detected" | "Resolved";

type Anomaly = {
  id: string;
  title: string;
  description: string;
  location: string;
  severity: Severity;
  status: AnomalyStatus;
  detected: string;
  sensor: string;
};

const initialAnomalies: Anomaly[] = [
  {
    id: "AN-001",
    title: "Unusual Sea Surface Temperature",
    description:
      "Temperature is significantly higher than the expected regional average.",
    location: "Bay of Bengal",
    severity: "HIGH",
    status: "Detected",
    detected: "12 min ago",
    sensor: "SN-001",
  },
  {
    id: "AN-002",
    title: "Rapid Wave Height Increase",
    description:
      "Wave height has increased rapidly over the last monitoring period.",
    location: "Arabian Sea",
    severity: "HIGH",
    status: "Detected",
    detected: "24 min ago",
    sensor: "SN-002",
  },
  {
    id: "AN-003",
    title: "Salinity Variation",
    description:
      "Observed salinity is outside the normal range for this location.",
    location: "Indian Ocean",
    severity: "MEDIUM",
    status: "Detected",
    detected: "38 min ago",
    sensor: "SN-004",
  },
  {
    id: "AN-004",
    title: "Pressure Fluctuation",
    description:
      "Repeated pressure fluctuations detected by the sensor node.",
    location: "Andaman Sea",
    severity: "MEDIUM",
    status: "Detected",
    detected: "1 hr ago",
    sensor: "SN-005",
  },
  {
    id: "AN-005",
    title: "Minor Temperature Deviation",
    description:
      "Small deviation from the expected temperature range.",
    location: "Lakshadweep Sea",
    severity: "LOW",
    status: "Detected",
    detected: "2 hrs ago",
    sensor: "SN-006",
  },
  {
    id: "AN-006",
    title: "Temporary Sensor Irregularity",
    description:
      "Short period of irregular sensor readings was detected.",
    location: "Chennai Coast",
    severity: "LOW",
    status: "Resolved",
    detected: "Yesterday",
    sensor: "SN-003",
  },
];

export default function AdminAnomaliesPage() {
  const [anomalies, setAnomalies] =
    useState<Anomaly[]>(initialAnomalies);

  const [search, setSearch] = useState("");

  const [severityFilter, setSeverityFilter] =
    useState<"All" | Severity>("All");

  const [statusFilter, setStatusFilter] =
    useState<"All" | AnomalyStatus>("All");

  const filteredAnomalies = useMemo(() => {
    return anomalies.filter((anomaly) => {
      const matchesSearch =
        anomaly.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        anomaly.location
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        anomaly.sensor
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        anomaly.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSeverity =
        severityFilter === "All" ||
        anomaly.severity === severityFilter;

      const matchesStatus =
        statusFilter === "All" ||
        anomaly.status === statusFilter;

      return (
        matchesSearch &&
        matchesSeverity &&
        matchesStatus
      );
    });
  }, [
    anomalies,
    search,
    severityFilter,
    statusFilter,
  ]);

  const highCount = anomalies.filter(
    (anomaly) =>
      anomaly.severity === "HIGH" &&
      anomaly.status === "Detected"
  ).length;

  const mediumCount = anomalies.filter(
    (anomaly) =>
      anomaly.severity === "MEDIUM" &&
      anomaly.status === "Detected"
  ).length;

  const lowCount = anomalies.filter(
    (anomaly) =>
      anomaly.severity === "LOW" &&
      anomaly.status === "Detected"
  ).length;

  const resolvedCount = anomalies.filter(
    (anomaly) => anomaly.status === "Resolved"
  ).length;

  function resolveAnomaly(id: string) {
    setAnomalies((current) =>
      current.map((anomaly) =>
        anomaly.id === id
          ? {
              ...anomaly,
              status: "Resolved",
            }
          : anomaly
      )
    );
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-white">

      {/* Admin Sidebar */}

      <AdminSidebar />

      {/* Main Content */}

      <div className="relative ml-[252px] min-h-screen min-w-0 overflow-x-hidden">

        {/* Background Effects */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

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
                  <ShieldAlert size={17} />
                  ANOMALY MANAGEMENT
                </div>

                <h1 className="text-4xl font-bold text-white md:text-5xl">
                  Anomalies
                </h1>

                <p className="mt-3 max-w-2xl text-slate-400">
                  Monitor detected ocean anomalies, review
                  severity levels, and resolve incidents.
                </p>

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                <span className="text-sm font-medium text-emerald-400">
                  Monitoring Active
                </span>

              </div>

            </div>

          </header>

          {/* Statistics */}

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* High */}

            <div className="rounded-2xl border border-red-500/20 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
                  <AlertTriangle
                    size={22}
                    className="text-red-400"
                  />
                </div>

                <span className="text-xs font-semibold text-red-400">
                  HIGH
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                High Severity
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {highCount}
              </p>

            </div>

            {/* Medium */}

            <div className="rounded-2xl border border-orange-500/20 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">
                  <AlertTriangle
                    size={22}
                    className="text-orange-400"
                  />
                </div>

                <span className="text-xs font-semibold text-orange-400">
                  MEDIUM
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Medium Severity
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {mediumCount}
              </p>

            </div>

            {/* Low */}

            <div className="rounded-2xl border border-yellow-500/20 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10">
                  <AlertTriangle
                    size={22}
                    className="text-yellow-400"
                  />
                </div>

                <span className="text-xs font-semibold text-yellow-400">
                  LOW
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Low Severity
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {lowCount}
              </p>

            </div>

            {/* Resolved */}

            <div className="rounded-2xl border border-emerald-500/20 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                  <CheckCircle
                    size={22}
                    className="text-emerald-400"
                  />
                </div>

                <span className="text-xs font-semibold text-emerald-400">
                  RESOLVED
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Resolved Anomalies
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {resolvedCount}
              </p>

            </div>

          </section>

          {/* Anomaly Management */}

          <section className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

            {/* Section Header */}

            <div className="border-b border-slate-800 p-6">

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    Detected Anomalies
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Review unusual ocean conditions detected
                    by the monitoring system.
                  </p>

                </div>

                {/* Filters */}

                <div className="flex flex-col gap-3 md:flex-row">

                  {/* Search */}

                  <div className="relative">

                    <Search
                      size={18}
                      className="absolute left-3 top-3 text-slate-500"
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
                      placeholder="Search anomalies..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 md:w-64"
                    />

                  </div>

                  {/* Severity */}

                  <select
                    value={severityFilter}
                    onChange={(event) =>
                      setSeverityFilter(
                        event.target.value as
                          | "All"
                          | Severity
                      )
                    }
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
                  >
                    <option value="All">
                      All Severity
                    </option>

                    <option value="HIGH">
                      High
                    </option>

                    <option value="MEDIUM">
                      Medium
                    </option>

                    <option value="LOW">
                      Low
                    </option>
                  </select>

                  {/* Status */}

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as
                          | "All"
                          | AnomalyStatus
                      )
                    }
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
                  >
                    <option value="All">
                      All Status
                    </option>

                    <option value="Detected">
                      Detected
                    </option>

                    <option value="Resolved">
                      Resolved
                    </option>
                  </select>

                </div>

              </div>

            </div>

            {/* Anomaly Cards */}

            <div className="space-y-4 p-6">

              {filteredAnomalies.map((anomaly) => {

                const isResolved =
                  anomaly.status === "Resolved";

                const severityStyles =
                  anomaly.severity === "HIGH"
                    ? {
                        border:
                          "border-red-500/30",
                        bg:
                          "bg-red-500/5",
                        text:
                          "text-red-400",
                        badge:
                          "bg-red-500/10 text-red-400",
                      }
                    : anomaly.severity === "MEDIUM"
                    ? {
                        border:
                          "border-orange-500/30",
                        bg:
                          "bg-orange-500/5",
                        text:
                          "text-orange-400",
                        badge:
                          "bg-orange-500/10 text-orange-400",
                      }
                    : {
                        border:
                          "border-yellow-500/30",
                        bg:
                          "bg-yellow-500/5",
                        text:
                          "text-yellow-400",
                        badge:
                          "bg-yellow-500/10 text-yellow-400",
                      };

                return (
                  <div
                    key={anomaly.id}
                    className={`rounded-2xl border p-5 transition ${
                      isResolved
                        ? "border-slate-800 bg-slate-950/40 opacity-70"
                        : `${severityStyles.border} ${severityStyles.bg}`
                    }`}
                  >

                    <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                      {/* Main Information */}

                      <div className="flex min-w-0 items-start gap-4">

                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                            isResolved
                              ? "bg-emerald-500/10"
                              : severityStyles.bg
                          }`}
                        >

                          {isResolved ? (
                            <CheckCircle
                              size={23}
                              className="text-emerald-400"
                            />
                          ) : (
                            <AlertTriangle
                              size={23}
                              className={
                                severityStyles.text
                              }
                            />
                          )}

                        </div>

                        <div className="min-w-0">

                          <div className="flex flex-wrap items-center gap-3">

                            <h3 className="text-lg font-bold text-white">
                              {anomaly.title}
                            </h3>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${
                                isResolved
                                  ? "bg-emerald-500/10 text-emerald-400"
                                  : severityStyles.badge
                              }`}
                            >
                              {isResolved
                                ? "RESOLVED"
                                : anomaly.severity}
                            </span>

                          </div>

                          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                            {anomaly.description}
                          </p>

                          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">

                            <span className="flex items-center gap-1.5">
                              <MapPin size={14} />
                              {anomaly.location}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <Waves size={14} />
                              {anomaly.sensor}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <Clock3 size={14} />
                              {anomaly.detected}
                            </span>

                          </div>

                        </div>

                      </div>

                      {/* Action */}

                      <div className="shrink-0 xl:pl-6">

                        {isResolved ? (

                          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm font-semibold text-emerald-400">
                            <CheckCircle size={17} />
                            Resolved
                          </div>

                        ) : (

                          <button
                            type="button"
                            onClick={() =>
                              resolveAnomaly(anomaly.id)
                            }
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-400 transition hover:border-emerald-400 hover:bg-emerald-500/20 xl:w-auto"
                          >
                            <CheckCircle size={17} />
                            Mark as Resolved
                          </button>

                        )}

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* No Results */}

            {filteredAnomalies.length === 0 && (

              <div className="px-6 py-16 text-center">

                <ShieldAlert
                  size={42}
                  className="mx-auto text-slate-700"
                />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  No anomalies found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or filters.
                </p>

              </div>

            )}

            {/* Footer */}

            <div className="border-t border-slate-800 px-6 py-4">

              <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

                <span>
                  Showing{" "}
                  <span className="font-semibold text-slate-300">
                    {filteredAnomalies.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-slate-300">
                    {anomalies.length}
                  </span>{" "}
                  anomalies
                </span>

                <span className="flex items-center gap-2">

                  {highCount > 0 ? (
                    <>
                      <XCircle
                        size={15}
                        className="text-red-400"
                      />

                      <span className="text-red-400">
                        {highCount} high priority{" "}
                        {highCount === 1
                          ? "alert"
                          : "alerts"}
                      </span>
                    </>
                  ) : (
                    <>
                      <CheckCircle
                        size={15}
                        className="text-emerald-400"
                      />

                      <span className="text-emerald-400">
                        No high priority alerts
                      </span>
                    </>
                  )}

                </span>

              </div>

            </div>

          </section>

          {/* Monitoring Note */}

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">

            <AlertTriangle
              size={20}
              className="mt-0.5 shrink-0 text-orange-400"
            />

            <div>

              <p className="font-semibold text-orange-300">
                Anomaly monitoring
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                These anomalies are currently demonstration
                data. The backend anomaly detection service
                can provide live alerts and detection events
                once the API is connected.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}