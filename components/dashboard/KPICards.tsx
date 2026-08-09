"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Waves,
  Globe2,
  BrainCircuit,
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Ocean Records",
    value: 1800000,
    suffix: "+",
    display: "1.8M+",
    icon: Database,
    color: "text-cyan-400",
  },
  {
    title: "ARGO Floats",
    value: 4500,
    suffix: "+",
    display: "4500+",
    icon: Waves,
    color: "text-blue-400",
  },
  {
    title: "Countries",
    value: 190,
    suffix: "+",
    display: "190+",
    icon: Globe2,
    color: "text-green-400",
  },
  {
    title: "AI Accuracy",
    value: 98,
    suffix: "%",
    display: "98%",
    icon: BrainCircuit,
    color: "text-purple-400",
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <Card className="bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all duration-300 rounded-2xl shadow-lg">

              <CardContent className="p-6">

                <div className="flex justify-between items-start">

                  <div>

                    <p className="text-slate-400 text-sm">
                      {item.title}
                    </p>

                    <h2 className={`text-4xl font-bold mt-4 ${item.color}`}>

                      {item.title === "Ocean Records" ? (
                        <>
                          <CountUp
                            end={1.8}
                            decimals={1}
                            duration={2}
                          />
                          M+
                        </>
                      ) : item.title === "AI Accuracy" ? (
                        <>
                          <CountUp
                            end={98}
                            duration={2}
                          />
                          %
                        </>
                      ) : (
                        <>
                          <CountUp
                            end={item.value}
                            duration={2}
                          />
                          {item.suffix}
                        </>
                      )}

                    </h2>

                  </div>

                  <div className="bg-cyan-500/10 p-4 rounded-xl">
                    <Icon
                      size={30}
                      className={item.color}
                    />
                  </div>

                </div>

              </CardContent>

            </Card>
          </motion.div>
        );
      })}

    </div>
  );
}