"use client";
import dynamic from "next/dynamic";
import { Disc, Music4 } from "lucide-react";

// Cargamos el Lottie dinámicamente para evitar errores en SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import djSpinner from "../spinners/dj.json";

export default function HeroDjSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] py-20">
      {/* Fondos y Texturas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#150202]/70 via-[#0a0a0a]/90 to-[#050505] z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/Dj-Portada.jpeg')] opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-luminosity blur-[6px]"></div>

      {/* Marca de agua de texto en CSS de fondo perfectamente centrada */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden select-none">
        <span className="text-[8vw] font-black text-white/[0.02] tracking-[0.25em] uppercase whitespace-nowrap block animate-pulse">
          GILDARDO GONZÁLEZ
        </span>
      </div>

      {/* Luces y Glows rítmicos */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-red-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-red-950/35 rounded-full blur-[160px] pointer-events-none animate-laser"></div>

      {/* Elementos decorativos de DJ de fondo */}
      <div className="absolute -left-32 -top-32 w-[600px] h-[600px] border-[40px] border-white/5 rounded-full border-dashed animate-spin-slow pointer-events-none opacity-20"></div>
      <div className="absolute -right-32 -bottom-32 w-[800px] h-[800px] border-[2px] border-red-600/10 rounded-full animate-[ping_6s_linear_infinite] pointer-events-none"></div>

      {/* Notas musicales flotantes de fondo */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[8%] text-red-500/10 text-6xl md:text-7xl animate-float" style={{ animationDelay: '0s' }}>♫</div>
        <div className="absolute top-[65%] left-[12%] text-white/5 text-8xl md:text-9xl animate-float" style={{ animationDelay: '2s' }}>♪</div>
        <div className="absolute top-[25%] right-[10%] text-white/5 text-7xl md:text-8xl animate-float" style={{ animationDelay: '1s' }}>♬</div>
        <div className="absolute top-[75%] right-[18%] text-red-600/10 text-6xl md:text-7xl animate-float" style={{ animationDelay: '3s' }}>♩</div>
      </div>

      {/* Ecualizador de sonido animado en el fondo */}
      <div className="absolute inset-x-0 bottom-0 h-48 flex items-end justify-center gap-1 md:gap-1.5 opacity-15 pointer-events-none z-10 px-4 max-w-7xl mx-auto overflow-hidden">
        {Array.from({ length: 70 }).map((_, i) => {
          const eqClass = `animate-eq-${(i % 4) + 1}`;
          return (
            <div
              key={i}
              className={`w-1 md:w-1.5 bg-gradient-to-t from-red-950 via-red-600 to-orange-400 rounded-t-full ${eqClass}`}
              style={{ animationDelay: `${i * 25}ms` }}
            />
          );
        })}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-20 text-center px-6 flex flex-col items-center mt-12 max-w-5xl mx-auto">

        {/* Animación Lottie (Spinner de DJ) */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 group cursor-pointer">
          {/* Anillos de luz traseros del Lottie */}
          <div className="absolute inset-0 rounded-full bg-red-600/20 blur-xl scale-95 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          <div className="absolute -inset-2 rounded-full border border-red-600/20 animate-spin-slow"></div>
          <div className="absolute -inset-4 rounded-full border border-dashed border-red-500/10 animate-[spin_30s_linear_infinite_reverse]"></div>
          
          <Lottie animationData={djSpinner} loop={true} className="relative z-10 transition-transform duration-700 group-hover:scale-105" />
        </div>

        <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 flex items-center gap-3 bg-red-950/40 border border-red-600/25 px-5 py-2 rounded-full backdrop-blur-md">
          <Music4 className="w-3.5 h-3.5 animate-[pulse_1s_infinite]" />
          Música & Iluminación Premium
        </span>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          Siente el <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-400 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">Ritmo</span>
        </h2>

        <p className="text-base md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
          Llevando la mejor energía y sonido a tu evento. Bodas, XV años, graduaciones y eventos corporativos en Tizayuca y alrededores.
        </p>

        <a
          href="https://wa.me/525566959722?text=Hola,%20me%20interesa%20contratar%20al%20DJ"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-4.5 font-bold text-white uppercase tracking-widest overflow-hidden rounded-full bg-red-600 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] active:scale-95 shadow-[0_5px_20px_rgba(220,38,38,0.4)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out"></div>
          <span className="relative flex items-center gap-3">
            <Disc className="w-5 h-5 animate-[spin_3s_linear_infinite] group-hover:text-orange-300" />
            Cotizar mi Evento
          </span>
        </a>

        {/* Scroll Indicator */}
        <div className="mt-12 opacity-40 hover:opacity-90 transition-opacity duration-500 animate-bounce">
          <div className="w-[1px] h-14 bg-gradient-to-b from-red-600 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
