"use client";

import React, { useRef, useEffect } from "react";

export default function MerchandiseMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  
  const targetSpeed = useRef(1.2);
  const currentSpeed = useRef(1.2);

  const marqueeText = [
    { text: "MERCHANDISE THAT", solid: false },
    { text: "SPEAKS", solid: true },
    { text: "• ENGAGE YOUR", solid: false },
    { text: "TEAM", solid: true },
    { text: "• SCALE YOUR", solid: false },
    { text: "BRAND", solid: true },
    { text: "•", solid: false }
  ];

  const extendedText = [...marqueeText, ...marqueeText, ...marqueeText];

  useEffect(() => {
    if (trackRef.current) {
      const segmentWidth = trackRef.current.scrollWidth / 3;
      xRef.current = -segmentWidth;
    }
    let animationId: number;
    
    const animate = () => {
      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * 0.08;
      xRef.current += currentSpeed.current;

      if (trackRef.current) {
        const segmentWidth = trackRef.current.scrollWidth / 3;
        if (xRef.current >= 0) {
          xRef.current = -segmentWidth;
        }
        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseEnter = () => {
    targetSpeed.current = 0.4;
  };

  const handleMouseLeave = () => {
    targetSpeed.current = 1.2;
  };

  return (
    <section className="w-full bg-white ] overflow-hidden py-16 md:py-24">
      <div 
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full bg-[#d62020] py-4 md:py-6 overflow-hidden relative flex items-center border-y border-[#b81c1c]/20 cursor-default select-none shadow-sm"
      >
        <div 
          ref={trackRef}
          className="flex whitespace-nowrap items-center gap-6 md:gap-8 will-change-transform"
        >
          {extendedText.map((item, idx) => (
            <span
              key={`${item.text}-${idx}`}
              className={`text-[36px] md:text-[50px] lg:text-[75px] font-heading font-black tracking-tighter uppercase select-none`}
              style={
                item.solid 
                  ? { color: "#ffffff" } 
                  : { 
                      WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.85)", 
                      color: "transparent" 
                    }
              }
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
