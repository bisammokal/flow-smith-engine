import { Shield, Cog, Building2, HeadphonesIcon } from "lucide-react";

export const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Cog,
      title: "Built for scale — no band-aid automations",
      description: "Enterprise-grade architecture designed to grow with your business, not break at scale.",
    },
    {
      icon: Shield,
      title: "Real engineering + AI architecture",
      description: "We don't just connect tools — we build intelligent systems that think and adapt.",
    },
    {
      icon: Building2,
      title: "Proven across multiple industries",
      description: "Healthcare, real estate, SaaS, dental, B2B — we've automated them all successfully.",
    },
    {
      icon: HeadphonesIcon,
      title: "Enterprise-grade reliability and support",
      description: "99.9% uptime with dedicated support that actually understands your business.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why{" "}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              High-Growth Businesses
            </span>{" "}
            Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass-card p-8 border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};