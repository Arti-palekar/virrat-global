"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SplashCursor from "@/components/ui/SplashCursor";

type MarqueeItem = {
  text: string;
  accent: boolean;
  isSeparator?: boolean;
  outline?: boolean;
};

/* ─── Data ────────────────────────────────────────────────────────────────── */

const ROW_1_ITEMS = [
  { text: "CUSTOM SOFTWARE", accent: false },
  { text: "✦", accent: true, isSeparator: true },
  { text: "MOBILE APPS", accent: false },
  { text: "✦", accent: true, isSeparator: true },
  { text: "AI AUTOMATION", accent: false },
  { text: "✦", accent: true, isSeparator: true },
];

/* ─── Marquee Engine ──────────────────────────────────────────────────────── */

function useMarqueeEngine(
  trackRef: React.RefObject<HTMLDivElement | null>,
  isInView: boolean,
  isHovered: boolean,
  prefersReducedMotion: boolean | null,
  direction: "left" | "right",
  baseSpeed: number
) {
  const posRef = useRef(0);
  const speedRef = useRef(0);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);

  const NORMAL_SPEED = baseSpeed;
  const SLOW_SPEED = baseSpeed * 0.3; // Slow down to 30% speed on hover
  const LERP_FACTOR = 0.05; 

  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;

    const track = trackRef.current;
    if (!track) return;

    speedRef.current = NORMAL_SPEED;
    lastTimeRef.current = performance.now();

    const animate = (now: number) => {
      const dt = Math.min(now - lastTimeRef.current, 50);
      lastTimeRef.current = now;

      const targetSpeed = isHovered ? SLOW_SPEED : NORMAL_SPEED;
      speedRef.current += (targetSpeed - speedRef.current) * LERP_FACTOR;

      // Move left means subtract, right means add
      if (direction === "left") {
        posRef.current -= speedRef.current * dt;
      } else {
        posRef.current += speedRef.current * dt;
      }

      // 1 set is 1/4 of track (since we duplicate 4 times for safety)
      const oneSetWidth = track.scrollWidth / 4;
      
      if (direction === "left") {
        if (Math.abs(posRef.current) >= oneSetWidth) {
          posRef.current += oneSetWidth;
        }
      } else {
        // If moving right and we moved past 0, shift back by oneSetWidth
        if (posRef.current >= 0) {
          posRef.current -= oneSetWidth;
        }
      }

      track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trackRef, isInView, isHovered, prefersReducedMotion, direction, NORMAL_SPEED, SLOW_SPEED]);
}

/* ─── Marquee Row Component ───────────────────────────────────────────────── */

function MarqueeRow({ 
  items, 
  direction, 
  baseSpeed, 
  isHovered, 
  isInView, 
  prefersReducedMotion,
  initialX
}: {
  items: MarqueeItem[];
  direction: "left" | "right";
  baseSpeed: number;
  isHovered: boolean;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
  initialX: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useMarqueeEngine(trackRef, isInView, isHovered, prefersReducedMotion, direction, baseSpeed);

  // Duplicate items 4 times to ensure seamless scrolling on large screens
  const duplicatedItems = [...items, ...items, ...items, ...items];

  // If reduced motion, just show a static centered version without duplication
  if (prefersReducedMotion) {
    return (
      <div className="flex w-full justify-center gap-4 py-2 overflow-hidden whitespace-nowrap opacity-90">
        {items.map((item, i) => (
          <span 
            key={i} 
            className={`ws-text-marquee-item ${item.accent ? 'ws-text-marquee-accent' : ''} ${item.outline ? 'ws-text-marquee-outline' : ''}`}
            style={{ margin: item.isSeparator ? '0 1vw' : '0' }}
          >
            {item.text}
          </span>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: initialX }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="flex w-max"
      style={{
        // Give moving right an initial negative offset so it doesn't show a blank gap when starting
        transform: direction === "right" ? "translateX(-25%)" : "translateX(0)" 
      }}
    >
      <div ref={trackRef} className="flex items-center w-max">
        {duplicatedItems.map((item, i) => (
          <span 
            key={i} 
            className={`ws-text-marquee-item ${item.accent ? 'ws-text-marquee-accent' : ''} ${item.outline ? 'ws-text-marquee-outline' : ''}`}
            style={{ margin: item.isSeparator ? '0 3vw' : '0 2vw' }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────────── */

export function WebSoftwareTextMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{marqueeStyles}</style>
      <section
        ref={sectionRef}
        className="ws-text-marquee-section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Services Marquee"
      >
        <SplashCursor RAINBOW_MODE={false} COLOR="#d62020" TRANSPARENT={true} />
        
        <div className="flex flex-col w-full items-center relative z-10 pointer-events-none">
          <MarqueeRow 
            items={ROW_1_ITEMS} 
            direction="left" 
            baseSpeed={0.08}
            isHovered={isHovered} 
            isInView={isInView} 
            prefersReducedMotion={prefersReducedMotion}
            initialX={100}
          />
        </div>
      </section>
    </>
  );
}

/* ─── Styles ──────────────────────────────────────────────────────────────── */

const marqueeStyles = /* css */ `
.ws-text-marquee-section {
  position: relative;
  width: 100vw;
  max-width: 100%;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #000000;
  z-index: 10;
  
  /* Subtle edge mask for elegant entrance/exit */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.ws-text-marquee-item {
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 75px;
  font-weight: 600;
  line-height: 1.1;
  text-transform: uppercase;
  color: #FFFFFF;
  white-space: nowrap;
  letter-spacing: -0.02em;
  will-change: transform;
}

.ws-text-marquee-accent {
  color: #D62020;
}

.ws-text-marquee-outline {
  color: transparent;
  -webkit-text-stroke: 1px #FFFFFF;
}

@media (max-width: 768px) {
  .ws-text-marquee-section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .ws-text-marquee-item {
    font-size: 32px;
  }
  .ws-text-marquee-outline {
    -webkit-text-stroke: 1px #111111;
  }
}

@media (max-width: 480px) {
  .ws-text-marquee-item {
    font-size: 24px;
  }
}
`;

export default WebSoftwareTextMarquee;
