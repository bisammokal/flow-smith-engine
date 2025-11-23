import { Zap, TrendingUp, Bot } from "lucide-react";

export const ScalingSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Automated lead capture + follow-ups",
      description: "Never miss a lead. AI captures, qualifies, and nurtures prospects 24/7 while you sleep.",
    },
    {
      icon: TrendingUp,
      title: "CRM + pipeline optimization",
      description: "Smart automation keeps your pipeline flowing and deals moving forward automatically.",
    },
    {
      icon: Bot,
      title: "AI assistants that handle conversations",
      description: "Intelligent chatbots and voice AI that understand context and close deals.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How Clients{" "}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              Scale Faster With AI
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="glass-card p-8 h-full border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-glow">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    {/* Icon with 3D effect */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                      <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
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