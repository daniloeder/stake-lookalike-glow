
import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SportsBanners from "@/components/SportsBanners";
import SportsBettingTable from "@/components/SportsBettingTable";
import SportsCategoryCards from "@/components/SportsCategoryCards";

const Sports = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "live", label: "Live" },
    { id: "starting-soon", label: "Starting Soon" },
    { id: "favorites", label: "Favorites" },
  ];

  return (
    <div className="sports-page">
      <div className="page-content">
        <div className="search-section">
          <SearchBar placeholder="Search sports, teams, leagues..." />
        </div>
        
        <div className="sports-categories">
          <div className="categories-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
                {category.id === "live" && <span className="live-dot"></span>}
              </button>
            ))}
          </div>
        </div>
        
        <SportsBanners />
        
        <SportsCategoryCards />
        
        <div className="sports-betting-table">
          <h2 className="section-title">Live Bets</h2>
        </div>
      </div>
    </div>
  );
};

export default Sports;
