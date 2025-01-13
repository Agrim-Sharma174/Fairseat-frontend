import { AppShowcase } from "@/components/app-showcase";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AppShowcase />
      <FeaturesSection />
    </main>
  )
}

