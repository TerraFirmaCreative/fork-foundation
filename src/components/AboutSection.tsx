import yogaMatMeditation from "@/assets/yoga-mat-5.jpg";

const AboutSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Orbs */}
      <div 
        className="floating-orb w-72 h-72 -bottom-36 right-1/4 bg-shaman-ember/10"
        style={{ animationDelay: "5s" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
              Philosophy
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-10 tracking-tight leading-tight">
              <span className="text-foreground">Every mat is</span>
              <br />
              <span className="text-gradient italic">a medicine object.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                We believe the tools of practice carry energy. The patterns you move upon, 
                the colors that hold your gaze—they shape the container of your work.
              </p>
              
              <p>
                Each mat begins as an intention—your words, fed through AI trained on 
                sacred geometries and visionary art. What emerges is unique to you, 
                carrying the specific medicine of your imagination.
              </p>
              
              <p className="text-foreground/70">
                Natural tree rubber. Plant-derived inks. Biodegradable packaging. 
                We honor the earth that receives our practice.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex gap-14 mt-12 pt-12 border-t border-border/30">
              <div>
                <span className="block font-display text-3xl text-gradient">50K+</span>
                <span className="text-sm text-muted-foreground/60 font-body">visions manifested</span>
              </div>
              <div>
                <span className="block font-display text-3xl text-gradient">92</span>
                <span className="text-sm text-muted-foreground/60 font-body">countries</span>
              </div>
              <div>
                <span className="block font-display text-3xl text-gradient">100%</span>
                <span className="text-sm text-muted-foreground/60 font-body">earth-conscious</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-shaman-violet/20 via-shaman-magenta/15 to-shaman-gold/10 rounded-lg blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            
            <div className="relative rounded-md overflow-hidden">
              <img
                src={yogaMatMeditation}
                alt="Sacred practice"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            
            {/* Quote overlay */}
            <div className="absolute -bottom-6 -left-6 right-16 p-6 bg-card/95 backdrop-blur-sm border border-border/40 rounded-md">
              <p className="font-display text-base italic text-foreground/80">
                "The mat holds the imprint of your practice. Let it carry your medicine."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;