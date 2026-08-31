import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';

export default function AboutEmpower() {
  return (
    <section className="w-full bg-white relative overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center mb-16">
          {/* Left: Text */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Empower Your <br />
              Future with Expert-<br />
              Led Courses
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              Join thousands of learners worldwide and gain skills that matter, from technology to business. Explore high-quality courses designed for you.
            </p>
          </div>

          {/* Right: Image with Cutout */}
          <div className="w-full lg:w-7/12 relative">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              
              {/* Cutout Area (Bottom Left) */}
              <div className="absolute bottom-0 left-0 bg-white p-6 md:p-8 rounded-tr-[2rem] rounded-bl-[2.5rem]">
                {/* Inverse corners */}
                <div className="absolute top-[-24px] left-0 w-6 h-6 bg-transparent rounded-bl-[1.5rem]" style={{ boxShadow: '-8px 8px 0 8px white' }} />
                <div className="absolute bottom-0 right-[-24px] w-6 h-6 bg-transparent rounded-bl-[1.5rem]" style={{ boxShadow: '-8px 8px 0 8px white' }} />
                
                {/* CTA Button */}
                <button className="bg-[#111] hover:bg-black text-white text-sm md:text-base font-medium px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left side of bottom row (Image + Stat) */}
          <div className="flex flex-col md:flex-row items-center gap-8 w-full lg:w-auto">
            {/* Image with arrow cutout */}
            <div className="relative w-full md:w-[280px] h-[200px] rounded-[2rem] overflow-hidden bg-slate-100 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Students cheering"
                className="w-full h-full object-cover"
              />
              {/* Cutout for Arrow Button (Bottom Right) */}
              <div className="absolute bottom-0 right-0 bg-white p-4 md:p-5 rounded-tl-[1.5rem] rounded-br-[2rem]">
                <div className="absolute top-[-20px] right-0 w-5 h-5 bg-transparent rounded-br-[1.2rem]" style={{ boxShadow: '8px 8px 0 8px white' }} />
                <div className="absolute bottom-0 left-[-20px] w-5 h-5 bg-transparent rounded-br-[1.2rem]" style={{ boxShadow: '8px 8px 0 8px white' }} />
                
                <button className="w-12 h-12 bg-[#111] hover:bg-black text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stat: 150+ */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <span className="text-4xl md:text-5xl font-bold text-slate-900 mb-1">150+</span>
              <span className="text-slate-500 font-medium">Completed<br/>courses</span>
            </div>
          </div>

          {/* Center decorative element */}
          <div className="relative flex items-center justify-center shrink-0 my-4 lg:my-0">
            {/* Spinning Text Ring (Simplified via SVG) */}
            <div className="w-[120px] h-[120px] animate-spin" style={{ animationDuration: '10s' }}>
              <svg viewBox="0 0 100 100" className="w-full h-full text-slate-800">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[12px] font-bold uppercase tracking-widest" fill="currentColor">
                  <textPath href="#circlePath">
                    Platform for E-Learning • Platform for E-Learning •
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Center Star */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Star className="w-8 h-8 text-slate-900 fill-slate-900" />
            </div>
          </div>

          {/* Right side of bottom row (Avatars + Stat) */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto justify-center lg:justify-end">
            <div className="flex flex-col gap-2">
              <div className="flex items-center -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Student" />
              </div>
              <div className="text-center md:text-left mt-2">
                <span className="font-bold text-slate-900">2K+</span> <span className="text-slate-500 font-medium">Students Enrolled<br/>Worldwide</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
