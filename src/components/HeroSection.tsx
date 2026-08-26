import {
  lifestylePhotos,
  newLifestylePhotos,
} from "@/lib/lifestylePhotos";
import { shopifyImageUrl, shopifySrcSet } from "@/lib/imageUtils";

// Product proof imagery — all existing site photography.
const heroMain = newLifestylePhotos[2]; // mandala mat on a forest trail
const heroDetail = newLifestylePhotos[4]; // botanical artwork / suede texture close up
const heroPractice = lifestylePhotos[1]; // warrior pose on a mandala mat








const HeroSection = () => {
  const scrollToGallery = () =>
    document
      .getElementById("design-gallery")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black flex items-center justify-center pt-16 pb-20 md:pt-12 md:pb-24">
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

      {/* LAYER 2 — Distant violet nebula (static; hidden on mobile to save full-screen blur repaint) */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 22% 28%, hsla(275, 70%, 45%, 0.35) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 78% 65%, hsla(290, 60%, 40%, 0.28) 0%, transparent 60%)",
          filter: "blur(20px)",
          opacity: 0.45,
        }}
      />

      {/* LAYER 3 — Soft floating orbs (desktop only; blur(80px) on huge layers is too heavy on mobile) */}
      <div
        className="floating-orb w-[700px] h-[700px] -top-40 -left-40 bg-shaman-violet/20 hidden md:block motion-reduce:animate-none"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="floating-orb w-[500px] h-[500px] top-1/3 -right-32 bg-shaman-magenta/15 hidden md:block motion-reduce:animate-none"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="floating-orb w-[420px] h-[420px] bottom-0 left-1/4 bg-shaman-teal/12 hidden md:block motion-reduce:animate-none"
        style={{ animationDelay: "9s" }}
      />

      {/* LAYER 4 — Far fractal sacred geometry (desktop only) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
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

      {/* LAYER 5 — Flower of Life (desktop only; two 1400×1400 SVG layers w/ infinite scale+rotate) */}
      <div
        className="absolute left-1/2 top-1/2 pointer-events-none hidden md:block motion-reduce:hidden"
        style={{
          width: 1400,
          height: 1400,
          marginLeft: -700,
          marginTop: -700,
        }}
      >
        {/* Two staggered layers create a seamless ever-expanding loop */}
        <svg
          width="100%"
          height="100%"
          viewBox="-100 -100 200 200"
          className="absolute inset-0"
          style={{
            animation: "flower-fractal 28s linear infinite",
            transformOrigin: "center",
          }}
        >
          <defs>
            <radialGradient id="folGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(45, 80%, 75%)" stopOpacity="1" />
              <stop offset="60%" stopColor="hsl(285, 60%, 65%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(270, 70%, 70%)" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          <g stroke="url(#folGradient)" fill="none" strokeWidth="0.4">
            {(() => {
              const r = 20;
              const centers: Array<[number, number]> = [[0, 0]];
              for (let i = 0; i < 6; i++) {
                const a = (i * 60 * Math.PI) / 180;
                centers.push([r * Math.cos(a), r * Math.sin(a)]);
              }
              for (let i = 0; i < 6; i++) {
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
            <circle cx="0" cy="0" r="60" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="64" strokeWidth="0.3" opacity="0.6" />
          </g>
        </svg>
        <svg
          width="100%"
          height="100%"
          viewBox="-100 -100 200 200"
          className="absolute inset-0"
          style={{
            animation: "flower-fractal 28s linear infinite",
            animationDelay: "-14s",
            transformOrigin: "center",
          }}
        >
          <use href="#folGradient" />
          <g stroke="url(#folGradient)" fill="none" strokeWidth="0.4">
            {(() => {
              const r = 20;
              const centers: Array<[number, number]> = [[0, 0]];
              for (let i = 0; i < 6; i++) {
                const a = (i * 60 * Math.PI) / 180;
                centers.push([r * Math.cos(a), r * Math.sin(a)]);
              }
              for (let i = 0; i < 6; i++) {
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
            <circle cx="0" cy="0" r="60" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="64" strokeWidth="0.3" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* LAYER 6 — Inner mandala (counter-rotating; desktop only) */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block motion-reduce:hidden"
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

      {/* Readability scrim — darkens busy backdrop behind text for dim phone screens */}
      <div
        className="absolute inset-0 pointer-events-none z-[5] md:hidden"
        style={{
          background:
            "radial-gradient(ellipse 95% 60% at 50% 55%, hsla(240, 60%, 3%, 0.55) 0%, hsla(240, 60%, 3%, 0.35) 50%, transparent 80%)",
        }}
      />

      {/* CONTENT — conversion-focused split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* LEFT — copy, CTA, trust */}
        <div
          className="flex flex-col text-center lg:text-left"
          style={{ textShadow: "0 2px 18px hsla(240, 60%, 3%, 0.7)" }}
        >
          <span className="inline-flex items-center justify-center lg:justify-start gap-3 text-shaman-gold font-body font-light text-[0.65rem] sm:text-xs tracking-[0.38em] uppercase">
            <span aria-hidden className="hidden lg:block h-px w-8 bg-shaman-gold/50" />
            A warm space in the infinite
          </span>

          <h1 className="mt-4 font-display font-normal tracking-tight leading-[1.08] text-[2.7rem] sm:text-[3.4rem] lg:text-[4.4rem] [@media(min-width:1024px)_and_(max-height:820px)]:text-[3.4rem] text-balance pb-1">
            <span className="text-gradient">Beautiful and </span>
            <span className="text-gradient italic">grippy</span>
            <br className="hidden sm:block" />
            <span className="text-gradient"> yoga mats.</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-foreground/90 font-body leading-relaxed max-w-md mx-auto lg:mx-0">
            Designed to inspire. Made to perform. Original artwork, printed for
            your practice.
          </p>

          {/* CTA + shipping reassurance */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <button
              onClick={scrollToGallery}
              aria-label="View the collection below"
              className="enter-cta group relative inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-shaman-gold text-background font-body font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.03] shadow-[0_0_30px_-10px_hsl(var(--shaman-gold)/0.6)] hover:shadow-[0_0_40px_-6px_hsl(var(--shaman-gold)/0.8)]"
            >
              <span aria-hidden className="enter-cta-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/20 to-transparent" />
              <span className="relative text-sm tracking-[0.22em] uppercase">
                Find your mat
              </span>
              <svg
                className="relative w-4 h-4 enter-cta-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>

            <div className="flex flex-col items-center sm:items-start">
              <span className="font-body text-xs tracking-[0.18em] uppercase text-shaman-gold/90">
                Free worldwide shipping
              </span>
              <span className="font-body text-xs text-foreground/50">
                Made to order, dispatched from the USA
              </span>
            </div>
          </div>

          {/* USP grid */}
          <ul className="mt-9 pt-7 border-t border-foreground/10 grid grid-cols-2 gap-x-8 gap-y-5 max-w-lg mx-auto lg:mx-0 text-left">
            {[
              "Original artwork, made to order",
              "Printed & dispatched in the USA",
              "Secure checkout",
              "Premium grip, natural rubber base",
            ].map((usp) => (
              <li key={usp} className="flex items-start gap-2.5">
                <svg
                  aria-hidden
                  className="mt-0.5 w-4 h-4 shrink-0 text-shaman-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body text-[0.68rem] tracking-[0.14em] uppercase leading-tight text-foreground/60">
                  {usp}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — product proof collage (existing site photography) */}
        <div className="relative hidden lg:flex justify-end">
          <div className="relative w-[82%] aspect-[3/4] rounded-2xl overflow-hidden border border-foreground/15 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              src={shopifyImageUrl(heroMain.src, 800)}
              srcSet={shopifySrcSet(heroMain.src, [400, 600, 800])}
              sizes="(min-width: 1024px) 420px, 90vw"
              alt={heroMain.alt}
              width={600}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 p-4 rounded-xl bg-background/60 backdrop-blur-md border border-foreground/10">
              <p className="font-body text-[0.6rem] tracking-[0.24em] uppercase text-shaman-gold mb-1">
                Suede microfibre surface
              </p>
              <p className="font-body text-sm text-foreground/90">
                Grippier as you warm up, on a natural rubber base that stays put.
              </p>
            </div>
          </div>

          <div className="absolute -left-6 top-1/4 w-44 h-44 rounded-2xl overflow-hidden border border-shaman-gold/50 shadow-xl -rotate-6">
            <img
              src={shopifyImageUrl(heroDetail.src, 400)}
              alt={heroDetail.alt}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-2 w-36 h-36 rounded-full overflow-hidden border border-shaman-teal/60 shadow-xl">
            <img
              src={shopifyImageUrl(heroPractice.src, 400)}
              alt={heroPractice.alt}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
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

