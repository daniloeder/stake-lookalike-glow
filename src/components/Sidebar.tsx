
import { useState } from "react";
import { Link } from "react-router-dom";

// Import SVG icons
import homeIcon from "../assets/icons/home.svg";
import trophyIcon from "../assets/icons/trophy.svg";
import gamepadIcon from "../assets/icons/gamepad.svg";
import walletIcon from "../assets/icons/wallet.svg";
import usersIcon from "../assets/icons/users.svg";
import starIcon from "../assets/icons/star.svg";
import globeIcon from "../assets/icons/globe.svg";
import chevronDownIcon from "../assets/icons/chevron-down.svg";
import chevronRightIcon from "../assets/icons/chevron-right.svg";

interface SidebarItem {
  id: string;
  icon: string;
  label: string;
  path?: string;
  children?: SidebarSubItem[];
  expandable?: boolean;
}

interface SidebarSubItem {
  id: string;
  label: string;
  path?: string;
  isLanguageOption?: boolean;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "home",
    icon: homeIcon,
    label: "Home",
    path: "/",
  },
  {
    id: "promotions",
    icon: starIcon,
    label: "Promotions",
    expandable: true,
    children: [
      { id: "weekly-raffle", label: "$75k Weekly Raffle", path: "/promotions/weekly-raffle" },
      { id: "race", label: "$100k Race", path: "/promotions/race" },
      { id: "pragmatic", label: "Pragmatic Drops & Wins", path: "/promotions/pragmatic" },
      { id: "view-all", label: "View All", path: "/promotions" },
    ],
  },
  {
    id: "sports",
    icon: trophyIcon,
    label: "Sports",
    children: [
      { id: "live", label: "Live", path: "/sports/live" },
      { id: "upcoming", label: "Upcoming", path: "/sports/upcoming" },
      { id: "results", label: "Results", path: "/sports/results" },
      { id: "promotions", label: "Promotions", path: "/sports/promotions" },
    ],
  },
  {
    id: "casino",
    icon: gamepadIcon,
    label: "Casino",
    children: [
      { id: "slots", label: "Slots", path: "/casino/slots" },
      { id: "live-casino", label: "Live Casino", path: "/casino/live" },
      { id: "table-games", label: "Table Games", path: "/casino/table-games" },
      { id: "game-shows", label: "Game Shows", path: "/casino/game-shows" },
    ],
  },
  {
    id: "sponsorships",
    icon: usersIcon,
    label: "Sponsorships",
    expandable: true,
    children: [
      { id: "drake", label: "Drake", path: "/sponsorships/drake" },
      { id: "stake-f1-team", label: "Stake F1 Team", path: "/sponsorships/stake-f1-team" },
      { id: "ufc", label: "UFC", path: "/sponsorships/ufc" },
      { id: "everton", label: "Everton Football Club", path: "/sponsorships/everton" },
      { id: "juventude", label: "Esporte Clube Juventude", path: "/sponsorships/juventude" },
      { id: "melgar", label: "FBC Melgar", path: "/sponsorships/melgar" },
      { id: "fortaleza", label: "Fortaleza CEIF", path: "/sponsorships/fortaleza" },
      { id: "nublense", label: "Club Deportivo Ñublense", path: "/sponsorships/nublense" },
      { id: "enyimba", label: "Enyimba Football Club", path: "/sponsorships/enyimba" },
      { id: "davis-cup", label: "Davis Cup", path: "/sponsorships/davis-cup" },
      { id: "aguero", label: "Kun Agüero", path: "/sponsorships/aguero" },
      { id: "adesanya", label: "Israel Adesanya", path: "/sponsorships/adesanya" },
      { id: "pereira", label: "Alex Pereira", path: "/sponsorships/pereira" },
      { id: "shevchenko", label: "Valentina Shevchenko", path: "/sponsorships/shevchenko" },
      { id: "dvalishvili", label: "Merab Dvalishvili", path: "/sponsorships/dvalishvili" },
      { id: "pantoja", label: "Alexandre Pantoja", path: "/sponsorships/pantoja" },
      { id: "borralho", label: "Caio Borralho", path: "/sponsorships/borralho" },
      { id: "dettori", label: "Frankie Dettori", path: "/sponsorships/dettori" },
    ],
  },
  {
    id: "language",
    icon: globeIcon,
    label: "Language: English",
    expandable: true,
    children: [
      { id: "english", label: "English", path: "/language/english", isLanguageOption: true },
      { id: "espanol", label: "Español", path: "/language/espanol", isLanguageOption: true },
      { id: "japanese", label: "日本語", path: "/language/japanese", isLanguageOption: true },
      { id: "chinese", label: "中文", path: "/language/chinese", isLanguageOption: true },
      { id: "portuguese", label: "Português", path: "/language/portuguese", isLanguageOption: true },
      { id: "russian", label: "Русский", path: "/language/russian", isLanguageOption: true },
      { id: "french", label: "Français", path: "/language/french", isLanguageOption: true },
      { id: "german", label: "Deutsch", path: "/language/german", isLanguageOption: true },
      { id: "hindi", label: "हिन्दी", path: "/language/hindi", isLanguageOption: true },
      { id: "indonesian", label: "Indonesian", path: "/language/indonesian", isLanguageOption: true },
      { id: "korean", label: "한국어", path: "/language/korean", isLanguageOption: true },
      { id: "polish", label: "Polski", path: "/language/polish", isLanguageOption: true },
      { id: "turkish", label: "Türkçe", path: "/language/turkish", isLanguageOption: true },
      { id: "vietnamese", label: "Tiếng Việt", path: "/language/vietnamese", isLanguageOption: true },
      { id: "finnish", label: "Suomen", path: "/language/finnish", isLanguageOption: true },
      { id: "arabic", label: "اَلْعَرَبِيَّةُ", path: "/language/arabic", isLanguageOption: true },
    ],
  },
  {
    id: "wallet",
    icon: walletIcon,
    label: "Wallet",
    path: "/wallet",
  },
];

const Sidebar = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const handleLanguageSelect = (id: string) => {
    setSelectedLanguage(id);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-button" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
      </button>
      
      <div className="sidebar-content">
        {sidebarItems.map((item) => (
          <div key={item.id} className="sidebar-item-container">
            {item.children ? (
              <div className={`collapsible-item ${item.expandable ? 'expandable' : ''}`}>
                <button
                  className="sidebar-item-button"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="sidebar-icon">
                    <img src={item.icon} alt={item.label} />
                  </span>
                  <span className="sidebar-label">{item.label}</span>
                  <img 
                    src={chevronDownIcon} 
                    alt="expand" 
                    className={`dropdown-icon ${openItems.includes(item.id) ? 'rotated' : ''}`} 
                  />
                </button>

                <div className={`dropdown-content ${openItems.includes(item.id) ? 'expanded' : ''}`}>
                  {item.children.map((child) => (
                    child.isLanguageOption ? (
                      <div 
                        key={child.id} 
                        className={`language-option ${selectedLanguage === child.id ? 'selected' : ''}`}
                        onClick={() => handleLanguageSelect(child.id)}
                      >
                        <span className="language-radio"></span>
                        <span className="language-label">{child.label}</span>
                      </div>
                    ) : (
                      <Link key={child.id} to={child.path || "#"} className="dropdown-item">
                        {child.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ) : (
              <Link to={item.path || "#"} className="sidebar-item-link">
                <span className="sidebar-icon">
                  <img src={item.icon} alt={item.label} />
                </span>
                <span className="sidebar-label">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.sidebar {
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0A1218;
  border-right: 1px solid #1f2937;
  overflow-y: auto;
  transition: width 0.3s ease;
  z-index: 1000;
}

.sidebar.collapsed {
  width: 60px;
  overflow: visible;
}

.collapse-button {
  position: absolute;
  right: -15px;
  top: 30px;
  width: 30px;
  height: 30px;
  background-color: #1A1F2C;
  border: 1px solid #333;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
}

.sidebar-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 40px; /* Space for header */
}

.sidebar-item-container {
  width: 100%;
}

.sidebar-item-button,
.sidebar-item-link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background: none;
  border: none;
  color: #e5e7eb;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s;
  text-align: left;
}

.sidebar-item-button:hover,
.sidebar-item-link:hover {
  background-color: #17242D;
}

.sidebar-icon {
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
}

.sidebar-icon img {
  width: 1.25rem;
  height: 1.25rem;
  color: #e5e7eb;
}

.sidebar-label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(-180deg);
}

.dropdown-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.dropdown-content.expanded {
  max-height: 500px;
  overflow-y: auto;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem 0.5rem 2.75rem;
  color: #9ca3af;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
}

.dropdown-item:hover {
  color: #e5e7eb;
}

/* Language selector specific styles */
.language-option {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 2.75rem;
  color: #9ca3af;
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s;
}

.language-option:hover {
  color: #e5e7eb;
}

.language-option.selected {
  color: #e5e7eb;
}

.language-radio {
  width: 14px;
  height: 14px;
  margin-right: 10px;
  border: 1px solid #9ca3af;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}

.language-option.selected .language-radio:after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #0FA0CE;
}

.language-label {
  flex: 1;
}

/* Collapsed state styles */
.sidebar.collapsed .sidebar-label,
.sidebar.collapsed .dropdown-icon {
  display: none;
}

.sidebar.collapsed .dropdown-content {
  position: absolute;
  left: 60px;
  top: 0;
  min-width: 200px;
  background-color: #0A1218;
  border: 1px solid #1f2937;
  border-radius: 0.375rem;
  max-height: 0;
  visibility: hidden;
}

.sidebar.collapsed .sidebar-item-container:hover .dropdown-content {
  max-height: 500px;
  visibility: visible;
}

.sidebar.collapsed .sidebar-icon {
  margin-right: 0;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Sidebar;
