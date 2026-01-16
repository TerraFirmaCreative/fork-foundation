const SacredGeometry = ({ className = "", opacity = 0.15 }: { className?: string; opacity?: number }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      <svg
        className="absolute top-0 left-0 w-full h-full animate-[pattern-rotate_120s_linear_infinite]"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="psychGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280 80% 55%)" />
            <stop offset="33%" stopColor="hsl(320 90% 60%)" />
            <stop offset="66%" stopColor="hsl(180 85% 55%)" />
            <stop offset="100%" stopColor="hsl(280 80% 55%)" />
          </linearGradient>
          <pattern id="flowerOfLife" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="52" r="30" fill="none" stroke="url(#psychGradient1)" strokeWidth="0.6" />
            <circle cx="60" cy="22" r="30" fill="none" stroke="url(#psychGradient1)" strokeWidth="0.6" />
            <circle cx="60" cy="82" r="30" fill="none" stroke="url(#psychGradient1)" strokeWidth="0.6" />
            <circle cx="34" cy="37" r="30" fill="none" stroke="url(#psychGradient1)" strokeWidth="0.6" />
            <circle cx="86" cy="37" r="30" fill="none" stroke="url(#psychGradient1)" strokeWidth="0.6" />
            <circle cx="34" cy="67" r="30" fill="none" stroke="url(#psychGradient1)" strokeWidth="0.6" />
            <circle cx="86" cy="67" r="30" fill="none" stroke="url(#psychGradient1)" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flowerOfLife)" />
      </svg>
    </div>
  );
};

export const MandalaDecoration = ({ className = "", size = 400 }: { className?: string; size?: number }) => {
  return (
    <svg
      className={`absolute pointer-events-none animate-[rainbow-spin_40s_linear_infinite] ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ opacity: 0.2 }}
    >
      <defs>
        <linearGradient id="mandalaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(280 80% 55%)">
            <animate attributeName="stop-color" values="hsl(280 80% 55%);hsl(320 90% 60%);hsl(180 85% 55%);hsl(280 80% 55%)" dur="10s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="hsl(320 90% 60%)">
            <animate attributeName="stop-color" values="hsl(320 90% 60%);hsl(180 85% 55%);hsl(45 95% 60%);hsl(320 90% 60%)" dur="10s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="hsl(180 85% 55%)">
            <animate attributeName="stop-color" values="hsl(180 85% 55%);hsl(45 95% 60%);hsl(280 80% 55%);hsl(180 85% 55%)" dur="10s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      
      <g transform="translate(100, 100)" stroke="url(#mandalaGradient)" fill="none" strokeWidth="0.8">
        {[20, 35, 50, 65, 80, 95].map((r) => (
          <circle key={r} cx="0" cy="0" r={r} />
        ))}
        
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
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
        
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = (i * 20 * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={50 * Math.cos(angle)}
              cy={50 * Math.sin(angle)}
              rx="18"
              ry="8"
              transform={`rotate(${i * 20})`}
            />
          );
        })}
      </g>
    </svg>
  );
};

export const FractalGrid = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity: 0.1 }}>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280 80% 55%)">
              <animate attributeName="stop-color" values="hsl(280 80% 55%);hsl(180 85% 55%);hsl(330 85% 65%);hsl(280 80% 55%)" dur="15s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(180 85% 55%)">
              <animate attributeName="stop-color" values="hsl(180 85% 55%);hsl(330 85% 65%);hsl(90 80% 50%);hsl(180 85% 55%)" dur="15s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <pattern id="hexGrid" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path
              d="M28 0 L56 17 L56 50 L28 67 L0 50 L0 17 Z M28 100 L56 83 L56 50 L28 67 L0 50 L0 83 Z"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>
    </div>
  );
};

export const SpiralPattern = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity: 0.08 }}>
      <svg className="absolute inset-0 w-full h-full animate-[rainbow-spin_90s_linear_infinite]" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(280 80% 55%)" />
            <stop offset="25%" stopColor="hsl(320 90% 60%)" />
            <stop offset="50%" stopColor="hsl(25 95% 55%)" />
            <stop offset="75%" stopColor="hsl(90 80% 50%)" />
            <stop offset="100%" stopColor="hsl(180 85% 55%)" />
          </linearGradient>
        </defs>
        <g transform="translate(200, 200)" fill="none" stroke="url(#spiralGradient)" strokeWidth="0.5">
          {Array.from({ length: 8 }).map((_, i) => {
            const points = Array.from({ length: 100 }).map((_, j) => {
              const angle = (j * 0.15) + (i * Math.PI / 4);
              const r = j * 2;
              return `${r * Math.cos(angle)},${r * Math.sin(angle)}`;
            }).join(' ');
            return <polyline key={i} points={points} />;
          })}
        </g>
      </svg>
    </div>
  );
};

export default SacredGeometry;
