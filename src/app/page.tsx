import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { IndustryExpertise } from "@/components/sections/IndustryExpertise";
import { AnimatedServices } from "@/components/sections/AnimatedServices";
import { Process } from "@/components/sections/Process";
import { ExpandOnHover } from "@/components/sections/ExpandOnHover";
import { Statistics } from "@/components/sections/Statistics";

import Portfolio from "@/components/Portfolio";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { HeroParallaxSection } from "@/components/sections/HeroParallaxSection";
import IntroAnimation from "@/components/sections/IntroAnimation";
import WovenCTA from "@/components/WovenCTA";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <IndustryExpertise />
        <HeroParallaxSection />
        <IntroAnimation />
        <Portfolio />
        <Statistics />
        <Process />
        <ExpandOnHover />
        <ClientsSection />
        <HomeFAQ />
        <TechnologyStack />
        <WovenCTA />
      </main>
      <Footer />
    </>
  );
}
