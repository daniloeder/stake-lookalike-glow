
import { useState } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import SportsCategoryCards from "@/components/SportsCategoryCards";
import LiveEventsList from "@/components/LiveEventsList";
import SportsBettingTable from "@/components/SportsBettingTable";
import SportsBanners from "@/components/SportsBanners";
import { Link } from "react-router-dom";

const navOptions = [
  { id: "home", label: "🏠 Home", path: "/sports" },
  { id: "live", label: "🔴 Live", path: "/sports/live" },
  { id: "football", label: "⚽ Football", path: "/sports/football" },
  { id: "tennis", label: "🎾 Tennis", path: "/sports/tennis" },
  { id: "basketball", label: "🏀 Basketball", path: "/sports/basketball" },
  { id: "cricket", label: "🏏 Cricket", path: "/sports/cricket" },
  { id: "hockey", label: "🏒 Ice Hockey", path: "/sports/hockey" },
  { id: "esports", label: "🎮 eSports", path: "/sports/esports" },
];

const Sports = () => {
  const [activeNav, setActiveNav] = useState("home");
  
  return (
    <div className="sports-page">
      <Header />
      
      <div className="page-content">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        
        <main className="main-content">
          {/* Promotional banners */}
          <div className="banners-section">
            <SportsBanners />
          </div>
          
          {/* Search bar */}
          <div className="search-section">
            <SearchBar placeholder="Search sports, leagues, teams..." />
          </div>
          
          {/* Navigation tabs */}
          <div className="nav-section">
            <div className="nav-tabs">
              {navOptions.map((option) => (
                <Link
                  key={option.id}
                  to={option.path}
                  className={`nav-tab ${activeNav === option.id ? 'active' : ''}`}
                  onClick={() => setActiveNav(option.id)}
                >
                  <span className="nav-label">{option.label}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Sports Category Cards */}
          <div className="categories-section">
            <SportsCategoryCards />
          </div>
          
          {/* Live Events List */}
          <div className="events-section">
            <LiveEventsList />
          </div>
          
          {/* Betting Table */}
          <div className="betting-section">
            <SportsBettingTable />
          </div>
          
          {/* Text content section */}
          <div className="text-section">
            <h2 className="text-title">Sports Betting at Stake Sportsbook - Bet on Sports with the Best Odds</h2>
            <div className="text-columns">
              <div className="text-column">
                <p className="text-paragraph">
                  With over 100,000 bets placed daily, Stake.com is the best place to place wagers on your favourite sports teams and players.
                </p>
                
                <p className="text-paragraph">
                  From the English Premier League to NBA basketball action, we cover all bases regarding sports and markets and offer unbeatable odds to online sports bettors.
                </p>
              </div>
              <div className="text-column">
                <p className="text-paragraph">
                  We are safer gambling advocates at Stake.com. We proud ourselves on offering the safest betting platform with a range of responsible gambling tools. You can use our budget calculator to stay on top of your spending habits and read up on our guide to knowing how much to gamble with.
                </p>
              </div>
            </div>

            <div className="text-block">
              <h3 className="text-subtitle">Popular Types of Bets</h3>
              <p className="text-paragraph">
                You can place lots of different sports bets at Stake.com, including the following:
              </p>

              <ul className="text-list">
                <li>Moneyline: Bet on who will win the game.</li>
                <li>Spread: Bet on a team to win or lose by a certain number of points.</li>
                <li>Totals: Bet on the combined score being over or under a line set by the bookmaker.</li>
                <li>Props: Bet on a specific event happening (or not happening) during a game that doesn't directly affect the outcome.</li>
                <li>Parlays: Combine multiple bets into one for a bigger payout.</li>
                <li>Futures: Bet on events that will happen in the future, such as who will win a championship.</li>
              </ul>
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
.sports-page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #0F1923;
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

.banners-section,
.search-section,
.nav-section,
.categories-section,
.events-section,
.betting-section {
  padding: 0 1rem;
}

.banners-section,
.search-section {
  padding-top: 1rem;
}

.nav-section {
  padding-bottom: 1rem;
}

.nav-tabs {
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 0.5rem 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nav-tabs::-webkit-scrollbar {
  display: none;
}

.nav-tab {
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #17242D;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
}

.nav-tab:hover {
  background-color: #1A2C38;
  transform: scale(1.05);
}

.nav-tab.active {
  background-color: #1A9AEF;
}

.nav-label {
  font-size: 0.875rem;
}

.text-section {
  padding: 1.5rem 1rem;
  background-color: #0F1923;
}

.text-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.text-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
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

.text-block {
  margin-bottom: 2rem;
}

.text-subtitle {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.text-list {
  list-style-type: disc;
  padding-left: 1.25rem;
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
}

.text-list li {
  margin-bottom: 0.5rem;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Sports;
