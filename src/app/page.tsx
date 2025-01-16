import { AppShowcase } from "@/components/app-showcase";
import FAQSection from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import StoriesSection from "@/components/storage-section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AppShowcase />
      <FeaturesSection />
      <StoriesSection />
      <FAQSection />
    </main>
  )
}

