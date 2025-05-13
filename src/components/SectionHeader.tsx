
import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

// CSS styles
const styles = `
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.section-title {
  display: flex;
  align-items: center;
}

.section-icon {
  margin-right: 0.5rem;
  font-size: 1.25rem;
  color: white;
  display: flex;
  align-items: center;
}

.section-title h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.nav-arrows {
  display: flex;
  gap: 0.5rem;
}

.nav-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border: 1px solid #374151;
  border-radius: 9999px;
  background-color: #17242D;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}

.nav-arrow:hover {
  background-color: #0F1923;
  color: white;
}

.arrow-icon {
  height: 1rem;
  width: 1rem;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default SectionHeader;
