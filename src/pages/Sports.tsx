
import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SportsBanners from "@/components/SportsBanners";
import SportsBettingTable from "@/components/SportsBettingTable";
import SportsCategoryCards from "@/components/SportsCategoryCards";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";

const Sports = () => {
  const [activeCategory, setActiveCategory] = useState<string>("lobby");

  const categories = [
    { id: "lobby", label: "Lobby", icon: "🏟️" },
    { id: "my-bets", label: "My Bets", icon: "🎯" },
    { id: "favourites", label: "Favourites", icon: "⭐" },
  ];

  const topSports = [
    { id: 1, name: "SOCCER", image: "/images/sport1.png", color: "#3E8BFF" },
    { id: 2, name: "BASKETBALL", image: "/lovable-uploads/dd8af98a-1fe6-4304-980a-c9946e7577ff.png", color: "#E74C3C" },
    { id: 3, name: "CRICKET", image: "/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png", color: "#2ECC71" },
  ];

  return (
    <div className="sports-page">
      <div className="page-content">
        {/* Promo Section */}
        <div className="sports-promo-section">
          <div className="promo-label">Promo</div>
          <div className="promo-content">
            <div className="promo-text">
              <h2>Indian Cricket</h2>
              <p>Early Six, You Win!</p>
              <a href="#" className="promo-link">Read More</a>
            </div>
            <div className="promo-actions">
              <button className="stake-button bet-now-button">Bet Now</button>
            </div>
            <div className="promo-image">
              <img src="/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png" alt="Cricket" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="sports-search">
          <SearchBar placeholder="Search your event" />
        </div>
        
        {/* Category Tabs */}
        <div className="sports-categories">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Top Sports Section */}
        <div className="sports-section top-sports">
          <div className="section-header">
            <h2 className="section-title">Top Sports</h2>
            <div className="navigation-buttons">
              <button className="nav-button prev">
                <ArrowLeft size={18} />
              </button>
              <button className="nav-button next">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="sports-cards">
            {topSports.map((sport) => (
              <div key={sport.id} className="sport-card" style={{ backgroundColor: sport.color }}>
                <div className="sport-number">{sport.id}</div>
                <div className="sport-content">
                  <img src={sport.image} alt={sport.name} className="sport-image" />
                  <div className="sport-name">{sport.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional sections from existing Sports page */}
        <SportsBanners />
        <SportsCategoryCards />
        <SportsBettingTable />
      </div>
    </div>
  );
};

export default Sports;
