"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface IndustryItem {
  name: string;
  image: string;
}

export interface ImageStreamHeroProps {
  industries: IndustryItem[];
  cards?: number; // total visible per rail
  speed?: number; // duration in seconds
  axis?: number; // Y rotation angle in degrees
}

export function ImageStreamHero({
  industries,
  cards = 8,
  speed = 18,
  axis = 55,
}: ImageStreamHeroProps) {
  // Ensure we have enough items, repeat if necessary
  const railItems = [...industries];
  while (railItems.length < cards) {
    railItems.push(...industries);
  }
  const displayItems = railItems.slice(0, cards);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center select-none bg-black">
      {/* CSS Corridor Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes corridor-travel {
          0% {
            transform: translate3d(0, 0, -1800px);
            opacity: 0;
          }
          8% {
            opacity: 0.85;
          }
          85% {
            opacity: 0.85;
          }
          100% {
            transform: translate3d(0, 0, 400px);
            opacity: 0;
          }
        }
        .animate-corridor {
          animation: corridor-travel ${speed}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-corridor {
            animation: none !important;
            transform: translate3d(0, 0, -400px) !important;
            opacity: 0.85 !important;
          }
        }
      `}} />

      {/* 3D Corridor Stage Wrapper */}
      <div 
        className="w-full h-full relative flex items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        aria-hidden="true"
      >
        {/* Left Rail (angled outward to the left) */}
        <div 
          className="absolute left-[3%] md:left-[5%] lg:left-[8%] top-[10%] bottom-[10%] w-[42%] md:w-[35%] lg:w-[32%] h-[80%]"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${axis}deg)`,
          }}
        >
          {displayItems.map((item, index) => {
            const delay = -((index * speed) / displayItems.length);
            return (
              <div
                key={`left-${index}`}
                className="absolute inset-0 flex items-center justify-center animate-corridor"
                style={{
                  transformStyle: "preserve-3d",
                  animationDelay: `${delay}s`,
                }}
              >
                <div className="group w-full aspect-[4/3] rounded-xl border border-[#E31E24]/20 bg-[#111111] overflow-hidden relative transition-all duration-300 hover:border-[#E31E24]/80 hover:shadow-[0_0_25px_rgba(227,30,36,0.2)]">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Red tint + Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-[#E31E24]/5" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-1 items-start text-left z-10">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E31E24] font-semibold">
                      Industry
                    </span>
                    <h3 className="text-sm md:text-base font-heading font-bold text-white leading-tight">
                      {item.name}
                    </h3>
                    <ArrowRight 
                      size={14} 
                      className="text-[#E31E24] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 mt-1" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Rail (angled outward to the right) */}
        <div 
          className="absolute right-[3%] md:right-[5%] lg:right-[8%] top-[10%] bottom-[10%] w-[42%] md:w-[35%] lg:w-[32%] h-[80%]"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${-axis}deg)`,
          }}
        >
          {displayItems.map((item, index) => {
            // Offset the right rail starting position for a more dynamic distribution
            const delay = -(((index + 0.5) * speed) / displayItems.length);
            return (
              <div
                key={`right-${index}`}
                className="absolute inset-0 flex items-center justify-center animate-corridor"
                style={{
                  transformStyle: "preserve-3d",
                  animationDelay: `${delay}s`,
                }}
              >
                <div className="group w-full aspect-[4/3] rounded-xl border border-[#E31E24]/20 bg-[#111111] overflow-hidden relative transition-all duration-300 hover:border-[#E31E24]/80 hover:shadow-[0_0_25px_rgba(227,30,36,0.2)]">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Red tint + Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-[#E31E24]/5" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-1 items-start text-left z-10">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E31E24] font-semibold">
                      Industry
                    </span>
                    <h3 className="text-sm md:text-base font-heading font-bold text-white leading-tight">
                      {item.name}
                    </h3>
                    <ArrowRight 
                      size={14} 
                      className="text-[#E31E24] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 mt-1" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageStreamHero;
