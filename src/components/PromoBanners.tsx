
const promos = [
  {
    id: 1,
    title: "IPL - Early Six, You Win",
    description: "Back for the 2025 Season!",
    ctaText: "Read More",
    buttonText: "Bet Now",
    image: "public/lovable-uploads/e8fc8e50-a196-4e5e-8e8b-ff5c92b4d1e1.png",
  },
  {
    id: 2,
    title: "NBA Playoffs",
    description: "Close Loss Refund",
    ctaText: "Read More",
    buttonText: "Bet Now",
    image: "public/lovable-uploads/fb85ff2a-543e-4c11-b199-05635ddcfe94.png",
  },
  {
    id: 3,
    title: "MLB - 9th Inning Payout",
    description: "Insurance For Bad Beats",
    ctaText: "Read More",
    buttonText: "Bet Now!",
    image: "public/lovable-uploads/c81e0921-952f-42e9-9833-ff4c541b266f.png",
  },
];

const PromoBanners = () => {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {promos.map((promo) => (
        <div key={promo.id} className="relative overflow-hidden rounded-lg bg-stake-darker">
          <div className="absolute left-2 top-2 rounded bg-stake-dark px-2 py-1 text-xs font-semibold text-white">
            Promo
          </div>
          <div className="flex h-full">
            <div className="flex flex-1 flex-col justify-center p-4">
              <h3 className="mb-1 text-lg font-bold text-white">{promo.title}</h3>
              <p className="mb-2 text-sm text-gray-300">{promo.description}</p>
              <button className="mb-2 text-left text-xs text-stake-blue hover:underline">
                {promo.ctaText}
              </button>
              <button className="stake-button stake-button-primary w-full">
                {promo.buttonText}
              </button>
            </div>
            <div className="w-1/2">
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

export default PromoBanners;
