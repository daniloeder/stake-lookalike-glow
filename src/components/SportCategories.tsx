
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sportCategories = [
  {
    id: 1,
    name: "CRICKET",
    image: "public/lovable-uploads/e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png",
    color: "from-green-500 to-green-600",
  },
  {
    id: 2,
    name: "SOCCER",
    image: "public/lovable-uploads/02a819fe-f4ed-4bea-a8a5-741ea85e13d3.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    name: "TENNIS",
    image: "public/lovable-uploads/0b97a448-73a0-467a-9f19-7c2e8abc678c.png",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "BASKETBALL",
    image: "public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png",
    color: "from-red-500 to-red-600",
  },
  {
    id: 5,
    name: "BASEBALL",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
    color: "from-orange-400 to-orange-500",
  },
  {
    id: 6,
    name: "ICE HOCKEY",
    image: "public/lovable-uploads/e528755e-4a3f-41a9-bb3b-aa5b1d9c1fa9.png",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: 7,
    name: "RACING",
    image: "public/lovable-uploads/dd8af98a-1fe6-4304-980a-c9946e7577ff.png",
    color: "from-red-600 to-red-700",
  },
];

const SportCategories = () => {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center text-lg font-bold text-white">
          <span className="mr-2">🏆</span> Top Sports
        </h2>
        <div className="flex space-x-2">
          <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-700 bg-stake-darker text-gray-400 hover:bg-stake-dark hover:text-white">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-gray-700 bg-stake-darker text-gray-400 hover:bg-stake-dark hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {sportCategories.map((sport) => (
          <div key={sport.id} className="sports-card h-36 w-full">
            <div className={`absolute inset-0 bg-gradient-to-b ${sport.color} opacity-90`}></div>
            <img 
              src={sport.image} 
              alt={sport.name}
              className="h-full w-full object-cover"
            />
            <div className="sports-card-content">
              <h3 className="sports-card-title">{sport.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportCategories;
