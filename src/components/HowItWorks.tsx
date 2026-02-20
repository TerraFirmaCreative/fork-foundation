import { FractalGrid } from "./SacredGeometry";

const steps = [
  {
    number: "01",
    title: "Browse the Range",
    color: "text-shaman-violet",
    lines: [
      "24 beautifully designed mats",
      "Natural rubber base",
      "Suede microfibre surface",
      "Extra grip for your practice",
    ],
  },
  {
    number: "02", 
    title: "Invest in Your Mat",
    color: "text-shaman-magenta",
    price: "$149 AUD per mat",
    lines: [
      "Delivery included in the price",
      "No hidden fees",
      "Secure checkout",
    ],
  },
  {
    number: "03",
    title: "Delivery Times",
    color: "text-shaman-gold",
    lines: [
      "USA — 1 week",
      "Europe — 2 weeks",
      "Australia — up to 3 weeks",
      "Mats made in Nevada, USA",
    ],
  },
  {
    number: "04",
    title: "We Keep You Updated",
    color: "text-shaman-teal",
    lines: [
      "We track your item",
      "Share updates with you",
      "From production to delivery",
    ],
  },
  {
    number: "05",
    title: "Become an Affiliate",
    color: "text-shaman-violet",
    lines: [
      "Share with friends",
      "Earn an income",
      "Join our affiliate program",
    ],
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
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
            Simple Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">How it </span>
            <span className="text-gradient italic">works</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group text-center flex flex-col"
            >
              {/* Step number */}
              <span className="block font-display text-5xl text-foreground/30 mb-4 group-hover:text-foreground/50 transition-colors duration-700">
                {step.number}
              </span>
              
              {/* Fixed height title area */}
              <div className="h-[5rem] md:h-[5.5rem] flex flex-col items-center justify-start">
                <h3 className={`font-display text-2xl md:text-[1.75rem] font-medium tracking-tight ${step.color}`}>
                  {step.title}
                </h3>
              </div>

              {step.price && (
                <p className="font-display text-xl md:text-2xl font-bold my-3 text-foreground">
                  {step.price}
                </p>
              )}
              
              <div className="space-y-1.5 mt-2">
                {step.lines.map((line, i) => (
                  <p key={i} className="text-sm text-foreground/70 font-body leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0.25rem)] w-[calc(100%-0.5rem)] h-px bg-gradient-to-r from-shaman-violet/30 via-shaman-magenta/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;