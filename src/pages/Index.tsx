import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import { ScalingSection } from "@/components/ScalingSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutPreviewSection } from "@/components/AboutPreviewSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <ScalingSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <AboutPreviewSection />
    </div>
  );
};

export default Index;
