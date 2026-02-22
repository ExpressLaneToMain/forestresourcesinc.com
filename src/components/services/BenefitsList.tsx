"use client";

import { CheckCircle } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

interface BenefitsListProps {
  benefits: string[];
}

export function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <SectionReveal key={index} delay={index * 0.08}>
          <div className="flex gap-4 items-start">
            <CheckCircle
              className="flex-shrink-0 text-forest-600 mt-1"
              size={22}
            />
            <p className="text-stone-700 leading-relaxed">{benefit}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}
