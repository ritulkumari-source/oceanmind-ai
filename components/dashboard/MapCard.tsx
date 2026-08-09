"use client";

import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import "leaflet/dist/leaflet.css";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[430px] items-center justify-center text-slate-400">
      Loading map...
    </div>
  ),
});

export default function MapCard() {
  return (
    <Card className="bg-slate-900 border-slate-800 rounded-2xl h-[520px]">
      <CardContent className="p-4 h-full">

        <h2 className="text-2xl font-bold mb-4">
          🌍 Live Ocean Map
        </h2>

        <LeafletMap />

      </CardContent>
    </Card>
  );
}