
import React from "react";
import { MessageSquare, Home as HomeIcon, HelpCircle } from "lucide-react";

type TabType = "home" | "messages" | "help";

interface LiveSupportTabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const LiveSupportTabBar: React.FC<LiveSupportTabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="support-tabbar">
      <div 
        className={`support-tab ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => onTabChange('home')}
      >
        <HomeIcon size={20} />
        <span>Home</span>
      </div>
      <div 
        className={`support-tab ${activeTab === 'messages' ? 'active' : ''}`}
        onClick={() => onTabChange('messages')}
      >
        <MessageSquare size={20} />
        <span>Messages</span>
      </div>
      <div 
        className={`support-tab ${activeTab === 'help' ? 'active' : ''}`}
        onClick={() => onTabChange('help')}
      >
        <HelpCircle size={20} />
        <span>Help</span>
      </div>
    </div>
  );
};

export default LiveSupportTabBar;
