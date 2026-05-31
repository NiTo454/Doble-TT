import Link from "next/link";

export default function NavbarTT() {
  return (
    <nav className="sticky top-0 bg-white/85 backdrop-blur-md text-cremeria-navy py-4 px-6 flex justify-between items-center z-50 border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <Link href="/" className="group flex items-center gap-3">
          <div className="bg-cremeria-navy text-white w-10 h-10 flex items-center justify-center rounded-xl transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-md">
            <span className="font-black text-xl leading-none">TT</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-cremeria-navy">
            Gourmet<span className="text-cremeria-red transition-colors duration-300 group-hover:text-cremeria-blue">.</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
          <a href="#productos" className="relative text-cremeria-navy/80 hover:text-cremeria-navy transition-colors group py-2">
            Productos
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cremeria-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          </a>
          <a href="#conocenos" className="relative text-cremeria-navy/80 hover:text-cremeria-navy transition-colors group py-2">
            Conócenos
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cremeria-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          </a>
          <a href="https://wa.me/5215575061530" target="_blank" rel="noopener noreferrer" className="ml-4 bg-cremeria-red text-white px-6 py-2.5 rounded-full hover:bg-[#8a2223] transition-all duration-300 shadow-[0_4px_14px_rgba(168,44,45,0.3)] hover:shadow-[0_6px_20px_rgba(168,44,45,0.5)] hover:-translate-y-1">
            Hacer Pedido
          </a>
        </div>
      </div>
    </nav>
  );
}
