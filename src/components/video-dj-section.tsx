"use client";

export default function VideoDjSection() {
  return (
    <section id="galeria" className="py-24 bg-[#050505] border-t border-white/5 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">Momentos Inolvidables</h3>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">Un vistazo a la energía, el sonido y la iluminación de nuestros mejores eventos.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative aspect-video bg-[#111] rounded-2xl border border-white/5 overflow-hidden hover:border-red-600/40 transition-colors shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-transparent transition-colors duration-500 cursor-pointer">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
