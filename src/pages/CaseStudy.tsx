import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, DollarSign, AlertCircle, Target, Zap, TrendingUp, CheckCircle, ShieldCheck, BarChart3, Activity, Brain, Mail, Clock, Search, Database, Calendar, User, Star, MapPin, Filter, FileSpreadsheet, Send, RefreshCw, Quote } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fadeUp, fadeIn, scaleIn, staggerContainer, motionConfig } from "@/lib/motion";
import systemArchitecture from "@/assets/case-study-system-architecture.png";
import aiAssistantArchitecture from "@/assets/case-study-ai-assistant-architecture.png";
import caseStudyLeadEngineWorkflow from "@/assets/case-study-lead-engine-workflow.png";
import caseStudyLeadSystemArchitecture from "@/assets/case-study-lead-system-architecture.png";

// Counter animation hook
const useCountUp = (end: number, duration: number = 2, prefix: string = "", suffix: string = "") => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const inView = useInView(countRef, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return { count: `${prefix}${count}${suffix}`, countRef };
};

const CaseStudy = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24 pb-12">
        {/* Background Image with Overlay - User will provide image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
          {/* Placeholder for user's image */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background opacity-40" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={fadeIn} className="mb-4">
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 px-4 py-2 glass-card border border-primary/20"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(230, 184, 58, 0.3)" }}
              >
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Enterprise Case Study</span>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
            >
              How a Mid-Market SaaS Company Unlocked{" "}
              <span className="text-accent">
                $1.8M in Predictable Revenue Growth
              </span>{" "}
              by Deploying a CRO-Led Multi-Agent Revenue Operating System
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A transformation from revenue chaos to complete predictability in 90 days
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Client Snapshot */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-center mb-6">
              Client Snapshot
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Building2, label: "Industry", value: "B2B SaaS (Productivity & Workflow mgmt)", color: "primary" },
                { icon: Users, label: "Team Size", value: "85", color: "secondary" },
                { icon: DollarSign, label: "Monthly Revenue", value: "~$1.1M/month", color: "accent" },
                { icon: AlertCircle, label: "Primary Challenge", value: "Revenue stagnation due to siloed analytics, slow decision making & inconsistent go-to-market execution", color: "primary" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(230, 184, 58, 0.2)",
                    }}
                    className="glass-card p-4 border border-primary/10 hover:border-primary/30 transition-all duration-500"
                  >
                    <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 text-${item.color}`} />
                    </div>
                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-base text-foreground font-medium">
                      {item.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Business Problem */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-4">
              The Core Business Problem
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6">
              Before working with us, the company's revenue engine was fragmented and unstable:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                "CRO couldn't make fast decisions due to disconnected data",
                "Sales, marketing, and ops were operating on contradicting numbers",
                "No unified forecasting → revenue planning was unpredictable",
                "Pipeline leakages were invisible for weeks",
                "Attribution was guesswork — budgets were being burned",
                "Pricing decisions took weeks and were not backed by data",
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3 p-4 glass-card border border-destructive/20 hover:border-destructive/40 transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-base text-foreground">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-6 p-6 glass-card border-2 border-primary/30 text-center md:col-span-2"
            >
              <p className="text-xl md:text-2xl font-bold text-primary">
                They didn't need another dashboard.
                <br />
                <span className="text-foreground">They needed a central brain to run their revenue engine.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Was at Stake */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-6">
              What Was at Stake
            </motion.h2>

            <motion.div
              variants={scaleIn}
              className="glass-card p-6 md:p-8 border border-destructive/30 space-y-4"
            >
              {[
                "The business was on track to miss their annual revenue target by ~$3.2M due to blind spots in forecasting and funnel analytics.",
                "Leadership felt pressure from investors.",
                "Teams were burning out because they were reacting — not planning.",
                "Scaling was impossible without clarity, predictability, and alignment.",
              ].map((stake, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className="text-lg md:text-xl text-foreground leading-relaxed font-medium"
                >
                  {stake}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Process */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-center mb-6">
              Our Diagnostic Process
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              We conducted a complete revenue operations investigation:
            </motion.p>

            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Full-funnel audit across sales, marketing & retention",
                    description: "Revenue systems mapping (data → insights → actions loop)",
                  },
                  {
                    step: "02",
                    title: "Attribution and forecasting gap analysis",
                    description: "Pricing sensitivity review",
                  },
                  {
                    step: "03",
                    title: "Operational inefficiency mapping",
                    description: "Complete systems audit",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500 text-center"
                  >
                    <motion.div
                      className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary flex items-center justify-center backdrop-blur-sm"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(230, 184, 58, 0.3)",
                          "0 0 40px rgba(230, 184, 58, 0.5)",
                          "0 0 20px rgba(230, 184, 58, 0.3)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-xl font-bold text-primary">{step.step}</span>
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={scaleIn}
              className="mt-8 p-6 glass-card border-2 border-primary/30 text-center"
            >
              <p className="text-xl md:text-2xl font-bold">
                We uncovered{" "}
                <span className="text-primary">23 critical failure points</span>{" "}
                costing the company an estimated{" "}
                <span className="text-primary">$150k–$190k/month</span>{" "}
                in lost revenue opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Architecture */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-center mb-4">
              The Solution Architecture
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground text-center mb-3">
              Revenue OS
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-foreground text-center mb-8 max-w-4xl mx-auto">
              We built a CRO-led Multi-Agent Revenue Operating System™, powered by a coordinated team of specialized AI analysts working together.
              <br />
              <span className="text-primary font-semibold">The system operated like a full-time Revenue Ops team:</span>
            </motion.p>

            {/* System Architecture Visualization */}
            <motion.div
              variants={fadeUp}
              className="max-w-6xl mx-auto mb-8 relative rounded-2xl overflow-hidden"
              style={{ maxHeight: '300px' }}
            >
              <img 
                src={systemArchitecture} 
                alt="System Architecture Diagram" 
                className="w-full h-full object-cover"
                style={{ filter: 'blur(3px)', opacity: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            </motion.div>

            {/* Central CRO Agent */}
            <motion.div variants={scaleIn} className="mb-12">
              <div className="glass-card p-8 border-2 border-primary/40 text-center max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-luxury flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Central CRO Agent</h3>
                <p className="text-muted-foreground">Orchestrates all revenue decisions</p>
              </div>
            </motion.div>

            {/* Connected Agents */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Activity, title: "Pipeline Analyst", desc: "Diagnose funnel bottlenecks daily" },
                { icon: Target, title: "Attribution Specialist", desc: "Show exactly what channels drive revenue" },
                { icon: TrendingUp, title: "Forecasting Analyst", desc: "Running predictive modelling & scenario planning" },
                { icon: Zap, title: "RevOps Manager", desc: "Optimizing CRM, handoffs & territory planning" },
                { icon: DollarSign, title: "Pricing Strategist", desc: "Generating value-based pricing recommendations" },
                { icon: BarChart3, title: "Intelligence Analyst", desc: "Turning raw data into actionable insights" },
              ].map((agent, index) => {
                const Icon = agent.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(230, 184, 58, 0.2)",
                    }}
                    className="glass-card p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500"
                  >
                    <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{agent.title}</h4>
                    <p className="text-sm text-muted-foreground">{agent.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-16 p-8 md:p-12 glass-card border-2 border-primary/30 text-center space-y-6"
            >
              <p className="text-2xl md:text-3xl font-bold">
                Everything worked in parallel, as a single coordinated{" "}
                <span className="text-primary">"Revenue Brain"</span>{" "}
                that answered any question in seconds.
              </p>
              <div className="space-y-2 text-xl text-muted-foreground">
                <p>No more spreadsheets.</p>
                <p>No more dashboards nobody read.</p>
                <p>No more waiting on analysts.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Table */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              The Transformation
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before Column */}
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-destructive mb-2">Before</h3>
                  <div className="h-1 w-20 bg-destructive mx-auto rounded-full" />
                </div>
                {[
                  { label: "Forecasts", value: "3–5 days" },
                  { label: "Attribution clarity", value: "Unclear" },
                  { label: "Pipeline analysis", value: "Manual, weekly" },
                  { label: "Pricing decisions", value: "Intuition-based" },
                  { label: "Cross-functional alignment", value: "Fragmented" },
                  { label: "Revenue predictability", value: "±25% variance" },
                  { label: "CRO workload", value: "Overwhelmed" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="glass-card p-6 border border-destructive/20"
                  >
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-destructive">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* After Column */}
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">After</h3>
                  <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>
                {[
                  { label: "Forecasts", value: "60 seconds" },
                  { label: "Attribution clarity", value: "Complete visibility" },
                  { label: "Pipeline analysis", value: "Real-time, daily" },
                  { label: "Pricing decisions", value: "Data-driven" },
                  { label: "Cross-functional alignment", value: "Unified OS" },
                  { label: "Revenue predictability", value: "±3% variance" },
                  { label: "CRO workload", value: "70% reduced" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    className="glass-card p-6 border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-primary">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantified Results */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-center mb-8">
              Quantified Results
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { value: "$1.8M", label: "projected revenue unlocked", icon: DollarSign },
                { value: "37%", label: "pipeline conversion lift", icon: TrendingUp },
                { value: "18%", label: "sales velocity increase", icon: Zap },
                { value: "91%", label: "forecasting accuracy improvement", icon: Target },
                { value: "60–70%", label: "operational workload reduction", icon: Activity },
                { value: "$24K/mo", label: "analytics cost reduction", icon: BarChart3 },
              ].map((result, index) => {
                const Icon = result.icon;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.08,
                      rotateY: 5,
                      boxShadow: "0 30px 60px rgba(230, 184, 58, 0.3)",
                    }}
                    className="glass-card p-8 border border-primary/20 hover:border-primary/40 text-center transition-all duration-500 group"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-luxury flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-background" />
                    </motion.div>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-3">
                      {result.value}
                    </div>
                    <div className="text-base text-foreground font-medium uppercase tracking-wider">
                      {result.label}
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    />
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-12 p-8 glass-card border-2 border-primary/30 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$320k</div>
              <div className="text-xl text-muted-foreground">ARR uplift from pricing optimization</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-center mb-6">
              Client Feedback
            </motion.h2>

            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 md:p-10 border-2 border-primary/30 relative"
            >
              <div className="absolute top-6 left-6 text-6xl text-primary/20 font-serif leading-none">"</div>
              <div className="absolute bottom-6 right-6 text-6xl text-primary/20 font-serif leading-none">"</div>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-center font-light italic relative z-10">
                This was not automation — this became our entire revenue command center. Every strategic decision now comes with instant clarity and data we trust.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Divider */}
      <section className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </section>

      {/* ============================================== */}
      {/* CASE STUDY 2: AI PERSONAL ASSISTANT OS */}
      {/* ============================================== */}

      {/* Hero Section - Case Study 2 */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24 pb-12">
        {/* Background Image with Overlay - Placeholder for user's image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-background opacity-40" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeIn} className="mb-4">
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 px-4 py-2 glass-card border border-secondary/20"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(230, 184, 58, 0.3)" }}
              >
                <User className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Solo Founder Case Study</span>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
            >
              How an Early-Stage Founder Eliminated{" "}
              <span className="text-primary">
                50+ Hours of Manual Work Monthly
              </span>{" "}
              Using a Fully Autonomous AI Personal Assistant OS
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              From operational overwhelm to autonomous execution in 60 days
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Client Snapshot - Case Study 2 */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Client Snapshot
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: User, label: "Industry", value: "Solo Founder / Productivity", color: "secondary" },
                { icon: Users, label: "Team Size", value: "1", color: "primary" },
                { icon: DollarSign, label: "Monthly Revenue", value: "$12k/month", color: "accent" },
                { icon: AlertCircle, label: "Primary Challenge", value: "Overload of repetitive admin, emails, scheduling, and manual task switching", color: "secondary" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(230, 184, 58, 0.2)",
                    }}
                    className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-all duration-500"
                  >
                    <div className={`w-14 h-14 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 text-${item.color}`} />
                    </div>
                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-base text-foreground font-medium">
                      {item.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Business Problem - Case Study 2 */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Core Business Problem
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground mb-12">
              Before working with us, the founder's operations were overwhelmed with inefficiency:
            </motion.p>

            <div className="space-y-4">
              {[
                "The founder spent 3–5 hours daily switching between tasks",
                "Email responses were delayed by days",
                "Calendar clashes and missed follow-ups were becoming common",
                "Research tasks took too long",
                "No centralized system for tasks, reminders, or project updates",
                "Mental load was high — everything depended on memory",
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-5 glass-card border border-destructive/20 hover:border-destructive/40 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-lg text-foreground">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-12 p-8 glass-card border-2 border-primary/30 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">
                The founder didn't need another task manager.
                <br />
                <span className="text-foreground">He needed an AI employee that works autonomously.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Was at Stake - Case Study 2 */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              What Was at Stake
            </motion.h2>

            <motion.div
              variants={scaleIn}
              className="glass-card p-8 md:p-12 border border-destructive/30 space-y-6"
            >
              {[
                "If nothing changed, the founder would hit an early burnout ceiling.",
                "Growth was slowing because too much time was spent on coordination, not execution.",
                "Missed opportunities and slow turnaround times were costing revenue.",
                "Scaling was impossible without leverage.",
              ].map((stake, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className="text-xl md:text-2xl text-foreground leading-relaxed font-medium"
                >
                  {stake}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Process - Case Study 2 */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              Our Diagnostic Process
            </motion.h2>

            <motion.p variants={fadeUp} className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              We conducted a complete personal operations audit:
            </motion.p>

            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Task workflow mapping",
                    description: "Email + communication load analysis",
                  },
                  {
                    step: "02",
                    title: "Daily routine breakdown",
                    description: "Cognitive load analysis",
                  },
                  {
                    step: "03",
                    title: "Research bottleneck mapping",
                    description: "Complete operations audit",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 text-center"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary flex items-center justify-center backdrop-blur-sm"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(230, 184, 58, 0.3)",
                          "0 0 40px rgba(230, 184, 58, 0.5)",
                          "0 0 20px rgba(230, 184, 58, 0.3)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={scaleIn}
              className="mt-16 p-8 glass-card border-2 border-primary/30 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold">
                We identified{" "}
                <span className="text-primary">19 major operational gaps</span>{" "}
                costing him{" "}
                <span className="text-primary">45–55 hours/month</span>{" "}
                of lost productivity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Architecture - Case Study 2 */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
              The Solution Architecture
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground text-center mb-4">
              AI Personal Assistant OS
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg text-foreground text-center mb-16 max-w-4xl mx-auto">
              We built a fully autonomous AI Personal Assistant OS, acting like a digital employee.
              <br />
              <span className="text-primary font-semibold">The system included:</span>
            </motion.p>

            {/* System Architecture Visualization */}
            <motion.div
              variants={fadeUp}
              className="max-w-6xl mx-auto mb-16 relative rounded-2xl overflow-hidden"
              style={{ maxHeight: '400px' }}
            >
              <img 
                src={aiAssistantArchitecture} 
                alt="AI Assistant System Architecture Diagram" 
                className="w-full h-full object-cover"
                style={{ filter: 'blur(3px)', opacity: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            </motion.div>

            {/* Central AI Core */}
            <motion.div variants={scaleIn} className="mb-12">
              <div className="glass-card p-8 border-2 border-primary/40 text-center max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-luxury flex items-center justify-center">
                  <Brain className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">AI Personal Assistant Core</h3>
                <p className="text-muted-foreground">Orchestrates all tasks and decisions</p>
              </div>
            </motion.div>

            {/* Connected Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title: "AI Task Manager", desc: "Autonomous task execution & updates" },
                { icon: Mail, title: "AI Email Intelligence Engine", desc: "Smart email processing & responses" },
                { icon: Brain, title: "Query Understanding Layer", desc: "Natural language command processing" },
                { icon: Clock, title: "Smart Reminder + Follow-up Engine", desc: "Proactive notifications & follow-ups" },
                { icon: Database, title: "Personal Knowledge Memory System", desc: "Contextual information retention" },
                { icon: Search, title: "Autonomous Research Agent", desc: "Intelligent information gathering" },
                { icon: Calendar, title: "Calendar Optimization Module", desc: "Automated scheduling & conflict resolution" },
              ].map((agent, index) => {
                const Icon = agent.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(230, 184, 58, 0.2)",
                    }}
                    className="glass-card p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500"
                  >
                    <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{agent.title}</h4>
                    <p className="text-sm text-muted-foreground">{agent.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-16 p-8 md:p-12 glass-card border-2 border-primary/30 text-center space-y-6"
            >
              <p className="text-2xl md:text-3xl font-bold">
                Everything worked in parallel — an AI assistant that{" "}
                <span className="text-primary">understands, executes, updates, and reminds</span>{" "}
                without being asked twice.
              </p>
              <div className="space-y-2 text-xl text-muted-foreground">
                <p>No more mental overhead.</p>
                <p>No more forgotten tasks.</p>
                <p>No more admin load.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Table - Case Study 2 */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              The Transformation
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before Column */}
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-destructive mb-2">Before</h3>
                  <div className="h-1 w-20 bg-destructive mx-auto rounded-full" />
                </div>
                {[
                  { label: "Task switching time", value: "3–5 hours daily" },
                  { label: "Email response time", value: "Delayed by days" },
                  { label: "Follow-ups", value: "Manual, often missed" },
                  { label: "Research time", value: "Hours per task" },
                  { label: "System centralization", value: "None" },
                  { label: "Mental overhead", value: "Extremely high" },
                  { label: "Operational efficiency", value: "Low" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="glass-card p-6 border border-destructive/20"
                  >
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-destructive">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* After Column */}
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">After</h3>
                  <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>
                {[
                  { label: "Task switching time", value: "Automated" },
                  { label: "Email response time", value: "Near-instant" },
                  { label: "Follow-ups", value: "Fully automated" },
                  { label: "Research time", value: "Minutes per task" },
                  { label: "System centralization", value: "Complete" },
                  { label: "Mental overhead", value: "Minimal" },
                  { label: "Operational efficiency", value: "High" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    className="glass-card p-6 border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-primary">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantified Results - Case Study 2 */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              Quantified Results
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { value: "52+", label: "hours saved monthly", icon: Clock },
                { value: "38%", label: "faster task execution", icon: Zap },
                { value: "Near-instant", label: "follow-ups", icon: CheckCircle },
                { value: "70%", label: "email load reduction", icon: Mail },
                { value: "100%", label: "focus hours regained", icon: Target },
                { value: "Dramatic", label: "operational friction drop", icon: TrendingUp },
              ].map((result, index) => {
                const Icon = result.icon;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.08,
                      rotateY: 5,
                      boxShadow: "0 30px 60px rgba(230, 184, 58, 0.3)",
                    }}
                    className="glass-card p-8 border border-primary/20 hover:border-primary/40 text-center transition-all duration-500 group"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-luxury flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-background" />
                    </motion.div>
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-3">
                      {result.value}
                    </div>
                    <div className="text-base text-foreground font-medium uppercase tracking-wider">
                      {result.label}
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Feedback - Case Study 2 */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Client Feedback
            </motion.h2>

            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-12 md:p-16 border-2 border-primary/30 relative"
            >
              <div className="absolute top-8 left-8 text-8xl text-primary/20 font-serif leading-none">"</div>
              <div className="absolute bottom-8 right-8 text-8xl text-primary/20 font-serif leading-none">"</div>
              
              <p className="text-2xl md:text-3xl text-foreground leading-relaxed text-center font-light italic relative z-10">
                I feel like I finally hired my first employee — except this one works 24/7, never forgets anything, and never gets tired.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY 3 - AUTOMATED LEAD ENGINE */}
      
      {/* Hero Section - Case Study 3 */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${caseStudyLeadEngineWorkflow})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
            >
              How an{" "}
              <span className="text-primary">
                Automated Lead Engine
              </span>
              {" "}Replaced 100% Manual Prospecting Using AI-Driven Yelp & Trustpilot Scraping + Autonomous Outreach
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              From scattered lead searches to a fully hands-off acquisition system running end-to-end on autopilot.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Client Snapshot - Case Study 3 */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Client Snapshot
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, label: "Industry", value: "B2B Digital Marketing / Lead Gen", color: "primary" },
                { icon: User, label: "Team Size", value: "Solo Founder", color: "secondary" },
                { icon: DollarSign, label: "Monthly Revenue", value: "$12k/month", color: "accent" },
                { icon: AlertCircle, label: "Primary Challenge", value: "No scalable method to find, qualify, and contact leads consistently", color: "primary" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(230, 184, 58, 0.2)",
                    }}
                    className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-all duration-500"
                  >
                    <div className={`w-14 h-14 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 text-${item.color}`} />
                    </div>
                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-base text-foreground font-medium">
                      {item.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Business Problem - Case Study 3 */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Core Business Problem
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground mb-12">
              Before implementing the automation, lead acquisition was slow, manual, and inconsistent:
            </motion.p>

            <div className="space-y-4">
              {[
                "Manual searching on Yelp every day",
                "No way to filter by sub-locations precisely",
                "Trustpilot credibility checks done manually",
                "Lead data scattered across tabs & spreadsheets",
                "Outreach emails written from scratch for each lead",
                "Hours wasted switching tools",
                "Zero automation — everything depended on human effort",
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-5 glass-card border border-destructive/20 hover:border-destructive/40 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-lg text-foreground">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-12 p-8 glass-card border-2 border-primary/30 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">
                The founder didn't need a "lead list."
                <br />
                <span className="text-foreground">He needed an Autonomous Lead Pipeline that discovers, qualifies, and contacts leads on its own.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Was at Stake - Case Study 3 */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              What Was at Stake
            </motion.h2>

            <motion.div
              variants={scaleIn}
              className="glass-card p-8 md:p-12 border border-destructive/30 space-y-6"
            >
              {[
                "Lead volume would cap due to manual bottlenecks",
                "Opportunities lost to competitors with faster outreach",
                "Founder stuck doing research instead of selling",
                "Revenue growth plateau due to inconsistent pipeline",
                "High mental load caused by repetitive tasks",
                "Scaling was impossible without automation leverage",
              ].map((stake, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className="text-xl md:text-2xl text-foreground leading-relaxed font-medium"
                >
                  {stake}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Process - Case Study 3 */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              Our Diagnostic Process
            </motion.h2>

            <motion.p variants={fadeUp} className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              We performed a deep operational audit of the client's lead workflow:
            </motion.p>

            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Lead Source Mapping",
                    description: "Identified all platforms where ideal clients appear (Yelp, Trustpilot, industry directories)",
                  },
                  {
                    step: "02",
                    title: "Workflow Breakdown",
                    description: "Mapped every step: location discovery → scraping → validation → data entry → outreach",
                  },
                  {
                    step: "03",
                    title: "Automation Feasibility Scan",
                    description: "Tracked inefficiencies, friction points, and repetitive tasks",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 text-center"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary flex items-center justify-center backdrop-blur-sm"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(230, 184, 58, 0.3)",
                          "0 0 40px rgba(230, 184, 58, 0.5)",
                          "0 0 20px rgba(230, 184, 58, 0.3)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={scaleIn}
              className="mt-16 p-8 glass-card border-2 border-primary/30 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold">
                We identified{" "}
                <span className="text-primary">19 major workflow gaps</span>{" "}
                costing{" "}
                <span className="text-primary">45–55 hours/month</span>{" "}
                in manual research, data cleaning, and messaging.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Architecture - Case Study 3 */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
              The Solution Architecture
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground text-center mb-4">
              Autonomous Lead Engine
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg text-foreground text-center mb-16 max-w-4xl mx-auto">
              We built an Autonomous Lead Engine that discovers, qualifies, and contacts leads on autopilot.
              <br />
              <span className="text-primary font-semibold">The system included:</span>
            </motion.p>

            {/* System Architecture Visualization */}
            <motion.div
              variants={fadeUp}
              className="max-w-6xl mx-auto mb-16 relative rounded-2xl overflow-hidden"
              style={{ maxHeight: '400px' }}
            >
              <img 
                src={caseStudyLeadSystemArchitecture} 
                alt="Lead Engine System Architecture Diagram" 
                className="w-full h-full object-cover"
                style={{ filter: 'blur(3px)', opacity: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            </motion.div>

            {/* Central Engine Core */}
            <motion.div variants={scaleIn} className="mb-12">
              <div className="glass-card p-8 border-2 border-primary/40 text-center max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-luxury flex items-center justify-center">
                  <Database className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Autonomous Lead Engine Core</h3>
                <p className="text-muted-foreground">Orchestrates all lead discovery and outreach</p>
              </div>
            </motion.div>

            {/* Connected Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Database, title: "Yelp Data Harvester", desc: "Automated platform scraping" },
                { icon: Star, title: "Trustpilot Review Intelligence", desc: "Credibility verification" },
                { icon: MapPin, title: "Sub-Location AI Analyzer", desc: "Geographic segmentation" },
                { icon: Filter, title: "Data Cleaning & Deduplication", desc: "Quality assurance layer" },
                { icon: FileSpreadsheet, title: "Google Sheets Sync", desc: "Real-time data updates" },
                { icon: Mail, title: "AI Email Writer", desc: "Personalized outreach generation" },
                { icon: Send, title: "Automated Gmail Sender", desc: "Batch email automation" },
                { icon: RefreshCw, title: "Continuous Lead Loop", desc: "Ongoing pipeline management" },
              ].map((module, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <module.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="text-base font-bold mb-1">{module.title}</h4>
                  <p className="text-xs text-muted-foreground">{module.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-8 p-6 glass-card border-2 border-primary/30 text-center"
            >
              <p className="text-base text-foreground">
                Everything worked in parallel as a single coordinated{" "}
                <span className="text-primary font-bold">"Lead Acquisition Brain"</span>
                {" "}to generate, qualify, and contact leads automatically — eliminating spreadsheets, manual research, and waiting on data entry.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transformation - Case Study 3 */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-center mb-8">
              The Transformation
            </motion.h2>

            <motion.div variants={scaleIn} className="glass-card p-6 md:p-8 overflow-x-auto border border-primary/20">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before Column */}
                <div>
                  <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" />
                    Before
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Manual Yelp searches daily",
                      "No way to segment sub-locations",
                      "Trustpilot credibility checks done manually",
                      "Hours spent copy-pasting into spreadsheets",
                      "Outreach emails written from scratch",
                      "Outreach sent 1-by-1",
                      "15–20 hours/week wasted",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 glass-card border border-destructive/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After Column */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    After
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Fully automated Yelp scraping via BrightData",
                      "AI generates location clusters automatically",
                      "Automated Trustpilot review extraction",
                      "Structured Google Sheets sync",
                      "AI generates personalized email copy",
                      "Gmail auto-sends to unique leads",
                      "System runs entirely on autopilot",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 glass-card border border-primary/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <p className="text-sm text-foreground font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quantified Results - Case Study 3 */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              Quantified Results
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { value: "120+", label: "Leads generated monthly automatically" },
                { value: "100%", label: "Elimination of manual scraping work" },
                { value: "70–80%", label: "Time savings vs. manual research" },
                { value: "2×", label: "Higher email send volume due to automation" },
                { value: "Verified", label: "Accurate + verified leads through dual-source validation" },
                { value: "Daily", label: "Consistent daily pipeline without human effort" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="glass-card p-4 border border-primary/20 hover:border-primary/40 transition-all duration-500 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-accent">
                    {metric.value}
                  </div>
                  <p className="text-xs text-foreground font-medium leading-snug">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Feedback - Case Study 3 */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Client Feedback
            </motion.h2>

            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-12 md:p-16 border-2 border-primary/30 relative"
            >
              <div className="absolute top-8 left-8 text-8xl text-primary/20 font-serif leading-none">"</div>
              <div className="absolute bottom-8 right-8 text-8xl text-primary/20 font-serif leading-none">"</div>
              
              <p className="text-2xl md:text-3xl text-foreground leading-relaxed text-center font-light italic relative z-10">
                Everything I used to do manually — finding leads, checking their ratings, cleaning data, and writing outreach — now happens automatically. It feels like I hired a full-time lead researcher and email marketer combined.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
