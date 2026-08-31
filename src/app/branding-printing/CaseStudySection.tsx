"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Building2, Target, LineChart } from "lucide-react";

// TABS DEFINITION
const tabs = [
  { id: "overview", label: "Overview", matchIndexes: [0] },
  { id: "challenge", label: "Challenge", matchIndexes: [1] },
  { id: "research", label: "Research", matchIndexes: [2] },
  { id: "identity", label: "Identity", matchIndexes: [3, 4, 5] },
  { id: "printing", label: "Printing", matchIndexes: [6, 7] },
  { id: "results", label: "Results", matchIndexes: [8] }
];

const caseStudySections = [
  {
    id: "overview",
    image: "/images/portfolio/logo.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">01</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          Project Overview
        </h2>
        
        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-[#D62020] w-5 h-5" />
              <h4 className="font-syne font-bold text-[#111] text-[18px]">Client</h4>
            </div>
            <p className="font-inter text-[#555] text-[15px] leading-[1.7]">Virrat Global</p>
          </div>
          
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[#D62020] w-5 h-5" />
              <h4 className="font-syne font-bold text-[#111] text-[18px]">Industry</h4>
            </div>
            <p className="font-inter text-[#555] text-[15px] leading-[1.7]">Creative Branding & Printing</p>
          </div>
          
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-[#D62020] w-5 h-5" />
              <h4 className="font-syne font-bold text-[#111] text-[18px]">Duration</h4>
            </div>
            <p className="font-inter text-[#555] text-[15px] leading-[1.7]">4 Weeks</p>
          </div>
          
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <LineChart className="text-[#D62020] w-5 h-5" />
              <h4 className="font-syne font-bold text-[#111] text-[18px]">Results</h4>
            </div>
            <p className="font-inter text-[#555] text-[15px] leading-[1.7]">Strong Brand Recognition</p>
          </div>
        </div>

        <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <h4 className="font-syne font-bold text-[24px] text-[#111] mb-6 tracking-[-0.03em]">Services Delivered</h4>
          <div className="flex flex-wrap gap-3">
            {["Logo Design", "Brand Identity", "Visiting Cards", "Brochure Design", "Packaging Design", "Marketing Materials"].map((service, i) => (
              <div key={i} className="px-4 py-2 bg-white border border-[#ECECEC] rounded-full text-[15px] font-inter text-[#555] shadow-sm">
                {service}
              </div>
            ))}
          </div>
        </div>
      </>
    )
  },
  {
    id: "challenge",
    image: "/images/portfolio/visiting_cards.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">02</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          The Challenge
        </h2>
        
        <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] mb-8">
          <h3 className="font-syne font-bold text-[24px] text-[#111] tracking-[-0.03em] mb-6">The Problem</h3>
          <p className="font-inter text-[#555] text-[15px] leading-[1.7]">
            The client needed a modern and consistent brand identity that would create a strong first impression across both digital and printed marketing materials. Their previous branding lacked consistency, professionalism, and premium visual appeal.
          </p>
        </div>

        <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <h3 className="font-syne font-bold text-[24px] text-[#111] tracking-[-0.03em] mb-6">Our Approach</h3>
          <p className="font-inter text-[#555] text-[15px] leading-[1.7]">
            We developed a complete branding system including logo design, typography, color palette, print collateral, packaging concepts, and marketing creatives to ensure a consistent and memorable brand experience across every customer touchpoint.
          </p>
        </div>
      </>
    )
  },
  {
    id: "research",
    image: "/images/portfolio/brochure.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">03</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          Research
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <h3 className="font-syne font-bold text-[22px] text-[#111] tracking-[-0.03em]">Competitor Analysis</h3>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#D62020] font-bold">1</div>
          </div>
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <h3 className="font-syne font-bold text-[22px] text-[#111] tracking-[-0.03em]">Audience Research</h3>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#D62020] font-bold">2</div>
          </div>
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <h3 className="font-syne font-bold text-[22px] text-[#111] tracking-[-0.03em]">Brand Strategy</h3>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#D62020] font-bold">3</div>
          </div>
        </div>
      </>
    )
  },
  {
    id: "creative",
    image: "/images/portfolio/packaging.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">04</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          Creative Direction
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <h3 className="font-syne font-bold text-[22px] text-[#111] tracking-[-0.03em] mb-6">Color Palette</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#ECECEC] shadow-sm"></div>
                <div>
                  <div className="font-bold font-inter text-[#111] text-[15px]">Pure White</div>
                  <div className="text-[15px] text-[#555] font-inter">#FFFFFF</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D62020] shadow-sm"></div>
                <div>
                  <div className="font-bold font-inter text-[#111] text-[15px]">Primary Red</div>
                  <div className="text-[15px] text-[#555] font-inter">#D62020</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <h3 className="font-syne font-bold text-[22px] text-[#111] tracking-[-0.03em] mb-6">Typography</h3>
            <div className="flex flex-col gap-6">
              <div>
                <div className="font-syne font-bold text-[28px] text-[#111] leading-none mb-2">Aa</div>
                <div className="text-[12px] font-bold text-[#D62020] font-inter uppercase tracking-[0.12em]">Syne Bold</div>
              </div>
              <div>
                <div className="font-inter text-[28px] text-[#111] leading-none mb-2">Aa</div>
                <div className="text-[12px] font-bold text-[#D62020] font-inter uppercase tracking-[0.12em]">Inter</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: "logo",
    image: "/images/portfolio/flyers.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">05</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          Logo Design
        </h2>
        
        <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <div className="space-y-8 border-l-[2px] border-red-50 pl-8 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-[3px] border-[#D62020]"></div>
              <h3 className="font-syne font-bold text-[20px] text-[#111] tracking-[-0.03em] mb-6">Sketches</h3>
              <p className="font-inter text-[#555] text-[15px] leading-[1.7]">Initial hand-drawn explorations focusing on minimal geometry.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-[3px] border-[#D62020]"></div>
              <h3 className="font-syne font-bold text-[20px] text-[#111] tracking-[-0.03em] mb-6">Grid System</h3>
              <p className="font-inter text-[#555] text-[15px] leading-[1.7]">Aligning the logomark to a strict geometric grid for perfect scalability.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#D62020]"></div>
              <h3 className="font-syne font-bold text-[20px] text-[#111] tracking-[-0.03em] mb-6">Final Logo</h3>
              <p className="font-inter text-[#555] text-[15px] leading-[1.7]">The polished vector output, ready for both digital and print application.</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: "identity",
    image: "/images/portfolio/billboard.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">06</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          Brand Identity
        </h2>
        <p className="font-inter text-[#555] text-[15px] leading-[1.7] mb-6">
          We rolled out the core identity across essential business stationery, ensuring every piece of paper communicated the premium nature of the brand.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {["Letterhead", "Business Card", "Envelope", "Presentation Folder"].map((item, i) => (
            <div key={i} className="bg-white border border-[#ECECEC] rounded-[20px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] text-center">
               <span className="font-syne font-bold text-[#111] tracking-[-0.03em]">{item}</span>
            </div>
          ))}
        </div>
      </>
    )
  },
  {
    id: "materials",
    image: "/images/portfolio/standee.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">07</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          Printing Materials
        </h2>
        
        <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <h3 className="font-syne font-bold text-[24px] text-[#111] tracking-[-0.03em] mb-6">Final Deliverables</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Brochure", "Flyers", "Packaging", "Billboard", 
              "Standee", "ID Cards", "Badges"
            ].map((item, i) => (
              <div key={i} className="px-4 py-2 bg-white border border-[#ECECEC] rounded-full text-[15px] font-inter text-[#555] shadow-sm flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#D62020]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </>
    )
  },
  {
    id: "showcase",
    image: "/images/portfolio/id_cards.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">08</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          Final Showcase
        </h2>
        <p className="font-inter text-[#555] text-[15px] leading-[1.7] mb-6">
          Beautiful product presentation utilizing professional photography and highly realistic mockups. The end result is a cohesive brand experience that commands authority.
        </p>
      </>
    )
  },
  {
    id: "results",
    image: "/images/portfolio/badges.png",
    content: (
      <>
        <div className="text-[12px] font-[600] text-[#D62020] uppercase tracking-[0.12em] mb-4">09</div>
        <h2 className="font-syne font-[700] text-[40px] md:text-[56px] text-[#111111] leading-tight tracking-[-0.03em] mb-5">
          Project Results
        </h2>
        
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center">
            <div className="font-syne font-bold text-[42px] text-[#D62020] leading-none mb-3 tracking-[-0.03em]">120+</div>
            <div className="font-inter text-[#555] text-[15px]">Creative Assets</div>
          </div>
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center">
            <div className="font-syne font-bold text-[42px] text-[#D62020] leading-none mb-3 tracking-[-0.03em]">25+</div>
            <div className="font-inter text-[#555] text-[15px]">Print Deliverables</div>
          </div>
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center">
            <div className="font-syne font-bold text-[42px] text-[#D62020] leading-none mb-3 tracking-[-0.03em]">4 Wks</div>
            <div className="font-inter text-[#555] text-[15px]">Timeline</div>
          </div>
          <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center">
            <div className="font-syne font-bold text-[42px] text-[#D62020] leading-none mb-3 tracking-[-0.03em]">100%</div>
            <div className="font-inter text-[#555] text-[15px]">Client Satisfaction</div>
          </div>
        </div>

        <div className="bg-white border border-[#ECECEC] rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <h3 className="font-syne font-bold text-[24px] text-[#111] tracking-[-0.03em] mb-6">Business Impact</h3>
          <ul className="space-y-4">
             <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#D62020]"/><span className="font-inter text-[#555] text-[15px]">Strong Brand Recognition</span></li>
             <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#D62020]"/><span className="font-inter text-[#555] text-[15px]">Premium Brand Identity</span></li>
             <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#D62020]"/><span className="font-inter text-[#555] text-[15px]">Consistent Marketing Materials</span></li>
             <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#D62020]"/><span className="font-inter text-[#555] text-[15px]">Better Customer Trust</span></li>
             <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#D62020]"/><span className="font-inter text-[#555] text-[15px]">High Quality Print Assets</span></li>
             <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#D62020]"/><span className="font-inter text-[#555] text-[15px]">Improved Offline Brand Visibility</span></li>
          </ul>
        </div>
      </>
    )
  }
];

export default function CaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Determine which tab is active based on the current active section index
  const activeTabId = tabs.find(tab => tab.matchIndexes.includes(activeIndex))?.id || tabs[0].id;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // Trigger precisely around the center
        threshold: 0
      }
    );

    const sections = rightColumnRef.current?.querySelectorAll(".case-study-section");
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#FFFFFF] relative font-inter border-t border-[#ECECEC] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row relative">
        
        {/* LEFT COLUMN - STICKY MOBILE MOCKUP */}
        <div className="hidden md:block w-[42%] relative">
          <div className="sticky top-[80px] h-[calc(100vh-80px)] w-full flex items-center justify-center p-8">
            
            {/* Premium iPhone Frame - Scaled Down 20% & Thinner Bezels */}
            <div className="relative w-[280px] h-[580px] rounded-[38px] bg-white border-[8px] border-[#111111] shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden flex-shrink-0">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-[#111111] rounded-full z-[60]"></div>
              
              {/* Inner Screen */}
              <div className="w-full h-full relative bg-[#F9F9F9] rounded-[28px] overflow-hidden flex flex-col">
                
                {/* Premium Tab Bar (inside screen) */}
                <div className="pt-12 px-2 pb-3 bg-white z-[50] relative border-b border-[#ECECEC]">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {tabs.map((tab) => (
                      <div 
                        key={tab.id}
                        className="relative px-3 py-1.5 rounded-full text-[11px] font-[600] tracking-wide cursor-default transition-colors z-10"
                      >
                        {activeTabId === tab.id && (
                          <motion.div
                            layoutId="active-tab"
                            className="absolute inset-0 bg-[#D62020] rounded-full z-[-1]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span className={activeTabId === tab.id ? "text-white" : "text-[#555]"}>
                          {tab.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Images */}
                <div className="flex-1 relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      src={caseStudySections[activeIndex].image}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 80,
                        damping: 18,
                        mass: 0.9
                      }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN - SCROLLABLE CONTENT */}
        <div ref={rightColumnRef} className="w-full md:w-[58%] px-6 md:px-12 lg:px-24 py-22">
          
          {caseStudySections.map((section, idx) => (
            <div 
              key={section.id} 
              data-index={idx}
              className="case-study-section min-h-[90vh] flex flex-col justify-center py-22"
            >
              {/* Mobile Image (Hidden on Desktop) */}
              <div className="block md:hidden w-full h-[400px] rounded-[30px] overflow-hidden mb-12 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-[6px] border-[#111]">
                <img src={section.image} alt="Mockup" className="w-full h-full object-cover" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut" 
                }}
                className="w-full max-w-[600px]"
              >
                {section.content}
              </motion.div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
