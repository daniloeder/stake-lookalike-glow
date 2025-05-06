
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = [
  { id: "casino", label: "Casino", icon: "🎰" },
  { id: "sports", label: "Sports", icon: "⚽" },
  { id: "promotions", label: "Promotions", icon: "🎁" },
  { id: "live", label: "Live", icon: "📺" },
];

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("sports");
  
  return (
    <div className="relative mb-4 flex items-center border-b border-gray-800 bg-[#0F1923] px-4">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-2 text-sm font-medium transition-transform hover:scale-105 ${
              tab.id === activeTab 
                ? "border-b-2 border-[#1A9AEF] text-white" 
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-2">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="ml-auto">
        <button className="flex items-center space-x-1 rounded bg-[#17242D] px-3 py-1.5 text-xs text-white hover:bg-[#1A2C38] hover:text-white">
          <span>All Games</span>
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default TabBar;
