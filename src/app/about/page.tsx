import { HoverGradientNavBar } from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import ToonhubHero from "./components/ToonhubHero";
import AboutEmpower from "./components/AboutEmpower";
import AboutMission from "./components/AboutMission";
import AboutStory from "./components/AboutStory";
import AboutQuality from "./components/AboutQuality";
import AboutJoinClan from "./components/AboutJoinClan";
import AboutImageSlider from "./components/AboutImageSlider";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] font-body text-[var(--color-foreground)] overflow-x-hidden flex flex-col">
      <HoverGradientNavBar />
      
      <div className="flex-grow">
        <ToonhubHero />
        <AboutEmpower />
        <AboutMission />
        <AboutStory />
        <AboutQuality />
        <AboutJoinClan />
        <AboutImageSlider />
      </div>

      <CinematicFooter />
    </main>
  );
}
