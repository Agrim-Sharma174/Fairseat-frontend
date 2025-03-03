"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Plus,
  Edit,
  Trash2,
  Users,
  QrCode,
  BarChart,
  Filter,
  Search,
  ChevronDown,
  Eye,
} from "lucide-react";
import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import logo from "../../../../public/Logo.svg";
import logoLayer from "../../../../public/logolayer.svg";
import event_pic from "../../../../public/concert_pic.jpeg";
import LoadingAnimation from "@/components/LoadingAnimation";

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

// Sample organizer events data
const organizerEvents = [
  {
    id: 1,
    title: "Neon Nights Festival",
    subtitle: "Electronic Dance Music Extravaganza",
    date: "Mar 15, 2025",
    time: "8:00 PM",
    venue: "Cyber Arena",
    location: "Mumbai",
    price: "₹1,500",
    image: event_pic,
    type: "Music",
    status: "Active",
    ticketsSold: 850,
    totalTickets: 1200,
    revenue: "₹12,75,000",
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
    image: event_pic,
    type: "Music",
    status: "Active",
    ticketsSold: 320,
    totalTickets: 800,
    revenue: "₹3,84,000",
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
    image: event_pic,
    type: "Conference",
    status: "Draft",
    ticketsSold: 0,
    totalTickets: 500,
    revenue: "₹0",
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
    image: event_pic,
    type: "Music",
    status: "Completed",
    ticketsSold: 350,
    totalTickets: 350,
    revenue: "₹2,80,000",
  },
];

// Filter options
const statusOptions = ["All Status", "Active", "Draft", "Completed"];
const typeOptions = [
  "All Types",
  "Music",
  "Conference",
  "Festival",
  "Workshop",
];

export default function OrganizerDashboard() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [filteredEvents, setFilteredEvents] = useState(organizerEvents);
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
    let result = organizerEvents;

    // Search filter
    if (searchTerm) {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== "All Status") {
      result = result.filter((event) => event.status === statusFilter);
    }

    // Type filter
    if (typeFilter !== "All Types") {
      result = result.filter((event) => event.type === typeFilter);
    }

    setFilteredEvents(result);
  }, [searchTerm, statusFilter, typeFilter]);

  // Dashboard stats
  const totalEvents = organizerEvents.length;
  const activeEvents = organizerEvents.filter(
    (e) => e.status === "Active"
  ).length;
  const totalTicketsSold = organizerEvents.reduce(
    (acc, event) => acc + event.ticketsSold,
    0
  );
  const totalRevenue = organizerEvents.reduce((acc, event) => {
    const revenue = event.revenue.replace(/[^\d]/g, "");
    return acc + (parseInt(revenue) || 0);
  }, 0);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href={"/dashboard"}>
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
            <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded ml-2">
              Organizer
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/organizer/scanner"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-gray-300 hover:text-white"
            >
              <QrCode size={20} />
              <span className="sr-only">QR Scanner</span>
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
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className={`${montserrat.className} text-3xl font-bold mb-2`}>
              Organizer Dashboard
            </h1>
            <p className={`${raleway.className} text-gray-400`}>
              Manage your events and track performance
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/organizer/scanner">
              <button className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-2 md:text-base md:px-6 md:py-3 rounded-xl transition-all">
                <QrCode size={20} />
                <span className={`${firaCode.className}`}>Scan QR</span>
              </button>
            </Link>
            <Link
              href="/organizer/create-event"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white text-sm px-3 py-2 md:text-base md:px-6 md:py-3 rounded-xl transition-all self-start md:self-center"
            >
              <Plus size={20} />
              <span className={`${firaCode.className}`}>Create New Event</span>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${raleway.className} text-gray-400`}>
                Total Events
              </h3>
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <Calendar size={20} />
              </div>
            </div>
            <p className={`${montserrat.className} text-3xl font-bold`}>
              {totalEvents}
            </p>
            <div className="mt-2 text-sm text-gray-400">
              <span className="text-green-400">+2</span> this month
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${raleway.className} text-gray-400`}>
                Active Events
              </h3>
              <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                <Calendar size={20} />
              </div>
            </div>
            <p className={`${montserrat.className} text-3xl font-bold`}>
              {activeEvents}
            </p>
            <div className="mt-2 text-sm text-gray-400">
              <span className="text-green-400">+1</span> this month
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${raleway.className} text-gray-400`}>
                Tickets Sold
              </h3>
              <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
                <Users size={20} />
              </div>
            </div>
            <p className={`${montserrat.className} text-3xl font-bold`}>
              {totalTicketsSold}
            </p>
            <div className="mt-2 text-sm text-gray-400">
              <span className="text-green-400">+120</span> this week
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${raleway.className} text-gray-400`}>
                Total Revenue
              </h3>
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <BarChart size={20} />
              </div>
            </div>
            <p className={`${montserrat.className} text-3xl font-bold`}>
              ₹{totalRevenue.toLocaleString("en-IN")}
            </p>
            <div className="mt-2 text-sm text-gray-400">
              <span className="text-green-400">+₹1,80,000</span> this month
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl mb-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Filter size={18} />
              </div>
              <select
                className="w-full appearance-none bg-gray-700/50 border border-gray-600 rounded-xl py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statusOptions.map((option) => (
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
                <Calendar size={18} />
              </div>
              <select
                className="w-full appearance-none bg-gray-700/50 border border-gray-600 rounded-xl py-3 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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

        {/* Events Table */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Date & Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Tickets
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <tr
                      key={event.id}
                      className="hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden mr-4">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              width={48}
                              height={48}
                              className="h-12 w-12 object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {event.title}
                            </div>
                            <div className="text-sm text-gray-400">
                              {event.type}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {event.date} • {event.time}
                        </div>
                        <div className="text-sm text-gray-400">
                          {event.venue}, {event.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${
                            event.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : event.status === "Draft"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {event.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {event.ticketsSold} / {event.totalTickets}
                        </div>
                        <div className="w-24 bg-gray-700 rounded-full h-1.5 mt-1">
                          <div
                            className="bg-cyan-500 h-1.5 rounded-full"
                            style={{
                              width: `${
                                (event.ticketsSold / event.totalTickets) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-cyan-400">
                          {event.revenue}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/event/${event.id}`}
                            className="p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600"
                          >
                            <Eye size={16} />
                            <span className="sr-only">View</span>
                          </Link>
                          <Link
                            href={`/organizer/edit-event/${event.id}`}
                            className="p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600"
                          >
                            <Edit size={16} />
                            <span className="sr-only">Edit</span>
                          </Link>
                          <button className="p-2 bg-gray-700 rounded-lg text-gray-300 hover:text-red-400 hover:bg-gray-600">
                            <Trash2 size={16} />
                            <span className="sr-only">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <Calendar className="h-12 w-12 text-gray-500 mb-4" />
                        <p className="text-gray-400 mb-2">No events found</p>
                        <p className="text-sm text-gray-500">
                          Try adjusting your filters or create a new event
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
