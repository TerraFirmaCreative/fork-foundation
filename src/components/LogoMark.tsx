type LogoMarkProps = {
  className?: string;
};

const LogoMark = ({ className = "w-12 h-12 md:w-14 md:h-14" }: LogoMarkProps) => {
  const petals = Array.from({ length: 6 }, (_, index) => {
    const angle = (Math.PI / 3) * index;
    return {
      x: 32 + Math.cos(angle) * 10,
      y: 32 + Math.sin(angle) * 10,
    };
  });

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className={`${className} shrink-0 text-shaman-gold`}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="0.65" opacity="0.72">
        <circle cx="32" cy="32" r="10" />
        {petals.map((petal, index) => (
          <circle key={index} cx={petal.x} cy={petal.y} r="10" />
        ))}
        <circle cx="32" cy="32" r="22" opacity="0.48" />
        <circle cx="32" cy="32" r="27" opacity="0.28" />
        {Array.from({ length: 12 }, (_, index) => {
          const angle = (Math.PI / 6) * index;
          return (
            <line
              key={index}
              x1={32 + Math.cos(angle) * 6}
              y1={32 + Math.sin(angle) * 6}
              x2={32 + Math.cos(angle) * 27}
              y2={32 + Math.sin(angle) * 27}
              opacity="0.25"
            />
          );
        })}
      </g>
      <circle cx="32" cy="32" r="2.2" fill="currentColor" opacity="0.9" />
    </svg>
  );
};

export default LogoMark;