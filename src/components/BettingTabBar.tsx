
import { useState } from "react";

export interface TabItem {
  id: string;
  label: string;
  hasIndicator?: boolean;
}

interface BettingTabBarProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
}

const BettingTabBar = ({ tabs, defaultActiveTab, onTabChange }: BettingTabBarProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || (tabs.length > 0 ? tabs[0].id : ""));

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="betting-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`betting-tab ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
          {tab.hasIndicator && <span className="live-dot"></span>}
        </button>
      ))}
    </div>
  );
};

// CSS styles
const styles = `
.betting-tabs {
  display: flex;
  background-color: #0c1720;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  overflow: hidden;
}

.betting-tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
}

.betting-tab:hover {
  color: white;
}

.betting-tab.active {
  color: white;
  border-bottom: 2px solid #1060B7;
}

.live-dot {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10B981;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default BettingTabBar;
