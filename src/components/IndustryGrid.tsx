'use client';

import React, { useState } from 'react';

interface IndustryItem {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const col1Items: IndustryItem[] = [
  {
    icon: (
      <svg className="w-[50px] h-[50px] text-[#D62020] stroke-current stroke-[1.25] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100">
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" />
        <path d="M30,68 H70" />
        <path d="M35,68 C35,48 65,48 65,68" />
        <path d="M48,48 C48,44 52,44 52,48" />
      </svg>
    ),
    title: "Food & Beverage\nIndustry",
    href: "#"
  },
  {
    icon: (
      <svg className="w-[50px] h-[50px] text-[#D62020] stroke-current stroke-[1.25] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100">
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" />
        <polygon points="50,35 75,45 50,55 25,45" />
        <path d="M35,49 V60 C35,65 50,70 50,70 C50,70 65,65 65,60 V49" />
        <path d="M65,45 V58 L68,62" />
      </svg>
    ),
    title: "Education &\nE-Learning",
    href: "#"
  }
];

const col2Items: IndustryItem[] = [
  {
    icon: (
      <svg className="w-[50px] h-[50px] text-[#D62020] stroke-current stroke-[1.25] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100">
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" />
        <polygon points="35,40 65,40 75,52 50,75 25,52" />
        <line x1="35" y1="40" x2="25" y2="52" />
        <line x1="65" y1="40" x2="75" y2="52" />
        <line x1="35" y1="40" x2="50" y2="75" />
        <line x1="65" y1="40" x2="50" y2="75" />
        <line x1="25" y1="52" x2="75" y2="52" />
      </svg>
    ),
    title: "Jewelry &\nPrecious Metals",
    href: "#"
  },
  {
    icon: (
      <svg className="w-[50px] h-[50px] text-[#D62020] stroke-current stroke-[1.25] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100">
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" />
        <path d="M50,45 C50,38 55,38 55,42 C55,45 50,48 50,51" />
        <polygon points="50,51 75,68 25,68" />
      </svg>
    ),
    title: "Fashion &\nApparel",
    href: "#"
  },
  {
    icon: (
      <svg className="w-[50px] h-[50px] text-[#D62020] stroke-current stroke-[1.25] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100">
        <path d="M25,65 L45,45 L60,55 L80,30" />
        <polyline points="70,30 80,30 80,40" />
        <path d="M20,80 H80" />
      </svg>
    ),
    title: "Financial Services\n& FinTech",
    href: "#"
  }
];

const col3Items: IndustryItem[] = [
  {
    icon: (
      <svg className="w-[50px] h-[50px] text-[#D62020] stroke-current stroke-[1.25] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100">
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" />
        <path d="M25,50 H40 L45,30 L53,70 L60,45 L65,55 L70,50 H75" />
      </svg>
    ),
    title: "Healthcare &\nMedical Services",
    href: "#"
  },
  {
    icon: (
      <svg className="w-[50px] h-[50px] text-[#D62020] stroke-current stroke-[1.25] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100">
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" />
        <path d="M35,35 H65 V50 C65,58 58,65 50,65 C42,65 35,58 35,50 Z" />
        <path d="M50,65 V72 M40,72 H60" />
        <path d="M35,40 H30 V48 H35" />
        <path d="M65,40 H70 V48 H65" />
      </svg>
    ),
    title: "Sports &\nEntertainment",
    href: "#"
  },
  {
    icon: (
      <svg className="w-[50px] h-[50px] text-[#D62020] stroke-current stroke-[1.25] fill-none transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100">
        <path d="M20,80 V40 C20,25 35,15 50,15 C65,15 80,25 80,40 V80" />
        <path d="M35,80 V45 C35,35 42,30 50,30 C58,30 65,35 65,45 V80" />
      </svg>
    ),
    title: "Real Estate &\nInfrastructure",
    href: "#"
  }
];

const GridCell = ({ item }: { item: IndustryItem }) => {
  return (
    <a
      href={item.href}
      className="group flex flex-col justify-between items-start p-6 md:p-10 w-full min-h-[220px] md:min-h-[250px] 
      bg-[#FAF9F6] border-b border-r border-black/5 hover:bg-[#F5F4EF]/60 
      transition-all duration-300 ease-in-out focus:outline-none"
    >
      <div>
        {item.icon}
      </div>
      <div className="mt-8">
        <h3 className="text-xl md:text-[26px] font-extrabold !text-[#09090b] leading-none tracking-tight whitespace-pre-line inline-flex items-center gap-1.5">
          {item.title}
          <span className="text-[#D62020] inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
            ↘
          </span>
        </h3>
      </div>
    </a>
  );
};

interface IllustrationCellProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const IllustrationCell = ({ searchQuery, setSearchQuery }: IllustrationCellProps) => {
  return (
    <div className="relative w-full min-h-[280px] bg-[#FAF9F6] border-b border-r border-black/5 p-6 md:p-10 flex flex-col justify-between overflow-hidden group">
      
      {/* Scattered line elements & circles background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90%" cy="20%" r="2" fill="#D62020" />
        <circle cx="80%" cy="80%" r="3" fill="#ff9048" />
        <line x1="75%" y1="15%" x2="85%" y2="25%" stroke="#000" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="10%" y1="75%" x2="25%" y2="85%" stroke="#D62020" strokeWidth="0.5" />
      </svg>

      {/* Custom Vector Line Character kneeling with telescope */}
      <div className="absolute right-6 bottom-4 w-[130px] h-[150px] pointer-events-none opacity-80 md:opacity-100 transition-transform duration-500 group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#D62020] stroke-[1.25] fill-none">
          {/* Kneeling Legs */}
          <path d="M20,90 H50 L40,75 L20,90 Z" />
          <path d="M50,90 H80 L70,70 L50,90 Z" />
          {/* Torso */}
          <path d="M45,75 V50 H60 V70" />
          {/* Arms holding Telescope */}
          <path d="M58,50 L75,40" />
          <path d="M50,55 L70,42" />
          {/* Telescope */}
          <line x1="55" y1="48" x2="85" y2="35" strokeWidth="2" stroke="#D62020" />
          <polygon points="82,33 88,31 87,38 81,40" className="fill-[#D62020]/10" />
          {/* Head */}
          <circle cx="50" cy="40" r="7" />
          {/* Floating dots & dashes around telescope path */}
          <circle cx="92" cy="32" r="1.5" className="fill-[#D62020]" />
          <line x1="88" y1="30" x2="94" y2="28" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Empty spacing to allow illustration room */}
      </div>

      {/* Floating search input */}
      <div className="relative z-10 w-full max-w-[240px] bg-zinc-50 border border-black/10 rounded-xl p-2.5 flex items-center gap-2 transition-colors duration-300 focus-within:border-[#D62020]/40">
        <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you looking for?" 
          className="bg-transparent text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none w-full font-medium"
        />
      </div>
    </div>
  );
};

export function IndustryGrid() {
  const [searchQuery, setSearchQuery] = useState('');

  const filterItem = (item: IndustryItem) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase());

  const filteredCol1 = col1Items.filter(filterItem);
  const filteredCol2 = col2Items.filter(filterItem);
  const filteredCol3 = col3Items.filter(filterItem);

  return (
    <section className="bg-[#FAF9F6] border-t border-black/5 relative z-10 w-full pb-16">
      <style>{`
        .text-slate-900 {
          color: lab(100 0 0);
        }
      `}</style>
      <div className="flex flex-col md:flex-row w-full border-l border-black/5">
        
        {/* Column 1 - ~38% width */}
        <div className="w-full md:w-[38%] flex flex-col">
          {filteredCol1.length > 0 && <GridCell item={filteredCol1[0]} />}
          <IllustrationCell searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          {filteredCol1.slice(1).map((item, index) => (
            <GridCell key={`col1-${index}`} item={item} />
          ))}
        </div>

        {/* Column 2 - ~31% width */}
        <div className="w-full md:w-[31%] flex flex-col border-l border-black/5">
          {filteredCol2.map((item, index) => (
            <GridCell key={`col2-${index}`} item={item} />
          ))}
        </div>

        {/* Column 3 - ~31% width */}
        <div className="w-full md:w-[31%] flex flex-col border-l border-black/5">
          {filteredCol3.map((item, index) => (
            <GridCell key={`col3-${index}`} item={item} />
          ))}
        </div>

      </div>

      {/* Segmented Floating Pill Nav */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#0d131a]/95 border border-white/5 shadow-2xl backdrop-blur-md">
          {/* Grid Layout Icon Button */}
          <button className="p-2.5 rounded-full text-zinc-400 hover:text-white transition-colors">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="9" />
              <rect x="14" y="3" width="7" height="5" />
              <rect x="14" y="12" width="7" height="9" />
              <rect x="3" y="16" width="7" height="5" />
            </svg>
          </button>
          
          {/* Services Button */}
          <a
            href="#services"
            className="px-6 py-2 text-[14px] font-semibold rounded-full text-[#FFFFFF] hover:opacity-90 transition-opacity"
          >
            Services
          </a>

          {/* Industry active Button */}
          <button
            className="px-6 py-2 text-[14px] font-bold rounded-full bg-[#D62020]/10 text-[#D62020] border border-[#D62020]/20 shadow-sm"
          >
            Industry
          </button>
        </div>
      </div>
    </section>
  );
}

export default IndustryGrid;
