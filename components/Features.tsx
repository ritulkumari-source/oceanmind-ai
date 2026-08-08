import {
  Brain,
  Globe,
  BarChart3,
  FileText,
  Mic,
  ShieldAlert,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={40} />,
    title: "AI Ocean Assistant",
    desc: "Ask questions in natural language and instantly explore ARGO ocean data.",
  },
  {
    icon: <Globe size={40} />,
    title: "3D Ocean Digital Twin",
    desc: "Visualize oceans with an interactive digital globe and live datasets.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Climate Analytics",
    desc: "Analyze temperature, salinity and climate trends with AI insights.",
  },
  {
    icon: <FileText size={40} />,
    title: "AI Report Generator",
    desc: "Generate downloadable research reports automatically.",
  },
  {
    icon: <Mic size={40} />,
    title: "Voice Search",
    desc: "Talk to OceanMind AI in natural language.",
  },
  {
    icon: <ShieldAlert size={40} />,
    title: "Marine Alerts",
    desc: "Receive intelligent predictions for marine disasters and anomalies.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl bg-white/5 border border-cyan-400/20 backdrop-blur-md p-8 hover:scale-105 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="text-cyan-400 mb-6">{feature.icon}</div>

            <h3 className="text-2xl font-bold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-300">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}