import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// In a real app, this would be dynamic or fetched from a CMS
export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // Mock data for the case study
  const study = {
    title: "TechFlow",
    industry: "B2B SaaS",
    services: ["UI/UX Design", "Web Development", "Brand Strategy"],
    challenge: "TechFlow's legacy interface was causing high churn rates. They needed a complete overhaul of their user experience and a re-positioning in the market to target enterprise clients.",
    solution: "We conducted extensive user research and redesigned the platform from the ground up using a modern, scalable design system. We also developed a high-performing marketing site in Next.js.",
    results: [
      "42% increase in demo requests",
      "30% reduction in user churn",
      "2x faster page load times"
    ],
    technology: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "GSAP"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
    ]
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 bg-white">
        <div className="container mx-auto px-6">
          <Link href="/portfolio" className="inline-flex items-center text-[var(--color-secondary)] hover:text-[var(--color-accent)] mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>

          <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tighter mb-5">
            {study.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-16">
            {study.services.map(s => (
              <span key={s} className="px-4 py-2 rounded-full border border-black/10 text-sm font-medium">
                {s}
              </span>
            ))}
          </div>

          <div className="relative w-full h-[60vh] md:h-[80vh] rounded-[2.5rem] overflow-hidden mb-24">
            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-6">Industry</h3>
                <p className="text-xl font-medium mb-6">{study.industry}</p>

                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-6">Technology</h3>
                <ul className="space-y-2">
                  {study.technology.map(tech => (
                    <li key={tech} className="text-lg">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-16">
              <div>
                <h2 className="homepage-section-title mb-5">The <span>Challenge.</span></h2>
                <p className="homepage-section-subtitle">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="homepage-section-title mb-5">Our <span>Solution.</span></h2>
                <p className="homepage-section-subtitle">
                  {study.solution}
                </p>
              </div>

              <div className="p-10 rounded-[2rem] bg-[var(--color-background)] border border-black/5">
                <h2 className="card-title mb-5">The Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {study.results.map((res, i) => {
                    const [number, ...rest] = res.split(" ");
                    return (
                      <div key={i}>
                        <div className="text-5xl font-bold text-[var(--color-accent)] mb-2 font-heading">{number}</div>
                        <div className="text-sm font-medium text-[var(--color-secondary)] uppercase tracking-wide">{rest.join(" ")}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {study.gallery.map((img, i) => (
              <div key={i} className="relative aspect-video rounded-[2rem] overflow-hidden bg-gray-100">
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
