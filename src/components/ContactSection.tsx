import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-12 md:p-16 lg:p-20 text-center border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 glass-card border border-primary/30">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">Limited Spots Available</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Ready to Automate Your Business?</span>
              </h2>
              
              {/* Subtext */}
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get a full breakdown of how AI can save you{" "}
                <span className="text-primary font-semibold">35–45 hours per week</span>{" "}
                and increase conversion rates instantly.
              </p>

              {/* CTA Button */}
              <div className="pt-6">
                <Link to="/book-call">
                  <Button 
                    size="lg" 
                    className="text-xl px-12 py-8 bg-gradient-luxury hover:shadow-glow transition-all duration-500 hover:scale-105 font-bold"
                  >
                    Start Your Strategy Call
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </Link>
              </div>

              {/* Trust Line */}
              <p className="text-sm text-muted-foreground pt-4">
                🔒 No commitment required • Free consultation • Results guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};