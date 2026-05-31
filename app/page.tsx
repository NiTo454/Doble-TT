"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [hovered, setHovered] = useState<"cremeria" | "dj" | null>(null);

  return (
    <main className="flex min-h-[100dvh] flex-col md:flex-row overflow-hidden overscroll-none touch-manipulation bg-[#050505] relative font-sans selection:bg-white/20">

      {/* =========================================
          LADO 1: CREMERÍA (Gourmet)
          ========================================= */}
      <Link
        href="/cremeria"
        onMouseEnter={() => setHovered("cremeria")}
        onMouseLeave={() => setHovered(null)}
        className={`group relative flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
          active:scale-[0.97] active:bg-black/20 md:active:scale-100 border-b border-white/5 md:border-none
          ${
            hovered === "cremeria"
              ? "flex-[1] md:flex-[1.4] z-10"
              : hovered === "dj"
              ? "flex-[1] md:flex-[0.6] opacity-40 grayscale-[40%]"
              : "flex-1"
          }
        `}
      >
        {/* Fondos */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#050505] z-0 transition-transform duration-[1000ms] group-hover:scale-105"></div>

        {/* Glow - Usando opacidad base para móvil en lugar de animaciones arbitrarias complejas */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cremeria-blue/20 via-transparent to-transparent opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000"></div>

        {/* Textura */}
        <div className="absolute inset-0 bg-[url('/hero-tt.png')] bg-cover bg-center opacity-[0.03] mix-blend-screen md:group-hover:opacity-[0.08] transition-opacity duration-700 z-0"></div>

        {/* Contenido */}
        <div className="relative z-10 text-center flex flex-col items-center transform transition-all duration-700 md:group-hover:-translate-y-2">

          <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 md:mb-8 shadow-2xl transition-all duration-500 md:group-hover:scale-110 md:group-hover:bg-white/10 md:group-hover:border-white/20">
            <span className="text-3xl md:text-5xl drop-shadow-md">🧀</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-white mb-1 md:mb-2 tracking-tight uppercase">
            La Doble TT
          </h1>
          <span className="text-lg md:text-3xl text-cremeria-cream font-medium tracking-[0.1em] md:tracking-[0.2em] uppercase mb-4 md:mb-8 opacity-90 md:group-hover:opacity-100 transition-opacity">
            Gourmet
          </span>

          <div className="overflow-hidden rounded-full">
            <p className="text-[10px] md:text-sm text-white font-semibold px-6 py-2 md:px-8 md:py-3 uppercase tracking-widest bg-white/5 border border-white/20 backdrop-blur-md transition-all duration-500 active:bg-cremeria-red/70 md:group-hover:bg-cremeria-red/90 md:group-hover:border-cremeria-red md:group-hover:shadow-[0_0_20px_rgba(255,50,50,0.3)]">
              Cremería y Carnes Frías
            </p>
          </div>

          {/* Hint visual para móvil */}
          <span className="md:hidden mt-4 text-[9px] text-white/40 uppercase tracking-[0.3em] animate-pulse">
            Toca para entrar
          </span>
        </div>
      </Link>

      {/* =========================================
          LADO 2: DJ (Eventos)
          ========================================= */}
      <Link
        href="/dj"
        onMouseEnter={() => setHovered("dj")}
        onMouseLeave={() => setHovered(null)}
        className={`group relative flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
          active:scale-[0.97] active:bg-black/20 md:active:scale-100
          ${
            hovered === "dj"
              ? "flex-[1] md:flex-[1.4] z-10"
              : hovered === "cremeria"
              ? "flex-[1] md:flex-[0.6] opacity-40 grayscale-[40%]"
              : "flex-1"
          }
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-[#000000] via-[#111111] to-[#1a1a1a] z-0 transition-transform duration-[1000ms] group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dj-red/10 via-transparent to-transparent opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000"></div>

        <div className="relative z-10 text-center flex flex-col items-center transform transition-all duration-700 md:group-hover:-translate-y-2">

          <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 md:mb-8 shadow-2xl transition-all duration-500 md:group-hover:scale-110 md:group-hover:bg-white/10 md:group-hover:border-white/20">
            <span className="text-3xl md:text-5xl drop-shadow-md">🎧</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-white mb-1 md:mb-2 tracking-tight uppercase">
            DJ Gildardo
          </h1>
          <span className="text-lg md:text-3xl text-dj-silver font-medium tracking-[0.1em] md:tracking-[0.2em] uppercase mb-4 md:mb-8 opacity-70 md:group-hover:opacity-100 md:group-hover:text-white transition-all">
            González
          </span>

          <div className="overflow-hidden rounded-full">
            <p className="text-[10px] md:text-sm text-white font-semibold px-6 py-2 md:px-8 md:py-3 uppercase tracking-widest bg-white/5 border border-white/20 backdrop-blur-md transition-all duration-500 active:bg-dj-red/70 md:group-hover:bg-dj-red/90 md:group-hover:border-dj-red md:group-hover:shadow-[0_0_20px_rgba(255,26,26,0.3)]">
              Música y Eventos
            </p>
          </div>

          {/* Hint visual para móvil */}
          <span className="md:hidden mt-4 text-[9px] text-white/40 uppercase tracking-[0.3em] animate-pulse">
            Toca para explorar
          </span>
        </div>
      </Link>

      {/* =========================================
          DIVISOR CENTRAL
          ========================================= */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex items-center justify-center transition-all duration-500
          ${hovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}
        `}
      >
        <div className="w-12 h-12 flex items-center justify-center bg-[#050505]/50 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="w-[2px] h-4 bg-white/30 rounded-full mx-[2px]"></div>
          <div className="w-[2px] h-4 bg-white/30 rounded-full mx-[2px]"></div>
        </div>
      </div>

    </main>
  );
}
