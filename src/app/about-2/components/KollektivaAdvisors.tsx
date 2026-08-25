"use client";

import React from 'react';

const team = [
  {
    name: "Andrei Baranov",
    role: "Design Chief",
    firstName: "Andrei",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225202_f9e684f3-dc19-469a-8142-eb391bfc601b.png&w=1280&q=85",
    color: "#a259ff",
    position: "left-[-8px] top-[40%] flex-row-reverse items-center gap-1"
  },
  {
    name: "Daria Lebedeva",
    role: "Interface Expert",
    firstName: "Daria",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225149_7937e8ea-3b0a-46ab-919f-775627695a23.png&w=1280&q=85",
    color: "#0acf83",
    position: "left-4 top-8 flex-col items-start gap-1"
  },
  {
    name: "Ivan Sorokin",
    role: "Concept Chief",
    firstName: "Ivan",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225153_f2b1fc04-776a-4f2e-879b-b764ea762e77.png&w=1280&q=85",
    color: "#ff7262",
    position: "right-4 top-[30%] flex-row items-center gap-1"
  },
  {
    name: "Anna Fedorova",
    role: "Brand Consultant",
    firstName: "Anna",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225847_f456fd9c-8938-4103-836d-51b0e88a9510.png&w=1280&q=85",
    color: "#18a0fb",
    position: "right-4 bottom-12 flex-row-reverse items-center gap-1"
  },
  {
    name: "Pavel Smirnov",
    role: "Movement Artist",
    firstName: "Pavel",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225854_3958a522-6203-4f84-a7fa-3b3f1dcd7256.png&w=1280&q=85",
    color: "#f24e1e",
    position: "left-4 top-[50%] flex-row items-center gap-1"
  },
  {
    name: "Olga Kravtsova",
    role: "UX Specialist",
    firstName: "Olga",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231111_fcefaa07-6851-4fdc-ac7b-98754ac9d5c4.png&w=1280&q=85",
    color: "#e54987",
    position: "right-4 top-6 flex-col items-end gap-1"
  },
  {
    name: "Igor Zakharenko",
    role: "Graphic Creator",
    firstName: "Igor",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231124_9a1505aa-8c44-4046-aff8-1aa0bc7b3ef3.png&w=1280&q=85",
    color: "#a259ff",
    position: "left-6 bottom-10 flex-row items-center gap-1"
  },
  {
    name: "Ksenia Romanova",
    role: "Studio Head",
    firstName: "Ksenia",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_230413_62e8b331-89be-4d35-84fe-330ba9b1b64f.png&w=1280&q=85",
    color: "#0acf83",
    position: "left-4 top-10 flex-row-reverse items-center gap-1"
  }
];

export default function KollektivaAdvisors() {
  return (
    <section className="w-full bg-[#1b1c21] pb-16 md:pb-24 px-6 sm:px-10 lg:px-16 text-white font-sans select-none overflow-hidden border-t border-slate-800/40">
      
      {/* 4+4 Grid Container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
        {team.map((member, idx) => (
          <div key={`advisor-card-${idx}`} className="flex flex-col">
            
            {/* Card Image Container */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 shadow-md border border-slate-700/20 cursor-pointer">
              
              {/* Image with grayscale hover transition */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale contrast-[1.1] transition-all duration-[450ms] ease-in-out group-hover:grayscale-0 group-hover:contrast-100"
              />

              {/* Figma multiplayer live cursor pointer */}
              <div className={`absolute z-10 flex ${member.position}`}>
                {/* Pointer cursor shape */}
                <svg 
                  className="w-4.5 h-4.5 drop-shadow-md transform rotate-[-15deg]" 
                  style={{ color: member.color }}
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 3v15.2l3.8-3.8 2.9 6.8 2.5-1.1-2.9-6.8 5.2-.2L4.5 3z" />
                </svg>

                {/* Name Pill label */}
                <div 
                  className="text-white text-[11px] md:text-[12px] font-bold px-2.5 py-1 rounded shadow-md leading-none select-none tracking-wide"
                  style={{ backgroundColor: member.color }}
                >
                  {member.firstName}
                </div>
              </div>

            </div>

            {/* Meta Labels outside card (under the image) */}
            <div className="mt-4 text-left">
              <h4 className="text-[15px] md:text-[16px] font-bold text-white leading-tight">
                {member.name}
              </h4>
              <p className="text-[12px] md:text-[13px] text-slate-400 font-medium mt-1">
                {member.role}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
