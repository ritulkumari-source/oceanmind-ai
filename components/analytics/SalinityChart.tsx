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
        hover:border-blue-200
        hover:shadow-[0_12px_35px_rgba(59,130,246,0.08)]
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
              bg-blue-50
            "
          >
            <span className="text-lg">
              🌊
            </span>
          </div>

          <div>

            <h2 className="text-2xl font-bold text-[#123247]">
              Ocean Salinity
            </h2>

            <p className="mt-1 text-sm text-[#718895]">
              Monthly average salinity (PSU)
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

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >

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
              domain={[33, 37]}
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
                boxShadow: "0 8px 25px rgba(30, 90, 110, 0.10)",
                color: "#123247",
              }}
              labelStyle={{
                color: "#52788C",
                fontWeight: 600,
              }}
              itemStyle={{
                color: "#2563eb",
                fontWeight: 600,
              }}
            />

            <Line
              type="monotone"
              dataKey="salinity"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                fill: "#2563eb",
                stroke: "#ffffff",
                strokeWidth: 2,
                r: 5,
              }}
              activeDot={{
                r: 7,
                fill: "#06b6d4",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* Bottom information */}

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
            35.2 PSU
          </p>

        </div>

        <div className="text-right">

          <p className="text-xs text-[#8AA3AF]">
            Peak
          </p>

          <p className="mt-1 text-lg font-bold text-blue-600">
            35.5 PSU
          </p>

        </div>

      </div>

    </section>
  );
}