import { Building2, Home, Heart } from "lucide-react";

export const CaseStudiesSection = () => {
  const cases = [
    {
      icon: Heart,
      industry: "Healthcare",
      title: "Automated appointment booking & patient record tracking",
      result: "80% reduction in manual work",
      metrics: ["500+ appointments/month", "Zero missed bookings", "3hr → 30min daily task time"],
    },
    {
      icon: Home,
      industry: "Real Estate",
      title: "Lead qualification + CRM follow-ups",
      result: "Closed 2× more deals",
      metrics: ["300+ leads qualified/month", "95% follow-up rate", "Significant revenue increase"],
    },
    {
      icon: Building2,
      industry: "Dental Practice",
      title: "AI blog + SEO automation system",
      result: "Organic leads +30%",
      metrics: ["40+ blog posts automated", "3,000+ monthly visitors", "25+ new patient inquiries"],
    },
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl opacity-25" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See How Businesses Are{" "}
            <span className="text-accent">
              Scaling with Automation
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real results from real clients across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div
                key={index}
                className="group glass-card p-8 border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                    {caseStudy.industry}
                  </div>

                  <h3 className="text-xl font-bold mb-4 leading-tight">
                    {caseStudy.title}
                  </h3>

                  <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <p className="text-lg font-bold bg-gradient-luxury bg-clip-text text-transparent">
                      {caseStudy.result}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {caseStudy.metrics.map((metric, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </div>
                    ))}
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