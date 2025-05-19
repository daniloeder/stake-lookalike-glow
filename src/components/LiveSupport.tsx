
import { useState } from 'react';
import { X, Home, MessageSquare, HelpCircle, Search, ChevronRight } from 'lucide-react';

interface LiveSupportProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const LiveSupport = ({ isOpen = false, onClose = () => {} }: LiveSupportProps) => {
  const [showPanel, setShowPanel] = useState(isOpen);
  const [activeTab, setActiveTab] = useState<'home' | 'messages' | 'help'>('home');

  const togglePanel = () => {
    if (showPanel && onClose) {
      onClose();
    }
    setShowPanel(!showPanel);
  };

  // Update local state when prop changes
  if (isOpen !== showPanel) {
    setShowPanel(isOpen);
  }

  if (!showPanel) {
    return (
      <button className="support-bubble" onClick={togglePanel}>
        <MessageSquare size={24} color="white" />
      </button>
    );
  }

  return (
    <div className="support-panel">
      <button className="close-icon" onClick={togglePanel}>
        <X size={18} />
      </button>

      {activeTab === 'home' && (
        <div className="support-content support-content-home">
          <div className="support-welcome">
            <div className="support-top">
              <div className="support-logo">
                <img src="/images/logo.png" alt="Stake" className="stake-logo" />
              </div>
              <div className="support-profiles">
                <div className="profile-images">
                  <img src="/images/stake.png" alt="Support Agent 1" />
                  <img src="/images/stake.png" alt="Support Agent 2" />
                  <img src="/images/stake.png" alt="Support Agent 3" />
                </div>
              </div>
            </div>
            <div className="greeting-text">
              <div className="greeting">Hey there 👋</div>
              <div className="help-message">How can we help?</div>
            </div>
          </div>

          <div className="help-topics">
            <div className="search-container mb-4">
              <div className="search-box">
                <Search className="search-icon" size={18} />
                <input 
                  type="text" 
                  placeholder="Search for help" 
                  className="search-input" 
                />
              </div>
            </div>

            <div className="help-topic-card">
              <h3>Account & Finance</h3>
              <p>Withdrawals, deposits, account issues</p>
            </div>
            <div className="help-topic-card">
              <h3>Sports & Casino Issues</h3>
              <p>Game problems, bet issues, sports questions</p>
            </div>
            <div className="help-topic-card">
              <h3>Bonuses & Promotions</h3>
              <p>Claims, eligibility, terms</p>
            </div>
            <div className="help-topic-card">
              <h3>Responsible Gambling</h3>
              <p>Limits, self-exclusion, resources</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="support-content support-content-messages">
          <div className="messages-title">Messages</div>
          <div className="message-container">
            <div className="no-messages">
              <MessageSquare className="no-message-icon" size={48} strokeWidth={1} />
              <div className="no-message-text">No messages yet</div>
              <div className="message-subtitle">Your conversations will appear here</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'help' && (
        <div className="support-content support-content-help">
          <div className="help-title">Help</div>
          <div className="help-search mb-4">
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search for help" 
                className="search-input" 
              />
            </div>
          </div>
          
          <div className="collections-section">
            <div className="collections-title">Collections</div>
            <div className="collections-grid">
              <div className="collection-item">
                <div className="collection-info">
                  <h4>Account</h4>
                  <p>Registration, verification, security</p>
                </div>
                <ChevronRight className="chevron-icon" size={18} />
              </div>
              <div className="collection-item">
                <div className="collection-info">
                  <h4>Payments</h4>
                  <p>Deposits, withdrawals, payment methods</p>
                </div>
                <ChevronRight className="chevron-icon" size={18} />
              </div>
              <div className="collection-item">
                <div className="collection-info">
                  <h4>Casino</h4>
                  <p>Games, issues, how to play</p>
                </div>
                <ChevronRight className="chevron-icon" size={18} />
              </div>
              <div className="collection-item">
                <div className="collection-info">
                  <h4>Sports</h4>
                  <p>Betting, markets, rules</p>
                </div>
                <ChevronRight className="chevron-icon" size={18} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="support-footer">
        <div 
          className={`footer-tab ${activeTab === 'home' ? 'active' : ''}`} 
          onClick={() => setActiveTab('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </div>
        <div 
          className={`footer-tab ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          <MessageSquare size={20} />
          <span>Messages</span>
        </div>
        <div 
          className={`footer-tab ${activeTab === 'help' ? 'active' : ''}`}
          onClick={() => setActiveTab('help')}
        >
          <HelpCircle size={20} />
          <span>Help</span>
        </div>
      </div>
    </div>
  );
};

export default LiveSupport;
