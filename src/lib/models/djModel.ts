export type DjIconType = "speaker" | "receiver" | "music";

export interface PaqueteDj {
  id: string;
  titulo: string;
  precio: string;
  aforo: string;
  items: string[];
  icono: DjIconType;
  popular: boolean;
  ctaText: string;
  mensajeWhatsApp: string;
}

export const paquetesDjData: PaqueteDj[] = [
  {
    id: "basico",
    titulo: "Audio Básico",
    precio: "$6,500",
    aforo: "Aforo de 50 a 100 personas.",
    items: [
      "5 horas de DJ Versátil",
      "Globo salchicha para batucada",
      "Equipo de audio e iluminación básica"
    ],
    icono: "speaker",
    popular: false,
    ctaText: "Cotizar Básico",
    mensajeWhatsApp: "Hola, me interesa el paquete Audio Básico"
  },
  {
    id: "bodas-xv",
    titulo: "Bodas y XV Años",
    precio: "$26,500",
    aforo: "De 200 a 400 personas.",
    items: [
      "5 horas de DJ Versátil",
      "Pirotecnia",
      "Souvenirs de animación: globo salchicha, corbatas",
      "Sombreros y anteojos",
      "Audio profesional completo"
    ],
    icono: "receiver",
    popular: true,
    ctaText: "Cotizar Paquete",
    mensajeWhatsApp: "Hola, me interesa el paquete Bodas y XV Años"
  },
  {
    id: "vip",
    titulo: "Eventos (VIP)",
    precio: "A cotizar",
    aforo: "Acomodamos un equipo premium según aforo.",
    items: [
      "Presupuesto totalmente personalizado",
      "Análisis del espacio para el mejor audio",
      "Trato exclusivo y extras a elección",
      "DJ Versátil nivel premium"
    ],
    icono: "music",
    popular: false,
    ctaText: "Llamar para Presupuesto",
    mensajeWhatsApp: "Hola, me interesa cotizar un evento VIP"
  }
];
