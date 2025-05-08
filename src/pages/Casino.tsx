import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import TabBar from "@/components/TabBar";

const Casino = () => {
  const [activeTab, setActiveTab] = useState("all");

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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="casino-page">
      <div className="page-content">
        <div className="search-section">
          <SearchBar placeholder="Search games..." />
        </div>
        
        <div className="casino-categories">
          {activeTab === casinoCategories[0].id && (
            <TabBar 
              items={casinoCategories}
              activeItem={activeTab}
              onTabChange={handleTabChange}
            />
          )}
        </div>
        
        <div className="casino-grid">
          {/* Casino games grid to be implemented */}
          <div className="placeholder">Casino Games Grid Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
