"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Branding",
    description: "Build cohesive brands that command authority and establish market positioning.",
    benefits: ["Brand Strategy", "Visual Identity", "Guidelines", "Positioning"],
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, user-centric interfaces designed to maximize engagement and conversion.",
    benefits: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    title: "Website Design",
    description: "Award-winning web designs that capture attention and communicate your value proposition.",
    benefits: ["Creative Direction", "Responsive Design", "Interactions", "Animations"],
  },
  {
    title: "Web Development",
    description: "Fast, scalable, and secure digital platforms built on modern technology stacks.",
    benefits: ["Next.js & React", "Headless CMS", "API Integration", "Performance"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android ecosystems.",
    benefits: ["React Native", "Swift/Kotlin", "App Store Optimization", "Maintenance"],
  },
  {
    title: "Product Design",
    description: "End-to-end product design for SaaS platforms and complex web applications.",
    benefits: ["Product Strategy", "Design Systems", "User Flows", "Iterative Design"],
  },
  {
    title: "Motion Graphics",
    description: "Dynamic visual storytelling through high-fidelity animations and video production.",
    benefits: ["2D/3D Animation", "Explainer Videos", "Lottie Animations", "Micro-interactions"],
  },
  {
    title: "SEO",
    description: "Technical and content-driven search engine optimization to capture organic traffic.",
    benefits: ["Technical Audits", "Keyword Strategy", "Content Optimization", "Link Building"],
  },
  {
    title: "Digital Marketing",
    description: "Data-driven performance campaigns that acquire users and maximize ROI.",
    benefits: ["Paid Social", "Search Ads", "Email Marketing", "Analytics Setup"],
  },
  {
    title: "AI Automation",
    description: "Streamline operations with custom AI integrations and automated workflows.",
    benefits: ["LLM Integration", "Process Automation", "Chatbots", "Predictive Models"],
  },
  {
    title: "Custom Software",
    description: "Bespoke enterprise software solutions tailored to your unique business logic.",
    benefits: ["Architecture", "Cloud Infrastructure", "Security", "Scaleability"],
  },
];

export function ServicesGrid() {
  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="flex flex-col p-10 rounded-[2rem] bg-white border border-black/5 hover:border-[var(--color-accent)]/50 hover:shadow-2xl hover:shadow-[var(--color-accent)]/5 transition-all duration-300 group"
            >
              <h3 className="text-3xl font-bold font-heading mb-6">{service.title}</h3>
              <p className="text-[var(--color-secondary)] flex-grow mb-6">
                {service.description}
              </p>
              
              <div className="mb-10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-4">Includes</h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-[var(--color-secondary)] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 mr-3 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/contact" 
                className="mt-auto inline-flex items-center font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors"
              >
                Discuss Project <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
