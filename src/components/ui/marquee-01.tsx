"use client";

import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
}: MarqueeProps) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div className={`marquee-${uid} flex overflow-hidden w-full [--duration:40s] [--gap:1.5rem] [gap:var(--gap)] flex-row ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - var(--gap))); }
        }
        .animate-marquee-scroll-${uid} {
          animation: marquee-scroll var(--duration) linear infinite;
        }
        ${pauseOnHover ? `
          .marquee-${uid}:hover .animate-marquee-scroll-${uid} {
            animation-play-state: paused;
          }
        ` : ""}
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-scroll-${uid} {
            animation: none !important;
          }
        }
      `}} />
      <div className="flex flex-row shrink-0 [gap:var(--gap)]">
        <div className={`flex shrink-0 justify-around flex-row [gap:var(--gap)] animate-marquee-scroll-${uid} ${reverse ? "[animation-direction:reverse]" : ""}`}>
          {children}
        </div>
        <div className={`flex shrink-0 justify-around flex-row [gap:var(--gap)] animate-marquee-scroll-${uid} ${reverse ? "[animation-direction:reverse]" : ""}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
