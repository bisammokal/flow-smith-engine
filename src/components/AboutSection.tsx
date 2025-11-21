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
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl opacity-25" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12 sm:mb-16">
            <div className="glass-hero p-4 sm:p-6 md:p-8 backdrop-blur-xl inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
                We Help Businesses Scale Using{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Automation
                </span>{" "}
                — Not More Manpower
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              We empower teams to achieve more with less. Our AI-driven workflows deliver measurable impact — up to 60% more revenue, 3× faster client onboarding, and zero manual follow-ups — giving you freedom to scale with precision and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="w-full h-full p-4 sm:p-6 md:p-8 group hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 relative z-10">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground relative z-10">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
};
