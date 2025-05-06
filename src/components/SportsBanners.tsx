
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {promos.map((promo) => (
        <div
          key={promo.id}
          className="relative overflow-hidden rounded-lg bg-[#17242D] h-36"
        >
          <div className="absolute left-2 top-2 rounded bg-[#0F1923] px-2 py-1 text-xs font-semibold text-white">
            Promo
          </div>
          <div className="flex h-full">
            <div className="flex flex-1 flex-col justify-center p-4">
              <h3 className="mb-1 text-xl font-bold text-white">{promo.title}</h3>
              <p className="mb-2 text-sm text-gray-300">{promo.description}</p>
              <button className="mb-2 text-left text-xs text-[#1A9AEF] hover:underline">
                {promo.ctaText}
              </button>
              <Link to={promo.link}>
                <button className="mt-auto w-4/5 bg-[#1A9AEF] text-white hover:bg-[#0F8CDD] py-2 px-4 rounded font-medium transform transition-transform hover:scale-105">
                  {promo.buttonText}
                </button>
              </Link>
            </div>
            <div className="w-1/3">
              <img
                src={promo.image}
                alt={promo.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportsBanners;
