"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* ─── DATA ─────────────────────────────────────────────────── */

const TOP_SLIDER_IMAGES = [
  {
    src: "/portfolio/portfolio_logo_branding_1784618160119.png",
    title: "Brand Identity System",
    tag: "Logo & Branding",
  },
  {
    src: "/portfolio/portfolio_luxury_packaging_1784618217548.png",
    title: "Luxury Packaging Design",
    tag: "Branding & Packaging",
  },
  {
    src: "/portfolio/portfolio_business_cards_1784618183141.png",
    title: "Premium Print Collateral",
    tag: "Business Cards & Stationery",
  },
  {
    src: "/portfolio/portfolio_web_ui_ux_1784618195771.png",
    title: "SaaS Dashboard UI/UX",
    tag: "Web UI/UX Design",
  },
  {
    src: "/portfolio/portfolio_digital_marketing_1784618230107.png",
    title: "Performance Marketing Suite",
    tag: "Digital Marketing",
  },
  {
    src: "/portfolio/portfolio_ai_automation_1784618242113.png",
    title: "AI Workflow Automation",
    tag: "AI & Automation",
  },
];

const BOTTOM_SLIDER_IMAGES = [
  {
    src: "/portfolio/portfolio_brochure_catalogue_1784618255473.png",
    title: "Tri-Fold Brochure & Catalogue",
    tag: "Brochure & Catalogue",
  },
  {
    src: "/portfolio/portfolio_social_media_1784618281669.png",
    title: "Social Media Campaign",
    tag: "Social Media Creatives",
  },
  {
    src: "https://virratglobal.com/wp-content/uploads/2025/02/1970-x-1624-2.webp",
    title: "Food Industry Branding",
    tag: "Packaging & Printing",
  },
  {
    src: "https://virratglobal.com/wp-content/uploads/2025/02/1970-x-1624-scaled.webp",
    title: "Jewellery Brand Identity",
    tag: "Logo & Branding",
  },
  {
    src: "https://virratglobal.com/wp-content/uploads/2025/03/edu.webp",
    title: "Education Platform Design",
    tag: "Web & Digital Design",
  },
  {
    src: "https://virratglobal.com/wp-content/uploads/2024/09/1.webp",
    title: "Fashion Brand Campaign",
    tag: "Branding & Marketing",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function Portfolio() {
  const sectionRef     = useRef<HTMLDivElement>(null);
  const heroRef        = useRef<HTMLDivElement>(null);
  const leftWordRef    = useRef<HTMLSpanElement>(null);
  const rightWordRef   = useRef<HTMLSpanElement>(null);
  const floatCard1Ref  = useRef<HTMLDivElement>(null);
  const floatCard2Ref  = useRef<HTMLDivElement>(null);
  const badgeRef       = useRef<HTMLDivElement>(null);
  const blob1Ref       = useRef<HTMLDivElement>(null);
  const blob2Ref       = useRef<HTMLDivElement>(null);
  const subtitleRef    = useRef<HTMLParagraphElement>(null);
  const slidersRef     = useRef<HTMLDivElement>(null);
  const topTrackRef    = useRef<HTMLDivElement>(null);
  const bottomTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Only apply GSAP timeline pin for screens >= 768px (Desktop / Tablet)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      /* 0→0.5  Title horizontal split */
      tl.to(leftWordRef.current,  { x: "-130%", ease: "none" }, 0);
      tl.to(rightWordRef.current, { x: "130%",  ease: "none" }, 0);

      /* 0→0.5  Floating cards drift apart */
      tl.to(floatCard1Ref.current, { x: "-40%", y: "18%", ease: "none" }, 0);
      tl.to(floatCard2Ref.current, { x: "40%",  y: "-18%", ease: "none" }, 0);

      /* 0→0.5  Badge & blobs drift */
      tl.to(badgeRef.current, { scale: 0.6, opacity: 0, ease: "none" }, 0);
      tl.to(blob1Ref.current, { scale: 1.25, opacity: 0.3, ease: "none" }, 0);
      tl.to(blob2Ref.current, { scale: 1.2,  opacity: 0.2, ease: "none" }, 0);

      /* 0→0.5  Subtitle darkens */
      tl.to(subtitleRef.current, { color: "#111111", ease: "none" }, 0);

      /* 0.5→0.72  Hero overlay slides up & out */
      tl.to(heroRef.current, { yPercent: -100, ease: "power2.inOut" }, 0.5);

      /* 0.65→1  Sliders reveal */
      tl.fromTo(
        slidersRef.current,
        { yPercent: 55, opacity: 0, scale: 0.93, filter: "blur(12px)" },
        { yPercent: 0,  opacity: 1, scale: 1,    filter: "blur(0px)", ease: "power3.out" },
        0.65
      );

      /* Continuous Marquee Track Animations */
      gsap.to(topTrackRef.current, { xPercent: -50, repeat: -1, duration: 38, ease: "none" });
      gsap.set(bottomTrackRef.current, { xPercent: -50 });
      gsap.to(bottomTrackRef.current,  { xPercent: 0,   repeat: -1, duration: 42, ease: "none" });
    });

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-white py-16 md:py-24"
    >
      {/* ═══════════════════════════════════════════════════════
          DESKTOP & TABLET VIEW (>= 768px)
      ═══════════════════════════════════════════════════════ */}
      <div className="hidden md:block w-full h-screen relative">
        
        {/* LAYER 1 · HERO OVERLAY */}
        <div
          ref={heroRef}
          className="absolute inset-0 z-20 w-full h-full overflow-hidden will-change-transform bg-white"
        >
          {/* Background Blobs */}
          <div
            ref={blob1Ref}
            className="absolute will-change-transform pointer-events-none"
            style={{
              width: "68vw",
              height: "68vw",
              top: "50%",
              left: "38%",
              transform: "translate(-20%, -50%)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 45% 45%, rgba(179,202,245,0.52) 0%, rgba(200,218,252,0.28) 40%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />
          <div
            ref={blob2Ref}
            className="absolute will-change-transform pointer-events-none"
            style={{
              width: "38vw",
              height: "52vw",
              bottom: "-8vw",
              left: "-6vw",
              borderRadius: "50% 50% 0 0",
              background:
                "radial-gradient(ellipse at 55% 70%, rgba(179,202,245,0.45) 0%, rgba(200,218,252,0.22) 50%, transparent 75%)",
              filter: "blur(28px)",
            }}
          />

          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-14 py-6 md:py-7">
            <span className="inline-flex items-center text-[10px] font-black tracking-[0.22em] text-[#D62020] uppercase bg-white/80 backdrop-blur-sm border border-[#D62020]/25 px-4 py-1.5 rounded-full">
              OUR PORTFOLIO
            </span>
            <span className="text-[9px] font-mono font-bold text-[#BBBBBB] tracking-[0.2em] uppercase">
              VIRRAT GLOBAL SHOWCASE
            </span>
          </div>

          {/* Giant Editorial Title */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <span
              ref={leftWordRef}
              className="absolute font-heading font-black text-[#111111] leading-none tracking-tighter will-change-transform block"
              style={{
                fontSize: "clamp(6rem, 15.5vw, 17rem)",
                top: "14%",
                left: 0,
                whiteSpace: "nowrap",
              }}
            >
              Featured
            </span>

            <span
              ref={rightWordRef}
              className="absolute font-heading font-black text-[#D62020] leading-none tracking-tighter will-change-transform block"
              style={{
                fontSize: "clamp(6rem, 15.5vw, 17rem)",
                top: "36%",
                left: "38%",
                whiteSpace: "nowrap",
              }}
            >
              Portfolio.
            </span>
          </div>

          {/* Floating Image Card 1: Bottom-Left */}
          <div
            ref={floatCard1Ref}
            className="absolute z-20 will-change-transform"
            style={{
              left: "7%",
              bottom: "8%",
              width: "clamp(150px, 16vw, 240px)",
            }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "4/3",
                borderRadius: "20px",
                boxShadow: "0 20px 55px rgba(0,0,0,0.10)",
                border: "1px solid rgba(255,255,255,0.85)",
              }}
            >
              <Image
                src="https://virratglobal.com/wp-content/uploads/2025/02/1970-x-1624-scaled.webp"
                alt="Jewellery branding project"
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating Image Card 2: Top-Right */}
          <div
            ref={floatCard2Ref}
            className="absolute z-20 will-change-transform"
            style={{
              right: "8%",
              top: "8%",
              width: "clamp(120px, 13vw, 190px)",
            }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "3/4",
                borderRadius: "16px",
                boxShadow: "0 16px 45px rgba(0,0,0,0.12)",
                border: "1px solid rgba(255,255,255,0.85)",
              }}
            >
              <Image
                src="https://virratglobal.com/wp-content/uploads/2025/02/1970-x-1406-3.webp"
                alt="Healthcare portfolio"
                fill
                sizes="190px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Subtitle & CTA Stack */}
          <div
            className="absolute z-30 flex flex-col items-start gap-5"
            style={{
              left: "55%",
              top: "calc(36% + clamp(5rem, 15.5vw, 17rem) + 75px)",
              maxWidth: "clamp(260px, 35vw, 480px)",
            }}
          >
            <p
              ref={subtitleRef}
              className="m-0 text-sm sm:text-base leading-relaxed font-medium transition-colors duration-75"
              style={{ color: "#B8B8B8" }}
            >
              Explore selected branding, printing, digital marketing, software, AI
              automation, and creative projects crafted for modern businesses.
            </p>

            <div className="flex items-center gap-5 mt-2">
              <div
                ref={badgeRef}
                className="relative flex-shrink-0 will-change-transform flex items-center justify-center bg-white"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
                }}
              >
                <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#D62020] animate-[spin_14s_linear_infinite]" />
                <ArrowDown className="w-4 h-4 text-[#D62020] relative z-10" strokeWidth={2.5} />
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#111111] hover:bg-[#D62020] text-white text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 shadow-md hover:shadow-[0_8px_28px_rgba(214,32,32,0.28)] transform hover:-translate-y-0.5 pointer-events-auto"
              >
                Start your project
                <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-14 pb-6 md:pb-7">
            <span className="text-[10px] font-mono text-[#DDDDDD] tracking-widest uppercase">
              VIRRAT GLOBAL · EST. 2020
            </span>
            <span className="text-[10px] font-mono text-[#DDDDDD] tracking-widest uppercase">
              SELECTED WORKS 2024–25
            </span>
          </div>
        </div>

        {/* LAYER 2 · MARQUEE SLIDERS */}
        <div
          ref={slidersRef}
          className="absolute inset-0 z-10 flex flex-col justify-center gap-6 md:gap-8 opacity-0 will-change-transform pointer-events-auto bg-white"
        >
          <div className="w-full overflow-hidden">
            <div
              ref={topTrackRef}
              className="flex gap-6 md:gap-8 will-change-transform shrink-0"
              style={{ width: "max-content" }}
            >
              {[...TOP_SLIDER_IMAGES, ...TOP_SLIDER_IMAGES, ...TOP_SLIDER_IMAGES].map((img, idx) => (
                <div
                  key={`top-${idx}`}
                  className="relative shrink-0 group overflow-hidden"
                  style={{
                    width: "clamp(280px, 32vw, 480px)",
                    aspectRatio: "16/10",
                    borderRadius: 24,
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="480px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-5 left-5 right-5 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="block text-[10px] font-bold text-[#D62020] uppercase tracking-[0.16em] mb-1.5">{img.tag}</span>
                    <p className="m-0 text-sm font-bold font-heading text-white leading-snug">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <div
              ref={bottomTrackRef}
              className="flex gap-6 md:gap-8 will-change-transform shrink-0"
              style={{ width: "max-content" }}
            >
              {[...BOTTOM_SLIDER_IMAGES, ...BOTTOM_SLIDER_IMAGES, ...BOTTOM_SLIDER_IMAGES].map((img, idx) => (
                <div
                  key={`bot-${idx}`}
                  className="relative shrink-0 group overflow-hidden"
                  style={{
                    width: "clamp(280px, 32vw, 480px)",
                    aspectRatio: "16/10",
                    borderRadius: 24,
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="480px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-5 left-5 right-5 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="block text-[10px] font-bold text-[#D62020] uppercase tracking-[0.16em] mb-1.5">{img.tag}</span>
                    <p className="m-0 text-sm font-bold font-heading text-white leading-snug">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════
          MOBILE VIEW (< 768px): FULLY OPTIMIZED EDITORIAL LAYOUT
      ═══════════════════════════════════════════════════════ */}
      <div className="block md:hidden w-full py-20 px-5 bg-white relative">
        <style>{`
          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0px) rotate(-6deg); }
            50% { transform: translateY(-8px) rotate(-4deg); }
          }
          @keyframes subtleFloatRight {
            0%, 100% { transform: translateY(0px) rotate(6deg); }
            50% { transform: translateY(-8px) rotate(8deg); }
          }
          .animate-float-left { animation: subtleFloat 5s ease-in-out infinite; }
          .animate-float-right { animation: subtleFloatRight 6s ease-in-out infinite; }
        `}</style>

        {/* 1. TOP CENTER PORTFOLIO BADGE */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center text-[10px] font-black tracking-[0.22em] text-[#D62020] uppercase bg-white border border-[#D62020]/30 px-4 py-1.5 rounded-full shadow-xs">
            OUR PORTFOLIO
          </span>
        </div>

        {/* 2. FLOATING IMAGE 1: ABOVE TITLE */}
        <div className="flex justify-start pl-4 mb-4">
          <div
            className="relative w-[150px] aspect-[4/3] rounded-[16px] overflow-hidden shadow-lg border border-white animate-float-left"
          >
            <Image
              src="https://virratglobal.com/wp-content/uploads/2025/02/1970-x-1624-scaled.webp"
              alt="Jewellery branding project"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. CENTERED STACKED EDITORIAL TYPOGRAPHY */}
        <div className="text-center my-6 select-none">
          <h2 className="font-heading font-black text-[#111111] text-[64px] sm:text-[72px] leading-[0.95] tracking-tight block mb-5">
            Featured
          </h2>
          <h2 className="font-heading font-black text-[#D62020] text-[72px] sm:text-[80px] leading-[0.95] tracking-tight block mb-5">
            Portfolio.
          </h2>
        </div>

        {/* 4. SUBTITLE & CTA */}
        <div className="text-center max-w-[90%] mx-auto mt-6">
          <p className="text-sm text-[#666666] font-body leading-relaxed mb-6">
            Explore selected branding, printing, digital marketing, software, AI automation, and creative projects crafted for modern businesses.
          </p>

          <div className="flex justify-center mb-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D62020] text-white text-[11px] font-bold uppercase tracking-wider w-full sm:w-auto shadow-md shadow-red-600/20"
            >
              Start your project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5. FLOATING IMAGE 2: BELOW SUBTITLE */}
        <div className="flex justify-end pr-4 mt-2">
          <div
            className="relative w-[140px] aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg border border-white animate-float-right"
          >
            <Image
              src="https://virratglobal.com/wp-content/uploads/2025/02/1970-x-1406-3.webp"
              alt="Healthcare portfolio"
              fill
              sizes="140px"
              className="object-cover"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
