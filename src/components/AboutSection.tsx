import { Target, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Growth Engine",
      description: "Replace repetitive work with scalable client pipelines.",
    },
    {
      icon: Zap,
      title: "Smart Systems",
      description: "Automations that work 24/7 — no burnout, no missed leads.",
    },
    {
      icon: TrendingUp,
      title: "Effortless Scale",
      description: "Grow faster with lean teams and predictable results.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            We Help Businesses Scale Using{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Automation
            </span>{" "}
            — Not More Manpower
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We empower teams to achieve more with less. Our AI-driven workflows deliver measurable impact — up to 60% more revenue, 3× faster client onboarding, and zero manual follow-ups — giving you freedom to scale with precision and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-8"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 relative z-10">{feature.title}</h3>
                <p className="text-[#EDEDED] relative z-10">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
