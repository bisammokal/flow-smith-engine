import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const TestimonialsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Sarah J.",
      role: "Marketing Agency Owner",
      text: "Our entire onboarding is now 100% automated. Saved 15 hours/week easily! The team at Fluxyn understood our needs perfectly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
    {
      name: "Michael C.",
      role: "Real Estate Broker",
      text: "The lead qualification system alone doubled our conversion rate. We never miss a hot lead anymore. Best investment we've made.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    },
    {
      name: "Dr. Emily R.",
      role: "Healthcare Practice Manager",
      text: "Patient appointment automation has transformed our practice. Zero no-shows, perfect record-keeping, and our staff loves it.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    },
    {
      name: "David P.",
      role: "SaaS Founder",
      text: "The AI follow-up system is incredible. It knows exactly when to reach out. Our response rates went up 3x in the first month.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
  ];

  useEffect(() => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll('.testimonial-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">What Our Clients Say</span>
          </h2>
        </div>

        <div ref={carouselRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="testimonial-card glass-card p-8 border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative">
                {/* Quote Icon */}
                <Quote className="absolute -top-2 -left-2 w-10 h-10 text-primary/20" />
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/30">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                      <AvatarFallback className="text-lg font-semibold bg-gradient-luxury">
                        {testimonial.name.split(' ')[0][0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};