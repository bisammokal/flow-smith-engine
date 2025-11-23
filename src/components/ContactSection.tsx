import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, scaleIn, motionConfig } from "@/lib/motion";

export const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={containerRef} id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Premium Background with animated waves */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          <div className="space-y-8">
            {/* Badge */}
            <motion.div 
              variants={scaleIn}
              className="inline-flex items-center gap-2 px-5 py-2 glass-card border border-primary/30 cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(230, 184, 58, 0.3)",
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">Limited Spots Available</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <motion.span 
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Ready to Automate Your Business?
              </motion.span>
            </motion.h2>
            
            {/* Subtext */}
            <motion.p 
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Get a full breakdown of how AI can save you{" "}
              <span className="text-primary font-semibold">35–45 hours per week</span>{" "}
              and increase conversion rates instantly.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="pt-6 flex justify-center"
              variants={scaleIn}
            >
              <Link to="/book-call">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 50px rgba(230, 184, 58, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: motionConfig.duration.fast }}
                >
                  <Button 
                    size="lg" 
                    className="text-xl px-12 py-8 bg-gradient-luxury font-bold relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span className="relative z-10">Start Your Strategy Call</span>
                    <ArrowRight className="ml-3 w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Line */}
            <motion.p 
              variants={fadeUp}
              className="text-sm text-muted-foreground pt-4"
            >
              🔒 No commitment required • Free consultation • Results guaranteed
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
