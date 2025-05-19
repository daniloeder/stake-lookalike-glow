
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Header from "./components/Header";
import LiveSupport from "./components/LiveSupport";
import Index from "./pages/Index";
import Casino from "./pages/Casino";
import Sports from "./pages/Sports";
import GamesPage from "./pages/GamesPage";
import VIPClub from "./pages/VIPClub";
import BlogPage from "./pages/BlogPage";
import AffiliatePage from "./pages/AffiliatePage";
import ResponsibleGambling from "./pages/ResponsibleGambling";
import NotFound from "./pages/NotFound";
import { svgIcons, starIcon } from "./utils/svgIcons";
import "./App.css";

const queryClient = new QueryClient();

// Define sidebar items for all pages except Index
const mainSidebarItems: SidebarItem[] = [
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

// Define sidebar items for Index page
const indexSidebarItems: SidebarItem[] = [
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

// Create a component that will determine which sidebar items to use based on the current route
const AppContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [liveSupportOpen, setLiveSupportOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleLiveSupport = () => {
    setLiveSupportOpen(!liveSupportOpen);
  };

  // Determine which sidebar items to use based on the current route
  const getSidebarItems = () => {
    // Special pages that use the index sidebar
    const specialPages = ['/', '/vip', '/blog', '/affiliate'];
    if (specialPages.includes(location.pathname)) {
      return indexSidebarItems;
    }
    // For all other pages, use the main sidebar items
    return mainSidebarItems;
  };

  // Handle specific sidebar item clicks
  const handleSidebarItemClick = (itemId: string, itemPath: string) => {
    if (itemId === "live-support") {
      toggleLiveSupport();
    } else if (itemId === "responsible-gambling") {
      navigate(itemPath);
    }
  };

  return (
    <div className={`app-container ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar 
        collapsed={collapsed} 
        toggleSidebar={toggleSidebar} 
        sidebarItems={getSidebarItems()}
        onItemClick={handleSidebarItemClick}
      />
      <div className="content-container">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/casino" element={<Casino />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/stake-originals" element={<GamesPage title="Stake Originals" />} />
            <Route path="/stake-exclusives" element={<GamesPage title="Stake Exclusives" />} />
            <Route path="/slots" element={<GamesPage title="Slots" />} />
            <Route path="/live-casino" element={<GamesPage title="Live Casino" />} />
            <Route path="/challenges" element={<GamesPage title="Challenges" />} />
            <Route path="/game-shows" element={<GamesPage title="Game Shows" />} />
            <Route path="/new-releases" element={<GamesPage title="New Releases" />} />
            <Route path="/stake-poker" element={<GamesPage title="Stake Poker" />} />
            <Route path="/bonus-buy" element={<GamesPage title="Bonus Buy" />} />
            <Route path="/enhanced-rtp" element={<GamesPage title="Enhanced RTP" />} />
            <Route path="/table-games" element={<GamesPage title="Table Games" />} />
            <Route path="/blackjack" element={<GamesPage title="Blackjack" />} />
            <Route path="/baccarat" element={<GamesPage title="Baccarat" />} />
            <Route path="/roulette" element={<GamesPage title="Roulette" />} />
            <Route path="/providers" element={<GamesPage title="Providers" />} />
            <Route path="/vip" element={<VIPClub />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/affiliate" element={<AffiliatePage />} />
            <Route path="/forum" />
            <Route path="/responsible-gambling" element={<ResponsibleGambling />} />
            <Route path="/support" element={<GamesPage title="Live Support" />} />
            <Route path="/promotions/*" element={<GamesPage title="Promotions" />} />
            <Route path="/sponsorships/*" element={<GamesPage title="Sponsorships" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      
      {/* Pass the open state to LiveSupport */}
      <LiveSupport isOpen={liveSupportOpen} onClose={() => setLiveSupportOpen(false)} />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppContent />
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
