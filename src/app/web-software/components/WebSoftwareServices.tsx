"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Code2, Database, Layout, Smartphone, Cpu, Sliders, Cloud, Lock, LucideIcon } from "lucide-react";

interface ServiceCard {
  title: string;
  desc: string;
  tag: string;
  image: string;
  icon: LucideIcon;
}

const SERVICES: ServiceCard[] = [
  {
    title: "Custom Website Development",
    tag: "WEB & PERFORMANCE",
    desc: "High-converting, SEO-engineered corporate websites built with Next.js, React, and modern headless CMS systems.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80",
    icon: Globe,
  },
  {
    title: "Web Applications",
    tag: "FULL-STACK SAAS",
    desc: "Scalable, feature-rich web applications built for speed, real-time data synchronization, and enterprise security.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    icon: Code2,
  },
  {
    title: "ERP Development",
    tag: "ENTERPRISE CORE",
    desc: "Bespoke Enterprise Resource Planning software connecting finance, HR, inventory, supply chain, and operations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    icon: Database,
  },
  {
    title: "CRM Development",
    tag: "SALES & AUTOMATION",
    desc: "Custom Customer Relationship Management platforms designed to streamline sales pipelines and lead scoring.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
    icon: Layout,
  },
  {
    title: "SaaS Development",
    tag: "MULTI-TENANT ARCHITECTURE",
    desc: "End-to-end SaaS product engineering with subscription billing, multi-tenant databases, and analytics dashboards.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=700&q=80",
    icon: Cloud,
  },
  {
    title: "Mobile App Development",
    tag: "IOS & ANDROID",
    desc: "Native and cross-platform mobile apps engineered for fluid 60 FPS user experiences and high offline reliability.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80",
    icon: Smartphone,
  },
  {
    title: "Flutter Apps",
    tag: "CROSS-PLATFORM SPEED",
    desc: "Single-codebase Flutter applications for iOS, Android, and Web delivered in record time with custom UI components.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=700&q=80",
    icon: Sliders,
  },
  {
    title: "AI Automation & Workflows",
    tag: "INTELLIGENT AGENTS",
    desc: "Custom LLM integrations, automated document processing, and AI chatbots built on OpenAI, Claude, and LangChain.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80",
    icon: Cpu,
  },
  {
    title: "API Integration & Microservices",
    tag: "REST & GRAPHQL",
    desc: "High-throughput microservices architecture and third-party API integrations connecting payment gateways, CRMs, and ERPs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    icon: Code2,
  },
  {
    title: "Cloud Infrastructure & DevOps",
    tag: "AWS & AZURE",
    desc: "Automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, and serverless cloud deployment.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80",
    icon: Lock,
  },
];

export function WebSoftwareServices() {
  return (
    <section className="w-full bg-[#f8f7f5] text-[#111111] py-24 md:py-32 border-b border-[#ECECEC]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="homepage-section-tag inline-block mb-3">
            OUR WEB & SOFTWARE SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111] font-heading">
            Engineering Solutions For <span className="text-[#D62020]">Digital Supremacy.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body">
            From modern web applications to complex enterprise ERPs and AI automation engines, we build robust software tailored for business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white border border-[#ECECEC] p-6 shadow-xs hover:shadow-xl hover:border-[#D62020]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Preview Box */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 border border-[#F0F0F0]">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#D62020] shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Metadata */}
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#D62020] uppercase block mb-1.5">
                    {s.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] font-heading mb-2.5 group-hover:text-[#D62020] transition-colors leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] font-body leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-[#F5F5F5] flex items-center justify-between text-xs font-bold text-[#111111]">
                  <span className="group-hover:text-[#D62020] transition-colors">Explore Solution</span>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#D62020] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareServices;
