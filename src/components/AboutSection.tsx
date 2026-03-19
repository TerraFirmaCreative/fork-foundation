import { MandalaDecoration } from "./SacredGeometry";

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Sacred geometry decoration */}
      <MandalaDecoration className="-top-48 -left-48" size={500} />
      
      {/* Orbs */}
      <div 
        className="floating-orb w-72 h-72 -bottom-36 right-1/4 bg-shaman-ember/08"
        style={{ animationDelay: "5s" }}
      />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
          Our Story
        </p>
        
        <h2 className="font-display text-3xl md:text-5xl font-medium mb-10 tracking-tight leading-tight">
          <span className="text-foreground">Three friends. </span><span className="text-gradient italic">One shared idea.</span>
        </h2>
        
        <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>
            Unique Yoga Mats began as a conversation between three friends living 
            in different corners of the world — Phil in Australia, Charly in the 
            UK, and Tym in Poland.
          </p>
          
          <p>
            We believed something simple: art and movement belong together.
          </p>

          <p>
            We didn't want to create just another yoga mat. We wanted to create 
            pieces with original artwork — mats you'd genuinely want to leave out, 
            not tuck away.
          </p>

          <p>
            From three time zones, we design and build every mat with intention. 
            Each one printed edge to edge. Each one made to order. Each one 
            created to make your practice space feel personal.
          </p>

          <p>
            Because sometimes all it takes is one stretch, one breath, one moment 
            on the mat to shift your whole day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;