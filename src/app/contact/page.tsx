import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a free consultation with Forest Resources Inc. Contact Perry Bushue at 217-259-1500 for forestry services in Central & Southern Illinois.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-topo opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to discuss your property? Schedule a free consultation and
            let&apos;s build a plan for your land.
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
