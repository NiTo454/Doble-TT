"use client";
import { useState, useEffect, useRef } from "react";

// 1. Agrega aquí todos los nombres o rutas de tus videos
const VIDEOS_PLAYLIST = [
  "/Video-1-dj.mp4",
  "/Video-2-dj.mp4",
];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 2. Al montar el componente en el navegador, elegimos un video al azar
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * VIDEOS_PLAYLIST.length);
    setCurrentIndex(randomIndex);
    setIsMounted(true);
  }, []);

  // 3. Forzamos la recarga y reproducción cuando cambia el video
  useEffect(() => {
    if (videoRef.current && isMounted) {
      videoRef.current.load();
      // El catch previene errores en navegadores muy estrictos con el autoplay
      videoRef.current.play().catch((e) => console.log("Autoplay bloqueado:", e));
    }
  }, [currentIndex, isMounted]);

  // 4. Lógica para saltar al siguiente video cuando el actual termina
  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % VIDEOS_PLAYLIST.length);
  };

  // Previene errores de hidratación (SSR) mostrando el fondo mientras calcula el random
  if (!isMounted) {
    return <section id="conocenos" className="bg-[#05080f] py-24 px-6 md:px-12 min-h-[60vh]"></section>;
  }

  return (
    <section id="conocenos" className="relative bg-[#05080f] py-24 px-6 md:px-12 scroll-mt-10 overflow-hidden font-sans">

      {/* Luces de fondo (Glows) para el contenedor oscuro */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cremeria-blue/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cremeria-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* Lado del Texto */}
        <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <p className="text-cremeria-blue font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">
            Nuestra Esencia
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            La Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-cremeria-red to-[#ff5e5e]">Doble TT</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
            En La Doble TT Gourmet, no solo te ofrecemos los mejores productos, te ofrecemos una experiencia.
            Nuestra <strong className="text-white font-medium">nueva ubicación</strong> está lista para recibirte con el trato cálido y amable que ya conoces.
          </p>

          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full py-3 px-6 backdrop-blur-sm cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cremeria-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cremeria-red"></span>
            </span>
            <p className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
              Descubre nuestra historia
            </p>
          </div>
        </div>

        {/* Lado del Video */}
        <div className="lg:w-1/2 w-full relative order-1 lg:order-2 group">

          {/* Glow trasero del video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cremeria-blue/20 to-cremeria-red/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>

          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 bg-black">
            <video
              ref={videoRef}
              autoPlay
              loop={false} // IMPORTANTE: Debe estar en false para que el evento onEnded funcione
              muted
              playsInline
              controls
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            >
              <source src={VIDEOS_PLAYLIST[currentIndex]} type="video/mp4" />
            </video>

            {/* Indicadores de Playlist (Estilo Stories) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/40 px-3 py-2 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {VIDEOS_PLAYLIST.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    currentIndex === idx
                      ? "w-6 md:w-8 bg-cremeria-red"
                      : "w-1.5 md:w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Reproducir video ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
