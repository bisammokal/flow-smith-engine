import { MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Fluxyn
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Fluxyn truly believes in customer satisfaction. Share your burden with us, we will provide you quality services. Trust us, you will have unbreakable bond with Fluxyn.
            </p>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-destructive font-semibold text-lg mb-4">Helpful Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("workflows")}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("case-studies")}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-destructive font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <span className="text-primary font-medium">Support:</span>
                <p className="text-foreground/80">+1-888-555-1234</p>
              </div>
              <div>
                <span className="text-primary font-medium">Sales:</span>
                <p className="text-foreground/80">+1-888-555-5678</p>
              </div>
              <div>
                <span className="text-primary font-medium">HR:</span>
                <p className="text-foreground/80">+1-888-555-9012</p>
              </div>
            </div>
          </div>

          {/* Emails */}
          <div>
            <h4 className="text-destructive font-semibold text-lg mb-4">Emails</h4>
            <div className="space-y-3">
              <div>
                <span className="text-primary font-medium">Inquiry:</span>
                <p className="text-foreground/80 break-all">hello@fluxyn.com</p>
              </div>
              <div>
                <span className="text-primary font-medium">Resume:</span>
                <p className="text-foreground/80 break-all">careers@fluxyn.com</p>
              </div>
              <div>
                <span className="text-primary font-medium">Quotation:</span>
                <p className="text-foreground/80 break-all">sales@fluxyn.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="mb-12">
          <h4 className="text-destructive font-semibold text-lg mb-6">Addresses</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <span className="text-primary font-medium">USA:</span>
                <p className="text-foreground/80 text-sm mt-1">
                  123 Innovation Drive, Silicon Valley, CA 94025, United States
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <span className="text-primary font-medium">Canada:</span>
                <p className="text-foreground/80 text-sm mt-1">
                  456 Tech Boulevard, Toronto, ON M5H 2N2, Canada
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <span className="text-primary font-medium">UK:</span>
                <p className="text-foreground/80 text-sm mt-1">
                  789 Digital Street, London EC2A 4NE, United Kingdom
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <span className="text-primary font-medium">Australia:</span>
                <p className="text-foreground/80 text-sm mt-1">
                  321 Automation Avenue, Sydney NSW 2000, Australia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/70">
              Copyright © 2025 | Fluxyn. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Terms & Condition
              </button>
              <button className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Privacy Policy
              </button>
            </div>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877F2] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0A66C2] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#E4405F] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1DA1F2] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
