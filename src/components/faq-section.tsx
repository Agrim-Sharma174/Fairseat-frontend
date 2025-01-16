import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Button } from "@/components/ui/button"
  
  const FAQs = [
    {
      question: "What makes FairSeat different from other ticketing platforms?",
      answer: "FairSeat leverages blockchain technology to ensure transparent and fair ticket sales. Each transaction is securely recorded, eliminating the chances of ticket duplication, fraud, or scalping. Our platform prioritizes fairness and ensures that tickets reach genuine buyers at fair prices."
    },
    {
      question: "How does blockchain help prevent ticket scalping?",
      answer: "Blockchain technology creates an immutable record of ticket ownership and transfers. This prevents unauthorized duplication and ensures that each ticket can only be resold through our authorized platform, effectively eliminating scalping opportunities."
    },
    {
      question: "Can I resell my ticket if I can't attend the event?",
      answer: "Yes, you can resell your ticket through our platform. Our secure resale system ensures fair pricing and prevents scalping while allowing legitimate transfers between users."
    },
    {
      question: "What makes FairSeat different from other ticketing platforms?",
      answer: "Our unique combination of blockchain technology, secure verification processes, and commitment to fair pricing sets us apart. We prioritize genuine fans and ensure transparent transactions."
    },
    {
      question: "How do I know my ticket purchase is secure?",
      answer: "Every transaction on FairSeat is secured by blockchain technology and encrypted. You'll receive a unique digital signature for your ticket, and our platform provides real-time verification of ticket authenticity."
    }
  ]
  
  export default function FAQSection() {
    return (
      <div className="min-h-screen bg-[#001a1a] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <span className="px-4 py-1 text-sm rounded-full bg-white/10">Questions</span>
            <h2 className="text-4xl font-medium">Frequently Asked Questions (FAQs)</h2>
          </div>
  
          <Accordion type="single" collapsible className="space-y-4">
            {FAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none rounded-xl bg-white/5 backdrop-blur-sm px-6"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
  
          <div className="text-center mt-20 space-y-4">
            <h3 className="text-4xl font-medium">Join Us In This Revolution</h3>
            <p className="text-gray-300">Be part of our community and stay in the loop!</p>
            <Button 
              className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  