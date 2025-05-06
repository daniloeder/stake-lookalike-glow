
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-stake-dark">
      <Header />
      
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <h1 className="mb-4 text-6xl font-bold text-stake-blue">404</h1>
        <p className="mb-8 text-xl text-gray-300">Page not found</p>
        <p className="mb-8 max-w-md text-center text-gray-400">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Button className="bg-stake-blue hover:bg-stake-brightBlue">
          <a href="/" className="text-white no-underline">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
