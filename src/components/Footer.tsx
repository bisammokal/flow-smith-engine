import { MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Multi-Layer Glassmorphism Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Outer Glass Layer - Light transparency */}
        <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-sm" />
        
        {/* Inner Glass Layer - Heavier blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl" />
        
        {/* Frosted Gradient Accents */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-40" />
        
        {/* Diagonal Light Beam */}
        <div className="absolute top-0 right-0 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-45 blur-sm" />
        <div className="absolute bottom-20 left-0 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -rotate-12 blur-sm" />
        
        {/* Floating Orb Effects */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDuration: '10s' }} />
        
        {/* Tiny Gold Particles */}
        <div className="absolute top-10 left-1/3 w-1 h-1 bg-primary/60 rounded-full blur-[1px]" />
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-primary/40 rounded-full blur-[1px]" />
        <div className="absolute bottom-32 left-1/2 w-1 h-1 bg-primary/50 rounded-full blur-[1px]" />
      </div>

      {/* Premium Top Border with Gradient Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid with Premium Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
          {/* Brand Section - Premium Glass Card */}
          <div className="group">
            <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(255,212,59,0.15)] hover:-translate-y-1">
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent mb-4 tracking-wide">
                  Fluxyn
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base tracking-wide">
                  Fluxyn truly believes in customer satisfaction. Share your burden with us, we will provide you quality services. Trust us, you will have unbreakable bond with Fluxyn.
                </p>
              </div>
            </div>
          </div>

          {/* Helpful Links - Premium Glass Card */}
          <div className="group">
            <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(255,212,59,0.15)] hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h4 className="text-destructive font-semibold text-lg md:text-xl mb-5 tracking-wider bg-gradient-to-r from-destructive to-red-400 bg-clip-text text-transparent">
                  Helpful Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about"
                      className="group/link relative text-foreground/80 hover:text-primary transition-all duration-300 text-sm md:text-base tracking-wide inline-block"
                    >
                      <span className="relative">
                        About Us
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-yellow-400 group-hover/link:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("workflows")}
                      className="group/link relative text-foreground/80 hover:text-primary transition-all duration-300 text-sm md:text-base tracking-wide"
                    >
                      <span className="relative">
                        Solutions
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-yellow-400 group-hover/link:w-full transition-all duration-300" />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("case-studies")}
                      className="group/link relative text-foreground/80 hover:text-primary transition-all duration-300 text-sm md:text-base tracking-wide"
                    >
                      <span className="relative">
                        Case Studies
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-yellow-400 group-hover/link:w-full transition-all duration-300" />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="group/link relative text-foreground/80 hover:text-primary transition-all duration-300 text-sm md:text-base tracking-wide"
                    >
                      <span className="relative">
                        Careers
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-yellow-400 group-hover/link:w-full transition-all duration-300" />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us - Premium Glass Card */}
          <div className="group">
            <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(255,212,59,0.15)] hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h4 className="text-destructive font-semibold text-lg md:text-xl mb-5 tracking-wider bg-gradient-to-r from-destructive to-red-400 bg-clip-text text-transparent">
                  Contact Us
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Support:</span>
                    <p className="text-foreground/80 text-sm md:text-base tracking-wide">+1-888-555-1234</p>
                  </div>
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Sales:</span>
                    <p className="text-foreground/80 text-sm md:text-base tracking-wide">+1-888-555-5678</p>
                  </div>
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">HR:</span>
                    <p className="text-foreground/80 text-sm md:text-base tracking-wide">+1-888-555-9012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emails - Premium Glass Card */}
          <div className="group">
            <div className="relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(255,212,59,0.15)] hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h4 className="text-destructive font-semibold text-lg md:text-xl mb-5 tracking-wider bg-gradient-to-r from-destructive to-red-400 bg-clip-text text-transparent">
                  Emails
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Inquiry:</span>
                    <p className="text-foreground/80 break-all text-sm md:text-base tracking-wide">hello@fluxyn.com</p>
                  </div>
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Resume:</span>
                    <p className="text-foreground/80 break-all text-sm md:text-base tracking-wide">careers@fluxyn.com</p>
                  </div>
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Quotation:</span>
                    <p className="text-foreground/80 break-all text-sm md:text-base tracking-wide">sales@fluxyn.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses Section - Premium Glassmorphic Container */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="relative p-6 md:p-8 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05] hover:border-primary/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,212,59,0.15)]">
            {/* Inner Premium Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-40" />
            
            <div className="relative z-10">
              <h4 className="text-destructive font-semibold text-xl md:text-2xl mb-6 md:mb-8 tracking-wider bg-gradient-to-r from-destructive to-red-400 bg-clip-text text-transparent">
                Addresses
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group/address flex gap-3 p-4 rounded-xl bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,212,59,0.1)]">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover/address:scale-110 group-hover/address:drop-shadow-[0_0_8px_rgba(255,212,59,0.5)] transition-all duration-300" />
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">USA:</span>
                    <p className="text-foreground/80 text-sm mt-1 tracking-wide leading-relaxed">
                      123 Innovation Drive, Silicon Valley, CA 94025, United States
                    </p>
                  </div>
                </div>
                <div className="group/address flex gap-3 p-4 rounded-xl bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,212,59,0.1)]">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover/address:scale-110 group-hover/address:drop-shadow-[0_0_8px_rgba(255,212,59,0.5)] transition-all duration-300" />
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Canada:</span>
                    <p className="text-foreground/80 text-sm mt-1 tracking-wide leading-relaxed">
                      456 Tech Boulevard, Toronto, ON M5H 2N2, Canada
                    </p>
                  </div>
                </div>
                <div className="group/address flex gap-3 p-4 rounded-xl bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,212,59,0.1)]">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover/address:scale-110 group-hover/address:drop-shadow-[0_0_8px_rgba(255,212,59,0.5)] transition-all duration-300" />
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">UK:</span>
                    <p className="text-foreground/80 text-sm mt-1 tracking-wide leading-relaxed">
                      789 Digital Street, London EC2A 4NE, United Kingdom
                    </p>
                  </div>
                </div>
                <div className="group/address flex gap-3 p-4 rounded-xl bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,212,59,0.1)]">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover/address:scale-110 group-hover/address:drop-shadow-[0_0_8px_rgba(255,212,59,0.5)] transition-all duration-300" />
                  <div>
                    <span className="text-primary font-medium text-sm md:text-base tracking-wide bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Australia:</span>
                    <p className="text-foreground/80 text-sm mt-1 tracking-wide leading-relaxed">
                      321 Automation Avenue, Sydney NSW 2000, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Premium Glassmorphic Border */}
        <div className="pt-8 md:pt-10 relative">
          {/* Premium Divider with Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 pt-8">
            <p className="text-sm md:text-base text-foreground/70 tracking-wide">
              Copyright © 2025 | Fluxyn. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/about"
                className="group/link relative text-sm md:text-base text-foreground/70 hover:text-primary transition-all duration-300 tracking-wide"
              >
                <span className="relative">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-yellow-400 group-hover/link:w-full transition-all duration-300" />
                </span>
              </Link>
              <button className="group/link relative text-sm md:text-base text-foreground/70 hover:text-primary transition-all duration-300 tracking-wide">
                <span className="relative">
                  Terms & Condition
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-yellow-400 group-hover/link:w-full transition-all duration-300" />
                </span>
              </button>
              <button className="group/link relative text-sm md:text-base text-foreground/70 hover:text-primary transition-all duration-300 tracking-wide">
                <span className="relative">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-yellow-400 group-hover/link:w-full transition-all duration-300" />
                </span>
              </button>
            </div>
            
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative w-10 h-10 md:w-11 md:h-11 bg-[#1877F2] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(24,119,242,0.4)]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                <Facebook className="w-5 h-5 text-white relative z-10" />
                {/* Glow reflection underneath */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#1877F2] blur-md opacity-0 group-hover/social:opacity-60 transition-opacity duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative w-10 h-10 md:w-11 md:h-11 bg-[#0A66C2] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(10,102,194,0.4)]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                <Linkedin className="w-5 h-5 text-white relative z-10" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#0A66C2] blur-md opacity-0 group-hover/social:opacity-60 transition-opacity duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative w-10 h-10 md:w-11 md:h-11 bg-[#E4405F] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(228,64,95,0.4)]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                <Instagram className="w-5 h-5 text-white relative z-10" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#E4405F] blur-md opacity-0 group-hover/social:opacity-60 transition-opacity duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative w-10 h-10 md:w-11 md:h-11 bg-[#1DA1F2] rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(29,161,242,0.4)]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                <Twitter className="w-5 h-5 text-white relative z-10" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#1DA1F2] blur-md opacity-0 group-hover/social:opacity-60 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
