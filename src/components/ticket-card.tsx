'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface TicketCardProps {
  title: string
  venue: string
  date: string
  time: string
  gate: string
  isCenter?: boolean
}

export function TicketCard({ title, venue, date, time, gate, isCenter }: TicketCardProps) {
  return (
    <div 
      className={cn(
        "relative group perspective-1000",
        isCenter ? "w-[300px] h-[400px]" : "w-[250px] h-[350px]"
      )}
    >
      <div className="relative preserve-3d duration-500 group-hover:[transform:rotateY(180deg)] w-full h-full">
        {/* Front of the ticket */}
        <div className="absolute backface-hidden w-full h-full">
          <div className={cn(
            "w-full h-full p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10",
            "flex flex-col justify-between",
            isCenter ? "shadow-2xl shadow-teal-500/20" : ""
          )}>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-white">{title}</h3>
              <p className="text-sm text-white/70">{venue}</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Date</span>
                  <span className="text-white">{date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Time</span>
                  <span className="text-white">{time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Gate</span>
                  <span className="text-white">{gate}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-teal-500/10 border-teal-500/20 text-teal-500 hover:bg-teal-500/20">
                Buy Ticket
              </Button>
            </div>
          </div>
        </div>
        
        {/* Back of the ticket */}
        <div className="absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
          <div className={cn(
            "w-full h-full p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10",
            "flex flex-col justify-between",
            isCenter ? "shadow-2xl shadow-teal-500/20" : ""
          )}>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-white">Event Details</h3>
              <div className="space-y-4">
                <p className="text-sm text-white/70">
                  Join us for an unforgettable night of music and entertainment. Early arrival is recommended.
                </p>
                <div className="space-y-2">
                  <div className="text-sm text-white/70">
                    <span className="text-white">Location:</span> {venue}
                  </div>
                  <div className="text-sm text-white/70">
                    <span className="text-white">Duration:</span> 3 hours
                  </div>
                  <div className="text-sm text-white/70">
                    <span className="text-white">Age Restriction:</span> 18+
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full bg-teal-500 hover:bg-teal-400 text-white">
              View More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

