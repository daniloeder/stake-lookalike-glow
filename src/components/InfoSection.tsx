
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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

// CSS styles
const styles = `
.info-section {
  background-color: #0F212E;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 2rem 0;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.info-content {
  color: #9CA3AF;
  font-size: 0.875rem;
  line-height: 1.5;
}

.info-content.collapsed {
  max-height: 150px;
  overflow: hidden;
  position: relative;
}

.info-content.collapsed::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, transparent, #0F212E);
}

.info-content.expanded {
  max-height: none;
}

.expand-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #3B82F6;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-top: 1rem;
}

.expand-button:hover {
  text-decoration: underline;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default InfoSection;
