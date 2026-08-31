'use client';

import React from 'react';
import { Play, Heart, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const col1Reels = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "TEAM LIFE" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "BTS" },
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "OFFICE FUN" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "VIRRAT VIBES" },
];

const col2Reels = [
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "JUST FOR FUN" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "CREATIVE CHAOS" },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "TEAM LIFE" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "BTS" },
];

const col3Reels = [
  { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "OFFICE FUN" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "VIRRAT VIBES" },
  { src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "JUST FOR FUN" },
  { src: "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", label: "CREATIVE CHAOS" },
];

const ReelCard = ({ src, label }: { src: string, label: string }) => (
  <div className="w-full aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden relative group shrink-0 cursor-pointer shadow-sm">
    <img src={src} alt="Team reel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
    
    {/* Instagram Reel Icon top right */}
    <div className="absolute top-4 right-4 text-white opacity-90 drop-shadow-md">
      <InstagramIcon className="w-5 h-5" />
    </div>

    {/* Play Button center */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl">
        <Play className="w-6 h-6 text-white ml-1 fill-white" />
      </div>
    </div>
    
    {/* Engagement info bottom */}
    <div className="absolute bottom-4 left-4 flex flex-col gap-2">
      <div className="flex items-center gap-4 text-white text-sm font-medium drop-shadow-md">
        <span className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
          <Heart className="w-5 h-5" />
          {Math.floor(Math.random() * 900) + 100}
        </span>
        <span className="flex items-center gap-1.5">
          <MessageCircle className="w-5 h-5" />
          {Math.floor(Math.random() * 50) + 5}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center overflow-hidden border border-white/20">
          <img src="/virrat-logo.png" alt="Virrat" className="w-full h-full object-cover opacity-80" />
        </div>
        <span className="text-white text-xs font-semibold drop-shadow-md">virratglobal</span>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ reels, reverse = false, duration = 30 }: { reels: {src: string, label: string}[], reverse?: boolean, duration?: number }) => {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <div 
        className={`flex flex-col gap-4 md:gap-6 ${reverse ? 'animate-scroll-down' : 'animate-scroll-up'}`}
        style={{ '--duration': `${duration}s` } as React.CSSProperties}
      >
        {/* Double the images for seamless loop */}
        {[...reels, ...reels].map((reel, idx) => (
          <ReelCard key={idx} src={reel.src} label={reel.label} />
        ))}
      </div>
    </div>
  );
};

export default function AboutJoinClan() {
  return (
    <section className="w-full bg-white relative overflow-hidden py-16 md:py-24">
      <style>{`
        .animate-scroll-up {
          animation: scroll-up var(--duration, 30s) linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down var(--duration, 30s) linear infinite;
        }
        .pause-on-hover:hover .animate-scroll-up,
        .pause-on-hover:hover .animate-scroll-down {
          animation-play-state: paused;
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-10">
            {/* Playful Decorative Elements */}
            <div className="absolute top-[-20px] left-[-20px] w-12 h-12 rounded-full border-4 border-red-100 opacity-80" />
            <div className="absolute bottom-[20%] right-[-10px] w-6 h-6 rounded-full bg-yellow-400" />
            <div className="absolute top-[20%] right-[10%] w-4 h-4 rotate-45 bg-blue-400" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold tracking-wider uppercase mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Virrat Culture
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Behind the Madness
            </h2>
            
            <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-6">
              Work hard. Laugh harder. ❤️
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We believe great work happens when energy, ideas, and a little chaos collide. Get a glimpse of the real people behind Virrat—no filters, no scripts. Just our everyday culture, office banter, and the moments that make us who we are.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-slate-800 font-medium">More laughs. More creativity. More Virrat.</span>
            </div>
            
            <div className="mt-6">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5 flex items-center gap-2 group">
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Follow us on Instagram →
              </button>
            </div>
          </div>

          {/* Right Content - Instagram Reels Wall */}
          <div className="w-full lg:w-7/12 relative pause-on-hover">
            {/* Background decorative dots */}
            <div className="absolute bottom-[-30px] right-[-20px] w-16 h-16 rounded-full bg-red-50 z-0" />
            <div className="absolute top-[-20px] left-[20px] w-8 h-8 rounded-full bg-blue-50 z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10 h-[600px] md:h-[750px] overflow-hidden p-2">
              
              {/* Top/Bottom Fade Gradients */}
              <div className="absolute top-0 left-0 w-full h-16 md:h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

              {/* Column 1 (Scrolls Up) */}
              <MarqueeColumn reels={col1Reels} reverse={false} duration={35} />

              {/* Column 2 (Scrolls Down) */}
              <div className="pt-12">
                <MarqueeColumn reels={col2Reels} reverse={true} duration={45} />
              </div>

              {/* Column 3 (Scrolls Up) - Hidden on mobile */}
              <div className="hidden md:block w-full h-full pt-6">
                <MarqueeColumn reels={col3Reels} reverse={false} duration={40} />
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
