import yogiImage from "@/assets/yogi-mat-benefits.jpg";
import { MandalaDecoration } from "./SacredGeometry";

const benefits = [
  {
    title: "Premium Natural Rubber",
    description: "Sustainably harvested tree rubber provides superior grip and cushioning that synthetic mats simply can't match."
  },
  {
    title: "Non-Slip Surface",
    description: "Our micro-texture technology keeps you grounded in every pose, even during the most intense hot yoga sessions."
  },
  {
    title: "Eco-Friendly Inks",
    description: "Water-based, non-toxic inks that are safe for you and the planet. Vibrant colors that won't fade or crack."
  },
  {
    title: "Perfect Thickness",
    description: "5mm of optimal cushioning protects your joints while maintaining stability for balance poses."
  },
  {
    title: "Easy Care",
    description: "Machine washable and quick-drying. Your mat stays fresh and hygienic practice after practice."
  },
  {
    title: "Built to Last",
    description: "Professional-grade durability backed by our 2-year warranty. This mat grows with your practice."
  }
];

const MatBenefits = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Sacred geometry decoration */}
      <MandalaDecoration className="-bottom-32 -right-32" size={350} />
      
      {/* Orbs - smaller */}
      <div 
        className="floating-orb w-48 h-48 -top-24 left-1/4 bg-shaman-magenta/08"
        style={{ animationDelay: "2s" }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - more compact */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-shaman-gold/70 mb-3 font-body">
            The Mat
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 tracking-tight">
            <span className="text-foreground">Professional quality.</span>{" "}
            <span className="text-gradient italic">Your unique design.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Premium materials that serious practitioners demand—with a design that's entirely yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative group order-2 lg:order-1">
            {/* Glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-br from-shaman-violet/20 via-shaman-magenta/15 to-shaman-gold/10 rounded-lg blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            
            <div className="relative rounded-md overflow-hidden">
              <img
                src={yogiImage}
                alt="Yogi practicing on a custom-designed yoga mat in nature"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-card/40 border border-border/30 hover:border-shaman-gold/30 transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-shaman-violet/20 to-shaman-magenta/20 flex items-center justify-center mb-2">
                    <span className="text-shaman-gold font-display text-xs">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-sm font-medium text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA - more compact */}
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-shaman-violet/10 via-shaman-magenta/10 to-shaman-gold/10 border border-border/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="font-display text-base text-foreground">Ready to design yours?</p>
                  <p className="text-xs text-muted-foreground font-body">Starting at $89 · Free worldwide shipping</p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-shaman-gold via-shaman-ember to-shaman-gold bg-[length:200%_100%] text-background font-body text-sm font-medium rounded-md hover:bg-right transition-all duration-500"
                >
                  Start Creating
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatBenefits;
