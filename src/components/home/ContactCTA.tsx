"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function ContactCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/drone.jpg"
          alt="Aerial forest view"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-950/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-3 mb-6">
            Ready to Enhance
            <br />
            Your Land?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a stewardship plan, timber appraisal, or help with
            wildlife habitat — we&apos;re here to help. Schedule a free
            consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
            <a
              href="tel:2172591500"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg text-white font-semibold hover:text-forest-300 transition-colors"
            >
              <Phone size={20} />
              217-259-1500
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
