import { MandalaDecoration } from "./SacredGeometry";

const benefits = [
  {
    title: "Natural Rubber Base",
    description: "Stays put on any surface, so you can focus on your practice, not your mat.",
    tag: "NON-SLIP",
  },
  {
    title: "Microfibre Suede Top",
    description: "Soft underfoot and gets grippier as you warm up — sweat activates the surface.",
    tag: "GRIP IMPROVES WITH USE",
  },
  {
    title: "3mm Balanced Thickness",
    description: "Enough cushion to support your joints, thin enough to keep you connected to the floor.",
    tag: "3MM THICK",
  },
  {
    title: "Edge-to-Edge Print",
    description: "Full artwork across every centimetre, sublimation printed for vivid, permanent colour.",
    tag: "DYE SUBLIMATION",
  },
  {
    title: "Lightweight & Rollable",
    description: "1.76kg — light enough to carry anywhere, tough enough for daily practice.",
    tag: "1.76KG",
  },
  {
    title: "Made to Order",
    description: "Each mat is printed individually for you. Ships within 5–7 business days of your order.",
    tag: "YOUR DESIGN, YOUR MAT",
  },
];

const stats = [
  { value: "178cm", label: "Length" },
  { value: "66cm", label: "Width" },
  { value: "3mm", label: "Thickness" },
  { value: "1.76kg", label: "Weight" },
  { value: "Suede", label: "Top Layer" },
  { value: "Rubber", label: "Base" },
];

const MatBenefits = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />

      <MandalaDecoration className="-bottom-48 -right-48" size={500} />

      <div
        className="floating-orb w-72 h-72 -top-36 left-1/4 bg-shaman-teal/08"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            The Mats
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4 tracking-tight leading-tight">
            <span className="text-foreground">Beautiful design.</span>
            <span className="hidden md:inline"> </span>
            <span className="block md:inline text-gradient italic">Built for practice.</span>
          </h2>
        </div>

        {/* Spec cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative flex gap-5 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-5 md:p-6 hover:border-shaman-violet/40 hover:bg-card/60 transition-all duration-300"
            >
              <div className="w-1 rounded-full bg-gradient-to-b from-shaman-violet via-shaman-magenta to-shaman-gold opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-1.5 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-base text-muted-foreground font-body leading-relaxed mb-3">
                  {benefit.description}
                </p>
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-body px-2.5 py-1 rounded-full border border-shaman-violet/30 bg-shaman-violet/10 text-shaman-gold/90">
                  {benefit.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 md:my-12 h-px bg-gradient-to-r from-transparent via-shaman-violet/30 to-transparent" />

        {/* Stats bar */}
        <div className="grid grid-cols-3 md:grid-cols-6 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center px-3 py-5 md:py-6 ${
                i % 3 !== 2 ? "border-r border-border/30" : ""
              } ${i < 3 ? "border-b border-border/30 md:border-b-0" : ""} ${
                i === 5 ? "border-r-0" : ""
              } md:border-r md:border-border/30 ${i === 5 ? "md:border-r-0" : ""}`}
            >
              <div className="font-display text-2xl md:text-3xl font-medium text-foreground leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-shaman-gold/70 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatBenefits;
