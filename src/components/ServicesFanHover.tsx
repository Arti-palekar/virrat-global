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
    <section className="bg-[#FAF9F6] text-[#09090b] font-sans px-6 py-24 sm:px-10 sm:py-32 relative z-10 border-t border-black/5">
      {/* Component Scoped CSS Styles for fan-out animations */}
      <style>{`
        .fan-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 30px;
          overflow: visible;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: transform .35s cubic-bezier(0.22, 1, 0.36, 1), border-color .35s ease, box-shadow .35s ease;
        }
        .fan-card:hover {
          z-index: 20;
          transform: translateY(-4px);
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
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
          width: 120px;
          height: 165px;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          transition: transform .5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .5s ease;
          will-change: transform;
        }

        /* Default resting state — shallow fan */
        .fan-chip:nth-child(1) { transform: translate(calc(-50% - 68px), 8px)  rotate(-9deg) scale(0.92); z-index: 1; }
        .fan-chip:nth-child(2) { transform: translate(calc(-50% - 35px), 3px)  rotate(-5deg) scale(0.95); z-index: 2; }
        .fan-chip:nth-child(3) { transform: translate(-50%, 0)                 rotate(0deg)  scale(1);    z-index: 4; }
        .fan-chip:nth-child(4) { transform: translate(calc(-50% + 35px), 3px)  rotate(5deg)  scale(0.95); z-index: 2; }
        .fan-chip:nth-child(5) { transform: translate(calc(-50% + 68px), 8px)  rotate(9deg)  scale(0.92); z-index: 1; }

        /* Fan-out on hover */
        .fan-card:hover .fan-chip:nth-child(1) { transform: translate(calc(-50% - 194px), -10px) rotate(-18deg) scale(1); z-index: 3; }
        .fan-card:hover .fan-chip:nth-child(2) { transform: translate(calc(-50% - 100px),  -5px) rotate(-9deg)  scale(1); z-index: 4; }
        .fan-card:hover .fan-chip:nth-child(3) { transform: translate(-50%, -15px) rotate(0deg) scale(1.05); z-index: 5; }
        .fan-card:hover .fan-chip:nth-child(4) { transform: translate(calc(-50% + 100px),  -5px) rotate(9deg)   scale(1); z-index: 4; }
        .fan-card:hover .fan-chip:nth-child(5) { transform: translate(calc(-50% + 194px), -10px) rotate(18deg)  scale(1); z-index: 3; }

        .fan-card:hover .fan-chip { box-shadow: 0 16px 32px rgba(0,0,0,0.45); }

        @media (max-width: 560px) {
          .fan-chip { width: 100px; height: 135px; }
          .fan-card:hover .fan-chip:nth-child(1) { transform: translate(calc(-50% - 113px), -8px) rotate(-14deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(2) { transform: translate(calc(-50% - 56px), -3px) rotate(-7deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(4) { transform: translate(calc(-50% + 56px), -3px) rotate(7deg) scale(1); }
          .fan-card:hover .fan-chip:nth-child(5) { transform: translate(calc(-50% + 113px), -8px) rotate(14deg) scale(1); }
        }
      `}</style>

      <div className="max-w-[1360px] mx-auto">
        <div className="max-w-[600px] mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Our Services</h2>
          <p className="text-zinc-500 text-base">
            Hover a service to preview the work behind it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1360px] mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="fan-card group block">
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
              <div className="text-[21px] font-semibold mb-2 text-[#111111] font-heading leading-tight group-hover:text-[#D62020] transition-colors">
                {service.title}
              </div>
              <div className="text-[#666666] text-[15px] font-body leading-relaxed">
                {service.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesFanHover;
