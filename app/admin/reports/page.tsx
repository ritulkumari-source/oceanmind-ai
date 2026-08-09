"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle,
  Clock3,
  Download,
  FileText,
  Filter,
  Plus,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import AdminSidebar from "../../../components/admin/AdminSidebar";

type ReportStatus = "Ready" | "Generating" | "Draft";
type ReportType = "Research" | "Ocean Health" | "Anomaly" | "System";

type Report = {
  id: string;
  title: string;
  type: ReportType;
  description: string;
  status: ReportStatus;
  created: string;
  size: string;
};

const initialReports: Report[] = [
  {
    id: "RPT-001",
    title: "Bay of Bengal Ocean Health Report",
    type: "Ocean Health",
    description:
      "Summary of temperature, salinity, pressure, and overall ocean conditions.",
    status: "Ready",
    created: "August 8, 2026",
    size: "2.4 MB",
  },
  {
    id: "RPT-002",
    title: "Monthly Anomaly Detection Report",
    type: "Anomaly",
    description:
      "Detected ocean anomalies and their severity across monitored regions.",
    status: "Ready",
    created: "August 7, 2026",
    size: "1.8 MB",
  },
  {
    id: "RPT-003",
    title: "ARGO Data Research Summary",
    type: "Research",
    description:
      "Research summary based on available ARGO oceanographic profiles.",
    status: "Ready",
    created: "August 5, 2026",
    size: "3.1 MB",
  },
  {
    id: "RPT-004",
    title: "OceanMind System Health Report",
    type: "System",
    description:
      "Infrastructure health, API performance, cache status, and uptime.",
    status: "Draft",
    created: "August 4, 2026",
    size: "980 KB",
  },
  {
    id: "RPT-005",
    title: "Indian Ocean Research Report",
    type: "Research",
    description:
      "Regional research report covering observed environmental patterns.",
    status: "Generating",
    created: "August 3, 2026",
    size: "--",
  },
];

export default function AdminReportsPage() {
  const [reports, setReports] =
    useState<Report[]>(initialReports);

  const [search, setSearch] = useState("");

  const [typeFilter, setTypeFilter] =
    useState<"All" | ReportType>("All");

  const [statusFilter, setStatusFilter] =
    useState<"All" | ReportStatus>("All");

  const [showGenerator, setShowGenerator] =
    useState(false);

  const [reportTitle, setReportTitle] =
    useState("");

  const [reportType, setReportType] =
    useState<ReportType>("Research");

  const [generating, setGenerating] =
    useState(false);

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesSearch =
        report.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        report.description
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        report.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType =
        typeFilter === "All" ||
        report.type === typeFilter;

      const matchesStatus =
        statusFilter === "All" ||
        report.status === statusFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesStatus
      );
    });
  }, [reports, search, typeFilter, statusFilter]);

  const readyReports = reports.filter(
    (report) => report.status === "Ready"
  ).length;

  const generatingReports = reports.filter(
    (report) => report.status === "Generating"
  ).length;

  const draftReports = reports.filter(
    (report) => report.status === "Draft"
  ).length;

  function generateReport() {
    if (!reportTitle.trim()) {
      return;
    }

    const newReport: Report = {
      id: `RPT-${String(reports.length + 1).padStart(3, "0")}`,
      title: reportTitle,
      type: reportType,
      description:
        "New report generated from the OceanMind admin panel.",
      status: "Generating",
      created: "Just now",
      size: "--",
    };

    setReports((current) => [
      newReport,
      ...current,
    ]);

    setReportTitle("");
    setShowGenerator(false);
    setGenerating(true);

    setTimeout(() => {
      setReports((current) =>
        current.map((report) =>
          report.id === newReport.id
            ? {
                ...report,
                status: "Ready",
                size: "1.6 MB",
              }
            : report
        )
      );

      setGenerating(false);
    }, 1800);
  }

  function downloadReport(report: Report) {
    if (report.status !== "Ready") {
      return;
    }

    const reportContent = `
OceanMind AI
${report.title}

Report ID: ${report.id}
Report Type: ${report.type}
Created: ${report.created}

${report.description}

This is a frontend demonstration report.
The backend report-generation service can replace
this content with the actual generated research report.
`;

    const blob = new Blob([reportContent], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${report.id}-${report.title
      .replace(/\s+/g, "-")
      .toLowerCase()}.txt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

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
                  <FileText size={17} />
                  REPORT MANAGEMENT
                </div>

                <h1 className="text-4xl font-bold text-white md:text-5xl">
                  Reports
                </h1>

                <p className="mt-3 max-w-2xl text-slate-400">
                  Generate, review, and download OceanMind
                  research and system reports.
                </p>

              </div>

              <button
                type="button"
                onClick={() => setShowGenerator(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <Plus size={19} />
                Generate Report
              </button>

            </div>

          </header>

          {/* Statistics */}

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
                <FileText
                  size={22}
                  className="text-cyan-400"
                />
              </div>

              <p className="mt-5 text-sm text-slate-400">
                Total Reports
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {reports.length}
              </p>

            </div>

            {/* Ready */}

            <div className="rounded-2xl border border-emerald-500/20 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                  <CheckCircle
                    size={22}
                    className="text-emerald-400"
                  />
                </div>

                <span className="text-xs text-emerald-400">
                  Ready
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Ready Reports
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {readyReports}
              </p>

            </div>

            {/* Generating */}

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Clock3
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                <span className="text-xs text-cyan-400">
                  Processing
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Generating
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {generatingReports}
              </p>

            </div>

            {/* Drafts */}

            <div className="rounded-2xl border border-orange-500/20 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">
                  <FileText
                    size={22}
                    className="text-orange-400"
                  />
                </div>

                <span className="text-xs text-orange-400">
                  Draft
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Draft Reports
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {draftReports}
              </p>

            </div>

          </section>

          {/* Reports */}

          <section className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

            {/* Filters */}

            <div className="border-b border-slate-800 p-6">

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    Research Reports
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Manage generated OceanMind reports.
                  </p>

                </div>

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
                      placeholder="Search reports..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-500 md:w-64"
                    />

                  </div>

                  {/* Type */}

                  <select
                    value={typeFilter}
                    onChange={(event) =>
                      setTypeFilter(
                        event.target.value as
                          | "All"
                          | ReportType
                      )
                    }
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
                  >
                    <option value="All">
                      All Types
                    </option>

                    <option value="Research">
                      Research
                    </option>

                    <option value="Ocean Health">
                      Ocean Health
                    </option>

                    <option value="Anomaly">
                      Anomaly
                    </option>

                    <option value="System">
                      System
                    </option>
                  </select>

                  {/* Status */}

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as
                          | "All"
                          | ReportStatus
                      )
                    }
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
                  >
                    <option value="All">
                      All Status
                    </option>

                    <option value="Ready">
                      Ready
                    </option>

                    <option value="Generating">
                      Generating
                    </option>

                    <option value="Draft">
                      Draft
                    </option>
                  </select>

                </div>

              </div>

            </div>

            {/* Desktop Table */}

            <div className="hidden overflow-x-auto md:block">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-slate-800 text-left">

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Report
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Type
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Created
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredReports.map((report) => (

                    <tr
                      key={report.id}
                      className="border-b border-slate-800/70 transition hover:bg-slate-950/60"
                    >

                      {/* Report */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                            <FileText
                              size={20}
                              className="text-cyan-400"
                            />
                          </div>

                          <div className="max-w-xl">

                            <p className="font-semibold text-white">
                              {report.title}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                              {report.id} ·{" "}
                              {report.description}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Type */}

                      <td className="px-6 py-5">

                        <span className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300">
                          {report.type}
                        </span>

                      </td>

                      {/* Status */}

                      <td className="px-6 py-5">

                        {report.status === "Ready" ? (

                          <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                            <CheckCircle size={16} />
                            Ready
                          </span>

                        ) : report.status === "Generating" ? (

                          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
                            <Clock3
                              size={16}
                              className="animate-pulse"
                            />
                            Generating
                          </span>

                        ) : (

                          <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-400">
                            <FileText size={16} />
                            Draft
                          </span>

                        )}

                      </td>

                      {/* Created */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-2 text-sm text-slate-400">

                          <CalendarDays size={15} />

                          {report.created}

                        </div>

                        <p className="mt-1 text-xs text-slate-600">
                          {report.size}
                        </p>

                      </td>

                      {/* Action */}

                      <td className="px-6 py-5 text-right">

                        <button
                          type="button"
                          onClick={() =>
                            downloadReport(report)
                          }
                          disabled={
                            report.status !== "Ready"
                          }
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Download size={15} />
                          Download
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Mobile Cards */}

            <div className="space-y-4 p-4 md:hidden">

              {filteredReports.map((report) => (

                <div
                  key={report.id}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                      <FileText
                        size={18}
                        className="text-cyan-400"
                      />
                    </div>

                    <div className="min-w-0">

                      <h3 className="font-semibold text-white">
                        {report.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {report.id}
                      </p>

                    </div>

                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {report.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                      {report.type}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        report.status === "Ready"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : report.status === "Generating"
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "bg-orange-500/10 text-orange-400"
                      }`}
                    >
                      {report.status}
                    </span>

                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">

                    <span className="flex items-center gap-2 text-xs text-slate-600">
                      <CalendarDays size={14} />
                      {report.created}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        downloadReport(report)
                      }
                      disabled={
                        report.status !== "Ready"
                      }
                      className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 disabled:opacity-30"
                    >
                      <Download size={14} />
                      Download
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Empty State */}

            {filteredReports.length === 0 && (

              <div className="px-6 py-16 text-center">

                <Filter
                  size={42}
                  className="mx-auto text-slate-700"
                />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  No reports found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or filters.
                </p>

              </div>

            )}

            {/* Footer */}

            <div className="border-t border-slate-800 px-6 py-4">

              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-300">
                  {filteredReports.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-300">
                  {reports.length}
                </span>{" "}
                reports
              </p>

            </div>

          </section>

          {/* Backend Note */}

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

            <Sparkles
              size={20}
              className="mt-0.5 shrink-0 text-cyan-400"
            />

            <div>

              <p className="font-semibold text-cyan-300">
                Report generation
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Reports are currently demonstration data.
                The backend team can connect this page to
                the real research-report generation and
                storage service.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Generate Report Modal */}

      {showGenerator && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

          <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">

            {/* Modal Header */}

            <div className="flex items-start justify-between">

              <div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Sparkles
                    size={21}
                    className="text-cyan-400"
                  />
                </div>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  Generate Report
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Create a new OceanMind research or system
                  report.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowGenerator(false)
                }
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white"
              >
                <X size={19} />
              </button>

            </div>

            {/* Form */}

            <div className="mt-6 space-y-5">

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Report Title
                </label>

                <input
                  type="text"
                  value={reportTitle}
                  onChange={(event) =>
                    setReportTitle(event.target.value)
                  }
                  placeholder="e.g. Indian Ocean Research Report"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Report Type
                </label>

                <select
                  value={reportType}
                  onChange={(event) =>
                    setReportType(
                      event.target.value as ReportType
                    )
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none focus:border-cyan-500"
                >

                  <option value="Research">
                    Research
                  </option>

                  <option value="Ocean Health">
                    Ocean Health
                  </option>

                  <option value="Anomaly">
                    Anomaly
                  </option>

                  <option value="System">
                    System
                  </option>

                </select>

              </div>

              <div className="rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-4">

                <p className="text-sm font-medium text-cyan-300">
                  What happens next?
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  The report will appear as "Generating"
                  and automatically become available for
                  download in this frontend demonstration.
                </p>

              </div>

            </div>

            {/* Modal Actions */}

            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowGenerator(false)
                }
                className="flex-1 rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={generateReport}
                disabled={
                  !reportTitle.trim() || generating
                }
                className="flex-1 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {generating
                  ? "Generating..."
                  : "Generate"}
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}