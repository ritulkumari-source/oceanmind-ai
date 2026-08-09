"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  CheckCircle,
  Clock3,
  Database,
  Download,
  MapPin,
  RefreshCw,
  Search,
  Waves,
  XCircle,
} from "lucide-react";

import AdminSidebar from "../../../components/admin/AdminSidebar";

type ProfileStatus = "Cached" | "Needs Sync";

type ArgoProfile = {
  id: string;
  name: string;
  location: string;
  latitude: string;
  longitude: string;
  temperature: string;
  salinity: string;
  depth: string;
  status: ProfileStatus;
  lastSync: string;
};

const initialProfiles: ArgoProfile[] = [
  {
    id: "ARGO-45001",
    name: "ARGO Float 45001",
    location: "Bay of Bengal",
    latitude: "15.42° N",
    longitude: "88.31° E",
    temperature: "28.4°C",
    salinity: "34.8 PSU",
    depth: "1,000 m",
    status: "Cached",
    lastSync: "5 min ago",
  },
  {
    id: "ARGO-45002",
    name: "ARGO Float 45002",
    location: "Arabian Sea",
    latitude: "16.18° N",
    longitude: "67.45° E",
    temperature: "27.9°C",
    salinity: "35.2 PSU",
    depth: "1,200 m",
    status: "Cached",
    lastSync: "8 min ago",
  },
  {
    id: "ARGO-45003",
    name: "ARGO Float 45003",
    location: "Indian Ocean",
    latitude: "10.24° S",
    longitude: "78.52° E",
    temperature: "26.7°C",
    salinity: "34.5 PSU",
    depth: "1,500 m",
    status: "Needs Sync",
    lastSync: "2 hrs ago",
  },
  {
    id: "ARGO-45004",
    name: "ARGO Float 45004",
    location: "Andaman Sea",
    latitude: "11.62° N",
    longitude: "94.21° E",
    temperature: "29.1°C",
    salinity: "34.1 PSU",
    depth: "900 m",
    status: "Cached",
    lastSync: "12 min ago",
  },
  {
    id: "ARGO-45005",
    name: "ARGO Float 45005",
    location: "Lakshadweep Sea",
    latitude: "10.82° N",
    longitude: "73.68° E",
    temperature: "28.1°C",
    salinity: "35.0 PSU",
    depth: "1,100 m",
    status: "Cached",
    lastSync: "15 min ago",
  },
  {
    id: "ARGO-45006",
    name: "ARGO Float 45006",
    location: "South Indian Ocean",
    latitude: "31.45° S",
    longitude: "72.19° E",
    temperature: "21.8°C",
    salinity: "35.4 PSU",
    depth: "1,800 m",
    status: "Needs Sync",
    lastSync: "4 hrs ago",
  },
];

export default function ArgoDataPage() {
  const [profiles, setProfiles] =
    useState<ArgoProfile[]>(initialProfiles);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<"All" | ProfileStatus>("All");

  const [syncing, setSyncing] = useState(false);

  const [lastGlobalSync, setLastGlobalSync] =
    useState("Today, 10:42 AM");

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const matchesSearch =
        profile.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        profile.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        profile.location
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        profile.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [profiles, search, statusFilter]);

  const cachedProfiles = profiles.filter(
    (profile) => profile.status === "Cached"
  ).length;

  const needsSyncProfiles = profiles.filter(
    (profile) => profile.status === "Needs Sync"
  ).length;

  function refreshProfile(id: string) {
    setProfiles((currentProfiles) =>
      currentProfiles.map((profile) =>
        profile.id === id
          ? {
              ...profile,
              status: "Cached",
              lastSync: "Just now",
            }
          : profile
      )
    );
  }

  function syncAllProfiles() {
    setSyncing(true);

    setTimeout(() => {
      setProfiles((currentProfiles) =>
        currentProfiles.map((profile) => ({
          ...profile,
          status: "Cached",
          lastSync: "Just now",
        }))
      );

      setLastGlobalSync("Just now");
      setSyncing(false);
    }, 1200);
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
                  <Waves size={17} />
                  ARGO DATA MANAGEMENT
                </div>

                <h1 className="text-4xl font-bold text-white md:text-5xl">
                  ARGO Data
                </h1>

                <p className="mt-3 max-w-2xl text-slate-400">
                  View cached ARGO float profiles and manage
                  data synchronization.
                </p>

              </div>

              <button
                type="button"
                onClick={syncAllProfiles}
                disabled={syncing}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RefreshCw
                  size={18}
                  className={syncing ? "animate-spin" : ""}
                />

                {syncing
                  ? "Syncing..."
                  : "Sync ARGO Data"}
              </button>

            </div>

          </header>

          {/* Statistics */}

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Database
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                <span className="text-xs text-slate-500">
                  Profiles
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Total ARGO Profiles
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                4,500+
              </p>

            </div>

            {/* Cached */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

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
                Cached Profiles
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {cachedProfiles}
              </p>

            </div>

            {/* Needs Sync */}

            <div className="rounded-2xl border border-orange-500/20 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">
                  <RefreshCw
                    size={22}
                    className="text-orange-400"
                  />
                </div>

                <span className="text-xs text-orange-400">
                  Pending
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Profiles Needing Sync
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {needsSyncProfiles}
              </p>

            </div>

            {/* Last Sync */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                  <Clock3
                    size={22}
                    className="text-blue-400"
                  />
                </div>

                <span className="text-xs text-blue-400">
                  Sync
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Last Global Sync
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                {lastGlobalSync}
              </p>

            </div>

          </section>

          {/* ARGO Profiles */}

          <section className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

            {/* Header */}

            <div className="border-b border-slate-800 p-6">

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    Cached ARGO Profiles
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Monitor stored profiles and trigger
                    individual data refreshes.
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
                      placeholder="Search ARGO profiles..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 md:w-64"
                    />

                  </div>

                  {/* Status Filter */}

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as
                          | "All"
                          | ProfileStatus
                      )
                    }
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
                  >
                    <option value="All">
                      All Profiles
                    </option>

                    <option value="Cached">
                      Cached
                    </option>

                    <option value="Needs Sync">
                      Needs Sync
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
                      Profile
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Location
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Temperature
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Salinity
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Depth
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredProfiles.map((profile) => {

                    const cached =
                      profile.status === "Cached";

                    return (
                      <tr
                        key={profile.id}
                        className="border-b border-slate-800/70 transition hover:bg-slate-950/60"
                      >

                        {/* Profile */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                              <Waves
                                size={20}
                                className="text-cyan-400"
                              />
                            </div>

                            <div>

                              <p className="font-semibold text-white">
                                {profile.name}
                              </p>

                              <p className="mt-1 text-sm text-slate-500">
                                {profile.id}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* Location */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2">

                            <MapPin
                              size={16}
                              className="text-slate-500"
                            />

                            <div>

                              <p className="text-sm text-slate-300">
                                {profile.location}
                              </p>

                              <p className="mt-1 text-xs text-slate-600">
                                {profile.latitude},{" "}
                                {profile.longitude}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* Temperature */}

                        <td className="px-6 py-5 text-sm text-slate-300">
                          {profile.temperature}
                        </td>

                        {/* Salinity */}

                        <td className="px-6 py-5 text-sm text-slate-300">
                          {profile.salinity}
                        </td>

                        {/* Depth */}

                        <td className="px-6 py-5 text-sm text-slate-300">
                          {profile.depth}
                        </td>

                        {/* Status */}

                        <td className="px-6 py-5">

                          <span
                            className={`inline-flex items-center gap-2 text-sm font-medium ${
                              cached
                                ? "text-emerald-400"
                                : "text-orange-400"
                            }`}
                          >

                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                cached
                                  ? "bg-emerald-400"
                                  : "bg-orange-400"
                              }`}
                            />

                            {profile.status}

                          </span>

                          <p className="mt-1 text-xs text-slate-600">
                            {profile.lastSync}
                          </p>

                        </td>

                        {/* Action */}

                        <td className="px-6 py-5 text-right">

                          <button
                            type="button"
                            onClick={() =>
                              refreshProfile(profile.id)
                            }
                            disabled={cached}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400 disabled:cursor-default disabled:opacity-40"
                          >
                            <RefreshCw size={14} />

                            {cached
                              ? "Synced"
                              : "Refresh"}
                          </button>

                        </td>

                      </tr>
                    );
                  })}

                </tbody>

              </table>

            </div>

            {/* Mobile Cards */}

            <div className="space-y-4 p-4 md:hidden">

              {filteredProfiles.map((profile) => {

                const cached =
                  profile.status === "Cached";

                return (
                  <div
                    key={profile.id}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                          <Waves
                            size={18}
                            className="text-cyan-400"
                          />
                        </div>

                        <div>

                          <p className="font-semibold text-white">
                            {profile.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {profile.id}
                          </p>

                        </div>

                      </div>

                      <span
                        className={`text-xs font-semibold ${
                          cached
                            ? "text-emerald-400"
                            : "text-orange-400"
                        }`}
                      >
                        {profile.status}
                      </span>

                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                      <MapPin size={15} />
                      {profile.location}
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">

                      <div className="rounded-xl bg-slate-900 p-3">

                        <p className="text-xs text-slate-500">
                          Temperature
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          {profile.temperature}
                        </p>

                      </div>

                      <div className="rounded-xl bg-slate-900 p-3">

                        <p className="text-xs text-slate-500">
                          Salinity
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          {profile.salinity}
                        </p>

                      </div>

                      <div className="rounded-xl bg-slate-900 p-3">

                        <p className="text-xs text-slate-500">
                          Depth
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          {profile.depth}
                        </p>

                      </div>

                    </div>

                    <div className="mt-4 flex items-center justify-between">

                      <span className="flex items-center gap-2 text-xs text-slate-600">
                        <Clock3 size={14} />
                        {profile.lastSync}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          refreshProfile(profile.id)
                        }
                        disabled={cached}
                        className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400 disabled:opacity-40"
                      >
                        <RefreshCw size={14} />
                        {cached
                          ? "Synced"
                          : "Refresh"}
                      </button>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Empty State */}

            {filteredProfiles.length === 0 && (

              <div className="px-6 py-16 text-center">

                <Database
                  size={42}
                  className="mx-auto text-slate-700"
                />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  No ARGO profiles found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or filter.
                </p>

              </div>

            )}

            {/* Footer */}

            <div className="border-t border-slate-800 px-6 py-4">

              <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

                <span>
                  Showing{" "}
                  <span className="font-semibold text-slate-300">
                    {filteredProfiles.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-slate-300">
                    {profiles.length}
                  </span>{" "}
                  profiles
                </span>

                <span className="flex items-center gap-2">

                  <Activity
                    size={15}
                    className="text-cyan-400"
                  />

                  ARGO cache monitoring active

                </span>

              </div>

            </div>

          </section>

          {/* System Note */}

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

            <Database
              size={20}
              className="mt-0.5 shrink-0 text-cyan-400"
            />

            <div>

              <p className="font-semibold text-cyan-300">
                ARGO cache
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                The profiles shown here are currently
                demonstration data. The backend ARGO service
                can replace these values with live cached
                profiles and synchronization status.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}