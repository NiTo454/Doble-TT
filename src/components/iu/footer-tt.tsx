import Link from "next/link";
import Image from "next/image";

export default function FooterTT() {
  return (
    <footer className="bg-[#05080f] pt-20 pb-8 px-6 border-t border-white/5 relative overflow-hidden font-sans">

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
              <span className="text-2xl font-black tracking-tighter text-white">
                Gourmet<span className="text-cremeria-red">.</span>
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
            <p className="text-white/60 text-sm leading-relaxed">
              Calle Cima #42,<br />
              Frente al parque y las gradas.
            </p>
            <a
              href="https://wa.me/5215575061530"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cremeria-red hover:text-[#ff5e5e] transition-colors text-sm font-medium w-fit mt-2"
            >
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
