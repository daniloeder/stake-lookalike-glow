import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import '../styles/BettingTable.css';

export interface TabItem {
  id: string;
  label: string;
  hasIndicator?: boolean;
}

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
  tabs?: TabItem[];
}

const BettingTable = ({ data, defaultActiveTab = "casino", tabs }: BettingTableProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const isMobile = window.innerWidth <= 768;
  
  // Default tabs configuration if none is provided
  const defaultTabs: TabItem[] = [
    { id: "my-bets", label: "My Bets" },
    { id: "all-bets", label: "All Bets" },
    { id: "high-rollers", label: "High Rollers" },
    { id: "race-leaderboard", label: "Race Leaderboard", hasIndicator: true },
  ];

  const tabItems = tabs || defaultTabs;
  
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

  // Render a simplified mobile version of the table
  const renderMobileTable = () => {
    return (
      <div className="mobile-betting-table">
        {bettingData.map((bet, index) => (
          <div key={index} className={`mobile-bet-row ${index % 2 === 0 ? "even-row" : "odd-row"}`}>
            <div className="mobile-bet-game">
              <span className="game-icon">{renderGameIcon(bet.game)}</span>
              <span className="game-name">{bet.game}</span>
            </div>
            <div className="mobile-bet-payout">
              <span className={`mobile-payout ${bet.isWin ? 'win' : 'loss'}`}>
                {typeof bet.payout === 'number' ? bet.payout.toFixed(8) : bet.payout}
                <span className={`crypto-badge crypto-${bet.currency}`}>
                  {cryptoIcons[bet.currency] || '💰'}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="betting-container">
      <div className="tabs">
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.hasIndicator && <span className="tab-indicator"></span>}
          </button>
        ))}
      </div>
      
      <div className="table-wrapper">
        {isMobile ? (
          renderMobileTable()
        ) : (
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
                <tr key={index}
                  className={"table-row " + (index % 2 === 0 ? "even-row" : "odd-row")}
                >
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
        )}
      </div>
    </div>
  );
};

export default BettingTable;
