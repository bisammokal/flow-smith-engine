import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkflowsSection } from "@/components/WorkflowsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkflowsSection />
      <TechStackSection />
      <CaseStudiesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
