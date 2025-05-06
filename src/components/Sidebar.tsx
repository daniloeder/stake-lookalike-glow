
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const sidebarItems = [
  { 
    name: "Promotions", 
    icon: "🎁", 
    hasArrow: true,
    hasDropdown: true,
    dropdownItems: [
      { name: "Welcome Offer", path: "/promotions/welcome" },
      { name: "Daily Bonuses", path: "/promotions/daily" },
      { name: "Weekly Giveaways", path: "/promotions/weekly" },
      { name: "VIP Rewards", path: "/promotions/vip" },
    ],
  },
  { name: "Affiliate", icon: "🤝", path: "/affiliate" },
  { name: "VIP Club", icon: "🌟", path: "/vip" },
  { name: "Blog", icon: "📝", path: "/blog" },
  { name: "Forum", icon: "💬", path: "/forum" },
  { 
    name: "Sponsorships", 
    icon: "🏆", 
    hasArrow: true,
    hasDropdown: true,
    dropdownItems: [
      { name: "UFC", path: "/sponsorships/ufc" },
      { name: "Everton FC", path: "/sponsorships/everton" },
      { name: "Team Stake", path: "/sponsorships/team-stake" },
    ],
  },
  { name: "Responsible Gambling", icon: "🔒", path: "/responsible-gambling" },
  { name: "Live Support", icon: "💬", path: "/support" },
  { 
    name: "Language: English", 
    icon: "🌐", 
    hasArrow: true,
    hasDropdown: true,
    dropdownItems: [
      { name: "English", path: "/language/en" },
      { name: "Español", path: "/language/es" },
      { name: "Français", path: "/language/fr" },
      { name: "Deutsch", path: "/language/de" },
      { name: "Italiano", path: "/language/it" },
      { name: "日本語", path: "/language/ja" },
      { name: "한국어", path: "/language/ko" },
    ],
  },
];

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <aside className="h-full w-[190px] bg-[#0F1923]">
      <div className="space-y-1 py-2">
        <ul className="px-2">
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-1">
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex w-full items-center justify-between rounded px-3 py-2 text-sm text-white/80 transition-all hover:bg-[#1A2C38] hover:text-white ${
                      openDropdowns[item.name] ? "bg-[#1A2C38]" : ""
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="mr-2">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    <ChevronRight 
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        openDropdowns[item.name] ? "rotate-90" : ""
                      }`} 
                    />
                  </button>
                  
                  {openDropdowns[item.name] && (
                    <ul className="ml-6 mt-1 space-y-1 border-l border-gray-800 pl-2">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <li key={idx}>
                          <Link
                            to={dropdownItem.path}
                            className="block rounded px-3 py-1 text-sm text-gray-400 hover:bg-[#1A2C38] hover:text-white"
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path || "#"}
                  className="flex items-center justify-between rounded px-3 py-2 text-sm text-white/80 hover:bg-[#1A2C38] hover:text-white"
                >
                  <span className="flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  {item.hasArrow && <ChevronRight className="h-4 w-4 text-gray-400" />}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
