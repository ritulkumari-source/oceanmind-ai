"use client";

import { Search, MapPin, Navigation } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Ocean Map
          </h1>

          <p className="text-slate-400 mt-2">
            Explore live marine conditions around the world.
          </p>

        </div>

        <button className="rounded-2xl bg-cyan-500 px-5 py-3 font-semibold hover:bg-cyan-400 transition">
          Live View
        </button>

      </div>

      <div className="flex flex-col lg:flex-row gap-4">

        {/* Search */}

        <div className="flex-1 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3">

          <Search
            className="text-cyan-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search ocean, city or coordinates..."
            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
          />

        </div>

        {/* Current Location */}

        <button className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-6 py-3 hover:border-cyan-500 transition">

          <Navigation
            className="text-cyan-400"
            size={20}
          />

          Current Location

        </button>

        {/* Chennai */}

        <button className="flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400 transition">

          <MapPin size={20} />

          Chennai

        </button>

      </div>

    </div>
  );
}