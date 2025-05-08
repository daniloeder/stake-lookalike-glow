
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import BettingTable from "@/components/BettingTable";
import PromoBanners from "@/components/PromoBanners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Gamepad } from "lucide-react";
import SportsCategoryCards from "@/components/SportsCategoryCards";

const Index = () => {
  return (
    <div className="index-page">
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">World's Largest Online Casino and Sportsbook</h1>
            <Link to="/register">
              <button className="register-button">
                Register
              </button>
            </Link>
            <div className="social-signup">
              <p className="social-text">Or sign up with</p>
              <div className="social-buttons">
                <button className="social-button facebook">f</button>
                <button className="social-button google">G</button>
                <button className="social-button whatsapp">W</button>
                <button className="social-button discord">D</button>
              </div>
            </div>
          </div>
          
          <div className="hero-cards">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-badge">
                  <span className="badge-icon">🎮</span>
                  <span className="badge-text">Casino</span>
                </div>
                <span className="card-count">85,545</span>
              </div>
              <img src="public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png" alt="Casino" className="card-image" />
            </div>
            
            <div className="hero-card">
              <div className="card-header">
                <div className="card-badge">
                  <span className="badge-icon">⚽</span>
                  <span className="badge-text">Sports</span>
                </div>
                <span className="card-count">50,698</span>
              </div>
              <img src="public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png" alt="Sports" className="card-image" />
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
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="game-card">
                <div className="game-position">{index+1}</div>
                {index < 3 && (
                  <div className="game-badge">
                    {index === 0 && "Exclusive"}
                    {index === 1 && "Exclusive"}
                    {index === 2 && "Early Access"}
                  </div>
                )}
                <div className="game-image-container">
                  <img 
                    src={`public/lovable-uploads/${['e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png', 'fb85ff2a-543e-4c11-b199-05635ddcfe94.png', '0b97a448-73a0-467a-9f19-7c2e8abc678c.png', 'c81e0921-952f-42e9-9833-ff4c541b266f.png', 'dd8af98a-1fe6-4304-980a-c9946e7577ff.png', 'e528755e-4a3f-41a9-bb3b-aa5b1d9c1fa9.png', '02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png'][index % 7]}`}
                    alt={`Game ${index+1}`}
                    className="game-image"
                  />
                  <div className="game-overlay">
                    <button className="play-button">Play</button>
                  </div>
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
        
        <SportsCategoryCards />
        
        <PromoBanners />
        
        <div className="betting-section">
          <div className="betting-tabs">
            <button className="betting-tab active">Casino Bets</button>
            <button className="betting-tab">Sports Bets</button>
            <button className="betting-tab">
              Race Leaderboard
              <span className="live-dot"></span>
            </button>
          </div>
          
          <BettingTable />
        </div>
        
        <FAQ />
        
        <Footer />
      </main>
    </div>
  );
};

// CSS styles
const styles = `
.index-page {
  display: flex;
  flex-direction: column;
  background-color: #0F212E;
}

.main-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.hero-section {
  display: flex;
  min-height: 260px;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
}

.hero-content {
  max-width: 32rem;
}

.hero-title {
  margin-bottom: 1.5rem;
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
}

.register-button {
  margin-bottom: 1rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #1A9AEF;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.register-button:hover {
  background-color: #0F8CDD;
  transform: scale(1.05);
}

.social-signup {
  color: white;
}

.social-text {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #9ca3af;
}

.social-buttons {
  display: flex;
  gap: 0.5rem;
}

.social-button {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.social-button:hover {
  transform: scale(1.1);
}

.facebook {
  background-color: #3B5998;
  color: white;
}

.google {
  background-color: white;
  color: #0F8CDD;
}

.whatsapp {
  background-color: #25D366;
  color: white;
}

.discord {
  background-color: #5865F2;
  color: white;
}

.hero-cards {
  display: flex;
  gap: 1rem;
}

.hero-card {
  overflow: hidden;
  border-radius: 0.75rem;
  background-color: #17242D;
  transition: transform 0.2s;
  width: 280px;
}

.hero-card:hover {
  transform: scale(1.05);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
}

.card-badge {
  display: flex;
  align-items: center;
}

.badge-icon {
  margin-right: 0.5rem;
  font-size: 1.25rem;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
}

.card-count {
  font-size: 0.75rem;
  color: #10B981;
}

.card-image {
  height: 12rem;
  width: 100%;
  object-fit: cover;
}

.search-section {
  display: flex;
  margin-bottom: 2rem;
  background-color: #132635;
  border-radius: 4px;
  overflow: hidden;
}

.search-dropdown {
  background-color: #0c1720;
  padding: 0 15px;
  display: flex;
  align-items: center;
}

.search-type-button {
  background: none;
  border: none;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.search-icon-dropdown {
  width: 16px;
  height: 16px;
  transform: rotate(-90deg);
}

.games-section {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.section-title {
  display: flex;
  align-items: center;
}

.section-icon {
  margin-right: 0.5rem;
  font-size: 1.25rem;
  color: white;
}

.section-title h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.nav-arrows {
  display: flex;
  gap: 0.5rem;
}

.nav-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border: 1px solid #374151;
  border-radius: 9999px;
  background-color: #17242D;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}

.nav-arrow:hover {
  background-color: #0F1923;
  color: white;
}

.arrow-icon {
  height: 1rem;
  width: 1rem;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.75rem;
}

@media (max-width: 1400px) {
  .games-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .hero-cards {
    margin-top: 2rem;
    width: 100%;
  }
  
  .hero-card {
    width: 100%;
  }
  
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.game-card {
  position: relative;
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: #17242D;
  transition: transform 0.2s;
}

.game-position {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  z-index: 10;
}

.game-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #FF6B01;
  color: white;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  z-index: 10;
}

.game-image-container {
  position: relative;
}

.game-image {
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
}

.game-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.2s;
}

.game-image-container:hover .game-overlay {
  opacity: 1;
}

.play-button {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #1A9AEF;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.play-button:hover {
  background-color: #0F8CDD;
}

.game-info {
  padding: 0.5rem;
}

.game-players-count {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #10B981;
}

.player-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10B981;
  margin-right: 4px;
}

.betting-section {
  margin-bottom: 2rem;
}

.betting-tabs {
  display: flex;
  background-color: #0c1720;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  overflow: hidden;
}

.betting-tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
}

.betting-tab:hover {
  color: white;
}

.betting-tab.active {
  color: white;
  border-bottom: 2px solid #1A9AEF;
}

.live-dot {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10B981;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem 0;
  }
  
  .hero-title {
    font-size: 1.75rem;
  }
  
  .hero-cards {
    flex-direction: column;
  }
  
  .betting-tab {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Index;
