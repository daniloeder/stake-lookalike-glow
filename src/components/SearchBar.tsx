
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
    <div className={`${fullWidth ? 'w-full' : 'w-auto'} my-4 ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full py-3 pl-10 pr-4 text-sm rounded-md bg-[#17242D] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-[#1A9AEF] focus:ring-[#1A9AEF]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
