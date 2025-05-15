
import { useState } from "react";
import Footer from "../components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

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

// CSS styles
const styles = `
.vip-club-page {
  width: 90%;
  margin-left: 5%;
  padding-bottom: 2rem;
  color: white;
}

.vip-hero {
  width: 112%;
  margin-left: -6%;
  padding: 4rem 6%;
  background-color: #0F212E;
  display: flex;
  position: relative;
  align-items: center;
  min-height: 300px;
  margin-bottom: 3rem;
  background-image: linear-gradient(to right, rgba(15, 33, 46, 1), rgba(15, 33, 46, 0.9));
  overflow: hidden;
}

.vip-hero-content {
  max-width: 60%;
  z-index: 2;
}

.vip-hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.vip-hero-subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #9ca3af;
  max-width: 80%;
}

.vip-signup-button {
  padding: 0.75rem 2rem;
  background-color: #007BFF;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.vip-signup-button:hover {
  background-color: #0069d9;
}

.vip-hero-image {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.vip-star-icon {
  width: 180px;
  height: 180px;
  position: relative;
}

.vip-star-icon:before {
  content: '★';
  font-size: 180px;
  color: #FF9F1C;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vip-section {
  margin-bottom: 4rem;
}

.vip-section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

.vip-section-subtitle {
  text-align: center;
  color: #9ca3af;
  margin-bottom: 2rem;
}

.vip-tiers-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.vip-tier-card {
  background-color: #1A2C38;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.vip-tier-card:hover {
  transform: translateY(-5px);
}

.vip-tier-header {
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vip-tier-star {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.7);
}

.vip-tier-label {
  padding: 0.25rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
}

.vip-tier-content {
  padding: 1.5rem;
}

.vip-tier-amount {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: white;
  text-align: center;
}

.vip-tier-wager {
  color: #9ca3af;
  text-align: center;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}

.vip-tier-benefits {
  list-style: none;
  padding: 0;
}

.vip-benefit-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: #9ca3af;
}

.vip-benefit-check {
  margin-right: 0.5rem;
  color: #4CAF50;
  font-weight: bold;
}

.vip-benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.vip-benefit-card {
  background-color: #1A2C38;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s;
}

.vip-benefit-card:hover {
  transform: translateY(-5px);
}

.vip-benefit-icon {
  font-size: 2rem;
  min-width: 40px;
}

.vip-benefit-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.vip-benefit-description {
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.5;
}

.vip-faq-container {
  background-color: #0F212E;
  border-radius: 8px;
  overflow: hidden;
}

.vip-faq-tabs {
  display: flex;
  border-bottom: 1px solid #2F4553;
  background-color: #1A2C38;
}

.vip-faq-tab {
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.2s;
  border-bottom: 3px solid transparent;
}

.vip-faq-tab.active {
  color: white;
  border-bottom-color: #007BFF;
}

.vip-faq-content {
  padding: 1rem;
}

.vip-faq-item {
  margin-bottom: 0.5rem;
}

.vip-faq-question {
  width: 100%;
  padding: 1rem;
  background-color: #1A2C38;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vip-faq-question.active {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vip-faq-icon {
  color: #9ca3af;
}

.vip-faq-answer {
  padding: 1rem;
  background-color: #172431;
  color: #9ca3af;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .vip-hero {
    flex-direction: column;
    padding: 3rem 6% 5rem;
  }

  .vip-hero-content {
    max-width: 100%;
  }

  .vip-hero-image {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 2rem;
  }

  .vip-hero-subtitle {
    max-width: 100%;
  }

  .vip-tiers-container,
  .vip-benefits-grid {
    grid-template-columns: 1fr;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default VIPClub;
