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
    icon: Database,
  },
  {
    title: "ARGO Floats",
    value: 4500,
    suffix: "+",
    icon: Waves,
  },
  {
    title: "Countries",
    value: 190,
    suffix: "+",
    icon: Globe2,
  },
  {
    title: "AI Accuracy",
    value: 98,
    suffix: "%",
    icon: BrainCircuit,
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
          >

            <Card
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#D8EAF0]
                bg-white
                shadow-[0_8px_30px_rgba(30,90,110,0.08)]
                transition-all
                duration-300
                hover:border-cyan-300
                hover:shadow-[0_12px_35px_rgba(6,182,212,0.15)]
              "
            >

              {/* Subtle gradient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-200/40
                  to-blue-200/20
                  blur-2xl
                "
              />

              <CardContent className="relative p-6">

                <div className="flex items-start justify-between">

                  {/* Information */}

                  <div>

                    <p className="text-sm font-medium text-[#718895]">
                      {item.title}
                    </p>

                    <h2
                      className="
                        mt-4
                        text-4xl
                        font-bold
                        tracking-tight
                        text-[#0F2D3D]
                      "
                    >

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

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-50
                      to-blue-50
                      ring-1
                      ring-cyan-100
                    "
                  >

                    <Icon
                      size={28}
                      strokeWidth={1.8}
                      className="text-cyan-500"
                    />

                  </div>

                </div>

                {/* Bottom gradient */}

                <div className="mt-6 h-1 overflow-hidden rounded-full bg-[#EAF6FA]">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "60%",
                    }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.15 + 0.4,
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                    "
                  />

                </div>

              </CardContent>

            </Card>

          </motion.div>
        );
      })}

    </div>
  );
}