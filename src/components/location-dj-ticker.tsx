export default function LocationDjTicker() {
  const words = [
    "SERVICIO EN TIZAYUCA Y ZONAS ALEDAÑAS",
    "★",
    "DJ GILDARDO GONZÁLEZ",
    "★",
    "BODAS • XV AÑOS • GRADUACIONES • EVENTOS",
    "★",
    "MÚSICA E ILUMINACIÓN PREMIUM",
    "★"
  ];
  
  // Duplicamos el array para que el scroll infinito sea fluido y no se corte
  const repeatArray = Array.from({ length: 4 }).flatMap(() => words);

  return (
    <div className="relative z-40 bg-[#080808] border-y border-red-950/40 py-3.5 overflow-hidden group cursor-default shadow-[0_0_20px_rgba(220,38,38,0.05)]">
      {/* Líneas LED superior e inferior */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

      <div className="w-full flex overflow-hidden">
        {/* Contenedor con animación de marquesina fluida */}
        <div className="flex gap-16 whitespace-nowrap animate-marquee select-none">
          {repeatArray.map((word, index) => {
            const isStar = word === "★";
            return (
              <span
                key={index}
                className={`text-[10px] md:text-xs font-black tracking-[0.25em] uppercase flex items-center gap-2 ${
                  isStar
                    ? "text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]"
                    : "text-gray-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.05)]"
                }`}
              >
                {!isStar && <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-1 animate-pulse"></span>}
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
