"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  Waves,
} from "lucide-react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl">

      {/* Logo */}

      <div className="flex flex-col items-center mb-8">

        <div className="w-20 h-20 rounded-3xl bg-cyan-500 flex items-center justify-center mb-5">

          <Waves size={40} className="text-white" />

        </div>

        <h1 className="text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="text-slate-400 mt-3 text-center">
          Join OceanMind AI and start exploring ocean intelligence.
        </p>

      </div>

      {/* Name */}

      <div className="mb-5">

        <label className="block text-slate-300 mb-2">
          Full Name
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

          <User className="text-cyan-400" size={20} />

          <input
            type="text"
            placeholder="John Doe"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />

        </div>

      </div>

      {/* Email */}

      <div className="mb-5">

        <label className="block text-slate-300 mb-2">
          Email
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

          <Mail className="text-cyan-400" size={20} />

          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />

        </div>

      </div>

      {/* Password */}

      <div className="mb-5">

        <label className="block text-slate-300 mb-2">
          Password
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

          <Lock className="text-cyan-400" size={20} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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

      {/* Confirm Password */}

      <div>

        <label className="block text-slate-300 mb-2">
          Confirm Password
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4">

          <Lock className="text-cyan-400" size={20} />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? (
              <EyeOff className="text-slate-400" size={20} />
            ) : (
              <Eye className="text-slate-400" size={20} />
            )}
          </button>

        </div>

      </div>

      {/* Register Button */}

      <button className="mt-8 w-full rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition py-4 font-semibold flex items-center justify-center gap-3">

        <UserPlus size={20} />

        Create Account

      </button>

    </div>
  );
}