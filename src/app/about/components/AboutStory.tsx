"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutStory() {
  const [activeTab, setActiveTab] = useState<'who' | 'journey'>('who');

  return (
    <section className="py-24 bg-white font-body relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* Top Row: Heading and Labels */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-gray-900 max-w-3xl tracking-tight">
            Our Story: Driven By <br className="hidden md:block"/>
            Creativity. Powered By <br className="hidden md:block"/>
            Experience.
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => setActiveTab('who')}
              className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeTab === 'who' ? 'bg-[#E10600] text-white shadow-md shadow-[#E10600]/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer'}`}
            >
              Who We Are
            </button>
            <button 
              onClick={() => setActiveTab('journey')}
              className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${activeTab === 'journey' ? 'bg-[#E10600] text-white shadow-md shadow-[#E10600]/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer'}`}
            >
              Our Journey
            </button>
          </div>
        </div>

        {/* Dynamic Content Wrapper */}
        <div className="relative w-full">
          <div key={activeTab} className="animate-[story-fade-in_0.5s_ease-out_forwards]">
            
            {activeTab === 'who' ? (
              /* WHO WE ARE CONTENT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* 1. Small Rounded Image */}
                <div className="lg:col-span-3 w-full h-64 lg:h-80 relative rounded-[2rem] overflow-hidden shadow-sm bg-gray-100">
                  <Image 
                    src="https://virratglobal.com/wp-content/uploads/2024/09/good-idea.webp" 
                    alt="Who we are idea" 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* 2. Small Text Block */}
                <div className="lg:col-span-2 flex flex-col pt-2 lg:pt-8">
                  <div className="w-8 h-8 mb-4 text-[#E10600]">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 text-sm leading-relaxed font-bold mb-2 uppercase tracking-wide">Who We Are</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Creative growth partners delivering impactful, modern, and strategic brand solutions.
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    <span>Designers</span>
                    <span>Developers</span>
                    <span>Creators</span>
                    <span>Visionaries</span>
                    <span>Leaders</span>
                    <span>Innovators</span>
                    <span>Strategists</span>
                    <span>Partners</span>
                  </div>
                </div>

                {/* 3. Large Tall Image */}
                <div className="lg:col-span-4 w-full h-80 lg:h-[600px] relative rounded-[2.5rem] overflow-hidden shadow-xl lg:-mt-12 bg-gray-100">
                  <Image 
                    src="/img/who-we-are-team.jpg" 
                    alt="Virrat team collaboration" 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* 4. Right Text & CTA */}
                <div className="lg:col-span-3 flex flex-col justify-center pt-4 lg:pt-20">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                    Who We Are
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    Virrat Global combines creative excellence with strategic thinking to help businesses build bold, modern and globally relevant brands.
                  </p>
                  <div>
                    <Link href="#contact" className="inline-flex px-8 py-4 bg-[#E10600] !text-white hover:!text-white font-semibold rounded-full hover:bg-[#c10500] transition-colors shadow-lg shadow-[#E10600]/30">
                      Learn More
                    </Link>
                  </div>
                </div>

              </div>
            ) : (
              /* OUR JOURNEY CONTENT */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* 1. Small Rounded Image */}
                <div className="lg:col-span-3 w-full h-64 lg:h-80 relative rounded-[2rem] overflow-hidden shadow-sm bg-gray-100">
                  <Image 
                    src="/img/journey-small-team.jpg" 
                    alt="Our journey beginnings" 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* 2. Small Text Block */}
                <div className="lg:col-span-2 flex flex-col pt-2 lg:pt-8">
                  <div className="w-8 h-8 mb-4 text-[#E10600]">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-gray-900 text-sm leading-relaxed font-bold mb-2 uppercase tracking-wide">Our Journey</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A new name, a bigger vision and endless possibilities ahead!
                  </p>
                </div>

                {/* 3. Large Tall Image */}
                <div className="lg:col-span-4 w-full h-80 lg:h-[600px] relative rounded-[2.5rem] overflow-hidden shadow-xl lg:-mt-12 bg-gray-100">
                  <Image 
                    src="/img/journey-team.jpg" 
                    alt="Virrat growth and evolution" 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* 4. Right Text & CTA */}
                <div className="lg:col-span-3 flex flex-col justify-center pt-4 lg:pt-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                    Bold Beginnings
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Virrat Global Pvt. Ltd. evolved from Smartup India Ventures with a renewed vision focused on helping businesses thrive through creativity, innovation, and strategy.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    With a legacy of working with 600+ brands across industries, Virrat Global has evolved into a growth partner offering end-to-end solutions across: Branding, Packaging, Digital Marketing, Website Development, UI/UX, Corporate Gifting, Printing.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    Our journey so far has been possible because of the support and collaboration of our clients and partners. As we move forward as Virrat Global Pvt. Ltd., our focus remains on innovation, long-term partnerships and measurable business growth.
                  </p>

                </div>

              </div>
            )}
            
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes story-fade-in {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
