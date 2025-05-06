
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type BetData = {
  game: string;
  user: string;
  isUserHidden: boolean;
  time: string;
  betAmount: string;
  multiplier: string;
  payout: string;
  isBitcoinBet: boolean;
  isWin: boolean;
};

const bettingData: BetData[] = [
  { 
    game: "Mines", 
    user: "elephant96", 
    isUserHidden: false, 
    time: "3:26 PM", 
    betAmount: "2,200.000000", 
    multiplier: "0.00×", 
    payout: "-2,200.000000", 
    isBitcoinBet: true, 
    isWin: false 
  },
  { 
    game: "Keno", 
    user: "Hidden", 
    isUserHidden: true, 
    time: "3:26 PM", 
    betAmount: "0.01272000", 
    multiplier: "0.00×", 
    payout: "-0.01272000", 
    isBitcoinBet: true, 
    isWin: false 
  },
  { 
    game: "Limbo", 
    user: "Saabgoyal", 
    isUserHidden: false, 
    time: "3:26 PM", 
    betAmount: "CA$2,000.00", 
    multiplier: "2.00×", 
    payout: "CA$4,000.00", 
    isBitcoinBet: false, 
    isWin: true 
  },
  { 
    game: "Mines", 
    user: "EHERML", 
    isUserHidden: false, 
    time: "3:26 PM", 
    betAmount: "7797.2104394", 
    multiplier: "2.58×", 
    payout: "20154.46128", 
    isBitcoinBet: true, 
    isWin: true 
  },
  { 
    game: "Keno", 
    user: "Hidden", 
    isUserHidden: true, 
    time: "3:26 PM", 
    betAmount: "0.05088000", 
    multiplier: "0.00×", 
    payout: "-0.05088000", 
    isBitcoinBet: true, 
    isWin: false 
  },
  { 
    game: "Keno", 
    user: "Hidden", 
    isUserHidden: true, 
    time: "3:26 PM", 
    betAmount: "0.00636000", 
    multiplier: "8.00×", 
    payout: "0.05088000", 
    isBitcoinBet: true, 
    isWin: true 
  },
  { 
    game: "Mines", 
    user: "EHERML", 
    isUserHidden: false, 
    time: "3:26 PM", 
    betAmount: "7797.2104394", 
    multiplier: "0.00×", 
    payout: "-7797.2104394", 
    isBitcoinBet: true, 
    isWin: false 
  }
];

const BettingTable = () => {
  return (
    <div className="mb-8">
      <Tabs defaultValue="sportsBets" className="w-full">
        <TabsList className="mb-4 flex rounded-lg bg-[#17242D] p-1">
          <TabsTrigger 
            value="casinoBets" 
            className="flex-1 rounded-md py-2 data-[state=active]:bg-[#0F1923] data-[state=active]:text-white"
          >
            Casino Bets
          </TabsTrigger>
          <TabsTrigger 
            value="sportsBets" 
            className="flex-1 rounded-md py-2 data-[state=active]:bg-[#0F1923] data-[state=active]:text-white"
          >
            Sports Bets
          </TabsTrigger>
          <TabsTrigger 
            value="raceLeaderboard" 
            className="flex-1 rounded-md py-2 data-[state=active]:bg-[#0F1923] data-[state=active]:text-white"
          >
            Race Leaderboard <span className="ml-1 h-2 w-2 rounded-full bg-green-500"></span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="casinoBets" className="mt-0">
          <table className="w-full">
            <thead className="text-sm text-gray-400">
              <tr>
                <th className="pb-2 text-left">Game</th>
                <th className="pb-2 text-left">User</th>
                <th className="pb-2 text-left">Time</th>
                <th className="pb-2 text-left">Bet Amount</th>
                <th className="pb-2 text-left">Multiplier</th>
                <th className="pb-2 text-left">Payout</th>
              </tr>
            </thead>
            <tbody>
              {bettingData.map((bet, index) => (
                <tr key={index} className="border-t border-gray-800">
                  <td className="py-3 text-white">{bet.game}</td>
                  <td className="py-3 text-white">
                    {bet.isUserHidden ? (
                      <span className="flex items-center">
                        <span className="mr-1">🛡️</span>
                        {bet.user}
                      </span>
                    ) : (
                      bet.user
                    )}
                  </td>
                  <td className="py-3 text-white">{bet.time}</td>
                  <td className="py-3">
                    <span className="flex items-center text-white">
                      {bet.betAmount}
                      {bet.isBitcoinBet && <span className="ml-1 text-[#F7931A]">₿</span>}
                    </span>
                  </td>
                  <td className="py-3 text-white">{bet.multiplier}</td>
                  <td className={`py-3 ${bet.isWin ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="flex items-center">
                      {bet.isWin ? '' : '-'}{bet.payout}
                      {bet.isBitcoinBet && <span className="ml-1 text-[#F7931A]">₿</span>}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>

        <TabsContent value="sportsBets" className="mt-0">
          <table className="w-full">
            <thead className="text-sm text-gray-400">
              <tr>
                <th className="pb-2 text-left">Game</th>
                <th className="pb-2 text-left">User</th>
                <th className="pb-2 text-left">Time</th>
                <th className="pb-2 text-left">Bet Amount</th>
                <th className="pb-2 text-left">Multiplier</th>
                <th className="pb-2 text-left">Payout</th>
              </tr>
            </thead>
            <tbody>
              {bettingData.map((bet, index) => (
                <tr key={index} className="border-t border-gray-800">
                  <td className="py-3 text-white">{bet.game}</td>
                  <td className="py-3 text-white">
                    {bet.isUserHidden ? (
                      <span className="flex items-center">
                        <span className="mr-1">🛡️</span>
                        {bet.user}
                      </span>
                    ) : (
                      bet.user
                    )}
                  </td>
                  <td className="py-3 text-white">{bet.time}</td>
                  <td className="py-3">
                    <span className="flex items-center text-white">
                      {bet.betAmount}
                      {bet.isBitcoinBet && <span className="ml-1 text-[#F7931A]">₿</span>}
                    </span>
                  </td>
                  <td className="py-3 text-white">{bet.multiplier}</td>
                  <td className={`py-3 ${bet.isWin ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="flex items-center">
                      {bet.isWin ? '' : '-'}{bet.payout}
                      {bet.isBitcoinBet && <span className="ml-1 text-[#F7931A]">₿</span>}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>

        <TabsContent value="raceLeaderboard" className="mt-0">
          <table className="w-full">
            <thead className="text-sm text-gray-400">
              <tr>
                <th className="pb-2 text-left">Position</th>
                <th className="pb-2 text-left">User</th>
                <th className="pb-2 text-left">Points</th>
                <th className="pb-2 text-left">Prize</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((pos) => (
                <tr key={pos} className="border-t border-gray-800">
                  <td className="py-3 text-white">{pos}</td>
                  <td className="py-3 text-white">User{pos}</td>
                  <td className="py-3 text-white">{1000 - pos * 50}</td>
                  <td className="py-3 text-green-500">${10000 / pos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BettingTable;
