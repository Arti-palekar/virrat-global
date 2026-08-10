import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag: string;
  stats: string;
  href: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  ({ className, imageUrl, location, flag, stats, href, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("group/card w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-md transition-all duration-500 ease-in-out group-hover/card:scale-[1.02] group-hover/card:shadow-[0_20px_40px_rgba(0,0,0,0.25)] border border-[#111111]/5"
          aria-label={`Explore details for ${location}`}
        >
          {/* Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover/card:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Base Gradient Overlay: Dark bottom, subtle red mid-tint, transparent top */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.6) 30%, rgba(229,43,38,0.05) 50%, transparent 70%)`,
            }}
          />
          
          {/* Hover Gradient Overlay: Deepens the dark and makes the red slightly more visible */}
          <div
            className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(229,43,38,0.2) 30%, transparent 70%)`,
            }}
          />

          <div className="relative flex flex-col justify-end h-full p-6 text-white z-10">
            <p
              className="text-lg lg:text-xl font-semibold tracking-tight leading-tight"
              style={{ color: "#FFFFFF" }}
            >
              {location} <span className="text-base ml-1">{flag}</span>
            </p>

            <p
              className="text-sm font-medium leading-relaxed mt-1"
              style={{ color: "#FFFFFF" }}
            >
              {stats}
            </p>

            <div className="mt-6 flex items-center justify-between bg-[#111111]/70 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 transition-all duration-300 group-hover/card:bg-[#E52B26]/90 group-hover/card:border-[#E52B26]">
              <span className="text-sm font-semibold tracking-wide text-white">
                Explore Now
              </span>

              <ArrowRight className="h-4 w-4 text-white transform transition-transform duration-300 group-hover/card:translate-x-1" />
            </div>
          </div>
        </a>
      </div>
    );
  }
);

DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
