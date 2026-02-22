"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
import { SectionReveal } from "@/components/ui/SectionReveal";

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

export function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-stone-50 bg-topo relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-forest-600 font-bold uppercase tracking-widest text-sm">
                Services
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 font-bold mt-2">
                What We Do
              </h2>
            </div>
            <p className="text-stone-600 max-w-md text-lg leading-relaxed">
              Comprehensive solutions for your forestry and land management
              needs across Central & Southern Illinois.
            </p>
          </div>
        </SectionReveal>

        <div ref={ref} className="divide-y divide-stone-200">
          {servicesData.map((service, i) => {
            const Icon = IconMap[service.iconName];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-5 py-5 transition-colors hover:bg-stone-100/50 -mx-4 px-4 rounded-lg"
                >
                  <div className="w-11 h-11 shrink-0 bg-forest-50 rounded-xl flex items-center justify-center group-hover:bg-forest-600 transition-colors duration-300">
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-forest-600 group-hover:text-white transition-colors duration-300"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-stone-900">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mt-0.5 hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-stone-400 group-hover:text-forest-600 transition-all group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
