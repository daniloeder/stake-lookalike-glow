
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import PromotionModal from "./PromotionModal";

interface PromoBanner {
  id: string;
  title: string;
  image: string;
  description: string;
  deadline?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

interface PromoBannersProps {
  title?: string;
}

const PromoBanners = ({ title = "Promotions" }: PromoBannersProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState<PromoBanner | null>(null);

  // Sample promotion data
  const promotions: PromoBanner[] = [
    { 
      id: "weekly-raffle",
      title: "$75k Weekly Raffle",
      image: "public/images/promo1.avif",
      description: "Wager to earn tickets into a giveaway where anybody can win. Just one ticket could see you sharing in $75,000 every single week. With $1,000 wagered equating to one ticket, earn as many tickets as possible to give yourself the best chance of winning big! Winners drawn on live stream every Saturday 2:00pm GMT at www.kick.com/Eddie",
      deadline: { days: 1, hours: 18, minutes: 3, seconds: 18 }
    },
    { 
      id: "race-100k",
      title: "$100k Race",
      image: "public/images/promo2.avif",
      description: "Compete against other players in our $100,000 Race. Every bet you place earns you points, and the more points you earn, the higher you climb on the leaderboard. Top prizes include $25,000, $15,000, and $10,000!",
    },
    { 
      id: "race-90min",
      title: "$25k Race - 90 Minutes",
      image: "public/images/promo3.avif",
      description: "Join our fast-paced 90-minute race with a prize pool of $25,000. Play any game to earn points and climb the leaderboard. New race starts every hour!",
      deadline: { days: 0, hours: 0, minutes: 45, seconds: 30 }
    },
  ];

  const handleOpenPromoModal = (promo: PromoBanner) => {
    setSelectedPromo(promo);
    setShowModal(true);
  };

  return (
    <div className="promo-banners-section">
      <SectionHeader title={title} showNavigation={true} />
      
      <div className="promo-banners-grid">
        {promotions.map((promo) => (
          <div 
            key={promo.id} 
            className="promo-banner-item"
            onClick={() => handleOpenPromoModal(promo)}
          >
            <div 
              className="promo-banner-image" 
              style={{ backgroundImage: `url(${promo.image})` }}
            >
              <div className="promo-banner-overlay"></div>
              <div className="promo-banner-content">
                <h3 className="promo-banner-title">{promo.title}</h3>
                {promo.deadline && (
                  <div className="promo-banner-timer">
                    <span className="timer-icon">⏰</span>
                    <span className="timer-text">
                      {promo.deadline.days > 0 && `${promo.deadline.days}d `}
                      {promo.deadline.hours}h {promo.deadline.minutes}m remaining
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {showModal && selectedPromo && (
        <PromotionModal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          promotion={selectedPromo}
        />
      )}
    </div>
  );
};

// CSS styles
const styles = `
.promo-banners-section {
  margin-bottom: 2rem;
}

.promo-banners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  width: 100%;
}

.promo-banner-item {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  height: 200px;
  cursor: pointer;
  transition: transform 0.2s;
}

.promo-banner-item:hover {
  transform: translateY(-5px);
}

.promo-banner-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.promo-banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
}

.promo-banner-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
}

.promo-banner-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.promo-banner-timer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FFD700;
  font-size: 0.85rem;
  font-weight: 500;
}

.timer-icon {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .promo-banners-grid {
    grid-template-columns: 1fr;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default PromoBanners;
