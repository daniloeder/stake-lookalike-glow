
import { Link } from "react-router-dom";
import "./SportsBanners.css";

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

export default SportsBanners;
