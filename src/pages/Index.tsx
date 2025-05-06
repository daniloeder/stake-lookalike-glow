
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0F1923]">
      <Header />
      
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <main className="flex-1 p-0">
          <div className="flex h-[260px] items-center justify-between bg-[#0F1923] px-16">
            <div className="max-w-lg">
              <h1 className="mb-6 text-4xl font-bold text-white">World's Largest Online Casino and Sportsbook</h1>
              <Button className="mb-4 bg-[#1A9AEF] px-8 py-2 font-semibold text-white hover:bg-[#0F8CDD]">
                Register
              </Button>
              <div>
                <p className="mb-2 text-sm text-gray-400">Or sign up with</p>
                <div className="flex gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B5998] text-white">f</button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0F8CDD]">G</button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">W</button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5865F2] text-white">D</button>
                </div>
              </div>
            </div>
            
            <div className="hidden gap-4 lg:flex">
              <div className="overflow-hidden rounded-md bg-[#17242D]">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center">
                    <span className="mr-2 text-lg">🎰</span>
                    <span className="text-sm font-semibold text-white">Casino</span>
                  </div>
                  <span className="text-xs text-green-500">50,602</span>
                </div>
                <img src="public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png" alt="Casino" className="h-32 w-full object-cover" />
              </div>
              
              <div className="overflow-hidden rounded-md bg-[#17242D]">
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center">
                    <span className="mr-2 text-lg">⚽</span>
                    <span className="text-sm font-semibold text-white">Sports</span>
                  </div>
                  <span className="text-xs text-green-500">94,838</span>
                </div>
                <img src="public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png" alt="Sports" className="h-32 w-full object-cover" />
              </div>
            </div>
          </div>
          
          <SearchBar />
          
          <div className="px-4">
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🎮</span>
                  <h2 className="text-xl font-bold text-white">Trending Games</h2>
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
              
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-b from-pink-500 to-purple-600">
                    <div className="absolute left-2 top-2">
                      <span className="rounded bg-[#0F1923]/80 px-2 py-1 text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    
                    {index % 2 === 1 && (
                      <div className="absolute right-2 top-2">
                        <span className="rounded bg-[#1A9AEF] px-2 py-0.5 text-xs font-bold text-white">EXCLUSIVE</span>
                      </div>
                    )}
                    
                    {index === 5 && (
                      <div className="absolute right-2 top-2">
                        <span className="rounded bg-green-500 px-2 py-0.5 text-xs font-bold text-white">EARLY ACCESS</span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 w-full p-3 text-white">
                      <h3 className="mb-1 text-sm font-bold">
                        {["SWEET BONANZA", "FUNKIN' DONUTS", "HIGHWAY TO HELL", "BIKER BUCKS", "GATES OF OLYMPUS", "OOPS", "GATES OF OLYMPUS", "BIG BASS"][index]}
                      </h3>
                      <p className="text-xs opacity-80">
                        {["PRAGMATIC PLAY", "HACKSAW STUDIO", "NOLIMIT CITY", "PLAY'N GO", "PRAGMATIC PLAY", "SMART SOFT", "PRAGMATIC PLAY", "REEL KINGDOM"][index]}
                      </p>
                      <div className="mt-2 flex items-center">
                        <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                        <span className="ml-1 text-xs">
                          {[768, 192, 144, 54, 564, 38, 658, 267][index]} playing
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🏆</span>
                  <h2 className="text-xl font-bold text-white">Trending Sports</h2>
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
              
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-md bg-gradient-to-b from-blue-500 to-green-600">
                    <div className="absolute left-2 top-2">
                      <span className="rounded bg-[#0F1923]/80 px-2 py-1 text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    
                    <div className="absolute bottom-0 w-full p-3 text-white">
                      <h3 className="mb-1 text-sm font-bold">
                        {["CRICKET", "SOCCER", "TENNIS", "BASKETBALL", "BASEBALL", "ICE HOCKEY", "RACING", "ESPORTS"][index]}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
