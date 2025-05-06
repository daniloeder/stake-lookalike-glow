
import { ChevronRight } from "lucide-react";

const sportsList = [
  { name: "Live Events", count: 14, icon: "⚡" },
  { name: "Starting Soon", icon: "🕒" },
  { name: "My Bets", icon: "📋" },
  { name: "Cricket", selected: true, icon: "🏏" },
  { name: "Live & Upcoming", icon: "📅" },
  { name: "Outrights", icon: "🎯" },
  { name: "IPL", icon: "🏆" },
  { name: "Pakistan Super League", icon: "🇵🇰" },
  { name: "ODI Sri Lanka Tri-Series", icon: "🏏" },
  { name: "View All", icon: "👁️" },
  { name: "Soccer", hasSubmenu: true, icon: "⚽" },
  { name: "Tennis", hasSubmenu: true, icon: "🎾" },
  { name: "Basketball", hasSubmenu: true, icon: "🏀" },
  { name: "Baseball", hasSubmenu: true, icon: "⚾" },
  { name: "Ice Hockey", hasSubmenu: true, icon: "🏒" },
  { name: "Racing", hasSubmenu: true, icon: "🏇" },
  { name: "CS2", hasSubmenu: true, icon: "🎮" },
  { name: "Dota 2", hasSubmenu: true, icon: "🎮" },
  { name: "League of Legends", hasSubmenu: true, icon: "🎮" },
  { name: "All Sports", hasSubmenu: true, icon: "🏅" }
];

const Sidebar = () => {
  return (
    <aside className="h-full min-w-64 bg-stake-darker">
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-4 text-lg font-semibold text-gray-300">Top Sports</h2>
          <ul className="space-y-1">
            {sportsList.map((sport, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-stake-dark ${
                    sport.selected ? "bg-stake-dark text-stake-blue" : "text-gray-300"
                  }`}
                >
                  <span className="flex items-center">
                    <span className="mr-2">{sport.icon}</span>
                    <span>{sport.name}</span>
                    {sport.count && (
                      <span className="ml-2 rounded bg-blue-500 px-2 py-0.5 text-xs">
                        {sport.count}
                      </span>
                    )}
                  </span>
                  {sport.hasSubmenu && <ChevronRight className="h-4 w-4" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
