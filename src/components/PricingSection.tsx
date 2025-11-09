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
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Value-Driven Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your business size
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.type}
              className={`p-8 relative ${
                plan.popular ? "ring-2 ring-primary shadow-large" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.type}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
