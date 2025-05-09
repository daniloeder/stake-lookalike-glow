
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="not-found-page">
      <Header />
      
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-subtitle">Page not found</p>
        <p className="not-found-message">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <button className="home-button">
          <a href="/" className="home-link">Return to Home</a>
        </button>
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.not-found-page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #0F1923;
}

.not-found-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.not-found-title {
  margin-bottom: 1rem;
  font-size: 3.75rem;
  font-weight: 700;
  color: #1060B7;
}

.not-found-subtitle {
  margin-bottom: 2rem;
  font-size: 1.25rem;
  color: #d1d5db;
}

.not-found-message {
  margin-bottom: 2rem;
  max-width: 28rem;
  text-align: center;
  color: #9ca3af;
}

.home-button {
  background-color: #1060B7;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.home-button:hover {
  background-color: #1060B7;
}

.home-link {
  color: white;
  text-decoration: none;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default NotFound;
