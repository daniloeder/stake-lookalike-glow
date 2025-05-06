
import { useState } from "react";

const tabs = [
  { id: "casino", label: "Casino", icon: "🎰" },
  { id: "sports", label: "Sports", icon: "⚽" },
];

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("casino");
  
  return (
    <div className="relative mb-4 flex items-center border-b border-gray-800 bg-[#0F1923] px-4">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-2 text-sm font-medium ${
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
        <select className="rounded bg-[#17242D] px-2 py-1 text-xs text-white">
          <option>Search your game</option>
        </select>
      </div>
    </div>
  );
};

export default TabBar;
