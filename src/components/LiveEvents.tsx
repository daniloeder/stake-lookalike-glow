
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

const LiveEvents = () => {
  return (
    <div className="space-y-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center text-lg font-bold text-white">
          <span className="mr-2">⚡</span> Live Events
        </h2>
        <div className="flex items-center">
          <Settings className="mr-2 h-5 w-5 text-gray-400" />
          <select className="rounded-md border border-gray-700 bg-stake-darker px-3 py-1 text-sm text-white">
            <option>Winner</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {sportsIcons.map((sport, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-1 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-stake-darker p-2 text-white">
              <span className="text-xl">{sport.icon}</span>
              <span className="text-xs">{sport.name}</span>
            </div>
            <span className="text-xs text-gray-400">{sport.count}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {matchData.map((match, idx) => (
          <div key={idx} className="rounded-md bg-stake-darker p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm text-gray-400">{match.league}</h3>
              <button className="rounded bg-stake-dark px-1 py-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
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

            <div className="flex items-center">
              <div className="mr-4 flex items-center space-x-2">
                <div className="flex items-center rounded bg-stake-blue px-2 py-0.5 text-xs text-white">
                  <span className="mr-1">LIVE</span>
                  <span>{match.status.time}</span>
                </div>
                <span className="text-xs text-gray-400">{match.status.period}</span>
              </div>
              <div className="ml-auto text-xs text-gray-400">
                {match.scores ? "1x2" : "Winner"}
              </div>
            </div>

            <div className="mt-2 grid grid-cols-4 gap-2">
              <div className="col-span-1">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-white">{match.teams[0]}</span>
                    <span className="text-sm text-white">{match.scores ? match.scores[0] : ""}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white">{match.teams[1]}</span>
                    <span className="text-sm text-white">{match.scores ? match.scores[1] : ""}</span>
                  </div>
                </div>
              </div>

              <div className="col-span-3 grid grid-cols-3 gap-2">
                {match.odds.map((odd, oddsIdx) => (
                  <div
                    key={oddsIdx}
                    className="flex cursor-pointer items-center justify-center rounded bg-stake-dark p-2 text-center hover:bg-opacity-80"
                  >
                    <div className="text-center">
                      <div className="text-xs text-gray-400">{odd.name}</div>
                      <div className="font-semibold text-white">{odd.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {match.moreGames > 0 && (
              <div className="mt-2 text-right">
                <span className="text-xs text-stake-blue">+{match.moreGames}</span>
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-center">
          <button className="text-sm text-stake-blue hover:underline">View All</button>
        </div>
      </div>
    </div>
  );
};

export default LiveEvents;
