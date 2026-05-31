"use client";
import Image from "next/image";

export default function HeroSection() {
  const scrollToProductos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("productos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative w-full bg-[#0A101C] pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden flex flex-col items-center touch-manipulation font-sans">

      {/* Glow Dinámico de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[1000px] h-[300px] md:h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cremeria-blue/20 via-cremeria-blue/5 to-transparent rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 animate-[pulse_6s_ease-in-out_infinite]"></div>

      {/*
        EL FIX PRINCIPAL:
        Quitamos las alturas fijas (h-vh). Ahora usamos 'aspect-[3/4]' para móvil
        y 'aspect-[16/9]' para escritorio. Así la caja toma la forma exacta de tus fotos.
      */}
      <div className="relative z-10 w-full max-w-[92%] lg:max-w-6xl aspect-[3/4] sm:aspect-square md:aspect-[16/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] group border border-white/10 bg-[#0A101C]">

        {/* Imagen para móviles - Usamos object-cover para rellenar todo sin dejar bordes */}
        <Image
          src="/telefono-2tt.jpeg"
          alt="La Doble TT Gourmet Móvil"
          fill
          priority
          className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] md:hidden"
        />

        {/* Imagen para escritorio - Igual, object-cover rellena todo el espacio */}
        <Image
          src="/hero-2tt.jpeg"
          alt="La Doble TT Gourmet Escritorio"
          fill
          priority
          className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] hidden md:block"
        />

        {/* Viñeta sutil en la parte baja para asegurar que el Badge siempre se lea bien */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10 opacity-80"></div>

        {/* Badge Flotante (Ahora siempre estará posicionado sobre la foto) */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-1">
          <span className="flex w-2 h-2 rounded-full bg-cremeria-red animate-pulse"></span>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase drop-shadow-md">
            Calidad Artesanal
          </span>
        </div>
      </div>

      {/* Botón de Acción */}
      <div className="relative z-20 flex justify-center mt-10 md:mt-14">
        <a
          href="#productos"
          onClick={scrollToProductos}
          className="group relative flex items-center p-2 pl-6 md:pl-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-white/10 hover:border-cremeria-red/40 hover:shadow-[0_0_40px_rgba(200,30,30,0.25)] active:scale-[0.97]"
        >
          <span className="relative z-10 mr-4 md:mr-6 text-white font-medium tracking-[0.15em] uppercase text-[10px] md:text-xs transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:tracking-[0.25em] drop-shadow-sm">
            Descubre nuestra selección
          </span>

          <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-cremeria-red text-white shadow-[0_5px_15px_rgba(200,30,30,0.4)] transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:bg-[#e62020]">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
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
