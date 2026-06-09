import { Speaker, Disc } from "lucide-react";

export default function LocationDjTicker() {
  return (
    <div className="relative z-40 bg-[#050505] border-y border-white/5 overflow-hidden group cursor-default py-4">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative max-w-7xl mx-auto px-4 flex justify-center items-center gap-4 text-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-red-600/40 blur-[8px] rounded-full group-hover:bg-red-600/80 transition-colors duration-500 animate-pulse"></div>
          <Disc className="w-5 h-5 text-red-500 relative z-10 animate-[spin_3s_linear_infinite]" strokeWidth={2} />
        </div>

        <p className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-gray-400 transition-colors duration-500 group-hover:text-gray-100 flex items-center flex-wrap justify-center">
          Servicio en <span className="mx-3 text-red-600/50">|</span>
          <span className="font-black text-white tracking-widest drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
            Tizayuca y Zonas Aledañas
          </span>
        </p>

        <div className="relative flex items-center justify-center hidden sm:flex">
          <div className="absolute inset-0 bg-red-600/40 blur-[8px] rounded-full group-hover:bg-red-600/80 transition-colors duration-500 animate-[pulse_2s_infinite]"></div>
          <Speaker className="w-5 h-5 text-red-500 relative z-10 animate-[bounce_1s_infinite]" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
