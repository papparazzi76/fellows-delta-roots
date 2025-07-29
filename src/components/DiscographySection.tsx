import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bluesRecordingCover from "@/assets/album-blues-recording.jpg";
import sesionesDeltaVol3Cover from "@/assets/album-sesiones-delta-vol-3.jpg";
import guadarramaCover from "@/assets/album-guadarrama.jpg";
import sesionesDeltaCover from "@/assets/album-sesiones-delta.jpg";
import conquerMoonCover from "@/assets/album-the-conquer-of-the-moon.jpg";
import afterSaturnCover from "@/assets/album-after-saturn.jpg";

const albums = [
  {
    title: "Blues Recording",
    year: "2025",
    description: "Un regreso crudo a la raíz, grabado en una sola noche en Estudio Meridiano. Blues eléctrico de altos vuelos.",
    cover: bluesRecordingCover
  },
  {
    title: "Sesiones Delta Vol. 3",
    year: "2021",
    description: "Guitarra, armónica y voz, sin trampa ni cartón. Una sesión directa al alma desde La Leñera.",
    cover: sesionesDeltaVol3Cover
  },
  {
    title: "Guadarrama",
    year: "2020",
    description: "Sonidos experimentales y texturas atmosféricas que exploran nuevos territorios musicales.",
    cover: guadarramaCover
  },
  {
    title: "Sesiones Delta",
    year: "2017",
    description: "Las primeras grabaciones que definieron el sonido único de Fellows en el panorama nacional.",
    cover: sesionesDeltaCover
  },
  {
    title: "The Conquer of the Moon",
    year: "2016", 
    description: "Un viaje sonoro por territorios del blues, el folk y el minimalismo eléctrico.",
    cover: conquerMoonCover
  },
  {
    title: "After Saturn",
    year: "2014",
    description: "El álbum debut que marcó el inicio del camino musical de Fellows.",
    cover: afterSaturnCover
  }
];

const DiscographySection = () => {
  return (
    <section id="discografia" className="py-24 bg-fellows-deep-black relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-fellows-warm-white mb-6">
            Escucha nuestros discos
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <Card 
              key={album.title}
              className="album-card bg-fellows-charcoal border-fellows-gold/20 overflow-hidden group fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Album Cover */}
                <div className="h-80 relative overflow-hidden">
                  <img 
                    src={album.cover} 
                    alt={`Portada del álbum ${album.title}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                    <Button 
                      className="btn-golden transform scale-90 group-hover:scale-100 transition-transform"
                      onClick={() => window.open('https://fellowstheband.bandcamp.com/', '_blank')}
                    >
                      🎧 Escuchar
                    </Button>
                  </div>
                </div>
                
                {/* Album Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-playfair font-bold text-fellows-warm-white">
                      {album.title}
                    </h3>
                    <span className="text-fellows-gold font-semibold">
                      {album.year}
                    </span>
                  </div>
                  
                  <p className="text-fellows-warm-white/80 font-source text-sm leading-relaxed mb-6">
                    {album.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-fellows-gold text-fellows-gold hover:bg-fellows-gold hover:text-fellows-deep-black"
                    onClick={() => window.open('https://fellowstheband.bandcamp.com/', '_blank')}
                  >
                    🎧 Escúchalo en Bandcamp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg"
            className="btn-golden px-12 py-4 text-lg font-semibold"
            onClick={() => window.open('https://fellowstheband.bandcamp.com/', '_blank')}
          >
            Ver discografía completa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscographySection;
