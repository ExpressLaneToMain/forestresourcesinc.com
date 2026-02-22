import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { OrganicDivider } from "@/components/ui/OrganicDivider";

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
