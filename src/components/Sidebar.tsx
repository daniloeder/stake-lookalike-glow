
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react";
import SvgIcon from "./SvgIcon";
import { svgIcons, starIcon } from "../utils/svgIcons";

// Import SVG icons
import chevronDownIcon from "../assets/icons/chevron-down.svg";
import chevronRightIcon from "../assets/icons/chevron-right.svg";

export interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
  sidebarItems?: SidebarItem[];
}

export interface SidebarItem {
  id: string;
  iconSvg: string;
  label: string;
  path?: string;
  children?: SidebarSubItem[];
  expandable?: boolean;
}

interface SidebarSubItem {
  id: string;
  iconSvg?: string;
  label: string;
  path?: string;
  isLanguageOption?: boolean;
  isSelected?: boolean;
}

// Default sidebar items if none are provided
const defaultSidebarItems: SidebarItem[] = [
  {
    id: "promotions",
    iconSvg: starIcon,
    label: "Promotions",
    expandable: true,
    children: [
      { id: "weekly-raffle", label: "$75k Weekly Raffle", path: "/promotions/weekly-raffle", iconSvg: starIcon },
      { id: "race", label: "$100k Race", path: "/promotions/race", iconSvg: starIcon },
      { id: "pragmatic", label: "Pragmatic Drops & Wins", path: "/promotions/pragmatic", iconSvg: svgIcons.pragmaticDrops },
      { id: "view-all", label: "View All", path: "/promotions", iconSvg: svgIcons.viewAll },
    ],
  },
  {
    id: "affiliate",
    iconSvg: svgIcons.affiliate,
    label: "Affiliate",
    path: "/affiliate",
  },
  {
    id: "vip-club",
    iconSvg: svgIcons.vipClub,
    label: "VIP Club",
    path: "/vip",
  },
  {
    id: "blog",
    iconSvg: svgIcons.blog,
    label: "Blog",
    path: "/blog",
  },
  {
    id: "forum",
    iconSvg: svgIcons.forum,
    label: "Forum",
    path: "/forum",
  },
  {
    id: "sponsorships",
    iconSvg: starIcon,
    label: "Sponsorships",
    expandable: true,
    children: [
      { id: "drake", label: "Drake", path: "/sponsorships/drake", iconSvg: svgIcons.drake },
      { id: "stake-f1-team", label: "Stake F1 Team", path: "/sponsorships/stake-f1-team", iconSvg: svgIcons.stakeF1Team },
      { id: "ufc", label: "UFC", path: "/sponsorships/ufc", iconSvg: svgIcons.ufc, isSelected: true },
      { id: "everton", label: "Everton Football Club", path: "/sponsorships/everton", iconSvg: svgIcons.everton },
      { id: "juventude", label: "Esporte Clube Juventude", path: "/sponsorships/juventude", iconSvg: svgIcons.juventud },
      { id: "melgar", label: "FBC Melgar", path: "/sponsorships/melgar", iconSvg: svgIcons.melgar },
      { id: "fortaleza", label: "Fortaleza CEIF", path: "/sponsorships/fortaleza", iconSvg: svgIcons.fortaleza },
      { id: "nublense", label: "Club Deportivo Ñublense", path: "/sponsorships/nublense", iconSvg: svgIcons.nublense },
      { id: "enyimba", label: "Enyimba Football Club", path: "/sponsorships/enyimba", iconSvg: svgIcons.enyimba },
      { id: "davis-cup", label: "Davis Cup", path: "/sponsorships/davis-cup", iconSvg: svgIcons.davisCup },
      { id: "aguero", label: "Kun Agüero", path: "/sponsorships/aguero", iconSvg: svgIcons.aguero },
      { id: "adesanya", label: "Israel Adesanya", path: "/sponsorships/adesanya", iconSvg: svgIcons.adesanya },
      { id: "pereira", label: "Alex Pereira", path: "/sponsorships/pereira", iconSvg: svgIcons.pereira },
      { id: "shevchenko", label: "Valentina Shevchenko", path: "/sponsorships/shevchenko", iconSvg: svgIcons.shevchenko },
      { id: "dvalishvili", label: "Merab Dvalishvili", path: "/sponsorships/dvalishvili", iconSvg: svgIcons.dvalishvili },
      { id: "pantoja", label: "Alexandre Pantoja", path: "/sponsorships/pantoja", iconSvg: svgIcons.pantoja },
      { id: "borralho", label: "Caio Borralho", path: "/sponsorships/borralho", iconSvg: svgIcons.borralho },
      { id: "dettori", label: "Frankie Dettori", path: "/sponsorships/dettori", iconSvg: svgIcons.dettori },
    ],
  },
  {
    id: "responsible-gambling",
    iconSvg: svgIcons.responsibleGambling,
    label: "Responsible Gambling",
    path: "/responsible-gambling",
  },
  {
    id: "live-support",
    iconSvg: starIcon,
    label: "Live Support",
    path: "/support",
  },
  {
    id: "language",
    iconSvg: starIcon,
    label: "Language: English",
    expandable: true,
    children: [
      { id: "english", label: "English", path: "/language/english", isLanguageOption: true, iconSvg: starIcon, isSelected: true },
      { id: "espanol", label: "Español", path: "/language/espanol", isLanguageOption: true, iconSvg: starIcon },
      { id: "japanese", label: "日本語", path: "/language/japanese", isLanguageOption: true, iconSvg: starIcon },
      { id: "chinese", label: "中文", path: "/language/chinese", isLanguageOption: true, iconSvg: starIcon },
      { id: "portuguese", label: "Português", path: "/language/portuguese", isLanguageOption: true, iconSvg: starIcon },
      { id: "russian", label: "Русский", path: "/language/russian", isLanguageOption: true, iconSvg: starIcon },
      { id: "french", label: "Français", path: "/language/french", isLanguageOption: true, iconSvg: starIcon },
      { id: "german", label: "Deutsch", path: "/language/german", isLanguageOption: true, iconSvg: starIcon },
      { id: "hindi", label: "हिन्दी", path: "/language/hindi", isLanguageOption: true, iconSvg: starIcon },
      { id: "indonesian", label: "Indonesian", path: "/language/indonesian", isLanguageOption: true, iconSvg: starIcon },
      { id: "korean", label: "한국어", path: "/language/korean", isLanguageOption: true, iconSvg: starIcon },
      { id: "polish", label: "Polski", path: "/language/polish", isLanguageOption: true, iconSvg: starIcon },
      { id: "turkish", label: "Türkçe", path: "/language/turkish", isLanguageOption: true, iconSvg: starIcon },
      { id: "vietnamese", label: "Tiếng Việt", path: "/language/vietnamese", isLanguageOption: true, iconSvg: starIcon },
      { id: "finnish", label: "Suomen", path: "/language/finnish", isLanguageOption: true, iconSvg: starIcon },
      { id: "arabic", label: "اَلْعَرَبِيَّةُ", path: "/language/arabic", isLanguageOption: true, iconSvg: starIcon },
    ],
  },
];

const Sidebar = ({ collapsed, toggleSidebar, sidebarItems = defaultSidebarItems }: SidebarProps) => {
  const location = useLocation();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [activeTab, setActiveTab] = useState<"casino" | "sports">("sports");

  // Set active tab based on current path
  useEffect(() => {
    if (location.pathname.includes("/casino")) {
      setActiveTab("casino");
    } else {
      setActiveTab("sports");
    }
  }, [location.pathname]);

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
    // ... keep existing code (sidebar container and styling)
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="toggle-button" onClick={toggleSidebar}>
          <Menu className="toggle-icon" />
        </button>

        <div className={`nav-tabs ${collapsed ? 'nav-tabs-collapsed' : ''}`}>
          <Link
            to="/casino"
            className={`nav-tab ${activeTab === "casino" ? "casino-active" : "casino-inactive"}`}
            onClick={() => setActiveTab("casino")}
          >
            <span className="nav-tab-text">Casino</span>
          </Link>
          <Link
            to="/sports"
            className={`nav-tab ${activeTab === "sports" ? "sports-active" : "sports-inactive"}`}
            onClick={() => setActiveTab("sports")}
          >
            <span className="nav-tab-text">Sports</span>
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
                    <SvgIcon svgContent={item.iconSvg} size={20} />
                  </span>
                  <span className="sidebar-label">{item.label}</span>
                  {collapsed ? (
                    <ChevronRight className="dropdown-icon-collapsed" />
                  ) : (
                    <span className="item-dropdown-icon">
                      <img
                        src={chevronRightIcon}
                        alt="expand"
                        className={`dropdown-icon ${openItems.includes(item.id) ? 'rotated' : ''}`}
                      />
                    </span>
                  )}
                </button>

                <div className={`dropdown-content ${openItems.includes(item.id) ? 'expanded' : ''}`}>
                  {item.children.map((child) => (
                    child.isLanguageOption ? (
                      <div
                        key={child.id}
                        className={`language-option ${(selectedLanguage === child.id || child.isSelected) ? 'selected' : ''}`}
                        onClick={() => handleLanguageSelect(child.id)}
                      >
                        <span className="language-label">{child.label}</span>
                        <span className="language-radio"></span>
                      </div>
                    ) : (
                      <Link
                        key={child.id}
                        to={child.path || "#"}
                        className={`dropdown-item ${child.isSelected ? 'selected' : ''}`}
                      >
                        {child.iconSvg && (
                          <span className="sidebar-icon">
                            <SvgIcon svgContent={child.iconSvg} size={18} />
                          </span>
                        )}
                        <span className="sidebar-label">{child.label}</span>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ) : (
              <Link to={item.path || "#"} className="sidebar-item-link">
                <span className="sidebar-icon">
                  <SvgIcon svgContent={item.iconSvg} size={20} />
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
  background-color: #0F212E;
  border-right: 1px solid #1f2937;
  overflow-y: hidden;
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
  height: 24px; /* Fixed height for consistency */
}

.toggle-icon {
  width: 24px;
  height: 24px;
}

.nav-tabs {
  display: flex;
  gap: 4px;
}

.nav-tabs.nav-tabs-collapsed {
  margin-top: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
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
  margin: 0 0.5rem 0 0.5rem;
  border-radius: 3px;
  background-color: #1A2C38;
  // background-color: red;
  overflow-y: auto;
  flex: 0 1 auto;
  max-height: calc(100vh - 60px);
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.sidebar-content::-webkit-scrollbar {
  display: none;
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
  background-color: #213743;
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

.white-icon {
  filter: brightness(0) invert(1); /* Makes icons white */
  width: 100%;
  height: 100%;
}

.sidebar-label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 0.75rem;
}

.item-dropdown-icon {
  padding: 0.15rem;
  border-radius: 9999px;
  background-color: #2F4553;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
  display: block;
  filter: brightness(0) invert(1); /* Makes icons white */
}

.dropdown-icon-collapsed {
  width: 12px;
  height: 12px;
  color: white;
  position: absolute;
  right: 0px;
  z-index: 5;
}

.dropdown-icon.rotated {
  transform: rotate(90deg);
}

.dropdown-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #213743;
}

.dropdown-content.expanded {
  max-height: none; /* Allow content to expand fully */
  overflow-y: visible;
}

.dropdown-item {
  display: flex;
  flex-direction: row;
  align-items: center;
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
.sidebar.collapsed .item-dropdown-icon {
  display: none;
}

.sidebar.collapsed .toggle-button {
  margin-right: 0;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
}

.sidebar.collapsed .sidebar-header {
  justify-content: center;
  flex-direction: column;
  padding: 0.75rem 0;
}

.sidebar.collapsed .nav-tab-text {
  display: none;
}


.sidebar.collapsed .nav-tab {
  flex-direction: column;
}

.sidebar.collapsed .nav-tab {
  padding: 1.5rem;
  min-width: 28px;
  width: 28px;
  height: 28px;
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
  max-height: none; /* Allow full height */
  visibility: visible;
}

.sidebar.collapsed .sidebar-icon {
  margin-right: 0;
}

.sidebar.collapsed .sidebar-item-button,
.sidebar.collapsed .sidebar-item-link {
  justify-content: center;
  padding: 0.5rem 0;
  position: relative;
}

.sidebar.collapsed .item-dropdown-icon {
  position: absolute;
  right: -3px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #1A2C38; /* Added the specified color */
  z-index: 5;
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


.nav-tab.casino-active, .nav-tab.casino-inactive {
  background-image: url("/images/casino-big.jpg");
  background-size: cover;
  background-position: center;
  color: white; /* optional */
  transition: background-image 0.3s ease;
}

.nav-tab.casino-active:hover,
.nav-tab.casino-inactive:hover {
  background-image: url("/images/casino-big-active.jpg");
}
.nav-tab.sports-active, .nav-tab.sports-inactive {
  background-image: url("/images/sports-big.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  transition: background-image 0.3s ease;
}

.nav-tab.sports-active:hover,
.nav-tab.sports-inactive:hover {
  background-image: url("/images/sports-big-active.jpg");
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Sidebar;
