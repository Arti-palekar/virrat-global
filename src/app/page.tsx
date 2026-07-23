import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { TaglineMarquee } from "@/components/sections/TaglineMarquee";
import { IndustryExpertise } from "@/components/sections/IndustryExpertise";
import { AnimatedServices } from "@/components/sections/AnimatedServices";
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
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
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
