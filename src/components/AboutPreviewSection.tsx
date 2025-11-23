import { Award, Target, Zap } from "lucide-react";

export const AboutPreviewSection = () => {
  const stats = [
    {
      icon: Zap,
      value: "25+",
      label: "Systems Delivered",
    },
    {
      icon: Target,
      value: "6+",
      label: "Industries Served",
    },
    {
      icon: Award,
      value: "100+",
      label: "Automated Processes",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="glass-card p-8 md:p-12 border border-primary/10 hover:border-primary/20 transition-all duration-500">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We design <span className="text-primary font-semibold">advanced AI automation systems</span> that remove operational bottlenecks and accelerate growth. Our team builds scalable workflows, omnichannel assistants, CRM systems, and end-to-end automation infrastructure — tailored for high-ticket businesses.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="glass-card p-6 text-center border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 hover:scale-105"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};