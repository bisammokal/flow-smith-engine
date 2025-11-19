import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      type: "🟢 Coaches / Small Agencies",
      description: "Full 5-workflow suite setup",
      price: "$2,800 – $3,200",
      features: [
        "All 5 core workflows",
        "Basic CRM integration",
        "Email automation",
        "2 weeks implementation",
        "1 month support",
      ],
    },
    {
      type: "🟡 SaaS / B2B Startups",
      description: "End-to-end automation",
      price: "$3,500 – $4,200",
      features: [
        "All 5 core workflows",
        "Advanced CRM integration",
        "Multi-channel automation",
        "AI-powered follow-ups",
        "3 weeks implementation",
        "3 months support",
      ],
      popular: true,
    },
    {
      type: "🔵 Enterprises",
      description: "Advanced + AI custom flows",
      price: "$4,500 – $7,000",
      features: [
        "All 5 core workflows",
        "Custom workflow development",
        "Enterprise integrations",
        "Dedicated support",
        "Advanced AI features",
        "Ongoing optimization",
      ],
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-purple-500/15 rounded-full blur-3xl opacity-25" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="glass-hero p-6 backdrop-blur-xl inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-bold relative z-10">
              Transparent,{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Value-Driven Pricing
              </span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your business size
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.type}
              className={`p-8 relative group hover:shadow-glow transition-all duration-300 ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2">{plan.type}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{plan.price}</div>
              </div>

              <div className="space-y-3 mb-8 relative z-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className={`w-full relative z-10 ${!plan.popular ? "glass-card hover:border-primary/50" : ""}`}
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
