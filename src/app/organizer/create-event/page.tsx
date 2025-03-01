"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  Tag,
  Users,
  Info,
  ImageIcon,
  ArrowLeft,
  Save,
  Upload,
} from "lucide-react";
import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import Link from "next/link";

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

// Event types
const eventTypes = [
  "Music",
  "Conference",
  "Festival",
  "Workshop",
  "Sports",
  "Theater",
  "Other",
];

export default function CreateEvent() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    type: "Music",
    date: "",
    time: "",
    venue: "",
    location: "",
    price: "",
    totalTickets: "",
    description: "",
    status: "Draft",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/organizer/dashboard");
    }, 1500);
  };

  const handleGoBack = () => {
    router.back();
  };

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
            <span className={`${montserrat.className}`}>Back to Dashboard</span>
          </button>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              form="create-event-form"
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white px-6 py-2 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span className={`${firaCode.className}`}>Saving...</span>
                </>
              ) : (
                <>
                  <Save size={18} />
                  <span className={`${firaCode.className}`}>Save Event</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${montserrat.className} text-3xl font-bold mb-8`}>
            Create New Event
          </h1>

          <form id="create-event-form" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Basic Info */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h2
                    className={`${montserrat.className} text-xl font-semibold mb-6 flex items-center gap-2`}
                  >
                    <Info size={20} className="text-cyan-400" />
                    Basic Information
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="title"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Event Title*
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter event title"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subtitle"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Event Subtitle
                      </label>
                      <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleInputChange}
                        placeholder="Enter a short description"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="type"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Event Type*
                      </label>
                      <div className="relative">
                        <select
                          id="type"
                          name="type"
                          required
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full appearance-none bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Tag size={18} className="text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Event Description*
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Describe your event in detail"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Date, Time & Location */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h2
                    className={`${montserrat.className} text-xl font-semibold mb-6 flex items-center gap-2`}
                  >
                    <Calendar size={20} className="text-cyan-400" />
                    Date, Time & Location
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="date"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Event Date*
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Calendar size={18} className="text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Event Time*
                      </label>
                      <div className="relative">
                        <input
                          type="time"
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Clock size={18} className="text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="venue"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Venue Name*
                      </label>
                      <input
                        type="text"
                        id="venue"
                        name="venue"
                        required
                        value={formData.venue}
                        onChange={handleInputChange}
                        placeholder="Enter venue name"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        City/Location*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Enter city or location"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <MapPin size={18} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket Information */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h2
                    className={`${montserrat.className} text-xl font-semibold mb-6 flex items-center gap-2`}
                  >
                    <Users size={20} className="text-cyan-400" />
                    Ticket Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="price"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Ticket Price (₹)*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="price"
                          name="price"
                          required
                          value={formData.price}
                          onChange={handleInputChange}
                          placeholder="Enter ticket price"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <DollarSign size={18} className="text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="totalTickets"
                        className={`${raleway.className} block text-sm font-medium text-gray-300 mb-2`}
                      >
                        Total Tickets*
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="totalTickets"
                          name="totalTickets"
                          required
                          min="1"
                          value={formData.totalTickets}
                          onChange={handleInputChange}
                          placeholder="Enter total available tickets"
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Users size={18} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image Upload & Status */}
              <div className="space-y-8">
                {/* Image Upload */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h2
                    className={`${montserrat.className} text-xl font-semibold mb-6 flex items-center gap-2`}
                  >
                    <ImageIcon size={20} className="text-cyan-400" />
                    Event Image
                  </h2>

                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center">
                      {previewImage ? (
                        <div className="relative">
                          <img
                            src={previewImage || "/placeholder.svg"}
                            alt="Event preview"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => setPreviewImage(null)}
                            className="absolute top-2 right-2 bg-red-500/80 text-white p-1 rounded-full"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <div className="py-8">
                          <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                          <p className="text-sm text-gray-400 mb-2">
                            Upload event image
                          </p>
                          <p className="text-xs text-gray-500 mb-4">
                            PNG, JPG, GIF up to 5MB
                          </p>
                          <label className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors">
                            <Upload size={16} />
                            <span>Choose File</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageChange}
                            />
                          </label>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">
                      This image will be displayed on the event listing and
                      details page.
                    </p>
                  </div>
                </div>

                {/* Event Status */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h2
                    className={`${montserrat.className} text-xl font-semibold mb-6 flex items-center gap-2`}
                  >
                    <Info size={20} className="text-cyan-400" />
                    Event Status
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        id="status-draft"
                        name="status"
                        value="Draft"
                        checked={formData.status === "Draft"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 focus:ring-cyan-500"
                      />
                      <label htmlFor="status-draft" className="text-gray-300">
                        Save as Draft
                      </label>
                    </div>

                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        id="status-active"
                        name="status"
                        value="Active"
                        checked={formData.status === "Active"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 focus:ring-cyan-500"
                      />
                      <label htmlFor="status-active" className="text-gray-300">
                        Publish Immediately
                      </label>
                    </div>

                    <p className="text-xs text-gray-400 mt-4">
                      Draft events are not visible to users. Publish when you're
                      ready to start selling tickets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
