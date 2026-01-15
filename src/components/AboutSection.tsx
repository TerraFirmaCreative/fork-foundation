import yogaMatMeditation from "@/assets/yoga-mat-5.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              We believe your yoga practice is deeply personal — and your mat should be too. 
              Founded in 2023, we combine cutting-edge AI technology with premium materials 
              to create yoga mats as unique as the people who use them.
            </p>
            
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Every mat is printed on eco-friendly, non-slip natural rubber with a microfiber 
              suede top layer. We're committed to sustainability, using water-based inks and 
              recyclable packaging because caring for the earth is part of the yoga journey.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-foreground mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Mats Created</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-foreground mb-1">92</div>
                <div className="text-sm text-muted-foreground">Countries Shipped</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={yogaMatMeditation}
                alt="Meditation at sunset"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
