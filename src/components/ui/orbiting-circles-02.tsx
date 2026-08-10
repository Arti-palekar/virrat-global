"use client";

import React from "react";
import { Database, Bot, Wrench, PenTool, MessageSquare, Cpu, Code2, Terminal } from "lucide-react";

// Mocking the ParticleSphereAnimation since the code wasn't provided
// Replacing it with a Virrat-themed glowing AI core to match the brand
const ParticleSphereAnimation = () => (
  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#E32620] via-red-500 to-orange-400 shadow-[0_0_80px_rgba(227,38,32,0.4)] animate-pulse flex items-center justify-center">
    <div className="w-[70%] h-[70%] rounded-full bg-white/20 backdrop-blur-md animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
  </div>
);

const orbits = [
  {
    size: "w-[280px] h-[280px] md:w-[440px] md:h-[440px]",
    duration: 18,
    icons: [
      { Icon: Database, color: "#3ECF8E", angle: -60 },
      { Icon: Bot, color: "#E32620", angle: 0 },
      { Icon: Wrench, color: "#555555", angle: 60 },
    ],
  },
  {
    size: "w-[380px] h-[380px] md:w-[560px] md:h-[560px]",
    duration: 24,
    icons: [
      { Icon: PenTool, color: "#F24E1E", angle: 0 },
      { Icon: MessageSquare, color: "#4A154B", angle: -90 },
    ],
  },
  {
    size: "w-[480px] h-[480px] md:w-[680px] md:h-[680px]",
    duration: 30,
    icons: [
      { Icon: Cpu, color: "#D4A373", angle: -60 },
      { Icon: Code2, color: "#61DAFB", angle: 0 },
      { Icon: Terminal, color: "#3776AB", angle: 60 },
    ],
  },
];

export default function OrbitingCirclesGlobe() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden flex justify-center bg-[#FAF9F6]">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center particle globe */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square pointer-events-none w-[160px] md:w-[260px] z-10">
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-gray-200 ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => {
              const IconComp = iconData.Icon;
              return (
                <div
                  key={iconIndex}
                  className="absolute top-0 left-1/2 h-1/2 -ml-6 origin-bottom flex flex-col justify-start items-center"
                  style={
                    {
                      "--start-angle": `${iconData.angle}deg`,
                      animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="p-3 border border-gray-200 rounded-full bg-white shadow-sm -mt-6 relative z-10 flex items-center justify-center"
                    style={
                      {
                        "--counter-offset": `${-iconData.angle}deg`,
                        animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                      } as React.CSSProperties
                    }
                  >
                    <IconComp size={24} color={iconData.color} strokeWidth={1.5} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
