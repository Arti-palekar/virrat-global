import React from 'react';
import FadeIn from './ui/FadeIn';
import ContactButton from './ui/ContactButton';

export default function AboutSection({ theme }: { theme?: string }) {
  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden bg-[#F5F5F5] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]"
    >
      <style dangerouslySetInnerHTML={{__html: `
        #about.relative .hero-heading {
          background: linear-gradient(180deg, #E10600 0%, #B00000 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: transparent !important;
        }
      `}} />
      
      {/* Content */}
      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(2.5rem,8vw,110px)]">
            Bold Beginnings
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="mt-10 sm:mt-12 md:mt-14 flex flex-col items-center text-center max-w-[800px] gap-6 px-4">
          <p className="text-[#E10600] font-bold text-lg md:text-2xl uppercase tracking-wider">
            A new name, a bigger vision and endless possibilities ahead!
          </p>
          <p className="text-[#1F1F1F] font-semibold text-base md:text-xl leading-relaxed">
            Smartup India Ventures has rebranded as <strong>Virrat Global Pvt. Ltd.</strong>, marking a renewed vision to help businesses grow through creativity, innovation, and strategy.
          </p>
          <p className="text-[#333333] font-medium text-sm md:text-lg leading-relaxed">
            With a legacy of 600+ brands, we offer end-to-end solutions in branding, packaging, digital marketing, website development, UI/UX, corporate gifting, and printing.
          </p>
          <p className="text-[#333333] font-medium text-sm md:text-lg leading-relaxed">
            Our strength lies in combining creative excellence with strategic thinking, while staying committed to integrity, commitment, and excellence as we build bold, modern, and globally relevant brands.
          </p>
        </FadeIn>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
