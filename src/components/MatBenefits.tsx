import { MandalaDecoration } from "./SacredGeometry";

const benefits = [
  {
    title: "Natural Rubber Base",
    description: "Stable, grounded support that stays in place on any surface."
  },
  {
    title: "Microfiber Suede Surface",
    description: "Soft underfoot, responsive to movement, and designed to grip as your practice warms."
  },
  {
    title: "Balanced Thickness",
    description: "A low-profile cushion that supports joints while keeping you connected to the floor."
  },
  {
    title: "Edge-to-Edge Print",
    description: "High-resolution, full-coverage artwork that brings each design to life."
  },
  {
    title: "Lightweight & Durable",
    description: "Easy to carry, made to last, and designed for regular practice."
  }
];

const MatBenefits = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      <MandalaDecoration className="-bottom-48 -right-48" size={500} />
      
      <div 
        className="floating-orb w-72 h-72 -top-36 left-1/4 bg-shaman-teal/08"
        style={{ animationDelay: "3s" }}
      />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            The Mat
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4 tracking-tight leading-tight">
            <span className="text-foreground">Beautiful design.</span>
            <span className="hidden md:inline"> </span>
            <span className="block md:inline text-gradient italic">Built for practice.</span>
          </h2>
        </div>
        
        {/* Benefits List - Centered */}
        <div className="grid grid-cols-1 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-4 group"
            >
              <div className="w-1 rounded-full bg-gradient-to-b from-shaman-violet/40 via-shaman-magenta/40 to-shaman-gold/40 group-hover:from-shaman-violet group-hover:via-shaman-magenta group-hover:to-shaman-gold transition-all duration-300" />
              <div className="flex-1">
                <h3 className="font-display text-base font-medium text-foreground mb-0.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatBenefits;
