import yogaMatMeditation from "@/assets/yoga-mat-5.jpg";

const AboutSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 terra-bg" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-8 tracking-tight leading-tight text-foreground">
              Your mat, your practice
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                We believe your yoga mat should be more than equipment. It's the 
                foundation of your practice—a space that welcomes you back, day after day.
              </p>
              
              <p>
                That's why we let you design your own. Describe what speaks to you—nature, 
                geometry, color, feeling—and we bring it to life on premium materials 
                that match the dedication you bring to your practice.
              </p>
              
              <p className="text-foreground/60">
                Natural tree rubber · Eco-friendly inks · Ships worldwide
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={yogaMatMeditation}
                alt="Yoga practice on a custom mat"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;