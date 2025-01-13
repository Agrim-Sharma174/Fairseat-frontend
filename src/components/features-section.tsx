import { Card, CardContent } from "@/components/ui/card"
import { Bot, Shield, Ticket, Wallet } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: "Bot-Free Ticketing",
    description: "Ensure real fans always get the tickets they genuinely deserve, eliminating automated purchases."
  },
  {
    icon: Wallet,
    title: "Transparent Transactions",
    description: "Blockchain-powered tamper-proof records for every ticket transaction."
  },
  {
    icon: Shield,
    title: "Anti-Scalping Protection",
    description: "Tickets tied to verified user profiles to prevent unauthorized reselling."
  },
  {
    icon: Ticket,
    title: "Fair Distribution",
    description: "Equal opportunity for all fans to purchase tickets through our verified system."
  }
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
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-teal-500/50 transition-colors">
              <CardContent className="p-6">
                <feature.icon className="w-10 h-10 text-teal-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

