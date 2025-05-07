
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import TabBar from "@/components/TabBar";
import BettingTable from "@/components/BettingTable";
import PromoBanners from "@/components/PromoBanners";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

const gameCategories = [
  { id: "all", label: "All Games" },
  { id: "originals", label: "Originals" },
  { id: "slots", label: "Slots" },
  { id: "live", label: "Live Casino" },
  { id: "blackjack", label: "Blackjack" },
  { id: "roulette", label: "Roulette" },
  { id: "baccarat", label: "Baccarat" },
  { id: "jackpot", label: "Jackpot" },
  { id: "table-games", label: "Table Games" },
  { id: "crash", label: "Crash" },
  { id: "drops-and-wins", label: "Drops & Wins" },
  { id: "high-roller", label: "High Roller" },
];

const providers = [
  { id: "stake", label: "Stake Originals" },
  { id: "pragmatic", label: "Pragmatic Play" },
  { id: "evolution", label: "Evolution" },
  { id: "hacksaw", label: "Hacksaw" },
  { id: "push", label: "Push Gaming" },
  { id: "netent", label: "NetEnt" },
  { id: "play-n-go", label: "Play'n GO" },
  { id: "nolimit", label: "Nolimit City" },
];

type Game = {
  id: number;
  title: string;
  provider: string;
  image: string;
  featured?: boolean;
  new?: boolean;
  hot?: boolean;
};

const casinoGames: Game[] = [
  {
    id: 1,
    title: "Mines",
    provider: "Stake Originals",
    image: "public/lovable-uploads/dd8af98a-1fe6-4304-980a-c9946e7577ff.png",
    featured: true,
    hot: true,
  },
  {
    id: 2,
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image: "public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png",
    featured: true,
  },
  {
    id: 3,
    title: "Wanted Dead or A Wild",
    provider: "Hacksaw",
    image: "public/lovable-uploads/e528755e-4a3f-41a9-bb3b-aa5b1d9c1fa9.png",
    new: true,
  },
  {
    id: 4,
    title: "Gates of Olympus",
    provider: "Pragmatic Play",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
    hot: true,
  },
  {
    id: 5,
    title: "Sugar Rush",
    provider: "Pragmatic Play",
    image: "public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png",
  },
  {
    id: 6,
    title: "Plinko",
    provider: "Stake Originals",
    image: "public/lovable-uploads/e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png",
    featured: true,
  },
  {
    id: 7,
    title: "Crash",
    provider: "Stake Originals",
    image: "public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png",
    hot: true,
  },
  {
    id: 8,
    title: "Scarab Rush",
    provider: "Push Gaming",
    image: "public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png",
    new: true,
  },
];

const Casino = () => {
  const [activeTab, setActiveTab] = useState(gameCategories[0].id);
  const [activeProvider, setActiveProvider] = useState("all");
  
  return (
    <div className="casino-page">
      <Header />
      
      <div className="page-content">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        
        <main className="main-content">
          {/* Banner section */}
          <div className="casino-banner">
            <div className="banner-content">
              <h1 className="banner-title">Stake Casino</h1>
              <p className="banner-text">World's Leading Crypto Casino</p>
              <button className="play-button">Play Now</button>
            </div>
          </div>
          
          {/* Search bar */}
          <div className="search-wrapper">
            <SearchBar placeholder="Search games, providers..." />
          </div>
          
          {/* Game categories */}
          <div className="categories-section">
            <TabBar 
              tabs={gameCategories}
              defaultTab="all"
              onTabChange={setActiveTab}
              showArrows={true}
              className="categories-tabs"
            />
          </div>
          
          {/* Provider selection */}
          <div className="providers-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🎰</span> Game Providers
              </h2>
            </div>
            
            <div className="providers-selector">
              <button 
                className={`provider-button ${activeProvider === 'all' ? 'active' : ''}`}
                onClick={() => setActiveProvider('all')}
              >
                All
              </button>
              
              {providers.map((provider) => (
                <button
                  key={provider.id}
                  className={`provider-button ${activeProvider === provider.id ? 'active' : ''}`}
                  onClick={() => setActiveProvider(provider.id)}
                >
                  {provider.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Games */}
          <div className="games-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">✨</span> Featured Games
              </h2>
              
              <div className="view-options">
                <button className="view-button">View All</button>
              </div>
            </div>
            
            <div className="games-grid">
              {casinoGames.filter(game => game.featured).map((game) => (
                <div key={game.id} className="game-card">
                  <div className="game-image-container">
                    <img src={game.image} alt={game.title} className="game-image" />
                    <div className="game-overlay">
                      <button className="play-now-button">
                        Play Now
                      </button>
                    </div>
                    
                    {game.hot && (
                      <div className="game-badge hot">
                        Hot
                      </div>
                    )}
                    
                    {game.new && (
                      <div className="game-badge new">
                        New
                      </div>
                    )}
                  </div>
                  
                  <div className="game-info">
                    <div className="game-title">{game.title}</div>
                    <div className="game-provider">{game.provider}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Popular Games */}
          <div className="games-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-icon">🔥</span> Popular Games
              </h2>
              
              <div className="view-options">
                <button className="view-button">View All</button>
              </div>
            </div>
            
            <div className="games-grid">
              {casinoGames.filter(game => game.hot).map((game) => (
                <div key={game.id} className="game-card">
                  <div className="game-image-container">
                    <img src={game.image} alt={game.title} className="game-image" />
                    <div className="game-overlay">
                      <button className="play-now-button">
                        Play Now
                      </button>
                    </div>
                    
                    {game.hot && (
                      <div className="game-badge hot">
                        Hot
                      </div>
                    )}
                    
                    {game.new && (
                      <div className="game-badge new">
                        New
                      </div>
                    )}
                  </div>
                  
                  <div className="game-info">
                    <div className="game-title">{game.title}</div>
                    <div className="game-provider">{game.provider}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* All Games */}
          <div className="games-section">
            <div className="section-header">
              <h2 className="section-title">All Games</h2>
              
              <div className="search-filter">
                <div className="search-input-wrapper">
                  <Search className="search-icon-small" />
                  <input
                    type="text"
                    placeholder="Search games..."
                    className="search-input-small"
                  />
                </div>
                
                <select className="sort-select">
                  <option>Popularity</option>
                  <option>A-Z</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
            
            <div className="games-grid">
              {casinoGames.map((game) => (
                <div key={game.id} className="game-card">
                  <div className="game-image-container">
                    <img src={game.image} alt={game.title} className="game-image" />
                    <div className="game-overlay">
                      <button className="play-now-button">
                        Play Now
                      </button>
                    </div>
                    
                    {game.hot && (
                      <div className="game-badge hot">
                        Hot
                      </div>
                    )}
                    
                    {game.new && (
                      <div className="game-badge new">
                        New
                      </div>
                    )}
                  </div>
                  
                  <div className="game-info">
                    <div className="game-title">{game.title}</div>
                    <div className="game-provider">{game.provider}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="load-more">
              <button className="load-more-button">Load More</button>
            </div>
          </div>
          
          <PromoBanners />
          
          <BettingTable />
          
          {/* Casino description */}
          <div className="text-section">
            <h2 className="text-section-title">Stake Casino: Play the Best Online Casino Games</h2>
            
            <div className="text-columns">
              <div className="text-column">
                <p className="text-paragraph">
                  Offering thousands of online casino games from slots to table games, Stake Casino is one of the world's largest crypto gambling sites. As an online casino leader, we have built a reputation for delivering a complete gambling experience to users across the globe.
                </p>
                
                <p className="text-paragraph">
                  Our offering consists of 1,000+ games from the best providers like Pragmatic Play, Evolution, and many more, as well as our built-in-house Stake Originals. Find all the classic casino games and their variants, including blackjack, roulette, baccarat, dice, and more.
                </p>
              </div>
              
              <div className="text-column">
                <p className="text-paragraph">
                  We offer various ways to deposit and play your favorite casino games. Choose from major cryptocurrencies like Bitcoin, Ethereum, Litecoin, or more. We also offer local currencies like EUR, USD, CAD, and JPY depending on your country.
                </p>
                
                <p className="text-paragraph">
                  Register your account and get access to industry-leading bonuses and promotions such as the weekly Stake Races, where you compete for your share of $100,000.
                </p>
              </div>
            </div>
          </div>
          
          <Footer />
        </main>
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.casino-page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #0F1923;
  color: white;
}

.page-content {
  display: flex;
  flex: 1;
}

.sidebar-container {
  display: none;
}

@media (min-width: 768px) {
  .sidebar-container {
    display: block;
  }
}

.main-content {
  flex: 1;
  padding: 0;
}

.casino-banner {
  padding: 4rem 1rem;
  background-color: #0A1218;
  background-image: linear-gradient(to right, #0A1218, rgba(10, 18, 24, 0.8)), url('public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png');
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
}

.banner-content {
  max-width: 24rem;
}

.banner-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.banner-text {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #d1d5db;
}

.play-button {
  background-color: #1A9AEF;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.play-button:hover {
  background-color: #0F8CDD;
  transform: scale(1.05);
}

.search-wrapper {
  padding: 0 1rem;
}

.categories-section {
  margin: 1rem 0;
  padding: 0 1rem;
}

.categories-tabs {
  margin-bottom: 1rem;
}

.providers-section {
  padding: 0 1rem;
  margin-bottom: 1.5rem;
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
  font-size: 1.25rem;
  font-weight: 700;
}

.section-icon {
  margin-right: 0.5rem;
}

.view-options {
  display: flex;
  align-items: center;
}

.view-button {
  color: #1A9AEF;
  background: none;
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
}

.view-button:hover {
  text-decoration: underline;
}

.providers-selector {
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.providers-selector::-webkit-scrollbar {
  display: none;
}

.provider-button {
  background-color: #17242D;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 0.875rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
}

.provider-button:hover {
  background-color: #1A2C38;
}

.provider-button.active {
  background-color: #1A9AEF;
}

.games-section {
  padding: 0 1rem;
  margin-bottom: 2rem;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .games-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(6, 1fr);
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
  aspect-ratio: 1 / 1;
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.game-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.game-image-container:hover .game-overlay {
  opacity: 1;
}

.play-now-button {
  background-color: #1A9AEF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
}

.play-now-button:hover {
  background-color: #0F8CDD;
}

.game-badge {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.game-badge.hot {
  background-color: #EF4444;
  color: white;
}

.game-badge.new {
  background-color: #10B981;
  color: white;
}

.game-info {
  padding: 0.75rem;
}

.game-title {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.game-provider {
  font-size: 0.75rem;
  color: #9ca3af;
}

.search-filter {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.search-input-wrapper {
  position: relative;
  width: 12rem;
}

.search-icon-small {
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  width: 1rem;
  height: 1rem;
}

.search-input-small {
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  border: 1px solid #374151;
  border-radius: 0.375rem;
  background-color: #17242D;
  color: white;
  font-size: 0.875rem;
}

.search-input-small::placeholder {
  color: #9ca3af;
}

.sort-select {
  padding: 0.5rem;
  background-color: #17242D;
  border: 1px solid #374151;
  border-radius: 0.375rem;
  color: white;
  font-size: 0.875rem;
}

.load-more {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.load-more-button {
  background-color: transparent;
  border: 1px solid #1A9AEF;
  color: #1A9AEF;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.load-more-button:hover {
  background-color: rgba(26, 154, 239, 0.1);
}

.text-section {
  padding: 2rem 1rem;
  background-color: #0F1923;
}

.text-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.text-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .text-columns {
    grid-template-columns: 1fr 1fr;
  }
}

.text-paragraph {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #9ca3af;
  margin-bottom: 1rem;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Casino;
