
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import BettingTable from "@/components/BettingTable";
import { Button } from "@/components/ui/button";

const casinoGames = [
  {
    id: 1,
    name: "SWEET BONANZA 1000",
    type: "PRAGMATIC PLAY",
    players: 1165,
    color: "from-pink-400 to-pink-600",
    exclusive: false
  },
  {
    id: 2,
    name: "FUNKIN' DONUTS",
    type: "HACKSAW STUDIO",
    players: 380,
    color: "from-orange-400 to-orange-600",
    exclusive: true
  },
  {
    id: 3,
    name: "HIGHWAY TO HELL",
    type: "NOLIMIT CITY",
    players: 252,
    color: "from-red-500 to-orange-600",
    exclusive: false
  },
  {
    id: 4,
    name: "BIKER BUCKS",
    type: "PLAY'N GO",
    players: 85,
    color: "from-red-600 to-red-800",
    exclusive: false
  },
  {
    id: 5,
    name: "GATES OF OLYMPUS SCATTER",
    type: "PRAGMATIC PLAY",
    players: 721,
    color: "from-yellow-400 to-yellow-600",
    exclusive: false
  },
  {
    id: 6,
    name: "OOPS",
    type: "SMART SOFT",
    players: 95,
    color: "from-green-400 to-green-600",
    exclusive: true
  },
  {
    id: 7,
    name: "GATES OF OLYMPUS 1000",
    type: "PRAGMATIC PLAY",
    players: 947,
    color: "from-blue-400 to-blue-600",
    exclusive: false
  },
  {
    id: 8,
    name: "BIG BASS",
    type: "REEL KINGDOM",
    players: 358,
    color: "from-teal-400 to-teal-600",
    exclusive: false
  },
];

const Casino = () => {
  return (
    <div className="flex min-h-screen flex-col bg-stake-dark">
      <Header />
      
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col items-center justify-between rounded-lg bg-stake-darker p-8 md:flex-row">
              <div className="mb-6 text-center md:mb-0 md:text-left">
                <h1 className="mb-4 text-3xl font-bold text-white">World's Largest Online Casino and Sportsbook</h1>
                <button className="stake-button stake-button-primary mb-4 ml-0">Register</button>
                <p className="text-sm text-gray-400">Or sign up with</p>
                <div className="mt-2 flex justify-center space-x-3 md:justify-start">
                  <button className="rounded-full bg-blue-600 p-2 text-white">f</button>
                  <button className="rounded-full bg-white p-2 text-blue-600">G</button>
                  <button className="rounded-full bg-green-500 p-2 text-white">W</button>
                  <button className="rounded-full bg-purple-600 p-2 text-white">T</button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-800 p-4">
                  <div className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">🎰</span>
                    <span className="text-lg font-semibold text-white">Casino</span>
                    <span className="ml-auto text-sm text-green-500">82,702</span>
                  </div>
                  <img src="public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png" alt="Casino" className="h-32 w-full rounded object-cover" />
                </div>
                
                <div className="rounded-lg bg-gray-800 p-4">
                  <div className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">⚽</span>
                    <span className="text-lg font-semibold text-white">Sports</span>
                    <span className="ml-auto text-sm text-green-500">45,432</span>
                  </div>
                  <img src="public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png" alt="Sports" className="h-32 w-full rounded object-cover" />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="flex items-center text-lg font-bold text-white">
                  <span className="mr-2">🔥</span> Trending Games
                </h2>
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-700 bg-stake-darker text-gray-400 hover:bg-stake-dark hover:text-white">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-700 bg-stake-darker text-gray-400 hover:bg-stake-dark hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                {casinoGames.map((game, index) => (
                  <div key={game.id} className="relative overflow-hidden rounded-lg">
                    <div className={`absolute inset-0 bg-gradient-to-b ${game.color}`}></div>
                    <div className="absolute left-2 top-2">
                      <span className="rounded-full bg-stake-dark px-2 py-0.5 text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    
                    {game.exclusive && (
                      <div className="absolute right-2 top-2">
                        <span className="rounded bg-blue-500 px-2 py-0.5 text-xs font-bold text-white">EXCLUSIVE</span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 w-full p-4 text-white">
                      <h3 className="mb-1 text-sm font-bold">{game.name}</h3>
                      <p className="text-xs opacity-80">{game.type}</p>
                      <div className="mt-2 flex items-center">
                        <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                        <span className="ml-1 text-xs">{game.players} playing</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <div className="hidden lg:block lg:w-[450px]">
          <div className="h-full bg-stake-darker p-4">
            <BettingTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
