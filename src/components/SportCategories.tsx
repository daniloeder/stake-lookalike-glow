
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

// CSS styles
const styles = `
.sport-categories {
  margin-bottom: 2rem;
}

.sport-categories-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
}

.emoji {
  margin-right: 0.5rem;
}

.nav-buttons {
  display: flex;
  gap: 0.5rem;
}

.nav-button {
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  border: 1px solid #374151;
  background-color: #0A1218;
  color: #9ca3af;
}

.nav-button:hover {
  background-color: #0F1923;
  color: white;
}

.button-icon {
  height: 1rem;
  width: 1rem;
}

.sport-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .sport-cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .sport-cards-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .sport-cards-grid {
    grid-template-columns: repeat(7, 1fr);
  }
}

.sport-card {
  position: relative;
  height: 9rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: transform 0.2s;
}

.sport-card:hover {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.9;
}

.from-green-500.to-green-600 {
  background: linear-gradient(to bottom, #10b981, #059669);
}

.from-blue-500.to-blue-600 {
  background: linear-gradient(to bottom, #3b82f6, #2563eb);
}

.from-orange-500.to-red-500 {
  background: linear-gradient(to bottom, #f97316, #ef4444);
}

.from-red-500.to-red-600 {
  background: linear-gradient(to bottom, #ef4444, #dc2626);
}

.from-orange-400.to-orange-500 {
  background: linear-gradient(to bottom, #fb923c, #f97316);
}

.from-pink-500.to-pink-600 {
  background: linear-gradient(to bottom, #ec4899, #db2777);
}

.from-red-600.to-red-700 {
  background: linear-gradient(to bottom, #dc2626, #b91c1c);
}

.sport-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.sport-card-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  color: white;
}

.sport-name {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default SportCategories;
