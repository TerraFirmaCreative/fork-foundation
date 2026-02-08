import { Star } from "lucide-react";
import { FractalGrid } from "./SacredGeometry";

const reviews = [
  {
    id: 1,
    name: "David M.",
    review: "I've been using my mat regularly for well over a year now and it still looks and feels incredible. The grip has held up beautifully, the surface hasn't worn, and it genuinely feels like a premium piece rather than just another yoga mat.",
  },
  {
    id: 2,
    name: "Sarah C.",
    review: "The design is stunning — even more so in real life. It has a quiet, considered feel to it and really elevates my practice space. It's one of those pieces you notice every time you unroll it.",
  },
  {
    id: 3,
    name: "Marcus W.",
    review: "What surprised me most is how comfortable and supportive it feels during practice. There's a softness to the surface but still plenty of grip, even in longer sessions.",
  },
  {
    id: 4,
    name: "Emma J.",
    review: "This mat feels thoughtfully made — from the weight and texture to the artwork itself. It's held up beautifully over time and still feels special to use.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Fractal background */}
      <FractalGrid />
      
      {/* Orbs */}
      <div 
        className="floating-orb w-64 h-64 bottom-20 -left-32 bg-shaman-teal/08"
        style={{ animationDelay: "3s" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
            Customer Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">Loved by </span>
            <span className="text-gradient italic">yogis worldwide</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group p-8 rounded-md bg-card/40 border border-border/30 hover:border-shaman-violet/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-shaman-gold/80 text-shaman-gold/80" />
                ))}
              </div>
              
              <p className="font-display text-lg text-foreground/90 italic leading-relaxed mb-8">
                "{review.review}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-shaman-violet/20 to-shaman-magenta/20 border border-shaman-violet/20" />
                <div>
                  <p className="text-sm font-medium text-foreground font-body">{review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ReviewsSection;