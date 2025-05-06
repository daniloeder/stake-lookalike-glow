
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const sportIcons = [
  { name: "Soccer", icon: "⚽", count: 24 },
  { name: "Basketball", icon: "🏀", count: 12 },
  { name: "Cricket", icon: "🏏", count: 8 },
  { name: "Tennis", icon: "🎾", count: 10 },
  { name: "Baseball", icon: "⚾", count: 6 },
  { name: "Table Tennis", icon: "🏓", count: 4 },
  { name: "CS2", icon: "🎮", count: 5 },
  { name: "Futsal", icon: "⚽", count: 2 },
  { name: "League of Legends", icon: "🎮", count: 6 },
  { name: "FIFA", icon: "🎮", count: 4 },
  { name: "NBA2K", icon: "🎮", count: 1 },
];

const liveMatches = [
  {
    id: 1,
    league: "UEFA Champions League",
    status: { live: true, period: "Halftime" },
    teams: ["FC Inter Milano", "FC Barcelona"],
    scores: [2, 0],
    odds: [
      { name: "FC Inter Milano", value: "1.18" },
      { name: "Draw", value: "6.75" },
      { name: "FC Barcelona", value: "15.00" },
    ],
    markets: 73
  },
  {
    id: 2,
    league: "Scotland / Premiership",
    status: { live: true, time: "53'", period: "2nd Half" },
    teams: ["Partick Thistle FC", "Ayr United FC"],
    scores: [0, 0],
    odds: [
      { name: "Partick Thistle FC", value: "Suspended" },
      { name: "Draw", value: "Suspended" },
      { name: "Ayr United FC", value: "Suspended" },
    ],
    markets: 20
  },
  {
    id: 3,
    league: "Argentina / Primera Division, Women",
    status: { live: true, status: "Ended" },
    teams: ["Belgrano de Cordoba", "CA Banfield"],
    scores: [1, 1],
    odds: [
      { name: "Belgrano de Cordoba", value: "Suspended" },
      { name: "CA Banfield", value: "Suspended" },
    ],
    markets: 0
  },
];

const upcomingMatches = [
  {
    id: 1,
    league: "NBA",
    date: "Wed, May 07 8:00 PM",
    teams: ["Boston Celtics", "New York Knicks"],
    odds: [
      { name: "Boston Celtics", value: "1.19" },
      { name: "New York Knicks", value: "4.60" },
    ],
    markets: "+45"
  },
  {
    id: 2,
    league: "NBA",
    date: "Wed, May 07 10:30 PM",
    teams: ["Oklahoma City Thunder", "Denver Nuggets"],
    odds: [
      { name: "Oklahoma City Thunder", value: "1.18" },
      { name: "Denver Nuggets", value: "4.70" },
    ],
    markets: "+47"
  },
];

const nhlMatches = [
  {
    id: 1,
    league: "NHL",
    date: "Tue, May 06 8:00 PM",
    teams: ["Washington Capitals", "Carolina Hurricanes"],
    odds: [
      { name: "Washington Capitals", value: "2.15" },
      { name: "Carolina Hurricanes", value: "1.74" },
    ],
    markets: "+28",
    overtime: true,
    penalties: true
  },
  {
    id: 2,
    league: "NHL",
    date: "Tue, May 06 10:30 PM",
    teams: ["Vegas Golden Knights", "Edmonton Oilers"],
    odds: [
      { name: "Vegas Golden Knights", value: "1.72" },
      { name: "Edmonton Oilers", value: "2.18" },
    ],
    markets: "+28",
    overtime: true,
    penalties: true
  },
  {
    id: 3,
    league: "NHL",
    date: "Wed, May 07 8:00 PM",
    teams: ["Toronto Maple Leafs", "Florida Panthers"],
    odds: [
      { name: "Toronto Maple Leafs", value: "2.09" },
      { name: "Florida Panthers", value: "1.72" },
    ],
    markets: "+28",
    overtime: true,
    penalties: true
  },
  {
    id: 4,
    league: "NHL",
    date: "Wed, May 07 10:30 PM",
    teams: ["Winnipeg Jets", "Dallas Stars"],
    odds: [
      { name: "Winnipeg Jets", value: "1.98" },
      { name: "Dallas Stars", value: "1.80" },
    ],
    markets: "+28",
    overtime: true,
    penalties: true
  },
];

const LiveEventsList = () => {
  const [expandedLeagues, setExpandedLeagues] = useState({
    "UEFA Champions League": true,
    "Scotland / Premiership": true,
    "Argentina / Primera Division, Women": true,
    "Euroleague": true,
    "NHL": true,
    "NBA": true
  });

  const toggleLeague = (league: string) => {
    setExpandedLeagues(prev => ({
      ...prev,
      [league]: !prev[league]
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-2 h-2 w-2 rounded-full bg-[#1A9AEF] animate-pulse"></div>
          <h2 className="text-xl font-bold text-white">Live Events</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 bg-[#17242D] text-white rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <select className="bg-[#17242D] text-white border border-gray-700 rounded px-3 py-1 text-sm">
            <option>Winner</option>
            <option>1X2</option>
            <option>Over/Under</option>
          </select>
        </div>
      </div>

      <div className="flex overflow-x-auto no-scrollbar py-2 gap-4">
        {sportIcons.map((sport, index) => (
          <Link 
            to={`/sports/${sport.name.toLowerCase()}`}
            key={index} 
            className="flex flex-col items-center min-w-[60px]"
          >
            <div className="mb-1 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#17242D] hover:bg-[#1A2C38] p-2 text-white cursor-pointer transition-all hover:scale-105">
              <span className="text-xl">{sport.icon}</span>
              <span className="text-xs truncate">{sport.name}</span>
            </div>
            <span className="text-xs text-gray-400">{sport.count}</span>
          </Link>
        ))}
      </div>

      {/* International Clubs / UEFA Champions League Section */}
      <div className="rounded-md overflow-hidden">
        <div 
          className="flex items-center justify-between bg-[#17242D] px-4 py-2 cursor-pointer"
          onClick={() => toggleLeague("UEFA Champions League")}
        >
          <h3 className="text-sm text-white">International Clubs / UEFA Champions League</h3>
          <ChevronUp className={`h-5 w-5 text-gray-400 transition-transform ${expandedLeagues["UEFA Champions League"] ? "" : "rotate-180"}`} />
        </div>

        {expandedLeagues["UEFA Champions League"] && liveMatches.slice(0,1).map((match) => (
          <div key={match.id} className="bg-[#0F1923] p-4 border-t border-gray-800">
            <div className="flex items-center">
              <div className="mr-4 flex items-center space-x-2">
                <div className="flex items-center rounded bg-[#FF0000] px-2 py-0.5 text-xs text-white">
                  <span className="mr-1">LIVE</span>
                  <span>{match.status.period}</span>
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-400">1x2</div>
            </div>

            <div className="mt-2 grid grid-cols-12 gap-2">
              <div className="col-span-3">
                <div className="space-y-2">
                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="text-sm text-white">{match.teams[0]}</span>
                      <span className="text-sm text-white">{match.teams[1]}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-amber-500 font-bold flex space-x-4">
                  <span>{match.scores[0]}</span>
                  <span>{match.scores[1]}</span>
                </div>
              </div>

              <div className="col-span-9 grid grid-cols-3 gap-2">
                {match.odds.map((odd, oddsIdx) => (
                  <div
                    key={oddsIdx}
                    className="flex cursor-pointer items-center justify-center rounded bg-[#17242D] p-2 text-center hover:bg-[#1A2C38]"
                  >
                    <div className="text-center">
                      <div className="text-xs text-gray-400">{odd.name}</div>
                      <div className="font-semibold text-white">{odd.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {match.markets > 0 && (
              <div className="mt-2 text-right">
                <span className="text-xs text-[#1A9AEF]">+{match.markets}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scotland / Premiership Section */}
      <div className="rounded-md overflow-hidden">
        <div 
          className="flex items-center justify-between bg-[#17242D] px-4 py-2 cursor-pointer"
          onClick={() => toggleLeague("Scotland / Premiership")}
        >
          <h3 className="text-sm text-white">Scotland / Premiership</h3>
          <ChevronUp className={`h-5 w-5 text-gray-400 transition-transform ${expandedLeagues["Scotland / Premiership"] ? "" : "rotate-180"}`} />
        </div>

        {expandedLeagues["Scotland / Premiership"] && liveMatches.slice(1,2).map((match) => (
          <div key={match.id} className="bg-[#0F1923] p-4 border-t border-gray-800">
            <div className="flex items-center">
              <div className="mr-4 flex items-center space-x-2">
                <div className="flex items-center rounded bg-[#FF0000] px-2 py-0.5 text-xs text-white">
                  <span className="mr-1">LIVE</span>
                  <span>{match.status.time}</span>
                </div>
                <span className="text-xs text-gray-400">{match.status.period}</span>
              </div>
              <div className="ml-auto text-xs text-gray-400">1x2</div>
            </div>

            <div className="mt-2 grid grid-cols-12 gap-2">
              <div className="col-span-3">
                <div className="space-y-2">
                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="text-sm text-white">{match.teams[0]}</span>
                      <span className="text-sm text-white">{match.teams[1]}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-amber-500 font-bold flex space-x-4">
                  <span>{match.scores[0]}</span>
                  <span>{match.scores[1]}</span>
                </div>
              </div>

              <div className="col-span-9 grid grid-cols-3 gap-2">
                {match.odds.map((odd, oddsIdx) => (
                  <div
                    key={oddsIdx}
                    className="flex cursor-pointer items-center justify-center rounded bg-[#17242D] p-2 text-center hover:bg-[#1A2C38]"
                  >
                    <div className="text-center">
                      <div className="text-xs text-gray-400">{odd.name}</div>
                      <div className="font-semibold text-white">{odd.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {match.markets > 0 && (
              <div className="mt-2 text-right">
                <span className="text-xs text-[#1A9AEF]">+{match.markets}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Euroleague Section */}
      <div className="rounded-md overflow-hidden">
        <div 
          className="flex items-center justify-between bg-[#17242D] px-4 py-2 cursor-pointer"
          onClick={() => toggleLeague("Euroleague")}
        >
          <h3 className="text-sm text-white">Euroleague</h3>
          <ChevronUp className={`h-5 w-5 text-gray-400 transition-transform ${expandedLeagues["Euroleague"] ? "" : "rotate-180"}`} />
        </div>

        {expandedLeagues["Euroleague"] && (
          <div className="bg-[#0F1923] p-4 border-t border-gray-800">
            <div className="flex items-center">
              <div className="mr-4 flex items-center space-x-2">
                <div className="flex items-center rounded bg-[#FF0000] px-2 py-0.5 text-xs text-white">
                  <span className="mr-1">LIVE</span>
                  <span>17'</span>
                </div>
                <span className="text-xs text-gray-400">3rd Quarter</span>
              </div>
              <div className="ml-auto text-xs text-gray-400">Winner (Incl. Overtime)</div>
            </div>

            <div className="mt-2 grid grid-cols-12 gap-2">
              <div className="col-span-3">
                <div className="space-y-2">
                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="text-sm text-white">Panathinaikos BC</span>
                      <span className="text-sm text-white">Anadolu Efes SK</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-amber-500 font-bold flex space-x-4">
                  <span>44</span>
                  <span>33</span>
                </div>
              </div>

              <div className="col-span-9 grid grid-cols-2 gap-2">
                <div className="flex cursor-pointer items-center justify-center rounded bg-[#17242D] p-2 text-center hover:bg-[#1A2C38]">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Panathinaikos BC</div>
                    <div className="font-semibold text-white">1.05</div>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center justify-center rounded bg-[#17242D] p-2 text-center hover:bg-[#1A2C38]">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Anadolu Efes SK</div>
                    <div className="font-semibold text-white">7.50</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 text-right">
              <span className="text-xs text-[#1A9AEF]">+23</span>
            </div>
          </div>
        )}
      </div>

      {/* NHL Section */}
      <div className="rounded-md overflow-hidden">
        <div 
          className="flex items-center justify-between bg-[#17242D] px-4 py-2 cursor-pointer"
          onClick={() => toggleLeague("NHL")}
        >
          <h3 className="text-sm text-white">NHL</h3>
          <ChevronUp className={`h-5 w-5 text-gray-400 transition-transform ${expandedLeagues["NHL"] ? "" : "rotate-180"}`} />
        </div>

        {expandedLeagues["NHL"] && nhlMatches.map((match, idx) => (
          <div key={match.id} className="bg-[#0F1923] p-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-400">{match.date}</div>
              <div className="text-xs text-gray-400">
                Winner {match.overtime ? "(Incl. Overtime and Penalties)" : ""}
              </div>
            </div>

            <div className="mt-2 grid grid-cols-12 gap-2">
              <div className="col-span-3">
                <div className="space-y-2">
                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="text-sm text-white">{match.teams[0]}</span>
                      <span className="text-sm text-white">{match.teams[1]}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-9 grid grid-cols-2 gap-2">
                {match.odds.map((odd, oddsIdx) => (
                  <div
                    key={oddsIdx}
                    className="flex cursor-pointer items-center justify-center rounded bg-[#17242D] p-2 text-center hover:bg-[#1A2C38]"
                  >
                    <div className="text-center">
                      <div className="text-xs text-gray-400">{odd.name}</div>
                      <div className="font-semibold text-white">{odd.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 text-right">
              <span className="text-xs text-[#1A9AEF]">{match.markets}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-[#17242D] hover:bg-[#1A2C38] text-[#1A9AEF] text-sm py-2 px-4 rounded transition-colors">
          View All Live Events
        </button>
      </div>
    </div>
  );
};

export default LiveEventsList;
