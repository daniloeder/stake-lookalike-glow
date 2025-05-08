
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
    name: "RACING",
    image: "public/lovable-uploads/dd8af98a-1fe6-4304-980a-c9946e7577ff.png",
    color: "from-red-600 to-red-700",
    position: 7
  },
  {
    id: 8,
    name: "ESPORTS",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
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
    <div className="sports-categories-section">
      <div className="section-header">
        <div className="section-title">
          <span className="trophy-icon">🏆</span>
          <h2>Trending Sports</h2>
        </div>
        <div className="nav-arrows">
          <button 
            onClick={() => handleScroll("left")}
            className="nav-arrow"
          >
            <ChevronLeft className="arrow-icon" />
          </button>
          <button 
            onClick={() => handleScroll("right")}
            className="nav-arrow"
          >
            <ChevronRight className="arrow-icon" />
          </button>
        </div>
      </div>
      
      <div 
        id="sports-categories-container"
        className="sports-cards-container"
      >
        {sportCategories.map((sport) => (
          <Link 
            key={sport.id}
            to={`/sports/${sport.name.toLowerCase()}`}
            className="sport-category-card"
          >
            <div className="sport-position">{sport.position}</div>
            <div className={`sport-bg ${sport.color}`}></div>
            <img 
              src={sport.image} 
              alt={sport.name}
              className="sport-image"
            />
            <div className="sport-content">
              <h3 className="sport-name">{sport.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// CSS styles
const styles = `
.sports-categories-section {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.section-title {
  display: flex;
  align-items: center;
}

.trophy-icon {
  margin-right: 0.5rem;
  font-size: 1.25rem;
}

.section-title h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.nav-arrows {
  display: flex;
  gap: 0.5rem;
}

.nav-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border: 1px solid #374151;
  border-radius: 9999px;
  background-color: #17242D;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}

.nav-arrow:hover {
  background-color: #0F1923;
  color: white;
}

.arrow-icon {
  height: 1rem;
  width: 1rem;
}

.sports-cards-container {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 0.5rem;
}

.sports-cards-container::-webkit-scrollbar {
  display: none;
}

.sport-category-card {
  position: relative;
  min-width: 170px;
  height: 220px;
  border-radius: 0.5rem;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.2s;
}

.sport-category-card:hover {
  transform: scale(1.05);
}

.sport-position {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  z-index: 10;
}

.sport-bg {
  position: absolute;
  inset: 0;
  opacity: 0.8;
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

.from-blue-600.to-blue-700 {
  background: linear-gradient(to bottom, #2563eb, #1d4ed8);
}

.sport-image {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
}

.sport-content {
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
  text-align: center;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default SportsCategoryCards;
