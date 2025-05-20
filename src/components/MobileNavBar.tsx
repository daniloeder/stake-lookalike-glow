
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SvgIcon from "./SvgIcon";

interface MobileNavBarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ toggleSidebar, sidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>("");
  
  // Set active item based on current location when component mounts
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveItem("browse");
    } else if (location.pathname === "/casino") {
      setActiveItem("casino");
    } else if (location.pathname === "/bets") {
      setActiveItem("bets");
    } else if (location.pathname === "/sports") {
      setActiveItem("sports");
    } else if (location.pathname === "/chat") {
      setActiveItem("chat");
    }
  }, [location.pathname]);

  const handleItemClick = (item: string, path: string) => {
    setActiveItem(item);
    
    if (item === "browse") {
      toggleSidebar();
    } else {
      if (sidebarOpen) {
        toggleSidebar(); // Close sidebar if open
      }
      navigate(path);
    }
  };

  return (
    <div className="mobile-nav-bar">
      <div className="mobile-nav-items">
        <div 
          className={`mobile-nav-item ${activeItem === "browse" ? "active" : ""}`} 
          onClick={() => handleItemClick("browse", "/")}
        >
          <div className="indicator-line"></div>
          <SvgIcon svgPath="src/assets/icons/svgs/Browse.svg" size={24} />
          <span>Browse</span>
        </div>
        
        <div 
          className={`mobile-nav-item ${activeItem === "casino" ? "active" : ""}`} 
          onClick={() => handleItemClick("casino", "/casino")}
        >
          <div className="indicator-line"></div>
          <SvgIcon svgPath="src/assets/icons/svgs/Casino.svg" size={24} />
          <span>Casino</span>
        </div>
        
        <div 
          className={`mobile-nav-item ${activeItem === "bets" ? "active" : ""}`} 
          onClick={() => handleItemClick("bets", "/bets")}
        >
          <div className="indicator-line"></div>
          <SvgIcon svgPath="src/assets/icons/svgs/Bets.svg" size={24} />
          <span>Bets</span>
        </div>
        
        <div 
          className={`mobile-nav-item ${activeItem === "sports" ? "active" : ""}`} 
          onClick={() => handleItemClick("sports", "/sports")}
        >
          <div className="indicator-line"></div>
          <SvgIcon svgPath="src/assets/icons/svgs/Sports.svg" size={24} />
          <span>Sports</span>
        </div>
        
        <div 
          className={`mobile-nav-item ${activeItem === "chat" ? "active" : ""}`} 
          onClick={() => handleItemClick("chat", "/chat")}
        >
          <div className="indicator-line"></div>
          <SvgIcon svgPath="src/assets/icons/svgs/Chat.svg" size={24} />
          <span>Chat</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
