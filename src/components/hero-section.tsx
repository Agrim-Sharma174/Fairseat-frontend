import Image from "next/image";
import { TicketCard } from "./ticket-card";
import logo from "../../public/Logo.svg";
import logoLayer from "../../public/logolayer.svg";

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-gray-950 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full mx-auto px-12 py-6 z-[100] flex items-center justify-between bg-gray-500/10 backdrop-blur-3xl">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="FairSeat Logo" width={30} height={30} />
          <Image src={logoLayer} alt="FairSeat Logo" width={120} height={30} />
        </div>
        <div className="flex items-center space-x-12">
          <a href="#" className="text-white/70 hover:text-[#60C9DD] text-sm">
            Home
          </a>
          <a href="#" className="text-white/70 hover:text-[#60C9DD] text-sm">
            About Us
          </a>
          <a href="#" className="text-white/70 hover:text-[#60C9DD] text-sm">
            Features
          </a>
          <button className="bg-[#0497AA] text-white px-6 py-1.5 rounded-full text-sm hover:bg-cyan-500">
            Join
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto mt-10 px-4 pt-20 pb-32">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-thin bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
            Fair Tickets, Real Fans
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/80">
            Revolutionizing Ticketing with Blockchain
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Say goodbye to bots and black-market pricing. FairSeat uses
            blockchain technology to ensure transparent, secure, and fair ticket
            booking, so every true fan gets a fair chance.
          </p>
          <button className="rounded-full bg-teal-600 px-8 py-3 text-lg font-medium text-white hover:bg-teal-500 transition-all">
            Join Our Community
          </button>
        </div>

        {/* Ticket Cards */}
        <div className="relative w-full h-[60vh]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
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
