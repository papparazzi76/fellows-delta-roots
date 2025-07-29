import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["inicio", "sobre", "discografia", "directo", "contacto"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre", label: "Sobre" },
    { id: "discografia", label: "Discografía" },
    { id: "directo", label: "Directo" },
    { id: "contacto", label: "Contacto" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      isScrolled 
        ? "bg-fellows-deep-black/95 backdrop-blur-md border-b border-fellows-gold/20" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-playfair font-black text-2xl text-fellows-gold cursor-pointer hover:text-fellows-bronze transition-colors"
            onClick={() => scrollToSection("inicio")}
          >
            FELLOWS
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-source font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-fellows-gold"
                    : "text-fellows-warm-white hover:text-fellows-gold"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="btn-golden"
              onClick={() => window.open('https://fellowstheband.bandcamp.com', '_blank')}
            >
              🎧 Escuchar
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-fellows-gold"
            >
              ☰
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;