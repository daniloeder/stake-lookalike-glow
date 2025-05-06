
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import BettingTable from "@/components/BettingTable";
import PromoBanners from "@/components/PromoBanners";
import SportCategories from "@/components/SportCategories";
import LiveEvents from "@/components/LiveEvents";
import SearchBar from "@/components/SearchBar";
import TabBar from "@/components/TabBar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("sports");

  return (
    <div className="flex min-h-screen flex-col bg-stake-dark">
      <Header />
      
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <PromoBanners />
            
            <SearchBar />
            
            <TabBar />
            
            <SportCategories />
            
            <LiveEvents />
            
            <div className="mt-8">
              <h2 className="mb-4 text-lg font-bold text-white">Sports Betting at Stake Sportsbook - Bet on Sports with the Best Odds</h2>
              <p className="mb-4 text-sm text-gray-400">
                With over 100,000 bets placed daily, Stake.com is the best place to place wagers on your favourite sports teams and players.
              </p>
              <p className="text-sm text-gray-400">
                From the English Premier League to NBA basketball action, we cover all bases regarding sports and markets and offer unbeatable odds to online sports bettors.
              </p>
            </div>
          </div>
        </main>

        <div className="hidden lg:block lg:w-[450px]">
          <div className="h-full bg-stake-darker p-4">
            <BettingTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
