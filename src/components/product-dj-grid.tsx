import { RadioReceiver, Speaker, Music } from "lucide-react";

export default function ProductDjGrid() {
  return (
    <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto font-sans scroll-mt-20 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="text-center mb-20">
        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">Paquetes de Audio</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Encuentra la opción perfecta para hacer vibrar a tus invitados.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Paquete 1 */}
        <article className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-500 flex flex-col group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(220,38,38,0.1)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Speaker className="w-8 h-8 text-white/20 mb-4 group-hover:text-red-500 transition-colors duration-500" />
          <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">Audio Básico</h4>
          <div className="text-3xl font-black text-white mb-2">$6,500</div>
          <p className="text-sm text-gray-500 mb-6">Aforo de 50 a 100 personas.</p>
          <ul className="space-y-4 mb-10 flex-1 text-gray-300 font-light text-sm">
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"><span className="text-red-600 font-bold">✓</span> 5 horas de DJ Versátil</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75"><span className="text-red-600 font-bold">✓</span> Globo salchicha para batucada</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150"><span className="text-red-600 font-bold">✓</span> Equipo de audio e iluminación básica</li>
          </ul>
          <a href="https://wa.me/525566959722?text=Hola,%20me%20interesa%20el%20paquete%20Audio%20Básico" target="_blank" rel="noreferrer" className="w-full text-center py-3 border border-red-600 text-red-600 rounded-full font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]">Cotizar Básico</a>
        </article>

        {/* Paquete 2 */}
        <article className="bg-gradient-to-b from-[#140505] to-[#0a0a0a] border border-red-600/50 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_20px_50px_rgba(220,38,38,0.2)] flex flex-col relative overflow-hidden group">
          {/* Ecualizador animado de fondo */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-600/10 to-transparent opacity-50 group-hover:animate-pulse pointer-events-none"></div>

          <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-5 rounded-bl-2xl shadow-lg">Más Popular</div>
          <RadioReceiver className="w-10 h-10 text-red-500 mb-4 animate-pulse" />
          <h4 className="text-2xl font-black text-red-500 mb-1">Bodas y XV Años</h4>
          <div className="text-4xl font-black text-white mb-2">$26,500</div>
          <p className="text-sm text-gray-400 mb-6">De 200 a 400 personas.</p>
          <ul className="space-y-4 mb-10 flex-1 text-gray-200 font-light text-sm">
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"><span className="text-red-500 font-bold">✓</span> 5 horas de DJ Versátil</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75"><span className="text-red-500 font-bold">✓</span> Pirotecnia</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150"><span className="text-red-500 font-bold">✓</span> Souvenirs de animación: globo salchicha, corbatas</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-200"><span className="text-red-500 font-bold">✓</span> Sombreros y anteojos</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-300"><span className="text-red-500 font-bold">✓</span> Audio profesional completo</li>
          </ul>
          <a href="https://wa.me/525566959722?text=Hola,%20me%20interesa%20el%20paquete%20Bodas%20y%20XV%20Años" target="_blank" rel="noreferrer" className="w-full relative z-10 text-center py-4 bg-red-600 text-white rounded-full font-bold uppercase tracking-wider hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-105">Cotizar Paquete</a>
        </article>

        {/* Paquete 3 */}
        <article className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-500 flex flex-col group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(220,38,38,0.1)]">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Music className="w-8 h-8 text-white/20 mb-4 group-hover:text-red-500 transition-colors duration-500" />
          <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">Eventos (VIP)</h4>
          <div className="text-2xl font-black text-white mb-2">A cotizar</div>
          <p className="text-sm text-gray-500 mb-6">Acomodamos un equipo premium según aforo.</p>
          <ul className="space-y-4 mb-10 flex-1 text-gray-300 font-light text-sm">
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"><span className="text-red-600 font-bold">✓</span> Presupuesto totalmente personalizado</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75"><span className="text-red-600 font-bold">✓</span> Análisis del espacio para el mejor audio</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150"><span className="text-red-600 font-bold">✓</span> Trato exclusivo y extras a elección</li>
            <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-200"><span className="text-red-600 font-bold">✓</span> DJ Versátil nivel premium</li>
          </ul>
          <a href="https://wa.me/525566959722?text=Hola,%20me%20interesa%20cotizar%20un%20evento%20VIP" target="_blank" rel="noreferrer" className="w-full text-center py-3 border border-red-600 text-red-600 rounded-full font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]">Llamar para Presupuesto</a>
        </article>
      </div>
    </section>
  );
}
