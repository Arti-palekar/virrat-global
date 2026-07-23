import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ServicesFanHover } from "@/components/sections/ServicesFanHover";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20 bg-[var(--color-background)]">
        <ServicesFanHover />
      </main>
      <Footer />
    </>
  );
}
