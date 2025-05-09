
import { useState } from "react";

const BettingTable = () => {
  const [activeTab, setActiveTab] = useState("high-rollers");
  
  // Tabs for the betting table section
  const betTabs = [
    { id: "my-bets", label: "My Bets" },
    { id: "all-bets", label: "All Bets" },
    { id: "high-rollers", label: "High Rollers" },
    { id: "race-leaderboard", label: "Race Leaderboard" },
  ];

  // Sample betting data
  const bettingData = [
    { game: "Keno", user: "Hidden", time: "5:55 PM", amount: "1050.000000...", crypto: "trx", multiplier: "0.00×", payout: "-1050.000000...", isWin: false },
    { game: "Grand Japanese Sp...", user: "Hidden", time: "5:55 PM", amount: "2250.265973...", crypto: "trx", multiplier: "1.41×", payout: "3172.875022...", isWin: true },
    { game: "Keno", user: "Hidden", time: "5:55 PM", amount: "1050.000000...", crypto: "trx", multiplier: "0.00×", payout: "-1050.000000...", isWin: false },
    { game: "Duck Hunters", user: "Hidden", time: "5:55 PM", amount: "46.99530047", crypto: "trx", multiplier: "103.38×", payout: "4858.554144...", isWin: true },
    { game: "Keno", user: "Hidden", time: "5:55 PM", amount: "1050.000000...", crypto: "trx", multiplier: "0.00×", payout: "-1050.000000...", isWin: false },
    { game: "Salon Privé Blackjack...", user: "Hidden", time: "5:55 PM", amount: "12252.80070...", crypto: "usd", multiplier: "1.00×", payout: "12252.80070...", isWin: true },
    { game: "Keno", user: "Hidden", time: "5:55 PM", amount: "1050.000000...", crypto: "trx", multiplier: "0.00×", payout: "-1050.000000...", isWin: false },
    { game: "Keno", user: "Hidden", time: "5:55 PM", amount: "1050.000000...", crypto: "trx", multiplier: "0.00×", payout: "-1050.000000...", isWin: false },
    { game: "Keno", user: "Hidden", time: "5:55 PM", amount: "1050.000000...", crypto: "trx", multiplier: "0.00×", payout: "-1050.000000...", isWin: false },
    { game: "Salon Privé Blackjack...", user: "Hidden", time: "5:55 PM", amount: "1199.880012...", crypto: "trx", multiplier: "0.60×", payout: "-479.95200480", isWin: false },
  ];

  const cryptoIcons = {
    trx: "🔷",
    usd: "💵"
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
            <th className="header-cell">Game</th>
            <th className="header-cell">User</th>
            <th className="header-cell">Time</th>
            <th className="header-cell">Bet Amount</th>
            <th className="header-cell">Multiplier</th>
            <th className="header-cell">Payout</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {bettingData.map((bet, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">
                <div className="game-cell">
                  <span className="game-icon">🎮</span>
                  {bet.game}
                </div>
              </td>
              <td className="table-cell">
                <div className="user-cell">
                  <span className="user-icon">👤</span>
                  {bet.user}
                </div>
              </td>
              <td className="table-cell">{bet.time}</td>
              <td className="table-cell amount-cell">
                {bet.amount}
                <span className={`crypto-badge crypto-${bet.crypto}`}>
                  {cryptoIcons[bet.crypto as keyof typeof cryptoIcons] || '💰'}
                </span>
              </td>
              <td className={`table-cell multiplier ${bet.isWin ? 'win' : 'loss'}`}>
                {bet.isWin && <span className="win-icon">🔥</span>}
                {bet.multiplier}
              </td>
              <td className={`table-cell payout ${bet.isWin ? 'win' : 'loss'}`}>
                {bet.payout}
                <span className={`crypto-badge crypto-${bet.crypto}`}>
                  {cryptoIcons[bet.crypto as keyof typeof cryptoIcons] || '💰'}
                </span>
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
  background-color: #0F1923;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
  width: 100%;
}

.table-tabs {
  display: flex;
  border-bottom: 1px solid #1f2937;
  background-color: #0A1218;
  padding: 0 0.5rem;
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
}

.tab-button.active {
  color: white;
  background-color: #17242D;
  border-radius: 4px 4px 0 0;
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
  border-collapse: collapse;
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
  border-bottom: 1px solid #1f2937;
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
  color: white;
}

.game-cell {
  display: flex;
  align-items: center;
  color: white;
}

.game-icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.user-cell {
  display: flex;
  align-items: center;
  color: #d1d5db;
}

.user-icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.amount-cell {
  font-family: monospace;
  white-space: nowrap;
}

.multiplier, .payout {
  font-family: monospace;
  white-space: nowrap;
}

.multiplier.win,
.payout.win {
  color: #10B981;
}

.multiplier.loss,
.payout.loss {
  color: #ef4444;
}

.win-icon {
  margin-right: 0.25rem;
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
}

.crypto-trx {
  background-color: #10B981;
}

.crypto-usd {
  background-color: #ef4444;
}

@media (max-width: 768px) {
  .table-tabs {
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .tab-button {
    padding: 0.5rem 1rem;
  }
  
  .table-cell {
    padding: 0.5rem;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default BettingTable;
