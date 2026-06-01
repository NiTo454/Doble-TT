import NavbarDj from "@/src/components/iu/navbar-dj";
import HeroDjSection from "@/src/components/hero-dj-section";
import LocationDjTicker from "@/src/components/location-dj-ticker";
import ProductDjGrid from "@/src/components/product-dj-grid";
import VideoDjSection from "@/src/components/video-dj-section";
import FloatingDjButtons from "@/src/components/floating-dj-buttons";
import FooterDj from "@/src/components/iu/fotter'dj";

export default function DjPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-red-600 selection:text-white overflow-x-hidden relative">
      <NavbarDj />
      <HeroDjSection />
      <LocationDjTicker />
      <ProductDjGrid />
      <VideoDjSection />
      <FooterDj />
      <FloatingDjButtons />
    </main>
  );
}
