import yogaMatMeditation from "@/assets/yoga-mat-5.jpg";

const AboutSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 earth-bg" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-earth-sand/70 mb-6 font-body">
              Philosophy
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-10 tracking-tight leading-tight">
              <span className="text-foreground">A mat should</span>
              <br />
              <span className="text-gradient italic">ground you.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                We started with a simple observation: the space you practice in matters. 
                The objects you surround yourself with carry intention.
              </p>
              
              <p>
                Every mat begins as a conversation—your words, interpreted through AI, 
                brought to life on natural materials. No two are the same. 
                Each carries the specific energy of the person who imagined it.
              </p>
              
              <p className="text-foreground/70">
                Natural rubber base. Microfiber suede surface. Water-based eco-inks. 
                Recyclable packaging. Because practice extends beyond the mat.
              </p>
            </div>
            
            {/* Minimal stats */}
            <div className="flex gap-14 mt-12 pt-12 border-t border-border/30">
              <div>
                <span className="block font-display text-3xl text-foreground">50K+</span>
                <span className="text-sm text-muted-foreground/60 font-body">mats created</span>
              </div>
              <div>
                <span className="block font-display text-3xl text-foreground">92</span>
                <span className="text-sm text-muted-foreground/60 font-body">countries</span>
              </div>
              <div>
                <span className="block font-display text-3xl text-foreground">100%</span>
                <span className="text-sm text-muted-foreground/60 font-body">eco-conscious</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-md overflow-hidden">
              <img
                src={yogaMatMeditation}
                alt="Meditation practice"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
            
            {/* Quote overlay */}
            <div className="absolute -bottom-6 -left-6 right-16 p-6 bg-card/95 border border-border/40 rounded-md">
              <p className="font-display text-base italic text-foreground/80">
                "The mat remembers your practice. Let it reflect your intention."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;