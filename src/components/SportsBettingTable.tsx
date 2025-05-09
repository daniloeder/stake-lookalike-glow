
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
    <div className="betting-table">
      <div className="table-tabs">
        {betTabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.id === "race-leaderboard" && (
              <span className="live-dot"></span>
            )}
          </button>
        ))}
        <div className="rows-select">
          <select className="rows-dropdown">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      
      <table className="bets-table">
        <thead className="table-header">
          <tr className="header-row">
            <th className="header-cell">Event</th>
            <th className="header-cell">User</th>
            <th className="header-cell">Time</th>
            <th className="header-cell">Odds</th>
            <th className="header-cell">Bet Amount</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {bettingData.map((bet, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">
                <div className="event-cell">
                  <svg xmlns="http://www.w3.org/2000/svg" className="event-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H5a2 2 0 00-2 2v8a2 2 0 002 2h3M12 5v14M19 5h-3v14h3a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  </svg>
                  {bet.event}
                </div>
              </td>
              <td className="table-cell">
                <div className="user-cell">
                  <svg xmlns="http://www.w3.org/2000/svg" className="user-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {bet.user}
                </div>
              </td>
              <td className="table-cell">{bet.time}</td>
              <td className="table-cell odds-cell">{bet.odds}</td>
              <td className="table-cell amount-cell">
                {bet.amount}
                {bet.crypto && (
                  <span className={`crypto-badge crypto-${bet.crypto}`}>
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

// CSS styles
const styles = `
.betting-table {
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
}

.table-tabs {
  display: flex;
  border-bottom: 1px solid #1f2937;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #9ca3af;
  border: none;
  background: none;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
}

.tab-button:hover {
  color: white;
  transform: scale(1.05);
}

.tab-button.active {
  color: white;
  border-bottom: 2px solid #1060B7;
}

.live-dot {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background-color: #10B981;
}

.rows-select {
  margin-left: auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
}

.rows-dropdown {
  background-color: #17242D;
  color: white;
  border: 1px solid #374151;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.bets-table {
  width: 100%;
}

.table-header {
  background-color: #17242D;
}

.header-row {
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: #9ca3af;
}

.header-cell {
  padding: 0.75rem 1rem;
}

.table-row {
  border-bottom: 1px solid #1f2937;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.table-row:hover {
  background-color: rgba(23, 36, 45, 0.5);
}

.table-cell {
  padding: 0.75rem 1rem;
}

.event-cell {
  display: flex;
  align-items: center;
  color: white;
}

.event-icon {
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  color: #9ca3af;
}

.user-cell {
  display: flex;
  align-items: center;
  color: #d1d5db;
}

.user-icon {
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  color: #9ca3af;
}

.odds-cell {
  color: white;
  font-family: monospace;
}

.amount-cell {
  display: flex;
  align-items: center;
  color: #10B981;
}

.crypto-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  margin-left: 0.25rem;
  font-size: 0.75rem;
  color: white;
}

.crypto-btc {
  background-color: #F7931A;
}

.crypto-eth {
  background-color: #3c3c3d;
}

.crypto-cad {
  background-color: #EF4444;
}

.crypto-trx {
  background-color: #10B981;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default SportsBettingTable;
