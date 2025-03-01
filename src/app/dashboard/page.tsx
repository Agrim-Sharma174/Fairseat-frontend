"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  QrCode,
  Plus,
  Calendar,
  DollarSign,
  Music,
  ChevronDown,
  MapPin,
  Users,
} from "lucide-react";
import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import concert_pic from "../../../public/concert_pic.jpeg";
import concert_crowd_pic from "../../../public/concert_crowd_pic.jpeg";
import logo from "../../../public/Logo.svg";
import logoLayer from "../../../public/logolayer.svg";

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
    image: concert_pic,
    type: "Music",
    attendees: 1200,
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
    image: concert_pic,
    type: "Music",
    attendees: 800,
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
    image: concert_pic,
    type: "Conference",
    attendees: 500,
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
    image: concert_pic,
    type: "Music",
    attendees: 350,
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
    image: concert_pic,
    type: "Music",
    attendees: 600,
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
    image: concert_pic,
    type: "Music",
    attendees: 900,
  },
];

// Filter options
const dateOptions = ["All Dates", "This Week", "This Month", "Next Month"];
const priceOptions = [
  "All Prices",
  "Under ₹1,000",
  "₹1,000 - ₹2,000",
  "Above ₹2,000",
];
const typeOptions = [
  "All Types",
  "Music",
  "Conference",
  "Festival",
  "Workshop",
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("All Dates");
  const [priceFilter, setPriceFilter] = useState("All Prices");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter events based on search and filters
  useEffect(() => {
    let result = events;

    // Search filter
    if (searchTerm) {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date filter
    if (dateFilter !== "All Dates") {
      // This is a simplified example - in a real app, you'd implement actual date filtering logic
      if (dateFilter === "This Week") {
        // Filter for this week
      } else if (dateFilter === "This Month") {
        // Filter for this month
      } else if (dateFilter === "Next Month") {
        // Filter for next month
      }
    }

    // Price filter
    if (priceFilter !== "All Prices") {
      if (priceFilter === "Under ₹1,000") {
        result = result.filter(
          (event) => Number.parseInt(event.price.replace(/[^\d]/g, "")) < 1000
        );
      } else if (priceFilter === "₹1,000 - ₹2,000") {
        result = result.filter((event) => {
          const price = Number.parseInt(event.price.replace(/[^\d]/g, ""));
          return price >= 1000 && price <= 2000;
        });
      } else if (priceFilter === "Above ₹2,000") {
        result = result.filter(
          (event) => Number.parseInt(event.price.replace(/[^\d]/g, "")) > 2000
        );
      }
    }

    // Type filter
    if (typeFilter !== "All Types") {
      result = result.filter((event) => event.type === typeFilter);
    }

    setFilteredEvents(result);
  }, [searchTerm, dateFilter, priceFilter, typeFilter]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500/30 mb-4"></div>
          <div className="text-cyan-400 text-xl">Loading events...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex gap-2 items-center justify-center sm:justify-start">
              <Image src={logo} alt="FairSeat Logo" width={30} height={30} />
              <Image
                src={logoLayer}
                alt="FairSeat Logo"
                width={120}
                height={30}
              />
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/organizer/dashboard">
              <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all">
                <span className={`${firaCode.className}`}>
                  Organizer Dashboard
                </span>
              </button>
            </Link>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
              <span className="sr-only">Profile</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <Image
            src={concert_crowd_pic}
            alt="Concert crowd"
            width={1200}
            height={400}
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-8">
            <h1 className={`${montserrat.className} text-4xl font-bold mb-2`}>
              Discover Live Events
            </h1>
            <p
              className={`${raleway.className} text-lg text-gray-200 max-w-xl`}
            >
              Find and secure tickets for the hottest concerts, festivals, and
              events with blockchain-powered security.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800/50 backdrop-blur-md p-4 rounded-full mb-8 border border-gray-700 -translate-y-44 z-[1000] mx-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full bg-gray-700/50 border border-gray-600 rounded-full py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Date Filter */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Calendar size={18} />
              </div>
              <select
                className="w-full appearance-none bg-gray-700/50 border border-gray-600 rounded-full py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                {dateOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>

            {/* Price Filter */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <DollarSign size={18} />
              </div>
              <select
                className="w-full appearance-none bg-gray-700/50 border border-gray-600 rounded-full py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                {priceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Music size={18} />
              </div>
              <select
                className="w-full appearance-none bg-gray-700/50 border border-gray-600 rounded-full py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                {typeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Link href={`/event/${event.id}`} key={event.id}>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group cursor-pointer h-full flex flex-col">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-70"></div>
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
                      <div className="bg-cyan-500/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {event.type}
                      </div>
                      <div className="bg-purple-500/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                        <Users size={12} />
                        {event.attendees}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col">
                    <div className="mb-3">
                      <h3
                        className={`${montserrat.className} font-semibold text-xl mb-1 group-hover:text-cyan-400 transition-colors`}
                      >
                        {event.title}
                      </h3>
                      <p
                        className={`${raleway.className} text-gray-400 text-sm`}
                      >
                        {event.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2 mb-4 flex-grow">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={16} className="text-gray-400" />
                        <span className={`${raleway.className} text-sm`}>
                          {event.date} • {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin size={16} className="text-gray-400" />
                        <span className={`${raleway.className} text-sm`}>
                          {event.venue}, {event.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div
                        className={`${firaCode.className} text-lg font-medium text-cyan-400`}
                      >
                        {event.price}
                      </div>
                      <div className="text-xs text-gray-400">
                        By {event.organizer}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3
                className={`${montserrat.className} text-xl font-medium mb-2`}
              >
                No events found
              </h3>
              <p className={`${raleway.className} text-gray-400`}>
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
