import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const navigate = useNavigate();

  const testimonials = [
    // From home page
    {
      name: "Sarah Johnson",
      role: "Marketing Agency Owner",
      text: "Our entire onboarding is now 100% automated. Saved 15 hours/week easily! The team at Fluxyn understood our needs perfectly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Real Estate Broker",
      text: "The lead qualification system alone doubled our conversion rate. We never miss a hot lead anymore. Best investment we've made.",
      rating: 5,
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Healthcare Practice Manager",
      text: "Patient appointment automation has transformed our practice. Zero no-shows, perfect record-keeping, and our staff loves it.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "SaaS Founder",
      text: "The AI follow-up system is incredible. It knows exactly when to reach out. Our response rates went up 3x in the first month.",
      rating: 5,
    },
    // From Book Call page
    {
      name: "Sarah Mitchell",
      role: "Agency Owner",
      text: "We built a complete AI sales funnel with Fluxyn in under 3 weeks. Our close rate increased by 45% and we're scaling faster than ever.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      role: "SaaS Co-Founder",
      text: "The automation workflows saved us 20+ hours weekly. Our team can finally focus on growth instead of repetitive tasks.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "E-commerce Director",
      text: "Customer engagement went through the roof. The AI handles support tickets, follow-ups, and upsells automatically. Revenue up 60%.",
      rating: 5,
    },
    // New testimonials
    {
      name: "Sarah J.",
      role: "Marketing Agency Owner",
      text: "Fluxyn automated our entire client onboarding. We're saving around 18 hours/week and deliver projects faster. Clients are impressed with how smooth everything feels.",
      rating: 5,
    },
    {
      name: "Michael C.",
      role: "Real Estate Broker",
      text: "The lead qualification automation doubled our conversion rate within 3 weeks. I no longer waste time chasing cold leads. This was honestly a game-changer.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "SaaS Founder",
      text: "Our follow-up workflow improved response rates by 3x in the first month. It messages leads exactly at the right time without me doing anything.",
      rating: 5,
    },
    {
      name: "Dr. Emily R.",
      role: "Healthcare Practice Manager",
      text: "Appointment automation eliminated no-shows completely. Our staff workload went down drastically. Patients love the reminders.",
      rating: 4.9,
    },
    {
      name: "Lena M.",
      role: "Executive Coach",
      text: "We automated our client enrollment and saved at least 25 hours weekly. I spend my time coaching instead of texting prospects. Worth every dollar.",
      rating: 5,
    },
    {
      name: "Tommy K.",
      role: "Agency Owner",
      text: "I added Fluxyn's outreach workflow and started booking 7–10 meetings weekly on autopilot. My agency revenue grew 3x in 60 days.",
      rating: 5,
    },
    {
      name: "Diana P.",
      role: "E-Commerce Store Founder",
      text: "Order updates, abandoned cart follow-ups, and email flows are now fully automated. Our repeat customer rate increased massively.",
      rating: 4.9,
    },
    {
      name: "Ahmed F.",
      role: "Business Consultant",
      text: "The CRM automation keeps everything clean — no missed tasks anymore. I literally close clients faster because nothing slips.",
      rating: 5,
    },
    {
      name: "Jason & Mia",
      role: "Real Estate Team",
      text: "We reduced manual admin work by over 70%. Notifications, reminders, follow-up — all automated. My team finally focuses on closing.",
      rating: 5,
    },
    {
      name: "Robert H.",
      role: "Sales Manager",
      text: "Our sales reps save around 20 hours weekly. Automated lead routing and follow-ups increased pipeline velocity significantly.",
      rating: 4.9,
    },
    {
      name: "Ayesha Q.",
      role: "Legal Firm Partner",
      text: "Document requests, case reminders, and client updates are automatic now. Our clients notice the professionalism instantly.",
      rating: 5,
    },
    {
      name: "Jake M.",
      role: "Online Fitness Coach",
      text: "Onboarding automation alone freed up so much time. My clients get a premium experience without me doing any of the repetitive work.",
      rating: 5,
    },
    {
      name: "Hassan A.",
      role: "Local Services Business Owner",
      text: "I didn't even know automation could help my type of business. But Fluxyn cut my manual work in half and increased bookings.",
      rating: 4.9,
    },
    {
      name: "Maya R.",
      role: "Course Creator",
      text: "My enrollment, reminders, and follow-ups run automatically. I scaled to 40+ paid students without hiring anyone.",
      rating: 5,
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
            <div className="glass-hero p-4 sm:p-6 md:p-8 backdrop-blur-xl inline-block mb-4 sm:mb-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="w-full h-full p-4 sm:p-6 md:p-8 group hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(testimonial.rating)
                          ? "fill-primary text-primary"
                          : testimonial.rating % 1 !== 0 && i === Math.floor(testimonial.rating)
                          ? "fill-primary/50 text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-lg mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border/50 pt-4 relative z-10">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
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
