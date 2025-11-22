import { AlertCircle, Clock, Zap, Link2Off, Users, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual Workflows Slow Down Your Team",
      description: "Repetitive tasks like data entry, follow-ups, onboarding, and reporting kill productivity — and cost you thousands every month.",
    },
    {
      icon: Zap,
      title: "Leads Get Wasted Because Response Times Are Slow",
      description: "If your business isn't replying within seconds, you're losing sales to competitors who do.",
    },
    {
      icon: Link2Off,
      title: "Your Systems Don't Talk to Each Other",
      description: "CRMs, chats, calendars, emails, spreadsheets — disconnected tools = lost info + lost revenue.",
    },
    {
      icon: Users,
      title: "Scaling Means Hiring More People (Instead of Smart Automation)",
      description: "Businesses grow, but efficiency doesn't. You keep adding people instead of adding systems.",
    },
    {
      icon: BarChart3,
      title: "No Clear Visibility: You're Making Decisions in the Dark",
      description: "Without automated tracking and reporting, you can't scale confidently.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnose",
      description: "We audit your business workflows and identify automation gaps costing you time, money, and opportunities.",
    },
    {
      number: "02",
      title: "Design",
      description: "We design a fully custom automation system mapped exactly to your current operations — not a cookie-cutter template.",
    },
    {
      number: "03",
      title: "Deploy",
      description: "We integrate AI, automations, and workflows across your tools so everything works together seamlessly.",
    },
    {
      number: "04",
      title: "Optimize",
      description: "We monitor performance, track improvements, and optimize your system so it keeps getting smarter over time.",
    },
  ];

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* PART 1 - Problem Section */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Business Is Losing Money — And You Probably Don't Even Realize It.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Most businesses waste 20–40% of revenue on slow workflows, manual tasks, and missed opportunities.
              <br />
              <span className="block mt-3">Here are the silent problems hurting your growth every day:</span>
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 md:p-10 group hover:scale-[1.02] transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-tight">
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

        {/* Transition Line */}
        <div className="text-center my-20 md:my-24">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Here's How We Fix All of This — Automatically.
          </p>
        </div>

        {/* PART 2 - Solution Section */}
        <div className="mb-20 md:mb-24">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              The Fluxyn Automation Engine™
            </h2>
          </div>

          {/* Steps Flow - Desktop Horizontal, Mobile Vertical */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow connector - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-3 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
                
                <div className="glass-card p-8 h-full group hover:scale-105 transition-all duration-300 hover:shadow-glow">
                  <div className="mb-6">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile - vertical */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="rotate-90">
                      <ArrowRight className="w-6 h-6 text-primary/40" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 md:mt-24">
          <div className="glass-card p-10 md:p-14 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 leading-relaxed">
              This Is Exactly Why Our Clients Gladly Pay $5k–$7k — Because the ROI Is Immediate.
            </p>
            <Link to="/book-call">
              <Button
                size="lg"
                variant="hero"
                className="text-lg px-10 py-6 h-auto shadow-glow hover:scale-105 transition-all duration-300"
              >
                Book Your Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
