import { FractalGrid } from "./SacredGeometry";

const steps = [
  {
    number: "01",
    title: "Browse",
    description: "Explore our curated collection of beautiful yoga mat designs—from sacred geometry to cosmic art.",
    color: "text-shaman-violet",
  },
  {
    number: "02", 
    title: "Choose",
    description: "Find the design that speaks to your practice and personal style.",
    color: "text-shaman-magenta",
  },
  {
    number: "03",
    title: "Order",
    description: "Select your mat and complete your order with our secure checkout.",
    color: "text-shaman-gold",
  },
  {
    number: "04",
    title: "Receive",
    description: "Your chosen yoga mat is printed on premium natural rubber and shipped to your door.",
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
              <span className={`block font-display text-7xl ${step.color}/20 mb-4 group-hover:opacity-100 opacity-60 transition-opacity duration-700`}>
                {step.number}
              </span>
              
              <h3 className={`font-display text-2xl font-medium mb-3 tracking-tight ${step.color}`}>
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