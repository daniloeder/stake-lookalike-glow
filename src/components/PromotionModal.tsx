
import { useState, useEffect, ReactNode } from "react";
import { X, Clock } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import "./PromotionModal.css";

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

export default PromotionModal;
