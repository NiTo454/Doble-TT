"use client";
import dynamic from "next/dynamic";
import { Disc } from "lucide-react";

// Cargamos el Lottie dinámicamente para evitar errores en SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import djSpinner from "../spinners/dj.json";

export default function HeroDjSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Fondos y Texturas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#110000]/60 via-[#0a0a0a]/80 to-[#050505] z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/Dj-Portada.jpeg')] opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-luminosity"></div>

      {/* Luces y Glows rítmicos */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-600/30 rounded-full blur-[120px] pointer-events-none animate-[pulse_2s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[150px] pointer-events-none animate-[pulse_3s_ease-in-out_infinite_alternate]"></div>

      {/* Elementos decorativos de DJ de fondo */}
      <div className="absolute -left-32 -top-32 w-[600px] h-[600px] border-[40px] border-white/5 rounded-full border-dashed animate-[spin_20s_linear_infinite] pointer-events-none opacity-20"></div>
      <div className="absolute -right-32 -bottom-32 w-[800px] h-[800px] border-[2px] border-red-600/10 rounded-full animate-[ping_4s_linear_infinite] pointer-events-none"></div>

      <div className="relative z-20 text-center px-6 flex flex-col items-center mt-16 max-w-5xl mx-auto">

        {/* Animación Lottie (Spinner de DJ) */}
        <div className="w-48 h-48 md:w-64 md:h-64 mb-2 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
          <Lottie animationData={djSpinner} loop={true} />
        </div>

        <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 flex items-center gap-3">
          <span className="w-8 md:w-12 h-[1px] bg-red-500/50"></span>
          Música & Iluminación Premium
          <span className="w-8 md:w-12 h-[1px] bg-red-500/50"></span>
        </span>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl flex items-center justify-center gap-2">
          Siente el <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 via-red-500 to-orange-400 animate-pulse">Ritmo</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
          Llevando la mejor energía y sonido a tu evento. Bodas, XV años, graduaciones y eventos corporativos en Tizayuca y alrededores.
        </p>

        <a
          href="https://wa.me/525566959722?text=Hola,%20me%20interesa%20contratar%20al%20DJ"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white uppercase tracking-widest overflow-hidden rounded-full bg-red-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative flex items-center gap-3">
            <Disc className="w-5 h-5 animate-[spin_3s_linear_infinite]" />
            Cotizar mi Evento
          </span>
        </a>

        {/* Scroll Indicator */}
        <div className="mt-16 opacity-50 hover:opacity-100 transition-opacity duration-500 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-red-600 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
