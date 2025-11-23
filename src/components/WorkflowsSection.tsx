import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const WorkflowsSection = () => {
  return (
    <section id="workflows" className="py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-teal-500/15 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="glass-card p-6 sm:p-8 md:p-10 backdrop-blur-xl inline-block hover:shadow-glow transition-all duration-500">
            <Link to="/services">
              <Button
                variant="hero"
                size="lg"
                className="group relative z-10 w-full sm:w-auto text-sm sm:text-base md:text-lg px-5 sm:px-8 py-3 sm:py-4 shadow-glow"
              >
                Explore the Full Automation Suite <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 relative z-10">
              20+ specialized workflows designed to scale your business operations effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
