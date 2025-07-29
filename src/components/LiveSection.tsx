import { Button } from "@/components/ui/button";

const LiveSection = () => {
  return (
    <section id="directo" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-fellows-warm-white mb-6">
            El blues se vive en directo
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="prose prose-lg text-fellows-warm-white/90 font-source leading-relaxed space-y-6">
              <p className="text-xl">
                Cada concierto de <strong className="text-fellows-gold">Fellows</strong> es una ceremonia.
              </p>
              
              <p>
                Cuerdas crujientes, amplificadores a válvulas, luces tenues y una conexión brutal con el público. 
                Ya sea en un club íntimo o sobre un gran escenario, el viaje es siempre el mismo: 
                <em className="text-fellows-bronze"> puro, eléctrico y honesto</em>.
              </p>
              
              <div className="bg-fellows-charcoal p-6 rounded-lg border-l-4 border-fellows-gold">
                <p className="text-fellows-gold font-semibold mb-2">🎥 Mira el vídeo:</p>
                <p className="text-fellows-warm-white">
                  📺 <strong>«My Babe is Gone»</strong> – directo en La Leñera
                </p>
              </div>
            </div>
          </div>
          
          <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-fellows-charcoal rounded-lg p-8 border border-fellows-gold/20 shadow-warm">
              <h3 className="text-2xl font-playfair font-bold text-fellows-gold mb-6">
                Próximos conciertos
              </h3>
              
              <div className="space-y-4">
                <div className="border-b border-fellows-gold/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-fellows-warm-white">12 octubre 2025 – Valladolid</h4>
                      <p className="text-fellows-warm-white/70 text-sm">Sala Porta Caeli – 21:00h</p>
                    </div>
                    <span className="text-fellows-bronze text-sm">🎟️ Disponible</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-fellows-gold text-fellows-gold hover:bg-fellows-gold hover:text-fellows-deep-black"
                  >
                    Entradas en Wegow
                  </Button>
                </div>
                
                <div className="border-b border-fellows-gold/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-fellows-warm-white">22 noviembre 2025 – León</h4>
                      <p className="text-fellows-warm-white/70 text-sm">Babylon Club – 22:00h</p>
                    </div>
                    <span className="text-fellows-bronze text-sm">🎟️ Disponible</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-fellows-gold text-fellows-gold hover:bg-fellows-gold hover:text-fellows-deep-black"
                  >
                    Reservas por Instagram
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-fellows-gold/20">
                <p className="text-fellows-warm-white/80 text-sm font-source text-center">
                  ¿Quieres vernos en directo? Guarda la fecha, comparte y acompáñanos a una noche de blues inolvidable.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border border-fellows-gold/40 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-fellows-bronze/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;