'use client';

import React from 'react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  href: string;
  images: string[];
}

const services: Service[] = [
  {
    title: "Branding + Printing",
    description: "Creative Branding • Print Design • Packaging",
    href: "/branding-printing",
    images: [
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625629171802-a7a9c3a8edac?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "Digital Marketing",
    description: "SEO • Google Ads • Social Media Growth",
    href: "/digital-marketing",
    images: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768494-4641083e5ffb?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "Web + Software",
    description: "Web Apps • Ecommerce • Custom Software",
    href: "/web-software",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587620962725-abab19836803?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "AI + Automation",
    description: "AI Agents • Automation • Smart Workflows",
    href: "/ai-automation",
    images: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1655720031554-a929595ffad7?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "Compliance",
    description: "ISO • Legal • Business Compliance",
    href: "/compliance",
    images: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

export function ServicesFanHover() {
  return (
    <section className="w-full bg-[#f8f7f5] text-[#111111] px-6 md:px-12 overflow-hidden font-sans border-b border-[#ECECEC] py-16 md:py-24">
      <style>{`
        .fan-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #ECECEC;
          border-radius: 24px;
          padding: 30px;
          overflow: visible;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }
        .fan-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
        }
        .fan-stack {
          position: relative;
          height: 190px;
          margin-bottom: 25px;
        }
        .fan-chip {
          position: absolute;
          top: 0;
          left: 50%;
          width: 123px;
          height: 165px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
          will-change: transform;
          overflow: hidden;
        }

        /* Resting fan state */
        .fan-chip:nth-child(1) { transform: translate(calc(-50% - 68px), 8px) rotate(-9deg) scale(0.92); z-index: 1; }
        .fan-chip:nth-child(2) { transform: translate(calc(-50% - 35px), 3px) rotate(-5deg) scale(0.95); z-index: 2; }
        .fan-chip:nth-child(3) { transform: translate(-50%, 0) rotate(0deg) scale(1); z-index: 4; }
        .fan-chip:nth-child(4) { transform: translate(calc(-50% + 35px), 3px) rotate(5deg) scale(0.95); z-index: 2; }
        .fan-chip:nth-child(5) { transform: translate(calc(-50% + 68px), 8px) rotate(9deg) scale(0.92); z-index: 1; }

        /* Hover fan-out expansion */
        .fan-card:hover .fan-chip:nth-child(1) { transform: translate(calc(-50% - 194px), -10px) rotate(-18deg) scale(1); z-index: 3; }
        .fan-card:hover .fan-chip:nth-child(2) { transform: translate(calc(-50% - 100px), -5px) rotate(-9deg) scale(1); z-index: 4; }
        .fan-card:hover .fan-chip:nth-child(3) { transform: translate(-50%, -15px) rotate(0deg) scale(1.05); z-index: 5; }
        .fan-card:hover .fan-chip:nth-child(4) { transform: translate(calc(-50% + 100px), -5px) rotate(9deg) scale(1); z-index: 4; }
        .fan-card:hover .fan-chip:nth-child(5) { transform: translate(calc(-50% + 194px), -10px) rotate(18deg) scale(1); z-index: 3; }

        .fan-card:hover .fan-chip { box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35); }

        @media (max-width: 560px) {
          .fan-chip { width: 103px; height: 138px; }
          .fan-card:hover .fan-chip:nth-child(1) { transform: translate(calc(-50% - 113px), -8px) rotate(-14deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(2) { transform: translate(calc(-50% - 56px), -3px) rotate(-7deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(4) { transform: translate(calc(-50% + 56px), -3px) rotate(7deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(5) { transform: translate(calc(-50% + 113px), -8px) rotate(14deg) scale(1); }
        }
      `}</style>

      {/* Section Header */}
      <div className="max-w-[650px] mx-auto text-center mb-12">
        <span className="homepage-section-tag inline-block mb-3">
          OUR SERVICES
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] font-heading mb-5">
          Our Services
        </h2>
      </div>

      {/* 2 x 3 Grid Composition */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
        {services.map((service, index) => (
          <Link key={index} href={service.href} className="fan-card group block">
            
            {/* Visual Fan Stack */}
            <div className="fan-stack">
              {service.images.map((imgUrl, imgIdx) => (
                <img
                  key={imgIdx}
                  src={imgUrl}
                  alt={`${service.title} preview ${imgIdx + 1}`}
                  className="fan-chip object-cover"
                />
              ))}
            </div>

            {/* Service Header Info */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[25px] font-bold text-[#111111] font-heading leading-tight group-hover:text-[#D62020] transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="text-[16px] text-[#666666] font-body leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServicesFanHover;
