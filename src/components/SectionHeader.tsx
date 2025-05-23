
import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./SectionHeader.css";

interface SectionHeaderProps {
  title: string;
  icon?: ReactNode;
  showNavigation?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
}

const SectionHeader = ({ 
  title, 
  icon, 
  showNavigation = true,
  onPrevious = () => {}, 
  onNext = () => {} 
}: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <div className="section-title">
        {icon && <span className="section-icon">{icon}</span>}
        <h2>{title}</h2>
      </div>
      
      {showNavigation && (
        <div className="nav-arrows">
          <button className="nav-arrow" onClick={onPrevious}>
            <ChevronLeft className="arrow-icon" />
          </button>
          <button className="nav-arrow" onClick={onNext}>
            <ChevronRight className="arrow-icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
