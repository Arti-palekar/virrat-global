"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesData = [
  {
    id: "01",
    title: "Branding & Printing",
    desc: "Create memorable brand identities through logo design, packaging, premium printing, brochures, and corporate stationery.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
    thumb: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "02",
    title: "Website & Software",
    desc: "Build high-performance websites, custom web applications, ERP systems, CRM platforms, and scalable business software.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    thumb: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "03",
    title: "Digital Marketing",
    desc: "Grow your business with SEO, Google Ads, Meta Ads, Social Media Marketing, and lead generation strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "04",
    title: "AI Automation",
    desc: "Automate customer support and business workflows using AI chatbots, WhatsApp automation, and intelligent assistants.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    thumb: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "05",
    title: "Legal Compliance",
    desc: "Company Registration, GST, Trademark, ISO Certification, Annual Compliance, and complete legal business solutions.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1000&q=80",
    thumb: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "06",
    title: "Business Growth",
    desc: "Dedicated maintenance, security, optimization, consultation, and continuous business growth support.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    thumb: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImagesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = useRef(0);
  const activeIndexRef = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Keep ref in sync with state for GSAP onUpdate
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 991px)").matches;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const baseScroll = servicesData.length * 600;
      const extraScroll = 1000; // Extended scroll distance so the last card has enough time to fully expand into view
      const totalScroll = baseScroll + extraScroll;

      // Header fade in animation
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          }
        });
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          // Map progress to index, ensuring the last index is held for the extra scroll duration
          const progressWithoutExtra = Math.min(1, self.progress * (totalScroll / baseScroll));
          const newIndex = Math.min(
            servicesData.length - 1,
            Math.floor(progressWithoutExtra * servicesData.length)
          );
          
          if (activeIndexRef.current !== newIndex) {
            setActiveIndex(newIndex);
          }
          
          if (rightColumnRef.current) {
            const maxScroll = rightColumnRef.current.scrollHeight - rightColumnRef.current.clientHeight;
            if (maxScroll > 0) {
              rightColumnRef.current.scrollTop = progressWithoutExtra * maxScroll;
            }
          }
        }
      });
    }, sectionRef);

    // Refresh ScrollTrigger after layout calculations
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, []); 

  // Handle specific time-based animations when activeIndex changes
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 991px)").matches;
    if (isMobile) return;

    const prevIndex = prevIndexRef.current;
    if (prevIndex === activeIndex) return;

    const currentImg = leftImagesRef.current[activeIndex];
    const prevImg = leftImagesRef.current[prevIndex];

    // Exit previous image
    if (prevImg) {
      gsap.to(prevImg, {
        y: 0,
        opacity: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
        zIndex: 0
      });
    }

    // Enter current image
    if (currentImg) {
      gsap.fromTo(
        currentImg,
        { 
          y: 0, 
          opacity: 0, 
          scale: 1,
          zIndex: 10
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          ease: "power2.inOut", 
          overwrite: true 
        }
      );
    }

    prevIndexRef.current = activeIndex;
  }, [activeIndex]);

  return (
    <div className="w-full bg-white relative">
      <section ref={sectionRef} className="relative w-full font-syne h-auto lg:h-screen flex flex-col overflow-hidden py-16 md:py-24">
        
        {/* ─── HEADER ROW (OUR SOLUTIONS) ─── */}
        <div 
          ref={headerRef}
          className="w-full mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between mb-[50px] lg:mb-[60px] opacity-0 translate-y-[20px]"
        >
          {/* Left Side */}
          <h2 className="text-[18px] font-[600] tracking-[0.5px] text-[#111111] uppercase flex items-center group cursor-pointer m-0 mb-5">
            OUR SOLUTIONS
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </h2>

          {/* Right Side */}
          <span className="text-[18px] font-[500] text-[#111111] underline underline-offset-4 decoration-1">
            Since 2012
          </span>
        </div>

        {/* ─── CONTENT WRAPPER ─── */}
        <div className="flex flex-col lg:flex-row flex-1 w-full h-full relative">
          
          {/* ─── LEFT COLUMN (Featured Image) - 42% ─── */}
          <div className="w-full lg:w-[42%] relative px-6 lg:px-8 xl:pl-16 flex items-start lg:items-center justify-center lg:justify-end lg:pr-12">
            <div className="relative w-full max-w-[410px] aspect-[410/440] bg-transparent shrink-0">
              {servicesData.map((service, i) => (
                <div
                  key={service.id}
                  ref={(el) => { leftImagesRef.current[i] = el; }}
                  className={`absolute inset-0 w-full h-full will-change-transform ${
                    i === 0 ? "opacity-100 z-10 translate-y-0 scale-100" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 410px"
                    className="object-contain object-center"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT COLUMN (Service List) - 58% ─── */}
          <div 
            ref={rightColumnRef}
            className="w-full lg:w-[58%] h-auto lg:h-full flex flex-col justify-start lg:justify-center px-6 lg:px-16 py-12 lg:py-0 overflow-y-auto hide-scrollbar relative"
          >
            <div className="w-full max-w-[800px] flex flex-col pb-24 lg:pb-0">
              
              {servicesData.map((service, i) => {
                const isActive = i === activeIndex;

                return (
                  <div
                    key={service.id}
                    className="relative flex items-center justify-between py-6 lg:py-8 border-b border-gray-200 cursor-pointer group"
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    {/* Left side of row: Number + Text */}
                    <div className="flex items-start gap-4 lg:gap-8 flex-1 pr-4 lg:pr-8">
                      <span className={`text-lg lg:text-2xl font-bold transition-colors duration-500 mt-1 lg:mt-2 ${isActive ? "text-[#D62020]" : "text-gray-300"}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      
                      <div className="flex flex-col">
                        <h3 className={`text-2xl sm:text-3xl lg:text-[2.75rem] font-bold tracking-tight transition-colors duration-500 ${isActive ? "text-[#111111]" : "text-gray-300 group-hover:text-gray-400"}`}>
                          {service.title}
                        </h3>
                        
                        {/* Expandable Description */}
                        <div 
                          className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "grid-rows-[1fr] opacity-100 mt-2 lg:mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                        >
                          <div className="overflow-hidden">
                            <p className="font-inter text-gray-500 text-sm sm:text-base lg:text-lg max-w-[500px] leading-relaxed">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Thumbnail (Orisa Style) */}
                    <div 
                      className={`relative h-[80px] sm:h-[100px] lg:h-[120px] rounded-[16px] overflow-hidden shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isActive ? "w-[120px] sm:w-[180px] lg:w-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]" : "w-[80px] sm:w-[120px] lg:w-[170px] shadow-none"}
                      `}
                    >
                      <Image
                        src={service.thumb}
                        alt={service.title}
                        fill
                        sizes="260px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
