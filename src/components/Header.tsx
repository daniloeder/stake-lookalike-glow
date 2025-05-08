
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
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
  background-color: #0c1720;
  height: 56px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 100%;
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
  height: 2.5rem;
  width: auto;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.login-button {
  color: white;
  transition: background-color 0.2s, color 0.2s;
}

.login-button:hover {
  background-color: #1A2C38;
  color: white;
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

@media (max-width: 768px) {
  .header-container {
    margin-left: 0;
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
