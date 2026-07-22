import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AboutStory } from "@/components/sections/AboutStory";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32">
        <AboutStory />
      </main>
      <Footer />
    </>
  );
}
