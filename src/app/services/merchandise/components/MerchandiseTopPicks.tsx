"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MerchandiseTopPicks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryViewportRef = useRef<HTMLDivElement>(null);
  const galleryListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
          const listEl = galleryListRef.current;
          const viewportEl = galleryViewportRef.current;
          const sectionEl = sectionRef.current;
          
          if (!listEl || !viewportEl || !sectionEl) return;

          const scrollAmount = listEl.scrollHeight - viewportEl.offsetHeight;

          if (scrollAmount <= 0) return;

          ScrollTrigger.create({
            trigger: sectionEl,
            start: "top 80px",
            end: () => `+=${scrollAmount}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

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
            
            {/* LEFT COLUMN: Overview Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
              
              <div className="bg-[#FAF9F6] border border-zinc-100 rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[420px] shadow-sm relative overflow-hidden">
                <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-none mb-4 uppercase">
                    MERCHANDISE<br />THAT ENGAGES
                  </h2>
                  
                  <p className="text-sm text-zinc-500 max-w-[36ch] leading-relaxed mb-10">
                    Premium custom products designed to align with your brand, elevate employee connection, and build customer loyalty.
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 py-6 border-t border-b border-zinc-200/60 my-6 relative">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                      Designed For
                    </span>
                    <span className="text-xs font-bold text-[#111111] tracking-wider uppercase">
                      Teams & Events
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                      Custom Specs
                    </span>
                    <span className="text-xs font-bold text-[#d62020] tracking-wider uppercase">
                      Pantone Matched
                    </span>
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-between gap-2 px-6 py-3.5 bg-[#111111] hover:bg-[#d62020] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all group w-full"
                >
                  <span>Build Custom Kits</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Vertical Scroll Gallery (7 cols) */}
            <div 
              ref={galleryViewportRef}
              className="lg:col-span-7 h-auto lg:h-[calc(100vh-140px)] overflow-y-visible lg:overflow-hidden pr-0 lg:pr-4"
            >
              <div 
                ref={galleryListRef}
                className="flex flex-col gap-6"
              >
                {/* Item 1: Custom Apparel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                  <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                    <img 
                      src="/images/services/corporate-merchandise.webp" 
                      alt="Premium Apparel" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent flex items-end p-6 z-10">
                      <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                        PREMIUM APPAREL & HOODIES
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                    <img 
                      src="/images/services/corporate-stationery.webp" 
                      alt="Office Stationery" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent flex items-end p-6 z-10">
                      <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                        CORPORATE WELCOME KITS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item 2: Drinkware & Eco-Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                  <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                    <img 
                      src="/images/services/picks_bottle.png" 
                      alt="Branded Drinkware" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent flex items-end p-6 z-10">
                      <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                        STAINLESS DRINKWARE
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                    <img 
                      src="/images/services/id-cards.webp" 
                      alt="ID Cards and Lanyards" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent flex items-end p-6 z-10">
                      <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                        EVENT ACCESSORIES & LANYARDS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item 3: Custom Packaging & Gift Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                  <div className="lg:col-span-8 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[16/11] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                    <img 
                      src="/images/services/picks_box.png" 
                      alt="Custom Gift Boxes" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent flex items-end p-6 z-10">
                      <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                        CUSTOM PACKAGED BOXES
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-4 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                    <img 
                      src="/images/services/picks_hand.png" 
                      alt="Promotional Gifts" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent flex items-end p-6 z-10">
                      <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                        BRANDED PROMOTIONAL SWAG
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
