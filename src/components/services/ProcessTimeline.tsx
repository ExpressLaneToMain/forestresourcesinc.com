"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

interface Step {
  title: string;
  description: string;
  subItems?: string[];
}

interface ProcessTimelineProps {
  steps: Step[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-forest-300 via-forest-500 to-forest-300 hidden md:block" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <SectionReveal key={index} delay={index * 0.1}>
            <div className="flex gap-6">
              {/* Step number - tree ring style */}
              <div className="flex-shrink-0 relative">
                <div className="w-10 h-10 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-forest-100">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {step.description}
                </p>
                {step.subItems && (
                  <ul className="mt-3 space-y-2 ml-1">
                    {step.subItems.map((item, i) => (
                      <li
                        key={i}
                        className="text-stone-600 leading-relaxed flex gap-3 text-sm"
                      >
                        <span className="text-forest-500 mt-1.5 flex-shrink-0">
                          &bull;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
