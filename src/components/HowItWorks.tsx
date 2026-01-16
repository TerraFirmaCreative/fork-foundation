const steps = [
  {
    number: "01",
    title: "Envision",
    description: "Close your eyes. Describe the patterns, colors, and feelings that arise. We receive them.",
    color: "text-shaman-violet",
  },
  {
    number: "02", 
    title: "Channel",
    description: "Our AI interprets your intention—translating the unseen into visible form.",
    color: "text-shaman-magenta",
  },
  {
    number: "03",
    title: "Refine",
    description: "Adjust the vision. Shift tones, deepen contrasts. Iterate until it resonates.",
    color: "text-shaman-gold",
  },
  {
    number: "04",
    title: "Manifest",
    description: "Printed on sacred rubber with plant inks. Delivered as a vessel for practice.",
    color: "text-shaman-teal",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Subtle orbs */}
      <div 
        className="floating-orb w-80 h-80 -top-40 right-1/4 bg-shaman-magenta/10"
        style={{ animationDelay: "2s" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
            The Ritual
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">From vision </span>
            <span className="text-gradient italic">to vessel</span>
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