"use client";

import React, { useState } from 'react';

const team = [
  {
    name: "Andrei Baranov",
    role: "Design Chief",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225202_f9e684f3-dc19-469a-8142-eb391bfc601b.png&w=1280&q=85",
    description: "Andrei sets the visual direction of every project. He turns rough ideas into clear, confident design languages that feel effortless yet leave a lasting impression."
  },
  {
    name: "Daria Lebedeva",
    role: "Interface Expert",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225149_7937e8ea-3b0a-46ab-919f-775627695a23.png&w=1280&q=85",
    description: "Daria crafts interfaces people understand at first glance. Every screen she designs balances clarity and character, making complex products feel simple and warm."
  },
  {
    name: "Ivan Sorokin",
    role: "Concept Chief",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225153_f2b1fc04-776a-4f2e-879b-b764ea762e77.png&w=1280&q=85",
    description: "Ivan shapes the ideas behind the work. He digs into every brief until the core story emerges, then builds concepts that give each project its reason to exist."
  },
  {
    name: "Anna Fedorova",
    role: "Brand Consultant",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225847_f456fd9c-8938-4103-836d-51b0e88a9510.png&w=1280&q=85",
    description: "Anna helps brands find their voice. From positioning to tone, she builds identities that stay consistent everywhere and grow stronger with every appearance."
  },
  {
    name: "Pavel Smirnov",
    role: "Movement Artist",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225854_3958a522-6203-4f84-a7fa-3b3f1dcd7256.png&w=1280&q=85",
    description: "Pavel brings stillness to life. His motion work adds rhythm and personality to every product, guiding attention with transitions that feel natural and precise."
  },
  {
    name: "Olga Kravtsova",
    role: "UX Specialist",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231111_fcefaa07-6851-4fdc-ac7b-98754ac9d5c4.png&w=1280&q=85",
    description: "Olga studies how people actually use what we make. Her research keeps every decision grounded in real behavior, so the work serves users and not assumptions."
  },
  {
    name: "Igor Zakharenko",
    role: "Graphic Creator",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231124_9a1505aa-8c44-4046-aff8-1aa0bc7b3ef3.png&w=1280&q=85",
    description: "Igor gives every project its finishing touch. From typography to illustration, he sweats the visual details that separate good work from unforgettable work."
  },
  {
    name: "Ksenia Romanova",
    role: "Studio Head",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_230413_62e8b331-89be-4d35-84fe-330ba9b1b64f.png&w=1280&q=85",
    description: "Ksenia keeps the studio moving as one. She connects people, plans, and priorities so every project ships on time without losing the craft it deserves."
  }
];

export default function KollektivaHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = team[activeIndex];

  return (
    <section className="relative h-[75vh] min-h-[600px] md:min-h-0 w-full overflow-hidden font-geist text-white select-none">
      
      {/* Background Portraits Stack */}
      <div className="absolute inset-0 z-0">
        {team.map((member, idx) => (
          <div
            key={`portrait-${idx}`}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out"
            style={{
              backgroundImage: `url("${member.image}")`,
              opacity: activeIndex === idx ? 1 : 0
            }}
          />
        ))}
      </div>

      {/* Light Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/25 z-5 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-6 pt-8 sm:px-10 sm:pb-8 sm:pt-10 lg:px-16 lg:pb-12 lg:pt-12">
        
        {/* Top Zone - Headline + Bio */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-16">
          <h1 className="max-w-xl text-3xl sm:text-5xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-white">
            Kollektiva is the talent you build with each&nbsp;day
          </h1>
          
          <div className="max-w-xs md:pt-2">
            <p 
              key={activeSlide.name}
              className="text-sm font-medium leading-relaxed text-white/80 sm:text-base animate-[fadeIn_0.5s_ease]"
            >
              {activeSlide.description}
            </p>
          </div>
        </div>

        {/* Bottom Zone - Avatar Picker + Meta Footer */}
        <div className="flex flex-col gap-8">
          
          {/* Avatar Picker Row */}
          <div className="flex items-end gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {team.map((member, idx) => (
              <button
                key={`avatar-picker-${idx}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show ${member.name}`}
                className="flex shrink-0 flex-col items-center gap-2 cursor-pointer focus:outline-none"
              >
                {/* Active Indicator Dot */}
                <span 
                  className="h-1 w-1 rounded-full bg-white transition-opacity duration-300"
                  style={{ opacity: activeIndex === idx ? 1 : 0 }}
                />
                
                {/* Circular Thumbnail */}
                <span className="block h-10 w-10 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-white/10 hover:border-white/30 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </span>
              </button>
            ))}
          </div>

          {/* Meta Footer */}
          <div className="border-t border-white/20 pt-5 flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
            <div className="flex items-center gap-6">
              {/* Name */}
              <span 
                key={`footer-name-${activeSlide.name}`} 
                className="text-white animate-[fadeIn_0.5s_ease]"
              >
                {activeSlide.name}
              </span>
              
              {/* Role (hidden on mobile) */}
              <span 
                key={`footer-role-${activeSlide.role}`}
                className="hidden sm:inline text-white/70"
              >
                {activeSlide.role}
              </span>

              {/* Static Tenure (hidden until md) */}
              <span className="hidden md:inline text-white/70">
                In the business since 2020
              </span>
            </div>

            {/* WhatsApp Link */}
            <a 
              href="#" 
              className="underline underline-offset-4 transition-colors hover:text-white/70 text-white"
            >
              WhatsApp
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
