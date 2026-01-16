import { ImagineIcon, GenerateIcon, CustomizeIcon, ReceiveIcon } from "./PsychedelicIcons";

const steps = [
  {
    Icon: ImagineIcon,
    title: "Imagine",
    description: "Describe your vision using words, themes, or styles. Our AI understands your creative intent.",
    color: "from-psychedelic-purple to-psychedelic-pink",
    glowColor: "hsla(280, 80%, 65%, 0.4)",
  },
  {
    Icon: GenerateIcon,
    title: "Generate",
    description: "Watch as AI transforms your ideas into stunning, one-of-a-kind yoga mat designs in seconds.",
    color: "from-psychedelic-pink to-psychedelic-cyan",
    glowColor: "hsla(320, 70%, 55%, 0.4)",
  },
  {
    Icon: CustomizeIcon,
    title: "Customize",
    description: "Fine-tune colors, patterns, and details until your design feels perfectly aligned with you.",
    color: "from-psychedelic-cyan to-psychedelic-teal",
    glowColor: "hsla(200, 90%, 50%, 0.4)",
  },
  {
    Icon: ReceiveIcon,
    title: "Receive",
    description: "Your custom mat is printed on premium materials and delivered to your door within days.",
    color: "from-psychedelic-teal to-psychedelic-gold",
    glowColor: "hsla(45, 100%, 60%, 0.4)",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 cosmic-bg" />
      
      {/* Floating orbs */}
      <div 
        className="floating-orb w-96 h-96 -top-48 -left-48 bg-psychedelic-purple/20"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="floating-orb w-80 h-80 top-1/2 -right-40 bg-psychedelic-pink/15"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="floating-orb w-64 h-64 -bottom-32 left-1/4 bg-psychedelic-cyan/10"
        style={{ animationDelay: "4s" }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-psychedelic-gold bg-psychedelic-gold/10 rounded-full border border-psychedelic-gold/30">
            ✨ Simple 4-Step Process
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From imagination to your yoga practice in four magical steps
          </p>
        </div>
        
        {/* Steps container */}
        <div className="relative">
          {/* Connecting gradient line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-psychedelic-purple via-psychedelic-pink via-psychedelic-cyan to-psychedelic-gold opacity-30" />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"
              style={{ backgroundSize: "200% 100%" }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative text-center p-6 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/50 hover:bg-card/80 group-hover:scale-105">
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ 
                      boxShadow: `0 0 60px -10px ${step.glowColor}`,
                    }}
                  />
                  
                  {/* Step number with gradient ring */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${step.color} p-[3px] shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center p-4">
                        <step.Icon />
                      </div>
                    </div>
                    
                    {/* Floating step badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${step.color} opacity-50`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;