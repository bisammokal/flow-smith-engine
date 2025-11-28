import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

const Reviews = () => {
  const navigate = useNavigate();

  const testimonials = [
    // From home page
    {
      name: "Sarah Johnson",
      role: "Marketing Agency Owner",
      text: "Our entire onboarding is now 100% automated. Saved 15 hours/week easily! The team at Nexotica understood our needs perfectly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Real Estate Broker",
      text: "The lead qualification system alone doubled our conversion rate. We never miss a hot lead anymore. Best investment we've made.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Healthcare Practice Manager",
      text: "Patient appointment automation has transformed our practice. Zero no-shows, perfect record-keeping, and our staff loves it.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    },
    {
      name: "David Park",
      role: "SaaS Founder",
      text: "The AI follow-up system is incredible. It knows exactly when to reach out. Our response rates went up 3x in the first month.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    // From Book Call page
    {
      name: "Sarah Mitchell",
      role: "Agency Owner",
      text: "We built a complete AI sales funnel with Nexotica in under 3 weeks. Our close rate increased by 45% and we're scaling faster than ever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "James Rodriguez",
      role: "SaaS Co-Founder",
      text: "The automation workflows saved us 20+ hours weekly. Our team can finally focus on growth instead of repetitive tasks.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "E-commerce Director",
      text: "Customer engagement went through the roof. The AI handles support tickets, follow-ups, and upsells automatically. Revenue up 60%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    // New testimonials
    {
      name: "Sarah J.",
      role: "Marketing Agency Owner",
      text: "Nexotica automated our entire client onboarding. We're saving around 18 hours/week and deliver projects faster. Clients are impressed with how smooth everything feels.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
    {
      name: "Michael C.",
      role: "Real Estate Broker",
      text: "The lead qualification automation doubled our conversion rate within 3 weeks. I no longer waste time chasing cold leads. This was honestly a game-changer.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    },
    {
      name: "David P.",
      role: "SaaS Founder",
      text: "Our follow-up workflow improved response rates by 3x in the first month. It messages leads exactly at the right time without me doing anything.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
    {
      name: "Dr. Emily R.",
      role: "Healthcare Practice Manager",
      text: "Appointment automation eliminated no-shows completely. Our staff workload went down drastically. Patients love the reminders.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    },
    {
      name: "Lena M.",
      role: "Executive Coach",
      text: "We automated our client enrollment and saved at least 25 hours weekly. I spend my time coaching instead of texting prospects. Worth every dollar.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    },
    {
      name: "Tommy K.",
      role: "Agency Owner",
      text: "I added Nexotica's outreach workflow and started booking 7–10 meetings weekly on autopilot. My agency revenue grew 3x in 60 days.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop",
    },
    {
      name: "Diana P.",
      role: "E-Commerce Store Founder",
      text: "Order updates, abandoned cart follow-ups, and email flows are now fully automated. Our repeat customer rate increased massively.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
    {
      name: "Ahmed F.",
      role: "Business Consultant",
      text: "The CRM automation keeps everything clean — no missed tasks anymore. I literally close clients faster because nothing slips.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop",
    },
    {
      name: "Jason & Mia",
      role: "Real Estate Team",
      text: "We reduced manual admin work by over 70%. Notifications, reminders, follow-up — all automated. My team finally focuses on closing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop",
    },
    {
      name: "Robert H.",
      role: "Sales Manager",
      text: "Our sales reps save around 20 hours weekly. Automated lead routing and follow-ups increased pipeline velocity significantly.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    },
    {
      name: "Ayesha Q.",
      role: "Legal Firm Partner",
      text: "Document requests, case reminders, and client updates are automatic now. Our clients notice the professionalism instantly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    },
    {
      name: "Jake M.",
      role: "Online Fitness Coach",
      text: "Onboarding automation alone freed up so much time. My clients get a premium experience without me doing any of the repetitive work.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop",
    },
    {
      name: "Hassan A.",
      role: "Local Services Business Owner",
      text: "I didn't even know automation could help my type of business. But Nexotica cut my manual work in half and increased bookings.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop",
    },
    {
      name: "Maya R.",
      role: "Course Creator",
      text: "My enrollment, reminders, and follow-ups run automatically. I scaled to 40+ paid students without hiring anyone.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-40 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl opacity-25" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Real Stories. Real Results.{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Zero Extra Effort.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Businesses using our automation systems are saving thousands of hours and unlocking predictable growth — completely hands-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  className="glass-card p-8 border border-primary/10 hover:border-primary/30 h-full"
                >
                  <motion.div 
                    className="relative h-full flex flex-col"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 50px rgba(230, 184, 58, 0.25)",
                    }}
                    transition={{ duration: motionConfig.duration.normal }}
                  >
                    {/* Quote Icon */}
                    <Quote className="absolute -top-2 -left-2 w-10 h-10 text-primary/20" />
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Stars */}
                      <motion.div 
                        className="flex gap-1 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 + i * 0.05 }}
                          >
                            <Star className="w-5 h-5 fill-primary text-primary" />
                          </motion.div>
                        ))}
                        {testimonial.rating % 1 !== 0 && (
                          <Star className="w-5 h-5 fill-primary/50 text-primary" />
                        )}
                      </motion.div>

                      {/* Testimonial Text */}
                      <p className="text-foreground/90 leading-relaxed mb-6 text-lg flex-1">
                        "{testimonial.text}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Avatar className="w-12 h-12 border-2 border-primary/30">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                            <AvatarFallback className="text-lg font-semibold bg-gradient-luxury">
                              {testimonial.name.split(' ')[0][0]}
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-hero p-6 sm:p-8 md:p-12 max-w-3xl mx-auto text-center backdrop-blur-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Create Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Own Success Story?
              </span>
            </h2>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base"
              onClick={() => navigate("/book-call")}
            >
              <span className="inline-flex items-center justify-center gap-2">
                Book a Free Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
