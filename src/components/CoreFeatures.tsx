"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuresData = [
  {
    id: "01",
    title: "Branding & Printing",
    footer: "POPULAR",
    tags: ["LOGO DESIGN", "BRAND IDENTITY", "BUSINESS CARDS", "PACKAGING", "BROCHURES"],
    desc: "Create a memorable brand identity with premium logo design, packaging, stationery, and high-quality printing solutions that leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1616781296181-4247509d73d2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "02",
    title: "Website & Software",
    footer: "FEATURED",
    tags: ["WORDPRESS", "E-COMMERCE", "WEB APPS", "ERP", "CUSTOM SOFTWARE"],
    desc: "Build fast, responsive websites and scalable software solutions designed to improve business operations and deliver exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "03",
    title: "Digital Marketing",
    footer: "TRENDING",
    tags: ["SEO", "GOOGLE ADS", "META ADS", "SOCIAL MEDIA", "LEAD GENERATION"],
    desc: "Increase your online visibility, attract qualified leads, and grow your business with data-driven digital marketing strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "04",
    title: "AI Automation",
    footer: "NEW",
    tags: ["AI CHATBOTS", "WHATSAPP", "WORKFLOW", "AUTOMATION", "AI ASSISTANTS"],
    desc: "Automate repetitive tasks, improve customer support, and streamline business operations using powerful AI-driven automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "05",
    title: "Legal Compliance",
    footer: "ESSENTIAL",
    tags: ["GST", "TRADEMARK", "COMPANY REGISTRATION", "ISO", "COMPLIANCE"],
    desc: "Ensure your business stays compliant with complete legal registration, trademark protection, tax, and regulatory solutions.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "06",
    title: "Support & Growth",
    footer: "ONGOING",
    tags: ["MAINTENANCE", "SECURITY", "OPTIMIZATION", "CONSULTATION", "SUPPORT"],
    desc: "Receive ongoing technical support, security updates, performance optimization, and expert guidance to keep your business growing.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CoreFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Only apply GSAP on desktop (min-width 768px) so mobile stacks normally
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
      if (cards.length === 0) return;

      const totalScrollHeight = cards.length * 600; // Total pinning distance

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Pin exactly at the top
          end: `+=${totalScrollHeight}`, 
          pin: true,
          scrub: 1, // Smooth scrub completely tied to scroll
          invalidateOnRefresh: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          onUpdate: (self) => {
            // Determine active index based on scroll progress
            const newIndex = Math.round(self.progress * (cards.length - 1));
            if (activeIndex !== newIndex) {
              setActiveIndex(newIndex);
            }
          },
        },
      });

      // Ensure initial states before timeline (using autoAlpha for visibility:hidden)
      gsap.set(cards, { yPercent: 100, autoAlpha: 0, scale: 0.9, zIndex: 0 });
      gsap.set(cards[0], { yPercent: 0, autoAlpha: 1, scale: 1, zIndex: 20 });

      // Animate each card stacking over the previous
      cards.forEach((card, i) => {
        if (i === 0) return; // First card is already active

        const prevCard = cards[i - 1];

        // Animate previous card sliding completely UP and fading out
        tl.to(
          prevCard,
          {
            yPercent: -100,
            autoAlpha: 0, // opacity 0 and visibility hidden
            scale: 0.9,
            zIndex: 0,
            ease: "power1.inOut",
          },
          i // Sequence based on index
        )
        // Animate current card sliding UP from bottom to center
        .fromTo(
          card,
          { yPercent: 100, autoAlpha: 0, scale: 0.9, zIndex: 20 },
          {
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            ease: "power1.inOut",
          },
          i // Starts exactly at the same time as prevCard slides away
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP instances on unmount
  }, []);

  return (
    <div className="w-full bg-white relative">
      <section 
        ref={sectionRef} 
        className="relative w-full bg-white overflow-hidden pt-24 pb-12 font-syne"
      >
        {/* ─── SECTION HEADER ─── */}
        <div className="w-full max-w-[1500px] mx-auto px-6 mb-[60px] text-center flex flex-col items-center relative z-20 bg-white">
          <h2 className="homepage-section-title max-w-[900px] text-center">
            Everything You Need<br />
            <span>To Build a Powerful Brand.</span>
          </h2>
        </div>

        {/* ─── CARDS CONTAINER ─── */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-[1500px] mx-auto px-6 h-auto md:h-[320px] mb-20"
        >
          {featuresData.map((feature, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={feature.id}
                className={`feature-card md:absolute md:inset-x-6 md:top-0 w-auto md:w-[calc(100%-48px)] bg-white rounded-[24px] flex flex-col md:flex-row border-2 border-[#111111] mb-8 md:mb-0 transition-colors transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]
                  ${
                    isActive
                      ? "shadow-[0_0_0_1px_rgba(214,32,32,0.12),_0_24px_60px_rgba(0,0,0,0.1)] z-20"
                      : "shadow-none z-10"
                  }
                `}
                style={{ 
                  // Set explicit height on desktop to match exact spec
                  height: "auto", 
                  minHeight: "320px",
                  willChange: "transform, opacity"
                }}
              >
                {/* Left Column (30%) */}
                <div className="w-full md:w-[30%] p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#ECECEC]">
                  <div>
                    <span className="text-[#6B7280] text-sm font-semibold tracking-widest mb-4 block">
                      {feature.id} / {String(featuresData.length).padStart(2, "0")}
                    </span>
                    <h3 
                      className={`text-3xl lg:text-4xl font-bold tracking-tight transition-all duration-500 hover:translate-x-[6px]
                        ${isActive ? "text-[#D62020]" : "text-[#1B1B1B]"}
                      `}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <div className="mt-12 md:mt-0 text-[11px] font-bold tracking-widest text-[#6B7280] uppercase">
                    {feature.footer}
                  </div>
                </div>

                {/* Middle Column (Text & Pills) */}
                <div className="w-full md:w-[45%] lg:w-[50%] p-8 md:p-10 flex flex-col justify-between relative group">
                  {/* Top Category Pills */}
                  <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-500 uppercase hover:-translate-y-1 hover:shadow-md
                          ${
                            isActive
                              ? "bg-[#D62020] text-white border border-[#D62020]"
                              : "bg-white text-[#6B7280] border border-[#ECECEC]"
                          }
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Description */}
                  <p className="mt-12 md:mt-0 font-inter text-[#6B7280] text-base lg:text-lg leading-relaxed max-w-[500px]">
                    {feature.desc}
                  </p>
                </div>

                {/* Right Column (Image) - 4:5 Aspect Ratio */}
                <div className="w-full md:w-[25%] lg:w-[20%] p-4 md:p-6 flex items-center justify-center lg:justify-end">
                  <div className="relative w-full h-[300px] md:h-[270px] lg:h-[270px] md:w-[200px] lg:w-[220px] rounded-[18px] overflow-hidden group self-center lg:self-end md:self-end">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 220px"
                      className={`object-cover transition-transform duration-800 ease-out will-change-transform
                        ${isActive ? "scale-105" : "scale-100"}
                        group-hover:scale-[1.08]
                      `}
                    />
                    {/* Subtle active state gradient over image */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t from-[#D62020]/20 to-transparent transition-opacity duration-500 pointer-events-none
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `} 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
