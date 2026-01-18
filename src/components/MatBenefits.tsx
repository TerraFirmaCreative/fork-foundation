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
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Sacred geometry decoration */}
      <MandalaDecoration className="-bottom-48 -right-48" size={500} />
      
      {/* Orbs */}
      <div 
        className="floating-orb w-80 h-80 -top-40 left-1/4 bg-shaman-magenta/08"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="floating-orb w-56 h-56 bottom-20 -left-28 bg-shaman-teal/10"
        style={{ animationDelay: "7s" }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
            The Mat
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            <span className="text-foreground">Professional quality.</span>
            <br />
            <span className="text-gradient italic">Your unique design.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Every mat is handcrafted with premium materials that serious practitioners demand—now 
            with a design that's entirely yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group order-2 lg:order-1">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-shaman-violet/25 via-shaman-magenta/20 to-shaman-gold/15 rounded-lg blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            
            <div className="relative rounded-md overflow-hidden">
              <img
                src={yogiImage}
                alt="Yogi practicing on a custom-designed yoga mat"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            
            {/* Feature callout */}
            <div className="absolute -bottom-4 -right-4 left-16 p-5 bg-card/95 backdrop-blur-sm border border-border/40 rounded-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-shaman-gold/30 to-shaman-ember/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-shaman-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-sm font-medium text-foreground">Studio-Grade Quality</p>
                  <p className="text-xs text-muted-foreground font-body">Trusted by 10,000+ yoga instructors worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-lg bg-card/40 border border-border/30 hover:border-shaman-gold/30 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shaman-violet/20 to-shaman-magenta/20 flex items-center justify-center mb-3">
                    <span className="text-shaman-gold font-display text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-base font-medium text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-shaman-violet/10 via-shaman-magenta/10 to-shaman-gold/10 border border-border/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-display text-lg text-foreground">Ready to design yours?</p>
                  <p className="text-sm text-muted-foreground font-body">Starting at $89 · Free worldwide shipping</p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-shaman-gold via-shaman-ember to-shaman-gold bg-[length:200%_100%] text-background font-body text-sm font-medium rounded-md hover:bg-right transition-all duration-500"
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
