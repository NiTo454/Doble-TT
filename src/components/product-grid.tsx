import { obtenerCategoriasCremeria } from "@/src/lib/controllers/cremeriaController";
import { Beef, Milk, Store, ShoppingBasket, ArrowRightCircle } from "lucide-react";

// Configuración de temas por categoría para el diseño "Bento Box"
const TemaCategoria: Record<string, { icon: React.ElementType, gradient: string, color: string }> = {
  carnes: {
    icon: Beef,
    gradient: "from-[#FFF5F5] to-white border-red-100",
    color: "text-cremeria-red",
  },
  lacteos: {
    icon: Milk,
    gradient: "from-[#F0F7FF] to-white border-blue-100",
    color: "text-cremeria-blue",
  },
  quesos: {
    icon: Store,
    gradient: "from-[#FFFDF0] to-white border-amber-100",
    color: "text-[#D4AF37]",
  },
  abarrotes: {
    icon: ShoppingBasket,
    gradient: "from-[#F0FDF4] to-white border-emerald-100",
    color: "text-emerald-600",
  }
};

export default async function ProductGrid() {
  const categorias = await obtenerCategoriasCremeria();

  return (
    <main id="productos" className="relative max-w-7xl mx-auto py-24 px-6 md:px-12 scroll-mt-20 font-sans">

      {/* Cabecera Minimalista */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-cremeria-red font-bold tracking-[0.2em] uppercase mb-3 block text-sm">
            Nuestra Selección
          </span>
        </div>
        <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-cremeria-red to-transparent rounded-full mb-2"></div>
      </div>

      {/* Grid Interactivo (Efecto Focus: atenúa las tarjetas no enfocadas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 group/grid">
        {categorias.map((categoria) => {
          const Tema = TemaCategoria[categoria.id] || TemaCategoria.abarrotes;
          const Icono = Tema.icon;

          return (
            <article
              key={categoria.id}
              className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${Tema.gradient} border shadow-sm p-8 md:p-12 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-xl hover:-translate-y-1 group/card group-hover/grid:opacity-60 hover:!opacity-100 cursor-default`}
            >
              {/* Icono Gigante de Fondo (Marca de Agua Dinámica) */}
              <div className={`absolute -bottom-12 -right-12 opacity-[0.04] transition-transform duration-[800ms] ease-out group-hover/card:scale-125 group-hover/card:-rotate-12 ${Tema.color}`}>
                <Icono className="w-64 h-64 md:w-80 md:h-80" strokeWidth={1} />
              </div>

              {/* Contenido Superior */}
              <div className="relative z-10 flex items-center justify-between mb-10">
                {/* Icono en burbuja de cristal */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/60 backdrop-blur-md rounded-2xl md:rounded-[1.5rem] shadow-sm flex items-center justify-center border border-white">
                  <Icono className={`w-8 h-8 md:w-10 md:h-10 ${Tema.color} transform transition-transform duration-500 group-hover/card:scale-110`} strokeWidth={1.5} />
                </div>

                {/* Botón visual sutil indicando exploración */}
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 -translate-x-4 transition-all duration-500 group-hover/card:opacity-100 group-hover/card:translate-x-0">
                  <ArrowRightCircle className={`w-6 h-6 ${Tema.color}`} strokeWidth={1.5} />
                </div>
              </div>

              {/* Título de Categoría */}
              <h3 className="relative z-10 text-3xl md:text-4xl font-black text-cremeria-navy mb-8 tracking-tight capitalize">
                {categoria.titulo}
              </h3>

              {/* Lista de Items (Diseño de viñetas premium) */}
              <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {categoria.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group/item">
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/item:scale-150 ${Tema.color.replace('text-', 'bg-')}`}></span>
                    <span className="text-sm md:text-base font-medium text-cremeria-navy/80 transition-colors duration-300 group-hover/item:text-cremeria-navy">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </main>
  );
}
