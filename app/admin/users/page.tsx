"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  Search,
  Users,
  UserCheck,
  UserX,
  ShieldCheck,
  MoreVertical,
  CheckCircle,
  XCircle,
} from "lucide-react";

import AdminSidebar from "../../../components/admin/AdminSidebar";

type UserRole = "User" | "Admin";
type UserStatus = "Active" | "Inactive";

type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joined: string;
};

const initialUsers: User[] = [
  {
    id: 1,
    name: "Ritul Kumari",
    email: "ritul@example.com",
    role: "User",
    status: "Active",
    joined: "June 18, 2026",
  },
  {
    id: 2,
    name: "Ananya Singh",
    email: "ananya@example.com",
    role: "User",
    status: "Active",
    joined: "June 15, 2026",
  },
  {
    id: 3,
    name: "OceanMind Admin",
    email: "admin@oceanmind.ai",
    role: "Admin",
    status: "Active",
    joined: "June 10, 2026",
  },
  {
    id: 4,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "User",
    status: "Inactive",
    joined: "June 8, 2026",
  },
  {
    id: 5,
    name: "Priya Das",
    email: "priya@example.com",
    role: "User",
    status: "Active",
    joined: "June 5, 2026",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    email: "arjun@example.com",
    role: "User",
    status: "Inactive",
    joined: "May 28, 2026",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const [search, setSearch] = useState("");

  const [roleFilter, setRoleFilter] =
    useState<"All" | UserRole>("All");

  const [statusFilter, setStatusFilter] =
    useState<"All" | UserStatus>("All");

  const [openMenu, setOpenMenu] =
    useState<number | null>(null);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(searchValue) ||
        user.email
          .toLowerCase()
          .includes(searchValue);

      const matchesRole =
        roleFilter === "All" ||
        user.role === roleFilter;

      const matchesStatus =
        statusFilter === "All" ||
        user.status === statusFilter;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );
    });
  }, [
    users,
    search,
    roleFilter,
    statusFilter,
  ]);

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const adminUsers = users.filter(
    (user) => user.role === "Admin"
  ).length;

  function toggleStatus(id: number) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : user
      )
    );

    setOpenMenu(null);
  }

  function toggleRole(id: number) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              role:
                user.role === "User"
                  ? "Admin"
                  : "User",
            }
          : user
      )
    );

    setOpenMenu(null);
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

            <div>

              <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-600">

                <Users size={17} />

                USER MANAGEMENT

              </div>

              <h1 className="text-4xl font-bold text-[#123247] md:text-5xl">
                Users
              </h1>

              <p className="mt-3 max-w-2xl text-[#52788C]">
                View and manage OceanMind platform users,
                roles, and account status.
              </p>

            </div>

          </header>

          {/* ================================================= */}
          {/* STATISTICS */}
          {/* ================================================= */}

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total Users */}

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

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">

                  <Users
                    size={22}
                    className="text-cyan-600"
                  />

                </div>

                <span className="text-xs font-semibold text-[#8AA3AF]">
                  Platform
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Total Users
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {users.length}
              </p>

            </div>

            {/* Active Users */}

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

                  <UserCheck
                    size={22}
                    className="text-emerald-500"
                  />

                </div>

                <span className="text-xs font-semibold text-emerald-600">
                  Active
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Active Users
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {activeUsers}
              </p>

            </div>

            {/* Inactive Users */}

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

                  <UserX
                    size={22}
                    className="text-red-500"
                  />

                </div>

                <span className="text-xs font-semibold text-red-600">
                  Inactive
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Inactive Users
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {inactiveUsers}
              </p>

            </div>

            {/* Administrators */}

            <div
              className="
                rounded-3xl
                border
                border-purple-100
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(30,90,110,0.06)]
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">

                  <ShieldCheck
                    size={22}
                    className="text-purple-500"
                  />

                </div>

                <span className="text-xs font-semibold text-purple-600">
                  Admin
                </span>

              </div>

              <p className="mt-5 text-sm text-[#718895]">
                Administrators
              </p>

              <p className="mt-1 text-3xl font-bold text-[#123247]">
                {adminUsers}
              </p>

            </div>

          </section>

          {/* ================================================= */}
          {/* USERS TABLE */}
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

            {/* Table Header */}

            <div className="border-b border-[#E1EEF3] p-6">

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-[#123247]">
                    Platform Users
                  </h2>

                  <p className="mt-1 text-sm text-[#718895]">
                    Manage account access and user roles.
                  </p>

                </div>

                {/* Filters */}

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
                      placeholder="Search users..."
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

                  {/* Role */}

                  <select
                    value={roleFilter}
                    onChange={(event) =>
                      setRoleFilter(
                        event.target.value as
                          | "All"
                          | UserRole
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
                      All Roles
                    </option>

                    <option value="User">
                      User
                    </option>

                    <option value="Admin">
                      Admin
                    </option>

                  </select>

                  {/* Status */}

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as
                          | "All"
                          | UserStatus
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

                    <option value="Active">
                      Active
                    </option>

                    <option value="Inactive">
                      Inactive
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
                      User
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Role
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Joined
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#8AA3AF]">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredUsers.map((user) => (

                    <tr
                      key={user.id}
                      className="
                        border-b
                        border-[#E8F1F5]
                        transition
                        hover:bg-[#F7FCFE]
                      "
                    >

                      {/* User */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-50 font-bold text-cyan-600">

                            {user.name
                              .charAt(0)
                              .toUpperCase()}

                          </div>

                          <div>

                            <p className="font-semibold text-[#123247]">
                              {user.name}
                            </p>

                            <p className="mt-1 text-sm text-[#8AA3AF]">
                              {user.email}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Role */}

                      <td className="px-6 py-5">

                        <span
                          className={`
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            ${
                              user.role === "Admin"
                                ? "bg-purple-50 text-purple-600"
                                : "bg-cyan-50 text-cyan-700"
                            }
                          `}
                        >

                          {user.role === "Admin" && (
                            <ShieldCheck size={14} />
                          )}

                          {user.role}

                        </span>

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
                              user.status === "Active"
                                ? "text-emerald-600"
                                : "text-red-500"
                            }
                          `}
                        >

                          {user.status === "Active" ? (
                            <CheckCircle size={16} />
                          ) : (
                            <XCircle size={16} />
                          )}

                          {user.status}

                        </span>

                      </td>

                      {/* Joined */}

                      <td className="px-6 py-5 text-sm text-[#718895]">
                        {user.joined}
                      </td>

                      {/* Actions */}

                      <td className="relative px-6 py-5 text-right">

                        <button
                          type="button"
                          onClick={() =>
                            setOpenMenu(
                              openMenu === user.id
                                ? null
                                : user.id
                            )
                          }
                          className="
                            rounded-lg
                            p-2
                            text-[#8AA3AF]
                            transition
                            hover:bg-cyan-50
                            hover:text-cyan-600
                          "
                        >
                          <MoreVertical size={19} />
                        </button>

                        {openMenu === user.id && (

                          <div
                            className="
                              absolute
                              right-6
                              top-14
                              z-30
                              w-52
                              rounded-xl
                              border
                              border-[#CFE5EE]
                              bg-white
                              p-2
                              text-left
                              shadow-xl
                            "
                          >

                            <button
                              type="button"
                              onClick={() =>
                                toggleStatus(user.id)
                              }
                              className="
                                w-full
                                rounded-lg
                                px-3
                                py-2.5
                                text-left
                                text-sm
                                text-[#52788C]
                                transition
                                hover:bg-cyan-50
                                hover:text-cyan-700
                              "
                            >
                              {user.status === "Active"
                                ? "Deactivate User"
                                : "Activate User"}
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                toggleRole(user.id)
                              }
                              className="
                                w-full
                                rounded-lg
                                px-3
                                py-2.5
                                text-left
                                text-sm
                                text-[#52788C]
                                transition
                                hover:bg-cyan-50
                                hover:text-cyan-700
                              "
                            >
                              {user.role === "Admin"
                                ? "Make User"
                                : "Make Admin"}
                            </button>

                          </div>

                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* ================================================= */}
            {/* MOBILE CARDS */}
            {/* ================================================= */}

            <div className="space-y-3 p-4 md:hidden">

              {filteredUsers.map((user) => (

                <div
                  key={user.id}
                  className="
                    rounded-2xl
                    border
                    border-[#DCECF2]
                    bg-[#F8FCFE]
                    p-4
                  "
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 font-bold text-cyan-600">

                        {user.name.charAt(0)}

                      </div>

                      <div>

                        <p className="font-semibold text-[#123247]">
                          {user.name}
                        </p>

                        <p className="text-xs text-[#8AA3AF]">
                          {user.email}
                        </p>

                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(
                          openMenu === user.id
                            ? null
                            : user.id
                        )
                      }
                      className="
                        rounded-lg
                        p-2
                        text-[#8AA3AF]
                        hover:bg-cyan-50
                        hover:text-cyan-600
                      "
                    >
                      <MoreVertical size={18} />
                    </button>

                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    <span
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        ${
                          user.role === "Admin"
                            ? "bg-purple-50 text-purple-600"
                            : "bg-cyan-50 text-cyan-700"
                        }
                      `}
                    >
                      {user.role}
                    </span>

                    <span
                      className={`
                        flex
                        items-center
                        gap-1.5
                        text-xs
                        font-medium
                        ${
                          user.status === "Active"
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
                            user.status === "Active"
                              ? "bg-emerald-500"
                              : "bg-red-500"
                          }
                        `}
                      />

                      {user.status}

                    </span>

                  </div>

                  <p className="mt-3 text-xs text-[#8AA3AF]">
                    Joined {user.joined}
                  </p>

                  {openMenu === user.id && (

                    <div className="mt-4 border-t border-[#DCECF2] pt-3">

                      <button
                        type="button"
                        onClick={() =>
                          toggleStatus(user.id)
                        }
                        className="
                          w-full
                          rounded-lg
                          px-3
                          py-2
                          text-left
                          text-sm
                          text-[#52788C]
                          hover:bg-cyan-50
                          hover:text-cyan-700
                        "
                      >
                        {user.status === "Active"
                          ? "Deactivate User"
                          : "Activate User"}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          toggleRole(user.id)
                        }
                        className="
                          w-full
                          rounded-lg
                          px-3
                          py-2
                          text-left
                          text-sm
                          text-[#52788C]
                          hover:bg-cyan-50
                          hover:text-cyan-700
                        "
                      >
                        {user.role === "Admin"
                          ? "Make User"
                          : "Make Admin"}
                      </button>

                    </div>

                  )}

                </div>

              ))}

            </div>

            {/* No Results */}

            {filteredUsers.length === 0 && (

              <div className="px-6 py-16 text-center">

                <Users
                  size={40}
                  className="mx-auto text-[#A7BBC4]"
                />

                <h3 className="mt-4 text-lg font-semibold text-[#123247]">
                  No users found
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
                  {filteredUsers.length}
                </span>{" "}

                of{" "}

                <span className="font-semibold text-[#35596B]">
                  {users.length}
                </span>{" "}

                users

              </p>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}