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

const projects = [
  {
    id: "01",
    category: "Corporate Website",
    titleLines: ["CORPORATE", "WEBSITE"],
    eyebrow: "SELECTED WORK / 01",
    description:
      "High-performance corporate websites custom built to tell your story, maximize conversions, and load in milliseconds.",
    service: "Web Development",
    focus: "Responsive Layout / Brand Identity",
    deliverable: "Custom Next.js Website",
    bgImage: "/images/services/website-dev.webp",
    cardImage: "/images/services/website_mockup.png",
  },
  {
    id: "02",
    category: "E-commerce Platform",
    titleLines: ["E-COMMERCE", "PLATFORM"],
    eyebrow: "SELECTED WORK / 02",
    description:
      "Fully customized online stores designed for premium product presentation, seamless checkout, and integrated order tracking.",
    service: "Web Development",
    focus: "E-commerce / Shopping Systems",
    deliverable: "Bespoke Online Storefront",
    bgImage: "/images/services/ecommerce_mockup.png",
    cardImage: "/images/services/ecommerce_mockup.png",
  },
  {
    id: "03",
    category: "SaaS Dashboard",
    titleLines: ["SAAS", "DASHBOARD"],
    eyebrow: "SELECTED WORK / 03",
    description:
      "Modern, multi-tenant software-as-a-service interfaces optimized for user activation, clear metrics, and high performance.",
    service: "Software Dev",
    focus: "SaaS Platforms / Analytics",
    deliverable: "Multi-Tenant Platform UI",
    bgImage: "/images/services/saas_mockup.png",
    cardImage: "/images/services/saas_mockup.png",
  },
  {
    id: "04",
    category: "ERP System",
    titleLines: ["ERP", "SYSTEM"],
    eyebrow: "SELECTED WORK / 04",
    description:
      "Unified enterprise dashboards that seamlessly connect sales, inventory, finance, human resources, and business operations.",
    service: "Enterprise Dev",
    focus: "Operations / ERP Solutions",
    deliverable: "Custom ERP Dashboard",
    bgImage: "/images/services/erp.webp",
    cardImage: "/images/services/erp.webp",
  },
  {
    id: "05",
    category: "CRM Platform",
    titleLines: ["CRM", "PLATFORM"],
    eyebrow: "SELECTED WORK / 05",
    description:
      "Custom customer relationship management dashboards tailored to sales pipelines, deal stages, and automatic follow-ups.",
    service: "Software Dev",
    focus: "Sales Pipeline / Automation",
    deliverable: "Bespoke CRM Software",
    bgImage: "/images/services/erp_crm_mockup.png",
    cardImage: "/images/services/erp_crm_mockup.png",
  },
  {
    id: "06",
    category: "Web Application",
    titleLines: ["WEB", "APPLICATION"],
    eyebrow: "SELECTED WORK / 06",
    description:
      "Interactive, custom web applications built with modern tools to automate internal tools and solve complex operational workflows.",
    service: "Web Development",
    focus: "Custom App / Interactive Tools",
    deliverable: "High-Performance Web App",
    bgImage: "/images/services/webapp-dev.webp",
    cardImage: "/images/services/web_app_mockup.png",
  },
  {
    id: "07",
    category: "Mobile Application",
    titleLines: ["MOBILE", "APPLICATION"],
    eyebrow: "SELECTED WORK / 07",
    description:
      "Cross-platform iOS and Android mobile apps designed for rich touch-first experiences and offline capabilities.",
    service: "Mobile Dev",
    focus: "Flutter / Native Mobile Apps",
    deliverable: "iOS & Android Applications",
    bgImage: "/images/services/mobile_mockup.png",
    cardImage: "/images/services/mobile_mockup.png",
  },
  {
    id: "08",
    category: "Custom Business Software",
    titleLines: ["CUSTOM BUSINESS", "SOFTWARE"],
    eyebrow: "SELECTED WORK / 08",
    description:
      "Bespoke backend and systems architecture designed strictly around your business logic, inventory, and automated workflows.",
    service: "Software Dev",
    focus: "Business Logic / Integrations",
    deliverable: "Custom Corporate Software",
    bgImage: "/images/services/custom-software.webp",
    cardImage: "/images/services/custom-software.webp",
  },
];

const AUTOPLAY_MS = 3500;
const CARD_GAP = 16;
const ANIM_DURATION_MS = 700;

function getVisibleCount(): number {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function WebSoftwarePortfolio() {
  const N = projects.length;

  const extended = useMemo(
    () => [...projects, ...projects, ...projects],
    [N],
  );

  const [headIdx, setHeadIdx] = useState(N);
  const activeRealIdx = headIdx % N;
  const activeProject = projects[activeRealIdx];

  const [prevBgReal, setPrevBgReal] = useState<number | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(200);
  const [visibleCount, setVisibleCount] = useState(4);

  const [animated, setAnimated] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const isInViewport = useInView(sectionRef, { amount: 0.15 });

  const [isHovering, setIsHovering] = useState(false);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleVisibility = () => {
      setIsTabActive(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

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

  useEffect(() => {
    if (!animated) return;
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

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  autoRef: useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!isInViewport || isHovering || isDraggingState || !isTabActive) return;
    
    autoRef.current = setTimeout(goNext, AUTOPLAY_MS);
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [headIdx, isInViewport, isHovering, isDraggingState, isTabActive, goNext]);

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

  const trackTranslateX = -(headIdx * (cardWidth + CARD_GAP));

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "88vh" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cinematic Background Crossfade */}
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

      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.52)_100%)]" />

      {/* Main Content Area */}
      <div className="relative z-20 flex flex-col lg:flex-row min-h-[88vh] px-8 md:px-14 lg:px-20 py-14 lg:py-16 gap-10 lg:gap-0">

        {/* Left: Info details */}
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
                  fontSize: "clamp(36px, 3.4vw, 56px)",
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  margin: "18px 0 22px",
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
                GET IN TOUCH
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Infinite card slider */}
        <div className="flex flex-col justify-center lg:w-[64%] transform lg:translate-y-[50px]">
          <div
            ref={sliderRef}
            className="flex items-center overflow-hidden cursor-grab active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
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
                const isFirst = idx === headIdx;
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
                      const offset = idx - headIdx;
                      if (offset > 0 && offset < visibleCount) slide(offset as 1);
                    }}
                  >
                    <img
                      src={proj.cardImage}
                      alt={proj.category}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.055]"
                      loading={idx < N + 4 ? "eager" : "lazy"}
                      draggable={false}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/6 to-transparent" />

                    {isFirst && (
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#d62020]" />
                    )}

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

          {/* Bottom controls */}
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

            <div className="flex-1 h-[1px] bg-white/14 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white/52 rounded-full"
                animate={{ width: `${((activeRealIdx + 1) / N) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

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
