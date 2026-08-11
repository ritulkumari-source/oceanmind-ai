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
      const searchValue = search.toLowerCase();

      const matchesSearch =
        report.title
          .toLowerCase()
          .includes(searchValue) ||
        report.description
          .toLowerCase()
          .includes(searchValue) ||
        report.id
          .toLowerCase()
          .includes(searchValue);

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
  }, [
    reports,
    search,
    typeFilter,
    statusFilter,
  ]);

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
      id: `RPT-${String(reports.length + 1).padStart(
        3,
        "0"
      )}`,
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
    <main className="min-h-screen w-full overflow-x-hidden bg-[#DCEFF7] text-[#123247]">

      {/* ================================================= */}
      {/* SIDEBAR */}
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

                  <FileText size={17} />

                  REPORT MANAGEMENT

                </div>

                <h1 className="text-4xl font-bold text-[#123247] md:text-5xl">
                  Reports
                </h1>

                <p className="mt-3 max-w-2xl text-[#52788C]">
                  Generate, review, and download OceanMind
                  research and system reports.
                </p>

              </div>

              {/* Generate */}

              <button
                type="button"
                onClick={() =>
                  setShowGenerator(true)
                }
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
                "
              >
                <Plus size={19} />

                Generate Report
              </button>

            </div>

          </header>

          {/* ================================================= */}
          {/* STATISTICS */}
          {/* ================================================= */}

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total */}

            <div
              className="
                rounded-3xl
                border
                border-[#CFE5EE]
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              "
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">

                <FileText
                  size={22}
                  className="text-cyan-600"
                />

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Total Reports
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {reports.length}
              </p>

            </div>

            {/* Ready */}

            <div
              className="
                rounded-3xl
                border
                border-emerald-100
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">

                  <CheckCircle
                    size={22}
                    className="text-emerald-500"
                  />

                </div>

                <span className="text-xs font-semibold text-emerald-600">
                  Ready
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Ready Reports
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {readyReports}
              </p>

            </div>

            {/* Generating */}

            <div
              className="
                rounded-3xl
                border
                border-cyan-100
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">

                  <Clock3
                    size={22}
                    className="text-cyan-600"
                  />

                </div>

                <span className="text-xs font-semibold text-cyan-600">
                  Processing
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Generating
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {generatingReports}
              </p>

            </div>

            {/* Draft */}

            <div
              className="
                rounded-3xl
                border
                border-orange-100
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">

                  <FileText
                    size={22}
                    className="text-orange-500"
                  />

                </div>

                <span className="text-xs font-semibold text-orange-600">
                  Draft
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Draft Reports
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {draftReports}
              </p>

            </div>

          </section>

          {/* ================================================= */}
          {/* REPORTS CARD */}
          {/* ================================================= */}

          <section
            className="
              mt-8
              overflow-hidden
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              shadow-[0_8px_30px_rgba(30,90,110,0.06)]
            "
          >

            {/* Filters */}

            <div className="border-b border-[#E1EEF3] p-6">

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-[#123247]">
                    Research Reports
                  </h2>

                  <p className="mt-1 text-sm text-[#718895]">
                    Manage generated OceanMind reports.
                  </p>

                </div>

                <div className="flex flex-col gap-3 md:flex-row">

                  {/* Search */}

                  <div className="relative">

                    <Search
                      size={18}
                      className="absolute left-3 top-3 text-[#8AA3AF]"
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
                      placeholder="Search reports..."
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#CFE5EE]
                        bg-[#F8FCFE]
                        py-2.5
                        pl-10
                        pr-4
                        text-sm
                        text-[#123247]
                        outline-none
                        placeholder:text-[#9BB2BD]
                        focus:border-cyan-400
                        focus:ring-4
                        focus:ring-cyan-100
                        md:w-64
                      "
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
                    className="
                      rounded-xl
                      border
                      border-[#CFE5EE]
                      bg-[#F8FCFE]
                      px-4
                      py-2.5
                      text-sm
                      text-[#52788C]
                      outline-none
                      focus:border-cyan-400
                      focus:ring-4
                      focus:ring-cyan-100
                    "
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
                    className="
                      rounded-xl
                      border
                      border-[#CFE5EE]
                      bg-[#F8FCFE]
                      px-4
                      py-2.5
                      text-sm
                      text-[#52788C]
                      outline-none
                      focus:border-cyan-400
                      focus:ring-4
                      focus:ring-cyan-100
                    "
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

            {/* ================================================= */}
            {/* DESKTOP TABLE */}
            {/* ================================================= */}

            <div className="hidden overflow-x-auto md:block">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-[#E1EEF3] text-left">

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Report
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Type
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Created
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredReports.map((report) => (

                    <tr
                      key={report.id}
                      className="
                        border-b
                        border-[#E8F1F5]
                        transition
                        hover:bg-[#F7FCFE]
                      "
                    >

                      {/* Report */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50">

                            <FileText
                              size={20}
                              className="text-cyan-600"
                            />

                          </div>

                          <div className="max-w-xl">

                            <p className="font-semibold text-[#123247]">
                              {report.title}
                            </p>

                            <p className="mt-1 text-sm text-[#8AA3AF]">
                              {report.id} ·{" "}
                              {report.description}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Type */}

                      <td className="px-6 py-5">

                        <span className="rounded-full bg-[#EAF6FA] px-3 py-1.5 text-xs font-semibold text-[#52788C]">
                          {report.type}
                        </span>

                      </td>

                      {/* Status */}

                      <td className="px-6 py-5">

                        {report.status === "Ready" ? (

                          <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600">

                            <CheckCircle size={16} />

                            Ready

                          </span>

                        ) : report.status === "Generating" ? (

                          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600">

                            <Clock3
                              size={16}
                              className="animate-pulse"
                            />

                            Generating

                          </span>

                        ) : (

                          <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-600">

                            <FileText size={16} />

                            Draft

                          </span>

                        )}

                      </td>

                      {/* Created */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-2 text-sm text-[#718895]">

                          <CalendarDays size={15} />

                          {report.created}

                        </div>

                        <p className="mt-1 text-xs text-[#9BB2BD]">
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
                            disabled:cursor-not-allowed
                            disabled:opacity-30
                          "
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

            {/* ================================================= */}
            {/* MOBILE CARDS */}
            {/* ================================================= */}

            <div className="space-y-4 p-4 md:hidden">

              {filteredReports.map((report) => (

                <div
                  key={report.id}
                  className="
                    rounded-2xl
                    border
                    border-[#DCECF2]
                    bg-[#F8FCFE]
                    p-5
                  "
                >

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">

                      <FileText
                        size={18}
                        className="text-cyan-600"
                      />

                    </div>

                    <div className="min-w-0">

                      <h3 className="font-semibold text-[#123247]">
                        {report.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#8AA3AF]">
                        {report.id}
                      </p>

                    </div>

                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#718895]">
                    {report.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full bg-white px-3 py-1 text-xs text-[#52788C] shadow-sm">
                      {report.type}
                    </span>

                    <span
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        ${
                          report.status === "Ready"
                            ? "bg-emerald-50 text-emerald-600"
                            : report.status ===
                                "Generating"
                              ? "bg-cyan-50 text-cyan-600"
                              : "bg-orange-50 text-orange-600"
                        }
                      `}
                    >
                      {report.status}
                    </span>

                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#DCECF2] pt-4">

                    <span className="flex items-center gap-2 text-xs text-[#8AA3AF]">

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
                      className="
                        flex
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
                        disabled:opacity-30
                      "
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
                  className="mx-auto text-[#A7BBC4]"
                />

                <h3 className="mt-4 text-lg font-semibold text-[#123247]">
                  No reports found
                </h3>

                <p className="mt-2 text-sm text-[#718895]">
                  Try changing your search or filters.
                </p>

              </div>

            )}

            {/* Footer */}

            <div className="border-t border-[#E1EEF3] px-6 py-4">

              <p className="text-sm text-[#718895]">

                Showing{" "}

                <span className="font-semibold text-[#35596B]">
                  {filteredReports.length}
                </span>{" "}

                of{" "}

                <span className="font-semibold text-[#35596B]">
                  {reports.length}
                </span>{" "}

                reports

              </p>

            </div>

          </section>

          {/* ================================================= */}
          {/* BACKEND NOTE */}
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

            <Sparkles
              size={20}
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <div>

              <p className="font-semibold text-cyan-700">
                Report generation
              </p>

              <p className="mt-1 text-sm leading-6 text-[#718895]">
                Reports are currently demonstration data.
                The backend team can connect this page to
                the real research-report generation and
                storage service.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* GENERATE REPORT MODAL */}
      {/* ================================================= */}

      {showGenerator && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#123247]/30 p-4 backdrop-blur-sm">

          <div
            className="
              w-full
              max-w-lg
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              p-6
              shadow-[0_25px_80px_rgba(30,90,110,0.20)]
            "
          >

            {/* Modal Header */}

            <div className="flex items-start justify-between">

              <div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50">

                  <Sparkles
                    size={21}
                    className="text-cyan-600"
                  />

                </div>

                <h2 className="mt-4 text-2xl font-bold text-[#123247]">
                  Generate Report
                </h2>

                <p className="mt-2 text-sm text-[#718895]">
                  Create a new OceanMind research or
                  system report.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowGenerator(false)
                }
                className="
                  rounded-lg
                  p-2
                  text-[#8AA3AF]
                  transition
                  hover:bg-[#EAF6FA]
                  hover:text-cyan-600
                "
              >

                <X size={19} />

              </button>

            </div>

            {/* Form */}

            <div className="mt-6 space-y-5">

              {/* Title */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#52788C]">
                  Report Title
                </label>

                <input
                  type="text"
                  value={reportTitle}
                  onChange={(event) =>
                    setReportTitle(
                      event.target.value
                    )
                  }
                  placeholder="e.g. Indian Ocean Research Report"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#CFE5EE]
                    bg-[#F8FCFE]
                    px-4
                    py-3
                    text-sm
                    text-[#123247]
                    outline-none
                    placeholder:text-[#A0B5BE]
                    focus:border-cyan-400
                    focus:ring-4
                    focus:ring-cyan-100
                  "
                />

              </div>

              {/* Type */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#52788C]">
                  Report Type
                </label>

                <select
                  value={reportType}
                  onChange={(event) =>
                    setReportType(
                      event.target.value as ReportType
                    )
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#CFE5EE]
                    bg-[#F8FCFE]
                    px-4
                    py-3
                    text-sm
                    text-[#52788C]
                    outline-none
                    focus:border-cyan-400
                    focus:ring-4
                    focus:ring-cyan-100
                  "
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

              {/* Info */}

              <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4">

                <p className="text-sm font-medium text-cyan-700">
                  What happens next?
                </p>

                <p className="mt-1 text-xs leading-5 text-[#718895]">
                  The report will appear as
                  &quot;Generating&quot; and automatically
                  become available for download in this
                  frontend demonstration.
                </p>

              </div>

            </div>

            {/* Actions */}

            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowGenerator(false)
                }
                className="
                  flex-1
                  rounded-xl
                  border
                  border-[#CFE5EE]
                  bg-white
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#52788C]
                  transition
                  hover:bg-[#F3FAFC]
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={generateReport}
                disabled={
                  !reportTitle.trim() ||
                  generating
                }
                className="
                  flex-1
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:from-cyan-400
                  hover:to-blue-500
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
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