"use client";

import React, { useRef, useEffect } from "react";

export default function PackagingMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  
  const targetSpeed = useRef(1.2); // Pixels per frame normal speed
  const currentSpeed = useRef(1.2);

  const marqueeText = [
    { text: "PACKAGING THAT", solid: false },
    { text: "SELLS", solid: true },
    { text: "• DESIGNED TO", solid: false },
    { text: "STAND OUT", solid: true },
    { text: "• BUILT FOR", solid: false },
    { text: "YOUR BRAND", solid: true },
    { text: "•", solid: false }
  ];

  // Triplicate array to ensure container is fully packed and loops seamlessly
  const extendedText = [...marqueeText, ...marqueeText, ...marqueeText];

  // Start at -segmentWidth so rightward movement begins seamlessly
  useEffect(() => {
    if (trackRef.current) {
      const segmentWidth = trackRef.current.scrollWidth / 3;
      xRef.current = -segmentWidth;
    }
    let animationId: number;
    
    const animate = () => {
      // Smoothly interpolate current speed towards target speed (lerping)
      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * 0.08;
      
      // Move track rightwards (Left → Right)
      xRef.current += currentSpeed.current;

      if (trackRef.current) {
        // Since we triplicated the array, reset at 1/3 segment to loop seamlessly
        const segmentWidth = trackRef.current.scrollWidth / 3;
        // When moving right, once xRef exceeds 0 from a negative start, reset backward
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
    targetSpeed.current = 0.4; // Decelerate on hover
  };

  const handleMouseLeave = () => {
    targetSpeed.current = 1.2; // Accelerate back to normal
  };

  return (
    <section className="w-full bg-white pt-[10px] pb-0 overflow-hidden">
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
