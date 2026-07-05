"use client";
import { useState, useEffect, useRef } from "react";
import { Play, Volume2, History } from "lucide-react";

// 1. Agrega aquí todos los nombres o rutas de tus videos
const VIDEOS_PLAYLIST = [
  "/video-presentacion.mp4",
  "/video2-presentacion.mp4",
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
    return <section id="conocenos" className="bg-[#FAF8F5] py-24 px-6 md:px-12 min-h-[60vh]"></section>;
  }

  return (
    <section id="conocenos" className="relative bg-[#FAF8F5] py-28 px-6 md:px-12 scroll-mt-10 overflow-hidden font-sans border-t border-slate-200/40">
      {/* Luces de fondo doradas/azules muy tenues */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cremeria-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#d4af37]/3 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Lado del Texto */}
        <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <span className="text-cremeria-blue font-black tracking-[0.25em] uppercase mb-4 text-xs md:text-sm flex items-center justify-center lg:justify-start gap-2">
            <History className="w-4 h-4 text-[#d4af37]" />
            Nuestra Esencia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-cremeria-navy mb-8 tracking-tighter uppercase leading-tight">
            La Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A07817] via-[#D4AF37] to-[#805C0E] drop-shadow-[0_0_15px_rgba(197,155,39,0.15)]">Doble TT</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
            En La Doble TT Gourmet, no solo te ofrecemos productos selectos; te brindamos una experiencia cálida y tradicional.
            Nuestra <strong className="text-cremeria-red font-semibold">nueva ubicación</strong> está equipada para recibirte y consentir tu paladar con el servicio y la calidad artesanal que mereces.
          </p>

          <div className="inline-flex items-center gap-4 bg-white border border-[#D4AF37]/35 rounded-2xl py-3 px-6 shadow-[0_5px_15px_rgba(0,0,0,0.02)] cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cremeria-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cremeria-red"></span>
            </span>
            <p className="text-cremeria-navy font-black text-xs tracking-widest uppercase">
              Calidad que se saborea
            </p>
          </div>
        </div>

        {/* Lado del Video con Marco Gourmet */}
        <div className="lg:w-1/2 w-full relative order-1 lg:order-2 group">
          {/* Resplandor dorado trasero del reproductor */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cremeria-blue/10 via-[#D4AF37]/10 to-cremeria-red/10 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none"></div>

          {/* Contenedor de Video: Marco de Madera Oscura Virtual y Cintas de Oro */}
          <div className="relative p-3 rounded-[2.5rem] bg-gradient-to-tr from-[#1B2B4A] via-[#2a3c5a] to-[#D4AF37] shadow-[0_20px_50px_rgba(27,43,74,0.12)] border border-[#D4AF37]/20">
            <div className="relative aspect-video rounded-[1.8rem] overflow-hidden bg-black">
              
              <video
                ref={videoRef}
                autoPlay
                loop={false} // IMPORTANTE: Debe estar en false para que el evento onEnded funcione
                muted
                playsInline
                controls
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              >
                <source src={VIDEOS_PLAYLIST[currentIndex]} type="video/mp4" />
              </video>

              {/* HUD / Indicador Superior de Playlist Gourmet */}
              <div className="absolute top-4 left-4 bg-black/60 border border-[#D4AF37]/30 backdrop-blur-md px-3.5 py-2 rounded-xl z-20 flex items-center gap-2.5 opacity-90">
                <Play className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <span className="text-[10px] text-white font-black tracking-widest uppercase">
                  HISTORIA // 0{currentIndex + 1}
                </span>
              </div>

              {/* Indicador de Audio Mutado Sutil */}
              <div className="absolute top-4 right-4 bg-black/60 border border-white/10 backdrop-blur-md p-2 rounded-xl z-20 opacity-80">
                <Volume2 className="w-4 h-4 text-white/70" />
              </div>

              {/* Indicadores de Playlist (Estilo Stories / Barras Doradas) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3.5 z-20 bg-black/50 px-4 py-2.5 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {VIDEOS_PLAYLIST.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      currentIndex === idx
                        ? "w-8 bg-[#D4AF37]"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Reproducir video ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
