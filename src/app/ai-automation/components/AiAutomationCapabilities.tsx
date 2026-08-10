"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AiAutomationCapabilities() {
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
            
            {/* LEFT COLUMN: Overview Card */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
              
              <div className="bg-[#FAF9F6] border border-zinc-100 rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[420px] shadow-sm relative overflow-hidden">
                <div>
                  <span className="inline-block text-[#E32620] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
                    AI CAPABILITIES
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-[1.05] mb-4 uppercase">
                    FROM INTELLIGENT IDEAS<br />TO AUTOMATED ACTION
                  </h2>
                  <p className="text-sm text-[#555555] max-w-[36ch] leading-relaxed mb-10 font-medium">
                    We combine AI, automation and software engineering to create systems that work continuously behind your business.
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 py-6 border-t border-b border-zinc-200/60 my-6 relative">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">INTEGRATE</span>
                    <span className="text-xl font-bold tracking-tight text-[#111111] flex items-center gap-1.5">
                      <span className="text-zinc-300 font-light">(</span> Systems
                    </span>
                  </div>

                  <div className="hidden sm:block absolute left-[45%] top-1/2 -translate-y-1/2 w-16 h-8 opacity-65 pointer-events-none">
                    <svg viewBox="0 0 76 34" fill="none" className="w-full h-full stroke-zinc-400 stroke-2">
                      <path d="M2 17C15.5 3 40.5 -4 72 25" strokeLinecap="round" strokeDasharray="3 3" />
                      <path d="M64 25L73.5 26.5L71 17.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">AUTOMATE</span>
                    <span className="text-xl font-heading font-extrabold text-[#E32620] flex items-center justify-end gap-1.5">
                      Workflows <span className="text-zinc-300 font-light text-xl ml-1.5">)</span>
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                  <div>
                    <span className="inline-block text-[11px] font-bold text-[#E32620] bg-[#E32620]/5 px-2.5 py-1 rounded-md mb-1.5">
                      CONCEPT TO DEPLOYMENT
                    </span>
                    <p className="text-xs text-[#555555] font-medium">
                      Strategy • Build • Optimization
                    </p>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#E32620] hover:bg-[#c11c1c] text-white text-[10px] font-bold tracking-wider uppercase rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    START BUILDING <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Bento Gallery Viewport */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div 
                ref={galleryViewportRef}
                className="relative w-full overflow-hidden lg:h-[calc(100vh-80px)] rounded-[32px]"
              >
                <div 
                  ref={galleryListRef}
                  className="w-full flex flex-col gap-6 lg:will-change-transform pb-[20vh]"
                >
                  {/* Row 1: AI Agents & Workflow Automation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                      <img 
                        src="/images/ai/ai_hero_image_1786340622810.png" 
                        alt="AI Agents" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 z-10">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          AI AGENTS
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                      <img 
                        src="/images/ai/ai_workflow_1786340682075.png" 
                        alt="Workflow Automation" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 z-10">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          WORKFLOW AUTOMATION
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Intelligent Chatbots & Document Intelligence */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                      <img 
                        src="/images/ai/ai_use_case_support_1786340644841.png" 
                        alt="Intelligent Chatbots" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 z-10">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          INTELLIGENT CHATBOTS
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                      <img 
                        src="/images/ai/ai_document_1786340700092.png" 
                        alt="Document Intelligence" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 z-10">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          DOCUMENT INTELLIGENCE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Data & Reporting & System Integrations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-7 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/3.5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                      <img 
                        src="/images/ai/ai_analytics_1786340664774.png" 
                        alt="Data & Reporting" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 z-10">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          DATA & REPORTING
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5 overflow-hidden rounded-[28px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-zinc-100/50 shadow-sm relative group bg-zinc-50">
                      <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" 
                        alt="System Integrations" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 z-10">
                        <span className="text-white text-[11px] uppercase font-bold tracking-widest">
                          SYSTEM INTEGRATIONS
                        </span>
                      </div>
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
