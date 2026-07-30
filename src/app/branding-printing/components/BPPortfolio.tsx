"use client";

import React from 'react';

const leftColImages = [
  "/images/portfolio/branding_stationery.png",
  "/images/portfolio/packaging_box.png",
  "/images/portfolio/editorial_brochure.png",
  "/images/portfolio/business_cards.png",
  "/images/portfolio/poster_mockup.png"
];

const centerColImages = [
  "/images/portfolio/packaging_box.png",
  "/images/portfolio/editorial_brochure.png",
  "/images/portfolio/branding_stationery.png"
];

const rightColImages = [
  "/images/portfolio/business_cards.png",
  "/images/portfolio/poster_mockup.png",
  "/images/portfolio/branding_stationery.png",
  "/images/portfolio/packaging_box.png",
  "/images/portfolio/editorial_brochure.png"
];

export default function BPPortfolio() {
  return (
    <div className="bg-black text-white w-full overflow-hidden font-sans">
      
      {/* Sticky Header Section */}
      <div className="relative">
        <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0 z-0">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] relative z-10 font-heading">
            CRAFTING SLEEK
            <br />
            BRAND IDENTITIES
            <br />
            <span className="text-[#D62020]">PRINTED TO PERFECTION. 👇</span>
          </h1>
        </section>
      </div>

      {/* Grid Gallery Section */}
      <section className="text-white w-full bg-slate-950 relative z-10 py-2">
        <div className="grid grid-cols-12 gap-2 px-2">
          
          {/* Left Column (col-span-4) */}
          <div className="grid gap-2 col-span-4">
            {leftColImages.map((src, idx) => (
              <figure key={`left-${idx}`} className="w-full">
                <img
                  src={src}
                  alt={`Branding & Printing Showcase ${idx + 1}`}
                  className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md hover:scale-[1.02] hover:opacity-95"
                />
              </figure>
            ))}
          </div>

          {/* Sticky Center Column (col-span-4) */}
          <div className="sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3 py-2">
            {centerColImages.map((src, idx) => (
              <figure key={`center-${idx}`} className="w-full h-full">
                <img
                  src={src}
                  alt={`Center Showcase ${idx + 1}`}
                  className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-md hover:scale-[1.02] hover:opacity-95"
                />
              </figure>
            ))}
          </div>

          {/* Right Column (col-span-4) */}
          <div className="grid gap-2 col-span-4">
            {rightColImages.map((src, idx) => (
              <figure key={`right-${idx}`} className="w-full">
                <img
                  src={src}
                  alt={`Right Showcase ${idx + 1}`}
                  className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md hover:scale-[1.02] hover:opacity-95"
                />
              </figure>
            ))}
          </div>

        </div>
      </section>

      {/* Oversized Footer Branding */}
      <footer className="group bg-slate-950 pt-20 relative z-10">
        <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-zinc-400 to-zinc-800 bg-clip-text text-transparent transition-all ease-linear tracking-tighter">
          VIRRAT
        </h1>
        <div className="bg-black h-40 relative z-20 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
      </footer>

    </div>
  );
}
