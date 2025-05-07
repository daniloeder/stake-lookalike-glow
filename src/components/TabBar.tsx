
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
    <div className={`tab-bar ${className}`}>
      <div className="tab-bar-container">
        {showArrows && showLeftArrow && (
          <button 
            className="tab-arrow left-arrow"
            onClick={() => scrollTabs("left")}
          >
            <ChevronLeft className="arrow-icon" />
          </button>
        )}
        
        <div 
          ref={tabsContainerRef}
          className="tabs-container"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${tab.id === activeTab ? "active-tab" : "inactive-tab"}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {showArrows && showRightArrow && (
          <button 
            className="tab-arrow right-arrow"
            onClick={() => scrollTabs("right")}
          >
            <ChevronRight className="arrow-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.tab-bar {
  position: relative;
  margin-bottom: 1rem;
  padding: 0 1rem;
  overflow: hidden;
}

.tab-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tab-arrow {
  display: flex;
  flex: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 9999px;
  background-color: #17242D;
  color: #9ca3af;
  z-index: 10;
  border: none;
  cursor: pointer;
}

.tab-arrow:hover {
  background-color: #1A2C38;
  color: white;
}

.left-arrow {
  margin-right: 0.5rem;
}

.right-arrow {
  margin-left: 0.5rem;
}

.arrow-icon {
  height: 1rem;
  width: 1rem;
}

.tabs-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.5rem 0;
  flex: 1;
}

.tabs-container::-webkit-scrollbar {
  display: none;
}

.tab {
  white-space: nowrap;
  border-radius: 9999px;
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.2s;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
}

.tab:hover {
  transform: scale(1.05);
}

.active-tab {
  background-color: #1A9AEF;
  color: white;
}

.inactive-tab {
  background-color: #17242D;
  color: white;
}

.inactive-tab:hover {
  background-color: #1A2C38;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default TabBar;
