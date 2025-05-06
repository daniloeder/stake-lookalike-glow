
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import TabBar from "@/components/TabBar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Game sections data
const sections = [
  {
    title: "Providers",
    icon: "🏢",
    showArrows: true,
    items: [
      { name: "Pragmatic Play", logo: "public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png" },
      { name: "Evolution", logo: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png" },
      { name: "Hacksaw Gaming", logo: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png" },
      { name: "No Limit City", logo: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png" },
      { name: "Massive Studios", logo: "" },
      { name: "Twist Gaming", logo: "" },
      { name: "Titan Gaming", logo: "" },
    ]
  },
  {
    title: "Live Casino",
    icon: "📺",
    showArrows: true,
    items: [
      { 
        name: "Blackjack Live", 
        image: "public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png",
        provider: "EVOLUTION",
        tagline: "LIVE"
      },
      { 
        name: "Roulette", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        provider: "EVOLUTION",
        tagline: "LIVE"
      },
      { 
        name: "Baccarat", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        provider: "EVOLUTION",
        tagline: "LIVE"
      },
      { 
        name: "Fortune Roulette", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png",
        provider: "EVOLUTION",
        tagline: "LIVE"
      },
      { 
        name: "Dragon Tiger", 
        image: "", 
        provider: "EVOLUTION",
        tagline: "LIVE"
      },
      { 
        name: "Craps", 
        image: "",
        provider: "EVOLUTION",
        tagline: "LIVE"
      },
      { 
        name: "Texas Hold'em", 
        image: "", 
        provider: "EVOLUTION",
        tagline: "LIVE"
      },
    ]
  },
  {
    title: "Game Shows",
    icon: "🎭",
    showArrows: true,
    items: [
      { 
        name: "Crazy Time", 
        image: "public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png",
        provider: "EVOLUTION",
        tagline: "LIVE",
        playing: 677
      },
      { 
        name: "Lightning Roulette", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        provider: "EVOLUTION",
        tagline: "LIVE",
        playing: 337
      },
      { 
        name: "Lightning Storm", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        provider: "EVOLUTION",
        tagline: "LIVE",
        playing: 199
      },
      { 
        name: "Stock Market", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png",
        provider: "EVOLUTION",
        tagline: "LIVE",
        playing: 92
      },
      { 
        name: "Monopoly Big Baller", 
        image: "", 
        provider: "EVOLUTION",
        tagline: "LIVE",
        playing: 87
      },
      { 
        name: "Fireball Roulette", 
        image: "", 
        provider: "EVOLUTION",
        tagline: "LIVE",
        playing: 66
      },
      { 
        name: "Crazy Balls", 
        image: "", 
        provider: "EVOLUTION",
        tagline: "LIVE",
        playing: 90
      },
    ]
  },
  {
    title: "Stake Exclusives",
    icon: "🎯",
    showArrows: true,
    isExclusive: true,
    items: [
      { 
        name: "Sweet Bonanza", 
        image: "public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png",
        exclusive: true
      },
      { 
        name: "Biker Bucks", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        exclusive: true
      },
      { 
        name: "Enhanced RTP", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        exclusive: true
      },
      { 
        name: "License to Win", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png",
        exclusive: true
      },
      { 
        name: "Bison Bull", 
        image: "", 
        exclusive: true
      },
      { 
        name: "Book of Puppets", 
        image: "", 
        exclusive: true
      },
      { 
        name: "Enhanced RTP", 
        image: "", 
        exclusive: true
      },
    ]
  },
  {
    title: "Stake Originals",
    icon: "🎮",
    showArrows: true,
    items: [
      { 
        name: "DICE", 
        image: "public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png",
        provider: "STAKE ORIGINAL",
        playing: 5979
      },
      { 
        name: "MINES", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        provider: "STAKE ORIGINAL",
        playing: 10269
      },
      { 
        name: "PLINKO", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        provider: "STAKE ORIGINAL",
        playing: 3828
      },
      { 
        name: "CRASH", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png",
        provider: "STAKE ORIGINAL",
        playing: 3574
      },
      { 
        name: "PUMP", 
        image: "", 
        provider: "STAKE ORIGINAL",
        playing: 1561
      },
      { 
        name: "LIMBO", 
        image: "", 
        provider: "STAKE ORIGINAL",
        playing: 5611
      },
      { 
        name: "FLIP", 
        image: "", 
        provider: "STAKE ORIGINAL",
        playing: 1511
      },
    ]
  },
  {
    title: "Slots",
    icon: "🎰",
    showArrows: true,
    items: [
      { 
        name: "Sweet Bonanza", 
        image: "public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png",
        provider: "PRAGMATIC PLAY"
      },
      { 
        name: "Gates of Olympus", 
        image: "public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png",
        provider: "PRAGMATIC PLAY"
      },
      { 
        name: "Easter Eggs", 
        image: "public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png",
        provider: "PRAGMATIC PLAY"
      },
      { 
        name: "Fish Eye", 
        image: "public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png",
        provider: "PRAGMATIC PLAY"
      },
      { 
        name: "Wizard's Secret", 
        image: "", 
        provider: "PRAGMATIC PLAY"
      },
      { 
        name: "Phoenix Fire", 
        image: "", 
        provider: "PRAGMATIC PLAY",
        exclusive: true
      },
      { 
        name: "Dragon Hatch", 
        image: "", 
        provider: "PRAGMATIC PLAY",
        exclusive: true
      },
    ]
  },
];

// Promo data
const promos = [
  {
    id: 1,
    title: "Daily Races",
    description: "Play in our $100,000 Daily Race",
    ctaText: "Read More",
    buttonText: "Race Now",
    label: "Promo",
    image: "public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png",
  },
  {
    id: 2,
    title: "Conquer the Casino",
    description: "Win a share in $50,000 every week",
    ctaText: "Read More",
    buttonText: "Play Now",
    label: "Promo",
    image: "public/lovable-uploads/e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png",
  },
  {
    id: 3,
    title: "Weekly Raffle",
    description: "Share in $75,000 each week",
    ctaText: "Read More",
    buttonText: "Learn More",
    label: "Promo",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
  },
];

const Casino = () => {
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
    { game: "Stake Exclusive Blackjack", user: "Hidden", time: "4:44 PM", amount: "₺15,000.00", crypto: "btc", multiplier: "6.67×", payout: "₺100,000.00", payoutCrypto: "btc", win: true },
    { game: "Crash", user: "Il1948", time: "4:44 PM", amount: "200.00000000", crypto: "eth", multiplier: "15.88×", payout: "3175.935032", payoutCrypto: "eth", win: true },
    { game: "Keno", user: "Hidden", time: "4:44 PM", amount: "0.00500000", crypto: "btc", multiplier: "3.50×", payout: "0.01750000", payoutCrypto: "btc", win: true },
    { game: "Limbo", user: "Saabgoyal", time: "4:44 PM", amount: "CA$2,000.00", crypto: "cad", multiplier: "2.00×", payout: "CA$4,000.00", payoutCrypto: "cad", win: true },
    { game: "Keno", user: "Hidden", time: "4:44 PM", amount: "0.01750000", crypto: "btc", multiplier: "0.00×", payout: "-0.01750000", payoutCrypto: "btc", win: false },
    { game: "Keno", user: "Hidden", time: "4:44 PM", amount: "0.00500000", crypto: "btc", multiplier: "3.50×", payout: "0.01750000", payoutCrypto: "btc", win: true },
    { game: "Keno", user: "Hidden", time: "4:44 PM", amount: "0.06125000", crypto: "btc", multiplier: "3.50×", payout: "0.21437500", payoutCrypto: "btc", win: true },
    { game: "Keno", user: "Hidden", time: "4:44 PM", amount: "0.01750000", crypto: "btc", multiplier: "3.50×", payout: "0.06125000", payoutCrypto: "btc", win: true },
    { game: "Keno", user: "Hidden", time: "4:44 PM", amount: "0.00500000", crypto: "btc", multiplier: "3.50×", payout: "0.01750000", payoutCrypto: "btc", win: true },
    { game: "Keno", user: "Hidden", time: "4:44 PM", amount: "0.01750000", crypto: "btc", multiplier: "0.00×", payout: "-0.01750000", payoutCrypto: "btc", win: false },
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
                placeholder="Search your game"
                className="w-full py-3 pl-10 pr-4 text-sm border rounded-md bg-[#17242D] border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-[#1A9AEF] focus:ring-[#1A9AEF]"
              />
            </div>
          </div>
          
          {/* Navigation tabs */}
          <div className="px-4 py-4">
            <div className="flex overflow-x-auto no-scrollbar space-x-2 bg-[#0F1923] py-2">
              <Link to="/casino" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🏠</span>
                <span className="text-sm font-medium">Lobby</span>
              </Link>
              <Link to="/casino/originals" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🎮</span>
                <span className="text-sm font-medium">Stake Originals</span>
              </Link>
              <Link to="/casino/slots" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🎰</span>
                <span className="text-sm font-medium">Slots</span>
              </Link>
              <Link to="/casino/live" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">📺</span>
                <span className="text-sm font-medium">Live Casino</span>
              </Link>
              <Link to="/casino/shows" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🎭</span>
                <span className="text-sm font-medium">Game Shows</span>
              </Link>
              <Link to="/casino/exclusives" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🎯</span>
                <span className="text-sm font-medium">Stake Exclusives</span>
              </Link>
              <Link to="/casino/new" className="whitespace-nowrap flex items-center px-4 py-2 rounded-md bg-[#17242D] text-white hover:bg-[#1A2C38] transition-transform hover:scale-105">
                <span className="mr-1">🆕</span>
                <span className="text-sm font-medium">New Releases</span>
              </Link>
            </div>
          </div>
          
          {/* Game sections */}
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
              
              {section.title === "Providers" ? (
                // Provider logos section
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="aspect-[6/2] rounded-md overflow-hidden bg-[#17242D] flex items-center justify-center transition-transform hover:scale-105"
                    >
                      {item.logo ? (
                        <img src={item.logo} alt={item.name} className="max-h-8 object-contain" />
                      ) : (
                        <span className="text-white font-bold">{item.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Game cards section
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="group relative aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-b from-blue-500 to-indigo-600 transition-transform hover:scale-105"
                    >
                      {item.exclusive && (
                        <div className="absolute right-2 top-2">
                          <span className="rounded bg-[#1A9AEF] px-2 py-0.5 text-xs font-bold text-white">EXCLUSIVE</span>
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-3 text-white">
                        <h3 className="mb-1 text-sm font-bold uppercase">
                          {item.name}
                        </h3>
                        {item.provider && (
                          <p className="text-xs opacity-80">
                            {item.provider}
                          </p>
                        )}
                        {item.tagline && (
                          <div className="mt-1 inline-block rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                            {item.tagline}
                          </div>
                        )}
                        {item.playing !== undefined && (
                          <div className="mt-2 flex items-center">
                            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                            <span className="ml-1 text-xs">
                              {item.playing} playing
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity group-hover:bg-black/50 group-hover:opacity-100">
                        <Button className="bg-[#1A9AEF] text-white hover:bg-[#0F8CDD]">
                          Play Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                    <th className="px-4 py-3">Game</th>
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Bet Amount</th>
                    <th className="px-4 py-3">Multiplier</th>
                    <th className="px-4 py-3">Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {bettingData.map((bet, index) => (
                    <tr key={index} className="border-b border-gray-800 text-sm hover:bg-[#17242D]/50">
                      <td className="px-4 py-3 text-white">{bet.game}</td>
                      <td className="px-4 py-3 text-gray-300">{bet.user}</td>
                      <td className="px-4 py-3 text-gray-300">{bet.time}</td>
                      <td className="px-4 py-3 text-gray-300">
                        {bet.amount} 
                        {bet.crypto === "btc" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-yellow-500 text-xs flex items-center justify-center">₿</span>}
                        {bet.crypto === "eth" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-blue-500 text-xs flex items-center justify-center">Ξ</span>}
                        {bet.crypto === "cad" && <span className="inline-block ml-1 w-4 h-4 rounded-full bg-red-500 text-xs flex items-center justify-center">$</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-300">{bet.multiplier}</td>
                      <td className={`px-4 py-3 ${bet.win ? "text-green-500" : "text-red-500"}`}>
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
            <h2 className="text-2xl font-bold text-white mb-4">Online Casino Games at Stake Casino</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-4">
                  Since 2017, Stake.com has offered the best online casino gaming experience, 
                  compatible with local currencies, bitcoin and other crypto on the web. Starting 
                  with Stake Originals, our first-party casino games developed here at Stake, the 
                  online casino gaming platform has grown to host over 3500 casino games from 
                  the best providers in the iGaming industry.
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-4">
                  Many popular table game classics include Blackjack games, Baccarat games, 
                  Roulette games, Card games, Stake Poker and more, which are popular due to 
                  their advantageous house edge and big win opportunities. Learn all there is to 
                  know about dealer options and how to play casino classic table games with our 
                  ultimate guide to table games.
                </p>
                <p className="text-gray-400 text-sm">
                  Electronic table games provide not only the convenience of playing for real 
                  cash payouts in the convenience of your device, but also provides additional features.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer with logos and links */}
          <div className="px-4 py-10 bg-[#0F1923] border-t border-gray-800">
            <div className="mb-10">
              <div className="flex justify-center mb-6">
                <img src="public/lovable-uploads/f5e5c414-4cd6-431f-a438-5ecffedb9217.png" alt="Stake" className="h-8" />
              </div>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Casino</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Casino Games</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Slots</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Live Casino</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Roulette</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blackjack</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Poker</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Providers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Promos & Competitions</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Sports</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Sportsbook</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Live Sports</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Soccer</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Basketball</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Tennis</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">eSports</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Bet Bonuses</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Racing Rules</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Fairness</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Gambling Helpline</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Live Support</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Self Exclusion</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">VIP Club</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Affiliate</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">AML Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-7 gap-6 py-8">
              <img src="public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png" alt="Payment Method" className="h-6 object-contain opacity-50" />
              <img src="public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png" alt="Payment Method" className="h-6 object-contain opacity-50" />
              <img src="public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png" alt="Payment Method" className="h-6 object-contain opacity-50" />
              <img src="public/lovable-uploads/852a5fbf-5fc6-4e99-ac3c-f721523d1ae8.png" alt="Payment Method" className="h-6 object-contain opacity-50" />
              <img src="public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png" alt="Payment Method" className="h-6 object-contain opacity-50" />
              <img src="public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png" alt="Payment Method" className="h-6 object-contain opacity-50" />
              <img src="public/lovable-uploads/bc31aeff-ec79-40ad-9e39-6d005a0f66ba.png" alt="Payment Method" className="h-6 object-contain opacity-50" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="flex items-center justify-center">
                <img src="public/lovable-uploads/5c8c2cc5-e96b-4829-ab08-c56735fb3f63.png" alt="Partner" className="h-10 object-contain" />
                <span className="ml-2 text-xs text-center text-gray-500">VERIFIED OPERATOR</span>
              </div>
              <div className="flex items-center justify-center">
                <img src="public/lovable-uploads/f5e5c414-4cd6-431f-a438-5ecffedb9217.png" alt="Stake Team" className="h-10 object-contain" />
                <span className="ml-2 text-xs text-center text-gray-500">EXCLUSIVE TITLE PARTNER</span>
              </div>
              <div className="flex items-center justify-center">
                <img src="public/lovable-uploads/6b1dd35f-6f22-470e-99a1-a19d3f64a3ee.png" alt="UFC" className="h-10 object-contain" />
                <span className="ml-2 text-xs text-center text-gray-500">OFFICIAL BETTING PARTNER</span>
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-xs py-4">
              <p className="mb-2">Stake is committed to responsible gambling, for more information visit <a href="#" className="text-[#1A9AEF]">Gamblingtherapy.org</a></p>
              <p className="mb-2">Stake is owned and operated by Medium Rare N.V., registration number: 145353, registered address: Seru Loraweg 17 B, Curaçao. Contact us at support@stake.com</p>
              <p>Payment agent company is Medium Rare Limited with address 7-9 Riga Feraiou, LIZANTIA COURT, Office 310, Agioi Omologites, 1087 Nicosia, Cyprus and Registration number: HE 410775</p>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Casino;
