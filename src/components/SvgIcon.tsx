
import React, { useEffect, useState } from "react";

interface SvgIconProps {
  svgPath?: string;
  svgContent?: string;
  size?: number;
  className?: string;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ 
  svgPath, 
  svgContent, 
  size = 24, 
  className = "", 
  color = "currentColor" 
}) => {
  const [svg, setSvg] = useState<string | null>(svgContent || null);

  useEffect(() => {
    if (svgPath && !svgContent) {
      fetch(svgPath)
        .then(response => response.text())
        .then(text => {
          setSvg(text);
        })
        .catch(error => {
          console.error("Error loading SVG:", error);
        });
    }
  }, [svgPath, svgContent]);

  if (!svg && !svgContent) {
    return <div style={{ width: size, height: size }} />;
  }

  return (
    <div 
      className={`svg-icon ${className}`}
      style={{ 
        width: size, 
        height: size, 
        color: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      dangerouslySetInnerHTML={{ __html: svg || svgContent || '' }} 
    />
  );
};

export default SvgIcon;
