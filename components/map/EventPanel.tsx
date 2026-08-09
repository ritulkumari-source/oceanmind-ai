"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Waves,
  Clock3,
} from "lucide-react";

const events = [
  {
    title: "High Waves",
    location: "Bay of Bengal",
    status: "Warning",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    icon: AlertTriangle,
    time: "10 mins ago",
  },
  {
    title: "Cyclone Watch",
    location: "Arabian Sea",
    status: "Critical",
    color: "text-red-400",
    bg: "bg-red-500/10",
    icon: AlertTriangle,
    time: "35 mins ago",
  },
  {
    title: "Safe Waters",
    location: "Indian Ocean",
    status: "Normal",
    color: "text-green-400",
    bg: "bg-green-500/10",
    icon: CheckCircle2,
    time: "1 hour ago",
  },
  {
    title: "Strong Current",
    location: "South Pacific",
    status: "Moderate",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    icon: Waves,
    time: "2 hours ago",
  },
];

export default function EventPanel() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Marine Events
      </h2>

      <div className="space-y-4">

        {events.map((event) => {
          const Icon = event.icon;

          return (
            <div
              key={event.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-500"
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  <div
                    className={`h-12 w-12 rounded-xl ${event.bg} flex items-center justify-center`}
                  >
                    <Icon
                      className={event.color}
                      size={22}
                    />
                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-white">
                      {event.title}
                    </h3>

                    <p className="text-slate-400 mt-1">
                      {event.location}
                    </p>

                  </div>

                </div>

                <span
                  className={`text-sm font-semibold ${event.color}`}
                >
                  {event.status}
                </span>

              </div>

              <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm">

                <Clock3 size={14} />

                {event.time}

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}