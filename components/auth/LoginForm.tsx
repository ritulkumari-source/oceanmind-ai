"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Waves,
  ArrowRight,
} from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Temporary login
    // Replace this later with Firebase/Supabase/JWT authentication.

    if (email.trim() && password.trim()) {
      router.push("/dashboard");
    } else {
      alert("Please enter your email and password.");
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl"
    >
      {/* Logo */}

      <div className="flex flex-col items-center mb-8">

        <div className="h-20 w-20 rounded-3xl bg-cyan-500 flex items-center justify-center mb-5">

          <Waves size={42} className="text-white" />

        </div>

        <h1 className="text-4xl font-bold text-white">
          OceanMind AI
        </h1>

        <p className="text-slate-400 mt-3 text-center">
          Sign in to continue exploring ocean intelligence.
        </p>

      </div>

      {/* Email */}

      <div className="mb-5">

        <label className="text-slate-300 mb-2 block">
          Email
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

          <Mail className="text-cyan-400" size={20} />

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />

        </div>

      </div>

      {/* Password */}

      <div>

        <label className="text-slate-300 mb-2 block">
          Password
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

          <Lock className="text-cyan-400" size={20} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="text-slate-400" size={20} />
            ) : (
              <Eye className="text-slate-400" size={20} />
            )}
          </button>

        </div>

      </div>

      {/* Options */}

      <div className="flex items-center justify-between mt-5 text-sm">

        <label className="flex items-center gap-2 text-slate-400">

          <input
            type="checkbox"
            className="accent-cyan-500"
          />

          Remember Me

        </label>

        <Link
          href="#"
          className="text-cyan-400 hover:text-cyan-300"
        >
          Forgot Password?
        </Link>

      </div>

      {/* Login */}

      <button
        type="submit"
        className="mt-8 w-full rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition py-4 font-semibold flex items-center justify-center gap-3"
      >
        Login

        <ArrowRight size={20} />
      </button>

      {/* Divider */}

      <div className="flex items-center gap-4 my-8">

        <div className="flex-1 h-px bg-slate-700" />

        <span className="text-slate-500 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-slate-700" />

      </div>

      {/* Google */}

      <button
        type="button"
        className="w-full rounded-2xl border border-slate-700 bg-slate-950 hover:border-cyan-500 transition py-4 text-white font-semibold"
      >
        Continue with Google
      </button>

      <p className="text-center text-slate-400 mt-8">
        Don't have an account?
      </p>

    </form>
  );
}