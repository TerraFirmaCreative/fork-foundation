import React from "react";

interface SacredGeometryProps {
  className?: string;
  opacity?: number;
}

// Subtle geometric pattern - now much lighter
const SacredGeometry: React.FC<SacredGeometryProps> = ({ 
  className = "", 
  opacity = 0.03 
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="flowerOfLife"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Simple circular pattern */}
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="20" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#flowerOfLife)" className="text-terra-sand" />
    </svg>
  );
};

interface MandalaDecorationProps {
  className?: string;
  size?: number;
}

// Softer mandala decoration
export const MandalaDecoration: React.FC<MandalaDecorationProps> = ({ 
  className = "", 
  size = 400 
}) => {
  return (
    <svg
      className={`absolute pointer-events-none opacity-[0.03] ${className}`}
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mandalaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(38, 30%, 55%)" />
          <stop offset="100%" stopColor="hsl(140, 18%, 40%)" />
        </linearGradient>
      </defs>
      
      <g stroke="url(#mandalaGradient)" fill="none" strokeWidth="0.5">
        {/* Simple concentric circles */}
        <circle cx="200" cy="200" r="50" />
        <circle cx="200" cy="200" r="100" />
        <circle cx="200" cy="200" r="150" />
        <circle cx="200" cy="200" r="190" />
      </g>
    </svg>
  );
};

interface FractalGridProps {
  className?: string;
}

// Minimal grid pattern
export const FractalGrid: React.FC<FractalGridProps> = ({ className = "" }) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none opacity-[0.02] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="subtleGrid"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M30 0 L60 30 L30 60 L0 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#subtleGrid)" className="text-terra-stone" />
    </svg>
  );
};

export default SacredGeometry;
