import React, { useState } from 'react';
import { Sparkles, Send, Rocket, Calendar, Layout, PieChart, BarChart2, Mail, Target } from "lucide-react";

const tools = [
  { name: "Jasper", icon: Sparkles, color: "#fdf497", hoverShadow: "rgba(225, 48, 108, 0.6)" },
  { name: "Customer.io", icon: Send, color: "#7289da", hoverShadow: "rgba(114, 137, 218, 0.6)" },
  { name: "Omnisend", icon: Rocket, color: "#ff4500", hoverShadow: "rgba(255, 69, 0, 0.6)" },
  { name: "Calendly", icon: Calendar, color: "#006bff", hoverShadow: "rgba(0, 107, 255, 0.6)" },
  { name: "Webflow", icon: Layout, color: "#4353ff", hoverShadow: "rgba(67, 83, 255, 0.6)" },
  { name: "HubSpot", icon: PieChart, color: "#ff7a59", hoverShadow: "rgba(255, 122, 89, 0.6)" },
  { name: "Klaviyo", icon: BarChart2, color: "#37d8a6", hoverShadow: "rgba(55, 216, 166, 0.6)" },
  { name: "Brevo", icon: Mail, color: "#0092ff", hoverShadow: "rgba(0, 146, 255, 0.6)" },
  { name: "Ortto", icon: Target, color: "#000000", hoverShadow: "rgba(100, 100, 100, 0.6)" },
];

const SocialConnect = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="min-h-[80vh] bg-[#FFFFFF] flex flex-col items-center justify-center p-4 font-sans w-full py-20 relative z-10">
      <div className="w-full max-w-3xl mx-auto text-center mb-12">
        <h2 
          className="text-4xl md:text-[54px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] ] mb-5"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Tools we use
        </h2>
        <p 
          className="text-[18px] text-[#666666] leading-[1.67] mb-[24px] max-w-[720px] mx-auto"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Powering intelligent automation with the tools, platforms, and technologies we trust.
        </p>
      </div>
      
      <div className="relative w-full max-w-[1300px]">
        {/* 3D Glowing Container */}
        <div 
          className={`rounded-3xl bg-white border border-[#111111]/10 shadow-2xl backdrop-blur-3xl overflow-hidden p-8 transition-all duration-500 hover:scale-[1.02]`}
          style={{
            boxShadow:  '0 0 50px rgba(227, 38, 32, 0.15), 0 0 80px rgba(227, 38, 32, 0.1)'
          }}
        >
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-6 lg:gap-8">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div key={idx} className="social-icon" style={{ '--hover-color': tool.color, '--hover-shadow': tool.hoverShadow } as React.CSSProperties}>
                  <div className="icon-container">
                    <Icon className="w-8 h-8 transition-all duration-300" />
                  </div>
                  <span className="icon-label">{tool.name}</span>
                </div>
              );
            })}
          </div>
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
        }
        
        .icon-container {
          display: inline-flex;
          width: 80px;
          height: 80px;
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
        
        .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(5px);
        }
        
        .icon-label {
          margin-top: 12px;
          color: #111111;
          font-weight: 600;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover svg {
          animation: shake 0.5s;
          color: #FFFFFF;
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
};

export {SocialConnect};
