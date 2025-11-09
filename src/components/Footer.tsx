import { Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = {
    main: [
      { name: "Home", id: "hero" },
      { name: "Solutions", id: "workflows" },
      { name: "Pricing", id: "pricing" },
      { name: "Contact", id: "contact" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Preesoft Automations
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Smart Automation, Real Growth.
            </p>
            <p className="text-secondary-foreground/80">
              Helping businesses scale through intelligent AI-powered automation systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:support@preesoftautomations.com"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@preesoftautomations.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/80">
              © 2025 Preesoft Automations. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-secondary-foreground/80">
              <button className="hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-secondary-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
