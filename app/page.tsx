"use client";
import { useState } from "react";
import Link from "next/link";
import { Store, Music } from "lucide-react";

export default function Home() {
  const [hovered, setHovered] = useState<"cremeria" | "dj" | null>(null);

  return (
    <main className="flex min-h-[100dvh] flex-col md:flex-row overflow-hidden overscroll-none bg-[#050505] relative font-sans text-white selection:bg-white/20">

      {/* =========================================
          LADO 1: CREMERÍA (Gourmet)
          ========================================= */}
      <Link
        href="/cremeria"
        onMouseEnter={() => setHovered("cremeria")}
        onMouseLeave={() => setHovered(null)}
        className={`group relative flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden outline-none transition-all duration-700 ease-out
          border-b border-white/5 md:border-b-0 md:border-r
          flex-1
          ${
            hovered === "cremeria"
              ? "md:flex-[1.4] z-10"
              : hovered === "dj"
              ? "md:flex-[0.6] opacity-40 md:grayscale-[60%]"
              : "md:flex-1"
          }
        `}
      >
        {/* Background Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#121b36] to-[#050505] z-0 transition-transform duration-1000 md:group-hover:scale-105"></div>

        {/* Glow Hover (Optimizado sin filtro blur para máxima fluidez) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_60%)] opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none"></div>

        {/* Texture */}
        <div className="absolute inset-0 bg-[url('/hero-tt.png')] bg-cover bg-center opacity-10 mix-blend-screen md:group-hover:opacity-20 transition-opacity duration-700 z-0 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center transform transition-transform duration-700 md:group-hover:-translate-y-4">
          {/* Icon */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] md:group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] md:group-hover:scale-110 md:group-hover:bg-white/5 md:group-hover:border-blue-500/30 transition-all duration-500">
            <Store className="w-10 h-10 md:w-14 md:h-14 text-blue-400 md:group-hover:text-blue-300 transition-colors duration-500" strokeWidth={1.5} />
          </div>

          {/* Text */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-white md:group-hover:to-blue-200 transition-all duration-500">
            La Doble TT
          </h1>
          <span className="text-lg md:text-2xl text-blue-200/60 font-light tracking-[0.3em] uppercase mb-8 md:group-hover:text-blue-200/90 transition-colors duration-500">
            Gourmet
          </span>

          {/* Button */}
          <div className="overflow-hidden rounded-full">
            <p className="text-[10px] md:text-xs font-bold px-8 py-3 uppercase tracking-widest bg-white/5 border border-white/10 backdrop-blur-md text-white/70 transition-all duration-500 md:group-hover:bg-blue-600 md:group-hover:text-white md:group-hover:border-blue-500 md:group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
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
        className={`group relative flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden outline-none transition-all duration-700 ease-out
          flex-1
          ${
            hovered === "dj"
              ? "md:flex-[1.4] z-10"
              : hovered === "cremeria"
              ? "md:flex-[0.6] opacity-40 md:grayscale-[60%]"
              : "md:flex-1"
          }
        `}
      >
        {/* Background Base */}
        <div className="absolute inset-0 bg-[#050505] z-0">
          <div className="absolute inset-0 bg-[url('/Dj-Portada.jpeg')] bg-cover bg-center opacity-30 transition-all duration-1000 md:group-hover:scale-105 grayscale md:group-hover:grayscale-0 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#140505]/95 via-[#1a0a0a]/90 to-[#050505]/95 pointer-events-none"></div>
        </div>

        {/* Glow Hover (Optimizado sin filtro blur para máxima fluidez) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15)_0%,_transparent_60%)] opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center transform transition-transform duration-700 md:group-hover:-translate-y-4">
          {/* Icon */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] md:group-hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] md:group-hover:scale-110 md:group-hover:bg-white/5 md:group-hover:border-red-500/30 transition-all duration-500">
            <Music className="w-10 h-10 md:w-14 md:h-14 text-red-500 md:group-hover:text-red-400 transition-colors duration-500" strokeWidth={1.5} />
          </div>

          {/* Text */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-white md:group-hover:to-red-200 transition-all duration-500">
            DJ Gildardo
          </h1>
          <span className="text-lg md:text-2xl text-red-200/60 font-light tracking-[0.3em] uppercase mb-8 md:group-hover:text-red-200/90 transition-colors duration-500">
            Eventos
          </span>

          {/* Button */}
          <div className="overflow-hidden rounded-full">
            <p className="text-[10px] md:text-xs font-bold px-8 py-3 uppercase tracking-widest bg-white/5 border border-white/10 backdrop-blur-md text-white/70 transition-all duration-500 md:group-hover:bg-red-600 md:group-hover:text-white md:group-hover:border-red-500 md:group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              Ver Paquetes
            </p>
          </div>
        </div>
      </Link>

      {/* =========================================
          DIVISOR CENTRAL (Pill badge)
          ========================================= */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none flex items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] text-white/50 text-xs md:text-sm font-black tracking-widest uppercase transition-transform duration-700 md:hover:scale-110">
          TT
        </div>
      </div>

    </main>
  );
}
