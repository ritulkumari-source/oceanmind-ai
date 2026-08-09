"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", salinity: 34.2 },
  { month: "Feb", salinity: 34.4 },
  { month: "Mar", salinity: 34.7 },
  { month: "Apr", salinity: 35.0 },
  { month: "May", salinity: 35.3 },
  { month: "Jun", salinity: 35.5 },
  { month: "Jul", salinity: 35.2 },
];

export default function SalinityChart() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Ocean Salinity
        </h2>

        <p className="text-slate-400 mt-2">
          Monthly average salinity (PSU)
        </p>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#ffffff",
              }}
            />

            <Line
              type="monotone"
              dataKey="salinity"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={{
                fill: "#3b82f6",
                r: 5,
              }}
              activeDot={{
                r: 8,
                fill: "#06b6d4",
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}