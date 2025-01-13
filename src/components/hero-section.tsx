import { TicketCard } from "./ticket-card";

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-gray-950">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Fair Tickets, Real Fans
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/80">
            Revolutionizing Ticketing with Blockchain
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Say goodbye to bots and black-market pricing. FairSeat uses blockchain technology to ensure
            transparent, secure, and fair ticket booking, so every true fan gets a fair chance.
          </p>
          <button className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-teal-400 transition-colors">
            Join Our Community
          </button>
        </div>

        {/* Ticket Cards */}
        <div className="flex justify-center items-center gap-4 overflow-x-auto pb-8 px-4">
          <TicketCard
            title="Neon Drift Live in Mumbai"
            venue="The Theatre, Mumbai"
            date="24.01.2025"
            time="7:00 PM"
            gate="2A"
          />
          <TicketCard
            title="Riverside Live in Mumbai"
            venue="NSCI Dome, Mumbai"
            date="20.01.2025"
            time="7:00 PM"
            gate="4A"
            isCenter
          />
          <TicketCard
            title="Crimson Echo Live in Delhi"
            venue="Garden of Five Senses, Delhi"
            date="27.01.2025"
            time="8:00 PM"
            gate="5F"
          />
        </div>
      </div>
    </div>
  )
}

