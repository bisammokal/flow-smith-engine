import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Home, Heart } from "lucide-react";

export const CaseStudiesSection = () => {
  const cases = [
    {
      icon: Heart,
      industry: "🏥 Healthcare",
      title: "Automated appointment booking & patient record tracking",
      result: "80% reduction in manual work",
      metrics: ["500+ appointments/month", "Zero missed bookings", "3hr → 30min daily task time"],
    },
    {
      icon: Home,
      industry: "🏢 Real Estate",
      title: "Lead qualification + CRM follow-ups",
      result: "Closed 2× more deals",
      metrics: ["300+ leads qualified/month", "95% follow-up rate", "$150K additional revenue"],
    },
    {
      icon: Building2,
      industry: "🦷 Dental Practice",
      title: "AI blog + SEO automation system",
      result: "Organic leads +30%",
      metrics: ["40+ blog posts automated", "3,000+ monthly visitors", "25+ new patient inquiries"],
    },
  ];

  return (
    <section id="case-studies" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See How Businesses Are{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Scaling with Automation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy) => {
            const Icon = caseStudy.icon;
            return (
              <Card
                key={caseStudy.industry}
                className="p-8"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 relative z-10">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <div className="text-sm font-semibold text-primary mb-2 relative z-10">
                  {caseStudy.industry}
                </div>

                <h3 className="text-xl font-semibold mb-4 leading-tight relative z-10">
                  {caseStudy.title}
                </h3>

                <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6 relative z-10">
                  <p className="text-lg font-bold text-primary">{caseStudy.result}</p>
                </div>

                <div className="space-y-2 relative z-10">
                  {caseStudy.metrics.map((metric) => (
                    <div key={metric} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-[#EDEDED]">{metric}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};
