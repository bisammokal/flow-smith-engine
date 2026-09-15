import { Award, Target, Zap } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, staggerContainer, motionConfig } from "@/lib/motion";

export const AboutPreviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const stats = [
    {
      icon: Zap,
      value: 25,
      label: "Systems Delivered",
    },
    {
      icon: Target,
      value: 6,
      label: "Industries Served",
    },
    {
      icon: Award,
      value: 100,
      label: "Automated Processes",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Content */}
          <motion.div 
            className="glass-card p-8 md:p-12 border border-primary/10 hover:border-primary/20"
            variants={fadeUp}
            whileHover={{
              boxShadow: "0 20px 50px rgba(230, 184, 58, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-center space-y-6 mb-12"
              variants={fadeUp}
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: motionConfig.easing.luxury }}
              >
                Who We Are
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: motionConfig.easing.luxury }}
              >
                We design <span className="text-primary font-semibold">advanced AI automation systems</span> that remove operational bottlenecks and accelerate growth. Our team builds scalable workflows, omnichannel assistants, CRM systems, and end-to-end automation infrastructure — tailored for high-ticket businesses.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="glass-card p-6 text-center border border-primary/10 hover:border-primary/30"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(230, 184, 58, 0.25)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.div 
                      className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6, ease: motionConfig.easing.elegant }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
                      {stat.value}+
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
