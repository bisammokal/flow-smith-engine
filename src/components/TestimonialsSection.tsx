import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Agency Owner",
      text: "Our entire onboarding is now 100% automated. Saved 15 hours/week easily! The team at Fluxyn understood our needs perfectly.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Real feedback from businesses we've helped automate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="glass-card w-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,212,59,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-primary/30 flex-shrink-0">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                  <AvatarFallback className="text-lg font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-primary/50 text-primary" />
                )}
              </div>

              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
