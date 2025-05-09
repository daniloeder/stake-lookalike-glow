import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import BettingTable from "@/components/BettingTable";
import PromoBanners from "@/components/PromoBanners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Gamepad } from "lucide-react";

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
            {Array.from({ length: 8 }).map((_, index) => (
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
            {Array.from({ length: 8 }).map((_, index) => (
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
          
        <BettingTable />
        
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
  width: 90%;
  margin-left: 5%;
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
  margin-left: -8%;
  padding-left: 8%;
  padding-right: 8%;
  width: 116%;

  background-image: url('/images/index-header-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  background-color: #1060B7;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.register-button:hover {
  background-color: #1060B7;
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
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  background-color: #2E4351;
  padding: 0.5rem;
}

.social-button:hover {
  transform: scale(1.1);
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
  background-color: #132635;
  border-radius: 4px;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: #557086;
  margin-top: 2rem;
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

.games-section, .sports-section {
  margin-top: 2rem;
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

.games-grid, .sports-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.75rem;
}

@media (max-width: 1400px) {
  .games-grid, .sports-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 1024px) {
  .games-grid, .sports-grid {
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
  
  .games-grid, .sports-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .games-grid, .sports-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.game-card {
  position: relative;
  border-radius: 0.375rem;
  overflow: hidden;
  transition: transform 0.2s;
  width: 150px;
  height: auto;
}

.game-position {
  position: absolute;
  top: 0.5rem;
  left: -0.2rem;
  color: white;
  background-color: #2F4553;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
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
  width: 150px;
  height: auto;
  position: relative;
}

.game-image {
  width: 250px;
  height: auto;
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
  border-bottom: 2px solid #1060B7;
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