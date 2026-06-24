import { Button } from "@/components/ui/button";







const HeroSection = () => {
  const scrollToGallery = () =>
    document
      .getElementById("design-gallery")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden flex items-center justify-center"
      style={{
          background: "radial-gradient(circle, hsla(270, 70%, 60%, 0.82) 0%, hsla(285, 60%, 50%, 0.14) 40%, transparent 80%)",
      }}
    >
      {/* Vignette */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 45%, hsla(270, 50%, 12%, 0.6) 0%, hsla(255, 50%, 6%, 0.45) 45%, #000000 100%)",
        }}
      />

      {/* Soft floating orbs (desktop only;) */}
      <div
        className="absolute hidden md:block pointer-events-none motion-reduce:hidden aspect-square"
        style={{
          width: "100%",
          top: "33.333%",
          right: -128,
          transform: "translateY(-50%)",
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, hsla(285, 50%, 55%, 0.24) 0%, hsla(285, 50%, 55%, 0.06) 50%, transparent 100%)",
          animation: "float-orb 12s ease-in-out infinite",
          }}
      />
      <div
        className="absolute hidden md:block pointer-events-none motion-reduce:hidden aspect-square"
        style={{
          width: "100%",
          bottom: 0,
          left: "25%",
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, hsla(220, 50%, 55%, 0.2) 0%, hsla(220, 50%, 55%, 0.05) 50%, transparent 100%)",
        }}
      />

      {/* Background grid */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.06 }}
      >
        <defs>
          <radialGradient id="fractalFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(270, 70%, 90%)" stopOpacity="1" />
            <stop offset="90%" stopColor="hsl(270, 70%, 90%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(270, 70%, 90%)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g
          transform="translate(500, 500)"
          stroke="url(#fractalFade)"
          fill="none"
          strokeWidth="0.6"
        >
          {[80, 140, 210, 290, 380, 480].map((r) => (
            <circle key={r} cx="0" cy="0" r={r} />
          ))}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={80 * Math.cos(angle)}
                y1={80 * Math.sin(angle)}
                x2={480 * Math.cos(angle)}
                y2={480 * Math.sin(angle)}
              />
            );
          })}
        </g>
      </svg>


      {/* Two staggered layers create a seamless ever-expanding loop */}
        <svg
          width="100%"
          height="100%"
          viewBox="-100 -100 200 200"
          className="absolute inset-0"
          style={{
            // animation: "flower-fractal 28s linear infinite",
            // animationDelay: "-14s",
            transformOrigin: "center",
          }}
        >
          
          <g stroke="hsl(285, 60%, 65%)" fill="none" strokeWidth="0.4" style={{
            animation: "flower-fractal 28s linear infinite",
            animationDelay: "-14s",
            willChange: "opacity scale"
          }}>
            {(() => {
              const r = 20;
              const centers: Array<[number, number]> = [[0, 0]];
              for (let i = 0; i < 3; i++) {
                const a = (i * 60 * Math.PI) / 180;
                centers.push([r * Math.cos(a), r * Math.sin(a)]);
              }
              for (let i = 0; i < 3; i++) {
                const a = (i * 60 * Math.PI) / 180;
                centers.push([2 * r * Math.cos(a), 2 * r * Math.sin(a)]);
              }
              const d = r * Math.sqrt(3);
              for (let i = 0; i < 6; i++) {
                const a = ((i * 60 + 30) * Math.PI) / 180;
                centers.push([d * Math.cos(a), d * Math.sin(a)]);
              }
              return centers.map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r={r} />
              ));
            })()}
            <circle cx="0" cy="0" r="60" strokeWidth="0.3" />
            <circle cx="0" cy="0" r="64" strokeWidth="0.3" opacity="0.6" />
          </g>

          <g stroke="hsl(285, 60%, 65%)" fill="none" strokeWidth="0.4" style={{
            animation: "flower-fractal 28s linear infinite",
            animationDelay: "0s",
            willChange: "opacity scale"
          }}>
            {(() => {
              const r = 20;
              const centers: Array<[number, number]> = [[0, 0]];
              for (let i = 0; i < 6; i++) {
                const a = (i * 60 * Math.PI) / 180;
                centers.push([r * Math.cos(a), r * Math.sin(a)]);
              }
              return centers.map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r={r} />
              ));
            })()}
            <circle cx="0" cy="0" r="60" strokeWidth="0.3" />
            <circle cx="0" cy="0" r="64" strokeWidth="0.3" opacity="0.6" />
          </g>
        </svg>

      {/* CONTENT — artistic centered composition, all above the fold */}
      <div
        className="relative z-10 w-full px-6 flex flex-col items-center text-center"
        style={{ textShadow: "0 2px 18px hsla(240, 60%, 3%, 0.7)" }}
      >
        {/* Whisper-line above headline */}
        <p className="text-xs sm:text-sm tracking-[0.45em] uppercase text-shaman-gold font-body font-light">
          A warm space in the infinite
        </p>

        {/* Headline — poetic, layered */}
        <h1 className="mt-6 font-display font-normal tracking-tight leading-[1.2] pb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl overflow-visible">
          <span className="block">
            <span className="text-foreground">Beautiful</span>{" "}
            <span className="text-gradient italic relative inline-block">
              and
              <svg
                className="absolute left-0 right-0 -bottom-2 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2,8 Q50,-2 98,8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <span className="text-gradient italic inline-block leading-[1.3] pb-[0.24em] mb-[-0.24em] pr-[0.04em] overflow-visible align-baseline">
              grippy
            </span>
          </span>
          <span className="block text-gradient font-display font-medium tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] mt-2 leading-[1.15] pb-[0.12em]">
            yoga mats.
          </span>
        </h1>

        {/* Single-line invitation */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-foreground/95 font-body max-w-xl leading-relaxed">
          Designed to inspire. Made to perform.
        </p>

        {/* CTA button */}
        <button
          onClick={scrollToGallery}
          className="enter-cta group mt-12 relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-shaman-gold/40 bg-gradient-to-r from-shaman-gold/10 via-shaman-violet/10 to-shaman-gold/10 hover:from-shaman-gold/20 hover:via-shaman-violet/20 hover:to-shaman-gold/20 backdrop-blur-sm shadow-[0_0_24px_-12px_hsl(var(--shaman-gold)/0.5)] hover:shadow-[0_0_36px_-8px_hsl(var(--shaman-gold)/0.7)] transition-all duration-500 hover:scale-[1.03] cursor-pointer overflow-hidden"
          aria-label="View the collection below"
        >
          <span aria-hidden className="enter-cta-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-shaman-gold/15 to-transparent" />
          <span className="relative text-[0.7rem] sm:text-xs tracking-[0.32em] uppercase text-shaman-gold group-hover:text-foreground transition-colors duration-500 font-body font-light">
            Find your mat
          </span>
          <svg
            className="relative w-3.5 h-3.5 text-shaman-gold group-hover:text-foreground transition-colors duration-500 enter-cta-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>

      </div>


      {/* Local keyframes for the scroll cue */}
      <style>{`
        @keyframes scroll-cue {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(48px); opacity: 0; }
        }
        .animate-scroll-cue {
          animation: scroll-cue 2.4s ease-in-out infinite;
        }

        @keyframes enter-cta-shimmer {
          0% { transform: translateX(-100%); }
          60%, 100% { transform: translateX(100%); }
        }
        @keyframes enter-cta-bob {

          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(2px); }
        }
        .enter-cta-shimmer { animation: enter-cta-shimmer 4.5s ease-in-out infinite; }
        .enter-cta-arrow { animation: enter-cta-bob 2.4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;

