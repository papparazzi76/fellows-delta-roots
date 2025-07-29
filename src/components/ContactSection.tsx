import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-fellows-deep-black relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-fellows-warm-white mb-6">
            Síguenos, comparte y escríbenos
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-fellows-warm-white/80 font-source max-w-2xl mx-auto">
            Fellows es música, pero también comunidad. Síguenos en redes, comparte nuestros discos, 
            ven a los conciertos o escríbenos si quieres colaborar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email */}
          <div className="text-center fade-in-up group">
            <div className="bg-fellows-charcoal p-8 rounded-lg border border-fellows-gold/20 hover:border-fellows-gold/40 transition-all duration-400 hover:shadow-warm">
              <div className="text-4xl mb-4">📩</div>
              <h3 className="text-xl font-playfair font-bold text-fellows-gold mb-2">Email</h3>
              <p className="text-fellows-warm-white/80 text-sm mb-4">Contacto directo</p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-fellows-gold text-fellows-gold hover:bg-fellows-gold hover:text-fellows-deep-black w-full"
                onClick={() => window.open('mailto:fellowstheband@gmail.com', '_blank')}
              >
                fellowstheband@gmail.com
              </Button>
            </div>
          </div>
          
          {/* Instagram */}
          <div className="text-center fade-in-up group" style={{ animationDelay: '0.2s' }}>
            <div className="bg-fellows-charcoal p-8 rounded-lg border border-fellows-gold/20 hover:border-fellows-gold/40 transition-all duration-400 hover:shadow-warm">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-xl font-playfair font-bold text-fellows-gold mb-2">Instagram</h3>
              <p className="text-fellows-warm-white/80 text-sm mb-4">Síguenos en IG</p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-fellows-gold text-fellows-gold hover:bg-fellows-gold hover:text-fellows-deep-black w-full"
                onClick={() => window.open('https://instagram.com/fellows_bluesband', '_blank')}
              >
                @fellows_bluesband
              </Button>
            </div>
          </div>
          
          {/* Facebook */}
          <div className="text-center fade-in-up group" style={{ animationDelay: '0.4s' }}>
            <div className="bg-fellows-charcoal p-8 rounded-lg border border-fellows-gold/20 hover:border-fellows-gold/40 transition-all duration-400 hover:shadow-warm">
              <div className="text-4xl mb-4">📘</div>
              <h3 className="text-xl font-playfair font-bold text-fellows-gold mb-2">Facebook</h3>
              <p className="text-fellows-warm-white/80 text-sm mb-4">Conecta con nosotros</p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-fellows-gold text-fellows-gold hover:bg-fellows-gold hover:text-fellows-deep-black w-full"
                onClick={() => window.open('https://facebook.com/fellowstheband', '_blank')}
              >
                Fellows
              </Button>
            </div>
          </div>
          
          {/* Bandcamp */}
          <div className="text-center fade-in-up group" style={{ animationDelay: '0.6s' }}>
            <div className="bg-fellows-charcoal p-8 rounded-lg border border-fellows-gold/20 hover:border-fellows-gold/40 transition-all duration-400 hover:shadow-warm">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-playfair font-bold text-fellows-gold mb-2">Bandcamp</h3>
              <p className="text-fellows-warm-white/80 text-sm mb-4">Escucha y compra</p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-fellows-gold text-fellows-gold hover:bg-fellows-gold hover:text-fellows-deep-black w-full"
                onClick={() => window.open('https://fellowstheband.bandcamp.com', '_blank')}
              >
                fellowstheband
              </Button>
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="text-center mt-20 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <blockquote className="text-2xl md:text-3xl font-playfair italic text-fellows-gold mb-4 text-glow">
            "Seguimos el camino del blues, porque el blues fue primero."
          </blockquote>
          <p className="text-fellows-warm-white/60 font-source">
            © Fellows 2025 · Web diseñada con alma y distorsión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;