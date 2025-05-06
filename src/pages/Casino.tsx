
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const casinoCategories = [
  "All Games", "Favourites", "Recent", "Hot Games", "New Games", "Slots", "Live Casino",
  "Stake Originals", "Game Shows", "Table Games", "Blackjack", "Roulette", "Baccarat", "Crash",
  "Jackpot Games", "Feature Buy-in"
];

const Casino = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0F1923]">
      <Header />
      
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <main className="flex-1 p-0">
          <div className="relative h-[260px] overflow-hidden bg-[#0F1923]">
            <img 
              src="public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png"
              alt="Casino Banner"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center px-16">
              <div className="max-w-lg">
                <h1 className="mb-6 text-4xl font-bold text-white">World-Class Online Casino Games</h1>
                <Button className="mb-4 bg-[#1A9AEF] px-8 py-2 font-semibold text-white transition-transform hover:scale-105 hover:bg-[#0F8CDD]">
                  Play Now
                </Button>
              </div>
            </div>
          </div>
          
          <SearchBar />
          
          {/* Casino Categories */}
          <div className="mb-6 overflow-x-auto px-4">
            <div className="flex space-x-2 py-2">
              {casinoCategories.map((category, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-105 ${
                    index === 0
                      ? "bg-[#1A9AEF] text-white"
                      : "bg-[#17242D] text-white hover:bg-[#1A2C38]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Casino Games */}
          <div className="px-4">
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🔥</span>
                  <h2 className="text-xl font-bold text-white">Popular Casino Games</h2>
                </div>
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-700 bg-[#17242D] text-gray-400 hover:bg-[#0F1923] hover:text-white">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-700 bg-[#17242D] text-gray-400 hover:bg-[#0F1923] hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="group relative aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-b from-pink-500 to-purple-600 transition-transform hover:scale-105"
                  >
                    {index < 5 && (
                      <div className="absolute left-2 top-2">
                        <span className="rounded bg-[#0F1923]/80 px-2 py-1 text-sm font-bold text-white">#{index + 1}</span>
                      </div>
                    )}
                    
                    {index % 3 === 0 && (
                      <div className="absolute right-2 top-2">
                        <span className="rounded bg-[#1A9AEF] px-2 py-0.5 text-xs font-bold text-white">STAKE EXCLUSIVE</span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-3 text-white">
                      <h3 className="mb-1 text-sm font-bold">
                        {["MINES", "PLINKO", "CRASH", "DICE", "LIMBO", "KENO", "HILO", "DIAMOND POKER", "BLACKJACK", "ROULETTE", "BACCARAT", "SLOTS"][index]}
                      </h3>
                      <p className="text-xs opacity-80">
                        {index < 8 ? "STAKE ORIGINALS" : ["EVOLUTION", "PRAGMATIC", "HACKSAW", "PLAY'N GO"][index % 4]}
                      </p>
                      <div className="mt-2 flex items-center">
                        <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                        <span className="ml-1 text-xs">
                          {Math.floor(Math.random() * 1000) + 1} playing
                        </span>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity group-hover:bg-black/50 group-hover:opacity-100">
                      <Button className="bg-[#1A9AEF] text-white hover:bg-[#0F8CDD]">
                        Play Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🎯</span>
                  <h2 className="text-xl font-bold text-white">Stake Originals</h2>
                </div>
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-700 bg-[#17242D] text-gray-400 hover:bg-[#0F1923] hover:text-white">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-700 bg-[#17242D] text-gray-400 hover:bg-[#0F1923] hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="group relative aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-b from-blue-500 to-indigo-600 transition-transform hover:scale-105"
                  >
                    <div className="absolute right-2 top-2">
                      <span className="rounded bg-[#1A9AEF] px-2 py-0.5 text-xs font-bold text-white">STAKE ORIGINAL</span>
                    </div>
                    
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-3 text-white">
                      <h3 className="mb-1 text-sm font-bold">
                        {["MINES", "PLINKO", "CRASH", "DICE", "LIMBO", "KENO"][index]}
                      </h3>
                      <p className="text-xs opacity-80">
                        STAKE ORIGINALS
                      </p>
                      <div className="mt-2 flex items-center">
                        <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                        <span className="ml-1 text-xs">
                          {Math.floor(Math.random() * 1000) + 1000} playing
                        </span>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity group-hover:bg-black/50 group-hover:opacity-100">
                      <Button className="bg-[#1A9AEF] text-white hover:bg-[#0F8CDD]">
                        Play Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Add Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Casino;
