import { HeroSection } from "@/components/sections/hero-section";
import { TrustBarSection } from "@/components/sections/trust-bar-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { FounderSection } from "@/components/sections/founder-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBarSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <FounderSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}