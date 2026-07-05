import type { Metadata } from "next";
import NavbarTT from "@/src/components/ui/navbar-tt";
import FooterTT from "@/src/components/ui/footer-tt";
import LocationTicker from "@/src/components/location-ticker";
import HeroSection from "@/src/components/hero-section";
import ProductGrid from "@/src/components/product-grid";
import VideoSection from "@/src/components/video-section";
import FloatingButtons from "@/src/components/floating-buttons";

export const metadata: Metadata = {
  title: "La Doble TT | Cremería Gourmet",
  description: "La mejor selección de carnes frías, quesos artesanales, lácteos y abarrotes en Tizayuca.",
};

export default function CremeriaPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-cremeria-navy font-sans overflow-x-hidden selection:bg-cremeria-red selection:text-white">
      <NavbarTT />
      <LocationTicker />
      <HeroSection />
      <ProductGrid />
      <VideoSection />
      <FooterTT />
      <FloatingButtons />
    </main>
  );
}
