import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LoadingScreen from "@/src/components/loading-screen";

// Cargamos la fuente Inter de Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Configuración de viewport y color del tema
export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

// Estos son los textos que aparecen en la pestaña del navegador y al compartir el link
export const metadata: Metadata = {
  title: "La Doble TT | Servicios",
  description: "Portal de La Doble TT Gourmet y DJ Gildardo González en Tizayuca.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "La Doble TT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Nota importante: No le ponemos color de fondo al <body> aquí.
        Dejamos que cada page.tsx (cremeria o dj) decida su propio fondo.
        antialiased hace que las letras se vean más suaves y nítidas.
      */}
      <body className={`${inter.className} antialiased`}>
        <LoadingScreen />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(reg) {
                      console.log('SW registrado con éxito en ámbito:', reg.scope);
                    },
                    function(err) {
                      console.error('Error al registrar SW:', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}

