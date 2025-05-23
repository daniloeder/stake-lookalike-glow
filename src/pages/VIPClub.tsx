import { useState } from "react";
import Footer from "../components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import '../styles/VIPClub.css';

const VIPClub = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'benefits' | 'hosts'>('general');
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionId);
    }
  };

  // VIP Ranking Tiers
  const vipTiers = [
    {
      level: "Bronze",
      color: "#CD7F32",
      amount: "$10k",
      wagerAmount: "Wager amount",
      benefits: [
        "Monthly bonuses",
        "Level Up bonuses",
        "Rakeback",
        "Weekly bonuses"
      ]
    },
    {
      level: "Silver",
      color: "#C0C0C0",
      amount: "$50k",
      wagerAmount: "Wager amount",
      benefits: [
        "Monthly bonuses",
        "Level Up bonuses",
        "Rakeback",
        "Weekly bonuses",
        "Bonus growth"
      ]
    },
    {
      level: "Gold",
      color: "#FFD700",
      amount: "$100k",
      wagerAmount: "Wager amount",
      benefits: [
        "Monthly bonuses",
        "Level Up bonuses",
        "Rakeback",
        "Weekly bonuses",
        "Bonus growth"
      ]
    },
    {
      level: "Platinum",
      color: "#48D1CC",
      amount: "$250k - $1M",
      wagerAmount: "Wager amount",
      benefits: [
        "Monthly bonuses",
        "Level Up bonuses",
        "Rakeback",
        "Weekly bonuses",
        "Bonus growth",
        "Daily bonuses / Reload"
      ]
    }
  ];

  // VIP Benefits
  const vipBenefits = [
    {
      title: "Boost",
      description: "Every week and every month, expect a fresh bonus based on your recent games. The more you play, the higher the bonuses.",
      icon: "🔸"
    },
    {
      title: "Dedicated VIP Host",
      description: "Receive your own dedicated VIP host who will support and cater to your betting needs.",
      icon: "🎀"
    },
    {
      title: "Recent Play Bonuses",
      description: "Having a rough streak of luck? Stake offers money back on losses every time you level up.",
      icon: "🔶"
    },
    {
      title: "Level-Ups",
      description: "Reach a new level and get paid. The level-ups get better the higher you go.",
      icon: "💠"
    },
    {
      title: "Bespoke benefits",
      description: "Work with your dedicated VIP host to tailor benefits to your gaming needs.",
      icon: "⭕"
    }
  ];

  // FAQ Questions
  const faqQuestions = [
    {
      id: "why-best",
      question: "Why is Stake's VIP program the best?",
      answer: "Stake's VIP program offers unmatched bonuses, personalized service, and exclusive perks that grow as you play. Our tiered system ensures rewards at every level with transparent requirements."
    },
    {
      id: "bonus-amount",
      question: "How much has Stake given out in bonuses?",
      answer: "Stake has distributed over $100 million in bonuses to our VIP members across all tiers, with individual bonuses reaching up to $50,000 for our most active platinum players."
    },
    {
      id: "weekly-raffle",
      question: "How do I enter the $75,000 weekly raffle?",
      answer: "All active Stake users are automatically entered into our weekly $75,000 raffle. Every $1,000 wagered during the week earns you one ticket. Winners are announced every Monday on our Telegram channel."
    },
    {
      id: "telegram",
      question: "Where can I find the Stake Telegram Channel?",
      answer: "You can join our main Telegram channel by visiting t.me/StakeOfficial for general announcements and updates about our platform."
    },
    {
      id: "vip-telegram",
      question: "Where can I find the Stake VIP Telegram channel?",
      answer: "VIP members receive an exclusive invitation to our VIP Telegram channel directly from their dedicated host once they qualify for Silver tier or above."
    }
  ];

  return (
    <div className="vip-club-page">
      {/* Hero section */}
      <div className="vip-hero">
        <div className="vip-hero-content">
          <h1 className="vip-hero-title">The unrivalled VIP experience</h1>
          <p className="vip-hero-subtitle">
            Unlock exclusive benefits and receive instantly withdrawable bonuses without any strings attached
          </p>
          <button className="vip-signup-button">Sign up</button>
        </div>
        <div className="vip-hero-image">
          <div className="vip-star-icon"></div>
        </div>
      </div>

      {/* VIP Ranking System */}
      <div className="vip-section">
        <h2 className="vip-section-title">Stake VIP ranking system</h2>
        <div className="vip-tiers-container">
          {vipTiers.map((tier, index) => (
            <div className="vip-tier-card" key={index}>
              <div className="vip-tier-header" style={{ backgroundColor: tier.color }}>
                <div className="vip-tier-star">★</div>
                <div className="vip-tier-label">{tier.level}</div>
              </div>
              <div className="vip-tier-content">
                <h3 className="vip-tier-amount">{tier.amount}</h3>
                <p className="vip-tier-wager">{tier.wagerAmount}</p>
                <ul className="vip-tier-benefits">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="vip-benefit-item">
                      <span className="vip-benefit-check">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Benefits */}
      <div className="vip-section">
        <h2 className="vip-section-title">Stake VIP Club benefits</h2>
        <div className="vip-benefits-grid">
          {vipBenefits.map((benefit, index) => (
            <div className="vip-benefit-card" key={index}>
              <div className="vip-benefit-icon">{benefit.icon}</div>
              <div className="vip-benefit-content">
                <h3 className="vip-benefit-title">{benefit.title}</h3>
                <p className="vip-benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="vip-section">
        <h2 className="vip-section-title">Frequently Asked Questions</h2>
        <p className="vip-section-subtitle">Reach out to our award winning support team</p>

        <div className="vip-faq-container">
          <div className="vip-faq-tabs">
            <button 
              className={`vip-faq-tab ${activeTab === 'general' ? 'active' : ''}`} 
              onClick={() => setActiveTab('general')}
            >
              General
            </button>
            <button 
              className={`vip-faq-tab ${activeTab === 'benefits' ? 'active' : ''}`} 
              onClick={() => setActiveTab('benefits')}
            >
              Benefits
            </button>
            <button 
              className={`vip-faq-tab ${activeTab === 'hosts' ? 'active' : ''}`} 
              onClick={() => setActiveTab('hosts')}
            >
              VIP Hosts
            </button>
          </div>

          <div className="vip-faq-content">
            {faqQuestions.map((faq) => (
              <div className="vip-faq-item" key={faq.id}>
                <button 
                  className={`vip-faq-question ${activeQuestion === faq.id ? 'active' : ''}`}
                  onClick={() => toggleQuestion(faq.id)}
                >
                  {faq.question}
                  {activeQuestion === faq.id ? (
                    <ChevronUp className="vip-faq-icon" size={20} />
                  ) : (
                    <ChevronDown className="vip-faq-icon" size={20} />
                  )}
                </button>
                {activeQuestion === faq.id && (
                  <div className="vip-faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VIPClub;
