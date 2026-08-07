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
    category: "CUSTOM APPAREL",
    titleLines: ["CUSTOM", "APPAREL"],
    eyebrow: "SELECTED WORK / 01",
    description:
      "Premium custom branded hoodies and t-shirts showcasing high-density typography screen printing and embroidery styling details.",
    service: "Merchandise Design",
    focus: "Apparel Curation / High Density",
    deliverable: "Custom Branded Hoodies & Tees",
    bgImage: "/images/services/corporate-merchandise.webp",
    cardImage: "/images/services/corporate-merchandise.webp",
  },
  {
    id: "02",
    category: "WELCOME KITS",
    titleLines: ["EMPLOYEE", "WELCOME KITS"],
    eyebrow: "SELECTED WORK / 02",
    description:
      "Unified employee welcome kit box layouts featuring leather bound diaries, metallic engraved pens, thermal drinkware, and accessories.",
    service: "Corporate Gifting",
    focus: "Kitting & Assemblies / Placement Guides",
    deliverable: "Employee Welcome Swag Kits",
    bgImage: "/images/services/corporate-stationery.webp",
    cardImage: "/images/services/corporate-stationery.webp",
  },
  {
    id: "03",
    category: "DRINKWARE DESIGN",
    titleLines: ["PREMIUM", "DRINKWARE"],
    eyebrow: "SELECTED WORK / 03",
    description:
      "Modern stainless steel thermos flask and eco-friendly cup curation with minimalist branding and precision laser engraving guides.",
    service: "Swag Design",
    focus: "Drinkware Placement / Laser Engraving",
    deliverable: "Laser Engraved Thermos & Mugs",
    bgImage: "/images/services/picks_bottle.png",
    cardImage: "/images/services/picks_bottle.png",
  },
  {
    id: "04",
    category: "OFFICE SUPPLIES",
    titleLines: ["OFFICE", "DIARIES & PENS"],
    eyebrow: "SELECTED WORK / 04",
    description:
      "Premium corporate diaries showing blind debossing brand layout alongside custom pen packaging and brand presentation boards.",
    service: "Stationery Design",
    focus: "Office Branding / Premium Embossing",
    deliverable: "Debossed Leather Diaries & Pens",
    bgImage: "/images/services/corporate-stationery.webp",
    cardImage: "/images/services/corporate-stationery.webp",
  },
  {
    id: "05",
    category: "EVENT SWAG",
    titleLines: ["LANYARDS &", "ID CARDS"],
    eyebrow: "SELECTED WORK / 05",
    description:
      "Event identity pack with branded satin lanyards, custom die-cut matte passes, keychains, and unified logo sticker sheets.",
    service: "Event Merchandise",
    focus: "Identity Swag / Event Branding",
    deliverable: "Custom Lanyards, Badges & Stickers",
    bgImage: "/images/services/id-cards.webp",
    cardImage: "/images/services/id-cards.webp",
  }
];

export default function MerchandisePortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const currentProject = useMemo(() => projects[activeIndex], [activeIndex]);

  const slideNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") slideNext();
      if (e.key === "ArrowLeft") slidePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slideNext, slidePrev]);

  // Framer Motion Variants for sliding/fading elements
  const sliderVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#FAF9F6] text-[#111111] overflow-hidden flex flex-col justify-between py-20 px-6 md:px-12 lg:px-24"
    >
      {/* ── BACKGROUND KINETIC CINEMATIC LAYER ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none transition-all duration-[1000ms] ease-in-out">
        {/* Fullscreen blurred backdrop image */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentProject.bgImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.08, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center mix-blend-multiply"
            style={{ backgroundImage: `url('${currentProject.bgImage}')` }}
          />
        </AnimatePresence>
        
        {/* Soft radial overlay shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/15" />
      </div>

      <div className="max-w-[1400px] mx-auto z-10 w-full flex flex-col justify-between flex-grow">
        
        {/* ── TOP NAV HEADER / METRIC INDEX ── */}
        <div className="flex justify-between items-center border-b border-zinc-200/60 pb-6 mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase">SELECTED WORK</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
            <span className="text-xs font-mono font-bold text-zinc-400">
              {currentProject.id} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hidden md:block">
            VIRRAT GLOBAL SWAG STUDIOS
          </span>
        </div>

        {/* ── CENTRAL CONTENT MATRIX (SPLIT SCREEN) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center flex-grow">
          
          {/* LEFT SIDE: Project Details & Specs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center min-h-[360px] lg:min-h-[480px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentProject.id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={textVariants}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[#d62020] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                    {currentProject.eyebrow}
                  </span>
                  
                  {/* Huge Editorial Headings */}
                  <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-heading font-black tracking-tighter uppercase leading-[0.9] text-zinc-900 mb-6 break-words">
                    {currentProject.titleLines.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < currentProject.titleLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>

                  <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed max-w-[42ch]">
                    {currentProject.description}
                  </p>
                </div>

                {/* Spec Sheets (Border Rows) */}
                <div className="flex flex-col gap-3 pt-6 border-t border-zinc-200/80 mt-2">
                  <div className="flex justify-between text-xs py-1 border-b border-zinc-100 pb-2">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider">Service Category</span>
                    <span className="font-bold text-[#111111] uppercase tracking-wider">{currentProject.service}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-zinc-100 pb-2">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider">Design Focus</span>
                    <span className="font-bold text-[#111111] uppercase tracking-wider">{currentProject.focus}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider">Main Deliverables</span>
                    <span className="font-bold text-[#d62020] uppercase tracking-wider">{currentProject.deliverable}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Interactive Portrait Card (7 cols) */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] w-full">
            <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-visible">
              
              {/* Decorative print/calibration guides behind the portrait frame */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-zinc-200/40 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-zinc-200/40 pointer-events-none" />
              
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                <motion.div
                  key={currentProject.id}
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 rounded-[32px] overflow-hidden border border-zinc-200 bg-zinc-50 shadow-2xl shadow-black/5 flex items-center justify-center cursor-default select-none"
                >
                  <img
                    src={currentProject.cardImage}
                    alt={currentProject.category}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-103"
                    loading="lazy"
                  />
                  
                  {/* Floating Action Badge overlay */}
                  <Link 
                    href="/contact"
                    className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-white text-[#111111] border border-zinc-100 hover:bg-[#d62020] hover:text-white transition-all shadow-lg flex items-center justify-center group"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR: SLIDER CONTROLS ── */}
        <div className="flex justify-between items-center border-t border-zinc-200/60 pt-6 mt-8 md:mt-12">
          <div className="flex gap-2">
            <button
              onClick={slidePrev}
              className="w-12 h-12 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center transition-all bg-white hover:bg-black hover:text-white"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={slideNext}
              className="w-12 h-12 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center transition-all bg-white hover:bg-black hover:text-white"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-1.5">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-[#d62020]" : "w-1.5 bg-zinc-200"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
