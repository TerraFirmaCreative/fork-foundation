import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Los Angeles",
    review: "I described morning fog over the ocean—what arrived was exactly that feeling. Grounding in a way I didn't expect from a product.",
  },
  {
    id: 2,
    name: "David C.",
    location: "Vancouver",
    review: "As an instructor, I've used countless mats. This is the first that feels like mine. The texture, the grip, the intention behind it—it all translates.",
  },
  {
    id: 3,
    name: "Emma J.",
    location: "Stockholm",
    review: "I typed 'northern forest at dusk' and somehow they understood. The colors, the mood. It's become a ritual object for me.",
  },
  {
    id: 4,
    name: "Marcus W.",
    location: "London",
    review: "Skeptical of AI-anything. But this was different—felt collaborative, not automated. The final piece has soul.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 earth-bg" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-earth-sand/70 mb-6 font-body">
            From the Community
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">Words from </span>
            <span className="text-gradient italic">practitioners</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group p-8 rounded-md bg-card/40 border border-border/30 hover:border-earth-clay/20 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-earth-sand/80 text-earth-sand/80" />
                ))}
              </div>
              
              <p className="font-display text-lg text-foreground/90 italic leading-relaxed mb-8">
                "{review.review}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-earth-clay/10 border border-earth-clay/15" />
                <div>
                  <p className="text-sm font-medium text-foreground font-body">{review.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Rating summary */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground font-body">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-earth-sand/80 text-earth-sand/80" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9</span>
            <span className="text-muted-foreground/60">from 2,400+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;