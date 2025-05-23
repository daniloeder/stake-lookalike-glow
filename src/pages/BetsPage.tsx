
import React, { useState } from "react";
import Header from "@/components/Header";
import { X } from "lucide-react";
import "./BetsPage.css";

const BetsPage = () => {
  const [activeTab, setActiveTab] = useState("high-rollers");

  const betsData = [
    { game: "Baccarat", payout: "-12.00000000", icon: "🎮", status: "loss" },
    { game: "Festive Frost", payout: "-21.35999973", icon: "❄️", status: "loss" },
    { game: "Festive Frost", payout: "-21.35999973", icon: "❄️", status: "loss" },
    { game: "Festive Frost", payout: "-21.35999973", icon: "❄️", status: "loss" },
    { game: "Festive Frost", payout: "-21.35999973", icon: "❄️", status: "loss" },
    { game: "Red Door Roulette", payout: "1269.873012...", icon: "🎲", status: "win" },
    { game: "Festive Frost", payout: "-21.35999973", icon: "❄️", status: "loss" },
  ];

  return (
    <div className="bets-page">
      <div className="page-content">
        <div className="bets-header">
          <div className="bets-tabs">
            <div
              className={`bets-tab ${activeTab === "high-rollers" ? "active" : ""}`}
              onClick={() => setActiveTab("high-rollers")}
            >
              <span className="tab-icon">🏆</span>
              <span className="tab-text">High Rollers</span>
              <span className={`tab-dropdown ${activeTab === "high-rollers" ? "active" : ""}`}>▼</span>
            </div>
          </div>
          <div className="bets-close">
            <X size={24} />
          </div>
        </div>

        <div className="bets-table">
          <div className="bets-table-header">
            <div className="bets-table-cell">Game</div>
            <div className="bets-table-cell">Payout</div>
          </div>
          
          {betsData.map((bet, index) => (
            <div 
              key={index} 
              className={`bets-table-row ${bet.status === "win" ? "win" : "loss"}`}
            >
              <div className="bets-table-cell game">
                <span className="game-icon">{bet.icon}</span>
                <span className="game-name">{bet.game}</span>
              </div>
              <div className="bets-table-cell payout">
                <span className={`payout-amount ${bet.status === "win" ? "win" : "loss"}`}>
                  {bet.payout}
                </span>
                <span className="currency-icon">
                  {bet.status === "win" ? "T" : "L"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetsPage;
