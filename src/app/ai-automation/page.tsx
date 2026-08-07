import { Metadata } from "next";
import { AiAutomationHero } from "./components/AiAutomationHero";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";

export const metadata: Metadata = {
  title: "AI + Automation Services | Virrat Global",
  description:
    "Automate repetitive work, connect your systems and build intelligent AI workflows with Virrat Global's custom AI and automation solutions.",
};

export default function AiAutomationPage() {
  return (
    <>
      <HoverGradientNavBar />
      
      <main className="min-h-screen bg-[#faf9f6] text-[#111111]">
        {/* 1. Hero Section */}
        <AiAutomationHero />
        
        {/* Other sections will be added here in the future */}
      </main>

      <CinematicFooter />
    </>
  );
}
