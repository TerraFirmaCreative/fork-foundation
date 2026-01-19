const SacredGeometry = ({ className = "", opacity = 0.08 }: { className?: string; opacity?: number }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      {/* Flower of Life Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="flowerOfLife" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
            {/* Central circle */}
            <circle cx="60" cy="52" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {/* Surrounding circles */}
            <circle cx="60" cy="22" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="60" cy="82" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="34" cy="37" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="86" cy="37" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="34" cy="67" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="86" cy="67" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          
          <radialGradient id="fadeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#flowerOfLife)" className="text-primary" mask="url(#fadeMask)" />
      </svg>
    </div>
  );
};

export const MandalaDecoration = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ opacity: 0.06 }}
    >
      <defs>
        <linearGradient id="mandalaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--shaman-violet))" />
          <stop offset="50%" stopColor="hsl(var(--shaman-magenta))" />
          <stop offset="100%" stopColor="hsl(var(--shaman-teal))" />
        </linearGradient>
      </defs>
      
      <g transform="translate(100, 100)" stroke="url(#mandalaGradient)" fill="none" strokeWidth="0.5">
        {/* Concentric circles */}
        {[20, 35, 50, 65, 80, 95].map((r) => (
          <circle key={r} cx="0" cy="0" r={r} />
        ))}
        
        {/* Radial lines */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={20 * Math.cos(angle)}
              y1={20 * Math.sin(angle)}
              x2={95 * Math.cos(angle)}
              y2={95 * Math.sin(angle)}
            />
          );
        })}
        
        {/* Inner petals */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={45 * Math.cos(angle)}
              cy={45 * Math.sin(angle)}
              rx="15"
              ry="8"
              transform={`rotate(${i * 30})`}
            />
          );
        })}
      </g>
    </svg>
  );
};

export const FractalGrid = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity: 0.04 }}>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hexGrid" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path
              d="M28 0 L56 17 L56 50 L28 67 L0 50 L0 17 Z M28 100 L56 83 L56 50 L28 67 L0 50 L0 83 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" className="text-shaman-violet" />
      </svg>
    </div>
  );
};

export default SacredGeometry;
