export default function ProductDjGrid() {
  return (
    <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto font-sans scroll-mt-20">
      <div className="text-center mb-20">
        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">Paquetes de Audio</h3>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Encuentra la opción perfecta para hacer vibrar a tus invitados.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-red-600/50 transition-colors duration-500 flex flex-col group">
          <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Básico</h4>
          <p className="text-sm text-gray-500 mb-6">Ideal para fiestas pequeñas y reuniones en casa.</p>
          <ul className="space-y-4 mb-10 flex-1 text-gray-300 font-light text-sm">
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> Audio profesional (2 bocinas)</li>
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> Cabina de DJ iluminada</li>
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> Iluminación rítmica básica</li>
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> 5 horas de música continua</li>
          </ul>
          <a href="https://wa.me/525566959722?text=Hola,%20me%20interesa%20el%20paquete%20Básico%20de%20DJ" target="_blank" rel="noreferrer" className="w-full text-center py-3 border border-red-600 text-red-600 rounded-full font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all">Cotizar Básico</a>
        </article>

        <article className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-red-600/50 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_10px_40px_rgba(220,38,38,0.15)] flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-bl-xl">Más Popular</div>
          <h4 className="text-3xl font-black text-red-500 mb-2">Pro</h4>
          <p className="text-sm text-gray-400 mb-6">El equilibrio perfecto para XV años y bodas.</p>
          <ul className="space-y-4 mb-10 flex-1 text-gray-200 font-light text-sm">
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✓</span> Audio profesional expandido (4 bocinas)</li>
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✓</span> Cabina de DJ Premium</li>
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✓</span> Estructura con iluminación inteligente</li>
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✓</span> Micrófonos inalámbricos</li>
            <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✓</span> 5 horas de música continua</li>
          </ul>
          <a href="https://wa.me/525566959722?text=Hola,%20me%20interesa%20el%20paquete%20Pro%20de%20DJ" target="_blank" rel="noreferrer" className="w-full text-center py-4 bg-red-600 text-white rounded-full font-bold uppercase tracking-wider hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:scale-105">Cotizar Pro</a>
        </article>

        <article className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:border-red-600/50 transition-colors duration-500 flex flex-col group">
          <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Premium</h4>
          <p className="text-sm text-gray-500 mb-6">Experiencia total para eventos exigentes.</p>
          <ul className="space-y-4 mb-10 flex-1 text-gray-300 font-light text-sm">
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> Audio lineal de alta potencia</li>
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> Iluminación robótica programada</li>
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> Chisperos y humo frío</li>
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> Souvenirs de animación</li>
            <li className="flex items-start gap-3"><span className="text-red-600 font-bold">✓</span> 5 horas de música continua</li>
          </ul>
          <a href="https://wa.me/525566959722?text=Hola,%20me%20interesa%20el%20paquete%20Premium%20de%20DJ" target="_blank" rel="noreferrer" className="w-full text-center py-3 border border-red-600 text-red-600 rounded-full font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all">Cotizar Premium</a>
        </article>
      </div>
    </section>
  );
}
