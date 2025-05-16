
import { useState, useEffect, ReactNode } from "react";
import { X, Clock } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  promotion: {
    id: string;
    title: string;
    description: string;
    iconSrc?: string;
    deadline?: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
  };
}

const PromotionModal = ({ isOpen, onClose, promotion }: PromotionModalProps) => {
  const [timeLeft, setTimeLeft] = useState(promotion?.deadline || { days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!isOpen || !promotion?.deadline) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        // Simple countdown logic - in a real app, you'd calculate based on actual end date
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, promotion]);

  // Format time unit with leading zero if needed
  const formatTimeUnit = (unit: number) => {
    return unit < 10 ? `0${unit}` : `${unit}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="promotion-modal-content">
        <button className="promotion-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="promotion-modal-header">
          <div className="promotion-modal-icon">
            {promotion?.iconSrc ? (
              <img src={promotion.iconSrc} alt={promotion.title} />
            ) : (
              <div className="promotion-default-icon">🏆</div>
            )}
          </div>
          <h2 className="promotion-modal-title">{promotion?.title}</h2>
        </div>
        
        {promotion?.deadline && (
          <div className="promotion-countdown">
            <div className="countdown-unit">
              <div className="countdown-value">{formatTimeUnit(timeLeft.days)}</div>
              <div className="countdown-label">Day</div>
            </div>
            
            <div className="countdown-unit">
              <div className="countdown-value">{formatTimeUnit(timeLeft.hours)}</div>
              <div className="countdown-label">Hour</div>
            </div>
            
            <div className="countdown-unit">
              <div className="countdown-value">{formatTimeUnit(timeLeft.minutes)}</div>
              <div className="countdown-label">Min</div>
            </div>
            
            <div className="countdown-unit">
              <div className="countdown-value">{formatTimeUnit(timeLeft.seconds)}</div>
              <div className="countdown-label">Sec</div>
            </div>
          </div>
        )}
        
        <div className="promotion-modal-content-section">
          <p className="promotion-description">
            {promotion?.description}
          </p>
        </div>
        
        <div className="promotion-modal-actions">
          <button className="promotion-more-btn">Read More</button>
          <button className="promotion-action-btn">View your tickets</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// CSS styles
const styles = `
.promotion-modal-content {
  background-color: #1A2C38 !important;
  color: white;
  border: 1px solid #2F4553 !important;
  padding: 1.5rem !important;
  max-width: 550px !important;
}

.promotion-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.2s;
}

.promotion-modal-close:hover {
  color: white;
}

.promotion-modal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  text-align: center;
}

.promotion-modal-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.promotion-modal-icon img {
  max-width: 100%;
  max-height: 100%;
}

.promotion-default-icon {
  font-size: 4rem;
  color: #FFD700;
}

.promotion-modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
}

.promotion-countdown {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.countdown-unit {
  text-align: center;
}

.countdown-value {
  background-color: #FFD700;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.countdown-label {
  font-size: 0.75rem;
  color: #9ca3af;
}

.promotion-modal-content-section {
  margin-bottom: 1.5rem;
}

.promotion-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #e0e0e0;
  text-align: center;
}

.promotion-modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.promotion-more-btn {
  padding: 0.75rem 1.5rem;
  background-color: #2F4553;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.promotion-more-btn:hover {
  background-color: #3A566B;
}

.promotion-action-btn {
  padding: 0.75rem 1.5rem;
  background-color: #0D7E3E;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.promotion-action-btn:hover {
  background-color: #0A6731;
}

@media (max-width: 480px) {
  .promotion-countdown {
    gap: 0.5rem;
  }
  
  .countdown-value {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
  
  .promotion-modal-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default PromotionModal;
