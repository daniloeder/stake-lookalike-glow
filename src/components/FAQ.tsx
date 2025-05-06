
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who is Stake?",
    answer: "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages.\n\nWith a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games.\n\nStake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues.\n\nWe host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform."
  },
  {
    question: "Is Stake Licensed?",
    answer: "Yes, Stake is fully licensed and regulated under the laws of Curacao. We operate with a commitment to maintaining high standards of fairness, security, and responsible gambling."
  },
  {
    question: "Is Betting on Stake Safe?",
    answer: "Yes, Stake employs industry-leading security measures to ensure all transactions and personal data are protected. We use advanced encryption technology and strict security protocols."
  },
  {
    question: "What Currencies Can I Bet With?",
    answer: "Stake offers a wide range of cryptocurrencies including Bitcoin, Ethereum, Litecoin, Dogecoin, and many more. We also offer selected local currencies in specific regions."
  },
  {
    question: "What Types of Casino Games Can I Play?",
    answer: "Stake offers thousands of games including slots, table games, game shows, and live dealer games from top providers. We also have exclusive Stake Original games developed in-house."
  },
  {
    question: "What Sports Can I Bet On?",
    answer: "You can bet on a wide variety of sports including football, basketball, tennis, cricket, eSports, and many more. We offer pre-match and in-play betting options."
  },
  {
    question: "How Do I Watch Live Streams?",
    answer: "Live streams are available for selected events. To access them, log in to your account, navigate to the live betting section, and look for events with the live stream icon."
  }
];

const FAQ = () => {
  return (
    <div className="mb-12">
      <div className="mb-6 flex items-center">
        <span className="mr-2 text-xl">❓</span>
        <h2 className="text-xl font-bold text-white">Still Have Questions?</h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="mb-2 rounded-lg bg-[#17242D] data-[state=open]:bg-[#192731]"
          >
            <AccordionTrigger className="px-4 py-4 text-left hover:no-underline">
              <span className="text-white">{faq.question}</span>
              <ChevronUp className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-0 text-gray-300">
              <p className="whitespace-pre-line">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-4">
        <Button variant="outline" className="border-[#1A9AEF] bg-transparent text-[#1A9AEF] hover:bg-[#1A9AEF]/10">
          Read our guides
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
