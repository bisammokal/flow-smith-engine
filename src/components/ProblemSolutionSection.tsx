import { AlertCircle, Clock, Zap, Link2Off, Users, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Slow Manual Workflows",
      description: "Repetitive tasks kill productivity and cost thousands monthly.",
    },
    {
      icon: Zap,
      title: "Slow Response Times",
      description: "Delayed replies mean lost sales to faster competitors.",
    },
    {
      icon: Link2Off,
      title: "Disconnected Systems",
      description: "Your tools don't communicate — leading to lost data and revenue.",
    },
    {
      icon: BarChart3,
      title: "Scaling Without Systems",
      description: "Growing by hiring instead of automating limits profitability.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnose",
      description: "Audit workflows and identify costly automation gaps.",
    },
    {
      number: "02",
      title: "Design",
      description: "Build custom systems mapped to your operations.",
    },
    {
      number: "03",
      title: "Deploy",
      description: "Integrate AI across all tools seamlessly.",
    },
    {
      number: "04",
      title: "Optimize",
      description: "Monitor and improve system performance continuously.",
    },
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* PART 1 - Problem Section */}
        <div className="mb-10 md:mb-12">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Your Business Is Losing Money — And You Probably Don't Even Realize It.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Most businesses waste 20–40% of revenue on slow workflows and missed opportunities.
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-5 md:p-6 group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 leading-tight">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transition Line */}
        <div className="text-center my-8 md:my-10">
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            Here's How We Fix All of This — Automatically.
          </p>
        </div>

        {/* PART 2 - Solution Section */}
        <div className="mb-0">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              The Fluxyn Automation Engine™
            </h2>
          </div>

          {/* Steps Flow - Desktop Horizontal, Mobile Vertical */}
          <div className="grid md:grid-cols-4 gap-4 md:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow connector - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-2 z-10">
                    <ArrowRight className="w-5 h-5 text-primary/40" />
                  </div>
                )}
                
                <div className="glass-card p-5 md:p-6 h-full group hover:scale-105 transition-all duration-300">
                  <div className="mb-3">
                    <span className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile - vertical */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-3">
                    <div className="rotate-90">
                      <ArrowRight className="w-5 h-5 text-primary/40" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolutionSection;
