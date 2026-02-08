import yogaMatMeditation from "@/assets/yoga-mat-5.jpg";
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
            <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
              About Us
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-10 tracking-tight leading-tight">
              <span className="text-foreground">Artisan yoga mats,</span>
              <br />
              <span className="text-gradient italic">crafted with intention.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Our collection features stunning, one-of-a-kind designs that transform 
                your practice space. Each mat showcases intricate cosmic patterns, 
                sacred geometry, and nature-inspired art.
              </p>
              
              <p>
                We carefully curate every design to bring beauty and inspiration to your 
                yoga journey. No mass production—each piece is a work of art.
              </p>
            </div>

            <p className="text-sm text-muted-foreground/60 mt-6 font-body">
              Premium natural rubber · Stable surface · Designed for daily practice
            </p>
            
          </div>
          
          {/* Image */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-shaman-violet/20 via-shaman-magenta/15 to-shaman-gold/10 rounded-lg blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            
            <div className="relative rounded-md overflow-hidden">
              <img
                src={yogaMatMeditation}
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