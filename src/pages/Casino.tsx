
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Header from "@/components/Header";
import PromoBanners from "@/components/PromoBanners";
import SearchBar from "@/components/SearchBar";
import LiveEventsList from "@/components/LiveEventsList";
import TabBar from "@/components/TabBar";

const gameCategories = [
  { id: "all", name: "All", count: 123 },
  { id: "crash", name: "Crash", count: 15 },
  { id: "slots", name: "Slots", count: 57 },
  { id: "live", name: "Live", count: 24 },
  { id: "blackjack", name: "Blackjack", count: 8 },
  { id: "roulette", name: "Roulette", count: 12 },
  { id: "baccarat", name: "Baccarat", count: 7 },
];

const games = [
  { id: 1, name: "Sweet Bonanza", provider: "Pragmatic Play", image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png" },
  { id: 2, name: "Gates of Olympus", provider: "Pragmatic Play", image: "public/lovable-uploads/e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png" },
  { id: 3, name: "Fruit Party", provider: "Pragmatic Play", image: "public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png" },
  { id: 4, name: "Starlight Princess", provider: "Pragmatic Play", image: "public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png" },
  { id: 5, name: "The Dog House", provider: "Pragmatic Play", image: "public/lovable-uploads/dd8af98a-1fe6-4304-980a-c9946e7577ff.png" },
  { id: 6, name: "Big Bass Bonanza", provider: "Pragmatic Play", image: "public/lovable-uploads/e528755e-4a3f-41a9-bb3b-aa5b1d9c1fa9.png" },
];

const providers = [
  { id: "pragmatic", name: "Pragmatic Play", count: 230 },
  { id: "evolution", name: "Evolution Gaming", count: 45 },
  { id: "netent", name: "NetEnt", count: 178 },
  { id: "playngo", name: "Play'n GO", count: 212 },
];

const Casino = () => {
  return (
    <div className="casino-page">
      <div className="page-content">
        <div className="search-section">
          <SearchBar placeholder="Search games" />
        </div>
        
        <PromoBanners />
        
        <div className="game-navigation">
          <TabBar categories={gameCategories} />
          
          <div className="providers-filter">
            <span className="filter-label">Provider:</span>
            <div className="provider-options">
              <button className="provider-option active">All</button>
              {providers.map(provider => (
                <button key={provider.id} className="provider-option">
                  {provider.name} ({provider.count})
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="games-grid">
          {games.map(game => (
            <div key={game.id} className="game-card">
              <div className="game-image-container">
                <img
                  src={game.image}
                  alt={game.name}
                  className="game-image"
                />
                <div className="game-overlay">
                  <button className="play-button">Play</button>
                </div>
              </div>
              <div className="game-info">
                <h3 className="game-title">{game.name}</h3>
                <p className="game-provider">{game.provider}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="live-events-section">
          <h2 className="section-title">Live Events</h2>
          <LiveEventsList />
        </div>
      </div>
    </div>
  );
};

export default Casino;
