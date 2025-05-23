import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronRight, ChevronLeft } from "lucide-react";
import SvgIcon from "./SvgIcon";
import Header from "./Header";
import SearchBar from "./SearchBar";
import '../styles/Sidebar.css';
import { svgIcons, starIcon } from "../utils/svgIcons";

// Import SVG icons
import chevronDownIcon from "../assets/icons/chevron-down.svg";
import chevronRightIcon from "../assets/icons/chevron-right.svg";

export interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
  sidebarItems?: SidebarItem[];
  onItemClick?: (itemId: string, itemPath: string) => void;
  isMobile?: boolean;
  isOpen?: boolean;
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
  { id: "favourites", iconSvg: svgIcons.favourites, label: "Favourites", path: "#" },
  { id: "recent", iconSvg: svgIcons.recent, label: "Recent", path: "#" },
  { id: "challenges", iconSvg: svgIcons.challenges, label: "Challenges", path: "/challenges" },
  { id: "my-bets", iconSvg: svgIcons.myBets, label: "My Bets", path: "#" },
  { id: "games", iconSvg: svgIcons.gameShows, label: "Games", path: "/games" }, // Changed from svgIcons.games to svgIcons.gameShows
  { id: "stake-originals", iconSvg: svgIcons.stakeOriginals, label: "Stake Originals", path: "/stake-originals" },
  { id: "stake-exclusives", iconSvg: svgIcons.stakeExclusives, label: "Stake Exclusives", path: "/stake-exclusives" },
  { id: "slots", iconSvg: svgIcons.slots, label: "Slots", path: "/slots" },
  { id: "live-casino", iconSvg: svgIcons.liveCasino, label: "Live Casino", path: "/live-casino" },
  { id: "game-shows", iconSvg: svgIcons.gameShows, label: "Game Shows", path: "/game-shows" },
  { id: "new-releases", iconSvg: svgIcons.newReleases, label: "New Releases", path: "/new-releases" },
  { id: "stake-poker", iconSvg: svgIcons.stakePoker, label: "Stake Poker", path: "/stake-poker" },
  { id: "bonus-buy", iconSvg: svgIcons.bonusBuy, label: "Bonus Buy", path: "/bonus-buy" },
  { id: "enhanced-rtp", iconSvg: svgIcons.enhancedRtp, label: "Enhanced RTP", path: "/enhanced-rtp" },
  { id: "table-games", iconSvg: svgIcons.tableGames, label: "Table Games", path: "/table-games" },
  { id: "blackjack", iconSvg: svgIcons.blackjack, label: "Blackjack", path: "/blackjack" },
  { id: "baccarat", iconSvg: svgIcons.baccarat, label: "Baccarat", path: "/baccarat" },
  { id: "roulette", iconSvg: svgIcons.roulette, label: "Roulette", path: "/roulette" },
  { id: "providers", iconSvg: svgIcons.providers, label: "Providers", path: "/providers" },
  {
    id: "promotions",
    iconSvg: starIcon,
    label: "Promotions",
    expandable: true,
    children: [
      { id: "weekly-raffle", label: "$75k Weekly Raffle", path: "/promotions/weekly-raffle", iconSvg: starIcon },
      { id: "race", label: "$100k Race", path: "/promotions/race", iconSvg: starIcon },
      { id: "race-90-min", label: "$25k Race - 90 Minutes", path: "/promotions/race-90-min", iconSvg: starIcon },
      { id: "pragmatic", label: "Pragmatic Drops & Wins", path: "/promotions/pragmatic", iconSvg: svgIcons.pragmaticDrops },
      { id: "view-all", label: "View All", path: "/promotions", iconSvg: svgIcons.viewAll },
    ],
  },
  { id: "affiliate", iconSvg: svgIcons.affiliate, label: "Affiliate", path: "/affiliate" },
  { id: "vip-club", iconSvg: svgIcons.vipClub, label: "VIP Club", path: "/vip" },
  { id: "blog", iconSvg: svgIcons.blog, label: "Blog", path: "/blog" },
  { id: "forum", iconSvg: svgIcons.forum, label: "Forum", path: "/forum" },
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
  { id: "responsible-gambling", iconSvg: svgIcons.responsibleGambling, label: "Responsible Gambling", path: "/responsible-gambling" },
  { id: "live-support", iconSvg: starIcon, label: "Live Support", path: "/support" },
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

const Sidebar = ({ 
  collapsed, 
  toggleSidebar, 
  sidebarItems = defaultSidebarItems, 
  onItemClick,
  isMobile = false,
  isOpen = false
}: SidebarProps) => {
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

  // Function to handle item click if onItemClick is provided
  const handleItemClick = (id: string, path: string) => {
    if (onItemClick) {
      onItemClick(id, path);
    }
    
    // If mobile, close the sidebar after clicking an item
    if (isMobile) {
      toggleSidebar();
    }
  };

  // Check if we're on the index page
  const isIndexPage = location.pathname === "/";

  // Function to determine if an item should be styled as faded
  const isFadedItem = (id: string) => {
    return id === "favourites" || id === "recent" || id === "my-bets";
  };

  // Function to render horizontal rule after specific items
  const shouldRenderHrAfterItem = (id: string, index: number) => {
    // For Index page and special pages, add hr after "forum"
    const specialPages = ['/', '/vip', '/blog', '/affiliate'];

    if (specialPages.includes(location.pathname) && id === "forum") {
      return true;
    }

    // For other pages, add hr after "my-bets", "providers", and "forum"
    if (!specialPages.includes(location.pathname)) {
      if (id === "my-bets" || id === "providers" || id === "forum") {
        return true;
      }
    }

    return false;
  };

  // Function to determine if an item should not display an icon
  const shouldHideIcon = (id: string) => {
    // We're not hiding any icons now to keep consistency
    return false;
  };
  
  const sidebarClass = isMobile 
    ? `sidebar mobile-sidebar ${isOpen ? 'active' : ''}` 
    : `sidebar ${collapsed ? 'collapsed' : ''}`;

  return (
    <div className={sidebarClass}>
      {!isMobile ? (
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
      ) : (
        <>
        <Header />

        <div className="search-section">
          <div className="search-dropdown">
            <button className="search-type-button">
              Casino <ChevronLeft className="search-icon-dropdown" />
            </button>
          </div>
          <SearchBar placeholder="Search your game" />
        </div>

        <div className="sidebar-mobile-header">
          {/* Header component here  */}

          <div className={`nav-tabs mobile-nav-tabs`}>
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
        </>
      )}

      <div className="sidebar-content">
        {sidebarItems.map((item, index) => (
          <div key={item.id} className="sidebar-item-container">
            {item.children && item.expandable ? (
              <div className="collapsible-item expandable">
                <button
                  className={`sidebar-item-button ${isFadedItem(item.id) ? 'faded-item' : ''}`}
                  onClick={() => toggleItem(item.id)}
                >
                  {!shouldHideIcon(item.id) && (
                    <span className="sidebar-icon">
                      <SvgIcon svgContent={item.iconSvg} size={20} />
                    </span>
                  )}
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
                        onClick={() => handleItemClick(child.id, child.path || "#")}
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
              item.id === "games" ? (
                <div className="sidebar-item-link not-clickable">
                  <span className="sidebar-label sidebar-label-games">
                    {item.label}
                  </span>
                </div>
              ) : (<>
                {item.id === "games" ? (
                  <div className="sidebar-item-link not-clickable">
                    {!shouldHideIcon(item.id) && (
                      <span className="sidebar-icon">
                        <SvgIcon svgContent={item.iconSvg} size={20} />
                      </span>
                    )}
                    <span className="sidebar-label sidebar-label-games">
                      {item.label}
                    </span>
                  </div>
                ) : (
                  <Link
                    to={item.path || "#"}
                    className={`sidebar-item-link ${isFadedItem(item.id) ? 'faded-item' : ''}`}
                    onClick={() => handleItemClick(item.id, item.path || "#")}
                  >
                    {!shouldHideIcon(item.id) && (
                      <span className="sidebar-icon">
                        <SvgIcon svgContent={item.iconSvg} size={20} />
                      </span>
                    )}
                    <span className="sidebar-label">
                      {item.label}
                    </span>
                  </Link>
                )}

              </>)
            )}

            {shouldRenderHrAfterItem(item.id, index) && (
              <hr className="sidebar-divider" />
            )}
          </div>
        ))}
      </div>
      
      {isMobile && (
        <div className="sidebar-mobile-close" onClick={toggleSidebar}>
          <span>Close</span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
