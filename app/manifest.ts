import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "La Doble TT",
    short_name: "La Doble TT",
    description: "Portal de La Doble TT Gourmet y DJ Gildardo González en Tizayuca.",
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#030303",
    icons: [
      {
        src: "/icon.ico",
        sizes: "32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
