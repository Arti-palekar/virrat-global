"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PackagingTopPicks() {
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
                    PACKAGING THAT<br />BUILDS BRANDS
                  </h2>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-500 max-w-[36ch] leading-relaxed mb-10">
                    Strategic, shelf-ready packaging crafted to make your product distinctive, memorable, and instantly recognizable.
                  </p>
                </div>

                {/* Dynamic Design focus & Built-for Row */}
                <div className="flex items-center justify-between gap-6 py-6 border-t border-b border-zinc-200/60 my-6 relative">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">DESIGN FOCUS</span>
                    <span className="text-xl font-bold tracking-tight text-[#111111] flex items-center gap-1.5">
                      <span className="text-zinc-300 font-light">(</span> Brand Identity
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
                      Shelf Impact <span className="text-zinc-300 font-light text-xl ml-1.5">)</span>
                    </span>
                  </div>
                </div>

                {/* Promo Banner Card */}
                <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="inline-block text-[11px] font-bold text-[#d62020] bg-[#d62020]/5 px-2.5 py-1 rounded-md mb-1.5">
                      STRATEGY TO PRODUCTION
                    </span>
                    <p className="text-xs text-zinc-500 font-medium">
                      Concept • Packaging • Print Ready
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
                {/* Sliding list containing 16 packaging design services */}
                <div 
                  ref={galleryListRef}
                  className="w-full flex flex-col gap-6 lg:will-change-transform"
                >
                  {/* Row 1: Product Packaging Design & Food & Beverage Packaging */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/picks_hand.png" 
                        alt="Product Packaging Design" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Product Packaging Design
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/picks_pink.png" 
                        alt="Food & Beverage Packaging" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Food & Beverage Packaging
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Bottle & Label Design & Can Packaging Design */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/picks_bottle.png" 
                        alt="Bottle & Label Design" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Bottle & Label Design
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/picks_arch.png" 
                        alt="Can Packaging Design" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Can Packaging Design
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Box Packaging Design & Cosmetic Packaging */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-8 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[16/11] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/picks_box.png" 
                        alt="Box Packaging Design" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Box Packaging Design
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-4 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/picks_jar.png" 
                        alt="Cosmetic Packaging" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Cosmetic Packaging
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Pouch Packaging Design & FMCG Packaging */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/picks_pouch.png" 
                        alt="Pouch Packaging Design" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Pouch Packaging Design
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/marketing_1.png" 
                        alt="FMCG Packaging" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          FMCG Packaging
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Retail Packaging & Premium / Luxury Packaging */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/packaging.webp" 
                        alt="Retail Packaging" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Retail Packaging
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/branding_1.png" 
                        alt="Premium / Luxury Packaging" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Premium / Luxury Packaging
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 6: Sustainable Packaging & Packaging Labels & Stickers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/branding_2.png" 
                        alt="Sustainable Packaging" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Sustainable Packaging
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/branding_3.png" 
                        alt="Packaging Labels & Stickers" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Packaging Labels & Stickers
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 7: Packaging Mockups & Print-Ready Packaging Artwork */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-8 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[16/11] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/branding_4.png" 
                        alt="Packaging Mockups" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Packaging Mockups
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-4 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/branding_5.png" 
                        alt="Print-Ready Packaging Artwork" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Print-Ready Packaging Artwork
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 8: Packaging Brand Identity & E-commerce Product Packaging */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/brand-identity.webp" 
                        alt="Packaging Brand Identity" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          Packaging Brand Identity
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group">
                      <img 
                        src="/images/services/corporate-merchandise.webp" 
                        alt="E-commerce Product Packaging" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          E-commerce Product Packaging
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
            
            {/* Left Column (5 cols): Large Zestify image */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-[32px] aspect-[4/3] sm:aspect-[16/11] border border-zinc-100 shadow-sm">
              <img 
                src="/images/services/picks_nature.png" 
                alt="Zestify Yellow Can Nature Mockup" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-xs uppercase font-bold tracking-widest">
                  Nature Showcase Case Study
                </span>
              </div>
            </div>
            
            {/* Right Column (7 cols): CTA Card */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-zinc-100 rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm min-h-[220px] lg:min-h-[196px]">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-heading font-black tracking-tighter leading-tight uppercase max-w-[20ch]">
                  READY TO MAKE YOUR<br />PRODUCT STAND OUT?
                </h3>
              </div>

              {/* Button */}
              <Link 
                href="/contact"
                style={{ color: "#ffffff" }}
                className="group flex items-center justify-center gap-2 px-6 py-4 bg-[#111111] hover:bg-[#d62020] !text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                START YOUR PROJECT 
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
