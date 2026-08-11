"use client";

import {
  User,
  Mail,
  Building2,
  Save,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#CFE5EE]
        bg-white
        p-8
        shadow-[0_8px_30px_rgba(30,90,110,0.06)]
      "
    >

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">

          <User
            size={25}
            className="text-cyan-600"
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-[#123247]">
            Profile
          </h2>

          <p className="mt-1 text-sm text-[#718895]">
            Manage your OceanMind profile information.
          </p>

        </div>

      </div>

      <div className="space-y-6">

        {/* Full Name */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[#52788C]">
            Full Name
          </label>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFE]
              px-4
              py-4
              transition-all
              duration-200
              hover:border-cyan-300
              focus-within:border-cyan-400
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            <User
              size={21}
              className="text-cyan-600"
            />

            <input
              type="text"
              defaultValue="Ritul Kumari"
              className="
                flex-1
                bg-transparent
                text-[#123247]
                outline-none
                placeholder:text-[#8AA3AF]
              "
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[#52788C]">
            Email
          </label>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFE]
              px-4
              py-4
              transition-all
              duration-200
              hover:border-cyan-300
              focus-within:border-cyan-400
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            <Mail
              size={21}
              className="text-cyan-600"
            />

            <input
              type="email"
              defaultValue="ritul@email.com"
              className="
                flex-1
                bg-transparent
                text-[#123247]
                outline-none
                placeholder:text-[#8AA3AF]
              "
            />

          </div>

        </div>

        {/* Organization */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[#52788C]">
            Organization
          </label>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-[#CFE5EE]
              bg-[#F8FCFE]
              px-4
              py-4
              transition-all
              duration-200
              hover:border-cyan-300
              focus-within:border-cyan-400
              focus-within:ring-4
              focus-within:ring-cyan-100
            "
          >

            <Building2
              size={21}
              className="text-cyan-600"
            />

            <input
              type="text"
              defaultValue="OceanMind Research"
              className="
                flex-1
                bg-transparent
                text-[#123247]
                outline-none
                placeholder:text-[#8AA3AF]
              "
            />

          </div>

        </div>

      </div>

      {/* Save Button */}

      <button
        type="button"
        className="
          mt-8
          flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          px-6
          py-4
          font-semibold
          text-white
          shadow-md
          shadow-cyan-500/15
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:from-cyan-400
          hover:to-blue-400
          hover:shadow-lg
          hover:shadow-cyan-500/20
        "
      >

        <Save size={20} />

        Save Changes

      </button>

    </div>
  );
}