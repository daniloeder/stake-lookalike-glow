
import { useState } from "react";
import "./GameCard.css";

interface GameCardProps {
  id: number;
  name: string;
  playing: number;
  image: string;
  position?: number;
  badge?: string;
  enhanced?: boolean;
}

const GameCard = ({ id, name, playing, image, position, badge, enhanced }: GameCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="game-card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {position && <div className="game-position">{position}</div>}
      {(badge || enhanced) && (
        <div className="game-badge">
          {badge || (enhanced ? "ENHANCED RTP" : "")}
        </div>
      )}
      <div className="game-image-container">
        <img src={image} alt={name} className="game-image" />
      </div>
      <div className="game-info">
        <div className="game-players-count">
          <span className="player-dot"></span>
          {playing.toLocaleString()} playing
        </div>
      </div>
    </div>
  );
};

export default GameCard;
