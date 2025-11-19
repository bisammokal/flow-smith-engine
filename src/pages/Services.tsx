import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Workflow,
  Database,
  ShoppingCart,
  Brain,
  MessageSquare,
  Mic,
  Plug,
  BarChart3,
  Target,
  Mail,
  Calendar,
  UserPlus,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Repeat,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const coreServices = [
    {
      icon: Workflow,
      title: "Workflow Automation (n8n / Make / Zapier)",
      description:
        "We connect your favorite apps and build automated workflows that eliminate repetitive manual work — from lead entry to report generation — saving teams 15+ hours every week and increasing overall revenue by 40–45% through faster lead response and process efficiency.",
    },
    {
      icon: Database,
      title: "CRM Automation (Zoho, ClickUp, Monday, Close)",
      description:
        "Automate your entire sales pipeline — from lead capture to follow-ups — and keep your CRM always updated in real time. Businesses using our CRM automation see 30–50% faster deal closures, 20% higher conversion rates, and save 10+ hours per week on manual data entry and task management.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Automation (Shopify / WooCommerce / WordPress)",
      description:
        "Streamline your entire store workflow by automating orders, inventory updates, refunds, and customer notifications through Make or n8n. Stores using our automations report 35–50% faster order processing, 40% fewer fulfillment errors, and 20–30% revenue growth from improved response time and customer satisfaction.",
    },
  ];

  const aiSolutions = [
    {
      icon: Brain,
      title: "AI Content Automation (OpenAI / Flowise)",
      description:
        "Auto-generate and publish blogs, social posts, and emails using AI-driven workflows — perfect for content teams and agencies.",
    },
    {
      icon: MessageSquare,
      title: "Chatbot & AI Agent Development (Dialogflow / Flowise / Rasa)",
      description:
        "Deploy intelligent chatbots for websites and CRMs that answer FAQs, qualify leads, and guide visitors 24/7.",
    },
    {
      icon: Mic,
      title: "Voice AI Automation",
      description:
        "Create voice-to-voice or speech-to-text assistants that can greet, qualify, and support customers hands-free.",
    },
  ];

  const customServices = [
    {
      icon: Plug,
      title: "API & Webhook Integrations",
      description:
        "Connect tools that don't natively integrate. We design secure API pipelines that move data seamlessly between systems.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Dashboard Automation",
      description:
        "Build live dashboards and automated performance reports inside Google Sheets or Data Studio — always accurate, always up-to-date.",
    },
  ];

  const workflows = [
    {
      number: "1️⃣",
      icon: Target,
      title: "Lead Capture & Qualification",
      description:
        "Stop losing potential clients because of slow responses. Our system instantly captures every lead from your website, ads, or forms, filters out unqualified contacts, and sends smart alerts straight to your CRM or Slack — ensuring you engage the right people first.",
      result: "Up to 5× faster response rate and 30% more qualified leads.",
    },
    {
      number: "2️⃣",
      icon: Mail,
      title: "Cold Outreach Automation",
      description:
        "Never manually write cold emails again. This workflow personalizes outreach to every new lead based on name, interest, and source — using AI to sound human, not robotic.",
      result: "3× higher reply rates and 40% more booked calls.",
    },
    {
      number: "3️⃣",
      icon: Calendar,
      title: "Follow-Up & Meeting Scheduler",
      description:
        "Most deals die because nobody follows up on time. This workflow handles it automatically — sending follow-ups, reminders, and meeting invites using your Google Calendar or CRM.",
      result: "50% fewer missed meetings and 25% more conversions.",
    },
    {
      number: "4️⃣",
      icon: UserPlus,
      title: "Customer Onboarding Automation",
      description:
        "Make your clients feel valued from day one. As soon as a deal closes, the system triggers a personalized welcome email, shares onboarding material, and updates the CRM.",
      result: "2× faster client onboarding and improved satisfaction scores.",
    },
    {
      number: "5️⃣",
      icon: Zap,
      title: "AI Reminder Event",
      description:
        "Your AI-powered assistant that never forgets. It analyzes past meetings, suggests next steps, and sends WhatsApp or email follow-ups automatically — powered by AI.",
      result: "Continuous engagement and up to 35% better client retention.",
    },
  ];

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
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Section 1 - Header */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-2xl text-primary mb-6">
            Smart Automations That Drive Growth
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We design data-driven no-code and AI automations that save 15+ hours weekly, 
            reduce costs by 60%, and increase client conversion by up to 40% — so you scale 
            faster with less effort.
          </p>
        </div>
      </section>

      {/* Section 2 - Core Automation Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Core Automation Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="p-8 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative z-10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">{service.title}</h3>
                  <p className="text-[#EDEDED] leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 - AI & Chat Solutions */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI & Chat Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aiSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.title}
                  className="p-8"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 relative z-10">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 relative z-10">{solution.title}</h3>
                  <p className="text-[#EDEDED] text-sm leading-relaxed relative z-10">
                    {solution.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 - Custom Integration & Analytics */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Custom Integration & Analytics
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="p-8"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 relative z-10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">{service.title}</h3>
                  <p className="text-[#EDEDED] leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 - Flagship Product */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Complete AI Automation Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              5 connected workflows that cover your entire client journey — from first lead to long-term retention.
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
                  <p className="text-[#EDEDED] mb-4 text-sm leading-relaxed relative z-10">
                    {workflow.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border relative z-10">
                    <p className="text-sm font-medium text-primary">
                      → {workflow.result}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-lg text-[#EDEDED] mb-6 max-w-3xl mx-auto">
              Together, these workflows form a powerful end-to-end automation system that acts as your virtual sales and client-success team — running 24/7.
            </p>
            <div className="glass-card inline-block p-8 shadow-large">
              <p className="text-2xl font-bold mb-6 relative z-10">
                Full Suite Setup
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={scrollToContact}
                className="relative z-10"
              >
                Book a Free Demo of the Suite <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Why Choose Us */}
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
                  className="p-6 flex items-start gap-4"
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
              onClick={scrollToContact}
            >
              Let's Automate Your Business <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7 - Final CTA */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free strategy call and see how our automation experts can transform your operations.
          </p>
          <Button
            variant="cta"
            size="lg"
            onClick={scrollToContact}
          >
            Book Free Strategy Call <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
