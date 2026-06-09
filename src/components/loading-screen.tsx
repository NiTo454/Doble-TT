"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Importamos Lottie dinámicamente para evitar problemas de SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import ttSpinner from "../spinners/tt.json";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga inicial de 1.5 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Damos 500ms extra para que se reproduzca el fade-out antes de desmontar el componente del DOM
      setTimeout(() => setShow(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      {/* Fondo base oscuro */}
      <div className="absolute inset-0 bg-[#050505] z-0"></div>
      {/* Luces sutiles animadas mezclando el azul de la cremería y el rojo del DJ */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-red-600/10 z-0 animate-[pulse_2s_ease-in-out_infinite]"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] mb-4 md:mb-6">
          <Lottie animationData={ttSpinner} loop={true} />
        </div>
        <p className="text-white/50 font-bold tracking-[0.3em] uppercase text-xs md:text-sm animate-pulse">
          Cargando
        </p>
      </div>
    </div>
  );
}
