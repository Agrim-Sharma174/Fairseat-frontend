"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Info,
  ArrowLeft,
  Share2,
  Heart,
  QrCode,
  ChevronRight,
} from "lucide-react";
import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import event_pic from "../../../../public/event_pic.jpeg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    image: event_pic,
    type: "Music",
    attendees: 1200,
    description:
      "Experience the ultimate electronic music festival featuring world-renowned DJs, immersive light shows, and state-of-the-art sound systems. Neon Nights Festival brings together the best of EDM, house, and techno music for an unforgettable night of dancing and celebration.",
    lineup: [
      "DJ Quantum",
      "Electra Pulse",
      "Neon Collective",
      "Bass Architects",
    ],
    latitude: 19.076,
    longitude: 72.8777,
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
    image: event_pic,
    type: "Music",
    attendees: 800,
    description:
      "Join us for an intimate evening celebrating the rich traditions of rhythm and blues music. The R&B Collective brings together talented vocalists and musicians for a soulful experience that honors the classics while showcasing contemporary interpretations.",
    lineup: [
      "Soul Sisters",
      "Rhythm Kings",
      "Blue Note Ensemble",
      "Harmony Quartet",
    ],
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    id: 3,
    title: "Tech Beats Conference",
    subtitle: "Where Music Meets Technology",
    date: "Apr 18, 2025",
    time: "10:00 AM",
    venue: "Digital Dome",
    location: "Bangalore",
    price: "₹2,500",
    organizer: "FutureSounds",
    image: event_pic,
    type: "Conference",
    attendees: 500,
    description:
      "Tech Beats Conference is the premier event for music technology enthusiasts, producers, and industry professionals. Explore the latest innovations in music production, distribution, and performance through workshops, panels, and demonstrations led by experts.",
    lineup: [
      "Dr. Audio (Keynote)",
      "Production Panel",
      "AI Music Workshop",
      "Future of Streaming Discussion",
    ],
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    id: 4,
    title: "Indie Rock Showcase",
    subtitle: "Featuring Rising Stars",
    date: "May 5, 2025",
    time: "9:00 PM",
    venue: "Underground Hub",
    location: "Pune",
    price: "₹800",
    organizer: "Alternative Sounds",
    image: event_pic,
    type: "Music",
    attendees: 350,
    description:
      "Discover the next big names in indie rock at our showcase featuring the most promising emerging artists. The Indie Rock Showcase provides a platform for original music in an intimate setting where fans can connect directly with performers.",
    lineup: [
      "The Echoes",
      "Neon Drifters",
      "Analog Hearts",
      "Midnight Reverie",
    ],
    latitude: 18.5204,
    longitude: 73.8567,
  },
  {
    id: 5,
    title: "Classical Fusion Night",
    subtitle: "Traditional Meets Contemporary",
    date: "May 20, 2025",
    time: "6:30 PM",
    venue: "Heritage Hall",
    location: "Chennai",
    price: "₹1,800",
    organizer: "Melodic Ventures",
    image: event_pic,
    type: "Music",
    attendees: 600,
    description:
      "Experience the beautiful harmony of classical and contemporary music as talented artists blend traditional instruments and compositions with modern arrangements. Classical Fusion Night celebrates the timeless appeal of classical music while embracing innovation.",
    lineup: [
      "Raga Ensemble",
      "String Theory Quartet",
      "Fusion Collective",
      "Classical Reimagined",
    ],
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    id: 6,
    title: "Hip Hop Revolution",
    subtitle: "Street Culture Celebration",
    date: "Jun 8, 2025",
    time: "8:30 PM",
    venue: "Urban Square",
    location: "Hyderabad",
    price: "₹1,000",
    organizer: "Beat Collective",
    image: event_pic,
    type: "Music",
    attendees: 900,
    description:
      "Hip Hop Revolution is more than just a concert—it's a celebration of street culture featuring live performances, breakdancing, graffiti art, and freestyle battles. Join us for an authentic hip hop experience that honors the roots of the movement.",
    lineup: [
      "Flow Masters",
      "Rhythm Poets",
      "Beat Breakers",
      "Urban Storytellers",
    ],
    latitude: 17.385,
    longitude: 78.4867,
  },
];

export default function EventDetail() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Simulate API call to get event details
    const fetchEvent = () => {
      const id = Number(params.id);
      const foundEvent = events.find((e) => e.id === id);

      setTimeout(() => {
        setEvent(foundEvent);
        setIsLoading(false);
      }, 1000);
    };

    fetchEvent();
  }, [params.id]);

  const handleGoBack = () => {
    router.back();
  };

  // Get related events (excluding current event)
  const relatedEvents = events
    .filter((e) => e.type === event?.type && e.id !== event?.id)
    .slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500/30 mb-4"></div>
          <div className="text-cyan-400 text-xl">Loading event details...</div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className={`${montserrat.className} text-2xl font-semibold mb-4`}>
            Event not found
          </h2>
          <p className="mb-6">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={handleGoBack}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
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
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-full ${
                liked
                  ? "bg-red-500/20 text-red-400"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              <Heart size={20} className={liked ? "fill-red-400" : ""} />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-gray-400 hover:text-white">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Event Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
          <Image
            src={event_pic}
            alt={event.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-cyan-500/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                {event.type}
              </div>
              <div className="bg-purple-500/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Users size={12} />
                {event.attendees} attending
              </div>
            </div>
            <h1
              className={`${montserrat.className} text-3xl md:text-4xl font-bold mb-2`}
            >
              {event.title}
            </h1>
            <p className={`${raleway.className} text-xl text-gray-300`}>
              {event.subtitle}
            </p>
            <div className="text-sm text-gray-400 mt-2">
              By {event.organizer}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Date</div>
                  <div className={`${raleway.className} font-medium`}>
                    {event.date}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Time</div>
                  <div className={`${raleway.className} font-medium`}>
                    {event.time}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Venue</div>
                  <div className={`${raleway.className} font-medium`}>
                    {event.venue}
                  </div>
                </div>
              </div>
            </div>

            {/* About Event */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h2
                className={`${montserrat.className} text-xl font-semibold mb-4 flex items-center gap-2`}
              >
                <Info size={20} className="text-cyan-400" />
                About Event
              </h2>
              <p
                className={`${raleway.className} text-gray-300 leading-relaxed mb-6`}
              >
                {event.description}
              </p>

              {/* Lineup */}
              {event.lineup && (
                <div>
                  <h3
                    className={`${montserrat.className} text-lg font-medium mb-3`}
                  >
                    Lineup
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {event.lineup.map((artist: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className={`${raleway.className}`}>{artist}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Location Map */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h2
                className={`${montserrat.className} text-xl font-semibold mb-4 flex items-center gap-2`}
              >
                <MapPin size={20} className="text-cyan-400" />
                Location
              </h2>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 text-gray-500" />
                  <p className="text-gray-400">
                    {event.venue}, {event.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Ticket Info */}
          <div className="space-y-6">
            {/* Ticket Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <div
                    className={`${firaCode.className} text-2xl font-bold text-cyan-400`}
                  >
                    {event.price}
                  </div>
                  <div className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                    Available
                  </div>
                </div>

                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl transition-all mb-4 flex items-center justify-center gap-2">
                  <QrCode size={18} />
                  <Link href="/ticket/1" className="text-white">
                    <span className={`${firaCode.className} font-medium`}>
                      Register Now
                    </span>
                  </Link>
                </button>

                <div className="text-center text-xs text-gray-400">
                  Secure, transparent ticketing powered by blockchain
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`${montserrat.className} text-lg font-medium mb-4`}
                >
                  Ticket includes:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      ✓
                    </div>
                    <span className={`${raleway.className}`}>
                      Entry to the event
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      ✓
                    </div>
                    <span className={`${raleway.className}`}>
                      Digital collectible NFT
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      ✓
                    </div>
                    <span className={`${raleway.className}`}>
                      Anti-scalping protection
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      ✓
                    </div>
                    <span className={`${raleway.className}`}>
                      Secure QR code access
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`${montserrat.className} text-2xl font-semibold`}>
                Similar Events
              </h2>
              <Link
                href="/dashboard"
                className="text-cyan-400 flex items-center gap-1 hover:text-cyan-300"
              >
                View all <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((relEvent) => (
                <Link href={`/event/${relEvent.id}`} key={relEvent.id}>
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all group cursor-pointer">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-70"></div>
                      <Image
                        src={relEvent.image || "/placeholder.svg"}
                        alt={relEvent.title}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 z-20">
                        <div className="bg-cyan-500/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {relEvent.type}
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3
                        className={`${montserrat.className} font-medium text-lg mb-1 group-hover:text-cyan-400 transition-colors`}
                      >
                        {relEvent.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                        <Calendar size={14} />
                        <span>{relEvent.date}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className={`${firaCode.className} text-cyan-400`}>
                          {relEvent.price}
                        </div>
                        <div className="text-xs text-gray-400">
                          {relEvent.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
