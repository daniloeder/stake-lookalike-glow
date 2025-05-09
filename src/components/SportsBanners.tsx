
import { Link } from "react-router-dom";

const promos = [
  {
    id: 1,
    title: "IPL - Early Six, You Win",
    description: "Back for the 2025 Season!",
    ctaText: "Read More",
    buttonText: "Bet Now",
    link: "/promotions/ipl",
    image: "public/lovable-uploads/e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png",
  },
  {
    id: 2,
    title: "Champions League",
    description: "First Half Payout",
    ctaText: "Read More",
    buttonText: "Bet Now",
    link: "/promotions/champions-league",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
  },
  {
    id: 3,
    title: "NBA Playoffs",
    description: "Close Loss Refund",
    ctaText: "Read More",
    buttonText: "Bet Now",
    link: "/promotions/nba",
    image: "public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png",
  },
];

const SportsBanners = () => {
  return (
    <div className="sports-banners">
      {promos.map((promo) => (
        <div
          key={promo.id}
          className="promo-card"
        >
          <div className="promo-tag">
            Promo
          </div>
          <div className="promo-content">
            <div className="promo-info">
              <h3 className="promo-title">{promo.title}</h3>
              <p className="promo-description">{promo.description}</p>
              <button className="promo-cta">
                {promo.ctaText}
              </button>
              <Link to={promo.link}>
                <button className="promo-button">
                  {promo.buttonText}
                </button>
              </Link>
            </div>
            <div className="promo-image-container">
              <img
                src={promo.image}
                alt={promo.title}
                className="promo-image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// CSS styles
const styles = `
.sports-banners {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .sports-banners {
    grid-template-columns: repeat(3, 1fr);
  }
}

.promo-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #17242D;
  height: 9rem;
}

.promo-tag {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  border-radius: 0.25rem;
  background-color: #0F1923;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
}

.promo-content {
  display: flex;
  height: 100%;
}

.promo-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}

.promo-title {
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.promo-description {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #d1d5db;
}

.promo-cta {
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 0.75rem;
  color: #1060B7;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.promo-cta:hover {
  text-decoration: underline;
}

.promo-button {
  margin-top: auto;
  width: 80%;
  background-color: #1060B7;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.2s;
}

.promo-button:hover {
  background-color: #1060B7;
  transform: scale(1.05);
}

.promo-image-container {
  width: 33.333333%;
}

.promo-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default SportsBanners;
