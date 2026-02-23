import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { OrganicDivider } from "@/components/ui/OrganicDivider";

export const metadata: Metadata = {
  title:
    "Forest Resources Inc. | Forestry & Timber Management Services in Central & Southern Illinois",
  description:
    "Professional forestry services in Shumway, IL serving Central & Southern Illinois. Forest stewardship plans, tree planting, timber appraisals & sales, wildlife enhancement, and CRP management. 20+ years experience, 650+ plans written. Call 217-259-1500.",
  alternates: {
    canonical: "https://www.forestresourcesinc.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <OrganicDivider
        variant="hills"
        className="text-wood-100 bg-stone-50 -mb-px"
      />
      <AboutPreview />
      <OrganicDivider
        variant="roots"
        className="text-forest-950 bg-wood-100 -mb-px"
      />
      <ContactCTA />
    </>
  );
}
