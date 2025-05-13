
interface InfoSectionProps {
  title: string;
  content: string | React.ReactNode;
}

const InfoSection = ({ title, content }: InfoSectionProps) => {
  return (
    <div className="info-section">
      <h2 className="info-title">{title}</h2>
      
      {typeof content === "string" ? (
        <div className="info-content">
          <div className="info-text" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ) : (
        <div className="info-content">
          {content}
        </div>
      )}
    </div>
  );
};

// CSS styles
const styles = `
.info-section {
  padding: 2rem;
  background-color: #0F1923;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.info-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.info-content {
  display: flex;
  gap: 2rem;
}

.info-text {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.6;
}

.info-text p {
  margin-bottom: 1rem;
}

.info-text strong {
  color: white;
  font-weight: 600;
}

.info-text a {
  color: #1A9AEF;
  text-decoration: none;
}

.info-text a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .info-content {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .info-section {
    padding: 1.5rem;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default InfoSection;
