
import React, { useState } from "react";

interface BettingData {
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
  data: BettingData[];
  defaultActiveTab?: string;
  tabs: Array<{
    id: string;
    label: string;
    hasIndicator?: boolean;
  }>;
}

const BettingTable: React.FC<BettingTableProps> = ({ 
  data, 
  defaultActiveTab = "all-bets", 
  tabs 
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 7
    });
  };

  return (
    <div className="betting-section">
      <div className="betting-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`betting-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.hasIndicator && <span className="live-dot"></span>}
          </button>
        ))}
      </div>
      
      <div className="betting-table-container">
        <table className="betting-table">
          <thead>
            <tr>
              <th>Game</th>
              <th>User</th>
              <th>Time</th>
              <th>Bet Amount</th>
              <th>Multiplier</th>
              <th>Payout</th>
            </tr>
          </thead>
          <tbody>
            {data.map((bet) => (
              <tr key={bet.id} className={bet.isWin ? 'win-row' : 'loss-row'}>
                <td>
                  <div className="game-cell">
                    <span className="game-name">{bet.game}</span>
                    {bet.isHot && <span className="hot-label">HOT</span>}
                  </div>
                </td>
                <td>{bet.user}</td>
                <td>{bet.time}</td>
                <td className="amount-cell">
                  {bet.currency} {formatCurrency(bet.betAmount)}
                </td>
                <td className="multiplier-cell">{bet.multiplier}</td>
                <td className={`payout-cell ${bet.isWin ? 'win-amount' : 'loss-amount'}`}>
                  {bet.payout > 0 ? '+' : ''}{bet.currency} {formatCurrency(bet.payout)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.betting-section {
  margin: 2rem 0;
  background-color: #17242D;
  border-radius: 0.375rem;
  overflow: hidden;
}

.betting-tabs {
  display: flex;
  background-color: #0c1720;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #557086 #0c1720;
}

.betting-tabs::-webkit-scrollbar {
  height: 5px;
}

.betting-tabs::-webkit-scrollbar-track {
  background: #0c1720;
}

.betting-tabs::-webkit-scrollbar-thumb {
  background-color: #557086;
  border-radius: 10px;
}

.betting-tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  white-space: nowrap;
}

.betting-tab:hover {
  color: white;
}

.betting-tab.active {
  color: white;
  border-bottom: 2px solid #1060B7;
}

.live-dot {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10B981;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.betting-table-container {
  width: 100%;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #557086 #17242D;
}

.betting-table-container::-webkit-scrollbar {
  height: 5px;
}

.betting-table-container::-webkit-scrollbar-track {
  background: #17242D;
}

.betting-table-container::-webkit-scrollbar-thumb {
  background-color: #557086;
  border-radius: 10px;
}

.betting-table {
  width: 100%;
  border-collapse: collapse;
}

.betting-table th {
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #9ca3af;
  border-bottom: 1px solid #1f2937;
  white-space: nowrap;
}

.betting-table td {
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  border-bottom: 1px solid #1f2937;
  white-space: nowrap;
}

.game-cell {
  display: flex;
  align-items: center;
}

.game-name {
  margin-right: 0.5rem;
}

.hot-label {
  background-color: #FF6B01;
  color: white;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.amount-cell, .multiplier-cell, .payout-cell {
  font-family: 'Courier New', monospace;
}

.win-amount {
  color: #10B981;
}

.loss-amount {
  color: #EF4444;
}

@media (max-width: 768px) {
  .betting-table th, .betting-table td {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
  
  .betting-tab {
    padding: 0.6rem 1rem;
    font-size: 0.75rem;
  }
  
  .hot-label {
    font-size: 0.6rem;
    padding: 0.15rem 0.35rem;
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
