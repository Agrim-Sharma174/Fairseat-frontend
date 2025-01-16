import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQs = [
  {
    question: "What makes FairSeat different from other ticketing platforms?",
    answer:
      "FairSeat leverages blockchain technology to ensure transparent and fair ticket sales. Each transaction is securely recorded, eliminating the chances of ticket duplication, fraud, or scalping. Our platform prioritizes fairness and ensures that tickets reach genuine buyers at fair prices.",
  },
  {
    question: "How does blockchain help prevent ticket scalping?",
    answer:
      "Blockchain technology creates an immutable record of ticket ownership and transfers. This prevents unauthorized duplication and ensures that each ticket can only be resold through our authorized platform, effectively eliminating scalping opportunities.",
  },
  {
    question: "Can I resell my ticket if I can't attend the event?",
    answer:
      "Yes, you can resell your ticket through our platform. Our secure resale system ensures fair pricing and prevents scalping while allowing legitimate transfers between users.",
  },
  {
    question: "What makes FairSeat different from other ticketing platforms?",
    answer:
      "Our unique combination of blockchain technology, secure verification processes, and commitment to fair pricing sets us apart. We prioritize genuine fans and ensure transparent transactions.",
  },
  {
    question: "How do I know my ticket purchase is secure?",
    answer:
      "Every transaction on FairSeat is secured by blockchain technology and encrypted. You'll receive a unique digital signature for your ticket, and our platform provides real-time verification of ticket authenticity.",
  },
];

export default function FAQSection() {
  return (
    <div className="min-h-screen text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-left gap-2 mb-8 sm:mb-12">
          <span className="px-4 py-1 text-sm rounded-full bg-white/10 w-fit">
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {FAQs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none rounded-lg bg-[#242E38] backdrop-blur-sm transition-all duration-150"
            >
              <AccordionTrigger className="hover:no-underline py-4 sm:py-6 text-left px-4 sm:px-6 text-base sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 bg-[#161C21] p-4 sm:p-6 text-base sm:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12 sm:mt-20 space-y-4">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-thin bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
            Join Us In This Revolution
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Be part of our community and stay in the loop!
          </p>
          <button className="rounded-full bg-[#0497AA] px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-white hover:bg-cyan-500 transition-all">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
}
