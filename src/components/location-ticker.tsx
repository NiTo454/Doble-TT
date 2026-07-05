import { MapPin } from "lucide-react";

export default function LocationTicker() {
  const message = [
    "NUEVA UBICACIÓN: CALLE CIMA #42",
    "★",
    "LA DOBLE TT GOURMET",
    "★",
    "FRENTE AL PARQUE Y LAS GRADAS",
    "★",
    "¡TE ESPERAMOS CON LA MEJOR CALIDAD!",
    "★"
  ];

  const repeatArray = Array.from({ length: 4 }).flatMap(() => message);

  return (
    <div className="relative z-40 bg-[#FAF6F0] border-b border-[#D4AF37]/15 py-3.5 overflow-hidden group cursor-default shadow-sm">
      {/* Línea dorada decorativa superior muy tenue */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>

      <div className="w-full flex overflow-hidden">
        {/* Desplazamiento infinito de marquesina gourmet clara */}
        <div className="flex gap-16 whitespace-nowrap animate-marquee select-none">
          {repeatArray.map((word, index) => {
            const isStar = word === "★";
            return (
              <span
                key={index}
                className={`text-[9px] md:text-xs font-black tracking-[0.25em] uppercase flex items-center gap-2 ${
                  isStar
                    ? "text-[#C59B27] drop-shadow-[0_0_4px_rgba(197,155,39,0.3)] animate-pulse"
                    : "text-cremeria-navy/85"
                }`}
              >
                {!isStar && <MapPin className="w-3.5 h-3.5 text-cremeria-red shrink-0" strokeWidth={2.5} />}
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
