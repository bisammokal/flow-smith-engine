import teamImage from "@/assets/team-collaboration.jpg";
import { Users, Award, Lightbulb } from "lucide-react";

export const TeamSection = () => {
  const stats = [
    {
      icon: Users,
      value: "25+",
      label: "Businesses Automated",
    },
    {
      icon: Award,
      value: "3+",
      label: "Years Experience",
    },
    {
      icon: Lightbulb,
      value: "100+",
      label: "Workflows Created",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-hero p-6 backdrop-blur-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
                Meet the Team Behind{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Your Automations
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed relative z-10">
                We're a small, dedicated team of automation engineers, AI experts, and workflow 
                designers. Together, we've helped 25+ businesses automate their daily operations 
                using Make, Zapier, and n8n.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold">
                Our Expertise:
              </p>
              <div className="glass-card p-6 backdrop-blur-xl space-y-3">
                <div className="flex items-start gap-3 relative z-10">
                  <span className="text-primary mt-1">✓</span>
                  <span>No-code automation specialists with 3+ years experience</span>
                </div>
                <div className="flex items-start gap-3 relative z-10">
                  <span className="text-primary mt-1">✓</span>
                  <span>AI integration experts (OpenAI, Dialogflow, Gemini)</span>
                </div>
                <div className="flex items-start gap-3 relative z-10">
                  <span className="text-primary mt-1">✓</span>
                  <span>CRM and SaaS platform integration specialists</span>
                </div>
                <div className="flex items-start gap-3 relative z-10">
                  <span className="text-primary mt-1">✓</span>
                  <span>Custom workflow design and optimization</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="glass-card p-4 backdrop-blur-xl text-center hover:shadow-glow transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-10">{stat.value}</div>
                    <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500">
              <img
                src={teamImage}
                alt="Fluxyn Team"
                className="w-full h-auto"
              />
            </div>
            
            <div className="glass-card absolute -bottom-6 -right-6 p-6 max-w-xs shadow-medium hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              <p className="font-semibold mb-1 relative z-10">Smart Automation, Real Growth.</p>
              <p className="text-sm text-muted-foreground relative z-10">
                Trusted by businesses across healthcare, real estate, and SaaS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
