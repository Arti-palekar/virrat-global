"use client";

import React from 'react';

const team = [
  {
    name: "Sara Alcalde",
    role: "Designer",
    firstName: "Sara",
    image: "/team/paula-new.jpg",
    hoverImage: "/team/paula-new.jpg",
    color: "#a259ff",
    position: "left-3 bottom-[25%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Paula Monteagudo",
    role: "Designer",
    firstName: "Paula",
    image: "/team/new-team-image.png",
    hoverImage: "/team/paula-new.jpg",
    color: "#0acf83",
    position: "left-3 top-8 flex items-center gap-1",
    isDog: false
  },
  {
    name: "Mar Albiol",
    role: "Designer and Management",
    firstName: "Mar",
    image: "/team/new-team-image.png",
    color: "#ff7262",
    position: "right-[20%] top-[40%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Kevin Smith",
    role: "Developer",
    firstName: "Kevin",
    image: "/team/new-team-image.png",
    color: "#27ae60",
    position: "right-[15%] top-[55%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Samba",
    role: "Chief Happiness Officer",
    firstName: "Samba",
    image: "/team/new-team-image.png",
    color: "#18a0fb",
    position: "right-4 top-8 flex flex-col items-center gap-1",
    isDog: true
  },
  {
    name: "Andrei Baranov",
    role: "Design Chief",
    firstName: "Andrei",
    image: "/team/new-team-image.png",
    color: "#a259ff",
    position: "left-3 bottom-[25%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Daria Lebedeva",
    role: "Interface Expert",
    firstName: "Daria",
    image: "/team/new-team-image.png",
    color: "#27ae60",
    position: "left-3 top-8 flex items-center gap-1",
    isDog: false
  },
  {
    name: "Ivan Sorokin",
    role: "Concept Chief",
    firstName: "Ivan",
    image: "/team/new-team-image.png",
    color: "#ff7262",
    position: "right-[20%] top-[40%] flex items-center gap-1",
    isDog: false
  },
  {
    name: "Anna Fedorova",
    role: "Brand Consultant",
    firstName: "Anna",
    image: "/team/new-team-image.png",
    color: "#18a0fb",
    position: "right-[15%] bottom-12 flex items-center gap-1",
    isDog: false
  },
  {
    name: "Olga Petrova",
    role: "Project Manager",
    firstName: "Olga",
    image: "/team/new-team-image.png",
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
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-[#111111]/5 cursor-pointer bg-[#F5F5F5]">

              {/* Base Image with grayscale hover transition and face-focused zoom */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 z-10 w-full h-full object-cover origin-top grayscale contrast-[1.1] transition-all duration-[450ms] ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.15]"
              />

              {/* Hover Image (Immediate smooth crossfade, in full color) */}
              <div className="absolute inset-0 z-20 opacity-0 transition-opacity duration-[450ms] ease-out group-hover:opacity-100">
                <img
                  src={member.hoverImage || "/team/6c6143fb-0661-4ee4-a0d9-2ae4614ef58e.png"}
                  alt={`${member.name} hover`}
                  className="w-full h-full object-cover origin-top transition-transform duration-[450ms] ease-out group-hover:scale-[1.15]"
                />
              </div>

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


