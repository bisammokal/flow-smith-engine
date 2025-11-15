import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-12 md:p-16 text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to Automate{" "}
                <span className="bg-gradient-to-r from-[#8B9DC3] to-[#4A90E2] bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of businesses already saving 20–80 hours per month with smart automation.
              </p>
            </div>

            <div className="pt-4">
              <Link to="/book-call">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-12 py-6 hover:scale-105 transition-transform duration-200"
                >
                  Book Your Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
              <Lock className="w-4 h-4 text-primary" />
              <span>Your information is 100% secure • No spam, ever</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
