"use client";

import { AlertTriangle, CheckCircle, Waves } from "lucide-react";

const alerts = [
  {
    icon: Waves,
    message: "High waves near Bay of Bengal",
    type: "warning",
  },
  {
    icon: AlertTriangle,
    message: "Cyclone monitoring in Arabian Sea",
    type: "danger",
  },
  {
    icon: CheckCircle,
    message: "Ocean conditions stable near Chennai",
    type: "safe",
  },
];

export default function AlertsCard() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      {/* Header */}

      <div className="mb-7 flex items-center gap-3">

        <AlertTriangle
          size={24}
          className="text-yellow-400"
        />

        <h2 className="text-2xl font-bold text-white">
          Marine Alerts
        </h2>

      </div>

      {/* Alerts */}

      <div className="space-y-4">

        {alerts.map((alert) => {
          const Icon = alert.icon;

          const styles = {
            warning:
              "border-yellow-400 bg-yellow-400/10 text-yellow-100",
            danger:
              "border-red-500 bg-red-500/10 text-red-100",
            safe:
              "border-cyan-400 bg-cyan-400/10 text-cyan-100",
          };

          return (
            <div
              key={alert.message}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-4 ${styles[alert.type as keyof typeof styles]}`}
            >

              <Icon
                size={20}
                className={
                  alert.type === "warning"
                    ? "text-yellow-400"
                    : alert.type === "danger"
                      ? "text-red-400"
                      : "text-cyan-400"
                }
              />

              <p className="text-sm font-medium">
                {alert.message}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}