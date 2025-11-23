import { AlertTriangle, Clock, TrendingDown, Users, ArrowRight } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Missed leads are killing your revenue",
      description: "Every unanswered inquiry is money walking out the door.",
    },
    {
      icon: Clock,
      title: "Manual follow-ups waste 2–5 hours daily",
      description: "Your team is drowning in repetitive tasks instead of closing deals.",
    },
    {
      icon: AlertTriangle,
      title: "Untracked conversations = lost sales",
      description: "Without automation, critical opportunities slip through the cracks.",
    },
    {
      icon: Users,
      title: "Repetitive tasks slow your growth",
      description: "Scaling shouldn't mean hiring an army of people.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnose bottlenecks",
      description: "We identify where your business is bleeding time and revenue.",
    },
    {
      number: "02",
      title: "Design your automation architecture",
      description: "Custom AI workflows mapped precisely to your operations.",
    },
    {
      number: "03",
      title: "Deploy AI workflows",
      description: "Seamless integration across all your tools and systems.",
    },
    {
      number: "04",
      title: "Optimize for compounding results",
      description: "Continuous improvement that compounds your ROI over time.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-destructive/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* PART 1 - Problem Section */}
        <div className="mb-24">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Business Is{" "}
              <span className="bg-gradient-to-r from-destructive to-red-400 bg-clip-text text-transparent">
                Losing Money
              </span>{" "}
              — You Just Can't See It Yet
            </h2>
          </div>

          {/* Problem Cards - Horizontal Premium Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 glass-card border border-destructive/10 hover:border-destructive/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-large"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-destructive" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2 - Solution Section */}
        <div className="mb-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">FluXyn AI Automation Engine™</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-step process transforms chaos into compounding growth
            </p>
          </div>

          {/* Steps Flow - Premium Futuristic Design */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="glass-card p-6 h-full border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 hover:scale-105">
                    {/* Step Number */}
                    <div className="relative z-10 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4 shadow-glow backdrop-blur-sm">
                        <span className="text-2xl font-bold text-primary">{step.number}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-primary/40 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
