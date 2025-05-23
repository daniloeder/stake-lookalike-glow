
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import "./NotFound.css";

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

export default NotFound;
