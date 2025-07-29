const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-fellows-warm-white mb-6">
            Una guitarra, una voz, y un río de blues
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="prose prose-lg text-fellows-warm-white/90 font-source leading-relaxed space-y-6">
              <p>
                <strong className="text-fellows-gold">Fellows</strong> nace en Valladolid como un homenaje visceral al blues más primitivo, 
                ese que nació entre campos de algodón y caminos polvorientos del Delta del Mississippi.
              </p>
              
              <p>
                Este dúo combina la crudeza del blues acústico con la electricidad del garage rock más honesto. 
                Sus influencias van desde <em className="text-fellows-bronze">Lightnin' Hopkins</em>, <em className="text-fellows-bronze">Sam Collins</em> 
                o <em className="text-fellows-bronze">John Lee Hooker</em> hasta el espíritu DIY más contemporáneo.
              </p>
              
              <p>
                Grabado en sesiones íntimas en lugares como <strong>Estudio Meridiano</strong> o <strong>La Leñera</strong>, 
                su música es directa, imperfecta, humana.
              </p>
              
              <p className="text-xl font-semibold text-fellows-gold">
                Fellows no busca el artificio. Fellows suena a madera, válvula, humo y piel.
              </p>
            </div>
          </div>
          
          <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-fellows-charcoal p-8 rounded-lg border border-fellows-gold/20 shadow-warm">
                <h3 className="text-2xl font-playfair font-bold text-fellows-gold mb-6">Influencias</h3>
                <div className="grid grid-cols-2 gap-4 text-fellows-warm-white/80 font-source">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-fellows-bronze rounded-full"></div>
                    <span>Lightnin' Hopkins</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-fellows-bronze rounded-full"></div>
                    <span>John Lee Hooker</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-fellows-bronze rounded-full"></div>
                    <span>Sam Collins</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-fellows-bronze rounded-full"></div>
                    <span>Delta Blues</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-fellows-bronze rounded-full"></div>
                    <span>Garage Rock</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-fellows-bronze rounded-full"></div>
                    <span>DIY Spirit</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-fellows-gold/30 rounded-full animate-parallax-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-fellows-bronze/40 rounded-lg rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;