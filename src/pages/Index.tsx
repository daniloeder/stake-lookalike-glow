
import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import BettingTable from "@/components/BettingTable";
import PromoBanners from "@/components/PromoBanners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="index-page">
      <Header />
      
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">World's Largest Online Casino and Sportsbook</h1>
            <button className="register-button">
              Register
            </button>
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
                  <span className="badge-icon">🎰</span>
                  <span className="badge-text">Casino</span>
                </div>
                <span className="card-count">50,602</span>
              </div>
              <img src="public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png" alt="Casino" className="card-image" />
            </div>
            
            <div className="hero-card">
              <div className="card-header">
                <div className="card-badge">
                  <span className="badge-icon">⚽</span>
                  <span className="badge-text">Sports</span>
                </div>
                <span className="card-count">94,838</span>
              </div>
              <img src="public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png" alt="Sports" className="card-image" />
            </div>
          </div>
        </div>
        
        <SearchBar />
        
        <div className="games-section">
          <div className="section-header">
            <div className="section-title">
              <span className="section-icon">🎮</span>
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
                  <h3 className="game-title">Game Title {index+1}</h3>
                  <p className="game-provider">Game Provider</p>
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
  min-height: 100vh;
  flex-direction: column;
  background-color: #0F212E;
}

.main-content {
  flex: 1;
  padding: 0;
}

.hero-section {
  display: flex;
  height: 260px;
  align-items: center;
  justify-content: space-between;
  background-color: #0f212e;
  padding: 0 4rem;
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
  padding: 0.5rem 2rem;
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
  height: 2rem;
  width: 2rem;
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
  display: none;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .hero-cards {
    display: flex;
  }
}

.hero-card {
  overflow: hidden;
  border-radius: 0.375rem;
  background-color: #17242D;
  transition: transform 0.2s;
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
  height: 8rem;
  width: 100%;
  object-fit: cover;
}

.games-section {
  padding: 0 1rem;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .games-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}

.game-card {
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: #17242D;
  transition: transform 0.2s;
}

.game-card:hover {
  transform: scale(1.05);
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
  padding: 0.5rem 1rem;
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

.game-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
}

.game-provider {
  font-size: 0.75rem;
  color: #9ca3af;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Index;
