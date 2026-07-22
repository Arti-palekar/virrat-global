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
    // Premium ecommerce web dev — curated Unsplash
    src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=90",
    title: "Ecommerce Web Platform",
    tag: "Web Development",
  },
  {
    // Print design — flyers/posters — curated Unsplash
    src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=90",
    title: "Premium Print Design",
    tag: "Printing & Stationery",
  },
  {
    // Admin / SaaS dashboard — curated Unsplash
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=90",
    title: "SaaS Admin Dashboard",
    tag: "Custom Software",
  },
  {
    // ID cards / corporate printing — curated Unsplash
    src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=90",
    title: "Corporate ID & Stationery",
    tag: "Printing Portfolio",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function Portfolio() {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const heroRef       = useRef<HTMLDivElement>(null);
  const leftWordRef   = useRef<HTMLSpanElement>(null);
  const rightWordRef  = useRef<HTMLSpanElement>(null);
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);
  const badgeRef      = useRef<HTMLDivElement>(null);
  const blob1Ref      = useRef<HTMLDivElement>(null);
  const blob2Ref      = useRef<HTMLDivElement>(null);
  const subtitleRef   = useRef<HTMLParagraphElement>(null);
  const slidersRef    = useRef<HTMLDivElement>(null);
  const topTrackRef   = useRef<HTMLDivElement>(null);
  const bottomTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    /* ── PINNED SCROLL TIMELINE ── */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=280%",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
      },
    });

    /* 0→0.5  Title horizontal split */
    tl.to(leftWordRef.current,  { x: "-130%", ease: "none" }, 0);
    tl.to(rightWordRef.current, { x: "130%",  ease: "none" }, 0);

    /* 0→0.5  Floating cards drift apart (slower parallax) */
    tl.to(floatCard1Ref.current, { x: "-40%", y: "18%", ease: "none" }, 0);
    tl.to(floatCard2Ref.current, { x: "40%",  y: "-18%", ease: "none" }, 0);

    /* 0→0.5  Badge shrinks & fades */
    tl.to(badgeRef.current, { scale: 0.6, opacity: 0, ease: "none" }, 0);

    /* 0→0.5  Blobs drift slowly */
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

    /* ── CONTINUOUS MARQUEES (independent) ── */
    gsap.to(topTrackRef.current, { xPercent: -50, repeat: -1, duration: 38, ease: "none" });
    gsap.set(bottomTrackRef.current, { xPercent: -50 });
    gsap.to(bottomTrackRef.current,  { xPercent: 0,   repeat: -1, duration: 42, ease: "none" });

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* ═══════════════════════════════════════════════════════
          LAYER 1 · HERO OVERLAY  (z-20, pinned)
      ═══════════════════════════════════════════════════════ */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-20 w-full h-full overflow-hidden will-change-transform"
        style={{ background: "#FFFFFF" }}
      >
        {/* ── BACKGROUND BLOBS ── */}
        {/* Blob 1: large soft periwinkle circle, center-right */}
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
        {/* Blob 2: smaller arch, bottom-left */}
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

        {/* ── TOP BAR ── */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 md:px-14 py-5 md:py-7">
          <span className="inline-flex items-center text-[10px] font-black tracking-[0.22em] text-[#D62020] uppercase bg-white/70 backdrop-blur-sm border border-[#D62020]/25 px-4 py-1.5 rounded-full">
            OUR PORTFOLIO
          </span>
          <span className="text-[9px] font-mono font-bold text-[#BBBBBB] tracking-[0.2em] uppercase hidden sm:block">
            VIRRAT GLOBAL SHOWCASE
          </span>
        </div>

        {/* ── GIANT TWO-LINE TITLE ──
            Exact Studio Modular composition:
            "Featured"    → starts at LEFT EDGE, baseline ~42% from top
            "Portfolio."  → starts at ~40% from left, baseline ~62% from top
            Both words overflow their respective edges  */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Line 1: "Featured" — top-left, bleeds from left edge */}
          <span
            ref={leftWordRef}
            className="absolute font-heading font-black text-[#111111] leading-none tracking-tighter will-change-transform block"
            style={{
              fontSize: "clamp(5rem, 15.5vw, 17rem)",
              top: "14%",
              left: 0,
              whiteSpace: "nowrap",
            }}
          >
            Featured
          </span>

          {/* Line 2: "Portfolio." — starts center, bleeds off right */}
          <span
            ref={rightWordRef}
            className="absolute font-heading font-black text-[#D62020] leading-none tracking-tighter will-change-transform block"
            style={{
              fontSize: "clamp(5rem, 15.5vw, 17rem)",
              top: "36%",
              left: "38%",
              whiteSpace: "nowrap",
            }}
          >
            Portfolio.
          </span>
        </div>

        {/* ── FLOATING IMAGE CARD 1: BOTTOM-LEFT ──
            Reference: left 7%, top 48%, width 22vw, aspect 4:3 */}
        <div
          ref={floatCard1Ref}
          className="absolute z-20 will-change-transform hidden sm:block"
          style={{
            left: "7%",
            bottom: "8%",
            top: "auto",
            width: "clamp(140px, 16vw, 240px)",
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
              src="/portfolio/portfolio_luxury_packaging_1784618217548.png"
              alt="Branding project"
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ── FLOATING IMAGE CARD 2: TOP-RIGHT ──
            Reference: right 8%, top 8%, width 13vw, aspect 3:4 */}
        <div
          ref={floatCard2Ref}
          className="absolute z-20 will-change-transform hidden sm:block"
          style={{
            right: "8%",
            top: "8%",
            width: "clamp(110px, 13vw, 190px)",
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
              src="/portfolio/portfolio_web_ui_ux_1784618195771.png"
              alt="Digital platform"
              fill
              sizes="190px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ── SPINNING BADGE ──
            Reference: center x≈50%, top≈70% */}
        {/* ── SUBTITLE + BADGE + CTA — anchored exactly below Portfolio. word bottom ──
            top = Portfolio. top (36%) + font-height (clamp(5rem,15.5vw,17rem)) + 88px gap
            This prevents overlap on any screen size or aspect ratio */}
        <div
          className="absolute z-30 flex flex-col items-start gap-5"
          style={{
            left: "55%",
            top: "calc(36% + clamp(5rem, 15.5vw, 17rem) + 75px)",
            maxWidth: "clamp(240px, 35vw, 480px)",
          }}
        >
          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="m-0 text-sm sm:text-base leading-relaxed font-medium transition-colors duration-75"
            style={{ color: "#B8B8B8" }}
          >
            Explore selected branding, printing, digital marketing, software, AI
            automation, and creative projects crafted for modern businesses.
          </p>

          {/* CTA — 32px below subtitle via mt-8 */}
          <div className="flex items-center gap-5 mt-2">
            {/* Spinning Badge */}
            <div
              ref={badgeRef}
              className="relative flex-shrink-0 will-change-transform hidden md:flex items-center justify-center bg-white"
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

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#111111] hover:bg-[#D62020] text-white text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 shadow-md hover:shadow-[0_8px_28px_rgba(214,32,32,0.28)] transform hover:-translate-y-0.5 pointer-events-auto"
            >
              Start your project
              <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* ── BOTTOM FOOTER LABELS (no visible border, blends with white) ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 md:px-14 pb-5 md:pb-7 pt-3"
        >
          <span className="text-[10px] font-mono text-[#DDDDDD] tracking-widest uppercase">
            VIRRAT GLOBAL · EST. 2020
          </span>
          <span className="text-[10px] font-mono text-[#DDDDDD] tracking-widest uppercase">
            SELECTED WORKS 2024–25
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          LAYER 2 · DUAL MARQUEE SLIDERS  (z-10, reveals below)
      ═══════════════════════════════════════════════════════ */}
      <div
        ref={slidersRef}
        className="absolute inset-0 z-10 flex flex-col justify-center gap-6 md:gap-8 opacity-0 will-change-transform pointer-events-auto"
        style={{ background: "#FFFFFF" }}
      >
        {/* TOP TRACK: LEFT → RIGHT */}
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

        {/* BOTTOM TRACK: RIGHT → LEFT */}
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
    </section>
  );
}
