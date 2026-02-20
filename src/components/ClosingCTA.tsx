import { Button } from "@/components/ui/button";
import { MandalaDecoration } from "./SacredGeometry";

const ClosingCTA = () => {
  const scrollToCollection = () => {
    const gallery = document.getElementById("design-gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />

      <MandalaDecoration className="-top-40 -right-40" size={500} />
      <MandalaDecoration className="-bottom-40 -left-40" size={500} />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-8 font-body">
          Find Your Perfect Mat
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-4 leading-tight">
          <span className="text-foreground">Beautiful, unique, artistic</span>
          <br />
          <span className="text-gradient italic">and grippy</span>
          <span className="text-foreground italic"> yoga mats.</span>
        </h2>
        <p className="text-lg text-foreground/60 font-body leading-relaxed mt-8 mb-10">
          Mats so beautiful that you want to leave them out to admire.
        </p>
        <Button
          variant="cta"
          size="lg"
          className="font-body font-medium tracking-wide glow-effect"
          onClick={scrollToCollection}
        >
          View the Collection
        </Button>
        <div className="mt-12 space-y-1">
          <p className="text-sm text-foreground/40 font-body">
            Premium natural rubber · Suede microfibre surface · Non-slip
          </p>
          <p className="text-sm text-foreground/40 font-body">
            Delivery included in the price globally
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
