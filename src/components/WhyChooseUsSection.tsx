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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 px-4">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <p className="text-sm sm:text-base text-foreground font-medium pt-1 sm:pt-2 relative z-10 leading-relaxed">{item.text}</p>
              </Card>
            );
          })}
        </div>
        <div className="text-center px-4">
          <Button
            variant="cta"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-5 sm:py-6 text-base sm:text-lg"
          >
            Let's Automate Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};
