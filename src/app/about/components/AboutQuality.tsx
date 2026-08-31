"use client";
import React, { useState } from 'react';

const QualityPoint = ({ number, title, desc, className = "", delay = "0s" }: { number: string, title: string, desc: string, className?: string, delay?: string }) => (
  <div className={`flex flex-col items-center text-center max-w-[260px] ${className}`} style={{ animationDelay: delay }}>
    <div className="w-12 h-12 rounded-full bg-[#E10600] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#E10600]/30 z-10 font-bold text-lg">
      {number}
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-6">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const images = [
  { src: "/img/about_vision.jpg", alt: "Our Vision" },
  { src: "/img/about_customer.jpg", alt: "Customer First" },
  { src: "/img/about_quality.jpg", alt: "Quality and Precision" },
  { src: "/img/about_innovation.jpg", alt: "Innovation" },
  { src: "/img/about_commitment.jpg", alt: "Our Commitment" }
];

const desktopPositions = [
  "shadow-lg -rotate-[24deg] -translate-x-32 translate-y-8 z-10 hover:!-rotate-[28deg] hover:!-translate-x-36",
  "shadow-xl -rotate-[12deg] -translate-x-16 translate-y-4 z-20 hover:!-rotate-[14deg] hover:!-translate-x-20",
  "shadow-2xl rotate-0 translate-x-0 translate-y-0 z-30 hover:!-translate-y-4",
  "shadow-xl rotate-[12deg] translate-x-16 translate-y-4 z-20 hover:!rotate-[14deg] hover:!translate-x-20",
  "shadow-lg rotate-[24deg] translate-x-32 translate-y-8 z-10 hover:!rotate-[28deg] hover:!translate-x-36"
];

const mobilePositions = [
  "shadow-lg -rotate-[20deg] -translate-x-16 translate-y-4 z-10",
  "shadow-xl -rotate-[10deg] -translate-x-8 translate-y-2 z-20",
  "shadow-2xl rotate-0 translate-x-0 translate-y-0 z-30",
  "shadow-xl rotate-[10deg] translate-x-8 translate-y-2 z-20",
  "shadow-lg rotate-[20deg] translate-x-16 translate-y-4 z-10"
];

const getPositionIndex = (i: number, activeIndex: number) => {
  let pos = (2 + i - activeIndex) % 5;
  if (pos < 0) pos += 5;
  return pos;
};

export default function AboutQuality() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="bg-[#fafafa] relative font-body py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center relative z-40 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Built on Vision. Driven by Excellence.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We create thoughtful digital experiences where creativity, precision, and innovation come together to deliver meaningful results.
          </p>
        </div>

        {/* Desktop Layout with Connectors */}
        <div className="hidden lg:block relative w-full h-[750px]">
          
          {/* Central Image Fan */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 z-30">
            <div className="relative w-full h-full group">
              {images.map((img, i) => {
                const posIndex = getPositionIndex(i, activeIndex);
                const posClass = desktopPositions[posIndex];
                const baseClass = "absolute inset-0 rounded-[2rem] overflow-hidden border-[6px] border-white origin-bottom bg-gray-200 transition-all duration-500 cursor-pointer";
                return (
                  <div 
                    key={i} 
                    className={`${baseClass} ${posClass}`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img src={img.src} className="w-full h-full object-cover" alt={img.alt} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* SVG Connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1200 750" style={{ overflow: 'visible' }}>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#E10600" />
              </marker>
            </defs>
            
            {/* 01: Top Left to Outer Left Image */}
            <path d="M 150 180 C 240 100, 200 280, 360 210" fill="none" stroke="#E10600" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
            
            {/* 02: Top Right to Outer Right Image */}
            <path d="M 1050 180 C 960 100, 1000 280, 840 210" fill="none" stroke="#E10600" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

            {/* 03: Bottom Left to Inner Left Image */}
            <path d="M 250 510 C 350 580, 260 410, 420 440" fill="none" stroke="#E10600" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

            {/* 04: Bottom Right to Inner Right Image */}
            <path d="M 950 510 C 850 580, 940 410, 780 440" fill="none" stroke="#E10600" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

            {/* 05: Bottom Center to Middle Image */}
            <path d="M 600 630 C 670 590, 530 550, 600 490" fill="none" stroke="#E10600" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
          </svg>

          {/* Floating Points */}
          {/* 01 - Top Left */}
          <div className="absolute -left-[6%] xl:-left-[8%] top-[15%] opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards] z-40" style={{ animationDelay: "0.1s" }}>
            <QualityPoint number="01" title="Our Vision" desc="Creative ideas that create meaningful business impact." />
          </div>
          
          {/* 02 - Top Right */}
          <div className="absolute -right-[6%] xl:-right-[8%] top-[15%] opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards] z-40" style={{ animationDelay: "0.2s" }}>
            <QualityPoint number="02" title="Customer First" desc="We build solutions around real customer needs." />
          </div>
          
          {/* 03 - Bottom Left */}
          <div className="absolute left-[5%] top-[65%] opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards] z-40" style={{ animationDelay: "0.3s" }}>
            <QualityPoint number="03" title="Quality & Precision" desc="Every detail is designed and delivered with care." />
          </div>
          
          {/* 04 - Bottom Right */}
          <div className="absolute right-[5%] top-[65%] opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards] z-40" style={{ animationDelay: "0.4s" }}>
            <QualityPoint number="04" title="Innovation" desc="We continuously bring new ideas and better solutions." />
          </div>

          {/* 05 - Bottom Center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[82%] opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards] z-40" style={{ animationDelay: "0.5s" }}>
            <QualityPoint number="05" title="Our Commitment" desc="Reliable service, quality work, and long-term relationships." className="max-w-[300px]" />
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden flex flex-col items-center gap-16 pb-10">
          
          {/* Mobile Images Fan */}
          <div className="relative w-full max-w-[280px] h-80 mt-10">
            {images.map((img, i) => {
              const posIndex = getPositionIndex(i, activeIndex);
              const posClass = mobilePositions[posIndex];
              const baseClass = "absolute inset-0 rounded-[2rem] overflow-hidden border-[4px] border-white origin-bottom bg-gray-200 transition-all duration-500 cursor-pointer";
              return (
                <div 
                  key={i} 
                  className={`${baseClass} ${posClass}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <img src={img.src} className="w-full h-full object-cover" alt={img.alt} />
                </div>
              );
            })}
          </div>

          {/* Mobile Points List */}
          <div className="flex flex-col gap-12 w-full px-4 items-center relative z-20 mt-10">
            <QualityPoint number="01" title="Our Vision" desc="Creative ideas that create meaningful business impact." className="mx-auto opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards]" delay="0.1s" />
            <QualityPoint number="02" title="Customer First" desc="We build solutions around real customer needs." className="mx-auto opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards]" delay="0.2s" />
            <QualityPoint number="03" title="Quality & Precision" desc="Every detail is designed and delivered with care." className="mx-auto opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards]" delay="0.3s" />
            <QualityPoint number="04" title="Innovation" desc="We continuously bring new ideas and better solutions." className="mx-auto opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards]" delay="0.4s" />
            <QualityPoint number="05" title="Our Commitment" desc="Reliable service, quality work, and long-term relationships." className="mx-auto opacity-0 animate-[fade-in-up-margin_0.8s_ease-out_forwards]" delay="0.5s" />
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up-margin {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
