
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import SearchBar from "./SearchBar";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <img 
              src="src/assets/images/logo.png"
              alt="Stake"
              className="logo"
            />
          </Link>
        </div>

        <div className="header-right">
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
