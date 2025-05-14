
import React from 'react';

interface SvgIconProps {
  svgContent: string;
  className?: string;
  size?: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({ svgContent, className = "", size = 20 }) => {
  return (
    <div 
      className={`icon-container ${className}`} 
      style={{ width: `${size}px`, height: `${size}px` }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SvgIcon;
