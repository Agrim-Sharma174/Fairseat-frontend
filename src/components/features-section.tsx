"use client";

import { Shield, Wallet, UserCheck, LineChart } from "lucide-react";
import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import Image from "next/image";
import CollectibleCard from "./CollectibleCard";

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

const features = [
  {
    icon: Shield,
    title: "Anti-Bot Protection",
    stat: "100%",
    description: "Advanced verification system ensures only real fans can purchase tickets, eliminating automated buying completely",
  },
  {
    icon: UserCheck,
    title: "Fan-First Distribution",
    stat: "90%+",
    description: "Direct-to-fan distribution system guarantees tickets reach genuine fans at original prices",
  },
  {
    icon: Wallet,
    title: "Price Control System",
    stat: "Original",
    description: "Smart contracts enforce original pricing, making ticket scalping technically impossible",
  },
  {
    icon: LineChart,
    title: "Market Transparency",
    stat: "Real-time",
    description: "Complete visibility into ticket availability and pricing, preventing artificial scarcity",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-left gap-2 mb-8 sm:mb-12">
          <span className={`${firaCode.className} px-4 py-1 font-normal text-sm rounded-full bg-cyan-500/20 text-cyan-200 w-fit`}>
            The Solution
          </span>
          <h2 className={`${montserrat.className} text-3xl sm:text-4xl text-[#FFFFFFB2] font-medium max-w-2xl`}>
            <span className="text-white">Revolutionary Features</span> - Putting Fans First
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Feature cards */}
          <div className="space-y-6 lg:cols-span-1">
            <p className={`${raleway.className} text-white/70 text-lg mb-8`}>
              Our blockchain-powered platform introduces innovative solutions that make ticket scalping technically impossible while ensuring fair distribution to genuine fans.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className={`${montserrat.className} text-lg text-white font-medium`}>
                      {feature.title}
                    </h3>
                  </div>
                  <div className={`${firaCode.className} text-2xl text-cyan-400 mb-2`}>
                    {feature.stat}
                  </div>
                  <p className={`${raleway.className} text-white/70 text-sm`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Interactive demo */}
          <div className="col-span-1 row-span-2 h-full pb-8">
            <CollectibleCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
