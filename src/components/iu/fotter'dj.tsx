import { Disc } from "lucide-react";

export default function FooterDj() {
  return (
    <footer id="contacto" className="bg-black py-20 border-t border-red-600/20 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-[0.2em] mb-4 flex items-center justify-center gap-3">
          <Disc className="w-8 h-8 text-red-600 animate-[spin_5s_linear_infinite]" />
          <span>DJ GILDARDO<span className="text-red-600">.</span></span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
          La mejor música, iluminación y el mejor ambiente para que tu fiesta sea todo un éxito garantizado.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a href="https://wa.me/5215575061530" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:border-red-600/50 px-8 py-4 rounded-full text-white font-bold transition-all hover:bg-white/10 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#25D366] animate-pulse"></span>
            WhatsApp: 55 7506 1530
          </a>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
          <p>© {new Date().getFullYear()} La Doble TT / DJ Gildardo.</p>
          <p>Creado por <a href="https://sintaxis-lab-xuse.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors">Syntaxis Lab</a></p>
        </div>
      </div>
    </footer>
  );
}
