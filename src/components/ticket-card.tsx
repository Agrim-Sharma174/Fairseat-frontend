'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import frontTic from "../../public/ticket front.png"
import backTic from "../../public/ticket back.png"

interface TicketCardProps {
  type: 'center' | 'left' | 'right' | 'leftExt' | 'rightExt'
}

export function TicketCard({ type }: TicketCardProps) {
  // Define width and height based on type
  const width = 296
  const height = 366

  // Calculate transform and opacity based on type
  const transforms = {
    leftExt: 'translateX(0%) scale(0.85) rotateY(35deg)',
    left: 'translateX(-8%) scale(0.9) rotateY(25deg)',
    center: 'scale(1)',
    right: 'translateX(8%) scale(0.9) rotateY(-25deg)',
    rightExt: 'translateX(0%) scale(0.85) rotateY(-35deg)'
  }

  const opacities = {
    leftExt: '0.3',
    left: '0.6',
    center: '1',
    right: '0.6',
    rightExt: '0.3'
  }

  if (type === 'center') {
    return (
      <div 
        className="relative group h-full"
        style={{ 
          width,
          height,
          transform: transforms[type],
          transition: 'all 0.5s ease-in-out',
          zIndex: 50
        }}
      >
        <div className="relative preserve-3d duration-500 group-hover:[transform:rotateY(180deg)] w-[296px] h-[366px]">
          {/* Front of the center ticket */}
          <div className="absolute backface-hidden w-full h-full">
            <Image
              src={frontTic || "/placeholder.svg"}
              alt="Ticket Front"
              width={width}
              height={height}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>
          
          {/* Back of the center ticket */}
          <div className="absolute backface-hidden w-full h-full [transform:rotateY(180deg)]">
            <Image
              src={backTic || "/placeholder.svg"}
              alt="Ticket Back"
              width={width}
              height={height}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    )
  }

  // For side and extreme tickets
  const ticketImages = {
    left: '/leftsecticket.png',
    right: '/rightsecticket.png',
    leftExt: '/leftextticket.png',
    rightExt: '/rightextticket.png'
  }

  return (
    <div 
      className="relative"
      style={{ 
        width,
        height,
        transform: transforms[type],
        opacity: opacities[type],
        transition: 'all 0.5s ease-in-out',
        zIndex: type === 'leftExt' || type === 'rightExt' ? 10 : 20,
        transformStyle: 'preserve-3d'
      }}
    >
      <Image
        src={ticketImages[type] || "/placeholder.svg"}
        alt="Ticket"
        width={width}
        height={height}
        className="w-full h-full object-cover rounded-xl shadow-xl"
      />
    </div>
  )
}

