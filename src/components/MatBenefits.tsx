import yogiImage from "@/assets/yogi-mat-benefits.jpg";

const qualities = [
  {
    title: "Natural Rubber",
    description: "Sustainably harvested tree rubber provides superior grip and cushioning."
  },
  {
    title: "Non-Slip Surface",
    description: "Micro-texture technology keeps you grounded in every pose."
  },
  {
    title: "Eco-Friendly Inks",
    description: "Water-based, non-toxic inks that are safe for you and the planet."
  },
  {
    title: "Optimal Thickness",
    description: "5mm of cushioning protects joints while maintaining stability."
  },
];

const MatBenefits = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 terra-bg" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={yogiImage}
                alt="Yogi practicing on a custom-designed yoga mat in nature"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 tracking-tight text-foreground">
              Made for serious practice
            </h2>
            
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-10">
              Every mat is crafted with the same premium materials trusted by yoga 
              studios worldwide. The only difference is the design—yours.
            </p>
            
            {/* Qualities grid */}
            <div className="grid grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div key={index}>
                  <h3 className="font-display text-base font-medium text-foreground mb-2">
                    {quality.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Simple price note */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground font-body">
                Starting at $89 · Free worldwide shipping · 2-year warranty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatBenefits;