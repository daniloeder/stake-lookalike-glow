import SearchBar from "@/components/SearchBar";
import BettingTable from "@/components/BettingTable";
import PromoBanners from "@/components/PromoBanners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Gamepad } from "lucide-react";
import '../styles/Index.css';

const Index = () => {
  // Sample betting data for Index page
  const indexBettingData = [
    { id: 1, game: "Gold Vault Roulette", user: "Hidden", time: "3:53 PM", betAmount: 1013.5192500, multiplier: "0.00x", payout: -1013.5192500, currency: "₿" },
    { id: 2, game: "Keno", user: "Hidden", time: "3:53 PM", betAmount: 0.96187495, multiplier: "0.00x", payout: -0.96187495, currency: "₿" },
    { id: 3, game: "Gates of Olympus Su...", user: "Hidden", time: "3:53 PM", betAmount: 5000.0000000, multiplier: "3.03x", payout: 15152.5000000, currency: "₿", isWin: true },
    { id: 4, game: "Brute Force", user: "Hidden", time: "3:53 PM", betAmount: 1.20808802, multiplier: "0.00x", payout: -1.20808802, currency: "₿" },
    { id: 5, game: "Plinko", user: "shijian134", time: "3:53 PM", betAmount: 2.00000000, multiplier: "1,000.00x", payout: 2000.0000000, currency: "₿", isWin: true, isHot: true },
    { id: 6, game: "Keno", user: "Hidden", time: "3:53 PM", betAmount: 0.96187495, multiplier: "0.00x", payout: -0.96187495, currency: "₿" },
    { id: 7, game: "Brute Force", user: "Hidden", time: "3:53 PM", betAmount: 1.20808802, multiplier: "0.00x", payout: -1.20808802, currency: "₿" },
  ];
  // Define the tabs for the Index page
  const indexBettingTabs = [
    { id: "casino-bets", label: "Casino Bets" },
    { id: "sport-bets", label: "Sport Bets" },
    { id: "race-leaderboard", label: "Race Leaderboard", hasIndicator: true },
  ];
  
  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;
  
  return (
    <div className="index-page">
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">World's Largest Online Casino and Sportsbook</h1>
            <button 
              onClick={() => {
                // Find auth modal and open it with register mode
                const registerBtn = document.querySelector('.register-button') as HTMLElement;
                if (registerBtn) registerBtn.click();
              }} 
              className="register-button"
            >
              Register
            </button>
            <div className="social-signup">
              <p className="social-text">Or sign up with</p>
              <div className="social-buttons">
                <button className="social-button facebook">
                  <img src="src/assets/icons/facebook.svg" alt="Facebook" />
                </button>
                <button className="social-button google">
                  <img src="src/assets/icons/google.svg" alt="Google" />
                </button>
                <button className="social-button line">
                  <img src="src/assets/icons/line.svg" alt="Line" />
                </button>
                <button className="social-button twitch">
                  <img src="src/assets/icons/twitch.svg" alt="Twitch" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="hero-cards">
            <div className="hero-card">
              <img src="public/images/explore-casino-en.avif" alt="Casino" className="card-image" />
              <div className="card-header">
                <div className="card-badge">
                  <span className="badge-icon">🎮</span>
                  <span className="badge-text">Casino</span>
                </div>
                <span className="card-count">85,545</span>
              </div>
            </div>
            
            <div className="hero-card">
              <img src="public/images/explore-sports-en.avif" alt="Sports" className="card-image" />
              <div className="card-header">
                <div className="card-badge">
                  <span className="badge-icon">⚽</span>
                  <span className="badge-text">Sports</span>
                </div>
                <span className="card-count">50,698</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="search-section">
          <div className="search-dropdown">
            <button className="search-type-button">
              Casino <ChevronLeft className="search-icon-dropdown" />
            </button>
          </div>
          <SearchBar placeholder="Search your game" />
        </div>
        
        <div className="games-section">
          <div className="section-header">
            <div className="section-title">
              <Gamepad className="section-icon" />
              <h2>Trending Games</h2>
            </div>
            <div className="nav-arrows">
              <button className="nav-arrow">
                <ChevronLeft className="arrow-icon" />
              </button>
              <button className="nav-arrow">
                <ChevronRight className="arrow-icon" />
              </button>
            </div>
          </div>
          
          <div className="games-grid">
            {Array.from({ length: isMobile ? 6 : 8 }).map((_, index) => (
              <div key={index} className="game-card">
                <div className="game-position">{index+1}</div>
                <div className="game-image-container">
                  <img 
                    src={`public/images/${['game1.avif', 'game1.avif', 'game1.avif', 'game1.avif', 'game1.avif', 'game1.avif', 'game1.avif'][index % 7]}`}
                    alt={`Game ${index+1}`}
                    className="game-image"
                  />
                </div>
                <div className="game-info">
                  <div className="game-players-count">
                    <span className="player-dot"></span>
                    {[671, 96, 289, 49, 722, 107, 43, 566][index]} playing
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sports-section">
          <div className="section-header">
            <div className="section-title">
              <span className="section-icon">⚽</span>
              <h2>Trending Sports</h2>
            </div>
            <div className="nav-arrows">
              <button className="nav-arrow">
                <ChevronLeft className="arrow-icon" />
              </button>
              <button className="nav-arrow">
                <ChevronRight className="arrow-icon" />
              </button>
            </div>
          </div>
          
          <div className="sports-grid">
            {Array.from({ length: isMobile ? 6 : 8 }).map((_, index) => (
              <div key={index} className="game-card">
                <div className="game-position">{index+1}</div>
                <div className="game-image-container">
                  <img 
                    src={`public/images/${['sport1.png', 'sport1.png', 'sport1.png', 'sport1.png', 'sport1.png', 'sport1.png', 'sport1.png'][index % 7]}`}
                    alt={`Sport ${index+1}`}
                    className="game-image"
                  />
                </div>
                <div className="game-info">
                  <div className="game-players-count">
                    <span className="player-dot"></span>
                    {[423, 176, 589, 229, 312, 87, 543, 126][index]} watching
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <PromoBanners />
          
        <BettingTable 
          data={indexBettingData} 
          defaultActiveTab="casino-bets" 
          tabs={indexBettingTabs}
        />
        
        <FAQ />
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
