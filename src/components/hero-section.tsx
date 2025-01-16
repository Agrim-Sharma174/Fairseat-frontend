import Image from "next/image";
import { TicketCard } from "./ticket-card";
import logo from "../../public/Logo.svg";
import logoLayer from "../../public/logolayer.svg";
import { MenuIcon } from "lucide-react";

export function HeroSection() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Responsive Navigation */}
      <nav className="fixed top-0 left-0 w-full mx-auto px-4 sm:px-8 lg:px-12 py-4 z-[100] flex items-center justify-between bg-gray-500/10 backdrop-blur-3xl">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="FairSeat Logo" width={30} height={30} />
          <Image src={logoLayer} alt="FairSeat Logo" width={120} height={30} className="hidden sm:block" />
        </div>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden">
          <MenuIcon className="h-6 w-6 text-white" />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <a href="#" className="text-white/70 hover:text-[#60C9DD] text-sm">Home</a>
          <a href="#" className="text-white/70 hover:text-[#60C9DD] text-sm">About Us</a>
          <a href="#" className="text-white/70 hover:text-[#60C9DD] text-sm">Features</a>
          <button className="bg-[#0497AA] text-white px-6 py-1.5 rounded-full text-sm hover:bg-cyan-500">
            Join
          </button>
        </div>
      </nav>

      {/* Responsive Hero Content */}
      <div className="container mx-auto mt-10 px-4 pt-20 pb-16 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-20">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-thin bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
            Fair Tickets, Real Fans
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-white/80">
            Revolutionizing Ticketing with Blockchain
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Say goodbye to bots and black-market pricing. FairSeat uses blockchain technology to ensure transparent, secure, and fair ticket booking, so every true fan gets a fair chance.
          </p>
          <button className="rounded-full bg-[#0497AA] px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-white hover:bg-cyan-500 transition-all">
            Join Our Community
          </button>
        </div>

        {/* Responsive Ticket Cards */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center scale-[0.6] sm:scale-[0.8] lg:scale-100">
          <TicketCard type="leftExt" />
            <TicketCard type="left" />
            <TicketCard type="center" />
            <TicketCard type="right" />
            <TicketCard type="rightExt" />
          </div>
        </div>
      </div>
    </div>
  );
}
