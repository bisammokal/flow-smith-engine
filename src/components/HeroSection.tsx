import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Headline animation with parallax
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, ease: "power3.out", delay: 0.2 }
      );
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out", delay: 0.6 }
      );
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.8 }
      );
    }

    // Particles floating animation
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: "random(-40, 40)",
          x: "random(-40, 40)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        {/* Animated Particles */}
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle absolute top-20 left-[10%] w-2 h-2 bg-primary/40 rounded-full blur-sm" />
          <div className="particle absolute top-40 right-[15%] w-3 h-3 bg-secondary/30 rounded-full blur-sm" />
          <div className="particle absolute top-60 left-[25%] w-2 h-2 bg-accent/40 rounded-full blur-sm" />
          <div className="particle absolute bottom-40 right-[30%] w-3 h-3 bg-primary/30 rounded-full blur-sm" />
          <div className="particle absolute bottom-60 left-[40%] w-2 h-2 bg-secondary/40 rounded-full blur-sm" />
        </div>

        {/* Large Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-secondary/15 via-primary/10 to-transparent rounded-full blur-3xl opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div ref={headlineRef} className="text-center space-y-8 mb-16">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-luxury bg-clip-text text-transparent">Enterprise-Grade AI Automation</span>
            </div>
            
            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
              Build a{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-luxury bg-clip-text text-transparent">
                  24/7 AI-Powered
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-luxury opacity-40 blur-sm" />
              </span>
              <br />
              Sales Engine That Scales Without You
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              We automate your lead generation, funnels, follow-ups, and operations using{" "}
              <span className="text-primary font-semibold">enterprise-grade AI systems</span>{" "}
              — helping you grow faster with fewer human resources.
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link to="/book-call" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-10 py-7 bg-gradient-luxury hover:shadow-glow transition-all duration-500 hover:scale-105 font-semibold"
              >
                Book Your Automation Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg px-10 py-7 glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-500 hover:shadow-neon font-semibold"
              >
                See Live Demo
              </Button>
            </Link>
          </div>

          {/* Trust Metrics */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-500 hover:shadow-glow border border-primary/10">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
                70–80%
              </div>
              <div className="text-sm text-muted-foreground font-medium">Process Automation</div>
            </div>
            <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-500 hover:shadow-glow border border-secondary/10">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                3–5x
              </div>
              <div className="text-sm text-muted-foreground font-medium">Faster Response Time</div>
            </div>
            <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-500 hover:shadow-glow border border-accent/10">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                10x
              </div>
              <div className="text-sm text-muted-foreground font-medium">Sales Pipeline Expansion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};