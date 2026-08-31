"use client";
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const gallerySets = [
  // Set 1 - The Spark
  [
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", alt: "Strategy and brainstorming" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop", alt: "Team collaboration" },
    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop", alt: "Planning session" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop", alt: "Design process" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", alt: "Creative team" },
  ],
  // Set 2 - The Process
  [
    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", alt: "Innovation" },
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop", alt: "Wireframing and architecture" },
    { src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop", alt: "Code and development" },
    { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop", alt: "Technology integration" },
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop", alt: "Developers at work" },
  ],
  // Set 3 - The Spotlight
  [
    { src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop", alt: "Modern workspace" },
    { src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop", alt: "Product launch" },
    { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop", alt: "Analytics and growth" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop", alt: "Business success" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", alt: "Client presentation" },
  ]
];

export default function AboutGallery() {
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % gallerySets.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSet]);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % gallerySets.length);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + gallerySets.length) % gallerySets.length);
  };

  const images = gallerySets[currentSet];

  return (
    <section className="bg-white relative font-body py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-row items-center justify-between mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] tracking-tight mb-5">
            From Spark to Spotlight
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-6">
            <button 
              onClick={prevSet}
              className="text-gray-400 hover:text-gray-900 transition-colors p-2"
              aria-label="Previous gallery images"
            >
              <ArrowLeft className="w-6 h-6 font-light" strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextSet}
              className="text-gray-400 hover:text-gray-900 transition-colors p-2"
              aria-label="Next gallery images"
            >
              <ArrowRight className="w-6 h-6 font-light" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="relative w-full overflow-hidden pb-4">
          <div 
            className="flex w-full"
          >
            {gallerySets.map((images, idx) => (
              <div 
                key={idx} 
                className="w-full flex-shrink-0 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSet * 100}%)` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:h-[400px]">
                  
                  {/* Left Portrait */}
                  <div className="col-span-1 h-[200px] lg:h-full relative overflow-hidden group bg-gray-100 rounded-2xl">
                    <img src={images[0].src} alt={images[0].alt} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  
                  {/* Center Section */}
                  <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 lg:gap-6 h-full">
                    {/* Top Landscape */}
                    <div className="flex-1 min-h-[160px] lg:min-h-0 relative overflow-hidden group bg-gray-100 rounded-2xl">
                      <img src={images[1].src} alt={images[1].alt} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    {/* Bottom Two */}
                    <div className="flex-1 grid grid-cols-2 gap-4 lg:gap-6 min-h-[140px] lg:min-h-0">
                      <div className="relative overflow-hidden group bg-gray-100 h-full rounded-2xl">
                        <img src={images[2].src} alt={images[2].alt} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="relative overflow-hidden group bg-gray-100 h-full rounded-2xl">
                        <img src={images[3].src} alt={images[3].alt} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    </div>
                  </div>

                  {/* Right Portrait */}
                  <div className="col-span-1 h-[200px] lg:h-full relative overflow-hidden group bg-gray-100 rounded-2xl">
                    <img src={images[4].src} alt={images[4].alt} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {gallerySets.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSet(idx)}
              className={`h-[3px] transition-all duration-300 ${
                currentSet === idx ? 'w-8 bg-[#1a1a2e]' : 'w-6 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to gallery set ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
