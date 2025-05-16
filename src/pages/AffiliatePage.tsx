
import { useState } from "react";
import Footer from "../components/Footer";

const AffiliatePage = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "casino" | "sportsbook" | "poker">("overview");
  
  // Commission calculation formulas
  const formulas = {
    casino: "(Edge as decimal * wagered / 2) * commission rate",
    sportsbook: "(0.03 * wagered / 2) * commission rate",
    poker: "Rake * commission rate"
  };

  // Stats data
  const stats = [
    { value: "29.5M", label: "Worldwide Customers" },
    { value: "33", label: "Payment Methods" },
    { value: "16", label: "Languages Supported" }
  ];

  // Advantages data
  const advantages = [
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

// CSS styles
const styles = `
.affiliate-page {
  width: 90%;
  margin-left: 5%;
  padding-bottom: 2rem;
  color: white;
}

.affiliate-header {
  width: 112%;
  margin-left: -6%;
  padding: 1.5rem 6%;
  background-color: #1A2C38;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}

.affiliate-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.affiliate-icon {
  color: #0D7E3E;
  font-size: 1.5rem;
}

.affiliate-nav {
  display: flex;
  margin-bottom: 2rem;
  background-color: #1A2C38;
  border-radius: 8px;
  overflow: hidden;
}

.affiliate-tab {
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: 600;
}

.affiliate-tab:hover {
  background-color: #213743;
}

.affiliate-tab.active {
  background-color: #0D7E3E;
  color: white;
}

.affiliate-commission-block {
  background-color: #1A2C38;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
}

.commission-intro {
  margin-bottom: 1.5rem;
  color: #e0e0e0;
  font-size: 0.95rem;
}

.commission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.commission-card {
  background-color: #213743;
  border-radius: 8px;
  padding: 1.5rem;
}

.commission-card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.commission-icon {
  font-size: 1.5rem;
}

.commission-card-text {
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.commission-formula {
  padding: 0.75rem;
  background-color: #1A2C38;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.95rem;
  color: #e0e0e0;
}

.affiliate-templates {
  margin-bottom: 2.5rem;
}

.affiliate-section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.affiliate-section-subtitle {
  font-size: 0.95rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.templates-image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.templates-banner {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.affiliate-refer {
  background-color: #1A2C38;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 2rem;
}

.refer-content {
  flex: 3;
}

.refer-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.treasure-image {
  max-width: 100%;
  height: auto;
}

.refer-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.refer-subtitle {
  font-size: 0.95rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.stat-item {
  flex: 1;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #0D7E3E;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.85rem;
  color: #9ca3af;
}

.register-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.register-text {
  font-size: 0.95rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.register-buttons {
  display: flex;
  gap: 1rem;
}

.login-btn {
  padding: 0.75rem 1.5rem;
  background-color: #2F4553;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-btn:hover {
  background-color: #3A566B;
}

.register-btn {
  padding: 0.75rem 1.5rem;
  background-color: #0D7E3E;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.register-btn:hover {
  background-color: #0A6731;
}

.affiliate-how-it-works {
  margin-bottom: 2.5rem;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.step {
  background-color: #1A2C38;
  border-radius: 8px;
  padding: 1.25rem;
}

.step-number {
  font-size: 0.85rem;
  color: #0D7E3E;
  margin-bottom: 0.5rem;
}

.step-title {
  font-size: 1.1rem;
  font-weight: 600;
}

.video-container {
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
}

.video-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('public/images/promo3.avif');
  background-size: cover;
  background-position: center;
}

.play-button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(13, 126, 62, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.play-button:hover {
  transform: scale(1.1);
  background-color: rgba(13, 126, 62, 1);
}

.affiliate-advantages {
  margin-bottom: 2.5rem;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.advantage-card {
  background-color: #1A2C38;
  border-radius: 8px;
  padding: 1.75rem;
  transition: transform 0.2s;
}

.advantage-card:hover {
  transform: translateY(-5px);
}

.advantage-icon {
  font-size: 2rem;
  margin-bottom: 1.25rem;
  display: inline-block;
  padding: 0.75rem;
  border-radius: 8px;
  background-color: #0D7E3E;
}

.advantage-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.advantage-description {
  font-size: 0.9rem;
  color: #9ca3af;
  line-height: 1.5;
}

@media (max-width: 992px) {
  .affiliate-refer {
    flex-direction: column;
  }
  
  .refer-image {
    order: -1;
  }
  
  .stats-grid {
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .steps-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .affiliate-nav {
    flex-wrap: wrap;
  }
  
  .affiliate-tab {
    flex: 1;
    min-width: 120px;
    text-align: center;
  }
  
  .commission-grid {
    grid-template-columns: 1fr;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .register-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default AffiliatePage;
