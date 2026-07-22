"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

// Dynamic Review Interface
interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  image: string;
  date?: string;
}

// 6 Realistic Reviews ready for dynamic data binding
const PLACEHOLDER_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Elena Rostova",
    role: "Product Manager",
    company: "Velo Labs",
    rating: 5,
    text: "The custom software solution built by Virrat Global has completely streamlined our shipping logistics. Flawless execution and incredible scalability.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
    date: "2 months ago",
  },
  {
    id: "rev-2",
    name: "Arjun Mehta",
    role: "Co-Founder",
    company: "Zeta Health",
    rating: 5,
    text: "Exceptional UI design and web application delivery. Our patient portal saw immediate engagement increases. Highly creative and responsive team.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    date: "3 weeks ago",
  },
  {
    id: "rev-3",
    name: "Charlotte Dubois",
    role: "Operations Director",
    company: "Nouveau Retail",
    rating: 5,
    text: "From complete company compliance setups to our brand identity rebranding, Virrat Global handled everything with absolute professionalism and speed.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
    date: "1 month ago",
  },
  {
    id: "rev-4",
    name: "Marcus Sterling",
    role: "Head of Marketing",
    company: "Apex Global",
    rating: 5,
    text: "Our digital ad campaigns achieved a 4.2x ROI within the first quarter of migrating to Virrat. Their performance marketing strategies are top-tier.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
    date: "2 weeks ago",
  },
  {
    id: "rev-5",
    name: "Kenji Sato",
    role: "Technical Lead",
    company: "OmniAI",
    rating: 5,
    text: "Their workflow automation saved our operations team over 35 hours weekly. Dynamic, cloud-native, and highly maintainable integrations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    date: "1 month ago",
  },
  {
    id: "rev-6",
    name: "Sophia Martinez",
    role: "Creative Director",
    company: "Lunara Design",
    rating: 5,
    text: "A stunning corporate website built with performance and SEO at its core. Working with them has been a highly collaborative and rewarding experience.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
    date: "5 days ago",
  },
];

export function TestimonialsWall() {
  // Hook up to dynamic reviews array (easily swapped with an API fetch in a useEffect)
  const reviews = PLACEHOLDER_REVIEWS;

  return (
    <section className="py-24 bg-white relative overflow-hidden font-syne border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Floating Reviews */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            {reviews.slice(0, 3).map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative p-6 md:p-8 rounded-[24px] bg-[#FAFAFA] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] ${
                  idx === 0 ? "lg:-translate-y-4" : idx === 1 ? "lg:translate-x-4" : "lg:-translate-y-2"
                }`}
              >
                {/* Profile Banner */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[400ms] ease-out"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[15px] leading-tight">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-xs font-inter mt-0.5">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D62020] stroke-[#D62020]" />
                  ))}
                </div>

                {/* Review Snippet */}
                <p className="text-gray-600 text-[14px] leading-relaxed font-inter">
                  "{review.text}"
                </p>
                {review.date && (
                  <span className="block mt-4 text-[10px] text-gray-400 font-inter text-right">
                    {review.date}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Center Column: Section Text Content */}
          <div className="lg:col-span-4 text-center px-4 py-8 lg:py-0 flex flex-col items-center justify-center order-1 lg:order-2">
            <span className="homepage-section-tag">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="homepage-section-title text-center">
              Trusted by Businesses <br />
              <span>Across Industries.</span>
            </h2>
            <p className="homepage-section-subtitle text-center max-w-sm mb-8">
              Our clients trust Virrat Global for branding, digital marketing, websites, software development, AI automation, and compliance services. Their success stories reflect our commitment to quality, innovation, and measurable business growth.
            </p>
            <a
              href="https://g.page/r/your-google-review-link" // Target URL for all reviews
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white hover:bg-[#D62020] text-[11px] font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-[#D62020]/20 hover:-translate-y-0.5"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Floating Reviews */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-3">
            {reviews.slice(3, 6).map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx + 3) * 0.15 }}
                className={`group relative p-6 md:p-8 rounded-[24px] bg-[#FAFAFA] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] ${
                  idx === 0 ? "lg:translate-y-6" : idx === 1 ? "lg:-translate-x-4" : "lg:-translate-y-6"
                }`}
              >
                {/* Profile Banner */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[400ms] ease-out"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[15px] leading-tight">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-xs font-inter mt-0.5">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D62020] stroke-[#D62020]" />
                  ))}
                </div>

                {/* Review Snippet */}
                <p className="text-gray-600 text-[14px] leading-relaxed font-inter">
                  "{review.text}"
                </p>
                {review.date && (
                  <span className="block mt-4 text-[10px] text-gray-400 font-inter text-right">
                    {review.date}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
