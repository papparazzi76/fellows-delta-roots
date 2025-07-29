import { Button } from "@/components/ui/button";
import heroImage from "@/assets/a_fellows.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-container"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-playfair font-black text-fellows-warm-white mb-6 text-glow animate-fade-in-up">
          FELLOWS
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-source font-light text-fellows-gold mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Electrified Delta Blues desde Valladolid
        </h2>
        
        <p className="text-lg md:text-xl text-fellows-warm-white/90 mb-12 max-w-2xl mx-auto font-source animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          El sonido crudo del Mississippi resucita en el corazón de Castilla.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            className="btn-golden px-8 py-4 text-lg font-semibold"
            onClick={() => window.open('https://fellowstheband.bandcamp.com', '_blank')}
          >
            🎧 Escuchar ahora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold border-fellows-gold text-fellows-gold hover:bg-fellows-gold hover:text-fellows-deep-black transition-all duration-400"
            onClick={() => window.open('https://fellowstheband.bandcamp.com', '_blank')}
          >
            🛒 Comprar discos
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-fellows-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-fellows-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
