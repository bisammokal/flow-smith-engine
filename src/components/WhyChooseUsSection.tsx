import { Shield, Cog, Building2, HeadphonesIcon } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";

export const WhyChooseUsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const features = [
    {
      icon: Cog,
      title: "Built for scale — no band-aid automations",
      description: "Enterprise-grade architecture designed to grow with your business, not break at scale.",
      direction: "left",
    },
    {
      icon: Shield,
      title: "Real engineering + AI architecture",
      description: "We don't just connect tools — we build intelligent systems that think and adapt.",
      direction: "right",
    },
    {
      icon: Building2,
      title: "Proven across multiple industries",
      description: "Healthcare, real estate, SaaS, dental, B2B — we've automated them all successfully.",
      direction: "left",
    },
    {
      icon: HeadphonesIcon,
      title: "Enterprise-grade reliability and support",
      description: "99.9% uptime with dedicated support that actually understands your business.",
      direction: "right",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with slow parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: inView ? 0 : 50 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl opacity-25" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">High-Growth Businesses Choose Us</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const variant = feature.direction === "left" ? slideInLeft : slideInRight;
            
            return (
              <motion.div
                key={index}
                variants={variant}
                className="group glass-card p-8 border border-accent/10 hover:border-accent/30"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(230, 184, 58, 0.2)",
                }}
                transition={{ duration: 0.25 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10 flex items-start gap-5">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0"
                    whileHover={{ 
                      rotate: [0, -6, 6, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
