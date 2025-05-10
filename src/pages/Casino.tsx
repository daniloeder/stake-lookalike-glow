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

  // Sample betting data for Casino page, matching the screenshot
  const casinoBettingData = [
    { id: 1, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 2, game: "Grand Japanese Sp...", user: "Hidden", time: "5:55 PM", betAmount: 2250.265973, multiplier: "1.41×", payout: 3172.875022, currency: "trx", isWin: true },
    { id: 3, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 4, game: "Duck Hunters", user: "Hidden", time: "5:55 PM", betAmount: 46.99530047, multiplier: "103.38×", payout: 4858.554144, currency: "trx", isWin: true },
    { id: 5, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 6, game: "Salon Privé Blackjack...", user: "Hidden", time: "5:55 PM", betAmount: 12252.80070, multiplier: "1.00×", payout: 12252.80070, currency: "usd", isWin: true },
    { id: 7, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 8, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 9, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 10, game: "Salon Privé Blackjack...", user: "Hidden", time: "5:55 PM", betAmount: 1199.880012, multiplier: "0.60×", payout: -479.95200480, currency: "trx", isWin: false },
  ];

  // Define the tabs for the Casino BettingTable
  const casinoBettingTabs = [
    { id: "lobby", label: "Lobby" },
    { id: "stake-originals", label: "Stake Originals" },
    { id: "slots", label: "Slots" },
    { id: "live-casino", label: "Live Casino" },
    { id: "game-shows", label: "Game Shows" },
    { id: "stake-exclusives", label: "Stake Exclusives" },
    { id: "new-releases", label: "New Releases" }
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
    { id: 1, name: "Dice", playing: 5376, image: "public/images/stake1.avif" },
    { id: 2, name: "Mines", playing: 8053, image: "public/images/stake1.avif" },
    { id: 3, name: "Plinko", playing: 3494, image: "public/images/stake1.avif" },
    { id: 4, name: "Crash", playing: 3018, image: "public/images/stake1.avif" },
    { id: 5, name: "Pump", playing: 1443, image: "public/images/stake1.avif" },
    { id: 6, name: "Limbo", playing: 4649, image: "public/images/stake1.avif" },
    { id: 7, name: "Flip", playing: 1187, image: "public/images/stake1.avif" },
  ];

  const slotGames = [
    { id: 1, name: "Sweet Bonanza", playing: 698, image: "public/images/slots1.avif" },
    { id: 2, name: "Gates of Olympus", playing: 272, image: "public/images/slots1.avif" },
    { id: 3, name: "Sugar Rush", playing: 210, image: "public/images/slots1.avif" },
    { id: 4, name: "Duck Shooter", playing: 91, image: "public/images/slots1.avif" },
    { id: 5, name: "Zeus", playing: 79, image: "public/images/slots1.avif" },
    { id: 6, name: "Barbarossa", playing: 54, image: "public/images/slots1.avif" },
    { id: 7, name: "Hot Fruits", playing: 136, image: "public/images/slots1.avif" },
  ];

  const liveGames = [
    { id: 1, name: "Blackjack", playing: 145, image: "public/images/live1.avif" },
    { id: 2, name: "Roulette", playing: 198, image: "public/images/live1.avif" },
    { id: 3, name: "Baccarat", playing: 87, image: "public/images/live1.avif" },
    { id: 4, name: "Fortune Roulette", playing: 65, image: "public/images/live1.avif" },
    { id: 5, name: "Dragon Tiger", playing: 52, image: "public/images/live1.avif" },
    { id: 6, name: "Craps", playing: 31, image: "public/images/live1.avif" },
    { id: 7, name: "Texas Hold'em", playing: 67, image: "public/images/live1.avif" },
  ];

  const gameShows = [
    { id: 1, name: "Crazy Time", playing: 698, image: "public/images/game1.avif" },
    { id: 2, name: "Lightning Roulette", playing: 272, image: "public/images/game1.avif" },
    { id: 3, name: "Lightning Storm", playing: 210, image: "public/images/game1.avif" },
    { id: 4, name: "Stock Market", playing: 91, image: "public/images/game1.avif" },
    { id: 5, name: "Monopoly Big Baller", playing: 79, image: "public/images/game1.avif" },
    { id: 6, name: "Fireball Roulette", playing: 54, image: "public/images/game1.avif" },
    { id: 7, name: "Crazy Balls", playing: 136, image: "public/images/game1.avif" },
  ];

  const stakeExclusives = [
    { id: 1, name: "Big Bass Bonanza", playing: 56, image: "public/images/stake1.avif", enhanced: true },
    { id: 2, name: "Biker Gang", playing: 41, image: "public/images/stake1.avif", enhanced: true },
    { id: 3, name: "Sweet Bonanza", playing: 83, image: "public/images/stake1.avif", enhanced: true },
    { id: 4, name: "Funkin", playing: 29, image: "public/images/stake1.avif", enhanced: true },
    { id: 5, name: "Merlin's Madness", playing: 37, image: "public/images/stake1.avif", enhanced: true },
    { id: 6, name: "Wild Wild West", playing: 48, image: "public/images/stake1.avif", enhanced: true },
    { id: 7, name: "Thunder vs Lightning", playing: 52, image: "public/images/stake1.avif", enhanced: true },
  ];

  const providers = [
    { id: 1, name: "Pragmatic", image: "public/images/provider1.avif" },
    { id: 2, name: "Evolution", image: "public/images/provider1.avif" },
    { id: 3, name: "Hacksaw", image: "public/images/provider1.avif" },
    { id: 4, name: "Nolimit City", image: "public/images/provider1.avif" },
    { id: 5, name: "Massive Studios", image: "public/images/provider1.avif" },
    { id: 6, name: "Twist", image: "public/images/provider1.avif" },
    { id: 7, name: "Titan", image: "public/images/provider1.avif" },
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
        
        {activeMainTab === "lobby" && (
          <>

            <BettingTable 
              data={casinoBettingData} 
              defaultActiveTab="lobby" 
              tabs={casinoBettingTabs}
            />

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

.casino-section {
  margin-bottom: 2rem;
}

.providers-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
}

.provider-card {
  border-radius: 0.375rem;
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
  border-radius: 0.375rem;
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
  margin-top: 2rem;
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