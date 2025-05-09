import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import TabBar from "@/components/TabBar";
import PromoBanners from "@/components/PromoBanners";
import BettingTable from "@/components/BettingTable";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Gamepad, Star } from "lucide-react";

const Casino = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [activeMainTab, setActiveMainTab] = useState("lobby");

  const casinoCategories = [
    { id: "all", name: "All", count: 5602 },
    { id: "slots", name: "Slots", count: 4259 },
    { id: "live", name: "Live Casino", count: 328 },
    { id: "game-shows", name: "Game Shows", count: 143 },
    { id: "blackjack", name: "Blackjack", count: 87 },
    { id: "roulette", name: "Roulette", count: 65 },
    { id: "baccarat", name: "Baccarat", count: 42 },
    { id: "stake-originals", name: "Stake Originals", count: 19 },
    { id: "crash", name: "Crash", count: 15 },
    { id: "plinko", name: "Plinko", count: 14 },
    { id: "jackpot", name: "Jackpot", count: 98 },
    { id: "bonus-buy", name: "Bonus Buy", count: 367 },
  ];

  const mainCasinoTabs = [
    { id: "lobby", name: "Lobby" },
    { id: "stake-originals", name: "Stake Originals" },
    { id: "slots", name: "Slots" },
    { id: "live-casino", name: "Live Casino" },
    { id: "game-shows", name: "Game Shows" },
    { id: "stake-exclusives", name: "Stake Exclusives" },
    { id: "new-releases", name: "New Releases" },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleMainTabChange = (tabId: string) => {
    setActiveMainTab(tabId);
  };
  
  // Sample data for each section
  const stakeOriginals = [
    { id: 1, name: "Dice", playing: 5376, image: "public/images/game-dice.png" },
    { id: 2, name: "Mines", playing: 8053, image: "public/images/game-mines.png" },
    { id: 3, name: "Plinko", playing: 3494, image: "public/images/game-plinko.png" },
    { id: 4, name: "Crash", playing: 3018, image: "public/images/game-crash.png" },
    { id: 5, name: "Pump", playing: 1443, image: "public/images/game-pump.png" },
    { id: 6, name: "Limbo", playing: 4649, image: "public/images/game-limbo.png" },
    { id: 7, name: "Flip", playing: 1187, image: "public/images/game-flip.png" },
  ];
  
  const slotGames = [
    { id: 1, name: "Sweet Bonanza", playing: 698, image: "public/images/slot-sweet-bonanza.png" },
    { id: 2, name: "Gates of Olympus", playing: 272, image: "public/images/slot-gates-olympus.png" },
    { id: 3, name: "Sugar Rush", playing: 210, image: "public/images/slot-sugar-rush.png" },
    { id: 4, name: "Duck Shooter", playing: 91, image: "public/images/slot-duck-shooter.png" },
    { id: 5, name: "Zeus", playing: 79, image: "public/images/slot-zeus.png" },
    { id: 6, name: "Barbarossa", playing: 54, image: "public/images/slot-barbarossa.png" },
    { id: 7, name: "Hot Fruits", playing: 136, image: "public/images/slot-hot-fruits.png" },
  ];
  
  const liveGames = [
    { id: 1, name: "Blackjack", playing: 145, image: "public/images/live-blackjack.png" },
    { id: 2, name: "Roulette", playing: 198, image: "public/images/live-roulette.png" },
    { id: 3, name: "Baccarat", playing: 87, image: "public/images/live-baccarat.png" },
    { id: 4, name: "Fortune Roulette", playing: 65, image: "public/images/live-fortune-roulette.png" },
    { id: 5, name: "Dragon Tiger", playing: 52, image: "public/images/live-dragon-tiger.png" },
    { id: 6, name: "Craps", playing: 31, image: "public/images/live-craps.png" },
    { id: 7, name: "Texas Hold'em", playing: 67, image: "public/images/live-texas-holdem.png" },
  ];
  
  const gameShows = [
    { id: 1, name: "Crazy Time", playing: 698, image: "public/images/show-crazy-time.png" },
    { id: 2, name: "Lightning Roulette", playing: 272, image: "public/images/show-lightning-roulette.png" },
    { id: 3, name: "Lightning Storm", playing: 210, image: "public/images/show-lightning-storm.png" },
    { id: 4, name: "Stock Market", playing: 91, image: "public/images/show-stock-market.png" },
    { id: 5, name: "Monopoly Big Baller", playing: 79, image: "public/images/show-monopoly.png" },
    { id: 6, name: "Fireball Roulette", playing: 54, image: "public/images/show-fireball.png" },
    { id: 7, name: "Crazy Balls", playing: 136, image: "public/images/show-crazy-balls.png" },
  ];
  
  const stakeExclusives = [
    { id: 1, name: "Big Bass Bonanza", playing: 56, image: "public/images/exclusive-big-bass.png", enhanced: true },
    { id: 2, name: "Biker Gang", playing: 41, image: "public/images/exclusive-biker-gang.png", enhanced: true },
    { id: 3, name: "Sweet Bonanza", playing: 83, image: "public/images/exclusive-sweet-bonanza.png", enhanced: true },
    { id: 4, name: "Funkin", playing: 29, image: "public/images/exclusive-funkin.png", enhanced: false },
    { id: 5, name: "Merlin's Madness", playing: 37, image: "public/images/exclusive-merlins.png", enhanced: true },
    { id: 6, name: "Wild Wild West", playing: 48, image: "public/images/exclusive-wild-west.png", enhanced: true },
    { id: 7, name: "Thunder vs Lightning", playing: 52, image: "public/images/exclusive-thunder-lightning.png", enhanced: true },
  ];
  
  const providers = [
    { id: 1, name: "Pragmatic", image: "public/images/provider-pragmatic.png" },
    { id: 2, name: "Evolution", image: "public/images/provider-evolution.png" },
    { id: 3, name: "Hacksaw", image: "public/images/provider-hacksaw.png" },
    { id: 4, name: "Nolimit City", image: "public/images/provider-nolimit.png" },
    { id: 5, name: "Massive Studios", image: "public/images/provider-massive.png" },
    { id: 6, name: "Twist", image: "public/images/provider-twist.png" },
    { id: 7, name: "Titan", image: "public/images/provider-titan.png" },
  ];

  // Helper component for game cards
  const GameCard = ({ game, badge }: { game: any, badge?: string }) => (
    <div className="game-card">
      {badge && <div className="game-badge">{badge}</div>}
      <div className="game-image-container">
        <img src={game.image} alt={game.name} className="game-image" />
      </div>
      <div className="game-info">
        <div className="game-players-count">
          <span className="player-dot"></span>
          {game.playing.toLocaleString()} playing
        </div>
      </div>
    </div>
  );
  
  // Helper component for section headers
  const SectionHeader = ({ title, icon }: { title: string, icon?: React.ReactNode }) => (
    <div className="section-header">
      <div className="section-title">
        {icon || <Star className="section-icon" />}
        <h2>{title}</h2>
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
  );

  return (
    <div className="casino-page">
      <div className="page-content">
        <PromoBanners />
        
        <div className="search-section">
          <SearchBar placeholder="Search games..." />
        </div>
        
        <div className="main-tabs-container">
          <div className="main-tabs">
            {mainCasinoTabs.map((tab) => (
              <button
                key={tab.id}
                className={`main-tab-item ${activeMainTab === tab.id ? 'active' : ''}`}
                onClick={() => handleMainTabChange(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        
        {activeMainTab === "lobby" && (
          <>
            <div className="casino-categories">
              <TabBar 
                items={casinoCategories}
                activeItem={activeTab}
                onTabChange={handleTabChange}
              />
            </div>

            <BettingTable />

            <div className="casino-section">
              <SectionHeader title="Stake Originals" icon={<Gamepad className="section-icon" />} />
              <div className="games-grid">
                {stakeOriginals.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
            
            <div className="casino-section">
              <SectionHeader title="Slots" />
              <div className="games-grid">
                {slotGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
            
            <div className="casino-section">
              <SectionHeader title="Providers" />
              <div className="providers-grid">
                {providers.map(provider => (
                  <div key={provider.id} className="provider-card">
                    <img src={provider.image} alt={provider.name} className="provider-logo" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="casino-section">
              <SectionHeader title="Live Casino" />
              <div className="games-grid">
                {liveGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
            
            <div className="casino-section">
              <SectionHeader title="Game Shows" />
              <div className="games-grid">
                {gameShows.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
            
            <div className="casino-section">
              <SectionHeader title="Stake Exclusives" />
              <div className="games-grid">
                {stakeExclusives.map(game => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    badge={game.enhanced ? "ENHANCED RTP" : "EXCLUSIVE"}
                  />
                ))}
              </div>
            </div>

            <div className="info-section">
              <h2 className="info-title">Online Casino Games at Stake Casino</h2>
              
              <div className="info-content">
                <div className="info-column left">
                  <p>Since 2017, <strong>Stake.com</strong> has offered the best online casino gaming experience, compatible with local currencies, bitcoin and other crypto on the web. Starting with <strong>Stake Originals</strong>, our first-party casino games developed here at Stake, the <strong>online casino gaming platform</strong> has grown to host over 3000 casino games from the best providers in the iGaming industry.</p>
                  <p>Players come back to Stake.com time and time again for our high quality and varied collection of games, modern website platform, instant transactions, expert customer support and generous <a href="#" className="text-link">bonuses and promotions</a>.</p>
                </div>
                
                <div className="info-column right">
                  <p>Many popular table game classics include <strong>Blackjack games</strong>, <strong>Baccarat games</strong>, <strong>Roulette games</strong>, <strong>Card games</strong>, <strong>Stake Poker</strong> and more, which are popular due to their advantageous <strong>house edge</strong> and big win opportunities. Learn all there is to know about dealer options and how to play casino classic table games with our <strong>ultimate guide to table games</strong>.</p>
                  <p>Electronic table games provide not only the convenience of playing for real money in the convenience of your device, but also provides additional features like special side bets and more options to deliver a unique gaming experience. Players can head to Stake's <a href="#" className="text-link">video poker online</a> to try out some of the best titles instantly.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

// CSS styles
const styles = `
.casino-page {
  width: 90%;
  margin-left: 5%;
}

.casino-categories {
  margin-top: 1.5rem;
}

.casino-section {
  margin-bottom: 2rem;
}

.main-tabs-container {
  margin: 1.5rem 0;
  border-bottom: 1px solid #1A2C38;
}

.main-tabs {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.main-tabs::-webkit-scrollbar {
  display: none;
}

.main-tab-item {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s;
  position: relative;
}

.main-tab-item:hover {
  color: white;
}

.main-tab-item.active {
  color: white;
  border-bottom: 2px solid #1A9AEF;
}

.providers-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
}

.provider-card {
  background-color: #17242D;
  border-radius: 0.375rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.provider-card:hover {
  transform: scale(1.05);
}

.provider-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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

.info-section {
  padding: 2rem;
  background-color: #0F1923;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.info-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.info-content {
  display: flex;
  gap: 2rem;
}

.info-column {
  flex: 1;
}

.info-column p {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.info-column strong {
  color: white;
  font-weight: 600;
}

.text-link {
  color: #1A9AEF;
  text-decoration: none;
}

.text-link:hover {
  text-decoration: underline;
}

@media (max-width: 1400px) {
  .providers-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 1024px) {
  .providers-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .info-content {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .providers-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .providers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .info-section {
    padding: 1.5rem;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Casino;
