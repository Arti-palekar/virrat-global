"use client";

import React from "react";
import { Shield, CheckSquare, Headset } from "lucide-react";

export default function ComplianceValueStrip() {
  return (
    <div className="w-full bg-white relative z-20 py-8 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-[#F2F6FB] p-5 rounded-lg">
            <div className="flex-shrink-0">
               <Shield className="w-8 h-8 fill-slate-900 text-slate-900" strokeWidth={1} />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-[15px] leading-tight mb-0.5">100% Compliant</h4>
              <p className="text-[13px] text-[#666666]">Guaranteed accuracy.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-[#FDF2F2] p-5 rounded-lg">
            <div className="flex-shrink-0">
               <CheckSquare className="w-8 h-8 fill-[#E52521] text-white" strokeWidth={1} />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-[15px] leading-tight mb-0.5">Fast Processing</h4>
              <p className="text-[13px] text-[#666666]">Streamlined workflows.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-[#F6F7F9] p-5 rounded-lg">
            <div className="flex-shrink-0">
               <Headset className="w-8 h-8 text-slate-800" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-[#111111] text-[15px] leading-tight mb-0.5">Expert Support</h4>
              <p className="text-[13px] text-[#666666]">Available 24/7.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
