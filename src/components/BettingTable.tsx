import React, { useState } from "react";

// Sample data - replace with your actual data source
const bettingData = [
  { id: 1, game: "Gold Vault Roulette", user: "Hidden", time: "3:53 PM", betAmount: 1013.5192500, multiplier: "0.00x", payout: -1013.5192500, currency: "₿" },
  { id: 2, game: "Keno", user: "Hidden", time: "3:53 PM", betAmount: 0.96187495, multiplier: "0.00x", payout: -0.96187495, currency: "₿" },
  { id: 3, game: "Gates of Olympus Su...", user: "Hidden", time: "3:53 PM", betAmount: 5000.0000000, multiplier: "3.03x", payout: 15152.5000000, currency: "₿", isWin: true },
  { id: 4, game: "Brute Force", user: "Hidden", time: "3:53 PM", betAmount: 1.20808802, multiplier: "0.00x", payout: -1.20808802, currency: "₿" },
  { id: 5, game: "Plinko", user: "shijian134", time: "3:53 PM", betAmount: 2.00000000, multiplier: "1,000.00x", payout: 2000.0000000, currency: "₿", isWin: true, isHot: true },
  { id: 6, game: "Keno", user: "Hidden", time: "3:53 PM", betAmount: 0.96187495, multiplier: "0.00x", payout: -0.96187495, currency: "₿" },
  { id: 7, game: "Brute Force", user: "Hidden", time: "3:53 PM", betAmount: 1.20808802, multiplier: "0.00x", payout: -1.20808802, currency: "₿" },
];

const BettingTable = () => {
  const [activeTab, setActiveTab] = useState("casino");

  // CSS styles
  const styles = `
    .betting-container {
      font-family: 'Inter', sans-serif;
      color: #B1BAD3;
      width: 100%;
    }
    
    .tabs {
      display: flex;
      margin-bottom: 16px;
      background-color: rgba(15, 25, 35, 0.5);
      padding: 6px;
      border-radius: 50px;
      width: fit-content;
      gap: 6px;
    }
    
    .tab {
      padding: 8px 16px;
      border-radius: 50px;
      cursor: pointer;
      transition: background-color 0.2s;
      font-size: 14px;
      font-weight: 600;
    }
    
    .tab.active {
      background-color: #2F4553;
    }
    
    .tab:hover:not(.active) {
      background-color: #2F4553;
    }
    
    .tab-indicator {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color:rgb(17, 248, 25);
      margin-left: 4px;
    }
    
    .betting-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
    }
    
    .betting-table th {
      text-align: left;
      padding: 12px 16px;
      color: #99a1b3;
      font-weight: 500;
      font-size: 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .betting-table td {
      padding: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      background-color: rgba(23, 36, 45, 0.3);
      font-size: 14px;
    }
    
    .betting-table tr:hover td {
      background-color: rgba(30, 40, 50, 0.4);
    }

    even-row {
    }

    .odd-row {
      background-color: #213743;
    }
    
    .game-cell {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .game-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.2);
    }
    
    .user-cell {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .user-icon {
      opacity: 0.7;
    }
    
    .win-value {
    }
    
    .loss-value {
    }
    
    .hot-multiplier {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .currency-indicator {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 10px;
      margin-left: 4px;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="betting-container">
        <div className="tabs">
          <div 
            className={`tab ${activeTab === 'casino' ? 'active' : ''}`}
            onClick={() => setActiveTab('casino')}
          >
            Casino Bets
          </div>
          <div 
            className={`tab ${activeTab === 'sports' ? 'active' : ''}`}
            onClick={() => setActiveTab('sports')}
          >
            Sports Bets
          </div>
          <div 
            className={`tab ${activeTab === 'race' ? 'active' : ''}`}
            onClick={() => setActiveTab('race')}
          >
            Race Leaderboard <span className="tab-indicator"></span>
          </div>
        </div>

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
            {bettingData.map((bet, index) => (
              <tr key={bet.id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>
                  <div className="game-cell">
                    <div className="game-icon">
                      {bet.game === "Gold Vault Roulette" && "🎰"}
                      {bet.game === "Keno" && "📋"}
                      {bet.game === "Gates of Olympus Su..." && "⚡"}
                      {bet.game === "Brute Force" && "⚡"}
                      {bet.game === "Plinko" && "👾"}
                    </div>
                    {bet.game}
                  </div>
                </td>
                <td>
                  <div className="user-cell">
                    <span className="user-icon">👤</span>
                    {bet.user}
                  </div>
                </td>
                <td>{bet.time}</td>
                <td>
                  {bet.betAmount.toFixed(8)}
                  <span className="currency-indicator">{bet.currency}</span>
                </td>
                <td>
                  {bet.isHot ? (
                    <div className="hot-multiplier">
                      {bet.multiplier}
                    </div>
                  ) : (
                    bet.multiplier
                  )}
                </td>
                <td className={bet.payout > 0 ? "win-value" : "loss-value"}>
                  {bet.payout > 0 ? bet.payout.toFixed(8) : bet.payout.toFixed(8)}
                  <span className="currency-indicator">{bet.currency}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BettingTable;