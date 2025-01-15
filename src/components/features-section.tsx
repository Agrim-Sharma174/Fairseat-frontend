import { Bot, Shield, Ticket, Wallet } from "lucide-react"
import TicketCard from "./TicketCard"

const features = [
  {
    icon: Bot,
    title: "Bot-Free Ticketing",
    description:
      "Ensure real fans always get the tickets they genuinely deserve, eliminating automated purchases.",
  },
  {
    icon: Wallet,
    title: "Transparent Transactions",
    description:
      "Blockchain-powered tamper-proof records for every ticket transaction.",
  },
  {
    icon: Shield,
    title: "Anti-Scalping Protection",
    description:
      "Tickets tied to verified user profiles to prevent unauthorized reselling.",
  },
  {
    icon: Ticket,
    title: "Fair Distribution",
    description:
      "Equal opportunity for all fans to purchase tickets through our verified system.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-teal-500 font-medium mb-2">Our Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Explore Features Of Our Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <TicketCard key={index}>
              {/* Replace TicketCard content dynamically */}
              <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-zinc-800" />
              </div>

              <div className="mt-auto mb-8">
                <h3 className="text-2xl font-mono text-white font-medium leading-tight mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </TicketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
