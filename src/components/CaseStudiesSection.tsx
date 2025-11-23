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
      metrics: ["300+ leads qualified/month", "95% follow-up rate", "Significant revenue increase"],
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
    <section id="case-studies" className="py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10 mb-4">
            See How Businesses Are{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Scaling with Automation
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Real results from real clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((caseStudy) => {
            const Icon = caseStudy.icon;
            return (
              <Card
                key={caseStudy.industry}
                className="w-full h-full p-4 sm:p-6 md:p-8 group hover:shadow-glow transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <div className="text-sm font-semibold text-primary mb-2 relative z-10">
                  {caseStudy.industry}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-4 leading-tight relative z-10">
                  {caseStudy.title}
                </h3>

                <div className="glass-card inline-block px-4 py-2 mb-4 sm:mb-6 relative backdrop-blur-xl">
                  <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-10">{caseStudy.result}</p>
                </div>

                <div className="space-y-2 relative z-10">
                  {caseStudy.metrics.map((metric) => (
                    <div key={metric} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Button variant="outline" size="lg" className="glass-card hover:border-primary/50 hover:shadow-glow w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
            View Full Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};
