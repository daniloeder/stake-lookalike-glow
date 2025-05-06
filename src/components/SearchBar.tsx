
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mx-auto my-4 w-full max-w-4xl px-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search your game"
          className="w-full rounded-md border border-gray-700 bg-[#17242D] py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-[#1A9AEF] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
