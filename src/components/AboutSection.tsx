import { Target, TrendingUp, Zap } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Focused",
      description: "Free teams from repetitive tasks to focus on growth",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Intelligent workflows that work 24/7 automatically",
    },
    {
      icon: TrendingUp,
      title: "Scale Efficiently",
      description: "Grow without adding more manpower",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
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
            Our mission is to free teams from repetitive tasks. We design intelligent workflows 
            that handle lead capture, outreach, onboarding, and follow-ups automatically — so you 
            focus on growth, not grunt work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
