"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import {
  FileText,
  Layers,
  Cloud,
  ClipboardCheck,
  Rocket,
  Headphones,
} from "lucide-react";

/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
interface StepData {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    style?: React.CSSProperties;
  }>;
}

const steps: StepData[] = [
  {
    num: "01",
    title: "PLANNING",
    desc: "We understand your goals, requirements, users and business challenges.",
    icon: FileText,
  },
  {
    num: "02",
    title: "DESIGN",
    desc: "We transform ideas into intuitive UI/UX and clear digital experiences.",
    icon: Layers,
  },
  {
    num: "03",
    title: "DEVELOPMENT",
    desc: "We build scalable, secure and high-performance digital products.",
    icon: Cloud,
  },
  {
    num: "04",
    title: "TESTING",
    desc: "We test functionality, performance, responsiveness and compatibility.",
    icon: ClipboardCheck,
  },
  {
    num: "05",
    title: "LAUNCH",
    desc: "We deploy, configure and prepare your product for real-world use.",
    icon: Rocket,
  },
  {
    num: "06",
    title: "SUPPORT",
    desc: "We provide maintenance, improvements and ongoing technical support.",
    icon: Headphones,
  },
];

/* ═══════════════════════════════════════════════════
   SVG PATH — one continuous journey through all 6 steps
   ViewBox: 0 0 1200 540

   Row 1 icon centres : y = 80    (Planning, Design, Development)
   Middle horizontal  : y = 270
   Row 2 icon centres : y = 460   (Testing, Launch, Support)

   Column centres: x = 200, 600, 1000

   Path traversal:
     Planning(200,80) → Design(600,80) → Development(1000,80)
     → right U-turn via (1110,80)(1110,270) → (1000,270)
     → horizontal left → (200,270)
     → left U-turn via (90,270)(90,460) → (200,460)
     → Testing(200,460) → Launch(600,460) → Support(1000,460)
═══════════════════════════════════════════════════ */
const SVG_VB_W = 1200;
const SVG_VB_H = 540;

const CONNECTOR_PATH = [
  "M 200,80",
  "L 1000,80",
  "C 1110,80 1110,270 1000,270",
  "L 200,270",
  "C 90,270 90,460 200,460",
  "L 1000,460",
].join(" ");

/* Approximate fractional position of each step along the total path.
   Segment lengths (viewBox units):
     Line  200→1000 @y80  : 800
     Curve right U-turn   : ≈300
     Line 1000→200  @y270 : 800
     Curve left U-turn    : ≈300
     Line  200→1000 @y460 : 800
     Total               : ≈3000

   Planning   (200,80)  :    0/3000 = 0.000
   Design     (600,80)  :  400/3000 ≈ 0.133
   Development(1000,80) :  800/3000 ≈ 0.267
   Testing    (200,460) : 2200/3000 ≈ 0.733
   Launch     (600,460) : 2600/3000 ≈ 0.867
   Support    (1000,460): 3000/3000 = 1.000
*/
const STEP_THRESHOLDS = [0.005, 0.133, 0.267, 0.733, 0.867, 0.995];

/* ── Layout constants ─────────────────────────── */
const COL_X_PCT = ["16.67%", "50%", "83.33%"];
const ICON_SIZE = 56;
const ICON_R = ICON_SIZE / 2; // 28

/* Icon CSS top = SVG-centre-y minus icon-radius.
   With preserveAspectRatio="none" and SVG height === container SVG
   area height, 1 viewBox unit = 1 CSS px vertically. */
const ROW1_ICON_TOP = 80 - ICON_R; // 52  → centre at 80 ✓
const ROW2_ICON_TOP = 460 - ICON_R; // 432 → centre at 460 ✓

/* Diagram container height: SVG area (540) + room for bottom row text */
const DIAGRAM_H = 610;

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export function WebSoftwareDevProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const inView = useInView(diagramRef, { once: true, amount: 0.25 });

  /* ── Reduced motion ──────────────────────────── */
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  /* ── Animation progress (0 → 1) ─────────────── */
  const progress = useMotionValue(0);
  const [activeCount, setActiveCount] = useState(0);
  const activeCountRef = useRef(0);

  /* Kick off when section enters viewport */
  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      progress.set(1);
      activeCountRef.current = 6;
      setActiveCount(6);
      return;
    }
    const controls = animate(progress, 1, {
      duration: 4,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [inView, reducedMotion, progress]);

  /* Sync icon activations with path draw progress */
  useMotionValueEvent(progress, "change", (v) => {
    let n = 0;
    for (let i = 0; i < STEP_THRESHOLDS.length; i++) {
      if (v >= STEP_THRESHOLDS[i]) n = i + 1;
    }
    if (n !== activeCountRef.current) {
      activeCountRef.current = n;
      setActiveCount(n);
    }
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-24"
      style={{ padding: "96px 24px 112px" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1240px" }}>
        {/* ── Section Header ──────────────────────────── */}
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ marginBottom: "64px", textAlign: "center" }}
        >
          <span
            style={{
              display: "block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase" as const,
              color: "#999999",
              marginBottom: "14px",
            }}
          >
            OUR DEVELOPMENT PROCESS
          </span>

          <h2
            className="font-heading mb-5"
            style={{
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 400,
              color: "#222222",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            We Build Every Step{" "}
            <span style={{ fontWeight: 700 }}>Carefully</span>
          </h2>
        </motion.div>

        {/* ═══════════════════════════════════════════════
            DESKTOP DIAGRAM — md and above
        ═══════════════════════════════════════════════ */}
        <div
          ref={diagramRef}
          className="hidden md:block relative"
          style={{ height: `${DIAGRAM_H}px` }}
          aria-label="Development process diagram"
        >
          {/* ── SVG connector path ─────────────────── */}
          <svg
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{ height: `${SVG_VB_H}px` }}
            viewBox={`0 0 ${SVG_VB_W} ${SVG_VB_H}`}
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {/* Base track (gray) */}
            <path
              d={CONNECTOR_PATH}
              stroke="#e5e5e5"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Animated red progress line — pathLength drives draw */}
            <motion.path
              d={CONNECTOR_PATH}
              stroke="#d62020"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength: progress }}
            />
          </svg>

          {/* ── Step Nodes (absolutely positioned) ──── */}
          {steps.map((step, idx) => {
            const row = idx < 3 ? 0 : 1;
            const col = idx % 3;
            const Icon = step.icon;
            const topPx = row === 0 ? ROW1_ICON_TOP : ROW2_ICON_TOP;
            const active = idx < activeCount;

            return (
              <div
                key={step.num}
                className="absolute flex flex-col items-center text-center"
                style={{
                  left: COL_X_PCT[col],
                  top: `${topPx}px`,
                  transform: "translateX(-50%)",
                  width: "200px",
                }}
              >
                {/* Icon circle — activates when red line arrives */}
                <div
                  style={{
                    width: `${ICON_SIZE}px`,
                    height: `${ICON_SIZE}px`,
                    borderRadius: "50%",
                    border: `1.5px solid ${active ? "#d62020" : "#dedede"}`,
                    background: active ? "#d62020" : "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    position: "relative",
                    zIndex: 10,
                    transform: active ? "scale(1.05)" : "scale(1)",
                    transition:
                      "background-color 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                    style={{
                      color: active ? "#ffffff" : "#222222",
                      transition: "color 0.35s ease",
                    }}
                  />
                </div>

                {/* Title */}
                <span
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#222222",
                    letterSpacing: "0.04em",
                    marginBottom: "8px",
                  }}
                >
                  {step.title}
                </span>

                {/* Description */}
                <p
                  style={{
                    fontSize: "12.5px",
                    lineHeight: 1.6,
                    color: "#888888",
                    maxWidth: "180px",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════
            MOBILE VERTICAL TIMELINE — below md
        ═══════════════════════════════════════════════ */}
        <div className="md:hidden flex flex-col">
          {steps.map((step, idx) => (
            <MobileStep
              key={step.num}
              step={step}
              idx={idx}
              isLast={idx === steps.length - 1}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   MOBILE STEP — individual viewport tracking
═══════════════════════════════════════════════════ */
function MobileStep({
  step,
  idx,
  isLast,
  reducedMotion,
}: {
  step: StepData;
  idx: number;
  isLast: boolean;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [isActive, setIsActive] = useState(false);
  const Icon = step.icon;

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setIsActive(true);
      return;
    }
    const t = setTimeout(() => setIsActive(true), 350);
    return () => clearTimeout(t);
  }, [inView, reducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? undefined : { opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
      style={{ display: "flex", gap: "20px" }}
    >
      {/* Left: circle + vertical connector */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: `1.5px solid ${isActive ? "#d62020" : "#dddddd"}`,
            background: isActive ? "#d62020" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transform: isActive ? "scale(1.05)" : "scale(1)",
            transition:
              "background-color 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
          }}
        >
          <Icon
            size={18}
            strokeWidth={1.4}
            style={{
              color: isActive ? "#ffffff" : "#333333",
              transition: "color 0.35s ease",
            }}
          />
        </div>

        {/* Vertical connector line */}
        {!isLast && (
          <div
            style={{
              width: "2px",
              flex: 1,
              marginTop: "8px",
              background: "#d62020",
              minHeight: "32px",
              borderRadius: "1px",
            }}
          />
        )}
      </div>

      {/* Right: text content */}
      <div style={{ paddingBottom: isLast ? 0 : "32px" }}>
        <span
          style={{
            display: "block",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#d62020",
            marginBottom: "2px",
          }}
        >
          {step.num}
        </span>
        <span
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#222222",
            marginBottom: "4px",
          }}
        >
          {step.title}
        </span>
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.55,
            color: "#777777",
            margin: 0,
          }}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default WebSoftwareDevProcess;
