"use client";

import Image from "next/image";

/* ─── SERVICE ITEMS ─────────────────────────────────────────
   Using Unsplash images that represent each branding / printing
   service. Grayscale by default, full-colour on hover.
────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    title: "Business Cards",
    tag: "Print Stationery",
  },
  {
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=600&q=80",
    title: "Packaging Design",
    tag: "Product Branding",
  },
  {
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
    title: "Catalogue Design",
    tag: "Print Collateral",
  },
  {
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=600&q=80",
    title: "Stationery Kit",
    tag: "Corporate Suite",
  },
  {
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    title: "Logo & Brand Identity",
    tag: "Brand Strategy",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "Standee & Roll-Up",
    tag: "Outdoor Print",
  },
  {
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80",
    title: "Vehicle Branding",
    tag: "Fleet Wrap",
  },
  {
    image: "https://images.unsplash.com/photo-1546198632-9ef6368bef12?w=600&q=80",
    title: "Menu Design",
    tag: "Restaurant Print",
  },
];

/* Duplicate for seamless infinite loop */
const MARQUEE_SET = [...SERVICES, ...SERVICES, ...SERVICES];

export default function BPServicesMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24">

      {/* ── Background SVG Accent ──────────────────────────── */}
      <svg
        className="absolute right-0 bottom-0 text-[#F0F0F0] pointer-events-none"
        fill="none"
        height="154"
        viewBox="0 0 460 154"
        width="460"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#bp-clip)">
          <path
            d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
          />
        </g>
        <defs>
          <clipPath id="bp-clip">
            <rect fill="white" height="154" width="460" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">


          <h2 className="relative mb-4 font-black text-[clamp(32px,5vw,52px)] text-[#111111] tracking-tight leading-tight">
            What We Create
            {/* Decorative zigzag */}
            <svg
              className="absolute -top-2 -right-8 -z-10 w-20 text-[#F5E5E5]"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>
          <p className="max-w-2xl text-[15px] text-[#666] leading-relaxed">
            From logo systems and brand guidelines to premium printing and
            large-format outdoor — every deliverable is crafted to leave a
            lasting impression.
          </p>
        </div>

        {/* ── Marquee Track ──────────────────────────────────── */}
        <div className="relative w-full">

          {/* CSS for the marquee animation */}
          <style>{`
            @keyframes bp-marquee-rtl {
              0%   { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-33.333%, 0, 0); }
            }
            .bp-marquee-track {
              display: flex;
              width: max-content;
              will-change: transform;
              animation: bp-marquee-rtl 40s linear infinite;
              gap: 1.5rem;
            }
            .bp-marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Left fade */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <div className="overflow-hidden">
            <div className="bp-marquee-track">
              {MARQUEE_SET.map((svc, idx) => (
                <div
                  key={`${svc.title}-${idx}`}
                  className="group flex w-64 shrink-0 flex-col"
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
                    <Image
                      alt={svc.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                      fill
                      sizes="256px"
                      src={svc.image}
                    />
                    {/* Card footer overlay */}
                    <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-white/90 backdrop-blur-sm p-3 border-t border-[#EBEBEB]/60">
                      <p className="text-[9px] font-black tracking-[0.15em] uppercase text-[#D62020] font-mono mb-0.5">
                        {svc.tag}
                      </p>
                      <h3 className="font-bold text-[13px] text-[#111] leading-tight">
                        {svc.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
