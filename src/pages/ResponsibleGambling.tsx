import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import '../styles/ResponsibleGambling.css';

const ResponsibleGambling = () => {
  const [activeSection, setActiveSection] = useState("stake-smart");
  
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="responsible-gambling-page">
      <div className="responsible-header">
        <Shield size={20} className="mr-2" />
        <h1>Responsible Gambling</h1>
      </div>
      
      <div className="responsible-content">
        <div className="responsible-sidebar">
          <ul className="responsible-menu">
            <li className={activeSection === "stake-smart" ? "active" : ""}>
              <Link to="#" onClick={() => handleSectionClick("stake-smart")}>
                Stake Smart
              </Link>
            </li>
            <li className={activeSection === "recognise-signs" ? "active" : ""}>
              <Link to="#" onClick={() => handleSectionClick("recognise-signs")}>
                Recognise the Signs
              </Link>
            </li>
            <li className={activeSection === "self-assessment" ? "active" : ""}>
              <Link to="#" onClick={() => handleSectionClick("self-assessment")}>
                Self-Assessment
              </Link>
            </li>
            <li className={activeSection === "responsible-faq" ? "active" : ""}>
              <Link to="#" onClick={() => handleSectionClick("responsible-faq")}>
                Responsible Gambling FAQ's
              </Link>
            </li>
            <li className={activeSection === "budget-calculator" ? "active" : ""}>
              <Link to="#" onClick={() => handleSectionClick("budget-calculator")}>
                Budget Calculator
              </Link>
            </li>
          </ul>
        </div>

        <div className="responsible-main-content">
          {activeSection === "stake-smart" && (
            <>
              <div className="responsible-banner">
                <img src="/images/stake.png" alt="Stake Smart" className="banner-logo" />
              </div>

              <div className="responsible-section">
                <h2>Mission Statement</h2>
                <p>
                  Stake is dedicated to fostering responsible gambling practices to all customers on our platform and within our community. 
                  We are committed to ensuring that our customers are educated on our various responsible gambling tools available for use, 
                  promote gambling as a form of entertainment and empowering individuals to make informed decisions about their gambling activities.
                </p>
              </div>

              <div className="responsible-section">
                <h2>6 Tips For Effective Management Of Your Gambling Activities</h2>
                
                <div className="tips-grid">
                  <div className="tip-card">
                    <div className="tip-icon blue">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"></path>
                        <path d="M7 7H17"></path>
                        <path d="M7 12H17"></path>
                        <path d="M7 17H13"></path>
                      </svg>
                    </div>
                    <div className="tip-content">
                      <p>Effective management of your gambling activities can be done by prioritizing other recreational activities too</p>
                    </div>
                  </div>
                  
                  <div className="tip-card">
                    <div className="tip-icon blue">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <div className="tip-content">
                      <p>Before a gambling session, have a plan in mind of how much you want to spend gambling, and how long you will be gambling for</p>
                    </div>
                  </div>
                  
                  <div className="tip-card">
                    <div className="tip-icon blue">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                        <line x1="6" y1="12" x2="18" y2="12"></line>
                      </svg>
                    </div>
                    <div className="tip-content">
                      <p>Do not spend more than what you can afford to lose</p>
                    </div>
                  </div>

                  <div className="tip-card">
                    <div className="tip-icon orange">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <div className="tip-content">
                      <p>Understanding the odds and knowing the risks associated with gambling</p>
                    </div>
                  </div>
                  
                  <div className="tip-card">
                    <div className="tip-icon blue">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                        <path d="M18 12H6"></path>
                        <path d="M18 6H6"></path>
                        <path d="M18 18H6"></path>
                      </svg>
                    </div>
                    <div className="tip-content">
                      <p>Identify when you are no longer having fun or where gambling has become a problem for you, and stop</p>
                    </div>
                  </div>
                  
                  <div className="tip-card">
                    <div className="tip-icon orange">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="tip-content">
                      <p>Set loss limits, wager limits to assist with managing your gambling activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="responsible-section">
                <h2>House Advantage/House Edge</h2>
                <p>
                  Games have a house edge to ensure a percentage of the total amount wagered is returned to the House, which in this case is Stake.
                </p>
              </div>

              <div className="responsible-section">
                <h2>Randomness</h2>
                <p>
                  All gambling has an element of randomness - there is no way to control the outcome of any casino game or sporting event.
                </p>
              </div>

              <div className="responsible-section">
                <h2>Independent Outcomes</h2>
                <p>
                  Games/Spins are not related. Their outcomes are not dependent on how much, or how long, you've previously played the game for.
                </p>
              </div>
            </>
          )}
          
          {/* Add remaining sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default ResponsibleGambling;
