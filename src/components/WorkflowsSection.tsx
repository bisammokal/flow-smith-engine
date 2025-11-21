import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Users, 
  Target, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

export const WorkflowsSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Fully Automated Sales Engine",
      description: "End-to-end lead capture, qualification, and follow-up.",
    },
    {
      icon: Users,
      title: "AI-Driven Customer Operations",
      description: "Smart onboarding, reminders, and customer retention workflows.",
    },
    {
      icon: Target,
      title: "Intelligent Outreach & Engagement",
      description: "Hyper-personalized messaging and data-driven campaign triggers.",
    },
    {
      icon: TrendingUp,
      title: "Centralized Insights & Reporting",
      description: "Real-time alerts, performance tracking, and AI suggestions.",
    },
  ];

  return (
    <section id="workflows" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-teal-500/15 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="glass-hero p-4 sm:p-6 backdrop-blur-xl inline-block mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
              The Systems That Run Your Business — Automatically
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered automation across sales, operations, support, and customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="w-full h-full p-4 sm:p-6 md:p-8 group hover:shadow-glow hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

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
