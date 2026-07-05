import { obtenerCategoriasCremeria } from "@/src/lib/controllers/cremeriaController";
import { Beef, Milk, Store, ShoppingBasket, ArrowRight } from "lucide-react";

// Configuración de temas por categoría para el diseño "Bento Box" Gourmet
const TemaCategoria: Record<string, { icon: React.ElementType, gradient: string, color: string, badgeBg: string, dotBg: string, accentColor: string }> = {
  carnes: {
    icon: Beef,
    gradient: "from-[#FDFBFB] via-[#FAF5F4] to-[#FFF0EC] border-red-100/70",
    color: "text-cremeria-red",
    badgeBg: "bg-red-50 text-cremeria-red border-red-100",
    dotBg: "bg-cremeria-red",
    accentColor: "rgba(168, 44, 45, 0.1)",
  },
  lacteos: {
    icon: Milk,
    gradient: "from-[#F6FAFC] via-[#F2F7FA] to-[#E8F3F7] border-blue-100/70",
    color: "text-cremeria-blue",
    badgeBg: "bg-blue-50 text-cremeria-blue border-blue-100",
    dotBg: "bg-cremeria-blue",
    accentColor: "rgba(58, 158, 186, 0.1)",
  },
  quesos: {
    icon: Store,
    gradient: "from-[#FDFDF9] via-[#FAF9F2] to-[#FAF5E6] border-amber-200/50",
    color: "text-[#C59B27]",
    badgeBg: "bg-amber-50 text-[#C59B27] border-amber-200/30",
    dotBg: "bg-[#C59B27]",
    accentColor: "rgba(197, 155, 39, 0.1)",
  },
  abarrotes: {
    icon: ShoppingBasket,
    gradient: "from-[#F7FCF9] via-[#F3FAF5] to-[#EBF7EF] border-emerald-100/70",
    color: "text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dotBg: "bg-emerald-600",
    accentColor: "rgba(5, 150, 105, 0.1)",
  }
};

export default async function ProductGrid() {
  const categorias = await obtenerCategoriasCremeria();

  return (
    <main id="productos" className="relative max-w-7xl mx-auto py-28 px-6 md:px-12 scroll-mt-20 font-sans">
      {/* Background soft glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cremeria-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-cremeria-red/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Cabecera Minimalista Editorial */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 border-b border-slate-200/60 pb-8">
        <div>
          <span className="text-cremeria-red font-black tracking-[0.25em] uppercase mb-3 block text-xs md:text-sm">
            Nuestra Selección
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-cremeria-navy tracking-tight leading-tight">
            Los Favoritos de la Mesa
          </h2>
        </div>
        <p className="text-slate-500 font-light max-w-sm text-sm md:text-base leading-relaxed">
          Productos seleccionados bajo los más altos estándares de frescura, tradición y sabor gourmet.
        </p>
      </div>

      {/* Grid Bento Box con profundidad 3D y Efecto Focus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 group/grid perspective-[1000px]">
        {categorias.map((categoria) => {
          const Tema = TemaCategoria[categoria.id] || TemaCategoria.abarrotes;
          const Icono = Tema.icon;

          return (
            <article
              key={categoria.id}
              className={`relative overflow-hidden rounded-[3rem] bg-gradient-to-br ${Tema.gradient} border shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 md:p-14 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_30px_60px_rgba(27,43,74,0.08)] hover:[transform:translateY(-8px)_rotateX(2deg)_rotateY(-1deg)] group/card group-hover/grid:opacity-50 hover:!opacity-100 border-slate-200/40`}
            >
              {/* Marca de agua de fondo (Icono gigante) */}
              <div className={`absolute -bottom-16 -right-16 opacity-[0.03] transition-all duration-[1000ms] ease-out group-hover/card:scale-135 group-hover/card:-rotate-12 group-hover/card:opacity-[0.06] ${Tema.color}`}>
                <Icono className="w-80 h-80" strokeWidth={1} />
              </div>

              {/* Contenido Superior: Insignia e icono */}
              <div className="relative z-10 flex items-center justify-between mb-12">
                {/* Icono en burbuja de cristal gourmet */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.03)] flex items-center justify-center border border-slate-100 group-hover/card:scale-105 group-hover/card:shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-500">
                  <Icono className={`w-8 h-8 md:w-10 md:h-10 ${Tema.color} transform transition-transform duration-700 group-hover/card:rotate-12`} strokeWidth={1.5} />
                </div>

                {/* Categoría Badge flotante */}
                <span className={`text-[10px] md:text-xs font-black tracking-widest uppercase px-4 py-2 rounded-xl border ${Tema.badgeBg}`}>
                  Premium
                </span>
              </div>

              {/* Título de Categoría */}
              <h3 className="relative z-10 text-3xl md:text-4xl font-black text-cremeria-navy mb-8 tracking-tight">
                {categoria.titulo}
              </h3>

              {/* Lista de Items con viñetas elegantes */}
              <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4.5 gap-x-8 border-t border-slate-200/50 pt-8">
                {categoria.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3.5 group/item cursor-pointer">
                    <span className={`w-2 h-2 rounded-full transition-all duration-300 group-hover/item:scale-150 ${Tema.dotBg}`}></span>
                    <span className="text-sm md:text-base font-semibold text-cremeria-navy/85 transition-colors duration-300 group-hover/item:text-cremeria-navy">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover highlight bar */}
              <div
                className="absolute bottom-0 left-0 w-full h-[4px] transition-all duration-500 opacity-0 group-hover/card:opacity-100"
                style={{ backgroundColor: Tema.dotBg.replace('bg-', 'var(--') }}
              ></div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
