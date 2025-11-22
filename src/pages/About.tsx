import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Target, Brain, Shield, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionCardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector("h1"),
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        heroRef.current.querySelector("p"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        heroRef.current.querySelector(".cta-buttons"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
      );
    }

    // Mission card scroll animation
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Vision cards stagger animation
    if (visionCardsRef.current) {
      const cards = visionCardsRef.current.querySelectorAll(".vision-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: visionCardsRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Stats cards stagger animation
    if (statsRef.current) {
      const statCards = statsRef.current.querySelectorAll(".stat-card");
      gsap.fromTo(
        statCards,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = [
    "Operations Automation",
    "Sales & CRM Automation",
    "E-Commerce Automation",
    "AI Assistants & Conversational AI",
    "Voice AI & Agent Automations",
    "Custom Integrations & API Pipelines",
    "Automated Reporting & Analytics",
  ];

  const pillars = [
    { icon: Brain, title: "Deep Automation Expertise", description: "Years of experience building enterprise-grade automation systems" },
    { icon: TrendingUp, title: "Revenue-Focused Workflow Design", description: "Every automation is designed to increase your bottom line" },
    { icon: Shield, title: "Enterprise-Grade Reliability", description: "99.9% uptime with proactive monitoring and alerts" },
    { icon: Users, title: "Proactive Monitoring & Support", description: "24/7 system monitoring with dedicated support team" },
  ];

  const visionCards = [
    "To redefine how the world works by building intelligent systems that let businesses scale beyond human limits — where growth becomes automated, decisions become predictive, and operations run themselves.",
    "To empower companies to operate at a level of speed and clarity that only AI can deliver — replacing complexity with precision and chaos with control.",
    "To create a future where every business functions like a self-driving enterprise — always optimizing, always learning, always growing.",
  ];

  const stats = [
    { value: "2x–4x", label: "Monthly Revenue Influenced" },
    { value: "100+", label: "Tasks Fully Automated" },
    { value: "50+", label: "Automated Workflows Live in Production" },
    { value: "6+", label: "Countries We Serve" },
    { value: "35%–70%", label: "Operational Workload Eliminated" },
    { value: "2–4", label: "Additional Deals Generated Monthly" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0D0D0F] via-[#1A1A1F] to-background">
      {/* Floating Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-destructive/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* SECTION 1 - HERO */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center p-8 sm:p-12 lg:p-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              We Build AI Systems That Help Businesses Scale — Without Hiring More People.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              We are an end-to-end AI Automation Agency helping businesses replace manual work with intelligent workflows that increase revenue, eliminate workload, and unlock effortless scale.
            </p>
            <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/book-call">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore The Automation Suite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - MISSION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <Card ref={missionRef} className="p-8 sm:p-12 hover:shadow-glow transition-all duration-300 group">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground text-center">
              <p>
                To design intelligent systems that simplify work, amplify performance, and unlock effortless scale.
              </p>
              <p>
                We create automation that feels seamless, invisible, and powerful — allowing founders to focus on vision, while their business runs itself.
              </p>
              <p className="text-lg sm:text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent mt-6">
                Precision. Clarity. Intelligence.<br />This is the future we build.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 3 - WHAT WE DO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What We Do</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We design, build, and maintain end-to-end automation systems across:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer group border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary group-hover:w-3 group-hover:h-3 transition-all duration-300" />
                  <p className="text-sm sm:text-base font-medium">{category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHY CLIENTS CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Clients Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="p-6 sm:p-8 hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 - VISION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Vision</h2>
          <div ref={visionCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {visionCards.map((vision, index) => (
              <Card
                key={index}
                className="vision-card p-6 sm:p-8 hover:shadow-glow hover:scale-105 transition-all duration-300 group relative overflow-hidden border-accent/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-sm sm:text-base text-muted-foreground relative z-10">{vision}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - OUR IMPACT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="stat-card p-6 sm:p-8 text-center hover:shadow-glow hover:scale-105 transition-all duration-300 group border-primary/20"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-8 sm:p-12 lg:p-16 text-center hover:shadow-glow transition-all duration-300 relative overflow-hidden border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-destructive/5 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative z-10">
              Ready to Automate Your Entire Business?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <Link to="/book-call">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore The Automation Suite
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
