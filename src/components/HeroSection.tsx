import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-hero pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Build a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                24/7 Sales Engine
              </span>{" "}
              That Converts 10x Faster
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build smart systems that capture leads, send follow-ups, and onboard clients automatically — saving 20+ hours weekly. Used by 50+ Agencies & SaaS Teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg"
              >
                Book Free Demo <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("workflows")}
                className="text-lg"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by teams in healthcare, real estate & SaaS
              </p>
              <div className="flex flex-wrap gap-6 text-2xl font-semibold text-muted-foreground/60">
                <span>Healthcare</span>
                <span>•</span>
                <span>Real Estate</span>
                <span>•</span>
                <span>SaaS</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="glass-hero relative overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="AI Automation Visualization"
                className="w-full h-auto rounded-[20px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-[20px]" />
            </div>
            
            {/* Floating Stats */}
            <div className="glass-card absolute -bottom-6 -left-6 p-6 shadow-medium">
              <div className="text-4xl font-bold text-primary relative z-10">70-80%</div>
              <div className="text-sm text-[#EDEDED] relative z-10">Workload Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
