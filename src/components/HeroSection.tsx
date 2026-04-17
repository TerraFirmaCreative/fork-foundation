import { Button } from "@/components/ui/button";
import cosmicIglooLogo from "@/assets/cosmic-igloo-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center py-24 px-6 overflow-hidden bg-black">
      {/* LAYER 1 — True black space base with subtle violet depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 40%, hsla(270, 50%, 12%, 0.55) 0%, hsla(255, 50%, 6%, 0.6) 45%, #000000 100%)",
        }}
      />

      {/* LAYER 1b — Dense starfield covering the whole hero */}
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

      {/* LAYER 4 — Far fractal sacred geometry (very faint, large) */}
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

      {/* LAYER 5 — Mid mandala (medium opacity, slow rotation) */}
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

      {/* LAYER 6 — Inner mandala (closer, brighter, counter-rotating) */}
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

      {/* LAYER 7 — Soft glow halo behind the logo */}
      <div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, hsla(270, 70%, 60%, 0.28) 0%, hsla(285, 60%, 50%, 0.12) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* LAYER 8 — Vignette to deepen edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, hsla(240, 60%, 4%, 0.6) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <img
          src={cosmicIglooLogo}
          alt="Cosmic Igloo — a warm space in the infinite"
          className="mx-auto mb-12 w-72 md:w-96 h-auto animate-fade-in drop-shadow-[0_0_40px_hsla(270,70%,60%,0.4)]"
          loading="eager"
        />

        <h1 className="font-display text-4xl md:text-6xl font-medium mb-8 tracking-tight leading-tight">
          <span className="text-foreground">Beautiful </span>
          <span className="text-gradient italic">
            <span className="underline decoration-shaman-gold decoration-2 underline-offset-4">
              and
            </span>{" "}
            grippy
          </span>
          <span className="text-foreground/70 italic"> yoga mats.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground/80 mb-14 font-body font-normal max-w-2xl mx-auto leading-[1.8] md:whitespace-nowrap">
          Designed to inspire and made to perform. Simple as that.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button
            variant="cta"
            size="xl"
            className="group font-body font-medium tracking-wide glow-effect"
            onClick={() =>
              document
                .getElementById("design-gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore the Collection
          </Button>
        </div>

        <p className="text-base md:text-[1.35rem] text-muted-foreground/70 font-body whitespace-nowrap">
          Premium natural rubber · Suede top · Non-slip
        </p>
        <p className="text-base md:text-[1.35rem] text-muted-foreground/70 font-body mt-2">
          Free shipping on all mats
        </p>
        <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground/40 font-body mt-3">
          Made in the USA
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
