
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"casino" | "sports">("sports");

  useEffect(() => {
    if (location.pathname.includes("/casino")) {
      setActiveTab("casino");
    } else {
      setActiveTab("sports");
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Button variant="ghost" size="icon" className="menu-button">
            <Menu className="menu-icon" />
          </Button>
          
          <div className="nav-tabs">
            <Link 
              to="/casino" 
              className={`nav-tab ${activeTab === "casino" ? "casino-active" : "casino-inactive"}`}
              onClick={() => setActiveTab("casino")}
            >
              Casino
            </Link>
            <Link 
              to="/sports" 
              className={`nav-tab ${activeTab === "sports" ? "sports-active" : "sports-inactive"}`}
              onClick={() => setActiveTab("sports")}
            >
              Sports
            </Link>
          </div>
          
          <Link to="/" className="logo-link">
            <img 
              src="public/lovable-uploads/f5e5c414-4cd6-431f-a438-5ecffedb9217.png" 
              alt="Stake"
              className="logo"
            />
          </Link>
        </div>

        <div className="header-right">
          <Button 
            variant="ghost" 
            className="login-button"
          >
            Login
          </Button>
          <Button 
            className="register-button"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

// CSS styles
const styles = `
.header {
  border-bottom: 1px solid #1f2937;
  background-color: #0F1923;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.header-left {
  display: flex;
  align-items: center;
}

.menu-button {
  margin-right: 1rem;
  color: white;
}

@media (min-width: 768px) {
  .menu-button {
    display: none;
  }
}

.menu-icon {
  height: 1.25rem;
  width: 1.25rem;
}

.nav-tabs {
  display: none;
}

@media (min-width: 768px) {
  .nav-tabs {
    display: block;
  }
}

.nav-tab {
  margin-right: 0.25rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s;
}

.nav-tab:hover {
  transform: scale(1.05);
}

.casino-active {
  background-color: #0D7E3E;
  color: white;
}

.casino-inactive {
  background-color: #1A2C38;
  color: rgba(255, 255, 255, 0.7);
}

.casino-inactive:hover {
  color: white;
}

.sports-active {
  background-color: #FF6B01;
  color: white;
}

.sports-inactive {
  background-color: #1A2C38;
  color: rgba(255, 255, 255, 0.7);
}

.sports-inactive:hover {
  color: white;
}

.logo-link {
  margin: 0 auto;
}

@media (min-width: 768px) {
  .logo-link {
    margin: 0;
    margin-left: 2rem;
  }
}

.logo {
  height: 2.5rem;
  width: auto;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.login-button {
  display: none;
  color: white;
  transition: background-color 0.2s, color 0.2s;
}

.login-button:hover {
  background-color: #1A2C38;
  color: white;
}

@media (min-width: 640px) {
  .login-button {
    display: inline-flex;
  }
}

.register-button {
  background-color: #1A9AEF;
  color: white;
  transition: transform 0.2s, background-color 0.2s;
}

.register-button:hover {
  transform: scale(1.05);
  background-color: #0F8CDD;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Header;
