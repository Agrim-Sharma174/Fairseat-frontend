import { Button } from "@/components/ui/button"
import { Tent, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1d1f] text-white">
      {/* Top Banner */}
      <div className="bg-[#1c2124] py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Tent className="w-6 h-6" />
            <div>
              <span className="font-medium">List your show</span>
              <span className="hidden md:inline text-gray-400 ml-2">
                Got an Experience? Partner and get your event listed on FairSeat
              </span>
            </div>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6">
            Contact Today!
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Newsletter */}
          <div className="space-y-8">
            <div className="flex items-center text-2xl font-bold">
              <span className="text-cyan-500">Fair</span>
              <span>Seat</span>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Stay Updated!</h3>
              <p className="text-gray-400 mb-4">
                Join our community for the latest events and offers.
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8">
                Join
              </Button>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Explore</h3>
            <ul className="space-y-3">
              {["Home", "Events", "Features", "Stories", "FAQs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Socials</h3>
            <ul className="space-y-3">
              {[
                { name: "Instagram", icon: Instagram },
                { name: "LinkedIn", icon: Linkedin },
                { name: "Facebook", icon: Facebook },
                { name: "Twitter", icon: Twitter },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center text-2xl font-bold">
              <span className="text-cyan-500">Fair</span>
              <span>Seat</span>
            </div>
            <div className="flex gap-6">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400 text-center">
              © 2025 FairSeat. All rights reserved. The content, trademarks, and intellectual property on this platform are owned by FairSeat and are protected under applicable copyright laws.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

