"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HoverItem {
  id: number;
  largeText: string;
  smallText1: string;
  smallText2: string;
  layout: "large-left" | "large-right";
  image: string;
  textPos: string;
  imgPos: string;
}

const HOVER_ITEMS: HoverItem[] = [
  {
    id: 1,
    largeText: "APP",
    smallText1: "INTERFACE",
    smallText2: "DESIGN",
    layout: "large-left",
    image: "/images/services/app_interface.jpg",
    textPos: "top-[25%] left-[20%] md:left-[43%]",
    imgPos: "top-[15%] left-[10%] md:left-[25%]",
  },
  {
    id: 2,
    largeText: "DESIGN",
    smallText1: "BRAND",
    smallText2: "IDENTITY",
    layout: "large-right",
    image: "/images/services/brand_identity.jpg",
    textPos: "top-[42%] left-[25%] md:left-[45%]",
    imgPos: "top-[25%] right-[5%] md:right-[15%]",
  },
  {
    id: 3,
    largeText: "VISUAL &",
    smallText1: "GRAPHIC",
    smallText2: "DESIGN",
    layout: "large-left",
    image: "/images/services/visual_graphic.jpg",
    textPos: "top-[60%] left-[10%] md:left-[30%]",
    imgPos: "top-[40%] left-[2%] md:left-[10%]",
  },
  {
    id: 4,
    largeText: "GUIDELINES",
    smallText1: "DESIGN",
    smallText2: "SYSTEMS &",
    layout: "large-right",
    image: "/images/services/design_systems.jpg",
    textPos: "top-[80%] left-[15%] md:left-[45%]",
    imgPos: "top-[70%] left-[5%] md:left-[15%]",
  },
];

export function WebSoftwareHoverShowcase() {
  // Set default active item to null (or 1 if preferred). Let's use 1 as default to show the effect immediately.
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#111111] py-20 lg:py-0 lg:min-h-[1000px] overflow-hidden">
      
      {/* Top Header */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center pt-10 md:pt-20 gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight max-w-2xl text-[#111111] uppercase">
          DESIGN SOLUTIONS CRAFTED TO ELEVATE BRANDS
        </h2>
        <Link 
          href="/services" 
          className="group inline-flex items-center gap-3 bg-[#D92323] hover:bg-[#b01c1c] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-colors shadow-lg"
        >
          VIEW ALL DETAILS
          <div className="bg-white text-[#D92323] p-1.5 rounded-full group-hover:translate-x-1 transition-transform flex items-center justify-center">
            <ArrowRight size={16} strokeWidth={3} />
          </div>
        </Link>
      </div>

      {/* Interactive Canvas (Desktop) */}
      <div className="hidden lg:block relative w-full h-[900px] mt-10">
        
        {/* Render Floating Images */}
        {HOVER_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div key={`img-group-${item.id}`} className={`absolute ${item.imgPos}`} style={{ width: "260px", height: "160px" }}>
              {/* Subtle Red Glow Behind Image */}
              <div 
                className={`absolute inset-[-100%] transition-opacity duration-700 ease-out z-0 rounded-full blur-3xl pointer-events-none bg-[radial-gradient(circle_at_center,rgba(217,35,35,0.15)_0%,rgba(217,35,35,0)_60%)] ${
                  isActive ? "opacity-100" : "opacity-0"
                }`} 
              />
              {/* Image Card */}
              <div 
                className={`relative w-full h-full transition-all duration-700 ease-out pointer-events-none rounded-2xl overflow-hidden ${
                  isActive 
                    ? "opacity-100 scale-[1.15] brightness-105 z-40 shadow-[0_20px_50px_rgba(217,35,35,0.25)]" 
                    : "opacity-90 scale-100 brightness-95 z-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                }`}
              >
                <Image 
                  src={item.image}
                  alt={item.largeText}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}

        {/* Render Scattered Typography */}
        {HOVER_ITEMS.map((item) => {
          const isActuallyActive = activeId === item.id;
          
          return (
            <div 
              key={`text-${item.id}`}
              className={`absolute flex items-center gap-4 cursor-pointer transition-colors duration-500 z-30 ${item.textPos}`}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {item.layout === "large-left" ? (
                <>
                  <span className={`text-[70px] xl:text-[90px] font-black leading-none tracking-tighter transition-colors duration-500 ${isActuallyActive ? "text-[#D92323]" : "text-[#111111]"}`}>
                    {item.largeText}
                  </span>
                  <div className="flex flex-col text-[12px] lg:text-[14px] font-bold tracking-widest leading-tight transition-colors duration-500 uppercase text-gray-500">
                    <span>{item.smallText1}</span>
                    <span>{item.smallText2}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col text-right text-[12px] lg:text-[14px] font-bold tracking-widest leading-tight transition-colors duration-500 uppercase text-gray-500">
                    <span>{item.smallText1}</span>
                    <span>{item.smallText2}</span>
                  </div>
                  <span className={`text-[70px] xl:text-[90px] font-black leading-none tracking-tighter transition-colors duration-500 ${isActuallyActive ? "text-[#D92323]" : "text-[#111111]"}`}>
                    {item.largeText}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile / Tablet Stacked Layout */}
      <div className="lg:hidden mt-20 px-6 flex flex-col gap-16 pb-20">
        {HOVER_ITEMS.map((item) => {
          const isActuallyActive = activeId === item.id;
          
          return (
            <div 
              key={`mobile-${item.id}`}
              className="flex flex-col gap-6 relative"
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(isActuallyActive ? null : item.id)}
            >
              {/* Text Layout */}
              <div className="flex items-center gap-4 z-10">
                {item.layout === "large-left" ? (
                  <>
                    <span className={`text-[50px] md:text-[60px] font-black leading-none tracking-tighter transition-colors duration-500 ${isActuallyActive ? "text-[#D92323]" : "text-[#111111]"}`}>
                      {item.largeText}
                    </span>
                    <div className="flex flex-col text-[11px] md:text-[13px] font-bold tracking-widest leading-tight transition-colors duration-500 uppercase text-gray-500">
                      <span>{item.smallText1}</span>
                      <span>{item.smallText2}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col text-right text-[11px] md:text-[13px] font-bold tracking-widest leading-tight transition-colors duration-500 uppercase text-gray-500">
                      <span>{item.smallText1}</span>
                      <span>{item.smallText2}</span>
                    </div>
                    <span className={`text-[50px] md:text-[60px] font-black leading-none tracking-tighter transition-colors duration-500 ${isActuallyActive ? "text-[#D92323]" : "text-[#111111]"}`}>
                      {item.largeText}
                    </span>
                  </>
                )}
              </div>

              {/* Image Reveal */}
              <div className="relative w-full mt-4 h-[200px] md:h-[300px]">
                {/* Subtle Red Glow Behind Mobile Image */}
                <div 
                  className={`absolute inset-[-50%] transition-opacity duration-700 ease-out z-0 rounded-full blur-3xl pointer-events-none bg-[radial-gradient(circle_at_center,rgba(217,35,35,0.15)_0%,rgba(217,35,35,0)_60%)] ${
                    isActuallyActive ? "opacity-100" : "opacity-0"
                  }`} 
                />
                <div 
                  className={`relative w-full h-full rounded-xl overflow-hidden transition-all duration-700 ease-out shadow-lg ${
                    isActuallyActive 
                      ? "opacity-100 scale-100 brightness-105 z-20 shadow-[0_20px_50px_rgba(217,35,35,0.25)]" 
                      : "opacity-90 scale-95 brightness-95 z-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  }`}
                >
                  <Image 
                    src={item.image}
                    alt={item.largeText}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}

export default WebSoftwareHoverShowcase;
