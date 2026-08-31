"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Settings, MessageSquare, Briefcase, Link as LinkIcon, Users, BarChart3, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BorderBeamPanel } from "@/components/ui/border-beam-panel";

const services = [
  {
    title: "AI Workflow Automation",
    description: "Automate repetitive business workflows and reduce manual operations.",
    icon: Settings,
  },
  {
    title: "AI Chatbots & Assistants",
    description: "Build intelligent AI assistants for customer support and business communication.",
    icon: MessageSquare,
  },
  {
    title: "Business Process Automation",
    description: "Connect tools and automate complex processes across your organization.",
    icon: Briefcase,
  },
  {
    title: "AI Integrations",
    description: "Integrate AI with your existing CRM, business tools, APIs, and platforms.",
    icon: LinkIcon,
  },
  {
    title: "Lead Generation Automation",
    description: "Automate lead capture, qualification, follow-ups, and customer journeys.",
    icon: Users,
  },
  {
    title: "AI Data & Reporting",
    description: "Automate data processing, analysis, reporting, and business insights.",
    icon: BarChart3,
  }
];

export default function AiAutomationServicesSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener("resize", checkScrollState);
    return () => window.removeEventListener("resize", checkScrollState);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Check if we've reached the end of the scroll container
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          // Rewind to start
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemElement = container.firstElementChild as HTMLElement;
      if (!itemElement) return;
      
      const itemWidth = itemElement.getBoundingClientRect().width;
      const gap = 24; // Tailwind gap-6 is 24px
      const scrollAmount = itemWidth + gap;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] text-[#111111] overflow-hidden py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase mb-6"
            >
              AI AUTOMATION<br/>
              <span className="text-[#E32620]">SERVICES</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#555555] font-medium text-base md:text-lg max-w-lg"
            >
              Powerful AI solutions designed to automate, optimize, and scale your business.
            </motion.p>
          </div>
          
          {/* Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 shrink-0"
          >
            <button 
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                canScrollLeft 
                  ? "border-[#111111]/20 text-[#111111] hover:bg-[#111111] hover:text-white" 
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              <ArrowLeft size={20} strokeWidth={2} />
            </button>
            <button 
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                canScrollRight 
                  ? "border-[#111111]/20 text-[#111111] hover:bg-[#111111] hover:text-white" 
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              <ArrowRight size={20} strokeWidth={2} />
            </button>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollState}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 -mt-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="shrink-0 snap-start w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <BorderBeamPanel 
                    className="h-full !bg-white !border-gray-200/80 !p-8 flex flex-col items-start group shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                    colors={["#E32620"]}
                    radius={24}
                    thickness={1.5}
                    glow={false}
                  >
                      <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 text-[#111111] group-hover:bg-[#E32620] group-hover:border-[#E32620] group-hover:text-white transition-all duration-300">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#111111] leading-tight pr-4 mb-6">
                        {service.title}
                      </h3>
                      
                      <p className="text-[14px] text-[#555555] font-medium leading-relaxed flex-grow mb-6">
                        {service.description}
                      </p>
                      
                      <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#111111] hover:text-[#E32620] transition-colors group/link mt-auto">
                        Learn More
                        <ArrowRightIcon size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                  </BorderBeamPanel>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
