
import { useState } from "react";
import "./BettingTabBar.css";

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

export default BettingTabBar;
