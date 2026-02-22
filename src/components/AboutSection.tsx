import aboutFoundersImage from "@/assets/about-founders.png";
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
              Our Story
            </p>
            
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-10 tracking-tight leading-tight text-center lg:text-left">
              <span className="text-foreground">Three friends, </span><span className="text-gradient italic">one vision</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                It started with a conversation between three friends scattered across 
                the globe — Phil in Australia, Charly in the UK, and Tym in Poland.
                Despite the distance, they shared something deeper: a belief that art 
                and movement belong together.
              </p>
              
              <p>
                Each brought something different to the table. A love of design. A 
                passion for wellness. A quiet conviction that even a small shift — 
                ten minutes on the mat, one more stretch, one mindful breath — can 
                change the shape of a day.
              </p>

              <p>
                What began as a shared idea became a creative studio with no walls. 
                From three different time zones, they build mats that carry original 
                artwork edge to edge — pieces designed to make your practice space 
                feel like it belongs to you, and to gently remind you to show up for 
                yourself, even just a little more.
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