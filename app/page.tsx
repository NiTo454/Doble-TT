"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [hovered, setHovered] = useState<"cremeria" | "dj" | null>(null);

  return (
    <main className="flex min-h-[100dvh] flex-col md:flex-row overflow-hidden overscroll-none bg-[#030303] relative font-sans text-white selection:bg-white/10">
      <h1 className="sr-only">Portal La Doble TT: Cremería Gourmet y DJ Gildardo González en Tizayuca</h1>

      {/* =========================================
          LADO 1: CREMERÍA (Gourmet - Warm Cream & Luxury Copper/Gold)
          ========================================= */}
      <Link
        href="/cremeria"
        onMouseEnter={() => setHovered("cremeria")}
        onMouseLeave={() => setHovered(null)}
        className={`group relative flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden outline-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          border-b border-white/5 md:border-b-0 md:border-r md:border-white/5
          flex-1
          ${
            hovered === "cremeria"
              ? "md:flex-[1.3] z-10"
              : hovered === "dj"
              ? "md:flex-[0.7] opacity-30 md:grayscale md:scale-[0.98]"
              : "md:flex-1"
          }
        `}
      >
        {/* Background Gradients: Tonos cálidos madera gourmet y cobre obscuro */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c120c] via-[#100a06] to-[#030303] z-0 transition-transform duration-1000 ease-out md:group-hover:scale-105"></div>

        {/* Resplandor dorado/cálido de fondo en Hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.22)_0%,_transparent_60%)] opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none"></div>

        {/* Textura de fondo gourmet sutil */}
        <div className="absolute inset-0 bg-[url('/hero-tt.png')] bg-cover bg-center opacity-[0.06] mix-blend-screen md:group-hover:opacity-[0.12] transition-opacity duration-700 z-0 pointer-events-none"></div>

        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center text-center transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] md:group-hover:-translate-y-6">
          
          {/* Contenedor del Logotipo Real con Anillo Dorado de Cristal */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out
            md:group-hover:shadow-[0_20px_45px_rgba(212,175,55,0.35)] md:group-hover:scale-105 md:group-hover:bg-[#251810]/40 md:group-hover:border-[#D4AF37]/75"
          >
            <div className="relative w-[78%] h-[78%] rounded-full overflow-hidden flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="La Doble TT Gourmet Logo" 
                fill
                className="object-contain p-1" 
              />
            </div>
          </div>

          {/* Textos Informativos */}
          <h2 className="text-4.5xl md:text-6.5xl font-black tracking-tighter mb-1 transition-all duration-500 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-white md:group-hover:via-[#F5E296] md:group-hover:to-[#D4AF37]">
            La Doble TT
          </h2>
          <span className="text-sm md:text-base text-[#D4AF37] font-black tracking-[0.4em] uppercase mb-4 transition-colors duration-500">
            Gourmet
          </span>
          <p className="text-xs md:text-sm text-amber-200/50 tracking-widest uppercase font-semibold mb-8 max-w-[280px] md:group-hover:text-amber-100/80 transition-colors duration-500">
            Quesos Artesanales • Carnes Frías • Abarrotes
          </p>

          {/* Botón de Entrada */}
          <div className="overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-white/10 to-white/5 md:group-hover:from-[#D4AF37] md:group-hover:to-amber-500">
            <p className="text-[10px] md:text-xs font-black px-8 py-3.5 uppercase tracking-[0.2em] bg-black/80 backdrop-blur-md text-white/80 transition-all duration-500 md:group-hover:bg-transparent md:group-hover:text-white md:group-hover:tracking-[0.25em]">
              Entrar a Cremería
            </p>
          </div>
        </div>
      </Link>

      {/* =========================================
          LADO 2: DJ (Eventos)
          ========================================= */}
      <Link
        href="/dj"
        onMouseEnter={() => setHovered("dj")}
        onMouseLeave={() => setHovered(null)}
        className={`group relative flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden outline-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          flex-1
          ${
            hovered === "dj"
              ? "md:flex-[1.3] z-10"
              : hovered === "cremeria"
              ? "md:flex-[0.7] opacity-30 md:grayscale md:scale-[0.98]"
              : "md:flex-1"
          }
        `}
      >
        {/* Background Base */}
        <div className="absolute inset-0 bg-[#030303] z-0">
          <div className="absolute inset-0 bg-[url('/Dj-Portada.jpeg')] bg-cover bg-center opacity-25 transition-all duration-1000 ease-out md:group-hover:scale-105 grayscale md:group-hover:grayscale-0 md:group-hover:opacity-40 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#1a0404]/95 via-[#0e0303]/90 to-[#030303]/95 pointer-events-none"></div>
        </div>

        {/* Resplandor rojo/neón de fondo en Hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.12)_0%,_transparent_60%)] opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none"></div>

        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center text-center transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] md:group-hover:-translate-y-6">
          
          {/* Vinilo SVG que gira interactivamente en Hover */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out
            md:group-hover:shadow-[0_20px_45px_rgba(239,68,68,0.25)] md:group-hover:scale-105 md:group-hover:bg-[#1a0505]/40 md:group-hover:border-red-500/50"
          >
            <svg 
              className="w-14 h-14 md:w-20 md:h-20 text-red-600 transition-all duration-500 animate-[spin_6s_linear_infinite] md:group-hover:animate-[spin_1.5s_linear_infinite]" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="10" fill="black" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2,2" />
              <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1,1" />
              <circle cx="12" cy="12" r="2.8" fill="currentColor" />
              <circle cx="12" cy="12" r="0.8" fill="black" />
            </svg>
          </div>

          {/* Textos Informativos */}
          <h2 className="text-4.5xl md:text-6.5xl font-black tracking-tighter mb-1 transition-all duration-500 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-white md:group-hover:via-red-200 md:group-hover:to-red-500">
            DJ Gildardo
          </h2>
          <span className="text-sm md:text-base text-red-500 font-black tracking-[0.4em] uppercase mb-4 transition-colors duration-500">
            Eventos
          </span>
          <p className="text-xs md:text-sm text-red-200/50 tracking-widest uppercase font-semibold mb-8 max-w-[280px] md:group-hover:text-red-200/75 transition-colors duration-500">
            Audio Profesional • Iluminación Led • Cabinas
          </p>

          {/* Botón de Entrada */}
          <div className="overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-white/10 to-white/5 md:group-hover:from-red-600 md:group-hover:to-red-400">
            <p className="text-[10px] md:text-xs font-black px-8 py-3.5 uppercase tracking-[0.2em] bg-black/80 backdrop-blur-md text-white/80 transition-all duration-500 md:group-hover:bg-transparent md:group-hover:text-white md:group-hover:tracking-[0.25em]">
              Ver Paquetes
            </p>
          </div>
        </div>
      </Link>

      {/* =========================================
          DIVISOR CENTRAL REACTIVO (Pill Medallion)
          ========================================= */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none flex items-center justify-center transition-all duration-700">
        <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full border flex items-center justify-center font-black tracking-widest text-xs md:text-base transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${
            hovered === "cremeria"
              ? "border-[#D4AF37] bg-[#FAF8F5] text-[#1B2B4A] shadow-[0_0_35px_rgba(212,175,55,0.65)] scale-110 rotate-12"
              : hovered === "dj"
              ? "border-red-600 bg-[#050505] text-red-500 shadow-[0_0_35px_rgba(220,38,38,0.65)] scale-110 -rotate-12"
              : "border-white/10 bg-[#050505]/95 text-white/55 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          }
        `}>
          TT
        </div>
      </div>

    </main>
  );
}
