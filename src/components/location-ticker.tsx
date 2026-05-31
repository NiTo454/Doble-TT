import { MapPin } from "lucide-react";

export default function LocationTicker() {
  return (
    <div className="relative z-50 bg-[#05080f] border-b border-white/5 overflow-hidden group cursor-default">

      {/* 1. Línea LED superior (Acento premium que brilla al hacer hover) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cremeria-red/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* 2. Glow ambiental central para matar el color sólido */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cremeria-navy/30 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto py-2.5 px-4 flex justify-center items-center gap-2 md:gap-3 text-center">

        {/* 3. Icono con resplandor (Glow) encapsulado y micro-interacción */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-cremeria-red/30 blur-[6px] rounded-full group-hover:bg-cremeria-red/60 transition-colors duration-500 animate-pulse"></div>
          <MapPin
            className="w-3.5 h-3.5 md:w-4 md:h-4 text-cremeria-red relative z-10 transform transition-transform duration-500 group-hover:-translate-y-[2px]"
            strokeWidth={2.5}
          />
        </div>

        {/* 4. Tipografía Editorial (Contraste de jerarquías y tracking amplio) */}
        <p className="text-[9px] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase text-cremeria-cream/70 transition-colors duration-500 group-hover:text-cremeria-cream/90 flex items-center flex-wrap justify-center">
          Nueva Ubicación

          {/* Separador elegante */}
          <span className="mx-2 md:mx-3 text-white/20">|</span>

          {/* Dato principal resaltado con un ligero Drop Shadow */}
          <span className="font-bold text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            Calle Cima #42
          </span>

          {/* Texto secundario (Oculto en móviles muy pequeños, diseño sutil en minúsculas/normal) */}
          <span className="hidden sm:inline text-white/40 tracking-wider ml-2 normal-case font-light">
            (frente al parque y las gradas)
          </span>
        </p>

      </div>
    </div>
  );
}
