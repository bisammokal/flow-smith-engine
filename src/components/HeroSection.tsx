import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, fadeIn, scaleIn, staggerContainer, motionConfig } from "@/lib/motion";

// Counter animation hook
const useCountUp = (end: number, duration: number = 2) => {
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

  return { count, countRef };
};

export const HeroSection = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <iframe 
          src='https://my.spline.design/orb-riUGpmZH4FJmMSkxzOGBreWK/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {/* Main Content */}
          <motion.div variants={fadeIn} className="text-center space-y-8 mb-16">
            {/* Premium Badge */}
            <motion.div 
              variants={scaleIn}
              className="inline-flex items-center gap-3 px-6 py-3 glass-card border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(230, 184, 58, 0.3)",
                transition: { duration: motionConfig.duration.fast }
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">Enterprise-Grade AI Automation</span>
            </motion.div>
            
            {/* Hero Headline */}
            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: motionConfig.easing.luxury }}
              >
                Build a{" "}
              </motion.span>
              <span className="relative inline-block">
                <motion.span 
                  className="bg-gradient-luxury bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: motionConfig.easing.luxury }}
                >
                  24/7 AI-Powered
                </motion.span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-luxury opacity-40 blur-sm"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: motionConfig.easing.luxury }}
                />
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: motionConfig.easing.luxury }}
              >
                Sales Engine That Scales Without You
              </motion.span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
            >
              We automate your lead generation, funnels, follow-ups, and operations using{" "}
              <span className="text-primary font-semibold">enterprise-grade AI systems</span>{" "}
              — helping you grow faster with fewer human resources.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link to="/book-call" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(230, 184, 58, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: motionConfig.duration.fast }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg px-10 py-7 bg-gradient-luxury hover:shadow-glow transition-all duration-500 font-semibold relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10">Book Your Automation Audit</span>
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(230, 184, 58, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: motionConfig.duration.fast }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-10 py-7 glass-card border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-500 font-semibold"
                >
                  See Live Demo
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: "70–80%", label: "Process Automation", gradient: "from-primary via-accent to-primary", border: "border-primary/10" },
              { value: "3–5x", label: "Faster Response Time", gradient: "from-secondary to-primary", border: "border-secondary/10" },
              { value: "10x", label: "Sales Pipeline Expansion", gradient: "from-accent to-primary", border: "border-accent/10" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(230, 184, 58, 0.2)",
                }}
                transition={{ duration: motionConfig.duration.normal }}
                className={`glass-card p-6 text-center border ${stat.border} group cursor-pointer`}
              >
                <motion.div 
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};