import ClientsSection from "@/components/ClientsSection";
import CommentsSection from "@/components/CommentsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ClientsSection />
      <CommentsSection />
      <ServicesSection />
    </div>
  );
}
