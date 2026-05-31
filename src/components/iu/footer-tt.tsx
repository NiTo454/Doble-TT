export default function FooterTT() {
  return (
    <footer className="bg-cremeria-navy text-white py-16 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-black text-cremeria-cream mb-2">La Doble TT Gourmet</h3>
          <p className="text-white/70">Calle Cima #42, Tizayuca, Hidalgo.</p>
        </div>
        <div className="flex gap-6">
          {/* Aquí podrías agregar íconos de redes sociales si tienes */}
          <span className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-cremeria-blue transition-colors cursor-pointer">FB</span>
          <span className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-cremeria-red transition-colors cursor-pointer">IG</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm flex flex-col gap-2">
        <p>© {new Date().getFullYear()} La Doble TT Gourmet. Todos los derechos reservados.</p>
        <p className="text-xs text-white/40 tracking-wide mt-2">
          Creado por <span className="font-bold text-white/70 hover:text-cremeria-cream transition-colors cursor-pointer">Sintaxis Labs</span> 🚀
        </p>
      </div>
    </footer>
  );
}
