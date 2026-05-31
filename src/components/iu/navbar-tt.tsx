"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarTT() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para desplazamiento suave (Smooth Scroll)
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Cierra el menú móvil si está abierto
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Navbar Principal */}
      <nav className="sticky top-0 bg-white/60 backdrop-blur-2xl text-cremeria-navy py-3 px-6 flex justify-center items-center z-50 border-b border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">

          {/* Logo Premium con tu Imagen */}
          <Link href="/" className="group flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <div className="relative w-12 h-12 md:w-14 md:h-14 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-3 group-hover:scale-110 drop-shadow-md group-hover:drop-shadow-[0_10px_20px_rgba(200,30,30,0.2)]">
              <Image
                src="/logo.png"
                alt="Logo La Doble TT Gourmet"
                fill
                sizes="(max-width: 768px) 48px, 56px"
                className="object-contain"
                priority
              />
            </div>
            {/* Si tu logo ya incluye el nombre, puedes ocultar o borrar el siguiente <span> */}
            <span className="hidden sm:block text-2xl md:text-3xl font-black tracking-tighter text-cremeria-navy">
              Gourmet<span className="text-cremeria-red transition-colors duration-300 group-hover:text-cremeria-blue">.</span>
            </span>
          </Link>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-[0.15em]">
            <a
              href="#productos"
              onClick={(e) => scrollToSection(e, "productos")}
              className="relative text-cremeria-navy/70 hover:text-cremeria-navy transition-colors duration-300 group py-2"
            >
              Productos
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cremeria-red to-cremeria-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </a>
            <a
              href="#conocenos"
              onClick={(e) => scrollToSection(e, "conocenos")}
              className="relative text-cremeria-navy/70 hover:text-cremeria-navy transition-colors duration-300 group py-2"
            >
              Conócenos
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cremeria-blue to-cremeria-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </a>

            {/* CTA Button Premium */}
            <a
              href="https://wa.me/5215575061530"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 relative overflow-hidden group bg-cremeria-red text-white px-8 py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_8px_20px_rgba(200,30,30,0.3)] hover:shadow-[0_15px_30px_rgba(200,30,30,0.5)] hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out"></div>
              <span className="relative z-10 tracking-widest">Hacer Pedido</span>
            </a>
          </div>

          {/* Botón Menú Mobile (Hamburguesa animada) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 text-cremeria-navy p-2 bg-white/50 backdrop-blur-md rounded-xl border border-white/40 shadow-sm hover:bg-white/80 transition-all duration-300 active:scale-95"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
            </div>
          </button>

        </div>
      </nav>

      {/* Menú Desplegable Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className={`flex flex-col items-center gap-8 transition-all duration-700 delay-100 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <a
            href="#productos"
            onClick={(e) => scrollToSection(e, "productos")}
            className="text-3xl font-black text-cremeria-navy uppercase tracking-widest hover:text-cremeria-red transition-colors"
          >
            Productos
          </a>
          <a
            href="#conocenos"
            onClick={(e) => scrollToSection(e, "conocenos")}
            className="text-3xl font-black text-cremeria-navy uppercase tracking-widest hover:text-cremeria-blue transition-colors"
          >
            Conócenos
          </a>

          <a
            href="https://wa.me/5215575061530"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 relative overflow-hidden group bg-cremeria-red text-white px-10 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(200,30,30,0.4)] active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Hacer Pedido</span>
          </a>
        </div>
      </div>
    </>
  );
}
