"use client";

import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import { TicketCard } from "./ticket-card";
import logo from "../../public/Logo.svg";
import logoLayer from "../../public/logolayer.svg";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Responsive Navigation */}
      <nav className="fixed top-0 left-0 w-full mx-auto px-4 sm:px-8 lg:px-12 py-4 z-[100] flex items-center justify-between bg-gray-500/10 backdrop-blur-3xl">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="FairSeat Logo" width={30} height={30} />
          <Image
            src={logoLayer}
            alt="FairSeat Logo"
            width={120}
            height={30}
            className="hidden sm:block"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6 text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <button
            onClick={() => scrollToSection("hero-section")}
            className="text-white/70 hover:text-[#60C9DD] text-sm"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features-section")}
            className="text-white/70 hover:text-[#60C9DD] text-sm"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("faq-section")}
            className="text-white/70 hover:text-[#60C9DD] text-sm"
          >
            FAQs
          </button>
          <a
            href="https://t.me/+nA4Ph03kEjU4M2Jl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#0497AA] text-white px-6 py-1.5 rounded-full text-sm hover:bg-cyan-500">
              Join
            </button>
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-[90]">
          <button
            onClick={() => scrollToSection("hero-section")}
            className="text-white/70 hover:text-[#60C9DD] text-lg mb-6"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features-section")}
            className="text-white/70 hover:text-[#60C9DD] text-lg mb-6"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("faq-section")}
            className="text-white/70 hover:text-[#60C9DD] text-lg mb-6"
          >
            FAQs
          </button>
          <a
            href="https://t.me/+nA4Ph03kEjU4M2Jl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#0497AA] text-white px-6 py-2 rounded-full text-lg hover:bg-cyan-500">
              Join
            </button>
          </a>
        </div>
      )}

      {/* Responsive Hero Content */}
      <div className="container mx-auto mt-10 px-4 pt-20 pb-16 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-20">
          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-3xl bg-gradient-to-r from-[#0497AA]/20 to-[#60C9DD]/20 border border-[#60C9DD]/30 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse mr-2" />
              <span className={`${firaCode.className} text-[#60C9DD] text-sm font-medium`}>
                Coming Soon
              </span>
            </div>
          </div>

          <h1
            className={`${montserrat.className} text-2xl sm:text-3xl lg:text-5xl font-medium bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent`}
          >
            Fair Tickets, Real Fans
          </h1>
          <h2
            className={`${montserrat.className} text-xl sm:text-2xl lg:text-4xl font-medium text-white/80`}
          >
            Revolutionizing Ticketing with Blockchain
          </h2>
          <p
            className={`${raleway.className} font-normal text-white/70 max-w-3xl mx-auto text-lg sm:text-base`}
          >
            Say goodbye to bots and black-market pricing. FairSeat uses
            blockchain technology to ensure transparent, secure, and fair ticket
            booking, so every true fan gets a fair chance.
          </p>
          <button
            className={`${firaCode.className} rounded-full bg-[#0497AA] px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-white hover:bg-cyan-500 transition-all`}
          >
            <Link
              href="https://t.me/+nA4Ph03kEjU4M2Jl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Community
            </Link>
          </button>
        </div>

        {/* Responsive Ticket Cards */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center scale-[0.6] sm:scale-[0.8] lg:scale-100">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-[30px] blur-2xl" />
              <div className="relative flex">
                <TicketCard type="leftExt" />
                <TicketCard type="left" />
                <TicketCard type="center" />
                <TicketCard type="right" />
                <TicketCard type="rightExt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
