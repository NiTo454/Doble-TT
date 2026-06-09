"use client";

export default function VideoDjSection() {
  const videos = [
    "/Video-1-dj.mp4",
    "/Video-2-dj.mp4"
  ];

  return (
    <section id="galeria" className="py-24 bg-[#050505] border-t border-white/5 scroll-mt-10 relative overflow-hidden">
      {/* Glow de discoteca */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">
            Momentos <span className="text-red-600">Inolvidables</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">Un vistazo a la energía, el sonido y la iluminación de nuestros mejores eventos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((src, index) => (
            <div key={index} className="group relative aspect-[9/16] sm:aspect-[4/5] md:aspect-video bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden hover:border-red-600/50 transition-all duration-700 shadow-2xl hover:shadow-[0_0_40px_rgba(220,38,38,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
              <video
                src={src}
                className="w-full h-full object-contain sm:object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                controls
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
