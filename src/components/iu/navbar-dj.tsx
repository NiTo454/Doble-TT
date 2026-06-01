"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavbarDj() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-red-600/30 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/dj" className="text-xl md:text-2xl font-black tracking-widest text-white group" onClick={() => setIsMenuOpen(false)}>
            DJ GILDARDO<span className="text-red-600 transition-colors group-hover:text-white">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.15em]">
            <a href="#servicios" onClick={(e) => scrollToSection(e, "servicios")} className="hover:text-red-600 transition-colors text-white/80">Paquetes</a>
            <a href="#galeria" onClick={(e) => scrollToSection(e, "galeria")} className="hover:text-red-600 transition-colors text-white/80">Galería</a>
            <a href="#contacto" onClick={(e) => scrollToSection(e, "contacto")} className="hover:text-red-600 transition-colors text-white/80">Contacto</a>
            <a href="https://wa.me/525566959722" target="_blank" rel="noopener noreferrer" className="ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              Cotizar
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden relative z-50 text-white p-2" aria-label="Toggle Menu">
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
            </div>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`flex flex-col items-center gap-8 transition-all duration-700 delay-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <a href="#servicios" onClick={(e) => scrollToSection(e, "servicios")} className="text-2xl font-black text-white uppercase tracking-widest hover:text-red-600">Paquetes</a>
          <a href="#galeria" onClick={(e) => scrollToSection(e, "galeria")} className="text-2xl font-black text-white uppercase tracking-widest hover:text-red-600">Galería</a>
          <a href="#contacto" onClick={(e) => scrollToSection(e, "contacto")} className="text-2xl font-black text-white uppercase tracking-widest hover:text-red-600">Contacto</a>
        </div>
      </div>
    </>
  );
}
