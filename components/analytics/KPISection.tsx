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
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Salinity",
    value: 35,
    suffix: " PSU",
    icon: Waves,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Wind Speed",
    value: 18,
    suffix: " km/h",
    icon: Wind,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "ARGO Floats",
    value: 4500,
    suffix: "+",
    icon: Database,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function KPISection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {kpis.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className={`mt-3 text-4xl font-bold ${item.color}`}>
                  <CountUp
                    end={item.value}
                    duration={2}
                    separator=","
                  />
                  {item.suffix}
                </h2>

              </div>

              <div
                className={`h-16 w-16 rounded-2xl ${item.bg} flex items-center justify-center`}
              >
                <Icon
                  className={item.color}
                  size={30}
                />
              </div>

            </div>
          </div>
        );
      })}

    </section>
  );
}