
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./InfoSection.css";

interface InfoSectionProps {
  title: string;
  content: string;
}

const InfoSection = ({ title, content }: InfoSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="info-section">
      <h2 className="info-title">{title}</h2>
      <div 
        className={`info-content ${isExpanded ? 'expanded' : 'collapsed'}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <button 
        className="expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            <span>Show less</span>
            <ChevronUp size={16} />
          </>
        ) : (
          <>
            <span>Show more</span>
            <ChevronDown size={16} />
          </>
        )}
      </button>
    </div>
  );
};

export default InfoSection;
