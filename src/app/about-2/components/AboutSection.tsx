import React from 'react';
import FadeIn from './ui/FadeIn';
import ContactButton from './ui/ContactButton';

export default function AboutSection({ theme }: { theme?: string }) {
  return (
    <section 
      id="about" 
      className="relative w-full px-5 sm:px-8 md:px-10 pt-8 pb-24 flex flex-col items-center overflow-hidden bg-[#F5F5F5] z-20"
    >

      
      {/* Content */}
      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <style dangerouslySetInnerHTML={{__html: `
            .bold-beginnings-heading {
              color: #E10600 !important;
              -webkit-text-fill-color: #E10600 !important;
            }
          `}} />
          <h2 className="bold-beginnings-heading text-center text-4xl md:text-[54px] font-bold leading-[1.1] mb-5 tracking-tight">
            Bold Beginnings
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="mt-10 sm:mt-12 md:mt-14 flex flex-col items-center text-center max-w-[800px] gap-6 px-4">
          <p className="text-[#E10600] font-bold text-lg md:text-2xl uppercase tracking-wider">
            A new name, a bigger vision and endless possibilities ahead!
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-[720px]">
            Smartup India Ventures has rebranded as Virrat Global Pvt. Ltd., marking a renewed vision to help businesses grow through creativity, innovation, and strategy. With a legacy of 600+ brands, we offer end-to-end solutions in branding, packaging, digital marketing, website development, UI/UX, corporate gifting, and printing. Our strength lies in combining creative excellence with strategic thinking, while staying committed to integrity, commitment, and excellence as we build bold, modern, and globally relevant brands.
          </p>
        </FadeIn>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
