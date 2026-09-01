"use client";

import React, { useState } from 'react';

const tools = [
  { 
    name: "Google Ads", 
    iconUrl: "https://cdn.simpleicons.org/googleads/4285F4",
    color: "#4285F4", hoverShadow: "rgba(66, 133, 244, 0.6)" 
  },
  { 
    name: "Meta Ads", 
    iconUrl: "https://cdn.simpleicons.org/meta/0668E1",
    color: "#0668E1", hoverShadow: "rgba(6, 104, 225, 0.6)" 
  },
  { 
    name: "Google Analytics", 
    iconUrl: "https://cdn.simpleicons.org/googleanalytics/F4B400",
    color: "#F4B400", hoverShadow: "rgba(244, 180, 0, 0.6)" 
  },
  { 
    name: "Google Search Console", 
    iconUrl: "https://cdn.simpleicons.org/googlesearchconsole/4285F4",
    color: "#4285F4", hoverShadow: "rgba(66, 133, 244, 0.6)" 
  },
  { 
    name: "SEMrush", 
    iconUrl: "https://cdn.simpleicons.org/semrush/FF642D",
    color: "#FF642D", hoverShadow: "rgba(255, 100, 45, 0.6)" 
  },
  { 
    name: "Ahrefs", 
    iconUrl: "https://cdn.brandfetch.io/ahrefs.com/icon",
    color: "#F77A05", hoverShadow: "rgba(247, 122, 5, 0.6)" 
  },
  { 
    name: "Mailchimp", 
    iconUrl: "https://cdn.simpleicons.org/mailchimp/FFE01B",
    color: "#FFE01B", hoverShadow: "rgba(255, 224, 27, 0.6)" 
  },
  { 
    name: "HubSpot", 
    iconUrl: "https://cdn.simpleicons.org/hubspot/ff7a59",
    color: "#ff7a59", hoverShadow: "rgba(255, 122, 89, 0.6)" 
  },
  { 
    name: "Canva", 
    iconUrl: "https://cdn.brandfetch.io/canva.com/icon",
    color: "#00C4CC", hoverShadow: "rgba(0, 196, 204, 0.6)" 
  },
];

export default function DMTools() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center justify-center p-4 font-sans w-full py-10 md:py-16 relative z-10">
      <div className="w-full max-w-3xl mx-auto text-center mb-8">
        <h2 
          className="text-4xl md:text-[54px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Tools we use
        </h2>
        <p 
          className="text-[18px] text-[#666666] leading-[1.67] mb-0 max-w-[720px] mx-auto"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Powering intelligent automation with the tools, platforms, and technologies we trust.
        </p>
      </div>
      
      <div className="relative w-full max-w-[1300px]">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-6 lg:gap-8 px-4">
            {tools.map((tool, idx) => {
              return (
                <div key={idx} className="social-icon" style={{ '--hover-color': tool.color, '--hover-shadow': tool.hoverShadow } as React.CSSProperties}>
                  <div className="icon-container">
                    <img 
                      src={tool.iconUrl} 
                      alt={tool.name} 
                      className="w-14 h-14 object-contain transition-all duration-300 icon-image"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      
      <style>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          cursor: pointer;
          max-width: 100px;
        }
        
        .icon-container {
          display: inline-flex;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.03);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #111111;
        }
        
        .social-icon:hover .icon-container {
          transform: translateY(-10px) scale(1.1);
          background: var(--hover-color);
          box-shadow: 0 0 20px var(--hover-shadow);
        }
        
        .social-icon:hover .icon-image {
          animation: shake 0.5s;
          /* Filter to make the logo white on hover to contrast with the colored background */
          filter: brightness(0) invert(1);
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-5px) rotate(-5deg); }
          40% { transform: translateX(5px) rotate(5deg); }
          60% { transform: translateX(-5px) rotate(-5deg); }
          80% { transform: translateX(5px) rotate(5deg); }
        }
        
        .icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .social-icon:hover .icon-container::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
