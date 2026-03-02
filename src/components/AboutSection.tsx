import aboutFoundersImage from "@/assets/about-founders.png";
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
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body text-center lg:text-left">
              Our Story
            </p>
            
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-10 tracking-tight leading-tight text-center lg:text-left">
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
          
          {/* Image */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-shaman-violet/20 via-shaman-magenta/15 to-shaman-gold/10 rounded-lg blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            
            <div className="relative rounded-md overflow-hidden">
              <img
                src={aboutFoundersImage}
                alt="Charly, Phil and Tym — the founders"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;