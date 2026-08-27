"use client";

import React from "react";
import DMPerspectiveMarquee from "./DMPerspectiveMarquee";

export default function DMTextSlider() {
  return (
    <section className="relative w-full h-[150px] md:h-[250px] overflow-hidden">
      <DMPerspectiveMarquee 
        background="#FAF9F6" 
        color="#111111"
        fontSize={84}
        fontWeight={900}
      />
    </section>
  );
}
