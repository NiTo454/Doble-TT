import NavbarTT from "@/src/components/iu/navbar-tt";
import FooterTT from "@/src/components/iu/footer-tt";
import LocationTicker from "@/src/components/location-ticker";
import HeroSection from "@/src/components/hero-section";
import ProductGrid from "@/src/components/product-grid";
import VideoSection from "@/src/components/video-section";
import FloatingButtons from "@/src/components/floating-buttons";

export default function CremeriaPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-cremeria-navy font-sans overflow-x-hidden selection:bg-cremeria-red selection:text-white">
      <NavbarTT />
      <LocationTicker />
      <HeroSection />
      <ProductGrid />
      <VideoSection />
      <FooterTT />
      <FloatingButtons />
    </div>
  );
}
