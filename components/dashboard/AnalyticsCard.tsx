"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const data = [
  { day: "Mon", temp: 26 },
  { day: "Tue", temp: 27 },
  { day: "Wed", temp: 28 },
  { day: "Thu", temp: 29 },
  { day: "Fri", temp: 30 },
  { day: "Sat", temp: 29 },
  { day: "Sun", temp: 31 },
];

export default function AnalyticsCard() {
  return (
    <Card className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-xl">

      <CardContent className="p-6">

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="text-cyan-400" />
              Ocean Temperature Trend
            </h2>

            <p className="text-slate-400 mt-2">
              Weekly sea surface temperature analysis
            </p>

          </div>

          <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl font-semibold">
            ▲ +2.4%
          </div>

        </div>

        <div className="h-[320px]">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={data}>

              <defs>

                <linearGradient
                  id="colorTemp"
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

              <XAxis
                dataKey="day"
                stroke="#94a3b8"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="temp"
                stroke="#06b6d4"
                strokeWidth={4}
                fill="url(#colorTemp)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </CardContent>

    </Card>
  );
}