"use client";

import { WaitlistHero } from "@/components/ui/waitlist-hero";

export default function DMHero() {
  return (
    <WaitlistHero
      theme="light"
      logoType="brand"
      showLogoBackground={false}
      buttonText="Contact Us"
      supportingText="Let’s discuss your goals and build a digital marketing strategy that drives real growth."
      successMessage="We will contact you shortly!"
    />
  );
}
