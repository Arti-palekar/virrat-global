"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Palette, 
  Layers, 
  CreditCard, 
  BookOpen, 
  Package, 
  FolderOpen, 
  FileText, 
  Image as ImageIcon, 
  Layout, 
  Briefcase, 
  Award, 
  Signpost 
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    number: "01",
    title: "Logo Design",
    description: "Unique and memorable logos crafted to define your brand identity.",
    icon: Palette,
    gradient: "from-white via-stone-50/40 to-zinc-100/50",
    image: "/images/portfolio/branding_stationery.png"
  },
  {
    number: "02",
    title: "Brand Identity",
    description: "Complete visual identity systems including colors, typography and brand guidelines.",
    icon: Layers,
    gradient: "from-stone-50 via-white to-zinc-100/50",
    image: "/images/services/brand-identity.webp"
  },
  {
    number: "03",
    title: "Business Cards",
    description: "Premium visiting cards with modern finishes and luxury print quality.",
    icon: CreditCard,
    gradient: "from-white via-neutral-100/30 to-stone-100/40",
    image: "/images/portfolio/business_cards.png"
  },
  {
    number: "04",
    title: "Brochure Design",
    description: "Corporate brochures and company profiles designed to impress.",
    icon: BookOpen,
    gradient: "from-zinc-50 via-white to-stone-100/40",
    image: "/images/portfolio/editorial_brochure.png"
  },
  {
    number: "05",
    title: "Packaging Design",
    description: "Creative product packaging that increases shelf appeal and brand recall.",
    icon: Package,
    gradient: "from-white via-orange-50/20 to-stone-100/40",
    image: "/images/portfolio/packaging_box.png"
  },
  {
    number: "06",
    title: "Catalogue Design",
    description: "Beautifully designed product catalogues for print and digital publishing.",
    icon: FolderOpen,
    gradient: "from-stone-50 via-white to-neutral-100/40",
    image: "/images/services/brochure.webp"
  },
  {
    number: "07",
    title: "Flyers & Posters",
    description: "High-impact promotional designs for events, campaigns and advertising.",
    icon: FileText,
    gradient: "from-white via-zinc-50/40 to-stone-100/50",
    image: "/images/portfolio/poster_mockup.png"
  },
  {
    number: "08",
    title: "Social Media Creatives",
    description: "Professional branded creatives optimized for every social platform.",
    icon: ImageIcon,
    gradient: "from-neutral-50 via-white to-stone-100/40",
    image: "/images/services/logo-design.webp"
  },
  {
    number: "09",
    title: "Standee & Banner Design",
    description: "Large-format branding materials for exhibitions and marketing campaigns.",
    icon: Layout,
    gradient: "from-white via-stone-50/40 to-zinc-100/50",
    image: "/images/services/shop-signage.webp"
  },
  {
    number: "10",
    title: "Corporate Stationery",
    description: "Letterheads, envelopes, folders and complete office branding solutions.",
    icon: Briefcase,
    gradient: "from-white via-neutral-100/40 to-stone-100/50",
    image: "/images/services/corporate-stationery.webp"
  },
  {
    number: "11",
    title: "Merchandise Branding",
    description: "Custom branded merchandise for corporate promotions and events.",
    icon: Award,
    gradient: "from-stone-50 via-white to-neutral-100/40",
    image: "/images/services/corporate-merchandise.webp"
  },
  {
    number: "12",
    title: "Outdoor Branding",
    description: "Billboards, hoardings and premium outdoor advertising design services.",
    icon: Signpost,
    gradient: "from-white via-zinc-50/40 to-stone-100/50",
    image: "/images/services/billboard.webp"
  }
];

export default function BPServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps"
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(true);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full bg-[#FFFFFF] py-24 lg:py-36 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <span className="text-[12px] font-bold tracking-[0.28em] text-[#D62020] uppercase block mb-3">
              WHAT WE CREATE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight mb-6 font-heading">
              What We Create
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
              From logo concepts to premium print production, we create branding assets that build trust, strengthen recognition, and elevate your business across every customer touchpoint.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="group w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/60 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex items-center justify-center transition-all duration-300 hover:bg-[#D62020] hover:border-[#D62020] hover:text-white hover:shadow-[0_8px_25px_rgba(214,32,32,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="group w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/60 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex items-center justify-center transition-all duration-300 hover:bg-[#D62020] hover:border-[#D62020] hover:text-white hover:shadow-[0_8px_25px_rgba(214,32,32,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.number}
                  className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] h-[480px] p-1"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={cn(
                      "w-full h-full rounded-[28px] border border-neutral-200/60 bg-gradient-to-br p-6 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)] group hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] hover:border-[#D62020]/20 transition-shadow transition-colors duration-300 overflow-hidden relative",
                      service.gradient
                    )}
                  >
                    {/* Hover indicator background glow */}
                    <div className="absolute inset-0 bg-radial-gradient from-[#D62020]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Top Row: Service Mockup Image */}
                    <div className="w-full h-[220px] rounded-2xl overflow-hidden relative border border-neutral-200/30">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Subtle index bubble over image */}
                      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md border border-neutral-200/30 px-3 py-1 rounded-full text-[12px] font-bold text-[#111111]">
                        {service.number}
                      </div>
                    </div>

                    {/* Bottom Row: Content Details */}
                    <div className="flex flex-col gap-2 mt-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-extrabold text-[#111111] tracking-tight font-heading group-hover:text-[#D62020] transition-colors duration-200">
                          {service.title}
                        </h3>
                        <div className="w-10 h-10 rounded-full bg-white/80 border border-neutral-200/50 flex items-center justify-center group-hover:bg-[#D62020]/10 group-hover:border-[#D62020]/20 transition-colors duration-200">
                          <Icon className="w-5 h-5 text-neutral-600 group-hover:text-[#D62020] transition-colors duration-200" />
                        </div>
                      </div>
                      <p className="text-sm text-neutral-500 leading-relaxed font-sans mt-1">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
