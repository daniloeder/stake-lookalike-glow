
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import TabBar from "@/components/TabBar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sports sections data
const sections = [
  {
    title: "Popular Sports",
    icon: "🏆",
    showArrows: true,
    items: [
      { 
        name: "Football", 
        image: "public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png",
        matches: 1245
      },
      { 
        name: "Tennis", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        matches: 342
      },
      { 
        name: "Basketball", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png",
        matches: 189
      },
      { 
        name: "Ice Hockey", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        matches: 97
      },
      { 
        name: "Baseball", 
        image: "", 
        matches: 45
      },
      { 
        name: "American Football", 
        image: "", 
        matches: 38
      },
      { 
        name: "MMA", 
        image: "", 
        matches: 24
      },
    ]
  },
  {
    title: "Live Matches",
    icon: "🔴",
    showArrows: true,
    isLive: true,
    items: [
      { 
        name: "Arsenal vs Chelsea", 
        image: "public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png",
        time: "65:22",
        score: "2-1",
        sport: "Football"
      },
      { 
        name: "Djokovic vs Alcaraz", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        time: "Set 3",
        score: "6-4, 3-6, 3-2",
        sport: "Tennis"
      },
      { 
        name: "Lakers vs Warriors", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        time: "Q3 8:42",
        score: "67-58",
        sport: "Basketball"
      },
      { 
        name: "Maple Leafs vs Bruins", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png",
        time: "P2 15:37",
        score: "2-0",
        sport: "Ice Hockey"
      },
      { 
        name: "Yankees vs Red Sox", 
        image: "", 
        time: "7th Inn",
        score: "3-5",
        sport: "Baseball"
      },
      { 
        name: "Chiefs vs Ravens", 
        image: "", 
        time: "Q3 12:05",
        score: "21-14",
        sport: "American Football"
      },
      { 
        name: "UFC Fight Night", 
        image: "", 
        time: "Round 3",
        score: "Coming up",
        sport: "MMA"
      },
    ]
  },
  {
    title: "Featured Tournaments",
    icon: "🌟",
    showArrows: true,
    items: [
      { 
        name: "Premier League", 
        image: "public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png",
        sport: "Football",
        matches: 380
      },
      { 
        name: "Champions League", 
        image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
        sport: "Football",
        matches: 125
      },
      { 
        name: "Wimbledon", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        sport: "Tennis",
        matches: 127
      },
      { 
        name: "NBA", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        sport: "Basketball",
        matches: 1230
      },
      { 
        name: "NHL", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png", 
        sport: "Ice Hockey",
        matches: 1312
      },
      { 
        name: "MLB", 
        image: "", 
        sport: "Baseball",
        matches: 2430
      },
      { 
        name: "NFL", 
        image: "", 
        sport: "American Football",
        matches: 272
      },
    ]
  },
  {
    title: "Popular Bets",
    icon: "🔥",
    showArrows: true,
    items: [
      { 
        name: "Man City vs Liverpool", 
        image: "public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png",
        sport: "Football",
        time: "Tomorrow 15:00",
        odds: "2.10 | 3.50 | 3.25"
      },
      { 
        name: "Medvedev vs Zverev", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        sport: "Tennis",
        time: "Today 18:30",
        odds: "1.85 | 2.05"
      },
      { 
        name: "Heat vs Celtics", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        sport: "Basketball",
        time: "Today 21:00",
        odds: "2.25 | 1.75"
      },
      { 
        name: "Oilers vs Golden Knights", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png", 
        sport: "Ice Hockey",
        time: "Today 23:15",
        odds: "2.45 | 2.65"
      },
      { 
        name: "Astros vs Angels", 
        image: "", 
        sport: "Baseball",
        time: "Tomorrow 02:10",
        odds: "1.80 | 2.10"
      },
      { 
        name: "Eagles vs Cowboys", 
        image: "", 
        sport: "American Football",
        time: "Sunday 18:25",
        odds: "1.95 | 1.95"
      },
      { 
        name: "Jones vs Miocic", 
        image: "", 
        sport: "MMA",
        time: "Saturday 04:00",
        odds: "1.55 | 2.70"
      },
    ]
  },
];

// Promo data
const promos = [
  {
    id: 1,
    title: "Multi-Builder Free Bet",
    description: "Get 10% up to $100 on your multi bets",
    ctaText: "Read More",
    buttonText: "Claim Now",
    label: "Promo",
    image: "public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png",
  },
  {
    id: 2,
    title: "UFC Boosts",
    description: "Enhanced odds for upcoming fights",
    ctaText: "Read More",
    buttonText: "Bet Now",
    label: "Promo",
    image: "public/lovable-uploads/e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png",
  },
  {
    id: 3,
    title: "Premier League",
    description: "First Goal Cash Back",
    ctaText: "Read More",
    buttonText: "Bet Now",
    label: "Promo",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
  },
];

const Sports = () => {
  // Show the 'My Bets' table by default
  const [activeTab, setActiveTab] = useState("my-bets");
  
  // Tabs for the betting table section
  const betTabs = [
    { id: "my-bets", label: "My Bets" },
    { id: "all-bets", label: "All Bets" },
    { id: "high-rollers", label: "High Rollers" },
    { id: "race-leaderboard", label: "Race Leaderboard" },
  ];

  // Sample betting data
  const bettingData = [
    { event: "Arsenal vs Chelsea", user: "Hidden", time: "4:44 PM", amount: "₺100.00", crypto: "btc", odds: "2.1", payout: "₺210.00", payoutCrypto: "btc", win: true },
    { event: "Lakers vs Warriors", user: "Il1948", time: "4:44 PM", amount: "0.005", crypto: "eth", odds: "1.5", payout: "0.0075", payoutCrypto: "eth", win: true },
    { event: "Djokovic vs Alcaraz", user: "Hidden", time: "4:44 PM", amount: "0.00500000", crypto: "btc", odds: "1.92", payout: "0.00960000", payoutCrypto: "btc", win: true },
    { event: "Man City vs Liverpool", user: "Saabgoyal", time: "4:44 PM", amount: "CA$50.00", crypto: "cad", odds: "3.25", payout: "CA$162.50", payoutCrypto: "cad", win: true },
    { event: "Chiefs vs Ravens", user: "Hidden", time: "4:44 PM", amount: "0.01750000", crypto: "btc", odds: "2.0", payout: "0.03500000", payoutCrypto: "btc", win: true },
    { event: "Heat vs Celtics", user: "Hidden", time: "4:44 PM", amount: "0.00500000", crypto: "btc", odds: "1.75", payout: "0.00875000", payoutCrypto: "btc", win: true },
    { event: "Yankees vs Red Sox", user: "Hidden", time: "4:44 PM", amount: "0.01000000", crypto: "btc", odds: "1.9", payout: "0.01900000", payoutCrypto: "btc", win: true },
    { event: "UFC Fight Night", user: "Hidden", time: "4:44 PM", amount: "0.01750000", crypto: "btc", odds: "2.5", payout: "0.04375000", payoutCrypto: "btc", win: true },
    { event: "Maple Leafs vs Bruins", user: "Hidden", time: "4:44 PM", amount: "0.00500000", crypto: "btc", odds: "2.35", payout: "0.01175000", payoutCrypto: "btc", win: true },
    { event: "Oilers vs Golden Knights", user: "Hidden", time: "4:44 PM", amount: "0.01750000", crypto: "btc", odds: "1.95", payout: "0.03412500", payoutCrypto: "btc", win: true },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#0F1923]">
      <Header />
      
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <main className="flex-1 p-0">
          {/* Promo banner section */}
          <div className="px-4 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {promos.map((promo) => (
              <div 
                key={promo.id} 
                className="relative overflow-hidden rounded-lg bg-[#17242D] transition-transform hover:scale-105 h-36"
              >
                <div className="absolute left-2 top-2 rounded bg-[#0F1923] px-2 py-1 text-xs font-semibold text-white">
                  {promo.label}
                </div>
                <div className="flex h-full">
                  <div className="flex flex-1 flex-col justify-center p-4">
                    <h3 className="mb-1 text-xl font-bold text-white">{promo.title}</h3>
                    <p className="mb-2 text-sm text-gray-300">{promo.description}</p>
                    <button className="mb-2 text-left text-xs text-[#1A9AEF] hover:underline">
                      {promo.ctaText}
                    </button>
                    <Button className="mt-auto w-4/5 bg-[#1A9AEF] text-white hover:bg-[#0F8CDD]">
                      {promo.buttonText}
                    </Button>
                  </div>
                  <div className="w-1/3">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Search bar */}
          <div className="px-4 pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Search sports, leagues, teams..."
                className="w-full py-3 pl-10 pr-4 text-sm border rounded-md bg-[#17242D] border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-[#1A9AEF] focus:ring-[#1A9AEF]"
              />
            </div>
          </div>
          
          {/* Navigation tabs */}
          <div className="px-4 py-4">
            <div className="flex overflow-x-auto no-scrollbar space-x-2 bg-[#0F1923] py-2">
              <Link to="/sports" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🏠</span>
                <span className="text-sm font-medium">Home</span>
              </Link>
              <Link to="/sports/live" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🔴</span>
                <span className="text-sm font-medium">Live</span>
              </Link>
              <Link to="/sports/football" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">⚽</span>
                <span className="text-sm font-medium">Football</span>
              </Link>
              <Link to="/sports/tennis" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🎾</span>
                <span className="text-sm font-medium">Tennis</span>
              </Link>
              <Link to="/sports/basketball" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🏀</span>
                <span className="text-sm font-medium">Basketball</span>
              </Link>
              <Link to="/sports/hockey" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🏒</span>
                <span className="text-sm font-medium">Ice Hockey</span>
              </Link>
              <Link to="/sports/esports" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🎮</span>
                <span className="text-sm font-medium">eSports</span>
              </Link>
            </div>
          </div>
          
          {/* Sports sections */}
          {sections.map((section, index) => (
            <div key={index} className="mb-8 px-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">{section.icon}</span>
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>
                {section.showArrows && (
                  <div className="flex space-x-2">
                    <button className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-700 bg-[#17242D] text-gray-400 hover:bg-[#0F1923] hover:text-white">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-700 bg-[#17242D] text-gray-400 hover:bg-[#0F1923] hover:text-white">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Game cards section */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="group relative aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-b from-blue-600 to-indigo-800 transition-transform hover:scale-105"
                  >
                    {section.isLive && (
                      <div className="absolute right-2 top-2">
                        <span className="rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white flex items-center">
                          <span className="flex h-2 w-2 animate-pulse rounded-full bg-white mr-1"></span>
                          LIVE
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-3 text-white">
                      <h3 className="mb-1 text-sm font-bold">
                        {item.name}
                      </h3>
                      {item.sport && (
                        <p className="text-xs opacity-80">
                          {item.sport}
                        </p>
                      )}
                      
                      {item.matches !== undefined && (
                        <div className="mt-2 flex items-center">
                          <span className="ml-1 text-xs">
                            {item.matches} matches
                          </span>
                        </div>
                      )}
                      
                      {section.isLive && item.score && (
                        <div className="mt-2 bg-[#0F1923]/50 rounded p-1">
                          <div className="text-xs font-bold text-white">{item.time}</div>
                          <div className="text-sm font-bold text-white">{item.score}</div>
                        </div>
                      )}
                      
                      {item.time && item.odds && (
                        <div className="mt-2">
                          <div className="text-xs opacity-80">{item.time}</div>
                          <div className="text-xs mt-1 bg-[#0F1923]/50 rounded p-1 text-white font-mono">
                            {item.odds}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity group-hover:bg-black/50 group-hover:opacity-100">
                      <Button className="bg-[#FF6B01] text-white hover:bg-[#e05c00]">
                        {section.isLive ? "Bet Live" : "Bet Now"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Betting table section */}
          <div className="px-4 py-6 bg-[#0F1923]">
            <div className="bg-[#0F1923] rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-800">
                {betTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-6 py-3 text-sm font-medium transition-transform hover:scale-105 ${
                      activeTab === tab.id
                        ? "border-b-2 border-[#1A9AEF] text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    {tab.id === "race-leaderboard" && (
                      <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
                    )}
                  </button>
                ))}
                <div className="ml-auto flex items-center px-4">
                  <select className="bg-[#17242D] text-white border border-gray-700 rounded py-1 px-2 text-sm">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
              
              <table className="w-full">
                <thead className="bg-[#17242D]">
                  <tr className="text-left text-xs font-medium text-gray-400">
                    <th className="px-4 py-3">Event</th>
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Bet Amount</th>
                    <th className="px-4 py-3">Odds</th>
                    <th className="px-4 py-3">Potential Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {bettingData.map((bet, index) => (
                    <tr key={index} className="border-b border-gray-800 text-sm hover:bg-[#17242D]/50">
                      <td className="px-4 py-3 text-white">{bet.event}</td>
                      <td className="px-4 py-3 text-gray-300">{bet.user}</td>
                      <td className="px-4 py-3 text-gray-300">{bet.time}</td>
                      <td className="px-4 py-3 text-gray-300">
                        {bet.amount} 
                        {bet.crypto === "btc" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-yellow-500 text-xs flex items-center justify-center">₿</span>}
                        {bet.crypto === "eth" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-blue-500 text-xs flex items-center justify-center">Ξ</span>}
                        {bet.crypto === "cad" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-red-500 text-xs flex items-center justify-center">$</span>}
                      </td>
                      <td className="px-4 py-3 text-white font-mono">{bet.odds}</td>
                      <td className="px-4 py-3 text-green-500">
                        {bet.payout}
                        {bet.payoutCrypto === "btc" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-yellow-500 text-xs flex items-center justify-center">₿</span>}
                        {bet.payoutCrypto === "eth" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-blue-500 text-xs flex items-center justify-center">Ξ</span>}
                        {bet.payoutCrypto === "cad" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-red-500 text-xs flex items-center justify-center">$</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Text content section */}
          <div className="px-4 py-6 bg-[#0F1923]">
            <h2 className="text-2xl font-bold text-white mb-4">Sports Betting at Stake Sportsbook</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-4">
                  At Stake, we offer a complete sportsbook experience with competitive odds across all major 
                  sports including Football, Tennis, Basketball, Ice Hockey, Baseball, and many more. Our platform 
                  supports both pre-match and in-play betting, with thousands of markets available daily.
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-4">
                  Our sportsbook features industry-leading odds, instant bet settlement, high limits, and a 
                  VIP program with cashback on every bet. Whether you're betting on the Premier League, NBA, or 
                  UFC, Stake offers you the best online betting experience with crypto and local currencies.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Sports;
