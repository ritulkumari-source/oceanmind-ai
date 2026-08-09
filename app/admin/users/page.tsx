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
  const [roleFilter, setRoleFilter] = useState<"All" | UserRole>("All");
  const [statusFilter, setStatusFilter] =
    useState<"All" | UserStatus>("All");

  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        roleFilter === "All" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "All" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

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
              role: user.role === "User" ? "Admin" : "User",
            }
          : user
      )
    );

    setOpenMenu(null);
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
                  <Users size={17} />
                  USER MANAGEMENT
                </div>

                <h1 className="text-4xl font-bold text-white md:text-5xl">
                  Users
                </h1>

                <p className="mt-3 text-slate-400">
                  View and manage OceanMind platform users,
                  roles, and account status.
                </p>

              </div>

            </div>

          </header>

          {/* Statistics */}

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Users
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                <span className="text-xs text-slate-500">
                  Platform
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Total Users
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {users.length}
              </p>

            </div>

            {/* Active */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                  <UserCheck
                    size={22}
                    className="text-emerald-400"
                  />
                </div>

                <span className="text-xs text-emerald-400">
                  Active
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Active Users
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {activeUsers}
              </p>

            </div>

            {/* Inactive */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
                  <UserX
                    size={22}
                    className="text-red-400"
                  />
                </div>

                <span className="text-xs text-red-400">
                  Inactive
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Inactive Users
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {inactiveUsers}
              </p>

            </div>

            {/* Admins */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10">
                  <ShieldCheck
                    size={22}
                    className="text-purple-400"
                  />
                </div>

                <span className="text-xs text-purple-400">
                  Admin
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-400">
                Administrators
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {adminUsers}
              </p>

            </div>

          </section>

          {/* Users Table */}

          <section className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

            {/* Table Header */}

            <div className="border-b border-slate-800 p-6">

              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    Platform Users
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Manage account access and user roles.
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
                      placeholder="Search users..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500 md:w-64"
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
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
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
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
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

            {/* Desktop Table */}

            <div className="hidden overflow-x-auto md:block">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-slate-800 text-left">

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      User
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Role
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Joined
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredUsers.map((user) => (

                    <tr
                      key={user.id}
                      className="border-b border-slate-800/70 transition hover:bg-slate-950/60"
                    >

                      {/* User */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
                            {user.name
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div>

                            <p className="font-semibold text-white">
                              {user.name}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                              {user.email}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Role */}

                      <td className="px-6 py-5">

                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                            user.role === "Admin"
                              ? "bg-purple-500/10 text-purple-400"
                              : "bg-cyan-500/10 text-cyan-400"
                          }`}
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
                          className={`inline-flex items-center gap-2 text-sm font-medium ${
                            user.status === "Active"
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
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

                      <td className="px-6 py-5 text-sm text-slate-400">
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
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white"
                        >
                          <MoreVertical size={19} />
                        </button>

                        {openMenu === user.id && (

                          <div className="absolute right-6 top-14 z-30 w-52 rounded-xl border border-slate-700 bg-slate-950 p-2 text-left shadow-2xl">

                            <button
                              type="button"
                              onClick={() =>
                                toggleStatus(user.id)
                              }
                              className="w-full rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
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
                              className="w-full rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
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

            {/* Mobile Cards */}

            <div className="space-y-3 p-4 md:hidden">

              {filteredUsers.map((user) => (

                <div
                  key={user.id}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
                        {user.name.charAt(0)}
                      </div>

                      <div>

                        <p className="font-semibold text-white">
                          {user.name}
                        </p>

                        <p className="text-xs text-slate-500">
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
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-white"
                    >
                      <MoreVertical size={18} />
                    </button>

                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        user.role === "Admin"
                          ? "bg-purple-500/10 text-purple-400"
                          : "bg-cyan-500/10 text-cyan-400"
                      }`}
                    >
                      {user.role}
                    </span>

                    <span
                      className={`flex items-center gap-1.5 text-xs font-medium ${
                        user.status === "Active"
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          user.status === "Active"
                            ? "bg-emerald-400"
                            : "bg-red-400"
                        }`}
                      />

                      {user.status}
                    </span>

                  </div>

                  <p className="mt-3 text-xs text-slate-600">
                    Joined {user.joined}
                  </p>

                  {openMenu === user.id && (

                    <div className="mt-4 border-t border-slate-800 pt-3">

                      <button
                        type="button"
                        onClick={() =>
                          toggleStatus(user.id)
                        }
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-900"
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
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-900"
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
                  className="mx-auto text-slate-700"
                />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  No users found
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
                  {filteredUsers.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-300">
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