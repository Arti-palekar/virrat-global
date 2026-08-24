import React from 'react';
import FadeIn from './ui/FadeIn';
import AnimatedText from './ui/AnimatedText';
import ContactButton from './ui/ContactButton';

export default function AboutSection() {
  const redImageFilter = 'sepia(1) saturate(8) hue-rotate(-55deg) brightness(0.95)';

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
      
      {/* Decorative Icons (Monochrome Red filter applied) */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon icon" 
          className="w-full object-contain" 
          style={{ filter: redImageFilter }}
        />
      </FadeIn>
      
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D object" 
          className="w-full object-contain" 
          style={{ filter: redImageFilter }}
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego icon" 
          className="w-full object-contain" 
          style={{ filter: redImageFilter }}
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D group" 
          className="w-full object-contain" 
          style={{ filter: redImageFilter }}
        />
      </FadeIn>

      {/* Content */}
      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center">
          <AnimatedText 
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-[#1F1F1F] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
