import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-40 w-72 h-72 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="glass-hero p-4 sm:p-6 backdrop-blur-xl inline-block mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Real feedback from businesses we've helped automate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="w-full p-4 sm:p-6 md:p-8 group hover:shadow-glow transition-all duration-300">
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-base sm:text-lg mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>

              <div className="border-t border-border/50 pt-4 relative z-10">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
