import { HoverGradientNavBar } from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import AboutQuality from "./components/AboutQuality";
import AboutGallery from "./components/AboutGallery";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] font-body text-[var(--color-foreground)] overflow-x-hidden flex flex-col">
      <HoverGradientNavBar />
      
      <div className="flex-grow">
        <AboutHero />
        <AboutStory />
        <AboutQuality />
        <AboutGallery />
      </div>

      <CinematicFooter />
    </main>
  );
}
