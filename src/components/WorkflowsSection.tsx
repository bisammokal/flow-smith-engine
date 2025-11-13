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
    <section id="workflows" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our 5 AI-Powered Workflows
          </h2>
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
                className="p-6 group"
              >
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <span className="text-3xl">{workflow.number}</span>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 relative z-10">{workflow.title}</h3>
                <p className="text-[#EDEDED] mb-4 relative z-10">{workflow.description}</p>
                
                <div className="pt-4 border-t border-border relative z-10">
                  <p className="text-sm font-medium text-primary">
                    ✓ {workflow.benefit}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
            <p className="text-2xl font-bold mb-4">
              💡 Get the Complete Suite for $3,800 – $4,200
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Book a Free Consultation <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
