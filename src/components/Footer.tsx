import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import email icon
import logo from "../../public/Logo.svg";
import logoLayer from "../../public/logolayer.svg";
import Image from "next/image";
import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import { MailIcon, Tent } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

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
              <span
                className={`${montserrat.className} text-lg font-semibold text-white`}
              >
                List your show
              </span>
              <span
                className={`${raleway.className} hidden md:inline text-[#FFFFFFB2] ml-2 text-lg font-medium`}
              >
                Got an Experience? Partner and get your event listed on FairSeat
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Email Icon */}
            <a
              href="mailto:fairseat3@gmail.com"
              target="_blank"
              className="text-white hover:text-cyan-500"
            >
              <MailIcon className="w-6 h-6" />
            </a>
            {/* Contact Today Button */}
            <Button
              className={`${firaCode.className} bg-[#0497AA] hover:bg-cyan-600 text-white rounded-full px-6 w-full sm:w-auto font-medium text-sm`}
              onClick={() =>
                (window.location.href =
                  "https://wa.me/7973521148?text=Hi,%20I%20am%20interested%20in%20FairSeat%20details!")
              }
            >
              Contact Today!
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="relative flex flex-col items-center gap-4 sm:gap-6">
          <hr className="w-3/12 sm:w-5/12 absolute left-0 top-3" />
          <div className="flex gap-2 items-center justify-center sm:justify-start">
            <Image src={logo} alt="FairSeat Logo" width={30} height={30} />
            <Image
              src={logoLayer}
              alt="FairSeat Logo"
              width={120}
              height={30}
            />
          </div>
          <hr className="w-3/12 sm:w-5/12 absolute right-0 top-3" />
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://www.instagram.com/fairseathq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/fairseat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://x.com/fairseathq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <BsTwitterX className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
          <p
            className={`${raleway.className} text-sm font-normal sm:text-sm text-[#FFFFFFB2] text-center`}
          >
            © 2025 FairSeat. All rights reserved. The content, trademarks, and
            intellectual property on this platform are owned by FairSeat and are
            protected under applicable copyright laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
