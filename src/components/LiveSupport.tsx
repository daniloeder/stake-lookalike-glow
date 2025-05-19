
import React, { useState, useEffect } from "react";
import { MessageSquare, Home as HomeIcon, HelpCircle, Search, ChevronUp, X } from "lucide-react";
import { useLocation } from "react-router-dom";

// Define the tab types
type TabType = "home" | "messages" | "help";

// Message interface for the messages tab
interface Message {
  id: number;
  content: string;
  time: string;
}

// Help item interface for the help tab
interface HelpCollection {
  title: string;
  articles: number;
}

const LiveSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Collections for help tab
  const helpCollections: HelpCollection[] = [
    { title: "Getting Started", articles: 3 },
    { title: "Account", articles: 16 },
    { title: "Payments", articles: 24 },
    { title: "Casino", articles: 8 },
    { title: "Sports", articles: 9 },
    { title: "Bonuses & Promotions", articles: 12 },
  ];

  // Check if the current page is the support page
  useEffect(() => {
    if (location.pathname === "/support") {
      setIsOpen(true);
    }
  }, [location]);

  // Helper function to toggle the support panel
  const toggleSupport = () => setIsOpen(!isOpen);

  // Helper function to change active tab
  const changeTab = (tab: TabType) => {
    setActiveTab(tab);
  };

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="support-content-home">
            <div className="support-welcome">
              <div className="support-top">
                <X className="close-icon" size={18} onClick={toggleSupport} />
                <div className="support-logo">
                  <img src="public/images/stake.png" alt="Stake" className="stake-logo" />
                </div>
                <div className="support-profiles">
                  <div className="profile-images">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=30&h=30&auto=format&fit=crop" alt="Support Agent 1" />
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=30&h=30&auto=format&fit=crop" alt="Support Agent 2" />
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=30&h=30&auto=format&fit=crop" alt="Support Agent 3" />
                  </div>
                </div>
              </div>
              <div className="greeting-text">
                <p className="greeting">Hey there 👋</p>
                <p className="help-message">How can we help?</p>
              </div>
            </div>
            <div className="help-topics">
              <div className="help-topic-card">
                <h3>What to do if you are unable to access your Two-Factor Authentication (2FA)?</h3>
                <p>If you are unable to access your two-factor authentication...</p>
              </div>
              <div className="help-topic-card">
                <h3>How to reset your password?</h3>
                <p>1. If you've forgotten your password but have linked an email...</p>
              </div>
            </div>
            <div className="search-container">
              <div className="search-box">
                <Search size={16} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search for help" 
                  className="search-input" 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
              </div>
            </div>
          </div>
        );
      case "messages":
        return (
          <div className="support-content-messages">
            <h2 className="messages-title">Messages</h2>
            <div className="message-container">
              <div className="no-messages">
                <MessageSquare size={32} className="no-message-icon" />
                <p className="no-message-text">No messages</p>
                <p className="message-subtitle">Messages from the team will be shown here</p>
              </div>
            </div>
          </div>
        );
      case "help":
        return (
          <div className="support-content-help">
            <h2 className="help-title">Help</h2>
            <div className="help-search">
              <div className="search-box">
                <Search size={16} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search for help" 
                  className="search-input" 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
              </div>
            </div>
            <div className="collections-section">
              <h3 className="collections-title">7 collections</h3>
              <div className="collections-grid">
                {helpCollections.map((collection, index) => (
                  <div key={index} className="collection-item">
                    <div className="collection-info">
                      <h4>{collection.title}</h4>
                      <p>{collection.articles} articles</p>
                    </div>
                    <div className="chevron-icon">
                      <ChevronUp className="chevron" size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="support-bubble" onClick={toggleSupport}>
          <HelpCircle size={24} />
        </div>
      )}
      {isOpen && (
        <div className="support-panel">
          <div className="support-content">
            {renderContent()}
          </div>
          <div className="support-footer">
            <div 
              className={`footer-tab ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => changeTab('home')}
            >
              <HomeIcon size={20} />
              <span>Home</span>
            </div>
            <div 
              className={`footer-tab ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => changeTab('messages')}
            >
              <MessageSquare size={20} />
              <span>Messages</span>
            </div>
            <div 
              className={`footer-tab ${activeTab === 'help' ? 'active' : ''}`}
              onClick={() => changeTab('help')}
            >
              <HelpCircle size={20} />
              <span>Help</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveSupport;
