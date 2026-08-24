import React from 'react';
import Link from 'next/link';
import ContactButton from './ui/ContactButton';
import Magnet from './ui/Magnet';
import FadeIn from './ui/FadeIn';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-x-clip bg-[var(--about-off-white)]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 z-50">
        {['About', 'Price', 'Projects', 'Contact'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[var(--about-secondary-text)] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:text-[var(--about-primary-red)] transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-grow flex items-center justify-center relative w-full mt-6 sm:mt-4 md:-mt-5">
        <div className="w-full overflow-hidden text-center z-20">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>

        {/* Magnetic Hero Portrait */}
        <FadeIn 
          delay={0.6} 
          y={30} 
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
        >
          <Magnet padding={150} strength={3}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
              alt="Jack 3D Creator" 
              className="w-full h-auto object-contain pointer-events-none"
              draggable="false"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-30">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[var(--about-secondary-text)] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
