
import { useState } from "react";

interface BetEvent {
  id: number;
  event: string;
  user: string;
  time: string;
  odds: string;
  betAmount: string;
  cryptoIcon?: boolean;
}

const BettingTable = () => {
  const [activeTab, setActiveTab] = useState("allBets");
  
  const bettingEvents: BetEvent[] = [
    {
      id: 1,
      event: "Multi (2)",
      user: "Hidden",
      time: "3:54 PM",
      odds: "1.67",
      betAmount: "1084.38450...",
      cryptoIcon: true
    },
    {
      id: 2,
      event: "Crystal Palace - Nottingham",
      user: "Hidden",
      time: "3:53 PM",
      odds: "2.70",
      betAmount: "0.99476000",
      cryptoIcon: true
    },
    {
      id: 3,
      event: "Monteiro, Thiago - Arnaboldi",
      user: "Hidden",
      time: "3:53 PM",
      odds: "1.80",
      betAmount: "2623.58514...",
      cryptoIcon: true
    },
    {
      id: 4,
      event: "Ex-Aurora - PVISION",
      user: "Hidden",
      time: "3:53 PM",
      odds: "3.30",
      betAmount: "926.9999583...",
    },
    {
      id: 5,
      event: "Genoa CFC - AC Milan",
      user: "Hidden",
      time: "3:53 PM",
      odds: "1.70",
      betAmount: "3082.67808...",
      cryptoIcon: true
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-4 flex rounded-md bg-stake-darker">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "allBets" ? "rounded-md bg-stake-dark text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("allBets")}
        >
          All Bets
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "highRollers" ? "rounded-md bg-stake-dark text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("highRollers")}
        >
          High Rollers
        </button>
        <button
          className={`flex items-center px-4 py-2 text-sm font-medium ${
            activeTab === "raceLeaderboard" ? "rounded-md bg-stake-dark text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("raceLeaderboard")}
        >
          Race Leaderboard 
          <span className="ml-1 h-2 w-2 rounded-full bg-green-500"></span>
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full">
          <thead className="bg-stake-darker text-left">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-300">Event</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-300">User</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-300">Time</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-300">Odds</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-300">Bet Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stake-dark">
            {bettingEvents.map((event) => (
              <tr key={event.id} className="bg-stake-dark hover:bg-opacity-80">
                <td className="whitespace-nowrap px-6 py-4 text-sm">{event.event}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">{event.user}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">{event.time}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">{event.odds}</td>
                <td className="flex items-center whitespace-nowrap px-6 py-4 text-sm">
                  {event.betAmount}
                  {event.cryptoIcon && (
                    <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs">
                      ₿
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BettingTable;
