"use client";
import Link from "next/link";
import Image from "next/image";

export default function FooterTT() {
  return (
    <footer className="bg-[#1B2B4A] pt-20 pb-8 px-6 border-t border-white/5 relative overflow-hidden font-sans">

      {/* Sutiles luces de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cremeria-red/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cremeria-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

          {/* Columna 1: Marca con tu Logo */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image
                  src="/logo.png"
                  alt="Logo La Doble TT Gourmet"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              {/* Si tu logo ya incluye el nombre, puedes ocultar o borrar el siguiente <span> */}
              <span className="text-3xl font-black tracking-tighter text-white">
                Gourmet<span className="text-cremeria-red animate-pulse">.</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
              Tradición, calidad y el mejor servicio. Los esperamos como siempre con la mejor actitud para llevar lo mejor a tu mesa.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Explorar</h3>
            <Link href="#productos" className="text-white/60 hover:text-white transition-colors text-sm w-fit">Productos</Link>
            <Link href="#conocenos" className="text-white/60 hover:text-white transition-colors text-sm w-fit">Conócenos</Link>
          </div>

          {/* Columna 3: Contacto */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Visítanos</h3>
            <div className="flex items-start gap-3.5 text-white/60 text-sm leading-relaxed justify-center md:justify-start">
              <svg className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>
                Calle Cima #42,<br />
                Frente al parque y las gradas.
              </p>
            </div>
            <a
              href="https://wa.me/5215575061530"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5e5e] hover:text-white transition-colors text-sm font-semibold w-fit mt-2 flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.379 2.015 13.907 1 11.998 1 6.561 1 2.135 5.373 2.131 10.803c-.002 1.688.455 3.336 1.32 4.79l-.101.364-1.007 3.679 3.771-.983.344-.218zm11.303-7.243c-.302-.15-1.786-.881-2.056-.979-.27-.097-.467-.147-.662.15-.196.297-.757.979-.928 1.176-.171.197-.341.221-.643.071-.302-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.783-1.676-2.083-.176-.3-.019-.462.131-.611.135-.134.302-.35.453-.525.151-.175.201-.3.302-.5.101-.2.05-.375-.025-.525-.075-.15-.662-1.596-.91-2.189-.24-.575-.487-.497-.662-.505-.17-.008-.367-.01-.563-.01-.196 0-.518.073-.789.37-.27.296-1.03 1.006-1.03 2.456 0 1.45 1.055 2.852 1.202 3.053.147.2 2.075 3.167 5.028 4.437.702.302 1.252.482 1.68.617.705.224 1.347.193 1.854.118.565-.084 1.786-.73 2.039-1.434.252-.7.252-1.3.176-1.43-.076-.13-.272-.2-.573-.35z" />
              </svg>
              WhatsApp: 55 7506 1530
            </a>
          </div>

        </div>

        {/* Separador */}
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        {/* Bottom: Copyright & Firma */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-white/40 text-[10px] md:text-xs tracking-wider uppercase font-medium">
            © {new Date().getFullYear()} La Doble TT Gourmet.
          </p>

          <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium mt-6 md:mt-0">
            Creado por{" "}
            <a
              href="https://sintaxis-lab-xuse.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-bold text-white/60 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#E61C8C] hover:to-[#FF5C33] transition-all duration-300 group"
            >
              Syntaxis Lab
              <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gradient-to-r from-[#E61C8C] to-[#FF5C33] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
