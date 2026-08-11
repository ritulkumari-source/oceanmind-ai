"use client";

import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import "leaflet/dist/leaflet.css";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[320px] items-center justify-center rounded-xl bg-[#F4FAFC] text-sm text-[#718895]">
      <div className="flex items-center gap-3">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-100 border-t-cyan-500" />
        Loading map...
      </div>
    </div>
  ),
});

export default function MapCard() {
  return (
    <Card
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#D8EAF0]
        bg-white
        shadow-[0_8px_30px_rgba(30,90,110,0.07)]
        transition-all
        duration-300
        hover:border-cyan-200
        hover:shadow-[0_12px_35px_rgba(6,182,212,0.10)]
      "
    >
      <CardContent className="p-6">

        {/* Header */}

        <div className="mb-5 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-[#0F2D3D]">
              🌍 Live Ocean Map
            </h2>

            <p className="mt-1 text-sm text-[#718895]">
              Explore real-time ocean observations and ARGO locations.
            </p>

          </div>

          {/* Live indicator */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-100
              bg-emerald-50
              px-3
              py-1.5
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-600">
              Live
            </span>
          </div>

        </div>

        {/* Map */}

        <div
          className="
            overflow-hidden
            rounded-xl
            border
            border-[#D8EAF0]
            bg-[#F4FAFC]
          "
        >
          <LeafletMap />
        </div>

      </CardContent>
    </Card>
  );
}