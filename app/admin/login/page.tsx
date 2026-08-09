"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Waves,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Invalid administrator credentials."
        );
      }

      /*
       * IMPORTANT:
       * The backend must verify that this account
       * actually has the admin role.
       */

      if (data.user?.role !== "admin") {
        setError(
          "This account does not have administrator access."
        );
        return;
      }

      router.push("/admin");

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-12 text-white">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#24113f_0%,#071527_45%,#020617_100%)]" />

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[5%] top-[10%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]"
      />

      {/* Main */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 w-full max-w-md"
      >

        {/* Logo */}

        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-3"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
            <Waves
              size={28}
              className="text-purple-400"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Ocean
              <span className="text-cyan-400">
                Mind
              </span>{" "}
              AI
            </h1>

            <p className="text-xs text-slate-500">
              Admin Console
            </p>
          </div>

        </Link>

        {/* Card */}

        <div className="rounded-3xl border border-purple-500/20 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl md:p-10">

          {/* Heading */}

          <div className="text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">

              <ShieldCheck
                size={28}
                className="text-purple-400"
              />

            </div>

            <h2 className="text-3xl font-bold text-white">
              Administrator Login
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Sign in to access the OceanMind administration console.
            </p>

          </div>

          {/* Error */}

          {error && (
            <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Email */}

            <div>

              <label
                htmlFor="admin-email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Administrator email
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="admin@example.com"
                  disabled={loading}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 disabled:opacity-60"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label
                htmlFor="admin-password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="admin-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  disabled={loading}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 py-3.5 pl-11 pr-12 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-purple-400"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-purple-500 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading
                ? "Signing in..."
                : "Admin Sign In"}

              {!loading && (
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}

            </button>

          </form>

          {/* User Login */}

          <div className="mt-8 border-t border-slate-800 pt-7 text-center">

            <Link
              href="/login"
              className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              ← User login
            </Link>

          </div>

        </div>

        {/* Back */}

        <div className="mt-6 text-center">

          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-cyan-400"
          >
            ← Back to OceanMind
          </Link>

        </div>

      </motion.div>

    </main>
  );
}