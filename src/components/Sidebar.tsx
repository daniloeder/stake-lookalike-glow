
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

// Import SVG icons
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
    id: "promotions",
    icon: "gift", // Will be replaced with SVG
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
    id: "affiliate",
    icon: "badge", // Will be replaced with SVG
    label: "Affiliate",
    path: "/affiliate",
  },
  {
    id: "vip-club",
    icon: "crown", // Will be replaced with SVG
    label: "VIP Club",
    path: "/vip",
  },
  {
    id: "blog",
    icon: "file-text", // Will be replaced with SVG
    label: "Blog",
    path: "/blog",
  },
  {
    id: "forum",
    icon: "message-circle", // Will be replaced with SVG
    label: "Forum",
    path: "/forum",
  },
  {
    id: "sponsorships",
    icon: "trophy", // Will be replaced with SVG
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
    id: "responsible-gambling",
    icon: "shield", // Will be replaced with SVG
    label: "Responsible Gambling",
    path: "/responsible-gambling",
  },
  {
    id: "live-support",
    icon: "headset", // Will be replaced with SVG
    label: "Live Support",
    path: "/support",
  },
  {
    id: "language",
    icon: "globe", // Will be replaced with SVG
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
];

const Sidebar = () => {
  const location = useLocation();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [activeTab, setActiveTab] = useState<"casino" | "sports">("sports");

  // Set active tab based on current path
  useState(() => {
    if (location.pathname.includes("/casino")) {
      setActiveTab("casino");
    } else {
      setActiveTab("sports");
    }
  });

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

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="toggle-button" onClick={toggleSidebar}>
          <Menu className="toggle-icon" />
        </button>
        
        <div className="nav-tabs">
          <Link 
            to="/casino" 
            className={`nav-tab ${activeTab === "casino" ? "casino-active" : "casino-inactive"}`}
            onClick={() => setActiveTab("casino")}
          >
            Casino
          </Link>
          <Link 
            to="/sports" 
            className={`nav-tab ${activeTab === "sports" ? "sports-active" : "sports-inactive"}`}
            onClick={() => setActiveTab("sports")}
          >
            Sports
          </Link>
        </div>
      </div>
      
      <div className="sidebar-content">
        {sidebarItems.map((item) => (
          <div key={item.id} className="sidebar-item-container">
            {item.children && item.expandable ? (
              <div className="collapsible-item expandable">
                <button
                  className="sidebar-item-button"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="sidebar-icon">
                    {/* Icon placeholder */}
                  </span>
                  <span className="sidebar-label">{item.label}</span>
                  <img 
                    src={chevronRightIcon} 
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
                  {/* Icon placeholder */}
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
  z-index: 900;
  display: flex;
  flex-direction: column;
}

.sidebar.collapsed {
  width: 60px;
  overflow: visible;
}

.sidebar-header {
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1a2c38;
}

.toggle-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
}

.toggle-icon {
  width: 24px;
  height: 24px;
}

.nav-tabs {
  display: flex;
  gap: 4px;
}

.nav-tab {
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s;
  text-decoration: none;
  font-size: 0.8rem;
}

.nav-tab:hover {
  opacity: 0.9;
}

.casino-active {
  background-color: #0D7E3E;
  color: white;
}

.casino-inactive {
  background-color: #1A2C38;
  color: rgba(255, 255, 255, 0.7);
}

.casino-inactive:hover {
  color: white;
}

.sports-active {
  background-color: #FF6B01;
  color: white;
}

.sports-inactive {
  background-color: #1A2C38;
  color: rgba(255, 255, 255, 0.7);
}

.sports-inactive:hover {
  color: white;
}

.sidebar-content {
  padding: 0.75rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.sidebar-item-container {
  width: 100%;
  position: relative;
}

.sidebar-item-button,
.sidebar-item-link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
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
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.sidebar-label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(90deg);
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
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  color: #9ca3af;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
}

.dropdown-item:hover {
  color: #e5e7eb;
  background-color: rgba(23, 36, 45, 0.5);
}

/* Language selector specific styles */
.language-option {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  color: #9ca3af;
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s;
}

.language-option:hover {
  color: #e5e7eb;
  background-color: rgba(23, 36, 45, 0.5);
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
.sidebar.collapsed .dropdown-icon,
.sidebar.collapsed .nav-tab {
  display: none;
}

.sidebar.collapsed .toggle-button {
  margin-right: 0;
}

.sidebar.collapsed .sidebar-header {
  justify-content: center;
  padding: 0.75rem 0;
}

.sidebar.collapsed .dropdown-content {
  position: absolute;
  left: 60px;
  top: 0;
  min-width: 200px;
  background-color: #0A1218;
  border: 1px solid #1f2937;
  border-radius: 4px;
  max-height: 0;
  visibility: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 910;
}

.sidebar.collapsed .sidebar-item-container:hover .dropdown-content {
  max-height: 500px;
  visibility: visible;
}

.sidebar.collapsed .sidebar-icon {
  margin-right: 0;
}

.sidebar.collapsed .sidebar-item-button,
.sidebar.collapsed .sidebar-item-link {
  justify-content: center;
  padding: 0.75rem 0;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    z-index: 1000;
  }
  
  .sidebar.active {
    transform: translateX(0);
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Sidebar;
