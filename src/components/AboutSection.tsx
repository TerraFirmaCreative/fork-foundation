import { MandalaDecoration, FractalGrid } from "./SacredGeometry";
import LocaleLink from "./LocaleLink";

const AboutSection = () => {
  const scrollToGallery = () => {
    const el = document.getElementById("design-gallery");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />

      {/* Fractal grid background */}
      <FractalGrid />


      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/85 mb-6 font-body">
          Our Story
        </p>

        <h2 className="font-display text-3xl text-shaman-gold md:text-5xl font-medium mb-10 tracking-tight leading-tight">
          Three friends. One shared idea.
        </h2>

        <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>
            We started Cosmic Igloo because we believe yoga mats should be genuinely beautiful.
          </p>

          <p>
            Every design in our collection is an original piece of artwork, unlike anything else out there.
          </p>

          <p>
            We'd love you to join our little community.{" "}
            <LocaleLink
              to="/about"
              className="text-shaman-violet hover:text-shaman-violet/80 underline underline-offset-4 transition-colors"
            >
              About us →
            </LocaleLink>
          </p>
        </div>

        {/* Shop the Collection CTA */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToGallery}
            className="enter-cta group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-shaman-gold/40 bg-linear-to-r from-shaman-gold/10 via-shaman-violet/10 to-shaman-gold/10 hover:from-shaman-gold/20 hover:via-shaman-violet/20 hover:to-shaman-gold/20 backdrop-blur-xs shadow-[0_0_24px_-12px_hsl(var(--shaman-gold)/0.5)] hover:shadow-[0_0_36px_-8px_hsl(var(--shaman-gold)/0.7)] transition-all duration-500 hover:scale-[1.03] cursor-pointer overflow-hidden"
            aria-label="Shop the collection"
          >
            <span aria-hidden className="enter-cta-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-shaman-gold/15 to-transparent" />
            <span className="relative text-[0.7rem] sm:text-xs tracking-[0.32em] uppercase text-shaman-gold group-hover:text-foreground transition-colors duration-500 font-body font-light">
              Shop the collection
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
