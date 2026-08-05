"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import {
  Layers3,
  UsersRound,
  BrainCircuit,
  Cable,
  Cloud,
  PanelsTopLeft,
  Code2,
  Smartphone,
  Braces,
  Server,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Data ────────────────────────────────────────────────────────────────── */

interface ServiceItem {
  label: string;
  Icon: LucideIcon;
}

const SERVICES: ServiceItem[] = [
  { label: "ERP SYSTEMS", Icon: Layers3 },
  { label: "CRM SOLUTIONS", Icon: UsersRound },
  { label: "AI AUTOMATION", Icon: BrainCircuit },
  { label: "API INTEGRATIONS", Icon: Cable },
  { label: "CLOUD SOLUTIONS", Icon: Cloud },
  { label: "SAAS PLATFORMS", Icon: PanelsTopLeft },
  { label: "CUSTOM WEB APPS", Icon: Code2 },
  { label: "MOBILE APPS", Icon: Smartphone },
  { label: "NEXT.JS DEVELOPMENT", Icon: Braces },
  { label: "NODE.JS", Icon: Server },
];

/* ─── Single Ribbon Item ──────────────────────────────────────────────────── */

function RibbonItem({
  item,
  centerRatio,
}: {
  item: ServiceItem;
  centerRatio: number; // 0 = edge, 1 = center
}) {
  const [hovered, setHovered] = useState(false);
  const { Icon, label } = item;

  /* opacity / scale from center proximity */
  const opacity = 0.35 + centerRatio * 0.65;
  const scale = 0.96 + centerRatio * 0.04;

  return (
    <div
      className="ws-ribbon-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity,
        transform: `scale(${scale})${hovered ? " translateY(-2px)" : ""}`,
      }}
    >
      {/* icon container */}
      <span
        className="ws-ribbon-icon-wrap"
        style={{
          background: hovered ? "#d62020" : "transparent",
          transform: hovered ? "scale(1)" : "scale(0.85)",
        }}
      >
        <Icon
          size={18}
          strokeWidth={1.8}
          style={{
            color: hovered ? "#fff" : "#171717",
            transition: "color 0.3s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </span>

      {/* label */}
      <span
        className="ws-ribbon-label"
        style={{
          color: hovered ? "#d62020" : "#171717",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
        }}
      >
        {label}
        <span
          className="ws-ribbon-underline"
          style={{
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </span>

      {/* separator dot */}
      <span
        className="ws-ribbon-dot"
        style={{
          transform: hovered ? "scale(1.5)" : "scale(1)",
        }}
      >
        •
      </span>
    </div>
  );
}

/* ─── Marquee Engine (JS-driven for smooth hover speed transition) ────── */

function useMarqueeEngine(
  trackRef: React.RefObject<HTMLDivElement | null>,
  isInView: boolean,
  isHovered: boolean,
  prefersReducedMotion: boolean | null,
) {
  const posRef = useRef(0);
  const speedRef = useRef(0); // current interpolated speed
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);

  /* Target speed: px/ms */
  const NORMAL_SPEED = 0.04;   // ~40px/s → full cycle in ~40s
  const SLOW_SPEED = 0.008;    // ~20% of normal
  const LERP_FACTOR = 0.03;    // how fast speed transitions (smooth)

  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;

    const track = trackRef.current;
    if (!track) return;

    speedRef.current = NORMAL_SPEED;
    lastTimeRef.current = performance.now();

    const animate = (now: number) => {
      const dt = Math.min(now - lastTimeRef.current, 50); // cap at 50ms to avoid jumps
      lastTimeRef.current = now;

      // Smoothly lerp speed toward target
      const target = isHovered ? SLOW_SPEED : NORMAL_SPEED;
      speedRef.current += (target - speedRef.current) * LERP_FACTOR;

      posRef.current -= speedRef.current * dt;

      // Reset position when we've scrolled one set (1/3 of track)
      const oneSetWidth = track.scrollWidth / 3;
      if (Math.abs(posRef.current) >= oneSetWidth) {
        posRef.current += oneSetWidth;
      }

      track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trackRef, isInView, isHovered, prefersReducedMotion]);
}

/* ─── Main Component ──────────────────────────────────────────────────────── */

export function WebSoftwareMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  /* ── Hover state ────────────────────────────────────────────────── */
  const [isHovered, setIsHovered] = useState(false);

  /* ── JS-driven marquee ──────────────────────────────────────────── */
  useMarqueeEngine(trackRef, isInView, isHovered, prefersReducedMotion);

  /* ── Center-ratio tracking ──────────────────────────────────────── */
  const [centerRatios, setCenterRatios] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const computeCenterRatios = useCallback(() => {
    if (!sectionRef.current) return;
    const sectionRect = sectionRef.current.getBoundingClientRect();
    const sectionCenter = sectionRect.left + sectionRect.width / 2;
    const halfWidth = sectionRect.width / 2;

    const newRatios: number[] = [];
    itemRefs.current.forEach((el) => {
      if (!el) {
        newRatios.push(0.5);
        return;
      }
      const elRect = el.getBoundingClientRect();
      const elCenter = elRect.left + elRect.width / 2;
      const dist = Math.abs(elCenter - sectionCenter);
      const ratio = Math.max(0, 1 - dist / halfWidth);
      newRatios.push(ratio);
    });
    setCenterRatios(newRatios);
  }, []);

  useEffect(() => {
    let raf: number;
    const loop = () => {
      computeCenterRatios();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [computeCenterRatios]);

  /* ── Red motion line ────────────────────────────────────────────── */
  const [motionLinePos, setMotionLinePos] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) return;
    let raf: number;
    const start = performance.now();
    const CYCLE = 6000;
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = (elapsed % CYCLE) / CYCLE;
      setMotionLinePos(progress * 100);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [prefersReducedMotion]);

  /* ── Tripled items for seamless loop ────────────────────────────── */
  const tripled = [...SERVICES, ...SERVICES, ...SERVICES];

  /* ── Reduced-motion fallback ────────────────────────────────────── */
  if (prefersReducedMotion) {
    return (
      <>
        <style>{ribbonStyles}</style>
        <section
          ref={sectionRef}
          className="ws-ribbon-section ws-ribbon-reduced"
          aria-label="Technology capabilities"
        >
          <div className="ws-ribbon-border ws-ribbon-border--top" />
          <div className="ws-ribbon-reduced-scroll">
            {SERVICES.map((item, i) => (
              <RibbonItem key={i} item={item} centerRatio={1} />
            ))}
          </div>
          <div className="ws-ribbon-border ws-ribbon-border--bottom" />
        </section>
      </>
    );
  }

  return (
    <>
      <style>{ribbonStyles}</style>

      <motion.section
        ref={sectionRef}
        className="ws-ribbon-section"
        aria-label="Technology capabilities"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.04, delayChildren: 0.1 },
          },
        }}
      >
        {/* Top border reveal */}
        <motion.div
          className="ws-ribbon-border ws-ribbon-border--top"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
          }}
        />

        {/* Marquee track (JS-driven transform) */}
        <div
          ref={trackRef}
          className="ws-ribbon-track"
        >
          {tripled.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              className="ws-ribbon-item-wrapper"
            >
              <RibbonItem
                item={item}
                centerRatio={centerRatios[i] ?? 0.5}
              />
            </motion.div>
          ))}
        </div>

        {/* Red motion line */}
        <div className="ws-ribbon-motion-line-track">
          <div
            className="ws-ribbon-motion-line-segment"
            style={{
              left: `${motionLinePos}%`,
            }}
          />
        </div>

        {/* Bottom border reveal */}
        <motion.div
          className="ws-ribbon-border ws-ribbon-border--bottom"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
          }}
        />
      </motion.section>
    </>
  );
}

export default WebSoftwareMarquee;

/* ─── Styles ──────────────────────────────────────────────────────────────── */

const ribbonStyles = /* css */ `

/* ── Section ──────────────────────────────────────────────────────────────── */

.ws-ribbon-section {
  position: relative;
  width: 100%;
  background: #ffffff;
  overflow: hidden;
  z-index: 20;
  user-select: none;
  -webkit-user-select: none;

  /* CSS mask for edge fade — solid white bg maintained */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}

/* ── Borders ──────────────────────────────────────────────────────────────── */

.ws-ribbon-border {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(0, 0, 0, 0.07);
  transform-origin: left center;
  z-index: 5;
}

.ws-ribbon-border--top { top: 0; }
.ws-ribbon-border--bottom { bottom: 0; }

/* ── Track ─────────────────────────────────────────────────────────────────── */

.ws-ribbon-track {
  display: flex;
  width: max-content;
  align-items: center;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

/* ── Item wrapper ─────────────────────────────────────────────────────────── */

.ws-ribbon-item-wrapper {
  flex-shrink: 0;
}

/* ── Item ──────────────────────────────────────────────────────────────────── */

.ws-ribbon-item {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 72px;
  padding: 0 28px;
  cursor: default;
  transition:
    opacity 0.15s linear,
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  flex-shrink: 0;
}

/* ── Icon wrap ────────────────────────────────────────────────────────────── */

.ws-ribbon-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
  transition:
    background 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Label ────────────────────────────────────────────────────────────────── */

.ws-ribbon-label {
  position: relative;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  line-height: 1;
  transition:
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ws-ribbon-underline {
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1.5px;
  background: #d62020;
  transform-origin: left center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Separator dot ────────────────────────────────────────────────────────── */

.ws-ribbon-dot {
  color: #d62020;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Red motion line ──────────────────────────────────────────────────────── */

.ws-ribbon-motion-line-track {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  overflow: hidden;
  z-index: 6;
}

.ws-ribbon-motion-line-segment {
  position: absolute;
  top: 0;
  height: 1px;
  width: 120px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #d62020 30%,
    #d62020 70%,
    transparent 100%
  );
  transform: translateX(-50%);
}

/* ── Reduced-motion fallback ──────────────────────────────────────────────── */

.ws-ribbon-reduced {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-mask-image: none;
  mask-image: none;
}

.ws-ribbon-reduced-scroll {
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0 16px;
}

/* ── Mobile ───────────────────────────────────────────────────────────────── */

@media (max-width: 768px) {
  .ws-ribbon-item {
    height: 56px;
    gap: 10px;
    padding: 0 18px;
  }

  .ws-ribbon-icon-wrap {
    width: 30px;
    height: 30px;
  }

  .ws-ribbon-icon-wrap svg {
    width: 14px;
    height: 14px;
  }

  .ws-ribbon-label {
    font-size: 12px;
  }

  .ws-ribbon-dot {
    font-size: 8px;
  }

  .ws-ribbon-section {
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 5%,
      black 95%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 5%,
      black 95%,
      transparent 100%
    );
  }
}

@media (max-width: 480px) {
  .ws-ribbon-item {
    height: 48px;
    gap: 8px;
    padding: 0 14px;
  }

  .ws-ribbon-icon-wrap {
    width: 26px;
    height: 26px;
  }

  .ws-ribbon-icon-wrap svg {
    width: 12px;
    height: 12px;
  }

  .ws-ribbon-label {
    font-size: 11px;
  }
}
`;
