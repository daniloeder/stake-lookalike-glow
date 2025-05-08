
import { useState } from "react";

interface BettingData {
  game: string;
  user: string;
  time: string;
  amount: string;
  multiplier: string;
  payout: string;
  cryptoType?: string;
  isWin?: boolean;
}

const BettingTable = () => {
  const [activeTab, setActiveTab] = useState("casino-bets");
  
  // Sample betting data
  const bettingData: BettingData[] = [
    { game: "The Dog Mansion Megaways", user: "Hidden", time: "11:55 AM", amount: "CA$10.00", multiplier: "223.20×", payout: "CA$2,232.00", cryptoType: "cad", isWin: true },
    { game: "Keno", user: "Hidden", time: "11:55 AM", amount: "CA$2,007.04", multiplier: "0.00×", payout: "-CA$2,007.04", cryptoType: "cad", isWin: false },
    { game: "Slide", user: "Hidden", time: "11:55 AM", amount: "150.00000000", multiplier: "10.00×", payout: "1500.00000", cryptoType: "trx", isWin: true },
    { game: "Slide", user: "Hidden", time: "11:55 AM", amount: "150.00000000", multiplier: "15.00×", payout: "2250.00000", cryptoType: "trx", isWin: true },
    { game: "Keno", user: "Hidden", time: "11:55 AM", amount: "CA$2,007.04", multiplier: "0.00×", payout: "-CA$2,007.04", cryptoType: "cad", isWin: false },
    { game: "Keno", user: "Hidden", time: "11:55 AM", amount: "CA$2,007.04", multiplier: "0.00×", payout: "-CA$2,007.04", cryptoType: "cad", isWin: false },
    { game: "The Dog House Dice Megaways", user: "Hidden", time: "11:55 AM", amount: "299.91002699", multiplier: "418.70×", payout: "125572.3283", cryptoType: "trx", isWin: true },
  ];

  return (
    <div className="betting-table">
      <table className="w-full">
        <thead>
          <tr className="table-header">
            <th className="table-cell">Game</th>
            <th className="table-cell">User</th>
            <th className="table-cell">Time</th>
            <th className="table-cell">Bet Amount</th>
            <th className="table-cell">Multiplier</th>
            <th className="table-cell">Payout</th>
          </tr>
        </thead>
        <tbody>
          {bettingData.map((bet, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">
                <div className="game-cell">
                  <div className="game-icon">🎲</div>
                  {bet.game}
                </div>
              </td>
              <td className="table-cell user-cell">
                <div className="user-icon">👤</div>
                {bet.user}
              </td>
              <td className="table-cell">{bet.time}</td>
              <td className="table-cell">
                <span className={`bet-amount ${bet.cryptoType}`}>
                  {bet.amount}
                </span>
                {bet.cryptoType && (
                  <span className={`crypto-badge ${bet.cryptoType}`}></span>
                )}
              </td>
              <td className={`table-cell multiplier ${bet.isWin ? 'win' : 'loss'}`}>
                {bet.isWin && <span className="win-icon">🔥</span>}
                {bet.multiplier}
              </td>
              <td className={`table-cell payout ${bet.isWin ? 'win' : 'loss'}`}>
                {bet.payout}
                {bet.cryptoType && (
                  <span className={`crypto-badge ${bet.cryptoType}`}></span>
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
  background-color: #17242D;
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: hidden;
}

.table-header {
  background-color: #0c1720;
  color: #9ca3af;
  font-weight: 500;
  font-size: 0.875rem;
  text-align: left;
}

.table-cell {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #1f2937;
}

.table-row {
  background-color: #17242D;
  transition: background-color 0.2s;
  color: white;
  font-size: 0.875rem;
}

.table-row:hover {
  background-color: #1A2C38;
}

.game-cell {
  display: flex;
  align-items: center;
}

.game-icon {
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.user-cell {
  display: flex;
  align-items: center;
  color: #9ca3af;
}

.user-icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.bet-amount {
  font-family: monospace;
}

.bet-amount.cad {
  color: #f97316;
}

.bet-amount.trx {
  color: #10B981;
}

.crypto-badge {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 6px;
}

.crypto-badge.cad {
  background-color: #f97316;
}

.crypto-badge.trx {
  background-color: #10B981;
}

.multiplier,
.payout {
  font-family: monospace;
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
  margin-right: 4px;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default BettingTable;
