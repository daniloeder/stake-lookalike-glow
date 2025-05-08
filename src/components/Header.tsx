
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
  border-bottom: 1px solid #1A2C38;
  background-color: #0A1218;
  height: 60px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
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
  height: 2rem;
  width: auto;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.login-button {
  color: white;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
}

.login-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.register-button {
  background-color: #1A9AEF;
  color: white;
  font-weight: 500;
  padding: 0 1.25rem;
  transition: transform 0.2s, background-color 0.2s;
  border-radius: 4px;
}

.register-button:hover {
  background-color: #0F8CDD;
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
