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

        <div className="mb-6 flex items-start justify-between gap-4">

          <div>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-[#0F2D3D]">

              <TrendingUp
                size={24}
                className="text-cyan-500"
              />

              Ocean Temperature Trend

            </h2>

            <p className="mt-2 text-sm text-[#718895]">
              Weekly sea surface temperature analysis
            </p>

          </div>

          {/* Trend */}

          <div
            className="
              shrink-0
              rounded-xl
              border
              border-emerald-100
              bg-emerald-50
              px-4
              py-2
              font-semibold
              text-emerald-600
            "
          >
            ▲ +2.4%
          </div>

        </div>

        {/* Chart */}

        <div className="h-[280px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 0,
              }}
            >

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
                    stopColor="#06B6D4"
                    stopOpacity={0.30}
                  />

                  <stop
                    offset="95%"
                    stopColor="#3B82F6"
                    stopOpacity={0.02}
                  />

                </linearGradient>

              </defs>

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#718895",
                  fontSize: 12,
                }}
              />

              <Tooltip
                cursor={{
                  stroke: "#A5E8F2",
                  strokeWidth: 1,
                }}
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D8EAF0",
                  borderRadius: "12px",
                  boxShadow: "0 8px 25px rgba(30,90,110,0.10)",
                }}
                labelStyle={{
                  color: "#0F2D3D",
                  fontWeight: 600,
                }}
              />

              <Area
                type="monotone"
                dataKey="temp"
                stroke="#06B6D4"
                strokeWidth={3}
                fill="url(#colorTemp)"
                dot={{
                  r: 3,
                  fill: "#06B6D4",
                  stroke: "#FFFFFF",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 5,
                  fill: "#3B82F6",
                  stroke: "#FFFFFF",
                  strokeWidth: 2,
                }}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* Bottom information */}

        <div className="mt-4 flex items-center justify-between border-t border-[#E5F0F4] pt-4">

          <div>

            <p className="text-xs text-[#8AA4B0]">
              Average temperature
            </p>

            <p className="mt-1 text-lg font-bold text-[#0F2D3D]">
              28.6°C
            </p>

          </div>

          <div className="text-right">

            <p className="text-xs text-[#8AA4B0]">
              Peak temperature
            </p>

            <p className="mt-1 text-lg font-bold text-cyan-600">
              31°C
            </p>

          </div>

        </div>

      </CardContent>
    </Card>
  );
}