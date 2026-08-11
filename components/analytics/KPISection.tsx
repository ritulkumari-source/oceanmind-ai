"use client";

import CountUp from "react-countup";
import {
  Thermometer,
  Waves,
  Wind,
  Database,
} from "lucide-react";

const kpis = [
  {
    title: "Average SST",
    value: 29,
    suffix: "°C",
    icon: Thermometer,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-50",
  },
  {
    title: "Salinity",
    value: 35,
    suffix: " PSU",
    icon: Waves,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    title: "Wind Speed",
    value: 18,
    suffix: " km/h",
    icon: Wind,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    title: "ARGO Floats",
    value: 4500,
    suffix: "+",
    icon: Database,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
  },
];

export default function KPISection() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

      {kpis.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-[#CFE5EE]
              bg-white
              p-6
              shadow-[0_6px_25px_rgba(30,90,110,0.06)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-200
              hover:shadow-[0_12px_30px_rgba(6,182,212,0.10)]
            "
          >
            <div className="flex items-center justify-between">

              {/* Information */}

              <div>

                <p className="text-sm font-medium text-[#718895]">
                  {item.title}
                </p>

                <h2
                  className={`
                    mt-3
                    text-4xl
                    font-bold
                    ${item.iconColor}
                  `}
                >
                  <CountUp
                    end={item.value}
                    duration={2}
                    separator=","
                  />

                  {item.suffix}
                </h2>

              </div>

              {/* Icon */}

              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  ${item.iconBg}
                `}
              >
                <Icon
                  className={item.iconColor}
                  size={28}
                />
              </div>

            </div>

            {/* Small status line */}

            <div className="mt-5 flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-xs font-medium text-[#8AA3AF]">
                Live ocean data
              </span>

            </div>

          </div>
        );
      })}

    </section>
  );
}