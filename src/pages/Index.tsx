import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DiscographySection from "@/components/DiscographySection";
import LiveSection from "@/components/LiveSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    // Parallax effect for hero section
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-container');
      if (parallax) {
        const speed = scrolled * 0.5;
        (parallax as HTMLElement).style.transform = `scale(1.1) translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen bg-fellows-deep-black">
      <Navigation />
      
      <main>
        <div id="inicio">
          <HeroSection />
        </div>
        
        <AboutSection />
        
        <DiscographySection />
        
        <LiveSection />
        
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
