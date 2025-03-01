"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Calendar, Clock, MapPin, User, Download, Share2, ArrowLeft, QrCode } from "lucide-react"
import { Fira_Code, Montserrat, Raleway } from "next/font/google"
import { QRCodeSVG } from "qrcode.react"
import ticket_pic from "../../../../public/ticket_pic.webp"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

// Sample event data
const events = [
  {
    id: 1,
    title: "Neon Nights Festival",
    subtitle: "Electronic Dance Music Extravaganza",
    date: "Mar 15, 2025",
    time: "8:00 PM",
    venue: "Cyber Arena",
    location: "Mumbai",
    price: "₹1,500",
    organizer: "Pulse Productions",
    image: ticket_pic,
  },
  {
    id: 2,
    title: "Rhythm & Blues Collective",
    subtitle: "Soul Music Revival",
    date: "Apr 2, 2025",
    time: "7:30 PM",
    venue: "Echo Lounge",
    location: "Delhi",
    price: "₹1,200",
    organizer: "Harmony Events",
    image: ticket_pic,
  },
]

// Sample user data
const userData = {
  name: "Rahul Sharma",
  email: "rahul.sharma@example.com",
  phone: "+91 98765 43210",
}

export default function TicketPage() {
  const params = useParams()
  const router = useRouter()
  const [event, setEvent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [ticketId, setTicketId] = useState("")
  const ticketRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate API call to get event details
    const fetchEvent = () => {
      const id = Number(params.id)
      const foundEvent = events.find((e) => e.id === id)

      setTimeout(() => {
        setEvent(foundEvent)
        // Generate a random ticket ID
        setTicketId(
          `T${Math.floor(Math.random() * 10000)
            .toString()
            .padStart(5, "0")}`,
        )
        setIsLoading(false)
      }, 1500)
    }

    fetchEvent()
  }, [params.id])

  const handleGoBack = () => {
    router.back()
  }

  // Generate QR code data
  const qrCodeData = JSON.stringify({
    ticketId: ticketId,
    eventId: event?.id,
    eventName: event?.title,
    attendeeName: userData.name,
    timestamp: new Date().toISOString(),
  })

  // Function to download ticket as image
  const downloadTicket = () => {
    if (!ticketRef.current) return

    // In a real app, you would use html2canvas or a similar library
    // to convert the ticket div to an image for download
    alert("Ticket download functionality would be implemented here")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500/30 mb-4"></div>
          <div className="text-cyan-400 text-xl">Generating your ticket...</div>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className={`${montserrat.className} text-2xl font-semibold mb-4`}>Event not found</h2>
          <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={handleGoBack}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={handleGoBack}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span className={`${montserrat.className}`}>Back</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={downloadTicket}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors">
              <Share2 size={18} />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className={`${montserrat.className} text-2xl font-bold text-center mb-8`}>
            Your Ticket
          </h1>
          
          {/* Ticket Card */}
          <div 
            ref={ticketRef}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-3xl overflow-hidden mb-8"
          >
            {/* Ticket Header */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
              <Image 
                src={ticket_pic} 
                alt={event.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h2 className={`${montserrat.className} text-xl font-bold mb-1`}>
                  {event.title}
                </h2>
                <p className={`${raleway.className} text-gray-300`}>
                  {event.subtitle}
                </p>
              </div>
            </div>
            
            {/* Ticket Details */}
            <div className="p-6 border-b border-dashed border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-400" />
                    <span className={`${raleway.className}`}>{event.date}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Time</p>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-cyan-400" />
                    <span className={`${raleway.className}`}>{event.time}</span>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-400 mb-1">Venue</p>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-cyan-400" />
                    <span className={`${raleway.className}`}>{event.venue}, {event.location}</span>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-400 mb-1">Attendee</p>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-cyan-400" />
                    <span className={`${raleway.className}`}>{userData.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Ticket ID</p>
                    <p className={`${firaCode.className} text-sm font-medium`}>{ticketId}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Price</p>
                    <p className={`${firaCode.className} text-lg font-medium text-cyan-400`}>{event.price}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="p-6 flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl mb-3">
                <QRCodeSVG 
                  value={qrCodeData}
                  size={180}
                  level="H"
                  includeMargin={false}
                />
              </div>
              <p className="text-xs text-gray-400 text-center">
                Present this QR code at the venue for entry
              </p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className={`${montserrat.className} text-lg font-semibold mb-4 flex items-center gap-2`}>
              <QrCode size={18} className="text-cyan-400" />
              Ticket Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mt-0.5">✓</div>
                <span className={`${raleway.className} text-gray-300`}>
                  This ticket is secured by blockchain technology and cannot be duplicated.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mt-0.5">✓</div>
                <span className={`${raleway.className} text-gray-300`}>
                  Your ticket includes a digital collectible NFT that will be sent to your wallet.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mt-0.5">✓</div>
                <span className={`${raleway.className} text-gray-300`}>
                  Please arrive at least 30 minutes before the event starts.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mt-0.5">✓</div>
                <span className={`${raleway.className} text-gray-300`}>
                  Download this ticket or take a screenshot to ensure you have access even without internet.
                </span>
              </li>
            </ul>
          </div>
          
          {/* Support Info */}
          <div className="text-center">
            <p className={`${raleway.className} text-sm text-gray-400 mb-2`}>
              Need help with your ticket?
            </p>
            <p className="text-xs text-gray-500">
              Contact support at support@fairseat.com or call +91 1234567890
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

