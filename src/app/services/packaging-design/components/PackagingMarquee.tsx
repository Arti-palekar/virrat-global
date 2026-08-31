"use client";

import React, { useEffect, useState, useRef } from "react";
import { PerspectiveMarquee } from "@/components/PerspectiveMarquee";

export default function PackagingMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(84);

  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setFontSize(width < 768 ? 42 : 84);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    "Digital Growth", 
    "Custom Software", 
    "AI Workflows"
  ];

  return (
    <section className="w-full bg-[#FAF9F6] overflow-hidden border-t border-gray-100 py-4 md:py-8">
      <div 
        ref={containerRef}
        className="w-full relative h-[120px] md:h-[180px] cursor-default select-none overflow-hidden"
      >
        <PerspectiveMarquee 
          items={items} 
          fontSize={fontSize}
          background="transparent" 
          fadeColor="#FAF9F6"
          speed={1.2}
          pixelsPerFrame={2}
        />
      </div>
    </section>
  );
}
