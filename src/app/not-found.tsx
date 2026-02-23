import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative pt-32 pb-24 bg-stone-50 min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-forest-600 text-sm font-semibold uppercase tracking-widest">
          404 Error
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
          Page Not Found
        </h1>
        <p className="text-stone-600 text-lg mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Return Home
          </Button>
          <Button href="/services" variant="outline" size="lg">
            View Services
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
