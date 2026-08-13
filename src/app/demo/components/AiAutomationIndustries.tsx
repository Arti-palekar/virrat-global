"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DestinationCard } from "@/components/ui/card-21";

const industries = [
  {
    location: "Healthcare & Medical",
    flag: "🏥",
    stats: "AI Healthcare • Intelligent Automation",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    href: "/contact"
  },
  {
    location: "Real Estate & Infrastructure",
    flag: "🏢",
    stats: "Smart Property • AI Operations",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    href: "/contact"
  },
  {
    location: "Education & E-Learning",
    flag: "🎓",
    stats: "AI Automation • Smart Learning",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    href: "/contact"
  },
  {
    location: "Food & Beverage",
    flag: "🍽️",
    stats: "AI Operations • Customer Experience",
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
    href: "/contact"
  },
  {
    location: "Jewelry & Precious Metals",
    flag: "💎",
    stats: "Smart Operations • Intelligent Commerce",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    href: "/contact"
  },
  {
    location: "Financial Services & FinTech",
    flag: "💳",
    stats: "AI Processing • Financial Automation",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    href: "/contact"
  },
  {
    location: "Fashion & Apparel",
    flag: "👗",
    stats: "Smart Commerce • AI Operations",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
    href: "/contact"
  },
  {
    location: "Sports & Entertainment",
    flag: "🎬",
    stats: "AI Experiences • Automated Engagement",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    href: "/contact"
  }
];

export function AiAutomationIndustries() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#FAF9F6] py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center relative">
        <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-[#E32620] mb-4 inline-block">
          INDUSTRIES WE BUILD FOR
        </span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-[54px] leading-[1.05] tracking-tighter text-[#111111] mb-6 uppercase">
          INDUSTRIES WE <span className="text-[#E32620]">BUILD FOR</span>
        </h2>
        <p className="text-base md:text-lg text-[#555555] font-medium max-w-2xl mx-auto mt-4">
          AI-powered automation solutions tailored to the unique needs of modern industries.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-[1600px] px-6 md:px-12 mx-auto relative group">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6">
            {industries.map((item, index) => (
              <div 
                key={index} 
                className="pl-4 md:pl-6 flex-none w-full md:w-1/2 lg:w-1/4"
              >
                <div className="aspect-[4/5] w-full">
                  <DestinationCard {...item} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Controls (Floating on edges) */}
        <button
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-xl border border-gray-100 items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none z-10"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-xl border border-gray-100 items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none z-10"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Mobile/Tablet Controls */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-[#111111] disabled:opacity-30 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-[#111111] disabled:opacity-30 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AiAutomationIndustries;
