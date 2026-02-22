import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  TreePine,
  Sprout,
  Leaf,
  Apple,
  TrendingUp,
  Scissors,
  Tractor,
  Ban,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Forestry Services",
  description:
    "Comprehensive forestry and land management services in Central & Southern Illinois. Forest stewardship plans, tree planting, wildlife enhancement, timber appraisals, and more.",
};

const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TreePine,
  Sprout,
  Leaf,
  Apple,
  TrendingUp,
  Scissors,
  Tractor,
  Ban,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-topo opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-forest-400 text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mt-3 mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From stewardship planning to timber sales, we provide end-to-end
            forestry services for landowners across Central & Southern Illinois.
          </p>
        </div>
        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-10 md:h-16"
          >
            <path
              d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
              className="fill-stone-50"
            />
          </svg>
        </div>
      </section>

      {/* Services List - alternating layout */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesData.map((service, index) => {
              const Icon = IconMap[service.iconName];
              const isEven = index % 2 === 0;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div
                    className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                  >
                    {/* Image */}
                    {service.image ? (
                      <div className="md:w-2/5 relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      </div>
                    ) : (
                      <div className="md:w-2/5 h-64 md:h-80 w-full rounded-2xl bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                        {Icon && (
                          <Icon size={80} className="text-forest-400" />
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="md:w-3/5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-forest-50 rounded-lg flex items-center justify-center group-hover:bg-forest-600 transition-colors">
                          {Icon && (
                            <Icon
                              size={20}
                              className="text-forest-600 group-hover:text-white transition-colors"
                            />
                          )}
                        </div>
                        <span className="text-forest-600 text-xs font-bold uppercase tracking-widest">
                          Service {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="font-serif text-3xl font-bold text-stone-900 mb-3 group-hover:text-forest-800 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-stone-600 leading-relaxed text-lg mb-4">
                        {service.description}
                      </p>
                      <p className="text-stone-500 leading-relaxed mb-6 line-clamp-3">
                        {service.fullDescription}
                      </p>

                      <span className="inline-flex items-center text-forest-700 font-semibold gap-2 group-hover:gap-3 transition-all">
                        View Details
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
