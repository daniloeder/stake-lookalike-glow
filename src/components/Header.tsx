
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState<"casino" | "sports">("sports");

  return (
    <header className="border-b border-gray-800 bg-[#0F1923]">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-4 text-white md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="hidden md:block">
            <Link 
              to="/casino" 
              className={`mr-1 rounded-t-md px-6 py-3 font-semibold uppercase tracking-wide ${
                activeTab === "casino" 
                  ? "bg-[#0F1923] text-white" 
                  : "bg-[#1A2C38] text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveTab("casino")}
            >
              Casino
            </Link>
            <Link 
              to="/" 
              className={`rounded-t-md px-6 py-3 font-semibold uppercase tracking-wide ${
                activeTab === "sports" 
                  ? "bg-[#FF6B01] text-white" 
                  : "bg-[#1A2C38] text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveTab("sports")}
            >
              Sports
            </Link>
          </div>
          
          <Link to="/" className="mx-auto md:mx-0 md:ml-8">
            <img 
              src="public/lovable-uploads/f5e5c414-4cd6-431f-a438-5ecffedb9217.png" 
              alt="Stake"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden text-white hover:bg-[#1A2C38] hover:text-white sm:inline-flex">
            Login
          </Button>
          <Button className="bg-[#1A9AEF] hover:bg-[#0F8CDD] text-white">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
