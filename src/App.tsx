
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Header from "./components/Header";
import Index from "./pages/Index";
import Casino from "./pages/Casino";
import Sports from "./pages/Sports";
import StakeOriginals from "./pages/StakeOriginals";
import NotFound from "./pages/NotFound";
import "./App.css";

// Import SVG icons
import star from "./assets/icons/star.svg";

const queryClient = new QueryClient();

// Define sidebar items for Casino page
const casinoSidebarItems: SidebarItem[] = [
  { id: "favourites", icon: star, label: "Favourites", path: "/favourites" },
  { id: "recent", icon: star, label: "Recent", path: "/recent" },
  { id: "challenges", icon: star, label: "Challenges", path: "/challenges" },
  { id: "my-bets", icon: star, label: "My Bets", path: "/my-bets" },
  { id: "games", icon: star, label: "Games", path: "/games" },
  { id: "stake-originals", icon: star, label: "Stake Originals", path: "/stake-originals" },
  { id: "stake-exclusives", icon: star, label: "Stake Exclusives", path: "/stake-exclusives" },
  { id: "slots", icon: star, label: "Slots", path: "/slots" },
  { id: "live-casino", icon: star, label: "Live Casino", path: "/live-casino" },
  { id: "game-shows", icon: star, label: "Game Shows", path: "/game-shows" },
  { id: "new-releases", icon: star, label: "New Releases", path: "/new-releases" },
  { id: "stake-poker", icon: star, label: "Stake Poker", path: "/stake-poker" },
  { id: "bonus-buy", icon: star, label: "Bonus Buy", path: "/bonus-buy" },
  { id: "enhanced-rtp", icon: star, label: "Enhanced RTP", path: "/enhanced-rtp" },
  { id: "table-games", icon: star, label: "Table Games", path: "/table-games" },
  { id: "blackjack", icon: star, label: "Blackjack", path: "/blackjack" },
  { id: "baccarat", icon: star, label: "Baccarat", path: "/baccarat" },
  { id: "roulette", icon: star, label: "Roulette", path: "/roulette" },
  { id: "providers", icon: star, label: "Providers", path: "/providers" },
  {
    id: "promotions",
    icon: star,
    label: "Promotions",
    expandable: true,
    children: [
      { id: "weekly-raffle", label: "$75k Weekly Raffle", path: "/promotions/weekly-raffle", icon: star },
      { id: "race", label: "$100k Race", path: "/promotions/race", icon: star },
      { id: "race-90-min", label: "$25k Race - 90 Minutes", path: "/promotions/race-90-min", icon: star },
      { id: "pragmatic", label: "Pragmatic Drops & Wins", path: "/promotions/pragmatic", icon: star },
      { id: "view-all", label: "View All", path: "/promotions", icon: star },
    ],
  },
  { id: "affiliate", icon: star, label: "Affiliate", path: "/affiliate" },
  { id: "vip-club", icon: star, label: "VIP Club", path: "/vip" },
  { id: "blog", icon: star, label: "Blog", path: "/blog" },
  { id: "forum", icon: star, label: "Forum", path: "/forum" },
  {
    id: "sponsorships",
    icon: star,
    label: "Sponsorships",
    expandable: true,
    children: [
      { id: "drake", label: "Drake", path: "/sponsorships/drake", icon: star },
      { id: "stake-f1-team", label: "Stake F1 Team", path: "/sponsorships/stake-f1-team", icon: star },
      { id: "ufc", label: "UFC", path: "/sponsorships/ufc", icon: star, isSelected: true },
      { id: "everton", label: "Everton Football Club", path: "/sponsorships/everton", icon: star },
      { id: "juventude", label: "Esporte Clube Juventude", path: "/sponsorships/juventude", icon: star },
      { id: "melgar", label: "FBC Melgar", path: "/sponsorships/melgar", icon: star },
      { id: "fortaleza", label: "Fortaleza CEIF", path: "/sponsorships/fortaleza", icon: star },
      { id: "nublense", label: "Club Deportivo Ñublense", path: "/sponsorships/nublense", icon: star },
      { id: "enyimba", label: "Enyimba Football Club", path: "/sponsorships/enyimba", icon: star },
      { id: "davis-cup", label: "Davis Cup", path: "/sponsorships/davis-cup", icon: star },
      { id: "aguero", label: "Kun Agüero", path: "/sponsorships/aguero", icon: star },
      { id: "adesanya", label: "Israel Adesanya", path: "/sponsorships/adesanya", icon: star },
      { id: "pereira", label: "Alex Pereira", path: "/sponsorships/pereira", icon: star },
      { id: "shevchenko", label: "Valentina Shevchenko", path: "/sponsorships/shevchenko", icon: star },
      { id: "dvalishvili", label: "Merab Dvalishvili", path: "/sponsorships/dvalishvili", icon: star },
      { id: "pantoja", label: "Alexandre Pantoja", path: "/sponsorships/pantoja", icon: star },
      { id: "borralho", label: "Caio Borralho", path: "/sponsorships/borralho", icon: star },
      { id: "dettori", label: "Frankie Dettori", path: "/sponsorships/dettori", icon: star },
    ],
  },
  { id: "responsible-gambling", icon: star, label: "Responsible Gambling", path: "/responsible-gambling" },
  { id: "live-support", icon: star, label: "Live Support", path: "/support" },
  {
    id: "language",
    icon: star,
    label: "Language: English",
    expandable: true,
    children: [
      { id: "english", label: "English", path: "/language/english", isLanguageOption: true, icon: star, isSelected: true },
      { id: "espanol", label: "Español", path: "/language/espanol", isLanguageOption: true, icon: star },
      { id: "japanese", label: "日本語", path: "/language/japanese", isLanguageOption: true, icon: star },
      { id: "chinese", label: "中文", path: "/language/chinese", isLanguageOption: true, icon: star },
      { id: "portuguese", label: "Português", path: "/language/portuguese", isLanguageOption: true, icon: star },
      { id: "russian", label: "Русский", path: "/language/russian", isLanguageOption: true, icon: star },
      { id: "french", label: "Français", path: "/language/french", isLanguageOption: true, icon: star },
      { id: "german", label: "Deutsch", path: "/language/german", isLanguageOption: true, icon: star },
      { id: "hindi", label: "हिन्दी", path: "/language/hindi", isLanguageOption: true, icon: star },
      { id: "indonesian", label: "Indonesian", path: "/language/indonesian", isLanguageOption: true, icon: star },
      { id: "korean", label: "한국어", path: "/language/korean", isLanguageOption: true, icon: star },
      { id: "polish", label: "Polski", path: "/language/polish", isLanguageOption: true, icon: star },
      { id: "turkish", label: "Türkçe", path: "/language/turkish", isLanguageOption: true, icon: star },
      { id: "vietnamese", label: "Tiếng Việt", path: "/language/vietnamese", isLanguageOption: true, icon: star },
      { id: "finnish", label: "Suomen", path: "/language/finnish", isLanguageOption: true, icon: star },
      { id: "arabic", label: "اَلْعَرَبِيَّةُ", path: "/language/arabic", isLanguageOption: true, icon: star },
    ],
  },
];

// Define sidebar items for Index page
const indexSidebarItems: SidebarItem[] = [
  { id: "favourites", icon: star, label: "Favourites", path: "/favourites" },
  { id: "providers", icon: star, label: "Providers", path: "/providers" },
  {
    id: "promotions",
    icon: star,
    label: "Promotions",
    expandable: true,
    children: [
      { id: "weekly-raffle", label: "$75k Weekly Raffle", path: "/promotions/weekly-raffle", icon: star },
      { id: "race", label: "$100k Race", path: "/promotions/race", icon: star },
      { id: "race-90-min", label: "$25k Race - 90 Minutes", path: "/promotions/race-90-min", icon: star },
      { id: "pragmatic", label: "Pragmatic Drops & Wins", path: "/promotions/pragmatic", icon: star },
      { id: "view-all", label: "View All", path: "/promotions", icon: star },
    ],
  },
  { id: "affiliate", icon: star, label: "Affiliate", path: "/affiliate" },
  { id: "vip-club", icon: star, label: "VIP Club", path: "/vip" },
  { id: "blog", icon: star, label: "Blog", path: "/blog" },
  { id: "forum", icon: star, label: "Forum", path: "/forum" },
  {
    id: "sponsorships",
    icon: star,
    label: "Sponsorships",
    expandable: true,
    children: [
      { id: "drake", label: "Drake", path: "/sponsorships/drake", icon: star },
      { id: "stake-f1-team", label: "Stake F1 Team", path: "/sponsorships/stake-f1-team", icon: star },
      { id: "ufc", label: "UFC", path: "/sponsorships/ufc", icon: star, isSelected: true },
      { id: "everton", label: "Everton Football Club", path: "/sponsorships/everton", icon: star },
      { id: "juventude", label: "Esporte Clube Juventude", path: "/sponsorships/juventude", icon: star },
      { id: "melgar", label: "FBC Melgar", path: "/sponsorships/melgar", icon: star },
      { id: "fortaleza", label: "Fortaleza CEIF", path: "/sponsorships/fortaleza", icon: star },
      { id: "nublense", label: "Club Deportivo Ñublense", path: "/sponsorships/nublense", icon: star },
      { id: "enyimba", label: "Enyimba Football Club", path: "/sponsorships/enyimba", icon: star },
      { id: "davis-cup", label: "Davis Cup", path: "/sponsorships/davis-cup", icon: star },
      { id: "aguero", label: "Kun Agüero", path: "/sponsorships/aguero", icon: star },
      { id: "adesanya", label: "Israel Adesanya", path: "/sponsorships/adesanya", icon: star },
      { id: "pereira", label: "Alex Pereira", path: "/sponsorships/pereira", icon: star },
      { id: "shevchenko", label: "Valentina Shevchenko", path: "/sponsorships/shevchenko", icon: star },
      { id: "dvalishvili", label: "Merab Dvalishvili", path: "/sponsorships/dvalishvili", icon: star },
      { id: "pantoja", label: "Alexandre Pantoja", path: "/sponsorships/pantoja", icon: star },
      { id: "borralho", label: "Caio Borralho", path: "/sponsorships/borralho", icon: star },
      { id: "dettori", label: "Frankie Dettori", path: "/sponsorships/dettori", icon: star },
    ],
  },
  { id: "responsible-gambling", icon: star, label: "Responsible Gambling", path: "/responsible-gambling" },
  { id: "live-support", icon: star, label: "Live Support", path: "/support" },
  {
    id: "language",
    icon: star,
    label: "Language: English",
    expandable: true,
    children: [
      { id: "english", label: "English", path: "/language/english", isLanguageOption: true, icon: star, isSelected: true },
      { id: "espanol", label: "Español", path: "/language/espanol", isLanguageOption: true, icon: star },
      { id: "japanese", label: "日本語", path: "/language/japanese", isLanguageOption: true, icon: star },
      { id: "chinese", label: "中文", path: "/language/chinese", isLanguageOption: true, icon: star },
      { id: "portuguese", label: "Português", path: "/language/portuguese", isLanguageOption: true, icon: star },
      { id: "russian", label: "Русский", path: "/language/russian", isLanguageOption: true, icon: star },
      { id: "french", label: "Français", path: "/language/french", isLanguageOption: true, icon: star },
      { id: "german", label: "Deutsch", path: "/language/german", isLanguageOption: true, icon: star },
      { id: "hindi", label: "हिन्दी", path: "/language/hindi", isLanguageOption: true, icon: star },
      { id: "indonesian", label: "Indonesian", path: "/language/indonesian", isLanguageOption: true, icon: star },
      { id: "korean", label: "한국어", path: "/language/korean", isLanguageOption: true, icon: star },
      { id: "polish", label: "Polski", path: "/language/polish", isLanguageOption: true, icon: star },
      { id: "turkish", label: "Türkçe", path: "/language/turkish", isLanguageOption: true, icon: star },
      { id: "vietnamese", label: "Tiếng Việt", path: "/language/vietnamese", isLanguageOption: true, icon: star },
      { id: "finnish", label: "Suomen", path: "/language/finnish", isLanguageOption: true, icon: star },
      { id: "arabic", label: "اَلْعَرَبِيَّةُ", path: "/language/arabic", isLanguageOption: true, icon: star },
    ],
  },
];

// Create a component that will determine which sidebar items to use based on the current route
const AppContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Determine which sidebar items to use based on the current route
  const getSidebarItems = () => {
    // Use same sidebar items for Casino, Stake Originals and Sports pages
    if (location.pathname.includes('/casino') || 
        location.pathname.includes('/sports') || 
        location.pathname.includes('/stake-originals')) {
      return casinoSidebarItems;
    }
    return indexSidebarItems;
  };

  return (
    <div className={`app-container ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar 
        collapsed={collapsed} 
        toggleSidebar={toggleSidebar} 
        sidebarItems={getSidebarItems()} 
      />
      <div className="content-container">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/casino" element={<Casino />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/stake-originals" element={<StakeOriginals />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
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
