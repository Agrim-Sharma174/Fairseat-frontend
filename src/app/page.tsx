import { AppShowcase } from "@/components/app-showcase";
import FAQSection from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/hero-section";
import StoriesSection from "@/components/storage-section";
import bodyBackground from "../../public/bodyBackground.png";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${bodyBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <HeroSection />
      <AppShowcase />
      <FeaturesSection />
      <StoriesSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
