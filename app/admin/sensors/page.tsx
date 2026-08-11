"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Activity,
  ArrowLeft,
  CheckCircle,
  Clock3,
  Droplets,
  Gauge,
  Radio,
  Search,
  Thermometer,
  Waves,
  XCircle,
} from "lucide-react";

import AdminSidebar from "../../../components/admin/AdminSidebar";

type SensorStatus = "Online" | "Offline";

type Sensor = {
  id: string;
  name: string;
  location: string;
  status: SensorStatus;
  temperature: string;
  salinity: string;
  pressure: string;
  lastUpdate: string;
};

const initialSensors: Sensor[] = [
  {
    id: "SN-001",
    name: "Bay of Bengal Node 01",
    location: "Bay of Bengal",
    status: "Online",
    temperature: "28.4°C",
    salinity: "34.8 PSU",
    pressure: "1012 hPa",
    lastUpdate: "1 min ago",
  },
  {
    id: "SN-002",
    name: "Arabian Sea Node 07",
    location: "Arabian Sea",
    status: "Online",
    temperature: "27.9°C",
    salinity: "35.2 PSU",
    pressure: "1010 hPa",
    lastUpdate: "3 min ago",
  },
  {
    id: "SN-003",
    name: "Chennai Node 04",
    location: "Chennai Coast",
    status: "Offline",
    temperature: "--",
    salinity: "--",
    pressure: "--",
    lastUpdate: "42 min ago",
  },
  {
    id: "SN-004",
    name: "Indian Ocean Node 12",
    location: "Indian Ocean",
    status: "Online",
    temperature: "26.7°C",
    salinity: "34.5 PSU",
    pressure: "1008 hPa",
    lastUpdate: "5 min ago",
  },
  {
    id: "SN-005",
    name: "Andaman Node 03",
    location: "Andaman Sea",
    status: "Online",
    temperature: "29.1°C",
    salinity: "34.1 PSU",
    pressure: "1011 hPa",
    lastUpdate: "2 min ago",
  },
  {
    id: "SN-006",
    name: "Lakshadweep Node 02",
    location: "Lakshadweep Sea",
    status: "Offline",
    temperature: "--",
    salinity: "--",
    pressure: "--",
    lastUpdate: "1 hr ago",
  },
];

export default function SensorManagementPage() {
  const [sensors] = useState<Sensor[]>(initialSensors);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<"All" | SensorStatus>("All");

  const filteredSensors = useMemo(() => {
    return sensors.filter((sensor) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        sensor.name
          .toLowerCase()
          .includes(searchValue) ||
        sensor.location
          .toLowerCase()
          .includes(searchValue) ||
        sensor.id
          .toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        statusFilter === "All" ||
        sensor.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [sensors, search, statusFilter]);

  const onlineSensors = sensors.filter(
    (sensor) => sensor.status === "Online"
  ).length;

  const offlineSensors = sensors.filter(
    (sensor) => sensor.status === "Offline"
  ).length;

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

            <div>

              <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-600">

                <Radio size={17} />

                SENSOR MANAGEMENT

              </div>

              <h1 className="text-4xl font-bold text-[#123247] md:text-5xl">
                Sensor Nodes
              </h1>

              <p className="mt-3 max-w-2xl text-[#52788C]">
                Monitor connected ocean sensor nodes, their
                online status, and latest environmental readings.
              </p>

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

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">

                  <Radio
                    size={22}
                    className="text-blue-600"
                  />

                </div>

                <span className="text-xs font-semibold text-[#8AA3AF]">
                  Connected
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Total Sensor Nodes
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {sensors.length}
              </p>

            </div>

            {/* Online */}

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
                  Live
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Online Sensors
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {onlineSensors}
              </p>

            </div>

            {/* Offline */}

            <div
              className="
                rounded-3xl
                border
                border-red-100
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">

                  <XCircle
                    size={22}
                    className="text-red-500"
                  />

                </div>

                <span className="text-xs font-semibold text-red-600">
                  Attention
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Offline Sensors
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {offlineSensors}
              </p>

            </div>

            {/* Health */}

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

                  <Activity
                    size={22}
                    className="text-cyan-600"
                  />

                </div>

                <span className="text-xs font-semibold text-emerald-600">
                  Healthy
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Network Health
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                96.8%
              </p>

            </div>

          </section>

          {/* ================================================= */}
          {/* SENSOR LIST */}
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

            {/* Header */}

            <div className="border-b border-[#E1EEF3] p-6">

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-[#123247]">
                    Connected Sensors
                  </h2>

                  <p className="mt-1 text-sm text-[#718895]">
                    Latest readings from registered sensor nodes.
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
                      placeholder="Search sensors..."
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
                        transition
                        focus:border-cyan-400
                        focus:ring-4
                        focus:ring-cyan-100
                        md:w-64
                      "
                    />

                  </div>

                  {/* Status Filter */}

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as
                          | "All"
                          | SensorStatus
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
                      All Sensors
                    </option>

                    <option value="Online">
                      Online
                    </option>

                    <option value="Offline">
                      Offline
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
                      Sensor Node
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Temperature
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Salinity
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Pressure
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Last Update
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredSensors.map((sensor) => {

                    const online =
                      sensor.status === "Online";

                    return (
                      <tr
                        key={sensor.id}
                        className="
                          border-b
                          border-[#E8F1F5]
                          transition
                          hover:bg-[#F7FCFE]
                        "
                      >

                        {/* Sensor */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-4">

                            <div
                              className={`
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                ${
                                  online
                                    ? "bg-blue-50"
                                    : "bg-red-50"
                                }
                              `}
                            >

                              <Radio
                                size={20}
                                className={
                                  online
                                    ? "text-blue-600"
                                    : "text-red-500"
                                }
                              />

                            </div>

                            <div>

                              <p className="font-semibold text-[#123247]">
                                {sensor.name}
                              </p>

                              <p className="mt-1 text-sm text-[#8AA3AF]">
                                {sensor.id} ·{" "}
                                {sensor.location}
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* Status */}

                        <td className="px-6 py-5">

                          <span
                            className={`
                              inline-flex
                              items-center
                              gap-2
                              text-sm
                              font-medium
                              ${
                                online
                                  ? "text-emerald-600"
                                  : "text-red-500"
                              }
                            `}
                          >

                            <span
                              className={`
                                h-2.5
                                w-2.5
                                rounded-full
                                ${
                                  online
                                    ? "bg-emerald-500"
                                    : "bg-red-500"
                                }
                              `}
                            />

                            {sensor.status}

                          </span>

                        </td>

                        {/* Temperature */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-sm text-[#52788C]">

                            <Thermometer
                              size={17}
                              className="text-orange-500"
                            />

                            {sensor.temperature}

                          </div>

                        </td>

                        {/* Salinity */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-sm text-[#52788C]">

                            <Droplets
                              size={17}
                              className="text-cyan-600"
                            />

                            {sensor.salinity}

                          </div>

                        </td>

                        {/* Pressure */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-sm text-[#52788C]">

                            <Gauge
                              size={17}
                              className="text-purple-500"
                            />

                            {sensor.pressure}

                          </div>

                        </td>

                        {/* Update */}

                        <td className="px-6 py-5">

                          <div className="flex items-center justify-end gap-2 text-sm text-[#8AA3AF]">

                            <Clock3 size={15} />

                            {sensor.lastUpdate}

                          </div>

                        </td>

                      </tr>
                    );
                  })}

                </tbody>

              </table>

            </div>

            {/* ================================================= */}
            {/* MOBILE CARDS */}
            {/* ================================================= */}

            <div className="space-y-4 p-4 md:hidden">

              {filteredSensors.map((sensor) => {

                const online =
                  sensor.status === "Online";

                return (
                  <div
                    key={sensor.id}
                    className="
                      rounded-2xl
                      border
                      border-[#DCECF2]
                      bg-[#F8FCFE]
                      p-5
                    "
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">

                          <Radio
                            size={19}
                            className="text-blue-600"
                          />

                        </div>

                        <div>

                          <p className="font-semibold text-[#123247]">
                            {sensor.name}
                          </p>

                          <p className="mt-1 text-xs text-[#8AA3AF]">
                            {sensor.id}
                          </p>

                        </div>

                      </div>

                      <span
                        className={`
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          font-semibold
                          ${
                            online
                              ? "text-emerald-600"
                              : "text-red-500"
                          }
                        `}
                      >

                        <span
                          className={`
                            h-2
                            w-2
                            rounded-full
                            ${
                              online
                                ? "bg-emerald-500"
                                : "bg-red-500"
                            }
                          `}
                        />

                        {sensor.status}

                      </span>

                    </div>

                    <p className="mt-3 text-sm text-[#718895]">
                      {sensor.location}
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-2">

                      {/* Temperature */}

                      <div className="rounded-xl border border-[#E1EEF3] bg-white p-3">

                        <Thermometer
                          size={16}
                          className="text-orange-500"
                        />

                        <p className="mt-2 text-xs text-[#8AA3AF]">
                          Temperature
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#123247]">
                          {sensor.temperature}
                        </p>

                      </div>

                      {/* Salinity */}

                      <div className="rounded-xl border border-[#E1EEF3] bg-white p-3">

                        <Droplets
                          size={16}
                          className="text-cyan-600"
                        />

                        <p className="mt-2 text-xs text-[#8AA3AF]">
                          Salinity
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#123247]">
                          {sensor.salinity}
                        </p>

                      </div>

                      {/* Pressure */}

                      <div className="rounded-xl border border-[#E1EEF3] bg-white p-3">

                        <Gauge
                          size={16}
                          className="text-purple-500"
                        />

                        <p className="mt-2 text-xs text-[#8AA3AF]">
                          Pressure
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#123247]">
                          {sensor.pressure}
                        </p>

                      </div>

                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-[#8AA3AF]">

                      <Clock3 size={14} />

                      Updated {sensor.lastUpdate}

                    </div>

                  </div>
                );
              })}

            </div>

            {/* No Results */}

            {filteredSensors.length === 0 && (

              <div className="px-6 py-16 text-center">

                <Radio
                  size={40}
                  className="mx-auto text-[#A7BBC4]"
                />

                <h3 className="mt-4 text-lg font-semibold text-[#123247]">
                  No sensors found
                </h3>

                <p className="mt-2 text-sm text-[#718895]">
                  Try changing your search or status filter.
                </p>

              </div>

            )}

            {/* Footer */}

            <div className="border-t border-[#E1EEF3] px-6 py-4">

              <div className="flex flex-col gap-2 text-sm text-[#718895] sm:flex-row sm:items-center sm:justify-between">

                <span>
                  Showing{" "}

                  <span className="font-semibold text-[#35596B]">
                    {filteredSensors.length}
                  </span>{" "}

                  of{" "}

                  <span className="font-semibold text-[#35596B]">
                    {sensors.length}
                  </span>{" "}

                  sensors
                </span>

                <span className="flex items-center gap-2">

                  <Activity
                    size={15}
                    className="text-cyan-600"
                  />

                  Monitoring active

                </span>

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

            <Waves
              size={20}
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <div>

              <p className="font-semibold text-cyan-700">
                Sensor monitoring
              </p>

              <p className="mt-1 text-sm leading-6 text-[#718895]">
                Sensor readings shown here are currently
                frontend demonstration data. The backend
                sensor service can replace these values with
                live node readings once the API is connected.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}