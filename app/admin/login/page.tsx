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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#DCEFF7] px-6 py-12 text-[#123247]">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,#ffffff_0%,#E8F7FC_35%,#DCEFF7_70%,#CDE7F1_100%)]" />

      {/* Cyan glow */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -35, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[3%]
          top-[8%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-300/25
          blur-[120px]
        "
      />

      {/* Blue glow */}

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 45, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[3%]
          right-[3%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-300/25
          blur-[120px]
        "
      />

      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

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

        {/* ================================================= */}
        {/* LOGO */}
        {/* ================================================= */}

        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-3"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20">

            <Waves
              size={28}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-[#123247]">

              Ocean

              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Mind
              </span>{" "}

              AI

            </h1>

            <p className="text-xs font-medium text-[#7894A2]">
              Admin Console
            </p>

          </div>

        </Link>

        {/* ================================================= */}
        {/* CARD */}
        {/* ================================================= */}

        <div
          className="
            rounded-3xl
            border
            border-[#C9E3EC]
            bg-white
            p-8
            shadow-[0_20px_60px_rgba(37,99,125,0.12)]
            backdrop-blur-xl
            md:p-10
          "
        >

          {/* Heading */}

          <div className="text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50">

              <ShieldCheck
                size={28}
                className="text-cyan-600"
              />

            </div>

            <h2 className="text-3xl font-bold text-[#123247]">
              Administrator Login
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#718895]">
              Sign in to access the OceanMind administration
              console.
            </p>

          </div>

          {/* Error */}

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* ================================================= */}
          {/* FORM */}
          {/* ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Email */}

            <div>

              <label
                htmlFor="admin-email"
                className="mb-2 block text-sm font-medium text-[#52788C]"
              >
                Administrator email
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#8AA3AF]
                  "
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
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#CFE5EE]
                    bg-[#F8FCFE]
                    py-3.5
                    pl-11
                    pr-4
                    text-[#123247]
                    outline-none
                    transition
                    placeholder:text-[#A0B5BE]
                    focus:border-cyan-400
                    focus:ring-4
                    focus:ring-cyan-100
                    disabled:opacity-60
                  "
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label
                htmlFor="admin-password"
                className="mb-2 block text-sm font-medium text-[#52788C]"
              >
                Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#8AA3AF]
                  "
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
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#CFE5EE]
                    bg-[#F8FCFE]
                    py-3.5
                    pl-11
                    pr-12
                    text-[#123247]
                    outline-none
                    transition
                    placeholder:text-[#A0B5BE]
                    focus:border-cyan-400
                    focus:ring-4
                    focus:ring-cyan-100
                    disabled:opacity-60
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#8AA3AF]
                    transition
                    hover:text-cyan-600
                  "
                >

                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}

                </button>

              </div>

            </div>

            {/* ================================================= */}
            {/* SUBMIT */}
            {/* ================================================= */}

            <button
              type="submit"
              disabled={loading}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-6
                py-3.5
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:from-cyan-400
                hover:to-blue-500
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
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

          {/* ================================================= */}
          {/* USER LOGIN */}
          {/* ================================================= */}

          <div className="mt-8 border-t border-[#E1EEF3] pt-7 text-center">

            <Link
              href="/login"
              className="
                text-sm
                font-semibold
                text-cyan-600
                transition
                hover:text-blue-600
              "
            >
              ← User login
            </Link>

          </div>

        </div>

        {/* ================================================= */}
        {/* BACK */}
        {/* ================================================= */}

        <div className="mt-6 text-center">

          <Link
            href="/"
            className="
              text-sm
              text-[#7894A2]
              transition
              hover:text-cyan-600
            "
          >
            ← Back to OceanMind
          </Link>

        </div>

      </motion.div>

    </main>
  );
}