export default function HeroDjSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/80 to-[#0a0a0a] z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-zinc-900 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"></div>

      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-20 text-center px-6 flex flex-col items-center mt-16 max-w-4xl mx-auto">
        <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
          Música & Iluminación Profesional
        </span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
          Siente el <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Ritmo</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
          Llevando la mejor energía y sonido a tu evento. Bodas, XV años, graduaciones y eventos corporativos en Tizayuca y alrededores.
        </p>
        <a href="https://wa.me/5215575061530" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          Cotizar mi Evento
        </a>
      </div>
    </section>
  );
}
