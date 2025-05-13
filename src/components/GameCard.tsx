
import { useState } from "react";

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

// CSS styles
const styles = `
.game-card {
  position: relative;
  border-radius: 0.375rem;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;
  height: 100%;
}

.game-card:hover {
  transform: scale(1.05);
}

.game-position {
  position: absolute;
  top: 0.5rem;
  left: -0.2rem;
  color: white;
  background-color: #2F4553;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  z-index: 10;
}

.game-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #FF6B01;
  color: white;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  z-index: 10;
}

.game-image-container {
  width: 100%;
  position: relative;
}

.game-image {
  width: 100%;
  height: auto;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.game-info {
  padding: 0.75rem;
}

.game-players-count {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #10B981;
}

.player-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10B981;
  margin-right: 4px;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default GameCard;
