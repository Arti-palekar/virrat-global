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

const cultureReels = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", likes: 368, comments: 19 },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", likes: 735, comments: 6 },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", likes: 265, comments: 48 },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", likes: 447, comments: 21 },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", likes: 816, comments: 27 },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", likes: 539, comments: 32 },
];

const ReelCard = ({ src, likes, comments }: { src: string, likes: number, comments: number }) => (
  <div className="w-[230px] sm:w-full aspect-[9/16] rounded-2xl md:rounded-[24px] overflow-hidden relative group shrink-0 cursor-pointer shadow-md">
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
    <div className="absolute bottom-4 left-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center">
          <img src="/virrat-red-logo.png" alt="Virrat" className="w-[85%] h-[85%] object-contain object-center" />
        </div>
        <span className="text-white text-xs font-semibold drop-shadow-md">virratglobal</span>
      </div>
    </div>
  </div>
);

export default function AboutJoinClan() {
  return (
    <section className="w-full bg-white relative overflow-hidden py-16 md:py-24">
      {/* Playful Decorative Elements */}
      <div className="absolute top-[10%] left-[8%] w-12 h-12 rounded-full border-4 border-red-100 opacity-80 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-6 h-6 rounded-full bg-yellow-400 opacity-60 pointer-events-none" />
      <div className="absolute top-[20%] right-[8%] w-4 h-4 rotate-45 bg-blue-400 opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">
        
        {/* Top Text Content */}
        <div className="text-center max-w-[800px] relative z-10 flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-[54px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
            Behind the <span className="text-[#E10600]">Madness</span>
          </h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2 mb-6">
            Work hard. Laugh harder. <span className="text-red-500">❤️</span>
          </h3>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[720px] mb-6">
            Great work happens when energy, ideas, and a little chaos come together. Get a glimpse of the real people behind Virrat our culture, banter, and everyday moments.
          </p>
          

        </div>

        {/* Middle Content - Row of 6 Cards */}
        <div className="w-full relative z-10 mb-10 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200">
          <div className="flex lg:grid lg:grid-cols-6 gap-4 md:gap-5 min-w-[1200px] lg:min-w-0">
            {cultureReels.map((reel, idx) => (
              <ReelCard 
                key={idx} 
                src={reel.src} 
                likes={reel.likes} 
                comments={reel.comments} 
              />
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="relative z-10">
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer">
            <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Follow us on Instagram →
          </button>
        </div>
        
      </div>
    </section>
  );
}
