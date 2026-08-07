"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";

// ── Technology cards data ───────────────────────────────────────────────────

const row1Tools = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
];

const row2Tools = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
];

// ── Marquee Row Component ───────────────────────────────────────────────────

function MarqueeRow({ 
  tools, 
  direction, 
  speed, 
  isHovered 
}: { 
  tools: any[]; 
  direction: "left" | "right"; 
  speed: number; 
  isHovered: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const currentSpeed = useMotionValue(speed);
  const isReducedMotion = useReducedMotion();
  
  // Create 3 sets to allow smooth infinite wrapping
  const tripleTools = [...tools, ...tools, ...tools];

  useAnimationFrame((time, delta) => {
    if (isReducedMotion || !containerRef.current) return;
    
    // Smoothly interpolate speed (slows down when hovered)
    const targetSpeed = isHovered ? speed * 0.2 : speed;
    currentSpeed.set(currentSpeed.get() + (targetSpeed - currentSpeed.get()) * 0.05);
    
    // Normalize movement to 60fps frame time (~16.66ms per frame)
    const moveAmount = currentSpeed.get() * (delta / 16.66);
    
    // A single set's width is 1/3 of the total scrollable width
    const singleSetWidth = containerRef.current.scrollWidth / 3;
    
    if (singleSetWidth === 0) return;
    
    let newX = x.get() + (direction === "left" ? -moveAmount : moveAmount);
    
    if (direction === "left") {
      if (newX <= -singleSetWidth) {
        newX += singleSetWidth;
      }
    } else {
      if (newX >= 0) {
        newX -= singleSetWidth;
      }
    }
    
    x.set(newX);
  });

  useEffect(() => {
    if (isReducedMotion) return;
    // For right-moving marquee, start at -singleSetWidth so there's content to the left
    if (direction === "right" && containerRef.current) {
      const singleSetWidth = containerRef.current.scrollWidth / 3;
      x.set(-singleSetWidth);
    }
  }, [direction, x, isReducedMotion]);

  if (isReducedMotion) {
    return (
      <div className="flex gap-4 w-full overflow-x-auto pb-4 snap-x">
        {tools.map((tool, i) => (
          <div 
            key={`${tool.name}-${i}`} 
            className="tool-card aspect-square rounded-2xl bg-white flex items-center justify-center overflow-hidden group cursor-default shadow-sm shrink-0 snap-center"
          >
            <img 
              src={tool.logo} 
              alt={`${tool.name} logo`} 
              className="w-[55%] h-[55%] object-contain select-none" 
              draggable="false" 
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div 
      ref={containerRef}
      className="flex gap-4 w-max"
      style={{ x }}
    >
      {tripleTools.map((tool, i) => (
        <div 
          key={`${tool.name}-${i}`} 
          className="tool-card aspect-square rounded-2xl bg-white flex items-center justify-center overflow-hidden group cursor-default shadow-sm transition-transform duration-300 hover:-translate-y-1 shrink-0"
        >
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="w-[55%] h-[55%] object-contain select-none transition-transform duration-500 group-hover:scale-110"
            draggable="false"
          />
        </div>
      ))}
    </motion.div>
  );
}


// ── Main Component ──────────────────────────────────────────────────────────

export function WebSoftwareToolkit() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full pt-16 lg:pt-24 pb-10 lg:pb-12 px-6 md:px-12 lg:px-24 bg-[#f8f7f5]">
      {/* Dynamic styles for container queries to perfectly fit exactly 6 cards */}
      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-container {
          container-type: inline-size;
        }
        .tool-card {
          /* Mobile: exactly 2 cards visible */
          width: calc((100cqw - 1 * 1rem) / 2);
        }
        @media (min-width: 768px) {
          .tool-card {
            /* Tablet: exactly 4 cards visible */
            width: calc((100cqw - 3 * 1rem) / 4);
          }
        }
        @media (min-width: 1024px) {
          .tool-card {
            /* Desktop: EXACTLY 6 cards visible */
            width: calc((100cqw - 5 * 1rem) / 6);
          }
        }
      `}} />

      {/* ── Outer premium red container ── */}
      <div className="max-w-[1400px] mx-auto relative bg-[#d62020] border border-white/20 rounded-[40px] p-8 md:p-12 lg:p-14 overflow-hidden">

        {/* Decorative corner crop marks */}
        <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-white/25 pointer-events-none" />
        <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-white/25 pointer-events-none" />
        <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-white/25 pointer-events-none" />
        <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-white/25 pointer-events-none" />

        {/* Decorative crosshair mark */}
        <div className="absolute right-12 top-6 w-10 h-10 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-white">
            <circle cx="12" cy="12" r="7" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

          {/* ── LEFT SIDE — 40% ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between min-h-[180px] select-none"
          >
            <div>
              <span className="inline-block text-white/80 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                OUR DEVELOPMENT TOOLKIT
              </span>
              <p
                className="font-heading font-black uppercase leading-none tracking-tighter max-w-[20ch] m-0"
                style={{
                  color: "#FFFFFF",
                  fontSize: "clamp(32px, 3.6vw, 64px)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                TOOLS WE USE TO<br />BUILD DIGITAL<br />PRODUCTS
              </p>
            </div>

            <p className="text-sm font-medium leading-relaxed mt-6 max-w-[42ch]" style={{ color: "rgba(255,255,255,0.78)" }}>
              Modern technologies for building fast, scalable and reliable websites, web applications, SaaS platforms and business software.
            </p>
          </motion.div>

          {/* ── RIGHT SIDE — 60%: Marquee Rows ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="marquee-container lg:col-span-7 flex flex-col gap-4 overflow-hidden relative py-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            {/* Removed the absolute gradient edge mask to ensure 6 cards are fully visible unmasked */}
            
            <MarqueeRow 
              tools={row1Tools} 
              direction="left" 
              speed={0.9} 
              isHovered={isHovered} 
            />
            <MarqueeRow 
              tools={row2Tools} 
              direction="right" 
              speed={1.05} 
              isHovered={isHovered} 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WebSoftwareToolkit;
