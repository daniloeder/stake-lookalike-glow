
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full my-4 px-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search your game"
          className="w-full py-2 pl-10 pr-4 text-sm border rounded-md bg-[#17242D] border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-[#1A9AEF] focus:ring-[#1A9AEF]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
