import yogaMatMeditation from "@/assets/yoga-mat-5.jpg";
import { Leaf, Globe, Heart } from "lucide-react";

const stats = [
  { 
    value: "50K+", 
    label: "Mats Created",
    icon: Heart,
    color: "text-psychedelic-pink",
    bgColor: "bg-psychedelic-pink/10",
    borderColor: "border-psychedelic-pink/30"
  },
  { 
    value: "92", 
    label: "Countries",
    icon: Globe,
    color: "text-psychedelic-cyan",
    bgColor: "bg-psychedelic-cyan/10",
    borderColor: "border-psychedelic-cyan/30"
  },
  { 
    value: "100%", 
    label: "Eco-Friendly",
    icon: Leaf,
    color: "text-psychedelic-teal",
    bgColor: "bg-psychedelic-teal/10",
    borderColor: "border-psychedelic-teal/30"
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cosmic-bg" />
      
      {/* Floating orbs */}
      <div 
        className="floating-orb w-80 h-80 -bottom-40 -right-40 bg-psychedelic-teal/15"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="floating-orb w-64 h-64 top-20 -left-32 bg-psychedelic-gold/10"
        style={{ animationDelay: "4s" }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-psychedelic-teal bg-psychedelic-teal/10 rounded-full border border-psychedelic-teal/30">
              🌿 Our Story
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              <span className="text-foreground">Crafted with</span>
              <br />
              <span className="text-gradient">Love & Purpose</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              We believe your yoga practice is deeply personal — and your mat should be too. 
              Founded in 2023, we combine cutting-edge AI technology with premium materials 
              to create yoga mats as unique as the people who use them.
            </p>
            
            <p className="text-foreground/70 mb-10 leading-relaxed">
              Every mat is printed on eco-friendly, non-slip natural rubber with a microfiber 
              suede top layer. We're committed to sustainability, using water-based inks and 
              recyclable packaging because caring for the earth is part of the yoga journey.
            </p>
            
            {/* Stats with icons */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className={`text-center p-4 rounded-2xl ${stat.bgColor} border ${stat.borderColor} backdrop-blur-sm transition-transform duration-300 hover:scale-105`}
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image with psychedelic frame */}
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-psychedelic-purple via-psychedelic-pink via-psychedelic-cyan to-psychedelic-gold rounded-3xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500 animate-gradient-shift" style={{ backgroundSize: "300% 300%" }} />
            
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={yogaMatMeditation}
                alt="Meditation at sunset"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50">
                <p className="text-sm text-foreground/90 italic">
                  "Every mat tells a story — yours should be as unique as your journey."
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-psychedelic-purple to-psychedelic-pink opacity-50 -z-10" />
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-psychedelic-cyan to-psychedelic-teal opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;