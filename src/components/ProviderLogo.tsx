
import "./ProviderLogo.css";

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

export default ProviderLogo;
