
import { Search } from "lucide-react";
import { useState } from "react";

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

// CSS styles
const styles = `
.search-bar {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.search-bar.full-width {
  width: 100%;
}

.search-container {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  background-color: #17242D;
  border: 1px solid #374151;
  color: white;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-input:focus {
  outline: none;
  border-color: #1A9AEF;
  box-shadow: 0 0 0 1px #1A9AEF;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default SearchBar;
