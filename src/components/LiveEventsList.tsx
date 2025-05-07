
import { useState } from "react";
import { Settings } from "lucide-react";

const sportsIcons = [
  { name: "Soccer", icon: "⚽", count: 20 },
  { name: "Tennis", icon: "🎾", count: 8 },
  { name: "Cricket", icon: "🏏", count: 3 },
  { name: "Baseball", icon: "⚾", count: 1 },
  { name: "Basketball", icon: "🏀", count: 2 },
  { name: "Ice Hockey", icon: "🏒", count: 1 },
  { name: "Snooker", icon: "🎱", count: 1 },
  { name: "Volleyball", icon: "🏐", count: 3 },
  { name: "Table Tennis", icon: "🏓", count: 1 },
  { name: "CS2", icon: "🎮", count: 1 },
  { name: "FIFA", icon: "🎮", count: 4 },
  { name: "NBA2K", icon: "🎮", count: 1 },
];

const matchData = [
  {
    league: "Italy / Serie A",
    status: { live: true, time: "7", period: "1st Half" },
    teams: ["Genoa CFC", "AC Milan"],
    scores: [0, 0],
    odds: [
      { name: "Genoa CFC", value: "4.95" },
      { name: "Draw", value: "3.75" },
      { name: "AC Milan", value: "1.70" },
    ],
    moreGames: 108,
  },
  {
    league: "Türkiye / Super Lig",
    status: { live: true, time: "90", period: "2nd Half" },
    teams: ["Kasimpasa", "Trabzonspor"],
    scores: [1, 1],
    odds: [
      { name: "Kasimpasa", value: "Suspended" },
      { name: "Trabzonspor", value: "Suspended" },
    ],
    moreGames: 0,
  },
  {
    league: "Portugal / Primeira Liga",
    status: { live: true, time: "23", period: "1st Half" },
    teams: ["Rio Ave FC", "CF Estrela"],
    scores: [0, 0],
    odds: [
      { name: "Rio Ave FC", value: "2.45" },
      { name: "Draw", value: "2.80" },
      { name: "CF Estrela", value: "3.15" },
    ],
    moreGames: 99,
  },
];

const LiveEventsList = () => {
  return (
    <div className="live-events">
      <div className="events-header">
        <h2 className="events-title">
          <span className="events-icon">⚡</span> Live Events
        </h2>
        <div className="events-controls">
          <Settings className="settings-icon" />
          <select className="events-select">
            <option>Winner</option>
          </select>
        </div>
      </div>

      <div className="sports-icons-container">
        {sportsIcons.map((sport, index) => (
          <div key={index} className="sport-icon">
            <div className="icon-circle">
              <span className="icon-text">{sport.icon}</span>
              <span className="sport-name">{sport.name}</span>
            </div>
            <span className="sport-count">{sport.count}</span>
          </div>
        ))}
      </div>

      <div className="matches-list">
        {matchData.map((match, idx) => (
          <div key={idx} className="match-item">
            <div className="match-header">
              <h3 className="league-name">{match.league}</h3>
              <button className="expand-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="expand-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="match-status-bar">
              <div className="status-left">
                <div className="live-badge">
                  <span className="live-text">LIVE</span>
                  <span>{match.status.time}</span>
                </div>
                <span className="period-text">{match.status.period}</span>
              </div>
              <div className="status-right">
                {match.scores ? "1x2" : "Winner"}
              </div>
            </div>

            <div className="match-content">
              <div className="teams-column">
                <div className="teams-content">
                  <div className="team-row">
                    <span className="team-name">{match.teams[0]}</span>
                    <span className="team-score">{match.scores ? match.scores[0] : ""}</span>
                  </div>
                  <div className="team-row">
                    <span className="team-name">{match.teams[1]}</span>
                    <span className="team-score">{match.scores ? match.scores[1] : ""}</span>
                  </div>
                </div>
              </div>

              <div className="odds-grid">
                {match.odds.map((odd, oddsIdx) => (
                  <div key={oddsIdx} className="odd-box">
                    <div className="odd-content">
                      <div className="odd-name">{odd.name}</div>
                      <div className="odd-value">{odd.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {match.moreGames > 0 && (
              <div className="more-games">
                <span className="more-games-text">+{match.moreGames}</span>
              </div>
            )}
          </div>
        ))}

        <div className="view-all">
          <button className="view-all-button">View All</button>
        </div>
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.live-events {
  margin-bottom: 1.5rem;
}

.events-header {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.events-title {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
}

.events-icon {
  margin-right: 0.5rem;
}

.events-controls {
  display: flex;
  align-items: center;
}

.settings-icon {
  margin-right: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
  color: #9ca3af;
}

.events-select {
  border-radius: 0.375rem;
  border: 1px solid #374151;
  background-color: #0A1218;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  color: white;
}

.sports-icons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.sport-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 9999px;
  background-color: #0A1218;
  padding: 0.5rem;
  color: white;
  margin-bottom: 0.25rem;
}

.icon-text {
  font-size: 1.25rem;
}

.sport-name {
  font-size: 0.625rem;
}

.sport-count {
  font-size: 0.75rem;
  color: #9ca3af;
}

.matches-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.match-item {
  border-radius: 0.375rem;
  background-color: #0A1218;
  padding: 1rem;
}

.match-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.league-name {
  font-size: 0.875rem;
  color: #9ca3af;
}

.expand-button {
  border-radius: 0.25rem;
  background-color: #0F1923;
  border: none;
  padding: 0.125rem 0.25rem;
  cursor: pointer;
}

.expand-icon {
  height: 1rem;
  width: 1rem;
  color: white;
}

.match-status-bar {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.status-left {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.live-badge {
  display: flex;
  align-items: center;
  background-color: #FF0000;
  border-radius: 0.25rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  color: white;
  margin-right: 0.5rem;
}

.live-text {
  margin-right: 0.25rem;
}

.period-text {
  font-size: 0.75rem;
  color: #9ca3af;
}

.status-right {
  font-size: 0.75rem;
  color: #9ca3af;
}

.match-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0.5rem;
}

.teams-column {
  grid-column: 1;
}

.teams-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.team-row {
  display: flex;
  justify-content: space-between;
}

.team-name {
  font-size: 0.875rem;
  color: white;
}

.team-score {
  font-size: 0.875rem;
  color: white;
}

.odds-grid {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.odd-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0F1923;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
}

.odd-box:hover {
  background-color: rgba(15, 25, 35, 0.8);
}

.odd-content {
  text-align: center;
}

.odd-name {
  font-size: 0.75rem;
  color: #9ca3af;
}

.odd-value {
  font-weight: 600;
  color: white;
}

.more-games {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.more-games-text {
  font-size: 0.75rem;
  color: #1A9AEF;
}

.view-all {
  display: flex;
  justify-content: center;
}

.view-all-button {
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #1A9AEF;
  cursor: pointer;
}

.view-all-button:hover {
  text-decoration: underline;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default LiveEventsList;
