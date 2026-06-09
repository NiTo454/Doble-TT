import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LoadingScreen from "@/src/components/loading-screen";

// Cargamos la fuente Inter de Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Estos son los textos que aparecen en la pestaña del navegador y al compartir el link
export const metadata: Metadata = {
  title: "La Doble TT | Servicios",
  description: "Portal de La Doble TT Gourmet y DJ Gildardo González en Tizayuca.",
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
      </body>
    </html>
  );
}
