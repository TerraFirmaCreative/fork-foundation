import { Lightbulb, Palette, Package, Heart } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Imagine",
    description: "Describe your vision using words, themes, or styles. Our AI understands your creative intent.",
  },
  {
    icon: Palette,
    title: "Generate",
    description: "Watch as AI transforms your ideas into stunning, one-of-a-kind yoga mat designs in seconds.",
  },
  {
    icon: Heart,
    title: "Customize",
    description: "Fine-tune colors, patterns, and details until your design feels perfectly aligned with you.",
  },
  {
    icon: Package,
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
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
                  <step.icon className="w-8 h-8 text-foreground" />
                </div>
                
                <div className="absolute top-8 left-1/2 transform translate-x-8 hidden lg:block">
                  {index < steps.length - 1 && (
                    <div className="w-full h-0.5 bg-border" style={{ width: "calc(100% - 4rem)" }} />
                  )}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
