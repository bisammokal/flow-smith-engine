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
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meet the Team Behind{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Your Automations
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're a small, dedicated team of automation engineers, AI experts, and workflow 
                designers. Together, we've helped 25+ businesses automate their daily operations 
                using Make, Zapier, and n8n.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                <strong>Our Expertise:</strong>
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>No-code automation specialists with 3+ years experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>AI integration experts (OpenAI, Dialogflow, Gemini)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>CRM and SaaS platform integration specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Custom workflow design and optimization</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img
                src={teamImage}
                alt="Preesoft Automations Team"
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-medium max-w-xs">
              <p className="font-semibold mb-1">Smart Automation, Real Growth.</p>
              <p className="text-sm text-muted-foreground">
                Trusted by businesses across healthcare, real estate, and SaaS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
