import { Button } from "@/components/ui/button";


const HeroSection = () => {
  const scrollToGallery = () =>
    document
      .getElementById("design-gallery")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* LAYER 1 — True black space base with subtle violet depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 45%, hsla(270, 50%, 12%, 0.6) 0%, hsla(255, 50%, 6%, 0.65) 45%, #000000 100%)",
        }}
      />

      {/* LAYER 1b — Dense starfield */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(1px 1px at 8% 12%, hsla(45, 80%, 85%, 0.9), transparent 60%)",
            "radial-gradient(1px 1px at 18% 42%, hsla(0, 0%, 100%, 0.7), transparent 60%)",
            "radial-gradient(1.5px 1.5px at 27% 22%, hsla(270, 70%, 92%, 0.85), transparent 60%)",
            "radial-gradient(1px 1px at 36% 68%, hsla(0, 0%, 100%, 0.6), transparent 60%)",
            "radial-gradient(1px 1px at 44% 14%, hsla(45, 80%, 85%, 0.75), transparent 60%)",
            "radial-gradient(1.5px 1.5px at 53% 84%, hsla(220, 70%, 92%, 0.7), transparent 60%)",
            "radial-gradient(1px 1px at 62% 32%, hsla(0, 0%, 100%, 0.65), transparent 60%)",
            "radial-gradient(1px 1px at 71% 58%, hsla(270, 70%, 92%, 0.6), transparent 60%)",
            "radial-gradient(1.5px 1.5px at 79% 18%, hsla(45, 80%, 85%, 0.8), transparent 60%)",
            "radial-gradient(1px 1px at 86% 74%, hsla(0, 0%, 100%, 0.55), transparent 60%)",
            "radial-gradient(1px 1px at 93% 38%, hsla(220, 70%, 92%, 0.65), transparent 60%)",
            "radial-gradient(1px 1px at 12% 88%, hsla(45, 80%, 85%, 0.6), transparent 60%)",
            "radial-gradient(1px 1px at 48% 92%, hsla(0, 0%, 100%, 0.55), transparent 60%)",
            "radial-gradient(1px 1px at 66% 6%, hsla(270, 70%, 92%, 0.6), transparent 60%)",
          ].join(", "),
          backgroundSize: "1100px 1100px",
          backgroundRepeat: "repeat",
          opacity: 0.95,
        }}
      />

      {/* LAYER 2 — Distant violet nebula */}
      <div
        className="absolute inset-0 pointer-events-none animate-pulse-glow"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 22% 28%, hsla(275, 70%, 45%, 0.35) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 78% 65%, hsla(290, 60%, 40%, 0.28) 0%, transparent 60%)",
          filter: "blur(20px)",
        }}
      />

      {/* LAYER 3 — Soft floating orbs */}
      <div
        className="floating-orb w-[700px] h-[700px] -top-40 -left-40 bg-shaman-violet/20"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="floating-orb w-[500px] h-[500px] top-1/3 -right-32 bg-shaman-magenta/15"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="floating-orb w-[420px] h-[420px] bottom-0 left-1/4 bg-shaman-teal/12"
        style={{ animationDelay: "9s" }}
      />

      {/* LAYER 4 — Far fractal sacred geometry */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.06 }}
      >
        <defs>
          <radialGradient id="fractalFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(270, 70%, 75%)" stopOpacity="1" />
            <stop offset="70%" stopColor="hsl(270, 70%, 75%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(270, 70%, 75%)" stopOpacity="0" />
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

      {/* LAYER 5 — Mid mandala (slow rotation) */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        width={900}
        height={900}
        viewBox="0 0 200 200"
        style={{
          opacity: 0.09,
          animation: "mandala-spin 180s linear infinite",
        }}
      >
        <defs>
          <linearGradient id="midMandala" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(270, 70%, 70%)" />
            <stop offset="50%" stopColor="hsl(285, 60%, 60%)" />
            <stop offset="100%" stopColor="hsl(45, 75%, 70%)" />
          </linearGradient>
        </defs>
        <g
          transform="translate(100, 100)"
          stroke="url(#midMandala)"
          fill="none"
          strokeWidth="0.4"
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            return (
              <ellipse
                key={i}
                cx={50 * Math.cos(angle)}
                cy={50 * Math.sin(angle)}
                rx="22"
                ry="10"
                transform={`rotate(${i * 15})`}
              />
            );
          })}
          {[30, 50, 70, 90].map((r) => (
            <circle key={r} cx="0" cy="0" r={r} />
          ))}
        </g>
      </svg>

      {/* LAYER 6 — Inner mandala (counter-rotating) */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        width={520}
        height={520}
        viewBox="0 0 200 200"
        style={{
          opacity: 0.14,
          animation: "mandala-spin-reverse 240s linear infinite",
        }}
      >
        <defs>
          <linearGradient id="innerMandala" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 80%, 75%)" />
            <stop offset="100%" stopColor="hsl(270, 70%, 75%)" />
          </linearGradient>
        </defs>
        <g
          transform="translate(100, 100)"
          stroke="url(#innerMandala)"
          fill="none"
          strokeWidth="0.3"
        >
          {[20, 35, 55, 80].map((r) => (
            <circle key={r} cx="0" cy="0" r={r} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={20 * Math.cos(angle)}
                y1={20 * Math.sin(angle)}
                x2={80 * Math.cos(angle)}
                y2={80 * Math.sin(angle)}
              />
            );
          })}
        </g>
      </svg>

      {/* LAYER 7 — Soft glow halo behind logo */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 560,
          height: 560,
          background:
            "radial-gradient(circle, hsla(270, 70%, 60%, 0.32) 0%, hsla(285, 60%, 50%, 0.14) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* LAYER 8 — Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, hsla(240, 60%, 4%, 0.7) 100%)",
        }}
      />

      {/* CONTENT — artistic centered composition, all above the fold */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center">
        {/* Whisper-line above headline */}
        <p className="text-xs sm:text-sm tracking-[0.45em] uppercase text-shaman-gold/75 font-body font-light">
          A warm space in the infinite
        </p>

        {/* Headline — poetic, layered */}
        <h1 className="mt-6 font-display font-normal tracking-tight leading-[1.2] pb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl overflow-visible">
          <span className="block">
            <span className="text-foreground/90">Beautiful</span>{" "}
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
          <span className="block text-foreground/60 italic font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3">
            yoga mats.
          </span>
        </h1>

        {/* Single-line invitation */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-muted-foreground/80 font-body max-w-xl leading-relaxed">
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
            Enter the collection
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

