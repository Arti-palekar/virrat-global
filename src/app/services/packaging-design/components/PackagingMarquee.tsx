"use client";

import React, { useEffect, useRef, useState } from "react";

export default function PackagingMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const isHoveredRef = useRef(false);
  const currentSpeedRef = useRef(1.2);
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

  useEffect(() => {
    let animationFrameId: number;
    
    const tick = () => {
      const targetSpeed = isHoveredRef.current ? 0.3 : 1.2;
      // Lerp speed for smooth slowdown/acceleration
      currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * 0.08;
      
      // Move track leftwards (Right → Left)
      xRef.current -= currentSpeedRef.current;
      
      if (trackRef.current) {
        const segmentWidth = trackRef.current.scrollWidth / 3;
        if (Math.abs(xRef.current) >= segmentWidth) {
          xRef.current += segmentWidth;
        }
        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(tick);
    };
    
    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const items = ["Digital Growth", "Custom Software", "AI Workflows"];
  // Triplicate the items array to ensure seamless looping
  const extendedItems = [...items, ...items, ...items];
  const itemPadding = fontSize * 0.9;

  return (
    <section className="w-full bg-[#ffffff] py-6 md:py-10 overflow-hidden border-t border-gray-100">
      <style>{`
        .perspective-blur-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          backdrop-filter: blur(8px);
          -webkit-mask-image: linear-gradient(90deg, black 0%, transparent 20%, transparent 80%, black 100%);
          mask-image: linear-gradient(90deg, black 0%, transparent 20%, transparent 80%, black 100%);
          z-index: 10;
        }
        .perspective-fade-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.4) 15%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.4) 85%, #ffffff 100%);
          z-index: 11;
        }
      `}</style>
      <div
        ref={containerRef}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        className="w-full relative h-[120px] md:h-[180px] flex items-center justify-center overflow-hidden cursor-default select-none bg-[#ffffff]"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: "rotateX(8deg) rotateY(-28deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
          >
            {extendedItems.map((item, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "'Sora', sans-serif",
                  fontSize: `${fontSize}px`,
                  fontWeight: 700,
                  color: "#111111",
                  letterSpacing: "-0.03em",
                  paddingRight: `${itemPadding}px`,
                }}
              >
                <span className="transition-colors hover:text-[#d62020] cursor-default">{item}</span>
                <span className="text-[#d62020] text-[0.5em] opacity-80" style={{ marginLeft: `${itemPadding / 2}px` }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Edge Blur & Fade Overlays */}
        <div className="perspective-blur-overlay" />
        <div className="perspective-fade-overlay" />
      </div>
    </section>
  );
}
