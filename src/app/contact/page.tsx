import { HoverGradientNavBar } from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] font-body text-[var(--color-foreground)] overflow-x-hidden flex flex-col">
      <HoverGradientNavBar />
      
      <div className="flex-grow pt-32 pb-32">
        {/* Blank content for now */}
      </div>

      <CinematicFooter />
    </main>
  );
}
