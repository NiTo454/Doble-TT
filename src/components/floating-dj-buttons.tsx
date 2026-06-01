import Link from "next/link";
import { MessageCircle, Home } from "lucide-react";

export default function FloatingDjButtons() {
  const numeroWhatsApp = "525566959722";
  const mensajeWhatsApp = encodeURIComponent("Hola DJ Gildardo, quisiera información sobre tus paquetes de audio.");

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col gap-4 items-end pointer-events-none">
      <div className="relative group pointer-events-auto">
        <div className="absolute -inset-2 bg-red-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-red-600 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>

        <a href={`https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-red-600 text-white rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.4)] hover:bg-red-500 hover:scale-110 active:scale-95 transition-all duration-500">
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
        </a>
      </div>

      <Link href="/" className="group relative flex items-center gap-2.5 px-5 py-3 md:px-6 md:py-3.5 rounded-full bg-zinc-900/80 backdrop-blur-2xl border border-white/10 text-white shadow-xl hover:bg-zinc-800 hover:border-white/20 hover:-translate-y-1 active:scale-95 transition-all duration-500 pointer-events-auto">
        <Home className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
        <span className="font-bold text-xs md:text-sm tracking-widest uppercase text-white/90 group-hover:text-white transition-colors duration-300">
          La Doble TT
        </span>
      </Link>
    </div>
  );
}
