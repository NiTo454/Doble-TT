import Link from "next/link";
import Image from "next/image";
import NavbarTT from "@/src/components/iu/navbar-tt";
import FooterTT from "@/src/components/iu/footer-tt";
import { obtenerCategoriasCremeria } from "@/src/lib/controllers/cremeriaController";

// Diccionario de iconos SVG limpios para cada categoría (reemplaza los emojis del modelo)
const IconosCategoria: Record<string, React.ReactNode> = {
  carnes: (
    <svg className="w-10 h-10 text-cremeria-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  lacteos: (
    <svg className="w-10 h-10 text-cremeria-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  quesos: (
    <svg className="w-10 h-10 text-cremeria-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
  ),
  abarrotes: (
    <svg className="w-10 h-10 text-cremeria-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  )
};

export default async function CremeriaPage() {
  const categorias = await obtenerCategoriasCremeria();

  // El número de WhatsApp ya formateado correctamente
  const numeroWhatsApp = "5215575061530";
  const mensajeWhatsApp = encodeURIComponent("Hola, quisiera hacer un pedido en La Doble TT Gourmet.");

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-cremeria-navy font-sans overflow-x-hidden selection:bg-cremeria-red selection:text-white relative">

      {/* Luces de fondo (Blobs) para quitar lo plano */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cremeria-cream rounded-full mix-blend-multiply filter blur-[120px] opacity-60 z-0 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cremeria-blue/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 z-0 pointer-events-none"></div>

      {/* 1. Ticker de Nueva Ubicación (Diseño estático y elegante) */}
      <div className="bg-gradient-to-r from-cremeria-red via-[#8a2223] to-cremeria-red text-white py-2.5 px-4 shadow-[0_2px_10px_rgba(168,44,45,0.4)] relative z-40">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-3 text-center">
          <svg className="w-5 h-5 hidden md:block animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p className="font-semibold tracking-wide text-xs md:text-sm uppercase tracking-wider">
            ✨ Nueva Ubicación: Calle Cima #42, frente al parque y las gradas. ✨
          </p>
        </div>
      </div>

      {/* 2. Navbar (Simple y elegante) */}
      <NavbarTT />

      {/* 3. Hero Section con Imagen de Fondo */}
      <header className="relative pt-40 pb-48 px-6 text-center border-b-[8px] border-cremeria-navy flex flex-col items-center justify-center overflow-hidden">

        {/* Image Background */}
        <Image
          src="/hero-tt.png"
          alt="Fondo Hero Doble TT"
          fill
          priority
          className="object-cover object-center z-0 scale-100 md:scale-105 animate-[pulse_10s_ease-in-out_infinite] origin-center"
        />

        {/* Capas superpuestas (Overlay) para oscurecer y dar tintes azules, para asegurar legibilidad */}
        <div className="absolute inset-0 bg-[#0A101C]/60 mix-blend-multiply z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cremeria-blue/40 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cremeria-navy/90 via-transparent to-transparent z-0"></div>

        {/* Badges Flotantes Decorativos (Premium touch) */}
        <div className="absolute top-32 left-10 md:left-20 bg-white/10 backdrop-blur-md border border-white/20 text-white py-2 px-6 rounded-full font-bold tracking-widest shadow-2xl animate-[bounce_4s_infinite] hidden lg:block z-10 text-sm">
          ✨ 100% ARTESANAL
        </div>
        <div className="absolute bottom-32 right-10 md:right-20 bg-cremeria-red/80 backdrop-blur-md border border-white/20 text-white py-2 px-6 rounded-full font-bold tracking-widest shadow-2xl animate-[bounce_5s_infinite] hidden lg:block z-10 text-sm">
          🧀 CALIDAD PREMIUM
        </div>

        {/* Contenido principal del Hero */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl font-black text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] mb-8 tracking-tighter uppercase leading-tight">
          La Doble TT <span className="block text-4xl md:text-6xl mt-2 text-cremeria-cream drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold tracking-widest">Gourmet</span>
          </h1>

        <div className="bg-white/10 backdrop-blur-xl border border-white/30 py-8 px-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 hover:bg-white/20 hover:scale-105">
          <p className="text-lg md:text-2xl text-white font-medium leading-relaxed drop-shadow-md">
              Los esperamos como siempre con la mejor actitud y como se merecen <span className="text-cremeria-cream font-bold">mis chulas y mis chulos</span>. 😍
            </p>
          </div>
        </div>
      </header>

      {/* 4. Grid de Productos */}
      <main id="productos" className="max-w-7xl mx-auto py-24 px-6 md:px-12 relative z-20 scroll-mt-20">
        <div className="text-center mb-20">
          <p className="text-cremeria-red font-bold tracking-[0.3em] uppercase mb-4 text-sm">Lo mejor para tu mesa</p>
          <h2 className="text-4xl md:text-6xl font-black text-cremeria-navy uppercase tracking-tighter">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-cremeria-red to-cremeria-blue">Selección</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categorias.map((categoria, index) => (
            <article
              key={categoria.id}
              className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(27,43,74,0.05)] border border-gray-100/50 hover:border-cremeria-blue/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(58,158,186,0.15)] hover:-translate-y-3 group relative overflow-hidden flex flex-col items-center"
            >
              {/* Número de fondo decorativo */}
              <span className="absolute -bottom-4 -right-2 text-[10rem] font-black text-gray-50 opacity-50 group-hover:text-cremeria-blue/5 transition-colors duration-500 pointer-events-none select-none z-0">
                0{index + 1}
              </span>

              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cremeria-blue via-cremeria-navy to-cremeria-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Contenedor del Icono */}
              <div className="w-24 h-24 relative z-10 bg-gradient-to-br from-cremeria-cream/50 to-white group-hover:from-cremeria-blue/10 group-hover:to-cremeria-blue/5 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white transition-all duration-500">
                <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:text-cremeria-blue group-hover:-rotate-6">
                  {IconosCategoria[categoria.id] || IconosCategoria.abarrotes}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl relative z-10 font-black mb-6 text-center text-cremeria-navy uppercase tracking-widest group-hover:text-cremeria-red transition-colors duration-300 border-b-2 border-cremeria-cream pb-4 w-full">
                {categoria.titulo}
              </h3>

              <ul className="space-y-3 text-cremeria-navy/80 font-medium text-sm relative z-10 w-full">
                {categoria.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {/* Checkmark SVG */}
                    <svg className="w-4 h-4 text-cremeria-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>

      {/* 5. Sección de Video (Conócenos - Rediseño Oscuro Premium) */}
      <section id="conocenos" className="relative py-32 px-6 md:px-12 scroll-mt-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cremeria-navy to-[#0b1324] z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <p className="text-cremeria-blue font-bold tracking-[0.3em] uppercase mb-4 text-sm">La Experiencia TT</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Conoce Más <span className="text-transparent bg-clip-text bg-gradient-to-r from-cremeria-cream to-cremeria-blue block lg:inline">De Nosotros</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-light">
              En La Doble TT Gourmet, no solo te ofrecemos los mejores productos, te ofrecemos una experiencia.
              Nuestra <strong className="text-cremeria-cream font-bold">nueva ubicación</strong> está lista para recibirte con el trato cálido y amable que ya conoces.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full py-3 px-6 backdrop-blur-sm">
              <span className="flex w-3 h-3 bg-cremeria-red rounded-full animate-ping"></span>
              <p className="text-cremeria-cream font-bold text-sm uppercase tracking-widest">
                ¡Date una vuelta por el video! 👉
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/20 group order-1 lg:order-2">
            {/* Glow detrás del video */}
            <div className="absolute inset-0 bg-cremeria-blue opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/video-presentacion.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cremeria-navy to-transparent z-10"></div>
      </section>

      {/* 6. Footer (Pie de página) */}
      <FooterTT />

      {/* Botones Flotantes (WhatsApp y Volver al inicio general) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 items-end">

        {/* Botón WhatsApp */}
        <a
          href={`https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]"
          title="Haz tu pedido por WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Botón de Volver */}
        <Link
          href="/"
          className="bg-cremeria-navy text-cremeria-cream px-4 py-2.5 rounded-full shadow-md hover:bg-cremeria-navy/90 hover:-translate-x-1 transition-all duration-200 flex items-center gap-2 font-semibold text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Inicio
        </Link>
      </div>

    </div>
  );
}
