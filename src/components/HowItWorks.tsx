const steps = [
  {
    number: "01",
    title: "Describe",
    description: "Share your vision in words—textures, colors, feelings, places. We listen.",
  },
  {
    number: "02", 
    title: "Generate",
    description: "Our AI interprets your intention into original artwork, uniquely yours.",
  },
  {
    number: "03",
    title: "Refine",
    description: "Adjust tones, details, composition. Iterate until it resonates.",
  },
  {
    number: "04",
    title: "Receive",
    description: "Printed on natural rubber with eco-inks. Delivered to your door.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 earth-bg" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-earth-sand/70 mb-6 font-body">
            The Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">From thought </span>
            <span className="text-gradient italic">to texture</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group text-center"
            >
              {/* Step number */}
              <span className="block font-display text-7xl text-earth-clay/15 mb-4 group-hover:text-earth-clay/25 transition-colors duration-700">
                {step.number}
              </span>
              
              <h3 className="font-display text-2xl font-medium text-foreground mb-3 tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px bg-gradient-to-r from-earth-clay/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;