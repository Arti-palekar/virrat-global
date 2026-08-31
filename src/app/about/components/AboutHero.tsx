"use client";
import React from 'react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className="bg-[#fafafa] font-body">
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-start pt-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E10600]/10 text-[#E10600] text-sm font-semibold mb-6 border border-[#E10600]/20">
              <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse"></span>
              Design. Strategy. Impact.
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-5">
              Building Digital Experiences <br />
              <span className="text-[#E10600]">That Matter</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-6">
              We combine thoughtful design, modern technology, and creative strategy to build digital experiences that help brands grow, connect, and stand out.
            </p>
            
            {/* CTA Area */}
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 mb-10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] transition-all text-gray-800 shadow-sm"
              />
              <button className="px-8 py-4 bg-[#E10600] text-white font-semibold rounded-xl hover:bg-[#c10500] transition-colors shadow-lg shadow-[#E10600]/30 whitespace-nowrap">
                Let’s Work Together
              </button>
            </div>
            
            {/* Trust Text & Review */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex -space-x-3">
                {/* Avatar circles */}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="user" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="user" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-400 overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="user" /></div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-[#E10600] flex items-center justify-center text-white text-xs font-bold">+5k</div>
              </div>
              <div>
                <div className="flex gap-1 text-yellow-400 text-sm mb-1">
                  ★★★★★
                </div>
                <p className="text-sm text-gray-600 font-medium max-w-[200px]">Creating meaningful digital experiences for modern brands.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image & Floating Cards */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-2xl border-4 border-white">
              <Image 
                src="/img/about-hero-woman.jpg" 
                alt="Professional working on laptop" 
                fill
                className="object-cover object-center"
              />
            </div>
            
            {/* Floating Card 1: Creative Strategy */}
            <div className="absolute top-10 -left-6 lg:-left-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-[float_6s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-xl bg-[#E10600]/10 flex items-center justify-center text-[#E10600]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Core Focus</p>
                <p className="font-bold text-gray-900">Creative Strategy</p>
              </div>
            </div>
            
            {/* Floating Card 2: Digital Experiences */}
            <div className="absolute bottom-20 -right-6 lg:-right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-[float_7s_ease-in-out_infinite_reverse]">
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Delivering</p>
                <p className="font-bold text-gray-900">Digital Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service/Feature Cards Below Hero */}
      <section className="bg-[#fafafa] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Web Design</h3>
              <p className="text-gray-600">Crafting stunning, responsive websites that captivate your audience and drive conversions.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Brand Growth</h3>
              <p className="text-gray-600">Strategies and execution designed to scale your brand presence and market share.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Team</h3>
              <p className="text-gray-600">Dedicated professionals bringing diverse expertise to ensure your project's success.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#E10600]/10 text-[#E10600] flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Projects / Clients</h3>
              <p className="text-gray-600">A proven track record of delivering high-impact solutions for industry leaders.</p>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </div>
  );
}
