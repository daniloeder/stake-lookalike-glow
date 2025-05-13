
interface ProviderLogoProps {
  name: string;
  image: string;
}

const ProviderLogo = ({ name, image }: ProviderLogoProps) => {
  return (
    <div className="provider-logo-container">
      <img src={image} alt={name} className="provider-logo-image" />
    </div>
  );
};

// CSS styles
const styles = `
.provider-logo-container {
  background-color: #213743;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s, background-color 0.2s;
  cursor: pointer;
  min-height: 80px;
}

.provider-logo-container:hover {
  transform: translateY(-5px);
  background-color: #2A4959;
}

.provider-logo-image {
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default ProviderLogo;
