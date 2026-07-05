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

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16">
          {/* WhatsApp */}
          <a href="https://wa.me/525566959722?text=Hola%20DJ%20Gildardo%2C%20quisiera%20informaci%C3%B3n%20sobre%20tus%20paquetes%20de%20audio." target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:border-red-600/50 px-6 py-3.5 rounded-full text-white font-bold transition-all hover:bg-white/10 flex items-center gap-3 select-none">
            <svg className="w-5 h-5 text-[#25D366] fill-current animate-pulse" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.379 2.015 13.907 1 11.998 1 6.561 1 2.135 5.373 2.131 10.803c-.002 1.688.455 3.336 1.32 4.79l-.101.364-1.007 3.679 3.771-.983.344-.218zm11.303-7.243c-.302-.15-1.786-.881-2.056-.979-.27-.097-.467-.147-.662.15-.196.297-.757.979-.928 1.176-.171.197-.341.221-.643.071-.302-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.783-1.676-2.083-.176-.3-.019-.462.131-.611.135-.134.302-.35.453-.525.151-.175.201-.3.302-.5.101-.2.05-.375-.025-.525-.075-.15-.662-1.596-.91-2.189-.24-.575-.487-.497-.662-.505-.17-.008-.367-.01-.563-.01-.196 0-.518.073-.789.37-.27.296-1.03 1.006-1.03 2.456 0 1.45 1.055 2.852 1.202 3.053.147.2 2.075 3.167 5.028 4.437.702.302 1.252.482 1.68.617.705.224 1.347.193 1.854.118.565-.084 1.786-.73 2.039-1.434.252-.7.252-1.3.176-1.43-.076-.13-.272-.2-.573-.35z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/djgildardogonzalez" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:border-red-600/50 px-6 py-3.5 rounded-full text-white font-bold transition-all hover:bg-white/10 flex items-center gap-3 select-none">
            <svg className="w-5 h-5 text-[#1877F2] fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
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
