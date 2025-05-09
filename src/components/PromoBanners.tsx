
import { Button } from "@/components/ui/button";

const promos = [
  {
    id: 1,
    title: "Daily Races",
    description: "Play in our $100,000 Daily Race",
    ctaText: "Read More",
    buttonText: "Race Now",
    label: "Promo",
    image: "public/images/promo-daily-races.png",
  },
  {
    id: 2,
    title: "Conquer the Casino",
    description: "Win a share in $50,000 every week",
    ctaText: "Read More",
    buttonText: "Play Now",
    label: "Promo",
    image: "public/images/promo-conquer-casino.png",
  },
  {
    id: 3,
    title: "Weekly Raffle",
    description: "Share in $75,000 each week",
    ctaText: "Read More",
    buttonText: "Learn More",
    label: "Promo",
    image: "public/images/promo-weekly-raffle.png",
  },
];

const PromoBanners = () => {
  return (
    <div className="promo-banners">
      <h2 className="promo-section-title">
        <span className="promo-section-icon">🎁</span>
        Promotions
      </h2>
      <div className="promos-grid">
        {promos.map((promo) => (
          <div 
            key={promo.id} 
            className="promo-card"
          >
            <div className="promo-label">
              {promo.label}
            </div>
            <div className="promo-content">
              <div className="promo-info">
                <h3 className="promo-title">{promo.title}</h3>
                <p className="promo-description">{promo.description}</p>
                <button className="promo-cta">
                  {promo.ctaText}
                </button>
                <button className="promo-button">
                  {promo.buttonText}
                </button>
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
    </div>
  );
};

// CSS styles
const styles = `
.promo-banners {
  margin: 2rem 0;
}

.promo-section-title {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.promo-section-icon {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

.promos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 1024px) {
  .promos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .promos-grid {
    grid-template-columns: 1fr;
  }
}

.promo-card {
  position: relative;
  background-color: #17242D;
  border-radius: 0.5rem;
  overflow: hidden;
  height: 140px;
  transition: transform 0.2s;
}

.promo-card:hover {
  transform: scale(1.02);
}

.promo-label {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background-color: #0F1923;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  z-index: 10;
}

.promo-content {
  display: flex;
  height: 100%;
}

.promo-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 2rem;
}

.promo-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}

.promo-description {
  font-size: 0.875rem;
  color: #d1d5db;
  margin-bottom: 0.5rem;
}

.promo-cta {
  background: none;
  border: none;
  text-align: left;
  color: #1A9AEF;
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0;
  margin-bottom: 0.5rem;
}

.promo-cta:hover {
  text-decoration: underline;
}

.promo-button {
  background-color: #1A9AEF;
  border: none;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  margin-top: auto;
  max-width: 100%;
  width: 80%;
}

.promo-button:hover {
  background-color: #0F8CDD;
  transform: scale(1.05);
}

.promo-image-container {
  width: 40%;
  display: flex;
  align-items: center;
}

.promo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default PromoBanners;
