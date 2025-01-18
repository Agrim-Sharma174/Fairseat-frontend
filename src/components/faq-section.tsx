import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";

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

const FAQs = [
  {
    question: "What makes FairSeat different from other ticketing platforms?",
    answer: "FairSeat leverages blockchain technology to ensure transparent and fair ticket sales. Each transaction is securely recorded, eliminating the chances of ticket duplication, fraud, or scalping. Our platform prioritizes fairness and ensures that tickets reach genuine buyers at fair prices.",
  },
  {
    question: "How does blockchain help prevent ticket scalping?",
    answer: "Blockchain technology creates an immutable record of ticket ownership and transfers. This prevents unauthorized duplication and ensures that each ticket can only be resold through our authorized platform, effectively eliminating scalping opportunities.",
  },
  {
    question: "Can I resell my ticket if I can't attend the event?",
    answer: "Yes, you can resell your ticket through our platform. Our secure resale system ensures fair pricing and prevents scalping while allowing legitimate transfers between users.",
  },
  {
    question: "What makes FairSeat different from other ticketing platforms?",
    answer: "Our unique combination of blockchain technology, secure verification processes, and commitment to fair pricing sets us apart. We prioritize genuine fans and ensure transparent transactions.",
  },
  {
    question: "How do I know my ticket purchase is secure?",
    answer: "Every transaction on FairSeat is secured by blockchain technology and encrypted. You'll receive a unique digital signature for your ticket, and our platform provides real-time verification of ticket authenticity.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-r from-[#0497AA]/10 to-[#60C9DD]/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0497AA]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-left gap-2 mb-8 sm:mb-12">
          <span className={`${firaCode.className} px-4 py-1 font-normal text-sm rounded-full bg-gradient-to-r from-[#0497AA] to-[#60C9DD] text-white w-fit`}>
            Get Answers
          </span>
          <h2 className={`${montserrat.className} text-3xl sm:text-4xl text-white font-medium max-w-2xl`}>
            <span className="text-white">Common Questions</span> About Our Platform
          </h2>
          <p className={`${raleway.className} text-white/70 text-lg mt-4 max-w-2xl`}>
            Find answers to frequently asked questions about our blockchain-powered ticketing solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 group hover:border-[#60C9DD]/30"
              >
                <AccordionTrigger
                  className={`${raleway.className} hover:no-underline py-5 px-6 text-left font-medium text-lg text-white group-hover:text-[#60C9DD] transition-colors`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-[#60C9DD]/10 text-[#0497AA] group-hover:bg-[#60C9DD]/20 transition-all">
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  className={`${raleway.className} text-white/70 px-6 pb-5 pt-2 text-base leading-relaxed ml-14`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0497AA]/20 to-[#60C9DD]/20 rounded-2xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#60C9DD]/10 text-[#0497AA]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className={`${montserrat.className} text-xl text-white font-medium`}>
                    Still Have Questions?
                  </h3>
                </div>

                <p className={`${raleway.className} text-white/70`}>
                  Join our community to get instant answers from our team and connect with other users.
                </p>

                <Link
                  href="https://t.me/+nA4Ph03kEjU4M2Jl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    ${firaCode.className} 
                    inline-block 
                    rounded-full 
                    bg-gradient-to-r 
                    from-[#0497AA] 
                    to-[#60C9DD] 
                    px-8 
                    py-3 
                    text-white 
                    font-medium 
                    hover:from-[#0497AA] 
                    hover:to-[#60C9DD] 
                    transition-all
                    shadow-lg
                    hover:shadow-[#60C9DD]/25
                  `}
                >
                  Join Our Community
                </Link>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#60C9DD]/20 border-2 border-black" />
                    ))}
                  </div>
                  <span className={`${firaCode.className} text-sm text-white/70`}>
                    1,000+ members already joined
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
