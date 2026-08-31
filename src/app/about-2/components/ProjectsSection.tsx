"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './ui/LiveProjectButton';

const PROJECTS = [
  {
    num: "01",
    label: "(Client)",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    label: "(Personal)",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    label: "(Client)",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="bg-[#F5F5F5] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] - sm:- md:- z-20 w-full relative py-16 md:py-24"
    >
      <style dangerouslySetInnerHTML={{__html: `
        #projects.relative .hero-heading {
          background: linear-gradient(180deg, #E10600 0%, #B00000 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: transparent !important;
        }
      `}} />
      <div className="pt-20 sm:pt-24 md:pt-32 px-5 sm:px-8 md:px-10">
        <h2 className="hero-heading text-center text-4xl md:text-[54px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
          Project
        </h2>

        {/* Outer wrapper: relative layout container */}
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 sm:gap-16 md:gap-24 relative">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.num} project={project} index={idx} total={PROJECTS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: typeof PROJECTS[0], index: number, total: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this card's container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate subtle scaling and opacity fade for stacking cards
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  return (
    <div 
      ref={containerRef} 
      className="sticky w-full self-start h-[85vh] flex items-start justify-center"
      style={{
        // Stack cards with offset so their headers are slightly visible
        top: `calc(90px + ${index * 24}px)`,
        // Ensure subsequent cards render on top of previous ones
        zIndex: 10 + index,
      }}
    >
      <motion.div 
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#E5E5E5] bg-[#FFFFFF] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 shadow-md"
        style={{
          scale,
          opacity,
          transformOrigin: 'top center',
        }}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#E10600]">
              {project.num}
            </span>
            <div className="flex flex-col items-start gap-1">
              <span className="font-medium text-[#666666] text-xs sm:text-sm md:text-base">
                {project.label}
              </span>
              <span className="font-bold text-[#1F1F1F] uppercase text-lg sm:text-xl md:text-3xl tracking-wide">
                {project.name}
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
            <LiveProjectButton />
          </div>
        </div>

        {/* Mobile Live button */}
        <div className="sm:hidden w-full flex justify-end">
          <LiveProjectButton />
        </div>

        {/* Bottom Row: Image Grid */}
        <div className="flex w-full gap-3 sm:gap-4 md:gap-6 mt-4">
          {/* Left Column 40% */}
          <div className="flex flex-col w-[40%] gap-3 sm:gap-4 md:gap-6">
            <img 
              src={project.images.col1_1} 
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] h-[clamp(130px,16vw,230px)]"
            />
            <img 
              src={project.images.col1_2} 
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] h-[clamp(160px,22vw,340px)]"
            />
          </div>
          {/* Right Column 60% */}
          <div className="w-[60%] h-full">
            <img 
              src={project.images.col2} 
              alt={`${project.name} preview 3`}
              className="w-full h-full min-h-[302px] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            />
          </div>
        </div>

      </motion.div>
    </div>
  );
}
