import { TicketCard } from "./ticket-card"

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-gray-950 overflow-x-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-teal-500 rounded-sm" />
          <span className="text-white font-semibold">FairSeat</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white/70 hover:text-white text-sm">Home</a>
          <a href="#" className="text-white/70 hover:text-white text-sm">About Us</a>
          <a href="#" className="text-white/70 hover:text-white text-sm">Features</a>
          <button className="bg-teal-500 text-white px-4 py-1.5 rounded-full text-sm hover:bg-teal-400">
            Join
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-thin bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
            Fair Tickets, Real Fans
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/80">
            Revolutionizing Ticketing with Blockchain
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Say goodbye to bots and black-market pricing. FairSeat uses blockchain technology to ensure
            transparent, secure, and fair ticket booking, so every true fan gets a fair chance.
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
  )
}

