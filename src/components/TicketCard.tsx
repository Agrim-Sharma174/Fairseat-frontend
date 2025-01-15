import { Wallet } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function TicketCard() {
  return (
    <Card className="relative w-[280px] h-[400px] bg-zinc-800 border-none overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-[-100px] left-[-100px]">
        <div className="w-[300px] h-[300px] rounded-full bg-zinc-700/30" />
        <div className="absolute top-[20px] left-[20px] w-[300px] h-[300px] rounded-full bg-zinc-700/20" />
      </div>
      
      {/* Content */}
      <CardContent className="relative h-full flex flex-col p-6">
        <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center">
          <Wallet className="w-6 h-6 text-zinc-800" />
        </div>
        
        <div className="mt-auto mb-8">
          <h3 className="text-2xl font-mono text-white font-medium leading-tight mb-4">
            Bot-Free
            <br />
            Ticketing
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Ensure real fans always get the tickets they genuinely deserve, not bots or scalpers.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

