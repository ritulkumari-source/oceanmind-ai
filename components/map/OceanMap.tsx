"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[700px] rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center">
      <p className="text-slate-400 text-lg">Loading Ocean Map...</p>
    </div>
  ),
});

export default function OceanMap() {
  return <LeafletMap />;
}