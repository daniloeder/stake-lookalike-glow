
import React from 'react';
import { Link } from 'react-router-dom';
import BettingTable from '@/components/BettingTable';
import PromoBanners from '@/components/PromoBanners';

interface GamesPageProps {
  title: string;
  infoTitle?: string;
  infoContent?: string;
}

const GamesPage: React.FC<GamesPageProps> = ({ title, infoTitle, infoContent }) => {
  // Sample betting data
  const bettingData = [
    { id: 1, game: "Gold Vault Roulette", user: "Hidden", time: "3:53 PM", betAmount: 1013.5192500, multiplier: "0.00x", payout: -1013.5192500, currency: "₿" },
    { id: 2, game: "Keno", user: "Hidden", time: "3:53 PM", betAmount: 0.96187495, multiplier: "0.00x", payout: -0.96187495, currency: "₿" },
    { id: 3, game: `${title} Game`, user: "Hidden", time: "3:53 PM", betAmount: 5000.0000000, multiplier: "3.03x", payout: 15152.5000000, currency: "₿", isWin: true },
    { id: 4, game: "Brute Force", user: "Hidden", time: "3:53 PM", betAmount: 1.20808802, multiplier: "0.00x", payout: -1.20808802, currency: "₿" },
  ];

  // Define tabs
  const bettingTabs = [
    { id: "all-bets", label: "All Bets" },
    { id: "high-rollers", label: "High Rollers" },
    { id: "my-bets", label: "My Bets" },
  ];

  return (
    <div className="games-page">
      <div className="page-header">
        <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
        {infoTitle && infoContent && (
          <div className="info-section mb-6 p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">{infoTitle}</h2>
            <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: infoContent }} />
          </div>
        )}
      </div>
      
      <PromoBanners />
      
      <div className="games-grid mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <Link to="#" key={index} className="game-card relative overflow-hidden rounded-lg transition-transform hover:scale-105">
            <img 
              src={`/images/${['game1.avif', 'live1.avif', 'slots1.avif', 'new1.avif', 'stake1.avif'][index % 5]}`} 
              alt={`${title} Game ${index+1}`}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-medium">{title} Game {index+1}</p>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                <p className="text-green-400 text-xs">{Math.floor(Math.random() * 1000)} playing</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <BettingTable 
        data={bettingData} 
        defaultActiveTab="all-bets" 
        tabs={bettingTabs}
      />
    </div>
  );
};

export default GamesPage;
