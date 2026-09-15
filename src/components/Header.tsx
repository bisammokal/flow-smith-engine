import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (path === "/" && sectionId) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "auto" });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      }
    } else {
      navigate(path);
    }
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Reviews", path: "/reviews" },
    { label: "Projects", path: "/case-study" },
    { label: "About", path: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Nexotica
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className={`transition-colors ${
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              variant="cta"
              size="lg"
              onClick={() => window.open("https://www.upwork.com/freelancers/~01ae02475a9e9fcbd4?mp_source=share", "_blank", "noopener,noreferrer")}
            >
              🚀 Hire me on Upwork
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 bg-background border-t border-border">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left px-4 py-2 transition-colors ${
                    isActive 
                      ? "bg-muted text-primary font-semibold" 
                      : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="px-4 pt-2">
              <Button
                variant="cta"
                size="lg"
                className="w-full"
                onClick={() => window.open("https://www.upwork.com/freelancers/~01ae02475a9e9fcbd4?mp_source=share", "_blank", "noopener,noreferrer")}
              >
                🚀 Hire me on Upwork
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
