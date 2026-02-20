import { FractalGrid } from "./SacredGeometry";

const steps = [
  {
    number: "01",
    title: "View",
    description: "Browse 24 beautifully designed natural rubber mats, featuring a suede microfibre surface for extra grip.",
    color: "text-shaman-violet",
  },
  {
    number: "02", 
    title: "Buy",
    description: "$149 AUD per mat — delivery included in the price. No hidden fees.",
    color: "text-shaman-magenta",
  },
  {
    number: "03",
    title: "Delivery",
    description: "Generally 1 week in USA, 2 weeks in Europe, 3 weeks in Australia. Mats made in the USA.",
    color: "text-shaman-gold",
  },
  {
    number: "04",
    title: "Updates",
    description: "We keep you informed through the whole process — from order confirmation to delivery.",
    color: "text-shaman-teal",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Fractal grid background */}
      <FractalGrid />
      
      {/* Subtle orbs */}
      <div 
        className="floating-orb w-80 h-80 -top-40 right-1/4 bg-shaman-magenta/08"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="floating-orb w-64 h-64 -bottom-32 left-1/4 bg-shaman-teal/06"
        style={{ animationDelay: "5s" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
            Simple Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">How it </span>
            <span className="text-gradient italic">works</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group text-center"
            >
              {/* Step number with glow */}
              <span className={`block font-display text-5xl ${step.color}/20 mb-4 group-hover:opacity-100 opacity-60 transition-opacity duration-700`}>
                {step.number}
              </span>
              
              <h3 className={`font-display text-[2rem] md:text-[2.15rem] font-medium mb-3 tracking-tight ${step.color}`}>
                {step.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px bg-gradient-to-r from-shaman-violet/30 via-shaman-magenta/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;