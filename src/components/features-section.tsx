import { Bot, Shield, Ticket, Wallet } from 'lucide-react';
import TicketCard from "./TicketCard";
import CollectibleCard from "./CollectibleCard";
import { Fira_Code, Montserrat, Raleway } from 'next/font/google';

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
    icon: Bot,
    title: "Bot-Free Ticketing",
    description:
      "Ensure real fans get the tickets they deserve, preventing automated purchases.",
  },
  {
    icon: Wallet,
    title: "Transparent Transactions",
    description:
      "Blockchain-powered tamper-proof records for every ticket transaction.",
  },
  {
    icon: Shield,
    title: "Anti-Scalping Protection",
    description:
      "Tickets tied to verified user profiles to prevent unauthorized reselling.",
  },
  {
    icon: Ticket,
    title: "Fair Distribution",
    description:
      "Equal opportunity for all fans to purchase tickets through our verified system.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-left gap-2 mb-8 sm:mb-12">
          <span className={`${firaCode.className} px-4 py-1 font-normal text-sm rounded-full bg-[#8080804D] text-[#FFFFFFB2] w-fit`}>
            Our features
          </span>
          <h2 className={`${montserrat.className} text-3xl sm:text-4xl text-[#FFFFFFB2] font-medium`}>
            <span className="text-white">Explore Features</span> Of Our Solution
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left side - 2x2 feature cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <TicketCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          {/* Right side - collectible card */}
          <div className="lg:col-span-2">
            <CollectibleCard />
          </div>
        </div>
      </div>
    </section>
  );
}
