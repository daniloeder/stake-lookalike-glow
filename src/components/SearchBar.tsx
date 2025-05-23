
import { Search } from "lucide-react";
import { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
}

const SearchBar = ({ placeholder = "Search your game", fullWidth = true, className = "" }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className={`search-bar ${fullWidth ? 'full-width' : ''} ${className}`}>
      <div className="search-container">
        <Search className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;
