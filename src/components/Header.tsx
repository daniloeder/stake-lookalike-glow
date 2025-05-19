
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";

const Header = () => {
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

// CSS styles
const styles = `
.header {
  border-bottom: 1px solid #1A2C38;
  background-color: #1A2C38;
  height: 60px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: #0003 0 4px 6px -1px, #0000001f 0 2px 4px -1px;
  touch-action: none;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  height: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo {
  height: 3rem;
  width: auto;
}

.header-right {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
  }
}

`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default Header;
