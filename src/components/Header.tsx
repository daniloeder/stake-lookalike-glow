
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-stake-darker py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="italic">Stake</span>
          </Link>

          <nav className="ml-6 hidden md:block">
            <ul className="flex space-x-1">
              <li>
                <Link to="/casino" className="stake-nav-button">
                  Casino
                </Link>
              </li>
              <li>
                <Link to="/" className="stake-nav-button active">
                  Sports
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-white hover:bg-stake-darker hover:text-stake-blue">
            Login
          </Button>
          <Button className="bg-stake-blue hover:bg-stake-brightBlue text-white">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
