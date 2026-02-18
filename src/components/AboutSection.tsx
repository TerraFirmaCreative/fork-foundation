import aboutMatImage from "@/assets/about-mat.png";
import { MandalaDecoration } from "./SacredGeometry";

const AboutSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Sacred geometry decoration */}
      <MandalaDecoration className="-top-48 -left-48" size={500} />
      
      {/* Orbs */}
      <div 
        className="floating-orb w-72 h-72 -bottom-36 right-1/4 bg-shaman-ember/08"
        style={{ animationDelay: "5s" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body text-center lg:text-left">
              About Us
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-10 tracking-tight leading-tight text-center lg:text-left">
              <span className="text-foreground">Yoga mats where art meets</span>
               <br />
               <span className="text-gradient italic">movement.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Our collection brings original artwork into the space where you practice. 
                Each yoga mat is designed to add visual depth without distracting from 
                movement, breath, or focus.
              </p>
              
              <p>
                Drawing inspiration from geometry, nature, and subtle pattern, every 
                design is developed to feel distinctive while remaining calm and usable.
              </p>

              <p>
                Each mat is printed to order and made to support daily practice — balancing 
                form, function, and durability.
              </p>
            </div>
            
          </div>
          
          {/* Image */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-shaman-violet/20 via-shaman-magenta/15 to-shaman-gold/10 rounded-lg blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            
            <div className="relative rounded-md overflow-hidden">
              <img
                src={aboutMatImage}
                alt="Yoga practice on an artisan mat"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            
            {/* Quote overlay */}
            <div className="absolute -bottom-6 -left-6 right-16 p-6 bg-card/95 backdrop-blur-sm border border-border/40 rounded-md">
              <p className="font-display text-base italic text-foreground/80">
                "Art for your practice. Made with intention."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;