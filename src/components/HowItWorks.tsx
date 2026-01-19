const steps = [
  {
    number: "01",
    title: "Envision",
    description: "Describe the feeling, the colors, the imagery that speaks to your practice.",
  },
  {
    number: "02", 
    title: "Create",
    description: "Your vision becomes a unique design, shaped by intention and brought to life.",
  },
  {
    number: "03",
    title: "Refine",
    description: "Adjust and perfect until the design feels exactly right for you.",
  },
  {
    number: "04",
    title: "Receive",
    description: "Your mat arrives, printed on premium natural rubber. Ready for practice.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 terra-bg" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            How it works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center"
            >
              <span className="block font-display text-5xl text-terra-sand/15 mb-6">
                {step.number}
              </span>
              
              <h3 className="font-display text-xl font-medium mb-4 tracking-tight text-foreground">
                {step.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                {step.description}
              </p>
              
              {/* Subtle connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-terra-stone/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;