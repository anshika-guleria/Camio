import { AboutSection } from "@/components/landing/AboutSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { CTA } from "@/components/landing/CTA";
import { DocsSection } from "@/components/landing/DocsSection";
import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { InteractivePreview } from "@/components/landing/InteractivePreview";
import { PricingSection } from "@/components/landing/PricingSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Hero />
      <InteractivePreview />
      <Features />
      <AboutSection />
      <PricingSection />
      <DocsSection />
      <ContactSection />
      <CTA />
    </div>
  );
}
