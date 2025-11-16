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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-500/15 to-teal-500/15 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary relative z-10">AI-Powered Automation</span>
            </div>
            
            <div className="glass-hero p-8 backdrop-blur-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative z-10">
                Build a{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  24/7 Sales Engine
                </span>{" "}
                That Converts 10x Faster
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build smart systems that capture leads, send follow-ups, and onboard clients automatically — saving 20+ hours weekly. Used by 50+ Agencies & SaaS Teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg group"
              >
                Book Free Demo <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("workflows")}
                className="text-lg glass-card hover:border-primary/50"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <div className="glass-card p-6 backdrop-blur-xl">
                <p className="text-sm text-muted-foreground mb-4 relative z-10">
                  Trusted by teams in healthcare, real estate & SaaS
                </p>
                <div className="flex flex-wrap gap-6 text-2xl font-semibold text-foreground/60 relative z-10">
                  <span>Healthcare</span>
                  <span>•</span>
                  <span>Real Estate</span>
                  <span>•</span>
                  <span>SaaS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="glass-hero relative overflow-hidden shadow-large hover:shadow-glow transition-all duration-500">
              <img
                src={heroImage}
                alt="AI Automation Visualization"
                className="w-full h-auto rounded-[20px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-[20px]" />
            </div>
            
            {/* Floating Stats */}
            <div className="glass-card absolute -bottom-6 -left-6 p-6 shadow-medium hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-10">70-80%</div>
              <div className="text-sm text-foreground relative z-10">Workload Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
