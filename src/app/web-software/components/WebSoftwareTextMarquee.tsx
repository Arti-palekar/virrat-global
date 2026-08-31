"use client";

import React from "react";
import { PerspectiveMarquee } from "@/components/PerspectiveMarquee";

const MARQUEE_ITEMS = [
  "Custom Software",
  "Mobile Apps",
  "AI Automation",
  "Custom Software",
  "Mobile Apps",
  "AI Automation",
];

export function WebSoftwareTextMarquee() {
  return (
    <section className="relative w-full h-[140px] md:h-[180px] lg:h-[220px] bg-[#FAFAF8] overflow-hidden z-10">
      <PerspectiveMarquee 
        items={MARQUEE_ITEMS} 
        background="#FAFAF8"
        fadeColor="#FAFAF8"
        color="#111111"
        speed={1}
        fontSize={84}
      />
    </section>
  );
}

export default WebSoftwareTextMarquee;
