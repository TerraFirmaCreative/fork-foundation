import { ImagineIcon, GenerateIcon, CustomizeIcon, ReceiveIcon } from "./PsychedelicIcons";

const steps = [
  {
    Icon: ImagineIcon,
    title: "Imagine",
    description: "Describe your vision using words, themes, or styles. Our AI understands your creative intent.",
  },
  {
    Icon: GenerateIcon,
    title: "Generate",
    description: "Watch as AI transforms your ideas into stunning, one-of-a-kind yoga mat designs in seconds.",
  },
  {
    Icon: CustomizeIcon,
    title: "Customize",
    description: "Fine-tune colors, patterns, and details until your design feels perfectly aligned with you.",
  },
  {
    Icon: ReceiveIcon,
    title: "Receive",
    description: "Your custom mat is printed on premium materials and delivered to your door within days.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From imagination to your yoga practice in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary/50 p-3 shadow-soft group-hover:shadow-card transition-all duration-300 group-hover:scale-110">
                  <step.Icon />
                </div>
                
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-muted-foreground bg-muted rounded-full">
                  Step {index + 1}
                </span>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
