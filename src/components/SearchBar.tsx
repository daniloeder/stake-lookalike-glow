
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="my-6 w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search your event"
          className="w-full rounded-full border border-gray-700 bg-stake-darker py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:border-stake-blue focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
