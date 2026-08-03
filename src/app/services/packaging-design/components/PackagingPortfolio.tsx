"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — append an object here to add a new project. Nothing else changes.
// bgImage  → fills the full cinematic section background when this card is active
// cardImage → image inside the portrait card on the right
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    category: "PRODUCT PACKAGING",
    titleLines: ["PRODUCT", "PACKAGING"],
    eyebrow: "SELECTED WORK / 01",
    description:
      "Premium skincare packaging set showing box, bottle and jar arranged in a high-end luxury studio campaign shot.",
    service: "Packaging Design",
    focus: "Skincare Set / Brand Identity",
    deliverable: "Print-Ready Boxes & Labels",
    bgImage: "/images/services/packaging.webp",
    cardImage: "/images/services/picks_jar.png",
  },
  {
    id: "02",
    category: "LABEL DESIGN",
    titleLines: ["LABEL", "DESIGN"],
    eyebrow: "SELECTED WORK / 02",
    description:
      "Premium amber glass bottle mockup. Focuses clearly on custom label typography, sophisticated layout and printing finishes.",
    service: "Packaging Design",
    focus: "Label Design / Custom Die-Cut",
    deliverable: "Print-Ready Die-Cut Labels",
    bgImage: "/images/services/picks_nature.png",
    cardImage: "/images/services/picks_bottle.png",
  },
  {
    id: "03",
    category: "BOX & CARTON",
    titleLines: ["BOX & CARTON", "DESIGN"],
    eyebrow: "SELECTED WORK / 03",
    description:
      "Premium organic food carton package showcasing the flat unfolded dieline layout with grid measurements alongside the final 3D assembled carton.",
    service: "Packaging Design",
    focus: "Dieline Layout / Structural Design",
    deliverable: "Print-Ready Dieline & Carton",
    bgImage: "/images/services/cereal_box_dieline.png",
    cardImage: "/images/services/cereal_box_portrait.png",
  },
  {
    id: "04",
    category: "FOOD & BEVERAGE",
    titleLines: ["FOOD &", "BEVERAGE"],
    eyebrow: "SELECTED WORK / 04",
    description:
      "Modern premium beverage packaging set featuring individual custom cans, bottles and unified secondary carrier boxes.",
    service: "Packaging Design",
    focus: "FMCG / Shelf Placement",
    deliverable: "Print-Ready Beverage Cans",
    bgImage: "/images/services/picks_pink.png",
    cardImage: "/images/services/virrat_craft_can.png",
  },
  {
    id: "05",
    category: "COSMETIC PACKAGING",
    titleLines: ["COSMETIC", "PACKAGING"],
    eyebrow: "SELECTED WORK / 05",
    description:
      "Luxury cosmetics line showing jar, serum container and outer carton. Elegant beauty branding with soft studio lighting.",
    service: "Packaging Design",
    focus: "Brand Identity / Premium Finishes",
    deliverable: "Cosmetic Mockups & Dielines",
    bgImage: "/images/services/packaging.webp",
    cardImage: "/images/services/picks_jar.png",
  },
  {
    id: "06",
    category: "POUCH PACKAGING",
    titleLines: ["POUCH", "PACKAGING"],
    eyebrow: "SELECTED WORK / 06",
    description:
      "Stand-up snack/coffee pouch design using matte materials, zipper detailing and front-and-back branding layout.",
    service: "Packaging Design",
    focus: "Flexible Formats / Retail Pouches",
    deliverable: "Print-Ready Pouch Dieline",
    bgImage: "/images/services/picks_pouch.png",
    cardImage: "/images/services/picks_pouch.png",
  },
  {
    id: "07",
    category: "E-COMMERCE PACKAGING",
    titleLines: ["E-COMMERCE", "PACKAGING"],
    eyebrow: "SELECTED WORK / 07",
    description:
      "Premium shipping unboxing kit with custom mailer box, tissue paper linings, branded stickers, and elegant typography detail.",
    service: "Packaging Design",
    focus: "Unboxing Experience / D2C Kit",
    deliverable: "Branded Mailer Box Layouts",
    bgImage: "/images/services/picks_arch.png",
    cardImage: "/images/services/picks_arch.png",
  },
  {
    id: "08",
    category: "CUP PRINTING",
    titleLines: ["CUP", "PRINTING"],
    eyebrow: "SELECTED WORK / 08",
    description:
      "Custom branded paper cups in multiple retail sizes, optimized for cafe branding, high-quality printing, and heat resistance.",
    service: "Packaging Design",
    focus: "Cup Layout / Custom Print",
    deliverable: "Print-Ready Cup Templates",
    bgImage: "/images/services/picks_hand.png",
    cardImage: "/images/services/picks_hand.png",
  },
  {
    id: "09",
    category: "LUXURY PACKAGING",
    titleLines: ["LUXURY", "PACKAGING"],
    eyebrow: "SELECTED WORK / 09",
    description:
      "Rigid luxury gift box packaging displaying the technical dieline file next to the finished physical box complete with gold foil stamping and ribbon.",
    service: "Packaging Design",
    focus: "Foil Stamping / Embossing Details",
    deliverable: "Rigid Box Print & Dielines",
    bgImage: "/images/services/luxury_box_dieline.png",
    cardImage: "/images/services/luxury_box_portrait.png",
  },
  {
    id: "10",
    category: "BEVERAGE CAN",
    titleLines: ["BEVERAGE", "CAN DESIGN"],
    eyebrow: "SELECTED WORK / 10",
    description:
      "360° craft soda can design utilizing bold colors, custom illustrations, and detailed print-ready specifications.",
    service: "Packaging Design",
    focus: "360° Can Graphics / Dielines",
    deliverable: "Can Wrap Artwork Files",
    bgImage: "/images/services/nano_banana_bg.png",
    cardImage: "/images/services/nano_banana_can.png",
  },
  {
    id: "11",
    category: "STICKER DESIGN",
    titleLines: ["STICKER", "DESIGN"],
    eyebrow: "SELECTED WORK / 11",
    description:
      "Custom branded sticker collections and vinyl sheet design showing applications onto boxes, bags and retail envelopes.",
    service: "Packaging Design",
    focus: "Vinyl Stickers / Label Accents",
    deliverable: "Custom Sticker Sheet Files",
    bgImage: "/images/services/sticker_sheet_bg.png",
    cardImage: "/images/services/sticker_sheet_portrait.png",
  },
  {
    id: "12",
    category: "3D MOCKUP / PRINT READY",
    titleLines: ["3D MOCKUP &", "PRINT READY"],
    eyebrow: "SELECTED WORK / 12",
    description:
      "High-resolution craft soda can mockup next to print-ready dielines and color targets, showing full layout accuracy.",
    service: "Packaging Design",
    focus: "Can Dieline / 3D Packaging",
    deliverable: "Print-Ready PDF + 3D Mockup",
    bgImage: "/images/services/zestify_bg.png",
    cardImage: "/images/services/zestify_can.png",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const AUTOPLAY_MS = 3500;
const CARD_GAP = 16;
const ANIM_DURATION_MS = 700;

function getVisibleCount(): number {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function PackagingPortfolio() {
  const N = projects.length;

  // Triplicate for seamless infinite loop (12 × 3 = 36 elements)
  const extended = useMemo(
    () => [...projects, ...projects, ...projects],
    [],
  );

  // Track the "head" index into `extended`. Start in the middle copy.
  const [headIdx, setHeadIdx] = useState(N);
  // Which real project (0-based) is logically "active" (first visible)
  const activeRealIdx = headIdx % N;
  const activeProject = projects[activeRealIdx];

  // Background crossfade
  const [prevBgReal, setPrevBgReal] = useState<number | null>(null);

  // Card sizing
  const sliderRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(200);
  const [visibleCount, setVisibleCount] = useState(4);

  // CSS transition on/off for silent teleport
  const [animated, setAnimated] = useState(true);

  // Viewport tracking
  const sectionRef = useRef<HTMLElement>(null);
  const isInViewport = useInView(sectionRef, { amount: 0.15 });

  // Hover / drag / active tab states
  const [isHovering, setIsHovering] = useState(false);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  // Tab visibility listener
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabActive(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // ── Size calculation ──────────────────────────────────────────────────────
  useEffect(() => {
    const measure = () => {
      if (!sliderRef.current) return;
      const vis = getVisibleCount();
      setVisibleCount(vis);
      const w = sliderRef.current.offsetWidth;
      setCardWidth(Math.floor((w - CARD_GAP * (vis - 1)) / vis));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // ── Navigation ────────────────────────────────────────────────────────────
  const slide = useCallback(
    (direction: 1 | -1) => {
      const next = headIdx + direction;
      setPrevBgReal(headIdx % N);
      setAnimated(true);
      setHeadIdx(next);
    },
    [headIdx, N],
  );

  const goNext = useCallback(() => slide(1), [slide]);
  const goPrev = useCallback(() => slide(-1), [slide]);

  // ── Infinite loop — silent teleport after each slide animation ────────────
  useEffect(() => {
    if (!animated) return;
    // After animation finishes, jump silently if we've drifted into clones
    const t = setTimeout(() => {
      if (headIdx >= N * 2) {
        setAnimated(false);
        setHeadIdx(N + (headIdx % N));
      } else if (headIdx < N) {
        setAnimated(false);
        setHeadIdx(N + ((headIdx + N) % N));
      }
    }, ANIM_DURATION_MS + 60);
    return () => clearTimeout(t);
  }, [headIdx, N, animated]);

  // Re-enable animation on the frame after a silent jump
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  // ── Autoplay ──────────────────────────────────────────────────────────────
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!isInViewport || isHovering || isDraggingState || !isTabActive) return;
    
    autoRef.current = setTimeout(goNext, AUTOPLAY_MS);
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [headIdx, isInViewport, isHovering, isDraggingState, isTabActive, goNext]);

  // ── Drag / swipe ─────────────────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
    setIsDraggingState(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsDraggingState(false);
    const delta = dragStartX.current - e.clientX;
    if (delta > 50) goNext();
    else if (delta < -50) goPrev();
  };

  // ── Track transform ───────────────────────────────────────────────────────
  const trackTranslateX = -(headIdx * (cardWidth + CARD_GAP));

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "88vh" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* ── CINEMATIC BACKGROUND ──────────────────────────────────────────── */}
      <AnimatePresence>
        {prevBgReal !== null && (
          <motion.div
            key={`bg-prev-${prevBgReal}`}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${projects[prevBgReal].bgImage})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            onAnimationComplete={() => setPrevBgReal(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        key={`bg-${activeRealIdx}`}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${activeProject.bgImage})` }}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/54 z-10" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.42)_100%)]" />

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col lg:flex-row min-h-[88vh] px-8 md:px-14 lg:px-20 py-14 lg:py-16 gap-10 lg:gap-0">

        {/* ── LEFT: Project info ── */}
        <div className="flex flex-col justify-center lg:w-[36%] lg:pr-12 shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${activeProject.id}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.48, ease: "easeOut" }}
              className="flex flex-col gap-5"
            >
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.70)",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                {activeProject.eyebrow}
              </p>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(42px, 3.8vw, 64px)",
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  margin: "22px 0 26px",
                }}
              >
                {activeProject.titleLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </p>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.72)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  maxWidth: "390px",
                }}
              >
                {activeProject.description}
              </p>

              <div
                className="flex flex-col gap-2.5 border-t pt-4"
                style={{ borderColor: "rgba(255, 255, 255, 0.20)" }}
              >
                {[
                  { label: "SERVICE",     value: activeProject.service },
                  { label: "FOCUS",       value: activeProject.focus },
                  { label: "DELIVERABLE", value: activeProject.deliverable },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-5">
                    <span
                      style={{
                        color: "rgba(255, 255, 255, 0.60)",
                        fontSize: "10px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        width: "96px",
                        flexShrink: 0,
                        paddingTop: "2px",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        color: "rgba(255, 255, 255, 0.95)",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-1 inline-flex items-center gap-2 group w-fit border-b pb-1 hover:border-white/70 transition-all duration-300"
                style={{
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  borderColor: "rgba(255, 255, 255, 0.28)",
                }}
              >
                VIEW PROJECT
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── RIGHT: 4-card infinite slider + nav ── */}
        <div className="flex flex-col justify-center lg:w-[64%] transform lg:translate-y-[50px]">

          {/* Slider viewport */}
          <div
            ref={sliderRef}
            className="flex items-center overflow-hidden cursor-grab active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {/* Sliding track — triplicated array */}
            <div
              className="flex items-center"
              style={{
                gap: CARD_GAP,
                transform: `translateX(${trackTranslateX}px)`,
                transition: animated
                  ? `transform ${ANIM_DURATION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`
                  : "none",
                willChange: "transform",
              }}
            >
              {extended.map((proj, idx) => {
                const isFirst = idx === headIdx; // first visible = active
                return (
                  <div
                    key={`card-${idx}`}
                    className="relative overflow-hidden rounded-[18px] shrink-0 select-none group/card"
                    style={{
                      width: cardWidth,
                      height: Math.round(cardWidth * 1.38),
                      opacity: isFirst ? 1 : 0.84,
                      transform: `scale(${isFirst ? 1 : 0.965})`,
                      transition: "opacity 420ms ease, transform 420ms ease",
                    }}
                    onClick={() => {
                      // Click visible card to jump to it
                      const offset = idx - headIdx;
                      if (offset > 0 && offset < visibleCount) slide(offset as 1);
                    }}
                  >
                    {/* Card image */}
                    <img
                      src={proj.cardImage}
                      alt={proj.category}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.055]"
                      loading={idx < N + 4 ? "eager" : "lazy"}
                      draggable={false}
                    />

                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/6 to-transparent" />

                    {/* Active indicator dot */}
                    {isFirst && (
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#d62020]" />
                    )}

                    {/* Card label */}
                    <div className="absolute bottom-0 left-0 right-0 p-3.5">
                      <p
                        className="font-bold tracking-[0.3em] mb-0.5"
                        style={{
                          color: "rgba(255, 255, 255, 0.55)",
                          fontSize: "8px",
                        }}
                      >
                        {proj.id}
                      </p>
                      <p
                        className="font-black tracking-tight uppercase leading-snug"
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontSize: "10px",
                        }}
                      >
                        {proj.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Bottom navigation ── */}
          <div className="flex items-center gap-4 mt-7">
            <button
              onClick={goPrev}
              aria-label="Previous project"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/55 hover:text-white hover:border-white/48 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next project"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/55 hover:text-white hover:border-white/48 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Progress bar */}
            <div className="flex-1 h-[1px] bg-white/14 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white/52 rounded-full"
                animate={{ width: `${((activeRealIdx + 1) / N) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Counter */}
            <span className="text-white/42 text-[11px] font-bold tracking-[0.2em] tabular-nums">
              {String(activeRealIdx + 1).padStart(2, "0")} /{" "}
              {String(N).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
