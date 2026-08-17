"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Send, Rocket, Calendar, Layout, PieChart, BarChart2, Mail, Target } from "lucide-react";

const tools = [
  { name: "Jasper", icon: Sparkles, pos: "max-md:left-[50%] max-md:top-[5%] md:left-[50%] md:top-[8%]" },
  { name: "Customer.io", icon: Send, pos: "max-md:left-[85%] max-md:top-[16%] md:left-[77%] md:top-[16%]" },
  { name: "Omnisend", icon: Rocket, pos: "max-md:left-[90%] max-md:top-[33%] md:left-[91%] md:top-[42%]" },
  { name: "Calendly", icon: Calendar, pos: "max-md:left-[85%] max-md:top-[67%] md:left-[86%] md:top-[71%]" },
  { name: "Webflow", icon: Layout, pos: "max-md:left-[70%] max-md:top-[90%] md:left-[64%] md:top-[90%]" },
  { name: "HubSpot", icon: PieChart, pos: "max-md:left-[30%] max-md:top-[90%] md:left-[35%] md:top-[90%]" },
  { name: "Klaviyo", icon: BarChart2, pos: "max-md:left-[15%] max-md:top-[67%] md:left-[13%] md:top-[71%]" },
  { name: "Brevo", icon: Mail, pos: "max-md:left-[10%] max-md:top-[33%] md:left-[8%] md:top-[42%]" },
  { name: "Ortto", icon: Target, pos: "max-md:left-[15%] max-md:top-[16%] md:left-[23%] md:top-[16%]" },
];

export default function DMTools() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathData, setPathData] = useState("");
  
  const dotRef = useRef<SVGCircleElement>(null);
  const toolsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // SVG Path calculation
  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current) return;
      const { offsetWidth: w, offsetHeight: h } = containerRef.current;
      
      const rx = w * 0.35;
      const ry = h * 0.45;
      
      const d = `M ${w / 2} 0 
                 H ${w - rx} 
                 A ${rx} ${ry} 0 0 1 ${w} ${ry} 
                 V ${h - ry} 
                 A ${rx} ${ry} 0 0 1 ${w - rx} ${h} 
                 H ${rx} 
                 A ${rx} ${ry} 0 0 1 0 ${h - ry} 
                 V ${ry} 
                 A ${rx} ${ry} 0 0 1 ${rx} 0 
                 Z`;
                 
      setPathData(d);
    };

    updatePath();
    const observer = new ResizeObserver(updatePath);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Proximity detection
  useEffect(() => {
    let animationFrameId: number;
    
    const trackDot = () => {
      if (dotRef.current && toolsRef.current.length > 0) {
        const dotRect = dotRef.current.getBoundingClientRect();
        // Dot center
        const dotX = dotRect.left + dotRect.width / 2;
        const dotY = dotRect.top + dotRect.height / 2;
        
        let closestIdx = -1;
        let minDistance = Infinity;
        
        toolsRef.current.forEach((tool, idx) => {
          if (!tool) return;
          const toolRect = tool.getBoundingClientRect();
          // Tool node center
          const toolX = toolRect.left + toolRect.width / 2;
          const toolY = toolRect.top + toolRect.height / 2;
          
          const dist = Math.hypot(dotX - toolX, dotY - toolY);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        });
        
        // Activate if within ~100px radius
        if (minDistance < 100) {
          setActiveIndex(prev => prev !== closestIdx ? closestIdx : prev);
        } else {
          setActiveIndex(prev => prev !== null ? null : prev);
        }
      }
      
      animationFrameId = requestAnimationFrame(trackDot);
    };
    
    animationFrameId = requestAnimationFrame(trackDot);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white overflow-hidden flex justify-center">
      <div 
        ref={containerRef}
        className="relative w-full max-w-[1000px] aspect-[3/4] md:aspect-[1.5/1] border-[1.5px] border-dotted border-zinc-300 bg-[#FAFAFA] flex items-center justify-center my-10 mx-auto"
        style={{ borderRadius: '35% / 45%' }}
      >
        
        {/* Animated Blue Active Dot on Border */}
        <svg className="absolute inset-0 pointer-events-none z-0" style={{ width: '100%', height: '100%' }}>
          <defs>
            <filter id="red-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur3" />
              <feMerge>
                <feMergeNode in="blur3" />
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {pathData && (
            <>
              {/* Invisible path guide for animation */}
              <path id="motionPath" d={pathData} fill="none" stroke="none" />
              
              {/* Glowing aura layer */}
              <circle r="4" fill="#E53935" filter="url(#red-glow)">
                <animateMotion dur="18s" repeatCount="indefinite" calcMode="linear">
                  <mpath href="#motionPath" />
                </animateMotion>
              </circle>
              
              {/* Solid center blue dot */}
              <circle ref={dotRef} r="4" fill="#E53935">
                <animateMotion dur="18s" repeatCount="indefinite" calcMode="linear">
                  <mpath href="#motionPath" />
                </animateMotion>
              </circle>
            </>
          )}
        </svg>

        {/* Center Content */}
        <div className="text-center max-w-[280px] md:max-w-[400px] px-4 z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-black tracking-tight text-[#E31E24] mb-3 md:mb-5">
            Tools We Use
          </h2>
          <p className="text-sm md:text-[15px] text-zinc-500 font-medium leading-relaxed">
            Powering intelligent automation with the tools, platforms, and technologies we trust.
          </p>
        </div>

        {/* Nodes */}
        {tools.map((tool, idx) => {
          // Hover logic: Manual hover takes priority. If not hovering anywhere, follow orbit dot.
          const isActive = hoverIndex === idx || (hoverIndex === null && activeIndex === idx);
          
          return (
            <div 
              key={idx}
              ref={(el) => { toolsRef.current[idx] = el; }}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 md:gap-3 cursor-pointer z-10 ${tool.pos}`}
            >
              <div 
                data-active={isActive}
                className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex items-center justify-center text-zinc-500 transition-all duration-300 data-[active=true]:bg-[#E53935] data-[active=true]:text-white data-[active=true]:scale-110 data-[active=true]:shadow-[0_0_12px_rgba(229,57,53,0.45),0_0_28px_rgba(229,57,53,0.2)]"
              >
                <tool.icon size={22} className="md:w-[26px] md:h-[26px] w-5 h-5" strokeWidth={1.5} />
              </div>
              <span 
                data-active={isActive}
                className="text-[10px] md:text-xs font-semibold text-zinc-400 transition-colors duration-300 data-[active=true]:text-[#E53935]"
              >
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
