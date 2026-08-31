"use client";

import React from 'react';

interface ConnectorLineProps {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  delay: number;
}

function ConnectorLine({ x1, y1, x2, y2, delay }: ConnectorLineProps) {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none anim-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <line 
        x1={x1} 
        y1={y1} 
        x2={x2} 
        y2={y2}
        stroke="rgba(0,0,0,0.15)" 
        strokeWidth="1" 
        vectorEffect="non-scaling-stroke" 
      />
    </svg>
  );
}

export default function LumenIndexSection() {
  const verticalPositions = ['12.6%', '37.5%', '61.9%', '86.2%'];
  const horizontalPositions = ['32.7%', '71.4%'];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white select-none font-manrope text-black py-16 md:py-24">
      {/* Styles Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://db.onlinewebfonts.com/c/ca3d10781128664daddf89bf2e2d1305?family=Graphik+LCG+Regular+Regular');
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');

        .font-graphik { 
          font-family: 'Graphik LCG Regular Regular', 'Graphik LCG', sans-serif; 
        }
        .font-manrope { 
          font-family: 'Manrope', sans-serif; 
        }

        @keyframes lumenFadeUp { 
          from { opacity: 0; transform: translateY(18px); }  
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes lumenFadeIn { 
          from { opacity: 0; }                                
          to { opacity: 1; } 
        }
        @keyframes lumenSlideInLeft { 
          from { opacity: 0; transform: translateX(-20px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes lumenSlideInRight { 
          from { opacity: 0; transform: translateX(20px); }  
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes lumenScaleIn { 
          from { opacity: 0; transform: scale(0.85); }       
          to { opacity: 1; transform: scale(1); } 
        }
        @keyframes lumenDrawLine { 
          from { opacity: 0; stroke-dashoffset: 100; }       
          to { opacity: 1; stroke-dashoffset: 0; } 
        }
        @keyframes lumenGridReveal { 
          from { opacity: 0; transform: scaleY(0); }         
          to { opacity: 1; transform: scaleY(1); } 
        }
        @keyframes lumenGridRevealH { 
          from { opacity: 0; transform: scaleX(0); }         
          to { opacity: 1; transform: scaleX(1); } 
        }

        .anim-fade-up { 
          opacity: 0; 
          animation: lumenFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .anim-fade-in { 
          opacity: 0; 
          animation: lumenFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .anim-slide-left { 
          opacity: 0; 
          animation: lumenSlideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .anim-slide-right { 
          opacity: 0; 
          animation: lumenSlideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .anim-scale-in { 
          opacity: 0; 
          animation: lumenScaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .anim-grid-v { 
          opacity: 0; 
          transform-origin: top;  
          animation: lumenGridReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .anim-grid-h { 
          opacity: 0; 
          transform-origin: left; 
          animation: lumenGridRevealH 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .anim-draw-line { 
          stroke-dasharray: 100; 
          stroke-dashoffset: 100; 
          animation: lumenDrawLine 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
      ` }} />

      {/* Layer 0: Background Video (Inverted and color adjusted for white background) */}
      <video
        className="absolute inset-0 w-full h-full object-cover anim-fade-in"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: 'invert(1) hue-rotate(180deg) contrast(1.15) brightness(0.95)' }}
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full flex items-center px-5 md:px-[35px] py-5 md:py-[27px] z-30">
          <div className="flex items-center gap-[40px]">
            {/* Logo Wordmark */}
            <div 
              className="font-graphik text-black text-[18px] md:text-[21px] leading-[21px] whitespace-nowrap anim-fade-up select-none cursor-pointer"
              style={{ animationDelay: '200ms' }}
            >
              LŪMEN // ÍNDEX
            </div>
          </div>
        </nav>

        {/* Main Heading */}
        <h1 
          className="font-graphik text-black font-normal leading-[1em] absolute anim-fade-up text-[32px] sm:text-[48px] md:text-[54px] top-[140px] sm:top-[160px] md:top-[178px] left-5 md:left-[35px] max-w-[300px] sm:max-w-[420px] md:max-w-[554px] select-none mb-5"
          style={{ animationDelay: '400ms' }}
        >
          Liquid Assets. Luminous Returns.
        </h1>

        {/* Grid Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Vertical Lines */}
          {verticalPositions.map((pos, idx) => (
            <div
              key={`v-line-${idx}`}
              className="absolute top-0 h-full w-px bg-black/[0.05] anim-grid-v"
              style={{ 
                left: pos,
                animationDelay: `${600 + idx * 100}ms`
              }}
            />
          ))}

          {/* Horizontal Lines */}
          {horizontalPositions.map((pos, idx) => (
            <div
              key={`h-line-${idx}`}
              className="absolute left-0 w-full h-px bg-black/[0.05] anim-grid-h"
              style={{ 
                top: pos,
                animationDelay: `${800 + idx * 150}ms`
              }}
            />
          ))}

          {/* Plus Intersection Marks (8 intersections) */}
          {horizontalPositions.map((hPos, hIdx) => (
            verticalPositions.map((vPos, vIdx) => {
              const delay = 1000 + (hIdx * 4 + vIdx) * 80;
              return (
                <div
                  key={`plus-${hIdx}-${vIdx}`}
                  className="absolute w-[10px] h-[10px] anim-scale-in pointer-events-none"
                  style={{ 
                    top: hPos, 
                    left: vPos,
                    animationDelay: `${delay}ms`
                  }}
                >
                  {/* Centered crosshair */}
                  <div className="absolute w-[10px] h-px bg-black/40 -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute w-px h-[10px] bg-black/40 -translate-x-1/2 -translate-y-1/2" />
                </div>
              );
            })
          ))}
        </div>

        {/* Central Nodes (Desktop only, hidden below md) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          
          {/* Node 1: CORE_ENTITY */}
          <div 
            className="absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-black/40 anim-scale-in"
            style={{ top: '27%', left: '60%', animationDelay: '1500ms' }}
          />
          <div 
            className="absolute flex flex-col anim-slide-left"
            style={{ top: '11%', left: '26%', animationDelay: '1100ms' }}
          >
            <span className="font-manrope text-black text-[13px] leading-[15.6px] whitespace-nowrap font-medium">
              [ CORE_ENTITY ]
            </span>
            <p className="font-manrope text-black/50 text-[11px] leading-[14px] mt-[4px] max-w-[160px]">
              Neural node processing real-time data streams.
            </p>
          </div>

          {/* Node 2: LUMINOUS_INSIGHT */}
          <div 
            className="absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-black/40 anim-scale-in"
            style={{ top: '58%', left: '32%', animationDelay: '1800ms' }}
          />
          <div 
            className="absolute flex flex-col anim-slide-left"
            style={{ top: '76%', left: '3%', animationDelay: '1400ms' }}
          >
            <span className="font-manrope text-black text-[13px] leading-[15.6px] whitespace-nowrap font-medium">
              [ LUMINOUS_INSIGHT ]
            </span>
            <p className="font-manrope text-black/50 text-[11px] leading-[14px] mt-[4px] max-w-[160px]">
              Deep-learning engine synthesizing raw inputs.
            </p>
          </div>

          {/* Node 3: CONNECTIVITY */}
          <div 
            className="absolute w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-black/40 anim-scale-in"
            style={{ top: '63%', left: '50%', animationDelay: '2100ms' }}
          />
          <div 
            className="absolute flex flex-col anim-slide-right"
            style={{ top: '50%', left: '78%', animationDelay: '1700ms' }}
          >
            <span className="font-manrope text-black text-[13px] leading-[15.6px] whitespace-nowrap font-medium">
              [ CONNECTIVITY ]
            </span>
            <p className="font-manrope text-black/50 text-[11px] leading-[14px] mt-[4px] max-w-[180px]">
              Latency-free transmission across distributed networks.
            </p>
          </div>

          {/* Elbow connector lines */}
          <ConnectorLine x1="38%" y1="14%" x2="52%" y2="14%" delay={1200} />
          <ConnectorLine x1="52%" y1="14%" x2="60%" y2="27%" delay={1400} />

          <ConnectorLine x1="32%" y1="58%" x2="20%" y2="74%" delay={1500} />
          <ConnectorLine x1="20%" y1="74%" x2="6%" y2="74%" delay={1700} />

          <ConnectorLine x1="78%" y1="53%" x2="63%" y2="53%" delay={1800} />
          <ConnectorLine x1="63%" y1="53%" x2="50%" y2="63%" delay={2000} />

        </div>

        {/* Bottom Row */}
        <div className="absolute bottom-5 md:bottom-[35px] left-5 md:left-[35px] right-5 md:right-[35px] flex flex-col md:flex-row items-start md:items-end justify-between gap-5 md:gap-0 z-20">
          
          {/* Left CTA Button */}
          <button 
            className="bg-[#AFDDFF] px-[16px] md:px-[20px] py-[10px] md:py-[12px] flex items-center gap-[10px] hover:bg-[#c8e8ff] transition-colors anim-fade-up cursor-pointer select-none border border-[#0066CC]/20"
            style={{ animationDelay: '900ms' }}
          >
            <span className="text-black text-[16px] leading-none select-none">&#10022;</span>
            <span className="font-manrope text-black text-[12px] md:text-[13px] leading-[15.6px] uppercase tracking-wide font-medium">
              Explore Private Banking
            </span>
          </button>

          {/* Right Info Card */}
          <div 
            className="relative max-w-[280px] hidden sm:block anim-slide-right"
            style={{ animationDelay: '1100ms' }}
          >
            {/* Badge above Card (Square corners) */}
            <div className="font-manrope text-black text-[13px] leading-[15.6px] bg-[#AFDDFF] px-[6px] py-[2px] inline-block mb-[10px] select-none font-medium border border-[#0066CC]/20">
              NOT A BANK — AN ECOSYSTEM
            </div>
            
            {/* Card Body */}
            <div className="relative p-[20px] min-h-[168px] flex flex-col justify-between">
              {/* SVG Chamfered Border */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 280 168" 
                preserveAspectRatio="none"
              >
                <polygon 
                  points="0.5,0.5 279.5,0.5 279.5,167.5 30,167.5 0.5,137.5"
                  fill="none" 
                  stroke="#0066CC" 
                  strokeWidth="1" 
                  vectorEffect="non-scaling-stroke" 
                />
              </svg>

              <p className="relative font-manrope text-black/80 text-[13px] leading-[18px] mb-[18px] select-text">
                Maps the complexity of modern finance with a partner that brings clarity and organic growth to your portfolio.
              </p>
              
              <span className="relative font-manrope text-[#0066CC] text-[13px] leading-[15.6px] cursor-pointer hover:underline uppercase select-none font-semibold">
                VIEW_TRANREENCY_REPORT
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
