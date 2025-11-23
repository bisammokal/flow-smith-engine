import { Zap, TrendingUp, Bot } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, staggerContainer, motionConfig } from "@/lib/motion";

export const ScalingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const features = [
    {
      icon: Zap,
      title: "Automated lead capture + follow-ups",
      description: "Never miss a lead. AI captures, qualifies, and nurtures prospects 24/7 while you sleep.",
      metric: "80% reduction in manual work",
    },
    {
      icon: TrendingUp,
      title: "CRM + pipeline optimization",
      description: "Smart automation keeps your pipeline flowing and deals moving forward automatically.",
      metric: "Closed 2× more deals",
    },
    {
      icon: Bot,
      title: "AI assistants that handle conversations",
      description: "Intelligent chatbots and voice AI that understand context and close deals.",
      metric: "Organic leads +30%",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How Clients <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Scale Faster With AI</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative"
              >
                <motion.div 
                  className="glass-card p-8 h-full border border-primary/10 hover:border-primary/30"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 2,
                    rotateX: 1,
                    boxShadow: "0 20px 50px rgba(230, 184, 58, 0.3)",
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon with 3D effect and micro animation */}
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-soft"
                      whileHover={{ 
                        rotateY: 180,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6, ease: motionConfig.easing.elegant }}
                    >
                      <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-center mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Metric badge */}
                    <motion.div 
                      className="text-center mt-6 pt-4 border-t border-primary/20"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="text-primary font-bold text-lg">
                        {feature.metric}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
