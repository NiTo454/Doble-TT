"use client";
import Image from "next/image";
import { Award, ShieldCheck, FlameKindling } from "lucide-react";

export default function HeroSection() {
  const scrollToProductos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("productos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative w-full bg-[#FAF8F5] pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden flex flex-col items-center touch-manipulation font-sans">
      {/* Luces y Glows dorados/azules muy suaves de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[1100px] h-[350px] md:h-[550px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cremeria-blue/10 via-[#d4af37]/5 to-transparent rounded-full blur-[90px] md:blur-[130px] pointer-events-none z-0 animate-[pulse_7s_ease-in-out_infinite]"></div>

      {/* Grid de líneas muy tenue de fondo para sensación técnica/editorial */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Contenedor de la Imagen con Relación de aspecto corregida para móvil (4/3) */}
      <div className="relative z-10 w-full max-w-[92%] lg:max-w-6xl aspect-[4/3] sm:aspect-square md:aspect-[16/9] rounded-[2.5rem] md:rounded-[4rem] p-1 bg-gradient-to-br from-[#D4AF37] via-cremeria-blue to-[#B8860B] shadow-[0_20px_60px_rgba(27,43,74,0.12)] group border border-slate-200/50 overflow-visible">
        
        {/* Contenedor interno que recorta la foto */}
        <div className="relative w-full h-full rounded-[2.2rem] md:rounded-[3.8rem] overflow-hidden bg-[#0A101C]">
          {/* Imagen para móviles */}
          <Image
            src="/telefono-2tt.jpeg"
            alt="La Doble TT Gourmet Móvil"
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04] md:hidden"
          />

          {/* Imagen para escritorio */}
          <Image
            src="/hero-2tt.jpeg"
            alt="La Doble TT Gourmet Escritorio"
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04] hidden md:block"
          />

          {/* Viñeta oscura en la parte baja */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-10 opacity-90"></div>

          {/* Badge Flotante en la foto */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-black/50 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full flex items-center gap-2 shadow-2xl">
            <span className="flex w-2.5 h-2.5 rounded-full bg-cremeria-red animate-pulse"></span>
            <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Tradición & Sabor
            </span>
          </div>
        </div>

        {/* Insignias Flotantes en 3D (Ocultas en móviles para evitar colisiones visuales) */}
        {/* Insignia 1: Gourmet Selecto */}
        <div 
          className="hidden md:flex absolute -top-4 -left-8 z-30 bg-[#1B2B4A]/95 border border-[#D4AF37]/50 px-4 py-2.5 rounded-2xl items-center gap-2 shadow-[0_10px_30px_rgba(27,43,74,0.15)] animate-float"
          style={{ animationDelay: "0s" }}
        >
          <Award className="w-4 h-4 text-[#D4AF37] animate-bounce" />
          <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-wider">Gourmet Selecto</span>
        </div>

        {/* Insignia 2: 100% Calidad */}
        <div 
          className="hidden md:flex absolute top-1/3 -right-10 z-30 bg-[#1B2B4A]/95 border border-[#D4AF37]/50 px-4 py-2.5 rounded-2xl items-center gap-2 shadow-[0_10px_30px_rgba(27,43,74,0.15)] animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-wider">100% Calidad</span>
        </div>

        {/* Insignia 3: Sabor Original */}
        <div 
          className="hidden md:flex absolute -bottom-4 left-1/3 z-30 bg-[#1B2B4A]/95 border border-cremeria-blue/50 px-4 py-2.5 rounded-2xl items-center gap-2 shadow-[0_10px_30px_rgba(27,43,74,0.15)] animate-float"
          style={{ animationDelay: "3s" }}
        >
          <FlameKindling className="w-4 h-4 text-orange-400" />
          <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-wider">Sabor Original</span>
        </div>
      </div>

      {/* Botón de Acción Gourmet con Alto Contraste */}
      <div className="relative z-20 flex justify-center mt-12 md:mt-16">
        <a
          href="#productos"
          onClick={scrollToProductos}
          className="group relative flex items-center p-2.5 pl-7 md:pl-9 rounded-full bg-white border border-[#D4AF37]/35 shadow-[0_15px_35px_rgba(27,43,74,0.06)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#1B2B4A] hover:border-[#1B2B4A] hover:shadow-[0_20px_45px_rgba(27,43,74,0.18)] active:scale-[0.97]"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
          
          <span className="relative z-10 mr-4 md:mr-6 text-cremeria-navy font-black tracking-[0.2em] uppercase text-[10px] md:text-xs transition-all duration-700 group-hover:tracking-[0.26em] group-hover:text-white">
            Descubre nuestra selección
          </span>

          <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-white shadow-[0_5px_15px_rgba(212,175,55,0.3)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-500 group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </a>
      </div>
    </header>
  );
}
