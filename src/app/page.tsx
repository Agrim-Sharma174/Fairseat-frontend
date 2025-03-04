"use client";

import { AppShowcase } from "@/components/app-showcase";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/hero-section";
import StoriesSection from "@/components/storage-section";
import bodyBackground from "../../public/bodyBackground.png";
import { useState, useEffect } from "react";
import { ChevronUpIcon } from 'lucide-react';
import FAQSection from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { ProblemsSection } from "@/components/problems-section";
import LoadingAnimation from "@/components/LoadingAnimation";

export default function Home() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleBackToTopVisibility = () => {
    if (window.scrollY > 300) {
      setIsBackToTopVisible(true);
    } else {
      setIsBackToTopVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBackToTopVisibility);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener("scroll", toggleBackToTopVisibility);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <main
      style={{
        backgroundImage: `url(${bodyBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="problems-section">
        <ProblemsSection />
      </div>
      <div id="features-section">
        <FeaturesSection />
      </div>
      <div id="stories-section">
        <StoriesSection />
      </div>
      <div id="app-showcase">
        <AppShowcase />
      </div>
      <div id="faq-section">
        <FAQSection />
      </div>
      <Footer />

      {/* Back-to-Top Button */}
      {isBackToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#0497AA] text-white p-3 rounded-full shadow-md hover:bg-cyan-500 transition-all"
          aria-label="Back to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </main>
  );
}
