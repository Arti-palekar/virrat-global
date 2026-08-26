import React from 'react';
import FadeIn from './ui/FadeIn';

const SERVICES = [
  {
    num: "01",
    title: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    title: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    title: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    title: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    title: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-[#FFFFFF] text-[#1F1F1F] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 w-full">
      <h2 className="font-black uppercase text-center text-4xl md:text-[54px] mb-16 sm:mb-20 md:mb-28 text-[#1F1F1F]">
        Services
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30} className="w-full">
            <div className="flex items-start md:items-center py-8 sm:py-10 md:py-12 border-t border-[#E5E5E5] last:border-b">
              <div className="w-[30%] sm:w-[25%] shrink-0">
                <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none block text-[#E10600]">
                  {service.num}
                </span>
              </div>
              <div className="flex flex-col gap-2 md:gap-4 pl-4 sm:pl-8">
                <h3 className="font-medium uppercase text-[#1F1F1F] text-[clamp(1rem,2.2vw,2.1rem)]">
                  {service.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#666666]">
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
