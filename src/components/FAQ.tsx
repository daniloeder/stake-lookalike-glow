
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

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
  const [openItem, setOpenItem] = useState<number | null>(null);
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-header">
        <span className="faq-icon">❓</span>
        <h2 className="faq-title">Still Have Questions?</h2>
      </div>

      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openItem === index ? 'faq-open' : ''}`}
          >
            <button className="faq-question" onClick={() => toggleItem(index)}>
              <span className="question-text">{faq.question}</span>
              <ChevronDown className="faq-icon-chevron" />
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-footer">
        <button className="guides-button">
          Read our guides
        </button>
      </div>
    </div>
  );
};

export default FAQ;
