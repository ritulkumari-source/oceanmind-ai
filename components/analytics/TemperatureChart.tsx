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
    <section
      className="
        rounded-3xl
        border
        border-[#CFE5EE]
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(30,90,110,0.07)]
        transition-all
        duration-300
        hover:border-cyan-200
        hover:shadow-[0_12px_35px_rgba(6,182,212,0.08)]
      "
    >

      {/* Header */}

      <div className="mb-6">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-cyan-50
            "
          >
            <span className="text-lg">
              🌡️
            </span>
          </div>

          <div>

            <h2 className="text-2xl font-bold text-[#123247]">
              Sea Surface Temperature
            </h2>

            <p className="mt-1 text-sm text-[#718895]">
              Average monthly sea surface temperature (°C)
            </p>

          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="h-[320px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >

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
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#06b6d4"
                  stopOpacity={0.02}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#D9EAF1"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              stroke="#7894A2"
              tick={{
                fill: "#7894A2",
                fontSize: 12,
              }}
              axisLine={{
                stroke: "#CFE5EE",
              }}
              tickLine={false}
            />

            <YAxis
              stroke="#7894A2"
              domain={[24, 31]}
              tick={{
                fill: "#7894A2",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #CFE5EE",
                borderRadius: "14px",
                boxShadow:
                  "0 8px 25px rgba(30, 90, 110, 0.10)",
              }}
              labelStyle={{
                color: "#52788C",
                fontWeight: 600,
              }}
              itemStyle={{
                color: "#0891b2",
                fontWeight: 600,
              }}
            />

            <Area
              type="monotone"
              dataKey="temp"
              stroke="#06b6d4"
              strokeWidth={3}
              fill="url(#temperatureGradient)"
              dot={{
                fill: "#06b6d4",
                stroke: "#ffffff",
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                r: 7,
                fill: "#06b6d4",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* Bottom Statistics */}

      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-[#E2EFF4]
          pt-4
        "
      >

        <div>

          <p className="text-xs text-[#8AA3AF]">
            Current
          </p>

          <p className="mt-1 text-lg font-bold text-[#123247]">
            29.0°C
          </p>

        </div>

        <div className="text-right">

          <p className="text-xs text-[#8AA3AF]">
            Peak
          </p>

          <p className="mt-1 text-lg font-bold text-cyan-600">
            29.4°C
          </p>

        </div>

      </div>

    </section>
  );
}