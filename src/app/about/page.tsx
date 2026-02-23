import Image from "next/image";
import { Metadata } from "next";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Forest Resources Inc. — Perry Bushue and Greg Gordon, with over 20 years of forestry experience serving Central & Southern Illinois. 650+ plans written, 500+ clients served.",
  alternates: {
    canonical: "https://www.forestresourcesinc.com/about",
  },
};

const stats = [
  { value: 500, suffix: "+", label: "Clients served" },
  { value: 650, suffix: "+", label: "Plans written" },
  { value: 8000, suffix: "+", label: "Acres managed" },
  { value: 450000, suffix: "+", label: "Trees planted" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-topo opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mt-3 mb-4">
            About Forest Resources Inc.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Two decades of hands-on forestry experience, serving landowners
            across Central & Southern Illinois.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-10 md:h-16"
          >
            <path
              d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Images */}
            <SectionReveal direction="left" className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/tree-planting.jpg"
                    alt="Tree planting operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image
                    src="/images/tractor.jpg"
                    alt="Forestry equipment in the field"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </SectionReveal>

            {/* Text */}
            <SectionReveal direction="right" className="lg:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-5 text-stone-700 text-lg leading-relaxed">
                <p>
                  We, Perry Bushue and Greg Gordon, each have over 20 years of
                  experience in the forestry industry. We specialize in all
                  aspects of timber and land management — from tree planting to
                  timber sales to wildlife enhancement.
                </p>
                <p>
                  Though we&apos;re based in Shumway, IL (Effingham County),
                  we&apos;ve completed management projects all over Illinois.
                </p>
                <p>
                  Forest Resources Inc. has partnered with hundreds of
                  landowners and several state parks in Illinois. With over 600
                  management plans written and thousands of acres managed, we
                  are a trusted source for timber and land management services.
                </p>
                <p>
                  We work closely with landowners and state parks to create
                  tailored management plans that meet the unique needs of the
                  property. Our ongoing work with these clients reflects our
                  commitment to quality and reliability, and we are proud to
                  have built long-lasting relationships with our clients.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-wood-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-bold text-center mb-12">
              Our Track Record
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <SectionReveal key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-forest-700 font-serif">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm text-stone-600 mt-2">
                    {stat.label}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Band */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/drone.jpg"
          alt="Aerial view of managed forest"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-950/30" />
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-bold mb-6">
              Serving Central & Southern Illinois
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Based in Shumway, IL (Effingham County), we provide on-site
              visits and forestry services throughout Central and Southern
              Illinois. No matter where your property is, we can help you
              develop a plan that meets your goals.
            </p>
            <Button href="/contact" size="lg">
              Schedule a Site Visit
            </Button>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
