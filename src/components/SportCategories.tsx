
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./SportCategories.css";

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
    <div className="sport-categories">
      <div className="sport-categories-header">
        <h2 className="section-title">
          <span className="emoji">🏆</span> Top Sports
        </h2>
        <div className="nav-buttons">
          <Button size="icon" variant="outline" className="nav-button">
            <ChevronLeft className="button-icon" />
          </Button>
          <Button size="icon" variant="outline" className="nav-button">
            <ChevronRight className="button-icon" />
          </Button>
        </div>
      </div>
      
      <div className="sport-cards-grid">
        {sportCategories.map((sport) => (
          <div key={sport.id} className="sport-card">
            <div className={`card-overlay ${sport.color}`}></div>
            <img 
              src={sport.image} 
              alt={sport.name}
              className="sport-image"
            />
            <div className="sport-card-content">
              <h3 className="sport-name">{sport.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportCategories;
