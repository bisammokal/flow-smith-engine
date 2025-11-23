import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const caseStudies = [
  {
    id: 1,
    tag: "B2B SaaS",
    title: "CRO-Led Multi-Agent Revenue Operating System",
    before: ["Revenue forecasts took 3–5 days", "Teams working on contradicting numbers", "Pipeline leakages invisible for weeks"],
    after: ["60-second forecasts", "Unified revenue brain", "$1.8M predictable growth unlocked"],
    color: "from-primary/20 to-accent/20",
  },
  {
    id: 2,
    tag: "Solo Founder",
    title: "Fully Autonomous AI Personal Assistant OS",
    before: ["50+ hours monthly on manual tasks", "Delayed email responses", "High mental load from task switching"],
    after: ["52+ hours saved monthly", "70% email load reduction", "Autonomous operations 24/7"],
    color: "from-secondary/20 to-primary/20",
  },
  {
    id: 3,
    tag: "B2B Lead Gen",
    title: "Automated Lead Engine with AI-Driven Prospecting",
    before: ["Manual Yelp & Trustpilot searches", "15–20 hours/week on lead research", "Inconsistent pipeline"],
    after: ["120+ leads monthly on autopilot", "100% elimination of manual work", "2× higher email send volume"],
    color: "from-accent/20 to-secondary/20",
  },
];

export default function CaseStudyIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Real transformations. Measurable results. Zero manual work.
            </p>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/case-study/${study.id}`}>
                  <div className="glass-card p-8 h-full border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Tag */}
                      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/20 border border-accent/30">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">
                          {study.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-6 leading-tight">
                        {study.title}
                      </h3>

                      {/* Before/After Section */}
                      <div className="space-y-6 mb-8">
                        {/* Before */}
                        <div>
                          <div className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">
                            Before
                          </div>
                          <ul className="space-y-2">
                            {study.before.slice(0, 2).map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-red-400 mt-0.5">✕</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* After */}
                        <div>
                          <div className="text-xs font-bold text-green-400 mb-2 uppercase tracking-wider">
                            After
                          </div>
                          <ul className="space-y-2">
                            {study.after.slice(0, 2).map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-green-400 mt-0.5">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="glass-card p-12 max-w-3xl mx-auto border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                See how AI automation can transform your business operations
              </p>
              <Link
                to="/book-call"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-primary text-foreground font-semibold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
