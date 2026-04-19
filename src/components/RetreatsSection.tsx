import { MandalaDecoration } from "./SacredGeometry";
import retreatSriLanka from "@/assets/retreat-sri-lanka.jpg";
import retreatByronBay from "@/assets/retreat-byron-bay.jpg";
import retreatTulum from "@/assets/retreat-tulum.jpg";

const retreats = [
  {
    image: retreatSriLanka,
    title: "Sacred Sri Lanka",
    timing: "In 3 weeks",
    summary:
      "Reconnect with yourself on the golden shores of Sri Lanka. Daily yoga, meditation in ancient temples, and nourishing Ayurvedic cuisine — a week of deep restoration surrounded by tropical beauty.",
  },
  {
    image: retreatByronBay,
    title: "Byron Bay Awakening",
    timing: "In 8 weeks",
    summary:
      "Where the rainforest meets the sea. Join us for sunrise sessions on the headland, sound healing under the stars, and community gatherings in one of Australia's most iconic wellness destinations.",
  },
  {
    image: retreatTulum,
    title: "Tulum Transformation",
    timing: "In 3 months",
    summary:
      "Practice among ancient Mayan ruins overlooking the Caribbean. Cenote ceremonies, beachfront flows, and cacao rituals — a soul-stirring journey through Mexico's spiritual heartland.",
  },
];

const RetreatsSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />

      <MandalaDecoration className="-top-48 -left-48" size={450} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            Journey With Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">
            <span className="text-foreground">Upcoming </span>
            <span className="text-gradient italic">Retreats</span>
          </h2>
          <p className="text-foreground/50 font-body max-w-xl mx-auto">
            Immersive yoga experiences in the world's most inspiring locations.
          </p>
        </div>

        {/* Retreat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {retreats.map((retreat) => (
            <div
              key={retreat.title}
              className="group relative rounded-xl overflow-hidden bg-card/30 border border-white/5 hover:border-shaman-gold/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={retreat.image}
                  alt={retreat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-4 right-4 text-xs tracking-widest uppercase font-body text-shaman-gold bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  {retreat.timing}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {retreat.title}
                </h3>
                <p className="text-sm text-foreground/60 font-body leading-relaxed">
                  {retreat.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatsSection;
