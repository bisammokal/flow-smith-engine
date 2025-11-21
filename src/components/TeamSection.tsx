import teamImage from "@/assets/team-collaboration.jpg";
import { Users, Award, Lightbulb } from "lucide-react";

export const TeamSection = () => {
  const stats = [
    {
      icon: Users,
      value: "25+",
      label: "Companies Automated End-to-End",
    },
    {
      icon: Award,
      value: "3+",
      label: "Years in Automation & AI Engineering",
    },
    {
      icon: Lightbulb,
      value: "100+",
      label: "Custom Workflows Built and Deployed",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#F7B731]/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/8 to-transparent rounded-full blur-3xl opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#F7B731]/5 via-transparent to-blue-500/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 lg:space-y-10">
            {/* Main Content Card */}
            <div 
              className="p-8 sm:p-10 rounded-3xl relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7B731]/5 via-transparent to-blue-500/5 opacity-50" />
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 relative z-10 leading-tight">
                Meet the Specialists Behind{" "}
                <span className="bg-gradient-to-r from-[#F7B731] via-[#FFC850] to-[#F7B731] bg-clip-text text-transparent">
                  Your Automations
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl font-semibold mb-4 relative z-10" style={{ color: '#F7B731' }}>
                A dedicated team of automation engineers, AI specialists, and workflow architects helping companies scale through smart systems — not more staff.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed relative z-10" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                We design, build, and manage high-performance automation systems that replace repetitive work, accelerate growth, and transform everyday operations for global teams.
              </p>
              
              {/* Trust Badge */}
              <div 
                className="mt-6 pt-6 border-t relative z-10"
                style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <p className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Trusted by teams in the US, UK, UAE & Europe
                </p>
              </div>
            </div>

            {/* Expertise List */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Our Expertise:
              </h3>
              <div 
                className="p-6 sm:p-8 rounded-2xl space-y-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#F7B731' }} />
                  <span className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    Advanced no-code automation engineering (Make, n8n, Zapier)
                  </span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#F7B731' }} />
                  <span className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    AI workflow and agent integration (OpenAI, Dialogflow, Gemini)
                  </span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#F7B731' }} />
                  <span className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    Deep CRM and SaaS platform automation (HubSpot, GoHighLevel, Salesforce)
                  </span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#F7B731' }} />
                  <span className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    Custom workflow architecture, optimization, and maintenance
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label} 
                    className="p-6 text-center transition-all duration-300 group rounded-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(247, 183, 49, 0.3)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(247, 183, 49, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(247, 183, 49, 0.15), rgba(247, 183, 49, 0.05))',
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: '#F7B731' }} />
                    </div>
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: '#F7B731' }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-sm font-medium leading-snug"
                      style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Image Section */}
          <div className="relative mt-10 lg:mt-0">
            <div 
              className="rounded-3xl overflow-hidden transition-all duration-500 relative group"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(247, 183, 49, 0.15), 0 0 0 1px rgba(247, 183, 49, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)';
              }}
            >
              {/* Image with subtle overlay */}
              <div className="relative">
                <img
                  src={teamImage}
                  alt="Elite automation engineering team collaborating on workflow systems"
                  className="w-full h-auto"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"
                />
              </div>
            </div>
            
            {/* Floating Trust Card */}
            <div 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-8 sm:translate-x-0 p-5 sm:p-6 w-[90%] sm:w-auto max-w-sm rounded-2xl hover:-translate-y-1 transition-all duration-300"
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(247, 183, 49, 0.3)',
                boxShadow: '0 10px 40px rgba(247, 183, 49, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              }}
            >
              <p className="font-bold text-lg mb-2" style={{ color: '#F7B731' }}>
                Smart Automation, Real Growth.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Trusted by businesses across healthcare, real estate, and SaaS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
