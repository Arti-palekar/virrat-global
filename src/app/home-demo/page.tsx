import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandingShowcase } from "@/components/sections/BrandingShowcase";
import { TaglineMarquee } from "@/components/sections/TaglineMarquee";
import { IndustryExpertise } from "@/components/sections/IndustryExpertise";
import { Process } from "@/components/sections/Process";
import { ExpandOnHover } from "@/components/sections/ExpandOnHover";
import { Statistics } from "@/components/sections/Statistics";

import Portfolio from "@/components/Portfolio";
import { TestimonialsWall } from "@/components/sections/TestimonialsWall";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { ServicesFanHover } from "@/components/sections/ServicesFanHover";
import IntroAnimation from "@/components/sections/IntroAnimation";
import WovenCTA from "@/components/WovenCTA";

export default function HomeDemo() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandingShowcase />
        <TaglineMarquee />
        <IndustryExpertise />
        <ServicesFanHover />
        <IntroAnimation />
        <Portfolio />
        <Statistics />
        <Process />
        <ExpandOnHover />
        <TestimonialsWall />
        <HomeFAQ />
        <TechnologyStack />
        <WovenCTA />
      </main>
      <Footer />
    </>
  );
}
