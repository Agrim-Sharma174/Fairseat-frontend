import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Fira_Code, Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface TicketCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TicketCard({ icon: Icon, title, description }: TicketCardProps) {
  return (
    <Card className="relative w-[360px] h-[330px] rounded-[16px] bg-gray-500/30 border-none overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-[-135px] left-[-135px]">
        <div className="w-[341px] h-[341px] rounded-full bg-gray-700/20" />
        <div className="absolute top-[7px] left-[7px] w-[300px] h-[300px] rounded-full bg-gray-700/20" />
      </div>

      {/* Content */}
      <CardContent className="relative h-full flex flex-col p-6">
        <div className="w-12 h-12 rounded-full bg-[#60C9DD] flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="mt-auto mb-8">
          <h3 className={`${firaCode.className} text-lg text-white font-normal leading-tight mb-2`}>
            {title}
          </h3>
          <p className={`${raleway.className} text-gray-300 text-sm font-normal leading-relaxed`}>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
