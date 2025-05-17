import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ChallengeGameProps {
    name: string;
    image: string;
    prize: string;
    firstToHit: string;
    minBet: string;
    createdBy: string;
}

const ChallengeGame = ({ name, image, prize, firstToHit, minBet, createdBy }: ChallengeGameProps) => {
    return (
        <div className="challenge-game-card">
            <AspectRatio ratio={3 / 4}>
                <div className="challenge-game-image-container">
                    <img src={image} alt={name} className="challenge-game-image" />
                </div>
            </AspectRatio>

            <div className="challenge-game-content">
                <div className="challenge-game-details">
                    <div className="challenge-game-name">{name}</div>
                </div>
                <div className="challenge-game-info">
                    <div className="challenge-hit-info">{firstToHit}</div>
                </div>

                <div className="challenge-prize">
                    <div>Prize</div>
                    <div className="prize-amount">{prize}</div>
                </div>

                <div className="challenge-creator">
                    <div>Created By</div>
                    <div className="creator-name">
                        <span className="star-icon">★💲</span>
                        Challenges
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChallengeGames = () => {
    // Sample data to match the screenshot
    const games = [
        {
            name: "Crown Coins",
            image: "/images/game1.avif",
            prize: "499.09997302 ₮",
            firstToHit: "First to hit 2,500× with min 0.00000485",
            minBet: "0.00000485",
            createdBy: "Challenges"
        },
        {
            name: "Word of Thoth",
            image: "/images/game1.avif",
            prize: "499.09997302 ₮",
            firstToHit: "First to hit 2,500× with min 0.00000485",
            minBet: "0.00000485",
            createdBy: "Challenges"
        },
        {
            name: "Mystic Bull",
            image: "/images/game1.avif",
            prize: "998.19994604 ₮",
            firstToHit: "First to hit 2,500× with min 0.00000485",
            minBet: "0.00000485",
            createdBy: "Challenges"
        },
        {
            name: "Bonsai Banzai",
            image: "/images/game1.avif",
            prize: "14980.52389... ₮",
            firstToHit: "First to hit 4,000× with min 0.00000820",
            minBet: "0.00000820",
            createdBy: "Challenges"
        },
        {
            name: "Serpentina",
            image: "/images/game1.avif",
            prize: "1521.86562... ₮",
            firstToHit: "First to hit 1,000× with min 0.00004850",
            minBet: "0.00004850",
            createdBy: "Challenges"
        },
        {
            name: "Pixel Cafe",
            image: "/images/game1.avif",
            prize: "4304.13917... ₮",
            firstToHit: "First to hit 1,000× with min 0.00000450",
            minBet: "0.00000450",
            createdBy: "Challenges"
        },
        {
            name: "Payback Posse",
            image: "/images/game1.avif",
            prize: "1799.64007... ₮",
            firstToHit: "First to hit 1,000× with min 0.00004850",
            minBet: "0.00004850",
            createdBy: "Challenges"
        },
        {
            name: "Spin Reaper",
            image: "/images/game1.avif",
            prize: "2438.01239... ₮",
            firstToHit: "First to hit 4,000× with min 0.00000485",
            minBet: "0.00000485",
            createdBy: "Challenges"
        },
        {
            name: "Lab of Lunacy",
            image: "/images/game1.avif",
            prize: "4784.04319... ₮",
            firstToHit: "First to hit 4,000× with min 0.00000485",
            minBet: "0.00000485",
            createdBy: "Challenges"
        },
        {
            name: "Realm of Rats",
            image: "/images/game1.avif",
            prize: "1206.75864... ₮",
            firstToHit: "First to hit 4,000× with min 0.0000035",
            minBet: "0.0000035",
            createdBy: "Challenges"
        },
        {
            name: "Spin Reaper",
            image: "/images/game1.avif",
            prize: "371.92561488 ₮",
            firstToHit: "First to hit 1,000× with min 0.00000485",
            minBet: "0.00000485",
            createdBy: "Challenges"
        },
        {
            name: "Buffaloads",
            image: "/images/game1.avif",
            prize: "229.86402719 ₮",
            firstToHit: "First to hit 4,000× with min 0.00000007",
            minBet: "0.00000007",
            createdBy: "Challenges"
        }
    ];

    return (
        <div className="challenge-games-container">
            {games.map((game, index) => (
                <ChallengeGame key={index} {...game} />
            ))}
        </div>
    );
};

// CSS styles
const styles = `
.challenge-games-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
}

.challenge-game-card {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background-color: #213743;
  border: none;
  transition: transform 0.2s;
  cursor: pointer;
}

.challenge-game-card:hover {
  transform: scale(1.05);
}

.challenge-game-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.challenge-game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.challenge-game-details {
  width: 100%;
  color: white;
}

.challenge-game-name {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.challenge-game-content {
  padding: 0.75rem;
  color: white;
  font-size: 0.875rem;
}

.challenge-game-info {
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.challenge-hit-info {
  font-size: 0.75rem;
  color: #CCC;
  width: 65%;
}

.challenge-prize, .challenge-creator {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  color: #CCC;
}

.prize-amount {
  color:#FFFFFF;
  font-weight: 500;
}

.creator-name {
  display: flex;
  align-items: center;
  color: #FFF;
}

.star-icon {
  color: #FFD700;
  margin-right: 0.25rem;
}

@media (max-width: 768px) {
  .challenge-games-container {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .challenge-game-name {
    font-size: 1rem;
  }
  
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

export default ChallengeGames;