"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", temp: 25.2 },
  { month: "Feb", temp: 25.9 },
  { month: "Mar", temp: 26.8 },
  { month: "Apr", temp: 27.6 },
  { month: "May", temp: 28.8 },
  { month: "Jun", temp: 29.4 },
  { month: "Jul", temp: 29.0 },
];

export default function TemperatureChart() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Sea Surface Temperature
        </h2>

        <p className="text-slate-400 mt-2">
          Average monthly sea surface temperature (°C)
        </p>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="temperatureGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#06b6d4"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#06b6d4"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

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
                color: "white",
              }}
            />

            <Area
              type="monotone"
              dataKey="temp"
              stroke="#06b6d4"
              strokeWidth={4}
              fill="url(#temperatureGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}