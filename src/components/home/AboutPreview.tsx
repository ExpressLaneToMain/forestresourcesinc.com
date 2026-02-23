"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: 500, suffix: "+", label: "Clients served" },
  { value: 650, suffix: "+", label: "Plans written" },
  { value: 8000, suffix: "+", label: "Acres managed" },
  { value: 450000, suffix: "+", label: "Trees planted" },
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-wood-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Image Grid */}
          <SectionReveal direction="left" className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg translate-y-8">
                  <Image
                    src="/images/tractor.jpg"
                    alt="Forest management equipment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg translate-y-8">
                  <Image
                    src="/images/deer-plot.jpg"
                    alt="Wildlife food plot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/tree-planting.jpg"
                    alt="Tree planting in Illinois"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="bg-forest-800 rounded-2xl h-48 md:h-64 flex flex-col items-center justify-center p-6 text-center text-white shadow-lg">
                  <span className="text-4xl md:text-5xl font-bold font-serif mb-2">
                    20+
                  </span>
                  <span className="text-sm uppercase tracking-wider text-forest-300">
                    Years of Experience
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Text Content */}
          <SectionReveal direction="right" className="lg:w-1/2">
            <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 font-bold mt-2 mb-6">
              Trusted Forestry
              <br />
              Expertise
            </h2>

            <div className="space-y-4 text-stone-700 leading-relaxed text-lg">
              <p>
                Perry Bushue has over 20 years of experience in the forestry
                industry, specializing in all aspects of timber and land
                management — from tree planting to timber sales to wildlife
                enhancement.
              </p>
              <p>
                Based in Shumway, IL (Effingham County), Forest Resources Inc.
                has completed management projects all over Illinois, partnering
                with hundreds of landowners and several state parks.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-10 border-t border-stone-300">
              <h3 className="font-bold text-stone-900 mb-6 text-lg">
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl font-bold text-forest-700 font-serif">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-sm text-stone-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Button href="/about" variant="outline" size="md">
                Learn More About Us
              </Button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
