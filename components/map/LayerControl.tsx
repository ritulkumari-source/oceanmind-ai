"use client";

import {
  Layers3,
  Thermometer,
  Waves,
  Wind,
  RadioTower,
} from "lucide-react";

const layers = [
  {
    name: "Sea Temperature",
    color: "bg-red-500",
    icon: Thermometer,
    enabled: true,
  },
  {
    name: "Salinity",
    color: "bg-blue-500",
    icon: Waves,
    enabled: true,
  },
  {
    name: "Wind Speed",
    color: "bg-green-500",
    icon: Wind,
    enabled: false,
  },
  {
    name: "ARGO Floats",
    color: "bg-cyan-500",
    icon: RadioTower,
    enabled: true,
  },
];

export default function LayerControl() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-3 mb-6">

        <Layers3 className="text-cyan-400" />

        <h2 className="text-2xl font-bold text-white">
          Map Layers
        </h2>

      </div>

      <div className="space-y-4">

        {layers.map((layer) => {
          const Icon = layer.icon;

          return (
            <label
              key={layer.name}
              className="flex items-center justify-between rounded-2xl bg-slate-950 border border-slate-800 p-4 hover:border-cyan-500 transition cursor-pointer"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`w-12 h-12 rounded-xl ${layer.color} flex items-center justify-center`}
                >
                  <Icon
                    className="text-white"
                    size={22}
                  />
                </div>

                <div>

                  <p className="text-white font-medium">
                    {layer.name}
                  </p>

                  <p className="text-slate-400 text-sm">
                    Ocean data layer
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                defaultChecked={layer.enabled}
                className="w-5 h-5 accent-cyan-500"
              />

            </label>
          );
        })}

      </div>

    </div>
  );
}