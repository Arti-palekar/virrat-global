import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl mb-24">
          <h1 className="text-6xl md:text-8xl font-bold font-heading mb-8 tracking-tighter leading-none">
            Selected <span className="text-[var(--color-accent)]">Works.</span>
          </h1>
          <p className="text-xl text-[var(--color-secondary)]">
            Explore our latest projects. We build digital experiences that elevate brands and drive measurable results.
          </p>
        </div>
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
