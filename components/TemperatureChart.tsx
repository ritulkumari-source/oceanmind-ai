"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

export default function TemperatureChart() {
  return (
    <div className="bg-slate-800 rounded-3xl p-6 border border-cyan-500/20">

      <h2 className="text-2xl font-bold mb-6 text-cyan-400">
        Temperature Trend
      </h2>

      <Plot
        data={[
          {
            x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            y: [18, 19, 22, 24, 26, 29],
            type: "scatter",
            mode: "lines+markers",
          },
        ]}
        layout={{
          width: 500,
          height: 300,
          paper_bgcolor: "#1e293b",
          plot_bgcolor: "#1e293b",
          font: { color: "white" },
        }}
      />

    </div>
  );
}