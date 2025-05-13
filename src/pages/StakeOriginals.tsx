
import { useState, useEffect } from "react";
import { Gamepad, ArrowDown } from "lucide-react";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import BettingTable from "@/components/BettingTable";
import GameCard from "@/components/GameCard";
import ProviderLogo from "@/components/ProviderLogo";
import SectionHeader from "@/components/SectionHeader";
import InfoSection from "@/components/InfoSection";

const StakeOriginals = () => {
  const [activeTab, setActiveTab] = useState("my-bets");

  // Sample data for the Stake Originals games
  const stakeOriginalGames = [
    { id: 1, name: "Mines", playing: 8675, image: "public/images/stake1.avif" },
    { id: 2, name: "Dice", playing: 6133, image: "public/images/stake1.avif" },
    { id: 3, name: "Plinko", playing: 3566, image: "public/images/stake1.avif" },
    { id: 4, name: "Limbo", playing: 5882, image: "public/images/stake1.avif" },
    { id: 5, name: "Crash", playing: 3238, image: "public/images/stake1.avif" },
    { id: 6, name: "Pump", playing: 1393, image: "public/images/stake1.avif" },
    { id: 7, name: "Rock Paper Scissors", playing: 715, image: "public/images/stake1.avif" },
    { id: 8, name: "Flip", playing: 1284, image: "public/images/stake1.avif" },
    { id: 9, name: "Dragon Tower", playing: 2088, image: "public/images/stake1.avif" },
    { id: 10, name: "Wheel", playing: 997, image: "public/images/stake1.avif" },
    { id: 11, name: "Keno", playing: 2026, image: "public/images/stake1.avif" },
    { id: 12, name: "Blackjack", playing: 1601, image: "public/images/stake1.avif" },
    { id: 13, name: "Hilo", playing: 1151, image: "public/images/stake1.avif" },
    { id: 14, name: "Cases", playing: 456, image: "public/images/stake1.avif" },
    { id: 15, name: "Roulette", playing: 384, image: "public/images/stake1.avif" },
    { id: 16, name: "Diamonds", playing: 347, image: "public/images/stake1.avif" },
  ];

  // Sample providers data
  const providers = [
    { id: 1, name: "Pragmatic", image: "public/images/provider1.avif" },
    { id: 2, name: "Evolution", image: "public/images/provider1.avif" },
    { id: 3, name: "Hacksaw", image: "public/images/provider1.avif" },
    { id: 4, name: "Nolimit City", image: "public/images/provider1.avif" },
    { id: 5, name: "Massive Studios", image: "public/images/provider1.avif" },
    { id: 6, name: "Twist", image: "public/images/provider1.avif" },
    { id: 7, name: "Titan", image: "public/images/provider1.avif" },
  ];

  // Sample betting data
  const bettingData = [
    { id: 1, game: "Wild North", user: "Hidden", time: "11:53 AM", betAmount: 0.00787400, multiplier: "54.05×", payout: 0.42558970, currency: "btc", isWin: true },
    { id: 2, game: "The Dog House - Royal...", user: "Hidden", time: "11:53 AM", betAmount: 2.34357748, multiplier: "623.60×", payout: 1461.45491900, currency: "btc", isWin: true },
    { id: 3, game: "Duck Hunters", user: "Hidden", time: "11:53 AM", betAmount: 1259.87401200, multiplier: "0.96×", payout: -50.39496050, currency: "btc", isWin: false },
    { id: 4, game: "Plinko", user: "百面鬼", time: "11:53 AM", betAmount: 1524.04809500, multiplier: "1.20×", payout: 1828.85771400, currency: "btc", isWin: true },
    { id: 5, game: "La Dolce Vita", user: "Hidden", time: "11:53 AM", betAmount: 0.00871927, multiplier: "46.00×", payout: 0.40108656, currency: "btc", isWin: true },
    { id: 6, game: "VIP Blackjack on Evo...", user: "Hidden", time: "11:53 AM", betAmount: 0.94487999, multiplier: "1.67×", payout: 1.57479598, currency: "btc", isWin: true },
    { id: 7, game: "Mines", user: "Hidden", time: "11:53 AM", betAmount: 1999.00000000, multiplier: "0.00×", payout: -1999.00000000, currency: "btc", isWin: false },
    { id: 8, game: "Plinko", user: "百面鬼", time: "11:53 AM", betAmount: 1172.34468900, multiplier: "1.00×", payout: 1172.34468900, currency: "btc", isWin: true },
    { id: 9, game: "Duck Hunters", user: "Hidden", time: "11:53 AM", betAmount: 1259.87401200, multiplier: "1.28×", payout: 1612.63875600, currency: "btc", isWin: true },
    { id: 10, game: "Mines", user: "Hidden", time: "11:53 AM", betAmount: 1999.00000000, multiplier: "0.00×", payout: -1999.00000000, currency: "btc", isWin: false },
  ];

  // Define the tabs for the betting table
  const bettingTabs = [
    { id: "my-bets", label: "My Bets" },
    { id: "all-bets", label: "All Bets" },
    { id: "high-rollers", label: "High Rollers" },
    { id: "race-leaderboard", label: "Race Leaderboard", hasIndicator: true },
  ];

  // Information content for Stake Originals
  const stakeOriginalsInfo = `
    <p><strong>Stake Originals</strong> are proprietary games developed in-house by the Stake.com team. These games offer a unique and engaging gambling experience, with many featuring provably fair technology that allows players to verify the fairness of each round.</p>
    <p>Our Stake Originals collection includes a wide variety of game types, from classics like <strong>Dice</strong> and <strong>Blackjack</strong> to innovative titles like <strong>Mines</strong>, <strong>Plinko</strong>, and <strong>Crash</strong>. Each game is designed with user experience in mind, featuring intuitive interfaces, transparent mechanics, and competitive house edges.</p>
    <p>What sets Stake Originals apart is the combination of simplicity and strategy. While the games are easy to understand, they offer depth for players who want to develop their own approaches and betting systems. Whether you prefer games of pure chance or those that involve an element of skill, you'll find something to enjoy in our Stake Originals collection.</p>
    <p>New titles are regularly added to our lineup, so be sure to check back often to see what's new in the world of Stake Originals!</p>
  `;

  return (
    <div className="stake-originals-page">
      {/* Page title */}
      <div className="page-header">
        <h1 className="page-title">Stake Originals</h1>
      </div>

      {/* Search bar */}
      <div className="search-section">
        <SearchBar placeholder="Search your game" />
      </div>

      {/* View all providers link and sort controls */}
      <div className="filter-bar">
        <a href="/providers" className="view-all-link">View All Providers</a>
        <div className="sort-control">
          <span className="sort-label">Sort by</span>
          <div className="sort-dropdown">
            <select className="sort-select">
              <option value="popular">Popular</option>
              <option value="new">New</option>
              <option value="a-z">A-Z</option>
            </select>
            <ArrowDown className="sort-arrow" size={14} />
          </div>
        </div>
      </div>

      {/* Stake Originals games grid */}
      <div className="games-grid-container">
        {stakeOriginalGames.map((game) => (
          <div key={game.id} className="game-card-wrapper">
            <GameCard {...game} />
          </div>
        ))}
      </div>
      
      {/* Pagination info */}
      <div className="pagination-info">
        Displaying 23 of 23 games
      </div>

      {/* Providers section */}
      <div className="providers-section">
        <SectionHeader title="Providers" showNavigation={true} />
        <div className="providers-grid">
          {providers.map(provider => (
            <ProviderLogo key={provider.id} {...provider} />
          ))}
        </div>
      </div>

      {/* Betting table */}
      <BettingTable 
        data={bettingData} 
        defaultActiveTab="all-bets" 
        tabs={bettingTabs}
      />

      {/* Info section */}
      <InfoSection 
        title="Play Stake Originals Slots & Casino Games Online"
        content={stakeOriginalsInfo}
      />

      <Footer />
    </div>
  );
};

// CSS styles
const styles = `
.stake-originals-page {
  width: 90%;
  margin-left: 5%;
  padding-bottom: 2rem;
}

.page-header {
  margin-bottom: 1.5rem;
  padding-top: 1rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  color: white;
}

.search-section {
  background-color: #132635;
  border-radius: 4px;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: #557086;
  margin-bottom: 1.5rem;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.view-all-link {
  color: #1A9AEF;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.2s;
}

.view-all-link:hover {
  color: #2FB4FF;
  text-decoration: underline;
}

.sort-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sort-label {
  color: #9ca3af;
  font-size: 0.9rem;
}

.sort-dropdown {
  position: relative;
  background-color: #213743;
  border-radius: 4px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
}

.sort-select {
  background-color: transparent;
  color: white;
  border: none;
  padding: 0.5rem;
  font-size: 0.9rem;
  appearance: none;
  cursor: pointer;
  padding-right: 1.5rem;
}

.sort-select:focus {
  outline: none;
}

.sort-arrow {
  position: absolute;
  right: 0.5rem;
  color: #9ca3af;
  pointer-events: none;
}

.games-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.game-card-wrapper {
  margin-bottom: 1rem;
}

.pagination-info {
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 1.5rem 0;
}

.providers-section {
  margin: 2rem 0;
}

.providers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

@media (max-width: 1200px) {
  .games-grid-container {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}

@media (max-width: 768px) {
  .games-grid-container {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .providers-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

@media (max-width: 480px) {
  .games-grid-container {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  
  .filter-bar {
    flex-direction: column;
    align-items: flex-start;
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

export default StakeOriginals;
