
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const sportCategories = [
  {
    id: 1,
    name: "CRICKET",
    image: "public/lovable-uploads/e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png",
    color: "from-green-500 to-green-600",
    position: 1
  },
  {
    id: 2,
    name: "SOCCER",
    image: "public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png",
    color: "from-blue-500 to-blue-600",
    position: 2
  },
  {
    id: 3,
    name: "TENNIS",
    image: "public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png",
    color: "from-orange-500 to-red-500",
    position: 3
  },
  {
    id: 4,
    name: "BASKETBALL",
    image: "public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png",
    color: "from-red-500 to-red-600",
    position: 4
  },
  {
    id: 5,
    name: "BASEBALL",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
    color: "from-orange-400 to-orange-500",
    position: 5
  },
  {
    id: 6,
    name: "ICE HOCKEY",
    image: "public/lovable-uploads/e528755e-4a3f-41a9-bb3b-aa5b1d9c1fa9.png",
    color: "from-pink-500 to-pink-600",
    position: 6
  },
  {
    id: 7,
    name: "CS2",
    image: "public/lovable-uploads/dd8af98a-1fe6-4304-980a-c9946e7577ff.png",
    color: "from-red-600 to-red-700",
    position: 7
  },
  {
    id: 8,
    name: "DOTA 2",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png", // placeholder
    color: "from-blue-600 to-blue-700",
    position: 8
  },
];

const SportsCategoryCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("sports-categories-container");
    if (!container) return;
    
    const scrollAmount = 300;
    
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center text-lg font-bold text-white">
          <span className="mr-2">🏆</span> Top Sports
        </h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => handleScroll("left")}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-700 bg-[#17242D] text-gray-400 hover:bg-[#0F1923] hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button 
            onClick={() => handleScroll("right")}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-700 bg-[#17242D] text-gray-400 hover:bg-[#0F1923] hover:text-white transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div 
        id="sports-categories-container"
        className="flex overflow-x-auto no-scrollbar gap-4 pb-2"
      >
        {sportCategories.map((sport) => (
          <Link 
            key={sport.id}
            to={`/sports/${sport.name.toLowerCase()}`}
            className="relative min-w-[200px] max-w-[200px] aspect-[4/5] rounded-lg overflow-hidden group transition-transform hover:scale-105"
          >
            <div className="absolute top-2 left-2 bg-black/50 rounded-full text-sm text-white px-3 py-1">
              {sport.position}
            </div>
            <div className={`absolute inset-0 bg-gradient-to-b ${sport.color} opacity-80`}></div>
            <img 
              src={sport.image} 
              alt={sport.name}
              className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-bold text-center">{sport.name}</h3>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <button className="bg-[#FF6B01] text-white px-6 py-2 rounded-md font-medium transform transition-transform hover:scale-105">
                View
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SportsCategoryCards;
