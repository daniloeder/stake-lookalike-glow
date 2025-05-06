
import { useState } from "react";

interface BettingData {
  event: string;
  user: string;
  time: string;
  odds: string;
  amount: string;
  crypto: string;
  icon?: React.ReactNode;
}

const SportsBettingTable = () => {
  const [activeTab, setActiveTab] = useState("all-bets");
  
  // Tabs for the betting table section
  const betTabs = [
    { id: "all-bets", label: "All Bets" },
    { id: "high-rollers", label: "High Rollers" },
    { id: "race-leaderboard", label: "Race Leaderboard" },
  ];

  // Sample betting data
  const bettingData: BettingData[] = [
    { event: "Inter Milano - FC Barcelona", user: "Hidden", time: "5:00 PM", odds: "1.95", amount: "1137.721200...", crypto: "btc" },
    { event: "Inter Milano - FC Barcelona", user: "Hidden", time: "5:00 PM", odds: "1.85", amount: "1499.000000...", crypto: "trx" },
    { event: "Inter Milano - FC Barcelona", user: "Hidden", time: "5:00 PM", odds: "1.55", amount: "7553.667367...", crypto: "trx" },
    { event: "Inter Milano - FC Barcelona", user: "Hidden", time: "4:59 PM", odds: "1.40", amount: "CA$5,000.00", crypto: "cad" },
    { event: "Inter Milano - FC Barcelona", user: "Hidden", time: "4:59 PM", odds: "1.60", amount: "1000.000000...", crypto: "trx" },
    { event: "Pereira, Jose - Boscardin Di...", user: "Hidden", time: "4:59 PM", odds: "1.60", amount: "118.36280286...", crypto: "eth" },
    { event: "Midon, Lautaro - Sanchez I...", user: "Hidden", time: "4:59 PM", odds: "1.03", amount: "1896.000000...", crypto: "eth" },
    { event: "Washington Nationals - Clev...", user: "Hidden", time: "4:59 PM", odds: "1.80", amount: "5000.000000...", crypto: "trx" },
    { event: "Inter Milano - FC Barcelona", user: "Hidden", time: "4:58 PM", odds: "15.25", amount: "13.81800063...", crypto: "eth" },
    { event: "Partick Thistle FC - Ayr Unit...", user: "Hidden", time: "4:58 PM", odds: "2.05", amount: "3606.000000...", crypto: "trx" },
  ];

  const cryptoIcons: Record<string, string> = {
    btc: "₿",
    eth: "Ξ",
    cad: "$",
    trx: "T",
  };

  const cryptoColors: Record<string, string> = {
    btc: "bg-yellow-500",
    eth: "bg-blue-500",
    cad: "bg-red-500",
    trx: "bg-green-500",
  };

  return (
    <div className="bg-[#0F1923] rounded-lg overflow-hidden mb-8">
      <div className="flex border-b border-gray-800">
        {betTabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 text-sm font-medium transition-transform hover:scale-105 ${
              activeTab === tab.id
                ? "border-b-2 border-[#1A9AEF] text-white"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.id === "race-leaderboard" && (
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            )}
          </button>
        ))}
        <div className="ml-auto flex items-center px-4">
          <select className="bg-[#17242D] text-white border border-gray-700 rounded py-1 px-2 text-sm">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      
      <table className="w-full">
        <thead className="bg-[#17242D]">
          <tr className="text-left text-xs font-medium text-gray-400">
            <th className="px-4 py-3">Event</th>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Time</th>
            <th className="px-4 py-3">Odds</th>
            <th className="px-4 py-3">Bet Amount</th>
          </tr>
        </thead>
        <tbody>
          {bettingData.map((bet, index) => (
            <tr key={index} className="border-b border-gray-800 text-sm hover:bg-[#17242D]/50">
              <td className="px-4 py-3 text-white">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H5a2 2 0 00-2 2v8a2 2 0 002 2h3M12 5v14M19 5h-3v14h3a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  </svg>
                  {bet.event}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-300">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {bet.user}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-300">{bet.time}</td>
              <td className="px-4 py-3 text-white font-mono">{bet.odds}</td>
              <td className="px-4 py-3 text-green-500">
                {bet.amount}
                {bet.crypto && (
                  <span className={`inline-block ml-1 w-4 h-4 rounded-full ${cryptoColors[bet.crypto] || 'bg-gray-500'} text-xs flex items-center justify-center`}>
                    {cryptoIcons[bet.crypto] || '?'}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SportsBettingTable;
