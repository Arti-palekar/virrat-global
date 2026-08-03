"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DMTopPicks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryViewportRef = useRef<HTMLDivElement>(null);
  const galleryListRef = useRef<HTMLDivElement>(null);

  // Scoped GSAP ScrollTrigger setup with settled mount timer & ctx cleanup
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context;

    // Small delay to allow React hydration and layouts to fully settle
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
          const listEl = galleryListRef.current;
          const viewportEl = galleryViewportRef.current;
          const sectionEl = sectionRef.current;
          
          if (!listEl || !viewportEl || !sectionEl) return;

          // Calculate travel height dynamically based on the total scrolling images
          const scrollAmount = listEl.scrollHeight - viewportEl.offsetHeight;

          if (scrollAmount <= 0) return;

          // Pin the overall top picks showcase section
          ScrollTrigger.create({
            trigger: sectionEl,
            start: "top 80px",
            end: () => `+=${scrollAmount}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          // Scrub list translation
          gsap.to(listEl, {
            y: -scrollAmount,
            ease: "none",
            scrollTrigger: {
              trigger: sectionEl,
              start: "top 80px",
              end: () => `+=${scrollAmount}`,
              scrub: 1,
              invalidateOnRefresh: true,
            }
          });
        });
      }, sectionRef);

      // Force GSAP to recalculate offsets once layout settles
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative w-full pt-10 pb-0 lg:pt-12 lg:pb-0 px-6 md:px-12 lg:px-24 bg-white text-[#111111] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* LEFT COLUMN: Overview Card (5 cols) - Pinned/sticky relative to parent on desktop */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
              
              {/* Top Picks Details Card */}
              <div className="bg-[#FAF9F6] border border-zinc-100 rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[420px] shadow-sm relative overflow-hidden">
                <div>
                  {/* Heading */}
                  <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-none mb-4 uppercase">
                    DIGITAL MARKETING<br />THAT DRIVES GROWTH
                  </h2>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-500 max-w-[36ch] leading-relaxed mb-10">
                    Data-driven strategies designed to increase visibility, generate qualified leads and turn attention into measurable growth.
                  </p>
                </div>

                {/* Dynamic Design focus & Built-for Row */}
                <div className="flex items-center justify-between gap-6 py-6 border-t border-b border-zinc-200/60 my-6 relative">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">CAMPAIGN FOCUS</span>
                    <span className="text-xl font-bold tracking-tight text-[#111111] flex items-center gap-1.5">
                      <span className="text-zinc-300 font-light">(</span> Performance
                    </span>
                  </div>

                  {/* SVG connecting Arrow */}
                  <div className="hidden sm:block absolute left-[45%] top-1/2 -translate-y-1/2 w-16 h-8 opacity-65 pointer-events-none">
                    <svg viewBox="0 0 76 34" fill="none" className="w-full h-full stroke-zinc-400 stroke-2">
                      <path d="M2 17C15.5 3 40.5 -4 72 25" strokeLinecap="round" strokeDasharray="3 3" />
                      <path d="M64 25L73.5 26.5L71 17.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">BUILT FOR</span>
                    <span className="text-xl font-heading font-extrabold text-[#d62020] flex items-center justify-end gap-1.5">
                      Revenue Growth <span className="text-zinc-300 font-light text-xl ml-1.5">)</span>
                    </span>
                  </div>
                </div>

                {/* Promo Banner Card */}
                <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="inline-block text-[11px] font-bold text-[#d62020] bg-[#d62020]/5 px-2.5 py-1 rounded-md mb-1.5">
                      STRATEGY TO CONVERSION
                    </span>
                    <p className="text-xs text-zinc-500 font-medium">
                      Campaign Setup • Optimization • Reporting
                    </p>
                  </div>
                  
                  <Link 
                    href="/contact"
                    style={{ color: "#ffffff" }}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#111111] hover:bg-[#fd2e35] !text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    START A PROJECT <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Bento Gallery Viewport with scrolling images (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Viewport container with absolute white fade */}
              <div 
                ref={galleryViewportRef}
                className="relative w-full overflow-hidden lg:h-[calc(100vh-80px)] rounded-[32px]"
              >
                {/* Sliding list containing 12 digital marketing services */}
                <div 
                  ref={galleryListRef}
                  className="w-full flex flex-col gap-6 lg:will-change-transform"
                >
                  {/* Row 1: Search Engine Optimization (SEO) & Google Ads / PPC */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=600" 
                        alt="Search Engine Optimization (SEO)" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Search Engine Optimization (SEO)
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                        alt="Google Ads / PPC" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Google Ads / PPC
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Meta Ads & Social Media Marketing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600" 
                        alt="Meta Ads" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Meta Ads
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=600" 
                        alt="Social Media Marketing" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Social Media Marketing
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Content Marketing & Performance Marketing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-8 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[16/11] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600" 
                        alt="Content Marketing" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Content Marketing
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-4 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600" 
                        alt="Performance Marketing" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Performance Marketing
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Lead Generation & Conversion Optimization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                        alt="Lead Generation" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Lead Generation
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600" 
                        alt="Conversion Optimization" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Conversion Optimization
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Marketing Analytics & Email Marketing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600" 
                        alt="Marketing Analytics" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Marketing Analytics
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600" 
                        alt="Email Marketing" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Email Marketing
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 6: Local SEO & Marketing Strategy */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                        alt="Local SEO" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Local SEO
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" 
                        alt="Marketing Strategy" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Marketing Strategy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom White Fade Overlay (Absolute positioned) */}
                <div 
                  className="absolute inset-x-0 bottom-0 pointer-events-none z-10 hidden lg:block"
                  style={{
                    height: "clamp(120px, 18vh, 220px)",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 35%, rgba(255,255,255,0.80) 70%, #ffffff 100%)"
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stand-alone Horizontal CTA Row (Below the pinned scroll section) */}
      <section className="w-full pt-10 pb-8 md:pb-10 lg:pb-12 px-6 md:px-12 lg:px-24 bg-white text-[#111111]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (5 cols): Large dashboard image */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-[32px] aspect-[4/3] sm:aspect-[16/11] border border-zinc-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
                alt="Marketing Performance Analytics Dashboard" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-xs uppercase font-bold tracking-widest">
                  Performance Marketing Case Study
                </span>
              </div>
            </div>
            
            {/* Right Column (7 cols): CTA Card */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-zinc-100 rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm min-h-[220px] lg:min-h-[196px]">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-heading font-black tracking-tighter leading-tight uppercase max-w-[20ch]">
                  READY TO ACCELERATE<br />YOUR DIGITAL GROWTH?
                </h3>
              </div>

              {/* Button */}
              <Link 
                href="/contact"
                style={{ color: "#ffffff" }}
                className="group flex items-center justify-center gap-2 px-6 py-4 bg-[#111111] hover:bg-[#d62020] !text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                START YOUR CAMPAIGN 
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
