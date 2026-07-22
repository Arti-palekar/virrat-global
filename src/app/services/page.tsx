import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 max-w-4xl mb-24">
          <h1 className="text-6xl md:text-8xl font-bold font-heading mb-8 tracking-tighter leading-none">
            Our <span className="text-[var(--color-accent)]">Services.</span>
          </h1>
          <p className="text-xl text-[var(--color-secondary)]">
            Comprehensive digital solutions engineered to scale your business. We handle the complexity so you can focus on growth.
          </p>
        </div>
        <ServicesGrid />
      </main>
      <Footer />
    </>
  );
}
