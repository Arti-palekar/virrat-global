"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCard {
  title: string;
  category: string;
  desc: string;
  image: string;
  stats: string;
  tech: string[];
}

const PROJECTS: ProjectCard[] = [
  {
    title: "Healthcare ERP & Patient Management",
    category: "HEALTHCARE ERP",
    desc: "Comprehensive hospital management platform handling Electronic Health Records (EHR), appointment scheduling, and HIPAA-compliant billing.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    stats: "350k Patients Handled",
    tech: ["Next.js", "Node.js", "PostgreSQL", "HIPAA Vault"],
  },
  {
    title: "School LMS & Student Learning Portal",
    category: "EDTECH PLATFORM",
    desc: "Interactive learning management system with live video classrooms, automated grading, and parent notification portals.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    stats: "50,000+ Active Students",
    tech: ["React", "Python", "AWS", "WebSockets"],
  },
  {
    title: "Restaurant POS & Online Ordering Suite",
    category: "RESTAURANT TECH",
    desc: "Cloud-native Point of Sale software integrated with kitchen display systems, inventory control, and multi-channel delivery APIs.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    stats: "99.99% Hardware Uptime",
    tech: ["Flutter", "Node.js", "Redis", "Stripe API"],
  },
  {
    title: "Fintech Dashboard & Payment Gateway",
    category: "FINANCIAL SAAS",
    desc: "PCI-DSS compliant financial analytics platform with multi-currency payouts, fraud detection AI, and automated reconciliation.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    stats: "$120M Transacted",
    tech: ["React", "Go", "Docker", "Kubernetes"],
  },
  {
    title: "Manufacturing ERP & Supply Chain",
    category: "MANUFACTURING ERP",
    desc: "Real-time production line monitoring, raw material tracking, and predictive machine maintenance powered by IoT sensors.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    stats: "32% Waste Reduction",
    tech: ["Angular", "Laravel", "MySQL", "IoT Gateways"],
  },
  {
    title: "Real Estate CRM & Property Portal",
    category: "REAL ESTATE SAAS",
    desc: "High-volume real estate CRM with virtual 3D property tours, automated WhatsApp lead drips, and contract management.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    stats: "4.8x Conversion Lift",
    tech: ["Next.js", "TypeScript", "Prisma", "HubSpot API"],
  },
];

export function WebSoftwareProjects() {
  return (
    <section className="w-full bg-white text-[#111111] py-24 md:py-32 border-b border-[#ECECEC]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="homepage-section-tag inline-block mb-3">
            FEATURED CASE STUDIES & PROJECTS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111] font-heading">
            Software Built To <span className="text-[#D62020]">Transform Businesses.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body">
            Explore selected enterprise software products, custom ERPs, SaaS platforms, and web applications delivered by Virrat Global.
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((p, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-[#F8F9FA] border border-[#ECECEC] p-6 md:p-8 hover:bg-white hover:shadow-2xl hover:border-[#D62020]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6 border border-[#EBEBEB]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold text-[#D62020] shadow-sm">
                    {p.stats}
                  </div>
                </div>

                {/* Metadata */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#D62020] uppercase block mb-2">
                  {p.category}
                </span>
                <h3 className="text-2xl font-bold text-[#111111] font-heading mb-3 group-hover:text-[#D62020] transition-colors leading-tight">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] font-body leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              {/* Tech Stack Chips & CTA */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-[#EBEBEB] text-[10px] font-mono font-bold text-[#555]">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#D62020] transition-colors"
                >
                  View Case Study <ArrowUpRight className="w-4 h-4 text-[#D62020] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareProjects;
