import React from 'react';
import FadeIn from './ui/FadeIn';
import ContactButton from './ui/ContactButton';

export default function AboutSection({ theme }: { theme?: string }) {
  return (
    <section 
      id="about" 
      className="relative w-full px-5 sm:px-8 md:px-10 flex flex-col items-center overflow-hidden bg-[#F5F5F5] z-20 py-12 md:py-16"
    >

      
      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center max-w-[800px] mx-auto px-4">
        <FadeIn delay={0} y={20}>
          <style dangerouslySetInnerHTML={{__html: `
            .bold-beginnings-heading {
              color: #E10600 !important;
              -webkit-text-fill-color: #E10600 !important;
            }
          `}} />
          <h2 className="bold-beginnings-heading text-[48px] md:text-[64px] font-bold leading-none tracking-tighter">
            Bold Beginnings
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#111111] font-bold text-[20px] md:text-[22px] tracking-tight mt-4">
            A new name, a bigger vision and endless possibilities ahead!
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} y={20}>
          <p className="text-[18px] leading-[1.6] text-slate-500 max-w-[720px] mx-auto mt-4">
            Smartup India Ventures has rebranded as Virrat Global Pvt. Ltd., marking a renewed vision to help businesses grow through creativity, innovation, and strategy. With a legacy of 600+ brands, we offer end-to-end solutions in branding, packaging, digital marketing, website development, UI/UX, corporate gifting, and printing. Our strength lies in combining creative excellence with strategic thinking, while staying committed to integrity, commitment, and excellence as we build bold, modern, and globally relevant brands.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <div className="mt-8">
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
