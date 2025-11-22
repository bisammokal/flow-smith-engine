import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const HeroSection = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Headline animation
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
      );
    }

    // Spline fade in from right
    if (splineRef.current) {
      gsap.fromTo(
        splineRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power2.out", delay: 0.4 }
      );
    }

    // Floating orbs animation
    [orb1Ref, orb2Ref, orb3Ref].forEach((ref, index) => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: "+=30",
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });
        
        gsap.to(ref.current, {
          x: "+=20",
          duration: 4 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      }
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleCtaLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Spline 3D Background */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/orb-e26J8npyrxp59MohW96nSb0c/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>

      {/* Floating Neon Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div 
          ref={orb1Ref}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-40" 
        />
        <div 
          ref={orb2Ref}
          className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl opacity-30" 
        />
        <div 
          ref={orb3Ref}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-500/25 to-teal-500/25 rounded-full blur-3xl opacity-35" 
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-[2]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-[10]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div ref={headlineRef} className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass-card border-primary/30">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-primary relative z-10">AI-Powered Automation</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight relative z-10">
              Build a{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                24/7 Sales Engine
              </span>{" "}
              That Converts 10x Faster
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-1">
              We build smart systems that capture leads, send follow-ups, and onboard clients automatically — saving 20+ hours weekly. Used by 50+ Agencies & SaaS Teams.
            </p>

            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              onMouseEnter={handleCtaHover}
              onMouseLeave={handleCtaLeave}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto text-base sm:text-lg group px-6 sm:px-8 py-5 sm:py-6 active:scale-95"
              >
                Book Free Demo <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("workflows")}
                className="w-full sm:w-auto text-base sm:text-lg glass-card hover:border-primary/50 px-6 sm:px-8 py-5 sm:py-6 active:scale-95"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 sm:pt-8">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 relative z-10">
                Trusted by teams in healthcare, real estate & SaaS
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground/60 relative z-10">
                <span>Healthcare</span>
                <span>•</span>
                <span>Real Estate</span>
                <span>•</span>
                <span>SaaS</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="glass-hero relative overflow-hidden shadow-large hover:shadow-glow transition-all duration-500">
              <img
                src={heroImage}
                alt="AI Automation Visualization"
                className="w-full h-auto rounded-[20px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-[20px]" />
            </div>
            
            {/* Floating Stats */}
            <div className="glass-card absolute -bottom-4 left-1/2 -translate-x-1/2 sm:-bottom-6 sm:left-6 sm:translate-x-0 p-4 sm:p-6 shadow-medium hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-10">70-80%</div>
              <div className="text-xs sm:text-sm text-foreground relative z-10">Workload Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
