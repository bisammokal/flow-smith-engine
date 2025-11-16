import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  Mail, 
  Calendar, 
  UserPlus, 
  MessageSquare,
  ArrowRight 
} from "lucide-react";

export const WorkflowsSection = () => {
  const workflows = [
    {
      number: "1️⃣",
      icon: Target,
      title: "Lead Capture & Qualification",
      description: "Smart lead filtering, CRM entry, instant Slack/email alerts",
      benefit: "Never miss a qualified lead",
    },
    {
      number: "2️⃣",
      icon: Mail,
      title: "Cold Outreach Automation",
      description: "Personalized auto-emails to new leads",
      benefit: "Scale outreach effortlessly",
    },
    {
      number: "3️⃣",
      icon: Calendar,
      title: "Follow-Up & Meeting Scheduler",
      description: "Auto reminders + meeting booking",
      benefit: "Close more deals faster",
    },
    {
      number: "4️⃣",
      icon: UserPlus,
      title: "Client Onboarding Automation",
      description: "Client welcome emails + CRM update",
      benefit: "Seamless client experience",
    },
    {
      number: "5️⃣",
      icon: MessageSquare,
      title: "AI Reminder Event",
      description: "Gemini AI follow-up suggestions via WhatsApp & email",
      benefit: "Intelligent engagement timing",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="workflows" className="py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-teal-500/15 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="glass-hero p-6 backdrop-blur-xl inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-bold relative z-10">
              Our 5 AI-Powered Workflows
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            The Complete Automation Suite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {workflows.map((workflow) => {
            const Icon = workflow.icon;
            return (
              <Card
                key={workflow.title}
                className="p-6 group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <span className="text-3xl">{workflow.number}</span>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 relative z-10">{workflow.title}</h3>
                <p className="text-muted-foreground mb-4 relative z-10">{workflow.description}</p>
                
                <div className="pt-4 border-t border-border/50 relative z-10">
                  <p className="text-sm font-medium text-primary">
                    ✓ {workflow.benefit}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="glass-card p-8 backdrop-blur-xl inline-block hover:shadow-glow transition-all duration-300">
            <p className="text-2xl font-bold mb-4 relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              💡 Get the Complete Suite for $3,800 – $4,200
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group relative z-10"
            >
              Book a Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
