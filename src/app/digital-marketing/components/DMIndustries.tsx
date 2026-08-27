"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardTitle } from "@/components/ui/bounce-card-features";

const industries = [
  {
    location: "Healthcare & Medical",
    stats: "AI Healthcare • Intelligent Automation",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "Real Estate & Infrastructure",
    stats: "Smart Property • AI Operations",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "Education & E-Learning",
    stats: "AI Automation • Smart Learning",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "Food & Beverage",
    stats: "AI Operations • Customer Experience",
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "Jewelry & Precious Metals",
    stats: "Jewellery ecommerce • Catalog • ERP",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "Financial Services & FinTech",
    stats: "Loans • Finance dashboards • Payments",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "Fashion & Apparel",
    stats: "Fashion ecommerce • Catalog • Branding",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
  },
  {
    location: "Sports & Entertainment",
    stats: "Sports platforms • Ticketing • Events",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
  }
];

const bgColors = [
  "bg-slate-50/80",
  "bg-red-50/30",
  "bg-stone-50/80",
  "bg-neutral-50/80"
];

export function AiAutomationIndustries() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

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
      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-[#E32620] mb-4 inline-block">
          INDUSTRIES WE BUILD FOR
        </span>
        <h2 
          className="text-4xl md:text-[54px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-[20px]"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Industries we <span className="text-[#E32620]">build for</span>
        </h2>
        <p 
          className="text-[18px] text-[#666666] leading-[1.67] mb-[24px] max-w-[720px] mx-auto"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          AI-powered automation solutions tailored to the unique needs of modern industries.
        </p>
      </div>

      <div className="w-full max-w-[1600px] px-6 md:px-12 mx-auto relative group/section">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6 py-4">
            {industries.map((item, index) => (
              <div 
                key={index} 
                className="pl-4 md:pl-6 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <div className={`relative min-h-[300px] md:min-h-[400px] cursor-pointer overflow-hidden rounded-2xl border border-gray-100 shadow-sm p-8 group w-full ${bgColors[index % bgColors.length]}`}>
                  <CardTitle>{item.location}</CardTitle>
                  <div className="absolute bottom-0 left-4 right-4 top-32 md:top-40 rounded-t-2xl overflow-hidden shadow-2xl">
                    <img src={item.imageUrl} alt={item.location} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E32620]/90 via-[#E32620]/40 to-transparent mix-blend-multiply"></div>
                    <div className="absolute inset-0 flex items-end justify-center pb-8 px-6">
                      <span className="block text-center font-medium text-white">
                        {item.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Controls */}
        <button
          onClick={scrollPrev}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-xl border border-gray-100 items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all z-10"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 shadow-xl border border-gray-100 items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all z-10"
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
