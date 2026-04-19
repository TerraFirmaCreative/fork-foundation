import { Button } from "@/components/ui/button";
import { MandalaDecoration } from "./SacredGeometry";

const AffiliateSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      <MandalaDecoration className="-top-32 -left-32" size={400} />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
          Partner With Us
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6">
          <span className="text-foreground">Become an </span>
          <span className="text-gradient italic">Affiliate</span>
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-4">
          Share our mats with your friends and family and earn every time someone buys through your link.
        </p>
        <div className="mb-10" />
        <Button
          variant="cta"
          size="lg"
          className="font-body font-medium tracking-wide glow-effect"
          onClick={() => window.location.href = "/contact"}
        >
          Let's Talk
        </Button>
      </div>
    </section>
  );
};

export default AffiliateSection;
