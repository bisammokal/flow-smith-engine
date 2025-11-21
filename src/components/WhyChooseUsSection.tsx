import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Target, Shield, Repeat, Rocket } from "lucide-react";

export const WhyChooseUsSection = () => {
  const whyChooseUs = [
    {
      icon: TrendingUp,
      text: "70–80% Manual Work Reduction",
    },
    {
      icon: Clock,
      text: "20+ Hours Saved Weekly per Team",
    },
    {
      icon: Target,
      text: "Increases conversion rates by 30–50% and retention by 35%+",
    },
    {
      icon: Shield,
      text: "Fully customizable—integrate with your CRM, WhatsApp, Gmail, or booking tools",
    },
    {
      icon: Repeat,
      text: "Runs 24/7 & works for any client-based business",
    },
    {
      icon: Rocket,
      text: "Unlock 3–5X Revenue Growth Automatically—without human effort.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 flex items-start gap-4 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium pt-2 relative z-10">{item.text}</p>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <Button
            variant="cta"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Let's Automate Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};
