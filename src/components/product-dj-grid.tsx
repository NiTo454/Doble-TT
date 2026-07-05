import { obtenerPaquetesDj } from "@/src/lib/controllers/djController";
import { RadioReceiver, Speaker, Music, Check } from "lucide-react";

const IconosMap = {
  speaker: Speaker,
  receiver: RadioReceiver,
  music: Music,
};

export default async function ProductDjGrid() {
  const paquetes = await obtenerPaquetesDj();

  return (
    <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto font-sans scroll-mt-20 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="text-center mb-20">
        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-4">
          Paquetes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]">Audio & Cabina</span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Equipos profesionales calibrados para hacer vibrar a todos tus invitados.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {paquetes.map((paquete) => {
          const IconComponent = IconosMap[paquete.icono] || Music;
          const whatsappUrl = `https://wa.me/525566959722?text=${encodeURIComponent(paquete.mensajeWhatsApp)}`;

          return (
            <article
              key={paquete.id}
              className={`flex flex-col relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 bg-[#0a0a0a] border cursor-default group
                ${
                  paquete.popular
                    ? "border-red-600/60 shadow-[0_20px_50px_rgba(220,38,38,0.25)] lg:-translate-y-4 animate-border-glow bg-gradient-to-b from-[#160202] to-[#0a0a0a]"
                    : "border-white/5 hover:border-red-600/50 hover:shadow-[0_15px_40px_rgba(220,38,38,0.15)] hover:-translate-y-1"
                }
              `}
            >
              {/* LED Line Accent */}
              <div
                className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent transition-opacity duration-500
                  ${paquete.popular ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
              ></div>

              {/* Console Deck Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500
                    ${
                      paquete.popular
                        ? "bg-red-950/60 border-red-500/40 text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                        : "bg-white/5 border-white/10 text-gray-400 group-hover:text-red-500 group-hover:bg-red-950/20 group-hover:border-red-500/30"
                    }
                  `}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Simulated VU Meter / Equalizer Bars */}
                <div className="flex gap-1 items-end h-7 px-3 py-1 bg-black/40 rounded-lg border border-white/5">
                  <div className="w-1 bg-red-600 rounded-full animate-eq-1"></div>
                  <div className="w-1 bg-red-500 rounded-full animate-eq-2"></div>
                  <div className="w-1 bg-orange-500 rounded-full animate-eq-3"></div>
                  <div className="w-1 bg-yellow-500 rounded-full animate-eq-4"></div>
                </div>
              </div>

              {/* Title & Price */}
              <div className="relative z-10 mb-6">
                {paquete.popular && (
                  <span className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-2 block animate-pulse">
                    ★ RECOMENDADO DJ
                  </span>
                )}
                <h4 className="text-2xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
                  {paquete.titulo}
                </h4>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-black tracking-tight text-white">{paquete.precio}</span>
                  {paquete.precio !== "A cotizar" && (
                    <span className="text-xs text-gray-500 font-medium">MXN</span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">{paquete.aforo}</p>
              </div>

              {/* Console Deck Divider */}
              <div className="w-full h-[1px] bg-white/5 my-4 relative">
                <div className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-red-600/30 border border-red-600/70 -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-4 w-2 h-2 rounded-full bg-red-600/30 border border-red-600/70 -translate-y-1/2"></div>
              </div>

              {/* Items List */}
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                {paquete.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-950/50 border border-red-600/30 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_5px_rgba(220,38,38,0.2)]">
                      <Check className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                    </div>
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Knobs / Faders DJ Console Decor */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto mb-6 pointer-events-none">
                <div className="flex gap-2">
                  {/* Knob 1 */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-black flex items-center justify-center relative rotate-[45deg] shadow-inner">
                      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-[7px] uppercase tracking-widest text-gray-600 font-bold">Bass</span>
                  </div>
                  {/* Knob 2 */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-black flex items-center justify-center relative rotate-[120deg] shadow-inner">
                      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-[7px] uppercase tracking-widest text-gray-600 font-bold">Mid</span>
                  </div>
                  {/* Knob 3 */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-black flex items-center justify-center relative rotate-[210deg] shadow-inner">
                      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-[7px] uppercase tracking-widest text-gray-600 font-bold">Vol</span>
                  </div>
                </div>

                {/* Sound Fader */}
                <div className="flex flex-col items-center gap-1 w-20">
                  <div className="w-full h-1 bg-black border border-white/10 rounded-full relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-3 h-5 bg-gradient-to-b from-red-600 to-red-800 rounded border border-black shadow cursor-pointer flex items-center justify-center">
                      <div className="w-full h-[1px] bg-black"></div>
                    </div>
                  </div>
                  <span className="text-[7px] uppercase tracking-widest text-gray-600 font-bold">Master</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={`w-full text-center py-3.5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 relative z-10 active:scale-95 text-xs
                  ${
                    paquete.popular
                      ? "bg-red-600 text-white hover:bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                      : "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  }
                `}
              >
                {paquete.ctaText}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
