import { ChevronDown } from "lucide-react";
import UspBar from "@/components/UspBar";
import heroVideo from "@/assets/hero/hero_vp9_hq.webm";

const HeroSection = () => {
  const scrollToGallery = () =>
    document
      .getElementById("design-gallery")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-svh min-h-160 w-full overflow-hidden flex flex-col">
      <video autoPlay muted loop playsInline preload="auto"
       poster="hero-poster.avif" width="1920" height="1080"
       aria-hidden="true" tabIndex={0}
       className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src={heroVideo} type="video/webm; codecs=vp9" />
      </video>

      {/* Film grain */}
      {/* <div className="absolute inset-0 w-full h-full z-2 pointer-events-none mix-blend-overlay opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20200%20200%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27noiseFilter%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%271.50%27%20numOctaves=%273%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E')] animate-[grainJitter_0.5s_steps(6)_infinite]"/> */}
      
      {/* Screen Door */}
      {/* <div className="absolute inset-0 w-full h-full z-2 opacity-20 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] bg-size-[2px_2px]"/> */}

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-1/2 bg-linear-to-t from-background from-5% via-background/70 to-transparent"/>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <span className="font-body text-[11px] md:text-xs tracking-[0.4em] uppercase text-shaman-gold mb-4">
            Cosmic Igloo
          </span>
          <h1 className="max-w-3xl text-4xl md:text-6xl uppercase font-bold lg:text-7xl tracking-tight drop-shadow-2xl drop-shadow-black">
            <span className="font-hero text-3xl md:text-5xl lg:text-6xl text-shaman-gold uppercase font-semibold">Stunning</span> mats with superior <span className="font-hero font-semibold text-shaman-gold text-3xl md:text-5xl lg:text-6xl uppercase">grip</span>
          </h1>
          <h3 className="font-body text-xl md:text-2xl lg:text-3xl text-foreground/85 mt-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
            Designed to inspire. Made to perform.          
          </h3>

          <button
            onClick={scrollToGallery}
            aria-label="Scroll to design gallery"
            className="mt-10 flex flex-col items-center gap-1.5 text-shaman-gold hover:text-shaman-gold transition-colors"
          >
            <span className="font-body text-rg tracking-[0.3em] uppercase">Explore designs</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

        <div className="pb-6 md:pb-8 space-y-4">
          <UspBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

