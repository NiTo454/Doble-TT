import { Speaker } from "lucide-react";

export default function LocationDjTicker() {
  return (
    <div className="relative z-40 bg-[#050505] border-y border-white/5 overflow-hidden group cursor-default">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative max-w-7xl mx-auto py-3 px-4 flex justify-center items-center gap-3 text-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-red-600/30 blur-[6px] rounded-full group-hover:bg-red-600/60 transition-colors duration-500 animate-pulse"></div>
          <Speaker className="w-4 h-4 text-red-600 relative z-10 transform transition-transform duration-500 group-hover:-translate-y-[2px]" strokeWidth={2} />
        </div>

        <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-gray-400 transition-colors duration-500 group-hover:text-gray-200 flex items-center flex-wrap justify-center">
          Servicio en <span className="mx-2 text-white/20">|</span>
          <span className="font-bold text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            Tizayuca y Zonas Aledañas
          </span>
        </p>
      </div>
    </div>
  );
}
