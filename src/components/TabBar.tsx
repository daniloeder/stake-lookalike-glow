
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TabBarProps {
  defaultTab?: string;
  showArrows?: boolean;
  small?: boolean;
  tabs: Array<{
    id: string;
    label: string;
  }>;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

const TabBar = ({ 
  defaultTab, 
  showArrows = true, 
  small = false, 
  tabs, 
  onTabChange,
  className = "" 
}: TabBarProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || (tabs.length > 0 ? tabs[0].id : ""));
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };
  
  const scrollTabs = (direction: "left" | "right") => {
    if (!tabsContainerRef.current) return;
    
    const scrollAmount = 200;
    const container = tabsContainerRef.current;
    
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    
    // Update arrow visibility after a small delay to allow the scroll to complete
    setTimeout(checkScrollPosition, 100);
  };
  
  const checkScrollPosition = () => {
    if (!tabsContainerRef.current) return;
    
    const container = tabsContainerRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
  };
  
  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;
    
    checkScrollPosition();
    
    container.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);
    
    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
    };
  }, []);
  
  return (
    <div className={`relative mb-4 px-4 overflow-hidden ${className}`}>
      <div className="flex items-center justify-between">
        {showArrows && showLeftArrow && (
          <button 
            className="flex-none p-1 mr-2 rounded-full bg-[#17242D] text-gray-400 hover:bg-[#1A2C38] hover:text-white z-10"
            onClick={() => scrollTabs("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
        
        <div 
          ref={tabsContainerRef}
          className="flex overflow-x-auto no-scrollbar py-2 flex-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-transform hover:scale-105 mr-2 ${
                tab.id === activeTab
                  ? "bg-[#1A9AEF] text-white"
                  : "bg-[#17242D] text-white hover:bg-[#1A2C38]"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {showArrows && showRightArrow && (
          <button 
            className="flex-none p-1 ml-2 rounded-full bg-[#17242D] text-gray-400 hover:bg-[#1A2C38] hover:text-white z-10"
            onClick={() => scrollTabs("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TabBar;
