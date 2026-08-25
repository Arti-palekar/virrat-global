"use client";

import React from 'react';

const team = [
  {
    name: "Sara Alcalde",
    role: "Designer",
    firstName: "Sara",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225202_f9e684f3-dc19-469a-8142-eb391bfc601b.png&w=1280&q=85",
    color: "#a259ff",
    position: "left-3 bottom-[25%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Paula Monteagudo",
    role: "Designer",
    firstName: "Paula",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85",
    color: "#0acf83",
    position: "left-3 top-8 flex items-center gap-1",
    isDog: false
  },
  {
    name: "Mar Albiol",
    role: "Designer and Management",
    firstName: "Mar",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225847_f456fd9c-8938-4103-836d-51b0e88a9510.png&w=1280&q=85",
    color: "#ff7262",
    position: "right-[20%] top-[40%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Kevin Smith",
    role: "Developer",
    firstName: "Kevin",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225854_3958a522-6203-4f84-a7fa-3b3f1dcd7256.png&w=1280&q=85",
    color: "#27ae60",
    position: "right-[15%] top-[55%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Samba",
    role: "Chief Happiness Officer",
    firstName: "Samba",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85",
    color: "#18a0fb",
    position: "right-4 top-8 flex flex-col items-center gap-1",
    isDog: true
  },
  {
    name: "Andrei Baranov",
    role: "Design Chief",
    firstName: "Andrei",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231124_9a1505aa-8c44-4046-aff8-1aa0bc7b3ef3.png&w=1280&q=85",
    color: "#a259ff",
    position: "left-3 bottom-[25%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Daria Lebedeva",
    role: "Interface Expert",
    firstName: "Daria",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225149_7937e8ea-3b0a-46ab-919f-775627695a23.png&w=1280&q=85",
    color: "#27ae60",
    position: "left-3 top-8 flex items-center gap-1",
    isDog: false
  },
  {
    name: "Ivan Sorokin",
    role: "Concept Chief",
    firstName: "Ivan",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225153_f2b1fc04-776a-4f2e-879b-b764ea762e77.png&w=1280&q=85",
    color: "#ff7262",
    position: "right-[20%] top-[40%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Anna Fedorova",
    role: "Brand Consultant",
    firstName: "Anna",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_230413_62e8b331-89be-4d35-84fe-330ba9b1b64f.png&w=1280&q=85",
    color: "#18a0fb",
    position: "right-[15%] bottom-12 flex items-center gap-1",
    isDog: false
  },
  {
    name: "Olga Petrova",
    role: "Project Manager",
    firstName: "Olga",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231111_fcefaa07-6851-4fdc-ac7b-98754ac9d5c4.png&w=1280&q=85",
    color: "#e54987",
    position: "right-4 top-[15%] flex items-center gap-1",
    isDog: false
  }
];

export default function KollektivaAdvisors() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 sm:px-10 lg:px-16 text-[#111111] font-sans select-none overflow-hidden">
      
      {/* 5-Column Grid Container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
        {team.map((member, idx) => (
          <div key={`advisor-card-${idx}`} className="flex flex-col group">
            
            {/* Card Image Container */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F3E7DC] shadow-sm border border-[#111111]/5 cursor-pointer">
              
              {/* Image with grayscale hover transition */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale contrast-[1.1] transition-all duration-[450ms] ease-in-out group-hover:grayscale-0 group-hover:contrast-100"
              />

              {/* Figma multiplayer live cursor pointer */}
              {member.isDog ? (
                <div className={`absolute z-10 ${member.position} transition-transform duration-[250ms] ease-out group-hover:translate-x-[8px] group-hover:-translate-y-[8px]`}>
                  {/* Floating paw print icon */}
                  <div className="w-6 h-6 rounded-full bg-[#18a0fb] flex items-center justify-center shadow-md mb-1 animate-bounce">
                    <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 4.5 1-1 3-2.5 3-4.5 0-1.66-1.34-3-3-3zm-4.5-2.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-11-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm13 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                    </svg>
                  </div>
                  {/* Name Pill label */}
                  <div 
                    className="text-white text-[11px] md:text-[12px] font-bold px-2.5 py-1 rounded shadow-md leading-none select-none tracking-wide"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.firstName}
                  </div>
                </div>
              ) : (
                <div className={`absolute z-10 flex items-center ${member.position} transition-transform duration-[250ms] ease-out group-hover:translate-x-[8px] group-hover:-translate-y-[8px]`}>
                  {/* Pointer cursor shape */}
                  <svg 
                    className="w-4.5 h-4.5 drop-shadow-md transform rotate-[-15deg] shrink-0" 
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
              )}

            </div>

            {/* Meta Labels outside card (under the image) */}
            <div className="mt-4 text-left">
              <h4 className="text-[15px] md:text-[16px] font-bold text-[#111111] leading-tight">
                {member.name}
              </h4>
              <p className="text-[12px] md:text-[13px] text-[#666666] font-medium mt-1">
                {member.role}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}


