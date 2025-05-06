
import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TabBarProps {
  defaultTab?: string;
  showArrows?: boolean;
  small?: boolean;
}

const TabBar = ({ defaultTab = "all", showArrows = false, small = false }: TabBarProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const tabs = [
    { id: "all", label: "All Games" },
    { id: "favourites", label: "Favourites" },
    { id: "recent", label: "Recent" },
    { id: "hot", label: "Hot Games" },
    { id: "new", label: "New Games" },
    { id: "slots", label: "Slots" },
    { id: "live", label: "Live Casino" },
    { id: "stake", label: "Stake Originals" },
    { id: "shows", label: "Game Shows" },
    { id: "table", label: "Table Games" },
  ];

  return (
    <div className="relative mb-4 px-4 overflow-hidden">
      <div className="flex items-center justify-between">
        {showArrows && (
          <button className="flex-none p-1 mr-2 rounded-full bg-[#17242D] text-gray-400 hover:bg-[#1A2C38] hover:text-white">
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
        
        <div className="flex overflow-x-auto no-scrollbar py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-transform hover:scale-105 mr-2 ${
                tab.id === activeTab
                  ? "bg-[#1A9AEF] text-white"
                  : "bg-[#17242D] text-white hover:bg-[#1A2C38]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {showArrows && (
          <button className="flex-none p-1 ml-2 rounded-full bg-[#17242D] text-gray-400 hover:bg-[#1A2C38] hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TabBar;
