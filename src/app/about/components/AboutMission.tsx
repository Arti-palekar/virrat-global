import React from 'react';
import Image from 'next/image';

export default function AboutMission() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              At Virrat Global, we believe in building digital experiences that drive real growth. Our mission is to bridge the gap between creative design and robust engineering, empowering ambitious founders to scale their businesses through innovative technology and strategic marketing.
            </p>
            <div>
              <button className="bg-slate-900 hover:bg-black text-white text-base font-medium px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              
              {/* Left Column */}
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Tall Image */}
                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaborating"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Black Square Stat */}
                <div className="w-full aspect-square rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                  <span className="text-4xl md:text-5xl font-bold mb-2">50+</span>
                  <span className="text-slate-300 text-sm md:text-base font-medium text-center">Expert Professionals</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4 md:gap-6 pt-0 lg:pt-0">
                {/* Black Square Stat */}
                <div className="w-full aspect-square rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />
                  <span className="text-4xl md:text-5xl font-bold mb-2">150+</span>
                  <span className="text-slate-300 text-sm md:text-base font-medium text-center">Projects Delivered</span>
                </div>
                {/* Tall Image */}
                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
