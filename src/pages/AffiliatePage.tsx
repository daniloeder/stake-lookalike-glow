import { useState } from "react";
import Footer from "../components/Footer";
import '../styles/AffiliatePage.css';

interface Stat {
  value: string;
  label: string;
}

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

const AffiliatePage = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "casino" | "sportsbook" | "poker">("overview");
  
  // Commission calculation formulas
  const formulas = {
    casino: "(Edge as decimal * wagered / 2) * commission rate",
    sportsbook: "(0.03 * wagered / 2) * commission rate",
    poker: "Rake * commission rate"
  };

  // Stats data
  const stats: Stat[] = [
    { value: "29.5M", label: "Worldwide Customers" },
    { value: "33", label: "Payment Methods" },
    { value: "16", label: "Languages Supported" }
  ];

  // Advantages data
  const advantages: Advantage[] = [
    {
      title: "Instant Payout",
      description: "Skip the wait. See earnings instantly in your account.",
      icon: "💸"
    },
    {
      title: "Lifetime Commission",
      description: "If the people you refer keep playing, you keep getting paid.",
      icon: "♾️"
    },
    {
      title: "Market Leading Player Value",
      description: "Grow your earnings with some of the highest returns offered to players.",
      icon: "📈"
    },
    {
      title: "Customize Your Commission",
      description: "Tailor your commission plan to fit your unique business needs.",
      icon: "⚙️"
    }
  ];

  return (
    <div className="affiliate-page">
      {/* Affiliate header */}
      <div className="affiliate-header">
        <h1 className="affiliate-title">
          <span className="affiliate-icon">✦</span>
          Affiliate Program
        </h1>
      </div>
      
      {/* Navigation tabs */}
      <div className="affiliate-nav">
        <div 
          className={`affiliate-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </div>
        <div 
          className={`affiliate-tab ${activeTab === 'casino' ? 'active' : ''}`}
          onClick={() => setActiveTab('casino')}
        >
          Casino
        </div>
        <div 
          className={`affiliate-tab ${activeTab === 'sportsbook' ? 'active' : ''}`}
          onClick={() => setActiveTab('sportsbook')}
        >
          Sportsbook
        </div>
        <div 
          className={`affiliate-tab ${activeTab === 'poker' ? 'active' : ''}`}
          onClick={() => setActiveTab('poker')}
        >
          Poker
        </div>
      </div>

      {/* Commission info section */}
      <div className="affiliate-commission-block">
        <p className="commission-intro">Our default commission rate is 10% but you can calculate specific rates for our products using the formulas below.</p>

        <div className="commission-grid">
          <div className="commission-card">
            <h3 className="commission-card-title">
              <span className="commission-icon">🎰</span>
              Casino
            </h3>
            <p className="commission-card-text">
              All of our games have a different house edge. You can derive your commission using the following formula:
            </p>
            <div className="commission-formula">{formulas.casino}</div>
          </div>

          <div className="commission-card">
            <h3 className="commission-card-title">
              <span className="commission-icon">🏆</span>
              Sportsbook
            </h3>
            <p className="commission-card-text">
              All sports bets are applied at a 3% theoretical house edge. You can derive your commission using the following formula:
            </p>
            <div className="commission-formula">{formulas.sportsbook}</div>
          </div>

          <div className="commission-card">
            <h3 className="commission-card-title">
              <span className="commission-icon">♠️</span>
              Poker
            </h3>
            <p className="commission-card-text">
              We collect a small percentage of each pot (known as Rake) as a fee for hosting the game. Your commission is calculated using Rake. You can use the formula below to derive your commission:
            </p>
            <div className="commission-formula">{formulas.poker}</div>
          </div>
        </div>
      </div>

      {/* Banner templates section */}
      <div className="affiliate-templates">
        <h2 className="affiliate-section-title">Templates to Help Your Campaign Stand Out</h2>
        <p className="affiliate-section-subtitle">
          We've created digital banner templates to make it easier for you to promote your campaigns online.
        </p>
        <div className="templates-image">
          <img src="public/images/promo3.avif" alt="Marketing templates" className="templates-banner" />
        </div>
      </div>

      {/* Refer and earn section */}
      <div className="affiliate-refer">
        <div className="refer-content">
          <h2 className="refer-title">Refer and Earn Big With Our Affiliate Program</h2>
          <p className="refer-subtitle">
            Earn commission for all bets placed by your referrals across Casino and Sportsbook.
          </p>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="register-section">
            <p className="register-text">
              To register your interest in becoming a Stake Affiliate, please login to your Stake account. Don't have a Stake account yet? Tap the 'Register' button below to get started.
            </p>
            
            <div className="register-buttons">
              <button className="login-btn">Login</button>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        </div>
        
        <div className="refer-image">
          <img src="public/images/promo1.png" alt="Treasure chest" className="treasure-image" />
        </div>
      </div>

      {/* How it works section */}
      <div className="affiliate-how-it-works">
        <h2 className="affiliate-section-title">Partnering With Us is Easy</h2>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">Step 1</div>
            <div className="step-title">Create your referral campaign</div>
          </div>
          
          <div className="step">
            <div className="step-number">Step 2</div>
            <div className="step-title">Share the referral link</div>
          </div>
          
          <div className="step">
            <div className="step-number">Step 3</div>
            <div className="step-title">Earn and withdraw your commission</div>
          </div>
        </div>
        
        {/* Video placeholder */}
        <div className="video-container">
          <div className="video-placeholder">
            <div className="play-button">▶</div>
          </div>
        </div>
      </div>

      {/* Advantages section */}
      <div className="affiliate-advantages">
        <h2 className="affiliate-section-title">Exclusive Advantages</h2>
        
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{advantage.icon}</div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AffiliatePage;
