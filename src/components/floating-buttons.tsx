import Link from "next/link";
import { MessageCircle, Home } from "lucide-react";

export default function FloatingButtons() {
  const numeroWhatsApp = "5215575061530";
  const mensajeWhatsApp = encodeURIComponent("Hola, quisiera hacer un pedido en La Doble TT Gourmet.");

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col gap-4 items-end pointer-events-none">

      {/* Botón WhatsApp - Aura y Anillo de Pulso
        Usamos pointer-events-auto en los botones para que el contenedor principal no bloquee clics accidentales en la pantalla
      */}
      <div className="relative group pointer-events-auto">
        {/* Aura difuminada constante */}
        <div className="absolute -inset-2 bg-[#25D366] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

        {/* Anillo de pulso (ping) que simula una onda de sonido/notificación */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>

        <a
          href={`https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Haz tu pedido por WhatsApp"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
        </a>
      </div>

      {/* Botón Inicio - Glassmorphism Profundo */}
      <Link
        href="/"
        className="group relative flex items-center gap-2.5 px-5 py-3 md:px-6 md:py-3.5 rounded-full bg-[#05080f]/50 backdrop-blur-2xl border border-white/10 text-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-auto"
      >
        <Home className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
        <span className="font-bold text-xs md:text-sm tracking-widest uppercase text-white/90 group-hover:text-white transition-colors duration-300">
          Inicio
        </span>
      </Link>

    </div>
  );
}
