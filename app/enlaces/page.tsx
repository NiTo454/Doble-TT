"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Music,
  MessageCircle,
  MapPin,
  ChevronRight,
  Download,
  Share2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function EnlacesPage() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Monitorear evento de instalación de PWA
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Si ya está en modo standalone, no mostrar botón de instalación
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstallable(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  // Manejar instalación de PWA
  const handleInstallApp = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstallable(false);
      setInstallPrompt(null);
    }
  };

  // Compartir página
  const handleShare = async () => {
    const shareData = {
      title: "La Doble TT",
      text: "Portal de La Doble TT Gourmet y DJ Gildardo González en Tizayuca.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error al compartir:", err);
      }
    } else {
      // Fallback: Copiar al portapapeles
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Error al copiar enlace:", err);
      }
    }
  };

  const links = [
    {
      title: "La Doble TT Gourmet",
      description: "Quesos artesanales, carnes frías y productos premium",
      url: "/cremeria",
      isExternal: false,
      icon: <ShoppingBag className="w-6 h-6 text-[#D4AF37]" />,
      hoverColor: "hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5",
      iconBg: "bg-[#D4AF37]/10",
    },
    {
      title: "DJ Gildardo González",
      description: "Audio profesional, iluminación y animación de eventos",
      url: "/dj",
      isExternal: false,
      icon: <Music className="w-6 h-6 text-red-500" />,
      hoverColor: "hover:border-red-500/50 hover:bg-red-500/5",
      iconBg: "bg-red-500/10",
    },
    {
      title: "WhatsApp - Cremería Gourmet",
      description: "Pedidos a domicilio y consultas sobre abarrotes",
      url: "https://wa.me/5215575061530?text=Hola%2C%20quisiera%20hacer%20un%20pedido%20en%20La%20Doble%20TT%20Gourmet.",
      isExternal: true,
      icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
      hoverColor: "hover:border-[#25D366]/50 hover:bg-[#25D366]/5",
      iconBg: "bg-[#25D366]/10",
    },
    {
      title: "WhatsApp - DJ Gildardo",
      description: "Cotizaciones y contratación para fiestas y bodas",
      url: "https://wa.me/525566959722?text=Hola%20DJ%20Gildardo%2C%20quisiera%20informaci%C3%B3n%20sobre%20tus%20paquetes%20de%20audio.",
      isExternal: true,
      icon: <MessageCircle className="w-6 h-6 text-red-500" />,
      hoverColor: "hover:border-red-500/50 hover:bg-red-500/5",
      iconBg: "bg-red-500/10",
    },
    {
      title: "Facebook Oficial - DJ Gildardo",
      description: "Vídeos en vivo, fechas y galería de eventos",
      url: "https://www.facebook.com/djgildardogonzalez",
      isExternal: true,
      icon: (
        <svg className="w-6 h-6 text-[#1877F2] fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      hoverColor: "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/5",
      iconBg: "bg-[#1877F2]/10",
    },
    {
      title: "Nuestra Ubicación",
      description: "Calle Cima #42, Tizayuca (Frente a las gradas del parque)",
      url: "https://maps.google.com/?q=Calle+Cima+42+Tizayuca",
      isExternal: true,
      icon: <MapPin className="w-6 h-6 text-[#D4AF37]" />,
      hoverColor: "hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5",
      iconBg: "bg-[#D4AF37]/10",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-start p-4 md:p-8 relative overflow-hidden font-sans select-none">
      {/* Resplandores decorativos de fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#D4AF37]/5 blur-[100px] md:blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-red-600/5 blur-[100px] md:blur-[150px] pointer-events-none"></div>

      {/* Contenedor principal */}
      <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center pt-8 pb-16">
        
        {/* Botón flotante superior derecho: Compartir */}
        <button
          onClick={handleShare}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer"
          aria-label="Compartir perfil"
        >
          <Share2 className="w-5 h-5 text-gray-300" />
        </button>

        {isCopied && (
          <div className="absolute top-18 bg-white/90 text-black font-semibold text-xs py-2 px-4 rounded-full shadow-lg backdrop-blur-sm transition-opacity duration-300 animate-bounce">
            ¡Enlace copiado al portapapeles! 📋
          </div>
        )}

        {/* Encabezado del Perfil */}
        <div className="flex flex-col items-center text-center mb-8 relative">
          
          {/* Anillo de Cristal flotante alrededor de la foto */}
          <div className="relative w-28 h-28 rounded-full flex items-center justify-center p-[2px] bg-gradient-to-tr from-[#D4AF37] via-white/20 to-red-600 shadow-[0_15px_40px_rgba(0,0,0,0.8)] animate-float">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
              <Image
                src="/logo.png"
                alt="Logo La Doble TT"
                fill
                sizes="112px"
                className="object-contain p-2"
                priority
              />
            </div>
            {/* Pequeña insignia de verificación con el icon.ico */}
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border border-white/20 shadow-md bg-black overflow-hidden flex items-center justify-center">
              <Image
                src="/icon.ico"
                alt="Icono Verificación"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-3xl font-black tracking-tighter mt-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-white">
            La Doble TT
          </h1>
          
          {/* Ubicación pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mt-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] backdrop-blur-md">
            <MapPin className="w-3 h-3 text-[#D4AF37]" />
            Tizayuca, Hidalgo
          </div>

          <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-sm">
            Quesos gourmet, carnes frías de alta calidad y el mejor ambiente, audio e iluminación para tus eventos premium.
          </p>
        </div>

        {/* Banner de Instalación PWA (si es compatible) */}
        {isInstallable && (
          <div className="w-full mb-6 p-[1px] rounded-2xl bg-gradient-to-r from-[#D4AF37]/50 via-white/10 to-red-600/50 shadow-[0_10px_35px_rgba(212,175,55,0.15)] animate-pulse-slow">
            <div className="bg-[#0a0a0a]/95 rounded-2xl p-5 backdrop-blur-xl flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#D4AF37]">PWA Disponible</span>
                </div>
                <h3 className="text-sm font-bold text-white">Instala la App en tu móvil</h3>
                <p className="text-[11px] text-gray-400 leading-snug mt-0.5">Accede sin conexión y con acceso directo rápido desde tu pantalla.</p>
              </div>
              <button
                onClick={handleInstallApp}
                className="bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Instalar
              </button>
            </div>
          </div>
        )}

        {/* Listado de Enlaces */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => {
            const content = (
              <div className="flex items-center gap-4 w-full text-left">
                {/* Contenedor del Icono con estilo */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${link.iconBg} border border-white/5`}>
                  {link.icon}
                </div>
                {/* Textos del enlace */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-amber-100 transition-colors duration-300">
                    {link.title}
                  </h2>
                  <p className="text-xs text-gray-400 truncate leading-normal mt-0.5">
                    {link.description}
                  </p>
                </div>
                {/* Flecha indicadora */}
                <div className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">
                  {link.isExternal ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
              </div>
            );

            const containerClass = `group w-full p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] ${link.hoverColor} cursor-pointer`;

            return link.isExternal ? (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={containerClass}
              >
                {content}
              </a>
            ) : (
              <Link key={index} href={link.url} className={containerClass}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Footer del Linktree */}
        <div className="mt-12 text-center flex flex-col items-center gap-2 text-gray-600 text-[10px] uppercase tracking-[0.2em] font-medium">
          <p>© {new Date().getFullYear()} La Doble TT</p>
          <p>
            Creado por{" "}
            <a
              href="https://sintaxis-lab-xuse.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300 font-bold"
            >
              Syntaxis Lab
            </a>
          </p>
        </div>
        
      </div>
    </main>
  );
}
