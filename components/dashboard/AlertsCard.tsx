"use client";

import {
  AlertTriangle,
  CheckCircle,
  Waves,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

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

        <div className="mb-7 flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-cyan-50
              to-blue-50
              ring-1
              ring-cyan-100
            "
          >
            <AlertTriangle
              size={22}
              className="text-cyan-500"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0F2D3D]">
              Marine Alerts
            </h2>

            <p className="mt-1 text-sm text-[#718895]">
              Current ocean conditions and warnings
            </p>
          </div>

        </div>

        {/* Alerts */}

        <div className="space-y-4">

          {alerts.map((alert) => {
            const Icon = alert.icon;

            const styles = {
              warning: {
                container: "border-amber-200 bg-amber-50",
                icon: "bg-amber-100 text-amber-600",
                text: "text-amber-800",
              },

              danger: {
                container: "border-red-200 bg-red-50",
                icon: "bg-red-100 text-red-600",
                text: "text-red-800",
              },

              safe: {
                container: "border-emerald-200 bg-emerald-50",
                icon: "bg-emerald-100 text-emerald-600",
                text: "text-emerald-800",
              },
            };

            const style =
              styles[alert.type as keyof typeof styles];

            return (
              <div
                key={alert.message}
                className={`
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  px-4
                  py-4
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  ${style.container}
                `}
              >

                {/* Icon */}

                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${style.icon}
                  `}
                >
                  <Icon size={20} />
                </div>

                {/* Message */}

                <p
                  className={`
                    text-sm
                    font-medium
                    ${style.text}
                  `}
                >
                  {alert.message}
                </p>

              </div>
            );
          })}

        </div>

      </CardContent>
    </Card>
  );
}