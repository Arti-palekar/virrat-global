import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { BlogGrid } from "@/components/sections/BlogGrid";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl mb-24">
          <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tighter leading-none mb-5">
            Insights & <span className="text-[var(--color-accent)]">Strategy.</span>
          </h1>
          <p className="text-xl text-[var(--color-secondary)]">
            Thoughts, frameworks, and strategies from our team on brand building, digital marketing, and design.
          </p>
        </div>
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
