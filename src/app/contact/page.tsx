"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 max-w-7xl mb-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info & Messaging */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-bold font-heading mb-8 tracking-tighter leading-none"
              >
                Let's build <br /> <span className="text-[var(--color-accent)]">something.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-[var(--color-secondary)] mb-16 max-w-md"
              >
                Whether you have a fully formed RFP or just a rough idea, we're ready to hear about your next project.
              </motion.p>

              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-black/5">
                    <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">New Business</h3>
                    <a href="mailto:hello@virratglobal.com" className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      hello@virratglobal.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-black/5">
                    <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <a href="tel:+918237583648" className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      +91 8237 583 648
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-black/5">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office</h3>
                    <p className="text-[var(--color-secondary)]">
                      Baner, Pune,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-black/5 shadow-2xl shadow-black/5"
            >
              <h2 className="text-3xl font-bold font-heading mb-8">Tell us about your project</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-[var(--color-background)] border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-[var(--color-background)] border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">Email Address</label>
                  <input type="email" id="email" className="w-full bg-[var(--color-background)] border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">Company Name</label>
                  <input type="text" id="company" className="w-full bg-[var(--color-background)] border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">Project Details</label>
                  <textarea id="message" rows={4} className="w-full bg-[var(--color-background)] border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none" placeholder="Budget, timeline, objectives..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-bold hover:bg-black/80 transition-colors flex items-center justify-center">
                  Submit Inquiry <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </motion.div>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
