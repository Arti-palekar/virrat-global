import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen flex items-center justify-center pt-24 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-[12rem] font-bold font-heading leading-none text-black/5 select-none relative mb-5">
            404
            <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl text-[var(--color-primary)]">
              Page Not Found
            </span>
          </h1>
          <p className="text-xl text-[var(--color-secondary)] max-w-lg mx-auto mb-6">
            The page you're looking for doesn't exist or has been moved. 
          </p>
          <Button href="/" size="lg">
            Return to Home
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
