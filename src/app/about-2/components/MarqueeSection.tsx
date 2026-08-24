"use client";

import React, { useEffect, useState } from 'react';

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

const ROW1_IMAGES = [...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11)];
const ROW2_IMAGES = [...IMAGES.slice(11), ...IMAGES.slice(11), ...IMAGES.slice(11)];

export default function MarqueeSection() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let sectionTop = 0;
    const section = document.getElementById('marquee-section');
    if (section) {
      sectionTop = section.offsetTop;
    }

    const handleScroll = () => {
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="marquee-section" 
      className="bg-[var(--about-off-white)] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 - Moves Right */}
        <div 
          className="flex gap-3 w-max"
          style={{
            transform: `translate3d(${scrollOffset - 200}px, 0, 0)`,
            willChange: 'transform'
          }}
        >
          {ROW1_IMAGES.map((src, idx) => (
            <img 
              key={`row1-${idx}`} 
              src={src} 
              alt="Portfolio item"
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
            />
          ))}
        </div>

        {/* Row 2 - Moves Left */}
        <div 
          className="flex gap-3 w-max"
          style={{
            transform: `translate3d(${-(scrollOffset - 200)}px, 0, 0)`,
            willChange: 'transform'
          }}
        >
          {ROW2_IMAGES.map((src, idx) => (
            <img 
              key={`row2-${idx}`} 
              src={src} 
              alt="Portfolio item"
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
