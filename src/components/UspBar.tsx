const USPS = [
  "Free worldwide shipping",
  "Original artwork, made to order",
  "Printed & dispatched in the USA",
  "Secure checkout",
];

/** Slow, continuously sliding trust strip. */
const UspBar = () => {
  const track = [...USPS, ...USPS];

  return (
    <div className="relative w-full overflow-hidden group/usp">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-black to-transparent" />

      <div className="usp-marquee flex w-max items-center will-change-transform">
        {track.map((usp, i) => (
          <div key={`${usp}-${i}`} className="flex items-center">
            <span className="font-body text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-foreground/70 whitespace-nowrap">
              {usp}
            </span>
            <span
              aria-hidden="true"
              className="mx-6 md:mx-9 h-1 w-1 rounded-full bg-shaman-gold/60"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes usp-drift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .usp-marquee { animation: usp-drift 38s linear infinite; }
        .group\\/usp:hover .usp-marquee { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .usp-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default UspBar;
