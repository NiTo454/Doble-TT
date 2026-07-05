import Link from "next/link";
import { Home } from "lucide-react";

export default function FloatingDjButtons() {
  const numeroWhatsApp = "525566959722";
  const mensajeWhatsApp = encodeURIComponent("Hola DJ Gildardo, quisiera información sobre tus paquetes de audio.");

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col gap-4 items-end pointer-events-none">
      <div className="relative group pointer-events-auto">
        <div className="absolute -inset-2 bg-red-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-red-600 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40"></div>

        <a href={`https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-red-700 to-red-500 text-white rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.5)] hover:to-red-400 hover:scale-110 active:scale-95 transition-all duration-500">
          <svg className="w-6 h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.379 2.015 13.907 1 11.998 1 6.561 1 2.135 5.373 2.131 10.803c-.002 1.688.455 3.336 1.32 4.79l-.101.364-1.007 3.679 3.771-.983.344-.218zm11.303-7.243c-.302-.15-1.786-.881-2.056-.979-.27-.097-.467-.147-.662.15-.196.297-.757.979-.928 1.176-.171.197-.341.221-.643.071-.302-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.783-1.676-2.083-.176-.3-.019-.462.131-.611.135-.134.302-.35.453-.525.151-.175.201-.3.302-.5.101-.2.05-.375-.025-.525-.075-.15-.662-1.596-.91-2.189-.24-.575-.487-.497-.662-.505-.17-.008-.367-.01-.563-.01-.196 0-.518.073-.789.37-.27.296-1.03 1.006-1.03 2.456 0 1.45 1.055 2.852 1.202 3.053.147.2 2.075 3.167 5.028 4.437.702.302 1.252.482 1.68.617.705.224 1.347.193 1.854.118.565-.084 1.786-.73 2.039-1.434.252-.7.252-1.3.176-1.43-.076-.13-.272-.2-.573-.35z" />
          </svg>
        </a>
      </div>

      <Link href="/" className="group relative flex items-center gap-2.5 px-5 py-3 md:px-6 md:py-3.5 rounded-full bg-[#050505]/80 backdrop-blur-2xl border border-red-600/20 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-red-600/40 hover:-translate-y-1 active:scale-95 transition-all duration-500 pointer-events-auto">
        <Home className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
        <span className="font-bold text-xs md:text-sm tracking-widest uppercase text-white/90 group-hover:text-white transition-colors duration-300">
          La Doble TT
        </span>
      </Link>
    </div>
  );
}
