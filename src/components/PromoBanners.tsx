const promos = [
  {
    id: 1,
    title: "IPL - Early Six, You Win",
    description: "Back for the 2025 Season!",
    ctaText: "Read More",
    buttonText: "Bet Now",
    label: "Promo",
    image: "public/images/promo1.avif",
  },
  {
    id: 2,
    title: "Daily Races",
    description: "Play in our $100,000 Daily Race",
    ctaText: "Read More",
    buttonText: "Bet Now",
    label: "Promo",
    image: "public/images/promo2.avif",
  },
  {
    id: 3,
    title: "Champions League",
    description: "First Half Payout",
    ctaText: "Read More",
    buttonText: "Bet Now!",
    label: "Promo",
    image: "public/images/promo3.avif",
  },
];

const PromoBanners = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="promo-banners">
        <h2>
          <span>🎁</span> Promotions
        </h2>
        <div className="promo-grid">
          {promos.map((promo) => (
            <div key={promo.id} className="promo-card">
              <div className="promo-content">
                <div className="promo-text">
                  <div className="promo-label">{promo.label}</div>
                  <h3>{promo.title}</h3>
                  <p>{promo.description}</p>
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
    </>
  );
};

const styles = `
  .promo-banners {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .promo-banners h2 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
  }

  .promo-banners h2 span {
    margin-right: 0.5rem;
    font-size: 1.25rem;
  }

  .promo-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .promo-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .promo-card {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: #213743;
    transition: transform 0.3s;
    padding: 0.8rem;
  }

  .promo-card:hover {
    transform: scale(1.05);
  }

  .promo-label {
    background-color: #E9EBED;
    padding: 0.15rem 0.3rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000;
    border-radius: 0.25rem;
    display: inline-block;
    max-width: 28%;
  }

  .promo-content {
    display: flex;
    height: 100%;
  }

  .promo-text {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .promo-text h3 {
    margin-bottom: 0.25rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }

  .promo-text p {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #D1D5DB;
  }

  .promo-image-container {
    width: 43.33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .promo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default PromoBanners;
