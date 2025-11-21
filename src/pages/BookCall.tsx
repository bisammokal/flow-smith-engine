import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Shield, Zap, Star, Clock, Target, TrendingUp, ChevronRight } from "lucide-react";

const BookCall = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    auditWorkflows: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Strategy Call Requested!",
      description: "We'll reach out within 12-24 hours to schedule your free consultation.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      auditWorkflows: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Founder, TechFlow SaaS",
      text: "The strategy call alone saved us 3 months of trial and error. They identified bottlenecks we didn't even know existed.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Emma Rodriguez",
      role: "Operations Director, MedCore",
      text: "Within 2 weeks of implementation, our team saved 18 hours weekly. The ROI was immediate and measurable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "David Park",
      role: "CEO, CloudSync",
      text: "Best investment we made this year. Their automation blueprint transformed our entire sales pipeline.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "How long does the strategy call take?",
      answer: "Typically 30-45 minutes. We keep it focused and valuable—no fluff, just actionable insights tailored to your business.",
    },
    {
      question: "What do you review during the call?",
      answer: "We analyze your current workflows, identify automation opportunities, discuss your goals, and create a preliminary automation roadmap. You'll leave with clear next steps.",
    },
    {
      question: "Is the strategy call really free?",
      answer: "Absolutely. No obligations, no hidden fees. We believe in earning your trust through value first. Even if we're not the right fit, you'll gain insights you can implement immediately.",
    },
    {
      question: "What should I prepare before the call?",
      answer: "Just bring your current challenges and processes you'd like to automate. We'll guide you through everything else. A brief overview of your tech stack helps but isn't required.",
    },
    {
      question: "What happens after the strategy call?",
      answer: "We'll send you a detailed automation blueprint within 48 hours. If you choose to move forward, we'll create a custom implementation plan with clear timelines and pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Premium Ambient Gradient Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-[140px]"></div>
        <div className="absolute top-40 right-20 w-[700px] h-[700px] bg-gradient-to-bl from-purple-500/20 via-blue-600/15 to-transparent rounded-full blur-[160px]"></div>
        <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 via-purple-400/10 to-transparent rounded-full blur-[130px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Premium Glass Panel with Content */}
            <div className="relative z-10">
              <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-2xl">
                {/* Gradient border glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/20 via-blue-500/10 to-purple-500/20 opacity-50 blur-xl -z-10"></div>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Badge */}
                  <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/30 backdrop-blur-sm">
                    <span className="text-primary text-xs sm:text-sm font-medium">✨ Free Strategy Call — No Obligations</span>
                  </div>
                  
                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                    Book Your Free{" "}
                    <span className="bg-gradient-to-r from-[#FFD43B] via-[#4A90E2] to-[#8B9DC3] bg-clip-text text-transparent">
                      Strategy Call
                    </span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-base sm:text-lg lg:text-xl text-foreground/70 leading-relaxed">
                    Let's explore how automation can save you 20–80 hours per month and scale your revenue effortlessly.
                  </p>
                  
                  {/* Premium Benefits Row */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                    <div className="group px-4 py-2.5 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-primary/30 transition-all duration-300 hover:bg-white/[0.05]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Clock className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground/80 font-medium">30-45 min call</span>
                      </div>
                    </div>
                    <div className="group px-4 py-2.5 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.05]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
                          <Target className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-sm text-foreground/80 font-medium">Actionable insights</span>
                      </div>
                    </div>
                    <div className="group px-4 py-2.5 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 hover:bg-white/[0.05]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-sm text-foreground/80 font-medium">Custom roadmap</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal Floating Icons */}
            <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Soft ambient glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary/20 via-blue-500/15 to-purple-500/20 rounded-full blur-[100px]"></div>
                  
                  {/* Minimal neon-line icon cards */}
                  <div className="absolute top-[15%] left-[20%] group">
                    <div className="w-24 h-24 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-primary/30 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110">
                      <Target className="w-12 h-12 text-primary/80 stroke-[1.5]" />
                    </div>
                  </div>
                  
                  <div className="absolute top-[50%] right-[15%] group">
                    <div className="w-24 h-24 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-blue-500/30 flex items-center justify-center hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
                      <Zap className="w-12 h-12 text-blue-400/80 stroke-[1.5]" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[20%] left-[35%] group">
                    <div className="w-24 h-24 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-purple-500/30 flex items-center justify-center hover:border-purple-500/50 transition-all duration-300 hover:scale-110">
                      <TrendingUp className="w-12 h-12 text-purple-400/80 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphism Form Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card p-6 sm:p-8 lg:p-12 border-2 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="glass-card border-white/20 focus:border-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="glass-card border-white/20 focus:border-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company / Website
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="company.com"
                    className="glass-card border-white/20 focus:border-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    What process do you want to automate? *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your biggest time-consuming tasks or workflows..."
                    className="glass-card border-white/20 focus:border-primary/50 transition-all min-h-[120px]"
                  />
                </div>

                <div className="flex items-center gap-3 p-4 glass-card rounded-lg border border-white/10">
                  <input
                    type="checkbox"
                    id="auditWorkflows"
                    checked={formData.auditWorkflows}
                    onChange={(e) => setFormData((prev) => ({ ...prev, auditWorkflows: e.target.checked }))}
                    className="w-5 h-5 accent-primary"
                  />
                  <label htmlFor="auditWorkflows" className="text-sm text-foreground cursor-pointer">
                    I want you to audit my workflows (we'll do a deep-dive analysis)
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary via-yellow-500 to-orange-500 hover:shadow-[0_0_40px_rgba(255,212,59,0.5)] active:scale-95 transition-all duration-300 transform hover:scale-[1.02] text-base sm:text-lg font-semibold py-5 sm:py-6"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  Book My Free Strategy Call
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </Button>

              <p className="text-center text-xs sm:text-sm text-muted-foreground px-2">
                We'll respond within <span className="text-primary font-medium">12–24 hours</span> • No obligations • 100% free consultation
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Trust & Social Proof Row */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex items-center gap-3 sm:gap-4 hover:scale-105 active:scale-95 hover:shadow-[0_8px_32px_rgba(255,212,59,0.3)] transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-foreground/90">Trusted by agencies, SaaS startups & healthcare brands</p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-4 hover:scale-105 hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)] transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-sm text-foreground/90">Secure data handling & enterprise-grade workflows</p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-4 hover:scale-105 hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)] transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm text-foreground/90">Average 70–80% manual work reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Process Timeline */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">A simple, proven process to transform your operations</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-blue-500/50 to-purple-500/50 -translate-y-1/2 z-0"></div>

            {[
              { step: "1", title: "Submit Form", desc: "Share your challenges and goals", icon: "📝" },
              { step: "2", title: "We Audit Your Systems", desc: "Deep-dive into your workflows", icon: "🔍" },
              { step: "3", title: "Design Blueprint", desc: "Custom automation roadmap", icon: "🎯" },
              { step: "4", title: "Scale Effortlessly", desc: "Watch your business transform", icon: "🚀" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl border-2 border-white/10 relative z-10 hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,212,59,0.3)] transition-all duration-300 group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book a Call Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                The Impact
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Real results our clients achieve</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "62%", label: "Faster Lead Response Time", icon: Clock, color: "from-primary to-yellow-500" },
              { stat: "3×", label: "More Meetings Booked Automatically", icon: Target, color: "from-blue-500 to-purple-500" },
              { stat: "50-70%", label: "Increase in Workflow Efficiency", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-10 rounded-3xl border-2 border-white/10 text-center hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <item.icon className="w-16 h-16 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
                <div className={`text-6xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.stat}
                </div>
                <p className="text-lg text-foreground/90 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">See what our clients say about their strategy calls</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,212,59,0.3)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to know</p>
          </div>

          <Card className="glass-card p-8 border-2 border-white/10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border border-white/10 hover:border-primary/30 transition-all"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Card className="glass-card p-12 lg:p-16 border-2 border-white/20 text-center shadow-[0_12px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Automate
              <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses already saving 20–80 hours per month with smart automation.
            </p>
            <Button
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary via-yellow-500 to-orange-500 hover:shadow-[0_0_60px_rgba(255,212,59,0.6)] transition-all duration-300 transform hover:scale-105 text-xl font-bold py-8 px-12"
            >
              Book Your Free Strategy Call
              <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              🔒 Your information is 100% secure • No spam, ever
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookCall;
