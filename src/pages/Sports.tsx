
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import SportsCategoryCards from "@/components/SportsCategoryCards";
import LiveEventsList from "@/components/LiveEventsList";
import SportsBettingTable from "@/components/SportsBettingTable";
import SportsBanners from "@/components/SportsBanners";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
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
    <div className="flex min-h-screen flex-col bg-[#0F1923]">
      <Header />
      
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <main className="flex-1 p-0">
          {/* Promotional banners */}
          <div className="px-4 pt-4">
            <SportsBanners />
          </div>
          
          {/* Search bar */}
          <div className="px-4">
            <SearchBar placeholder="Search sports, leagues, teams..." />
          </div>
          
          {/* Navigation tabs */}
          <div className="px-4 pb-4">
            <div className="flex overflow-x-auto no-scrollbar space-x-2 py-2">
              {navOptions.map((option) => (
                <Link
                  key={option.id}
                  to={option.path}
                  className={`whitespace-nowrap flex items-center px-4 py-2 rounded-md ${
                    activeNav === option.id 
                    ? "bg-[#1A9AEF] text-white" 
                    : "bg-[#17242D] text-white hover:bg-[#1A2C38]"
                  } transition-transform hover:scale-105`}
                  onClick={() => setActiveNav(option.id)}
                >
                  <span className="text-sm font-medium">{option.label}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Sports Category Cards */}
          <div className="px-4">
            <SportsCategoryCards />
          </div>
          
          {/* Live Events List */}
          <div className="px-4 mb-8">
            <LiveEventsList />
          </div>
          
          {/* Betting Table */}
          <div className="px-4">
            <SportsBettingTable />
          </div>
          
          {/* Text content section */}
          <div className="px-4 py-6 bg-[#0F1923]">
            <h2 className="text-2xl font-bold text-white mb-4">Sports Betting at Stake Sportsbook - Bet on Sports with the Best Odds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-gray-400 text-sm mb-4">
                  With over 100,000 bets placed daily, Stake.com is the best place to place wagers on your favourite sports teams and players.
                </p>
                
                <p className="text-gray-400 text-sm mb-4">
                  From the English Premier League to NBA basketball action, we cover all bases regarding sports and markets and offer unbeatable odds to online sports bettors.
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-4">
                  We are safer gambling advocates at Stake.com. We proud ourselves on offering the safest betting platform with a range of responsible gambling tools. You can use our budget calculator to stay on top of your spending habits and read up on our guide to knowing how much to gamble with.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Popular Types of Bets</h3>
              <p className="text-gray-400 text-sm mb-4">
                You can place lots of different sports bets at Stake.com, including the following:
              </p>

              <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2 mb-4">
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

export default Sports;
