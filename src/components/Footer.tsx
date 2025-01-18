import { Button } from "@/components/ui/button";
import { Tent, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "../../public/Logo.svg";
import logoLayer from "../../public/logolayer.svg";
import Image from "next/image";
import { Fira_Code, Montserrat, Raleway } from "next/font/google";

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

export default function Footer() {
  return (
    <footer className="bg-[#161C21] text-white">
      {/* Responsive Top Banner */}
      <div className="bg-[#242E38] py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Tent className="w-6 h-6" />
            <div>
              <span className={`${montserrat.className} text-lg font-semibold text-white`}>List your show</span>
              <span className={`${raleway.className} hidden md:inline text-[#FFFFFFB2] ml-2 text-lg font-medium`}>
                Got an Experience? Partner and get your event listed on FairSeat
              </span>
            </div>
          </div>
          <Button className={`${firaCode.className} bg-[#0497AA] hover:bg-cyan-600 text-white rounded-full px-6 w-full sm:w-auto font-medium text-sm`}>
            Contact Today!
          </Button>
        </div>
      </div>

      {/* Responsive Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Newsletter */}
          <div className="space-y-6 sm:space-y-8 text-center sm:text-left col-span-2 lg:col-span-1">
            <div className="flex gap-2 items-center justify-center sm:justify-start">
              <Image src={logo} alt="FairSeat Logo" width={30} height={30} />
              <Image
                src={logoLayer}
                alt="FairSeat Logo"
                width={120}
                height={30}
              />
            </div>
            <div>
              <h3 className={`${montserrat.className} text-2xl font-medium mb-2`}>Stay Updated!</h3>
              <p className={`${raleway.className} text-[#FFFFFFB2] font-medium text-lg mb-4`}>
                Join our community for the latest events and offers.
              </p>
              <Button className={`${firaCode.className} bg-[#0497AA] hover:bg-cyan-500 text-white rounded-full px-8 w-full sm:w-auto font-medium text-sm`}>
                Join
              </Button>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className={`${montserrat.className} text-2xl font-medium mb-6`}>Explore</h3>
            <ul className={`${raleway} text-lg font-medium space-y-3`}>
              {["Home", "Events", "Features", "Stories", "FAQs"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
          <h3 className={`${montserrat.className} text-2xl font-medium mb-6`}>Legal</h3>
            <ul className={`${raleway} text-lg font-medium space-y-3`}>
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
          <h3 className={`${montserrat.className} text-2xl font-medium mb-6`}>Socials</h3>
            <ul className={`${raleway} text-lg font-medium space-y-3`}>
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
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="relative flex flex-col items-center gap-4 sm:gap-6">
          <hr className="w-4/12 sm:w-5/12 absolute left-0 top-3" />
          <Image
            src={logoLayer}
            alt="FairSeat Logo"
            width={120}
            height={30}
            className="z-[90]"
          />
          <hr className="w-4/12 sm:w-5/12 absolute right-0 top-3" />
          <div className="flex gap-4 sm:gap-6">
            {[Instagram, Linkedin, Facebook, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
          <p className={`${raleway.className} text-sm font-normal sm:text-sm text-[#FFFFFFB2] text-center`}>
            © 2025 FairSeat. All rights reserved. The content, trademarks, and
            intellectual property on this platform are owned by FairSeat and are
            protected under applicable copyright laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
