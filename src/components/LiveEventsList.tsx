
import { useState } from "react";
import { Settings } from "lucide-react";
import "./LiveEventsList.css";

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

export default LiveEventsList;
