import { Bot, Shield, Ticket, Wallet } from "lucide-react";
import TicketCard from "./TicketCard";

const features = [
  {
    icon: Bot,
    title: "Bot-Free Ticketing",
    description:
      "Ensure real fans always get the tickets they genuinely deserve, eliminating automated purchases.",
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
          <span className="px-4 py-1 text-sm rounded-full bg-[#8080804D] text-[#FFFFFFB2] w-fit">
            Our features
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#FFFFFFB2] font-medium">
            <span className="text-white">Explore Features</span> Of Our Solution
          </h2>
        </div>
        <div className="flex justify-center sm:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-auto">
            {features.map((feature, index) => (
              <TicketCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
