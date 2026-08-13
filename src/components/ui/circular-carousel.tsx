"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────
   Types
   ──────────────────────────────────────────── */

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  tag?: string;
}

export interface CircularCarouselProps {
  items: CarouselItem[];
  autoplayInterval?: number;
  className?: string;
}

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */

export function CircularCarousel({
  items,
  autoplayInterval = 4000,
  className,
}: CircularCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = items.length;

  /* ── Navigation helpers ── */
  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  /* ── Autoplay ── */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [goNext, autoplayInterval, isPaused]);

  /* ── Keyboard ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  /* ── Circular positions ── */
  const getPosition = (index: number) => {
    const offset = index - activeIndex;
    const normalised =
      ((offset % total) + total + Math.floor(total / 2)) % total -
      Math.floor(total / 2);

    /* Base radii — scaled down by CSS clamp() on parent */
    const RADIUS_X = 220;
    const RADIUS_Y = 100;

    const angle = (normalised / total) * 2 * Math.PI - Math.PI / 2;
    const x = Math.cos(angle) * RADIUS_X;
    const y = Math.sin(angle) * RADIUS_Y;

    const isActive = normalised === 0;
    const isAdjacent = Math.abs(normalised) === 1;

    const scale = isActive ? 1 : isAdjacent ? 0.75 : 0.55;
    const opacity = isActive ? 1 : isAdjacent ? 0.6 : 0.3;
    const zIndex = isActive ? 30 : isAdjacent ? 20 : 10;

    return { x, y, scale, opacity, zIndex };
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full select-none", className)}
      role="region"
      aria-label="Circular carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Orbit ring ── */}
      <div
        className="relative mx-auto"
        style={{ width: "min(100%, 600px)", aspectRatio: "6 / 3.5" }}
      >
        {/* Faint ellipse ring */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-260 -130 520 260"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse
            cx="0"
            cy="0"
            rx="220"
            ry="100"
            fill="none"
            stroke="rgba(227,30,36,0.12)"
            strokeWidth="1.5"
          />
        </svg>

        {/* ── Cards ── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {items.map((item, idx) => {
              const pos = getPosition(idx);
              const isActive = idx === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  layout
                  onClick={() => goTo(idx)}
                  animate={{
                    x: pos.x,
                    y: pos.y,
                    scale: pos.scale,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  aria-selected={isActive}
                  className={cn(
                    "absolute w-[200px] sm:w-[220px] rounded-2xl border p-5 text-left transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24]/60",
                    isActive
                      ? "bg-[#0f0f0f] border-[#E31E24]/40 shadow-[0_0_30px_rgba(227,30,36,0.10)]"
                      : "bg-[#0a0a0a] border-white/20 hover:border-white/30",
                  )}
                >
                  {/* Tag */}
                  {item.tag && (
                    <span
                      className={cn(
                        "inline-block text-[9px] font-bold tracking-[0.15em] uppercase rounded-full px-2.5 py-0.5 mb-3",
                        isActive
                          ? "bg-[#E31E24]/15 text-[#E31E24]"
                          : "bg-white/10 text-white/70",
                      )}
                    >
                      {item.tag}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300",
                      isActive
                        ? "bg-[#E31E24]/10 text-[#E31E24]"
                        : "bg-zinc-800/60 text-zinc-400",
                    )}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-sm font-semibold tracking-tight mb-1.5 font-heading transition-colors duration-300",
                      isActive ? "text-white" : "text-white",
                    )}
                  >
                    {item.title}
                  </h3>

                  {/* Description — only visible on active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-[12px] leading-relaxed text-white/70 font-sans"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-center gap-6 mt-10">
        {/* Prev */}
        <button
          onClick={goPrev}
          aria-label="Previous item"
          className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#E31E24]/40 transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist">
          {items.map((item, idx) => (
            <button
              key={item.id}
              role="tab"
              aria-label={`Go to ${item.title}`}
              aria-selected={idx === activeIndex}
              onClick={() => goTo(idx)}
              className={cn(
                "rounded-full transition-all duration-300 cursor-pointer",
                idx === activeIndex
                  ? "w-6 h-2 bg-[#E31E24]"
                  : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500",
              )}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={goNext}
          aria-label="Next item"
          className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#E31E24]/40 transition-all duration-200 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default CircularCarousel;
