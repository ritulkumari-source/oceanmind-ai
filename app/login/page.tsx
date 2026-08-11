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
  UserPlus,
  User,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          data.message || "Invalid email or password."
        );
      }

      /*
       * This page is for normal users.
       * The backend must verify the role.
       */

      if (data.user?.role !== "user") {
        setError(
          "This account cannot sign in through the user login."
        );
        return;
      }

      router.push("/dashboard");
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

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#EAF8FC] via-[#DCEFF7] to-[#C9E8F4]" />

      {/* Cyan glow */}

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
        className="pointer-events-none absolute left-[5%] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-300/25 blur-[130px]"
      />

      {/* Blue glow */}

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
        className="pointer-events-none absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full bg-blue-300/25 blur-[130px]"
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

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-cyan-100">

            <Waves
              size={28}
              className="text-cyan-500"
            />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-[#123247]">

              Ocean
              <span className="text-cyan-500">
                Mind
              </span>{" "}
              AI

            </h1>

            <p className="text-xs text-[#71909F]">
              Ocean Intelligence Platform
            </p>

          </div>

        </Link>

        {/* Login Card */}

        <div
          className="
            rounded-3xl
            border
            border-[#C9E4ED]
            bg-white
            p-8
            shadow-[0_20px_60px_rgba(24,91,115,0.12)]
            md:p-10
          "
        >

          {/* Login Type Selector */}

          <div className="mb-7 rounded-xl border border-[#D6EAF1] bg-[#F4FBFD] p-1">

            <div className="grid grid-cols-2 gap-1">

              {/* User */}

              <Link
                href="/login"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-cyan-500
                  px-3
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-md
                  shadow-cyan-500/20
                  transition
                "
              >
                <User size={17} />
                User Login
              </Link>

              {/* Admin */}

              <Link
                href="/admin/login"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  font-semibold
                  text-[#718895]
                  transition
                  hover:bg-cyan-50
                  hover:text-cyan-600
                "
              >
                <ShieldCheck size={17} />
                Admin Login
              </Link>

            </div>

          </div>

          {/* Heading */}

          <div className="text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">

              <Lock
                size={26}
                className="text-cyan-500"
              />

            </div>

            <h2 className="text-3xl font-bold text-[#123247]">
              Welcome back
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#718895]">
              Sign in to continue exploring ocean intelligence.
            </p>

          </div>

          {/* Error */}

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Login Form */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Email */}

            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#35596B]"
              >
                Email address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8AA6B3]"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
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
                    placeholder:text-[#9CB3BE]
                    focus:border-cyan-400
                    focus:ring-4
                    focus:ring-cyan-100
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#35596B]"
              >
                Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8AA6B3]"
                />

                <input
                  id="password"
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
                    placeholder:text-[#9CB3BE]
                    focus:border-cyan-400
                    focus:ring-4
                    focus:ring-cyan-100
                    disabled:cursor-not-allowed
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
                    text-[#8AA6B3]
                    transition
                    hover:text-cyan-500
                  "
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* Remember Me */}

            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#718895]">

              <input
                type="checkbox"
                className="
                  h-4
                  w-4
                  rounded
                  border-[#CFE5EE]
                  accent-cyan-500
                "
              />

              Remember me

            </label>

            {/* Sign In */}

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
                to-blue-500
                px-6
                py-3.5
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition
                duration-300
                hover:from-cyan-400
                hover:to-blue-400
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              {loading
                ? "Signing in..."
                : "Sign In"}

              {!loading && (
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}

            </button>

          </form>

          {/* Create Account */}

          <div className="mt-8 border-t border-[#E1EEF3] pt-7 text-center">

            <p className="text-sm text-[#8AA0AB]">
              Don't have an OceanMind account?
            </p>

            <Link
              href="/login?mode=register"
              className="
                mt-3
                inline-flex
                items-center
                gap-2
                font-semibold
                text-cyan-600
                transition
                hover:text-cyan-500
              "
            >
              <UserPlus size={17} />
              Create an account
            </Link>

          </div>

        </div>

        {/* Back */}

        <div className="mt-6 text-center">

          <Link
            href="/"
            className="
              text-sm
              text-[#718895]
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