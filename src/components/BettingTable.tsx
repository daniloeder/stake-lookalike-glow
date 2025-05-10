
import { useState } from "react";

interface BetData {
  id: number;
  game: string;
  user: string;
  time: string;
  betAmount: number;
  multiplier: string;
  payout: number;
  currency: string;
  isWin?: boolean;
  isHot?: boolean;
}

interface BettingTableProps {
  data?: BetData[];
  defaultActiveTab?: string;
}

const BettingTable = ({ data, defaultActiveTab = "casino" }: BettingTableProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  
  // Default sample betting data if none is provided
  const defaultBettingData: BetData[] = [
    { id: 1, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 2, game: "Grand Japanese Sp...", user: "Hidden", time: "5:55 PM", betAmount: 2250.265973, multiplier: "1.41×", payout: 3172.875022, currency: "trx", isWin: true },
    { id: 3, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 4, game: "Duck Hunters", user: "Hidden", time: "5:55 PM", betAmount: 46.99530047, multiplier: "103.38×", payout: 4858.554144, currency: "trx", isWin: true },
    { id: 5, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 6, game: "Salon Privé Blackjack...", user: "Hidden", time: "5:55 PM", betAmount: 12252.80070, multiplier: "1.00×", payout: 12252.80070, currency: "usd", isWin: true },
    { id: 7, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 8, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 9, game: "Keno", user: "Hidden", time: "5:55 PM", betAmount: 1050.000000, multiplier: "0.00×", payout: -1050.000000, currency: "trx" },
    { id: 10, game: "Salon Privé Blackjack...", user: "Hidden", time: "5:55 PM", betAmount: 1199.880012, multiplier: "0.60×", payout: -479.95200480, currency: "trx", isWin: false },
  ];

  const bettingData = data || defaultBettingData;

  const cryptoIcons: Record<string, string> = {
    trx: "🔷",
    usd: "💵",
    "₿": "₿",
    btc: "₿",
    eth: "Ξ",
    cad: "$"
  };

  // CSS styles
  const styles = `
    .betting-container {
      font-family: 'Inter', sans-serif;
      color: #B1BAD3;
      width: 100%;
      background-color: #0F1923;
      border-radius: 0.5rem;
      overflow: hidden;
      margin-bottom: 2rem;
      width: 100%;
    }
    
    .tabs {
      display: flex;
      border-bottom: 1px solid #1f2937;
      background-color: #0A1218;
      padding: 0 0.5rem;
    }
    
    .tab {
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
    
    .tab:hover {
      color: white;
    }
    
    .tab.active {
      color: white;
      background-color: #17242D;
      border-radius: 4px 4px 0 0;
    }
    
    .tab-indicator {
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
    
    .betting-table {
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
    
    .crypto-btc, .crypto-₿ {
      background-color: #F7931A;
    }
    
    .crypto-eth {
      background-color: #3c3c3d;
    }
    
    .crypto-cad {
      background-color: #EF4444;
    }
    
    @media (max-width: 768px) {
      .tabs {
        overflow-x: auto;
        white-space: nowrap;
      }
      
      .tab {
        padding: 0.5rem 1rem;
      }
      
      .table-cell {
        padding: 0.5rem;
      }
    }
  `;

  const renderGameIcon = (game: string) => {
    if (game.includes("Keno")) return "📋";
    if (game.includes("Grand Japanese")) return "🎮";
    if (game.includes("Duck")) return "🦆";
    if (game.includes("Blackjack")) return "🃏";
    if (game.includes("Gold Vault")) return "🎰";
    if (game.includes("Gates of Olympus")) return "⚡";
    if (game.includes("Brute Force")) return "⚡";
    if (game.includes("Plinko")) return "👾";
    return "🎮";
  };

  return (
    <div className="betting-container">
      <style>{styles}</style>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "my-bets" ? "active" : ""}`}
          onClick={() => setActiveTab("my-bets")}
        >
          My Bets
        </button>
        <button
          className={`tab ${activeTab === "all-bets" ? "active" : ""}`}
          onClick={() => setActiveTab("all-bets")}
        >
          All Bets
        </button>
        <button
          className={`tab ${activeTab === "high-rollers" ? "active" : ""}`}
          onClick={() => setActiveTab("high-rollers")}
        >
          High Rollers
        </button>
        <button
          className={`tab ${activeTab === "race-leaderboard" ? "active" : ""}`}
          onClick={() => setActiveTab("race-leaderboard")}
        >
          Race Leaderboard
          <span className="tab-indicator"></span>
        </button>
        <div className="rows-select">
          <select className="rows-dropdown">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      
      <table className="betting-table">
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
                  <span className="game-icon">{renderGameIcon(bet.game)}</span>
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
                {typeof bet.betAmount === 'number' ? bet.betAmount.toFixed(8) : bet.betAmount}
                <span className={`crypto-badge crypto-${bet.currency}`}>
                  {cryptoIcons[bet.currency] || '💰'}
                </span>
              </td>
              <td className={`table-cell multiplier ${bet.isWin ? 'win' : 'loss'}`}>
                {bet.isHot && <span className="win-icon">🔥</span>}
                {bet.multiplier}
              </td>
              <td className={`table-cell payout ${bet.isWin ? 'win' : 'loss'}`}>
                {typeof bet.payout === 'number' ? bet.payout.toFixed(8) : bet.payout}
                <span className={`crypto-badge crypto-${bet.currency}`}>
                  {cryptoIcons[bet.currency] || '💰'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BettingTable;
